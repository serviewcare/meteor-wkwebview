## Quick branch from praciticalmeteor for meteor 1.2 support

## silvervue:wkwebview

Switches your meteor ios app to WKWeb​View on iOS 8+, which is significantly faster and better than the old, clunky, memory leaking UIWebView.

## Installation

```
# If you have added cordova:com.meteor.cordova-update for previous meteor releases, you must remove it. 1.2 supports a pluggable webview in its default cordova.
It helps to rm -rf .meteor/local/cordova-build as well as build plugins iso-packs plugin-cache, etc etc.. or else it's possible you will have left
over state that may effect your project.

# This package simply includes the wkwebview cordova plugin
meteor add silvervue:wkwebview
```

## Important note about filling issues

This package is using a fork of Telerik's wkwebview cordova plugin. If you have non-meteor related iOS issues, please check in [their repo](https://github.com/Telerik-Verified-Plugins/WKWebView) first if a similar issue has been filed, and once the issue is fixed, I will merge the fix into my fork. So, please only create "please merge" issues here after they have been fixed in their repo.
