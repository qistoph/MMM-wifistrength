/* global Module */

/* Magic Mirror
 * Module: wifistrength
 *
 */

Module.register("wifistrength",{
	defaults: {
		device: 'wlan0',
		reloadInterval: 100000
	},

	getScripts: function() {
		return [];
	},

	getStyles: function() {
		return ['wifistrength.css'];
	},

	init: function() {
		this.loaded = false;
		this.signalStrength = undefined;
	},

	start: function() {
		Log.info("Starting module: " + this.name);
		var self = this;
		setInterval(function() {
			self.updateDom();
		}, this.config.reloadInterval);

		this.addDevice(this.config.device, this.config.reloadInterval);
	},

	socketNotificationReceived: function(notification, payload) {
		Log.info("Received: " + notification, payload);
		if (notification === "WIFI_SIGNAL_STRENGTH") {
			if (this.hasDevice(payload.device)) {
				this.signalStrength = payload.signalStrength;
				this.loaded = true;
			}

			this.updateDom();
		} else if(notification === "FETCH_ERROR") {
			Log.error("WifiStrength error. Could not fetch strength: ", payload);
		} else {
			Log.log("WifiStrength received an unknown socket notification: " + notification);
		}

	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.className = 'wrapper';
		if (this.loaded) {
			var strength = 0; // 0 - 3
			if (this.signalStrength > -67) {
				strength = 3;
			} else if(this.signalStrength > -70) {
				strength = 2;
			} else if(this.signalStrength > -80) {
				strength = 1;
			}
			wrapper.style.backgroundPositionX = (strength * 100 / 3) + "%"; 

			this.show();
		} else {
			wrapper.innerText = '...';
			wrapper.style.backgroundPositionX = "200%";
		}
		return wrapper;
	},

	addDevice: function(device, reloadInterval) {
		this.sendSocketNotification("ADD_WIFI_DEVICE", {
			device: device,
			reloadInterval: reloadInterval
		});
	},

	hasDevice: function(device) {
		if(this.config.device === device) {
			return true;
		}
		return false;
	},

});
