# WifiStrength - MagicMirror² module

[![Build Status](https://travis-ci.org/qistoph/MMM-wifistrength.svg?branch=master)](https://travis-ci.org/qistoph/MMM-wifistrength)

This is a module for [MagicMirror²](https://github.com/MichMich/MagicMirror) to
show the strength of your WiFi signal.

## Installing the module

To install the module, just clone this repository to your __modules__ folder and
install the dependencies:

````bash
git clone 'https://github.com/qistoph/MMM-wifistrength.git' 'wifistrength'
cd wifistrength
npm install
````

## Updating the module

Pull the updates from git and update the dependencies in the module folder:

````bash
cd wifistrength
git pull
npm install
````

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:

```javascript
modules: [
  {
    module: 'wifistrength',
    position: 'top_center',
    config: {
      device: 'wlan0'
    }
  }
]
```

## Configuration options

The following properties can be configured:

<table width="100%">
  <thead>
    <tr>
      <th>Option</th>
      <th width="100%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>device</code></td>
      <td>The wlan-interface to get the signal strength for.<br>
      <br><b>Default value:</b> <code>wlan0</code></td>
    </tr>
    <tr>
      <td><code>reloadInterval</code></td>
      <td>Number of milliseconds between refresh.<br>
      <br><b>Default value:</b> <code>120000</code> (2 minutes)</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>The size of the icon to show.<br>
      <br><b>Default value:</b> <code>40</code></td>
    </tr>
  </tbody>
</table>
