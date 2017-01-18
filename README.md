# WifiStrength - MagicMirror² module

[![Build Status](https://travis-ci.org/qistoph/MMM-wifistrength.svg?branch=master)](https://travis-ci.org/qistoph/MMM-wifistrength)

This is a module for [MagicMirror²](https://github.com/MichMich/MagicMirror) to
show the strength of your WiFi signal.

![Example Visualization](.previews/wifistrength.png)

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

Option            | Description
----------------- | ------------
`device`          | The wlan-interface to get the signal strength for.<br>**Default value:** `wlan0`
`realoadInterval` | Number of milliseconds between refresh.<br>**Default value:** `120000` (2 minutes)
`size`            | The size of the icon to show.<br>**Default value:** `40`
