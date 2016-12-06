var NodeHelper = require("node_helper");
var iwconfig = require('wireless-tools/iwconfig');

module.exports = NodeHelper.create({
	// Override start method.
	start: function() {
		var self = this;
		var events = [];
		this.devices = [];

		console.log("Starting node helper for: " + this.name);
	},

	// Override socketNotificationReceived method.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "ADD_WIFI_DEVICE") {
			//console.log("ADD_WIFI_DEVICE: ", payload);
			this.addWifiDevice(payload.device, payload.reloadInterval);
		}
	},

	addWifiDevice: function(device, reloadInterval) {
		fetcher = {
			fetch: function() {
				var self = this;
				iwconfig.status(this.device, function(err, status) {
					if (err !== null) {
						self.module.sendSocketNotification('FETCH_ERROR', {
							device: self.device,
							err: err
						});
					} else {
						self.module.sendSocketNotification("WIFI_SIGNAL_STRENGTH", {
							device: self.device,
							signalStrength: status.signal
						});
					}
				});
			},

			start: function(module, device, reloadInterval) {
				this.module = module;
				this.device = device;

				var self = this;
				this.reloadTimer = setTimeout(function(){
					self.fetch();
				}, this.reloadInterval);
			},
		}

		fetcher.start(this, device, reloadInterval);
	}

});
