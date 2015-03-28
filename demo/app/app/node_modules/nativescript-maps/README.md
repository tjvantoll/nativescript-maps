# NativeScript Maps

A NativeScript module for using native map APIs. This module is currently limited—it only supports `latitude` and `longitude` attributes and only works on iOS.

## Installation

Run `npm install nativescript-maps --save` from your project's inner `app` directory:

```
.
├── app
│   ├── app <------------------------ run npm install from here
│   │   ├── app.css
│   │   ├── app.js
│   │   ├── bootstrap.js
│   │   ├── main-page.js
│   │   ├── main-page.xml
│   │   ├── node_modules
│   │   │   └── nativescript-maps <-- The install will place the module's code here
│   │   │       └── ...
│   │   └── package.json <------------The install will register “nativescript-maps as a dependency here
│   └── tns_modules
│       └── ...
└── platforms
    ├── android
    └── ios
```

As is, using npm within NativeScript is still experimental, so it's possible that you'll run into some issues. A more complete solution is in the works, and you can check out [this issue](https://github.com/NativeScript/nativescript-cli/issues/362) for an update on its progress and to offer feedback.

If npm doesn't end up working for you, you can just copy and paste this repo's maps.ios.js file into your app and reference it directly.

## Usage

```
<Page xmlns:maps="app/node_module/maps/maps">
	<maps:Map latitude="42.7" longitude="23.3" />
</Page>
```