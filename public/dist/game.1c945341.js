// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"gP97P":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "3db301c01c945341";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            if (err.message) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"EhQIl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vanjsCore = require("vanjs-core");
var _vanjsCoreDefault = parcelHelpers.interopDefault(_vanjsCore);
var _canvas = require("@rive-app/canvas");
var _howler = require("howler");
//var lasSound = new Howl({ src:[new URL('assets/sounds/weapon_laser_009.wav',import.meta.url)],html5:true});
//var hitSound = new Howl({ src:[new URL('assets/sounds/explosion_small_015.wav',import.meta.url)],html5:true});
var _socketIoClient = require("socket.io-client");
var _configJs = require("./utils/config.js");
var _configJsDefault = parcelHelpers.interopDefault(_configJs);
console.log('connected');
console.log('v 0.05');
const { a, div, li, p, ul, img } = (0, _vanjsCoreDefault.default).tags;
const rive = require("65891436ea27544f");
const sounds = require("49df8d53c178a47e");
const qs = require("4a948c8cc6fee143");
const socket = (0, _socketIoClient.io)((0, _configJsDefault.default).SOCKET_URL);
//const socket = io('http://localhost:3000');
//alert(CONFIG.SOCKET_URL);
const hitpointsRive = './assets/rive/hitpoints_core.riv';
const canvas = document.createElement('canvas');
canvas.width = 130;
canvas.height = 320;
document.body.appendChild(canvas);
let username = 'user';
let room = '';
let targetName = '';
let hp = 100;
let displayHP = 0;
let laserDamage = 1;
let damageCount = 0;
let timeoutId;
const damageCountTimeout = 3000; //ms for damage cleartimeout
let damageCountTimer;
let hitTrigger;
let roomName = 'Z1X0';
let dmgIndicatorBool;
let targetInputsLeft = [];
let targetInputsRight = [];
let targetBool = false;
setTimeout(()=>{
    let iframeBG = document.getElementById('iframeBG');
    let iframeDocument = iframeBG.contentDocument || iframeBG.contentWindow.document;
    let splineLogo = iframeDocument.getElementsByClassName('spline-watermark');
    console.log(splineLogo[0]);
    splineLogo.remove();
}, 1000);
//splineLogo[0].remove();
const loginData = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});
if (loginData.username != undefined) {
    username = loginData.username;
    room = loginData.roomId;
    roomName = room;
    hp = parseInt(loginData.initialHealth, 10);
    targetName = ' ';
}
//Gameplay Variables
socket.emit('joinRoom', {
    'username': username,
    'room': room
});
const riveInstance = new rive.Rive({
    src: new URL(require("e2f054360a711c24")),
    canvas: canvas,
    autoplay: true,
    artboard: "Main",
    stateMachines: "Main_StateMachine",
    onLoad: ()=>{
        riveInstance.resizeDrawingSurfaceToCanvas();
        const inputs = riveInstance.stateMachineInputs("Main_StateMachine");
        // Set Initial States and Grab References to Triggers
        //setRiveText("HP",hp.toString());
        setRiveText("HP", '0');
        setRiveText("RoomID", 'ROOM ' + roomName);
        setRiveText("TargetName", 'TARGET: ' + targetName);
        //setRiveText('DamageCount','');
        hitTrigger = inputs.find((input)=>input.name === "Hit");
        dmgIndicatorBool = inputs.find((input)=>input.name === "DmgIndicator");
        randomTargetButtonChange(1); //start the random button flickering animations
        console.log('found all triggers');
        PowerOn();
    }
});
function resizeCanvas() {
    riveInstance.resizeDrawingSurfaceToCanvas();
}
//Rive Setup
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Call initially to set the size
riveInstance.on((0, _canvas.EventType).RiveEvent, onRiveEventReceived);
//Rive Util
function setRiveText(runName, text) {
    riveInstance.setTextRunValue(runName, text);
}
function onRiveEventReceived(riveEvent) {
    const eventData = riveEvent.data;
    console.log('Recieved Rive Event!: ', eventData.name);
    if (eventData.name == 'FireEvent') Fire();
    else if (eventData.name == 'hpOn') fillHP();
    else if (eventData.name == 'ShieldUpEvent') ShieldUp();
    else if (eventData.name == 'ShieldDownEvent') ShieldDown();
    else if (eventData.name == 'ReticleHoverOn') {
        console.log('reticleHover');
        sounds.reticleHoverOn.play();
    } else if (eventData.name == 'ReticleHoverOff') sounds.reticleHoverOff.play();
    else if (eventData.name == 'ShieldHoverOn') sounds.shieldHoverOn.play();
    else if (eventData.name == 'ShieldHoverOff') sounds.shieldHoverOff.play();
    else if (eventData.name == 'hpHover') sounds.hpHoverOn.play();
}
//Socket Logic
socket.on('receiveLaser', (data)=>{
    console.log('Received laser data: ', data.damage);
    let hitTimeout = setTimeout(()=>Hit(data.damage), 700);
});
socket.on('userJoined', (data)=>{
    console.log(`user joined room. welcome , ${data.username}`);
    targetName = data.username;
    setRiveText('TargetName', 'TARGET ' + data.username);
    sounds.playerJoin.play();
});
socket.on('roomData', (data)=>{
    console.log('recieved room data');
    targetName = data.player1; //gets set later when rive loads
//setRiveText('TargetName','TARGET '+data.player1);
});
//Gameplay Functions
function PowerOn() {
    sounds.powerOn.play();
}
function Fire() {
    targetBool = !targetBool;
    //toggleTargetButtons(0,targetBool);
    //riveInstance.setBooleanStateAtPath('On',true,'FireBoard/Matrix1/TargetingButton16');
    targetingPatternAnimate();
    addDamageCount();
    playRandomSound(sounds.lasSoundList);
    socket.emit('fireLaser', {
        'username': username,
        'room': room,
        'damage': laserDamage
    });
}
//targeting pattern functions
function toggleTargetButtons(num, thisBool, side) {
    // 1:left, 2:right, 3:both
    if (side == 0 || side == 3) riveInstance.setBooleanStateAtPath('On', thisBool, `FireBoard/Matrix1/TargetingButton${num}`);
    if (side == 1 || side == 3) riveInstance.setBooleanStateAtPath('On', thisBool, `FireBoard/Matrix2/TargetingButton${num}`);
}
function targetingPatternAnimate() {
    const vertical = [
        [
            9,
            14
        ],
        [
            4,
            8,
            13,
            18
        ],
        [
            3,
            7,
            12,
            17
        ],
        [
            2,
            6,
            11,
            16
        ],
        [
            1,
            5,
            10,
            15
        ]
    ];
    for(var i = 0; i < vertical.length; i++)vertical[i].forEach((item)=>{
        setTimeout(()=>{
            toggleTargetButtons(item, true, 3);
        }, (i + 1) * 10);
        setTimeout(()=>{
            toggleTargetButtons(item, false, 3);
        }, (i + 1) * (220 - i * 10));
    });
}
function randomTargetButtonChange(index) {
    let sideNum = Math.floor(Math.random() * 2);
    let ranIndex = randomIntRange(1, 17);
    let onOffRan = Math.floor(Math.random() * 2);
    if (onOffRan == 1) onOffRan = true;
    else onOffRan = false;
    toggleTargetButtons(index, onOffRan, sideNum); // turn off or on a random button, then set up the timer for the next one
    setTimeout(()=>{
        randomTargetButtonChange(ranIndex);
    }, 300);
}
function randomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Hit(damage) {
    hp -= damage; //Deal Damage
    hitTrigger.fire(); //Signal Rive File to play hit Animation
    playRandomSound(sounds.hitSoundList);
    setRiveText("HP", hp.toString()); //update HP Text
    console.log('hp is now: ', hp);
}
function ShieldUp() {
    hp = hp + 1;
    setRiveText("HP", hp.toString());
    sounds.shield1.play();
    console.log('shield Up!' + hp);
}
function ShieldDown() {
    hp = hp - 1;
    console.log('shield Down!');
    setRiveText("HP", hp.toString());
    sounds.shieldDown.play();
}
function addDamageCount() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(damageCountClear, damageCountTimeout);
    damageCount += 1;
    setRiveText('DamageCount', `+[${damageCount}]`);
    dmgIndicatorBool.value = true;
}
function damageCountClear() {
    damageCount = 0;
    console.log('cleared');
    //setRiveText('DamageCount','');
    dmgIndicatorBool.value = false;
}
function fillHP() {
    if (displayHP < hp) {
        displayHP += 1;
        setRiveText("HP", displayHP.toString());
        setTimeout(()=>{
            fillHP();
        }, 10);
    }
}
function playRandomSound(soundList) {
    //accepts an array of howler sound objects
    let randomIndex = Math.floor(Math.random() * soundList.length);
    soundList[randomIndex].rate = Math.random() * 1.4;
    soundList[randomIndex].play();
} /*
//IMPORTANT RIVE NOTES
    riveInstance.fireStateAtPath('LaserIn','Shipscreen');  //fires a trigger on a nested artboard ('triggername','artboardname')
    hitTrigger = inputs.find((input) => input.name === "Hit");  // grab reference to trigger to later use with hitTrigger.fire() , name must be set as 'export' in the riv file
    
    riveInstance.on(EventType.RiveEvent,onRiveEventReceived);  //Sets up a listener for event triggers, assign a callback method (example:onRiveEventRecieved)

*/ 

},{"vanjs-core":"1K7LC","65891436ea27544f":"afOKl","@rive-app/canvas":"afOKl","49df8d53c178a47e":"7E6YN","4a948c8cc6fee143":"2j5W2","howler":"go5Yk","socket.io-client":"24OPJ","./utils/config.js":"lWANB","e2f054360a711c24":"fwvO9","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1K7LC":[function(require,module,exports,__globalThis) {
// This file consistently uses `let` keyword instead of `const` for reducing the bundle size.
// Global variables - aliasing some builtin symbols to reduce the bundle size.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let protoOf = Object.getPrototypeOf;
let changedStates, derivedStates, curDeps, curNewDerives, alwaysConnectedDom = {
    isConnected: 1
};
let gcCycleInMs = 1000, statesToGc, propSetterCache = {};
let objProto = protoOf(alwaysConnectedDom), funcProto = protoOf(protoOf), _undefined;
let addAndScheduleOnFirst = (set, s, f, waitMs)=>(set ?? (setTimeout(f, waitMs), new Set)).add(s);
let runAndCaptureDeps = (f, deps, arg)=>{
    let prevDeps = curDeps;
    curDeps = deps;
    try {
        return f(arg);
    } catch (e) {
        console.error(e);
        return arg;
    } finally{
        curDeps = prevDeps;
    }
};
let keepConnected = (l)=>l.filter((b)=>b._dom?.isConnected);
let addStatesToGc = (d)=>statesToGc = addAndScheduleOnFirst(statesToGc, d, ()=>{
        for (let s of statesToGc)s._bindings = keepConnected(s._bindings), s._listeners = keepConnected(s._listeners);
        statesToGc = _undefined;
    }, gcCycleInMs);
let stateProto = {
    get val () {
        curDeps?._getters?.add(this);
        return this.rawVal;
    },
    get oldVal () {
        curDeps?._getters?.add(this);
        return this._oldVal;
    },
    set val (v){
        curDeps?._setters?.add(this);
        if (v !== this.rawVal) {
            this.rawVal = v;
            this._bindings.length + this._listeners.length ? (derivedStates?.add(this), changedStates = addAndScheduleOnFirst(changedStates, this, updateDoms)) : this._oldVal = v;
        }
    }
};
let state = (initVal)=>({
        __proto__: stateProto,
        rawVal: initVal,
        _oldVal: initVal,
        _bindings: [],
        _listeners: []
    });
let bind = (f, dom)=>{
    let deps = {
        _getters: new Set,
        _setters: new Set
    }, binding = {
        f
    }, prevNewDerives = curNewDerives;
    curNewDerives = [];
    let newDom = runAndCaptureDeps(f, deps, dom);
    newDom = (newDom ?? document).nodeType ? newDom : new Text(newDom);
    for (let d of deps._getters)deps._setters.has(d) || (addStatesToGc(d), d._bindings.push(binding));
    for (let l of curNewDerives)l._dom = newDom;
    curNewDerives = prevNewDerives;
    return binding._dom = newDom;
};
let derive = (f, s = state(), dom)=>{
    let deps = {
        _getters: new Set,
        _setters: new Set
    }, listener = {
        f,
        s
    };
    listener._dom = dom ?? curNewDerives?.push(listener) ?? alwaysConnectedDom;
    s.val = runAndCaptureDeps(f, deps, s.rawVal);
    for (let d of deps._getters)deps._setters.has(d) || (addStatesToGc(d), d._listeners.push(listener));
    return s;
};
let add = (dom, ...children)=>{
    for (let c of children.flat(Infinity)){
        let protoOfC = protoOf(c ?? 0);
        let child = protoOfC === stateProto ? bind(()=>c.val) : protoOfC === funcProto ? bind(c) : c;
        child != _undefined && dom.append(child);
    }
    return dom;
};
let tag = (ns, name, ...args)=>{
    let [{ is, ...props }, ...children] = protoOf(args[0] ?? 0) === objProto ? args : [
        {},
        ...args
    ];
    let dom = ns ? document.createElementNS(ns, name, {
        is
    }) : document.createElement(name, {
        is
    });
    for (let [k, v1] of Object.entries(props)){
        let getPropDescriptor = (proto)=>proto ? Object.getOwnPropertyDescriptor(proto, k) ?? getPropDescriptor(protoOf(proto)) : _undefined;
        let cacheKey = name + "," + k;
        let propSetter = propSetterCache[cacheKey] ??= getPropDescriptor(protoOf(dom))?.set ?? 0;
        let setter = k.startsWith("on") ? (v1, oldV)=>{
            let event = k.slice(2);
            dom.removeEventListener(event, oldV);
            dom.addEventListener(event, v1);
        } : propSetter ? propSetter.bind(dom) : dom.setAttribute.bind(dom, k);
        let protoOfV = protoOf(v1 ?? 0);
        k.startsWith("on") || protoOfV === funcProto && (v1 = derive(v1), protoOfV = stateProto);
        protoOfV === stateProto ? bind(()=>(setter(v1.val, v1._oldVal), dom)) : setter(v1);
    }
    return add(dom, children);
};
let handler = (ns)=>({
        get: (_, name)=>tag.bind(_undefined, ns, name)
    });
let update = (dom, newDom)=>newDom ? newDom !== dom && dom.replaceWith(newDom) : dom.remove();
let updateDoms = ()=>{
    let iter = 0, derivedStatesArray = [
        ...changedStates
    ].filter((s)=>s.rawVal !== s._oldVal);
    do {
        derivedStates = new Set;
        for (let l of new Set(derivedStatesArray.flatMap((s)=>s._listeners = keepConnected(s._listeners))))derive(l.f, l.s, l._dom), l._dom = _undefined;
    }while (++iter < 100 && (derivedStatesArray = [
        ...derivedStates
    ]).length);
    let changedStatesArray = [
        ...changedStates
    ].filter((s)=>s.rawVal !== s._oldVal);
    changedStates = _undefined;
    for (let b of new Set(changedStatesArray.flatMap((s)=>s._bindings = keepConnected(s._bindings))))update(b._dom, bind(b.f, b._dom)), b._dom = _undefined;
    for (let s of changedStatesArray)s._oldVal = s.rawVal;
};
exports.default = {
    tags: new Proxy((ns)=>new Proxy(tag, handler(ns)), handler()),
    hydrate: (dom, f)=>update(dom, bind(f, dom)),
    add,
    state,
    derive
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"afOKl":[function(require,module,exports,__globalThis) {
(function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, ()=>{
    return /******/ (()=>{
        /******/ "use strict";
        /******/ var __webpack_modules__ = [
            ,
            /* 1 */ /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ "default": ()=>__WEBPACK_DEFAULT_EXPORT__
                });
                var Rive = (()=>{
                    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
                    return function(moduleArg = {}) {
                        var m = moduleArg, aa, ba;
                        m.ready = new Promise((a, b)=>{
                            aa = a;
                            ba = b;
                        });
                        function fa() {
                            function a(g) {
                                const n = d;
                                c = b = 0;
                                d = new Map();
                                n.forEach((p)=>{
                                    try {
                                        p(g);
                                    } catch (l) {
                                        console.error(l);
                                    }
                                });
                                this.ob();
                                e && e.Tb();
                            }
                            let b = 0, c = 0, d = new Map(), e = null, f = null;
                            this.requestAnimationFrame = function(g) {
                                b || (b = requestAnimationFrame(a.bind(this)));
                                const n = ++c;
                                d.set(n, g);
                                return n;
                            };
                            this.cancelAnimationFrame = function(g) {
                                d.delete(g);
                                b && 0 == d.size && (cancelAnimationFrame(b), b = 0);
                            };
                            this.Rb = function(g) {
                                f && (document.body.remove(f), f = null);
                                g || (f = document.createElement("div"), f.style.backgroundColor = "black", f.style.position = "fixed", f.style.right = 0, f.style.top = 0, f.style.color = "white", f.style.padding = "4px", f.innerHTML = "RIVE FPS", g = function(n) {
                                    f.innerHTML = "RIVE FPS " + n.toFixed(1);
                                }, document.body.appendChild(f));
                                e = new function() {
                                    let n = 0, p = 0;
                                    this.Tb = function() {
                                        var l = performance.now();
                                        p ? (++n, l -= p, 1000 < l && (g(1000 * n / l), n = p = 0)) : (p = l, n = 0);
                                    };
                                }();
                            };
                            this.Ob = function() {
                                f && (document.body.remove(f), f = null);
                                e = null;
                            };
                            this.ob = function() {};
                        }
                        function ha(a) {
                            console.assert(!0);
                            const b = new Map();
                            let c = -Infinity;
                            this.push = function(d) {
                                d = d + ((1 << a) - 1) >> a;
                                b.has(d) && clearTimeout(b.get(d));
                                b.set(d, setTimeout(function() {
                                    b.delete(d);
                                    0 == b.length ? c = -Infinity : d == c && (c = Math.max(...b.keys()), console.assert(c < d));
                                }, 1000));
                                c = Math.max(d, c);
                                return c << a;
                            };
                        }
                        const ia = m.onRuntimeInitialized;
                        m.onRuntimeInitialized = function() {
                            ia && ia();
                            let a = m.decodeAudio;
                            m.decodeAudio = function(e, f) {
                                e = a(e);
                                f(e);
                            };
                            let b = m.decodeFont;
                            m.decodeFont = function(e, f) {
                                e = b(e);
                                f(e);
                            };
                            const c = m.FileAssetLoader;
                            m.ptrToAsset = (e)=>{
                                let f = m.ptrToFileAsset(e);
                                return f.isImage ? m.ptrToImageAsset(e) : f.isFont ? m.ptrToFontAsset(e) : f.isAudio ? m.ptrToAudioAsset(e) : f;
                            };
                            m.CustomFileAssetLoader = c.extend("CustomFileAssetLoader", {
                                __construct: function({ loadContents: e }) {
                                    this.__parent.__construct.call(this);
                                    this.Gb = e;
                                },
                                loadContents: function(e, f) {
                                    e = m.ptrToAsset(e);
                                    return this.Gb(e, f);
                                }
                            });
                            m.CDNFileAssetLoader = c.extend("CDNFileAssetLoader", {
                                __construct: function() {
                                    this.__parent.__construct.call(this);
                                },
                                loadContents: function(e) {
                                    let f = m.ptrToAsset(e);
                                    e = f.cdnUuid;
                                    if ("" === e) return !1;
                                    (function(g, n) {
                                        var p = new XMLHttpRequest();
                                        p.responseType = "arraybuffer";
                                        p.onreadystatechange = function() {
                                            4 == p.readyState && 200 == p.status && n(p);
                                        };
                                        p.open("GET", g, !0);
                                        p.send(null);
                                    })(f.cdnBaseUrl + "/" + e, (g)=>{
                                        f.decode(new Uint8Array(g.response));
                                    });
                                    return !0;
                                }
                            });
                            m.FallbackFileAssetLoader = c.extend("FallbackFileAssetLoader", {
                                __construct: function() {
                                    this.__parent.__construct.call(this);
                                    this.kb = [];
                                },
                                addLoader: function(e) {
                                    this.kb.push(e);
                                },
                                loadContents: function(e, f) {
                                    for (let g of this.kb){
                                        if (g.loadContents(e, f)) return !0;
                                    }
                                    return !1;
                                }
                            });
                            let d = m.computeAlignment;
                            m.computeAlignment = function(e, f, g, n, p = 1.0) {
                                return d.call(this, e, f, g, n, p);
                            };
                        };
                        const ja = "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "), ka = new function() {
                            function a() {
                                if (!b) {
                                    var k = document.createElement("canvas"), t = {
                                        alpha: 1,
                                        depth: 0,
                                        stencil: 0,
                                        antialias: 0,
                                        premultipliedAlpha: 1,
                                        preserveDrawingBuffer: 0,
                                        powerPreference: "high-performance",
                                        failIfMajorPerformanceCaveat: 0,
                                        enableExtensionsByDefault: 1,
                                        explicitSwapControl: 1,
                                        renderViaOffscreenBackBuffer: 1
                                    };
                                    let r;
                                    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                                        if (r = k.getContext("webgl", t), c = 1, !r) return console.log("No WebGL support. Image mesh will not be drawn."), !1;
                                    } else if (r = k.getContext("webgl2", t)) c = 2;
                                    else {
                                        if (r = k.getContext("webgl", t)) c = 1;
                                        else return console.log("No WebGL support. Image mesh will not be drawn."), !1;
                                    }
                                    r = new Proxy(r, {
                                        get (D, w) {
                                            if (D.isContextLost()) {
                                                if (p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ", w), p = !0), "function" === typeof D[w]) return function() {};
                                            } else return "function" === typeof D[w] ? function(...M) {
                                                return D[w].apply(D, M);
                                            } : D[w];
                                        },
                                        set (D, w, M) {
                                            if (D.isContextLost()) p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to set property " + w), p = !0);
                                            else return D[w] = M, !0;
                                        }
                                    });
                                    d = Math.min(r.getParameter(r.MAX_RENDERBUFFER_SIZE), r.getParameter(r.MAX_TEXTURE_SIZE));
                                    function B(D, w, M) {
                                        w = r.createShader(w);
                                        r.shaderSource(w, M);
                                        r.compileShader(w);
                                        M = r.getShaderInfoLog(w);
                                        if (0 < (M || "").length) throw M;
                                        r.attachShader(D, w);
                                    }
                                    k = r.createProgram();
                                    B(k, r.VERTEX_SHADER, "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }");
                                    B(k, r.FRAGMENT_SHADER, "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }");
                                    r.bindAttribLocation(k, 0, "vertex");
                                    r.bindAttribLocation(k, 1, "uv");
                                    r.linkProgram(k);
                                    t = r.getProgramInfoLog(k);
                                    if (0 < (t || "").trim().length) throw t;
                                    e = r.getUniformLocation(k, "mat");
                                    f = r.getUniformLocation(k, "translate");
                                    r.useProgram(k);
                                    r.bindBuffer(r.ARRAY_BUFFER, r.createBuffer());
                                    r.enableVertexAttribArray(0);
                                    r.enableVertexAttribArray(1);
                                    r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, r.createBuffer());
                                    r.uniform1i(r.getUniformLocation(k, "image"), 0);
                                    r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                                    b = r;
                                }
                                return !0;
                            }
                            let b = null, c = 0, d = 0, e = null, f = null, g = 0, n = 0, p = !1;
                            a();
                            this.hc = function() {
                                a();
                                return d;
                            };
                            this.Mb = function(k) {
                                b.deleteTexture && b.deleteTexture(k);
                            };
                            this.Lb = function(k) {
                                if (!a()) return null;
                                const t = b.createTexture();
                                if (!t) return null;
                                b.bindTexture(b.TEXTURE_2D, t);
                                b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, k);
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                                2 == c ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR), b.generateMipmap(b.TEXTURE_2D)) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                                return t;
                            };
                            const l = new ha(8), u = new ha(8), v = new ha(10), x = new ha(10);
                            this.Qb = function(k, t, r, B, D) {
                                if (a()) {
                                    var w = l.push(k), M = u.push(t);
                                    if (b.canvas) {
                                        if (b.canvas.width != w || b.canvas.height != M) b.canvas.width = w, b.canvas.height = M;
                                        b.viewport(0, M - t, k, t);
                                        b.disable(b.SCISSOR_TEST);
                                        b.clearColor(0, 0, 0, 0);
                                        b.clear(b.COLOR_BUFFER_BIT);
                                        b.enable(b.SCISSOR_TEST);
                                        r.sort((H, ca)=>ca.wb - H.wb);
                                        w = v.push(B);
                                        g != w && (b.bufferData(b.ARRAY_BUFFER, 8 * w, b.DYNAMIC_DRAW), g = w);
                                        w = 0;
                                        for (var T of r)b.bufferSubData(b.ARRAY_BUFFER, w, T.Ta), w += 4 * T.Ta.length;
                                        console.assert(w == 4 * B);
                                        for (var da of r)b.bufferSubData(b.ARRAY_BUFFER, w, da.Db), w += 4 * da.Db.length;
                                        console.assert(w == 8 * B);
                                        w = x.push(D);
                                        n != w && (b.bufferData(b.ELEMENT_ARRAY_BUFFER, 2 * w, b.DYNAMIC_DRAW), n = w);
                                        T = 0;
                                        for (var ra of r)b.bufferSubData(b.ELEMENT_ARRAY_BUFFER, T, ra.indices), T += 2 * ra.indices.length;
                                        console.assert(T == 2 * D);
                                        ra = 0;
                                        da = !0;
                                        w = T = 0;
                                        for (const H of r){
                                            H.image.Ka != ra && (b.bindTexture(b.TEXTURE_2D, H.image.Ja || null), ra = H.image.Ka);
                                            H.mc ? (b.scissor(H.Ya, M - H.Za - H.jb, H.Ac, H.jb), da = !0) : da && (b.scissor(0, M - t, k, t), da = !1);
                                            r = 2 / k;
                                            const ca = -2 / t;
                                            b.uniform4f(e, H.ha[0] * r * H.Ba, H.ha[1] * ca * H.Ca, H.ha[2] * r * H.Ba, H.ha[3] * ca * H.Ca);
                                            b.uniform2f(f, H.ha[4] * r * H.Ba + r * (H.Ya - H.ic * H.Ba) - 1, H.ha[5] * ca * H.Ca + ca * (H.Za - H.jc * H.Ca) + 1);
                                            b.vertexAttribPointer(0, 2, b.FLOAT, !1, 0, w);
                                            b.vertexAttribPointer(1, 2, b.FLOAT, !1, 0, w + 4 * B);
                                            b.drawElements(b.TRIANGLES, H.indices.length, b.UNSIGNED_SHORT, T);
                                            w += 4 * H.Ta.length;
                                            T += 2 * H.indices.length;
                                        }
                                        console.assert(w == 4 * B);
                                        console.assert(T == 2 * D);
                                    }
                                }
                            };
                            this.canvas = function() {
                                return a() && b.canvas;
                            };
                        }(), la = m.onRuntimeInitialized;
                        m.onRuntimeInitialized = function() {
                            function a(q) {
                                switch(q){
                                    case l.srcOver:
                                        return "source-over";
                                    case l.screen:
                                        return "screen";
                                    case l.overlay:
                                        return "overlay";
                                    case l.darken:
                                        return "darken";
                                    case l.lighten:
                                        return "lighten";
                                    case l.colorDodge:
                                        return "color-dodge";
                                    case l.colorBurn:
                                        return "color-burn";
                                    case l.hardLight:
                                        return "hard-light";
                                    case l.softLight:
                                        return "soft-light";
                                    case l.difference:
                                        return "difference";
                                    case l.exclusion:
                                        return "exclusion";
                                    case l.multiply:
                                        return "multiply";
                                    case l.hue:
                                        return "hue";
                                    case l.saturation:
                                        return "saturation";
                                    case l.color:
                                        return "color";
                                    case l.luminosity:
                                        return "luminosity";
                                }
                            }
                            function b(q) {
                                return "rgba(" + ((16711680 & q) >>> 16) + "," + ((65280 & q) >>> 8) + "," + ((255 & q) >>> 0) + "," + ((4278190080 & q) >>> 24) / 255 + ")";
                            }
                            function c() {
                                0 < M.length && (ka.Qb(w.drawWidth(), w.drawHeight(), M, T, da), M = [], da = T = 0, w.reset(512, 512));
                                for (const q of D){
                                    for (const y of q.H)y();
                                    q.H = [];
                                }
                                D.clear();
                            }
                            la && la();
                            var d = m.RenderPaintStyle;
                            const e = m.RenderPath, f = m.RenderPaint, g = m.Renderer, n = m.StrokeCap, p = m.StrokeJoin, l = m.BlendMode, u = d.fill, v = d.stroke, x = m.FillRule.evenOdd;
                            let k = 1;
                            var t = m.RenderImage.extend("CanvasRenderImage", {
                                __construct: function({ la: q, xa: y } = {}) {
                                    this.__parent.__construct.call(this);
                                    this.Ka = k;
                                    k = k + 1 & 2147483647 || 1;
                                    this.la = q;
                                    this.xa = y;
                                },
                                __destruct: function() {
                                    this.Ja && (ka.Mb(this.Ja), URL.revokeObjectURL(this.Wa));
                                    this.__parent.__destruct.call(this);
                                },
                                decode: function(q) {
                                    var y = this;
                                    y.xa && y.xa(y);
                                    var F = new Image();
                                    y.Wa = URL.createObjectURL(new Blob([
                                        q
                                    ], {
                                        type: "image/png"
                                    }));
                                    F.onload = function() {
                                        y.Fb = F;
                                        y.Ja = ka.Lb(F);
                                        y.size(F.width, F.height);
                                        y.la && y.la(y);
                                    };
                                    F.src = y.Wa;
                                }
                            }), r = e.extend("CanvasRenderPath", {
                                __construct: function() {
                                    this.__parent.__construct.call(this);
                                    this.T = new Path2D();
                                },
                                rewind: function() {
                                    this.T = new Path2D();
                                },
                                addPath: function(q, y, F, G, A, I, J) {
                                    var K = this.T, X = K.addPath;
                                    q = q.T;
                                    const Q = new DOMMatrix();
                                    Q.a = y;
                                    Q.b = F;
                                    Q.c = G;
                                    Q.d = A;
                                    Q.e = I;
                                    Q.f = J;
                                    X.call(K, q, Q);
                                },
                                fillRule: function(q) {
                                    this.Va = q;
                                },
                                moveTo: function(q, y) {
                                    this.T.moveTo(q, y);
                                },
                                lineTo: function(q, y) {
                                    this.T.lineTo(q, y);
                                },
                                cubicTo: function(q, y, F, G, A, I) {
                                    this.T.bezierCurveTo(q, y, F, G, A, I);
                                },
                                close: function() {
                                    this.T.closePath();
                                }
                            }), B = f.extend("CanvasRenderPaint", {
                                color: function(q) {
                                    this.Xa = b(q);
                                },
                                thickness: function(q) {
                                    this.Ib = q;
                                },
                                join: function(q) {
                                    switch(q){
                                        case p.miter:
                                            this.Ia = "miter";
                                            break;
                                        case p.round:
                                            this.Ia = "round";
                                            break;
                                        case p.bevel:
                                            this.Ia = "bevel";
                                    }
                                },
                                cap: function(q) {
                                    switch(q){
                                        case n.butt:
                                            this.Ha = "butt";
                                            break;
                                        case n.round:
                                            this.Ha = "round";
                                            break;
                                        case n.square:
                                            this.Ha = "square";
                                    }
                                },
                                style: function(q) {
                                    this.Hb = q;
                                },
                                blendMode: function(q) {
                                    this.Eb = a(q);
                                },
                                clearGradient: function() {
                                    this.ja = null;
                                },
                                linearGradient: function(q, y, F, G) {
                                    this.ja = {
                                        yb: q,
                                        zb: y,
                                        bb: F,
                                        cb: G,
                                        Ra: []
                                    };
                                },
                                radialGradient: function(q, y, F, G) {
                                    this.ja = {
                                        yb: q,
                                        zb: y,
                                        bb: F,
                                        cb: G,
                                        Ra: [],
                                        ec: !0
                                    };
                                },
                                addStop: function(q, y) {
                                    this.ja.Ra.push({
                                        color: q,
                                        stop: y
                                    });
                                },
                                completeGradient: function() {},
                                draw: function(q, y, F) {
                                    let G = this.Hb;
                                    var A = this.Xa, I = this.ja;
                                    q.globalCompositeOperation = this.Eb;
                                    if (null != I) {
                                        A = I.yb;
                                        var J = I.zb;
                                        const X = I.bb;
                                        var K = I.cb;
                                        const Q = I.Ra;
                                        I.ec ? (I = X - A, K -= J, A = q.createRadialGradient(A, J, 0, A, J, Math.sqrt(I * I + K * K))) : A = q.createLinearGradient(A, J, X, K);
                                        for(let ea = 0, R = Q.length; ea < R; ea++)J = Q[ea], A.addColorStop(J.stop, b(J.color));
                                        this.Xa = A;
                                        this.ja = null;
                                    }
                                    switch(G){
                                        case v:
                                            q.strokeStyle = A;
                                            q.lineWidth = this.Ib;
                                            q.lineCap = this.Ha;
                                            q.lineJoin = this.Ia;
                                            q.stroke(y);
                                            break;
                                        case u:
                                            q.fillStyle = A, q.fill(y, F);
                                    }
                                }
                            });
                            const D = new Set();
                            let w = null, M = [], T = 0, da = 0;
                            var ra = m.CanvasRenderer = g.extend("Renderer", {
                                __construct: function(q) {
                                    this.__parent.__construct.call(this);
                                    this.S = [
                                        1,
                                        0,
                                        0,
                                        1,
                                        0,
                                        0
                                    ];
                                    this.C = q.getContext("2d");
                                    this.Ua = q;
                                    this.H = [];
                                },
                                save: function() {
                                    this.S.push(...this.S.slice(this.S.length - 6));
                                    this.H.push(this.C.save.bind(this.C));
                                },
                                restore: function() {
                                    const q = this.S.length - 6;
                                    if (6 > q) throw "restore() called without matching save().";
                                    this.S.splice(q);
                                    this.H.push(this.C.restore.bind(this.C));
                                },
                                transform: function(q, y, F, G, A, I) {
                                    const J = this.S, K = J.length - 6;
                                    J.splice(K, 6, J[K] * q + J[K + 2] * y, J[K + 1] * q + J[K + 3] * y, J[K] * F + J[K + 2] * G, J[K + 1] * F + J[K + 3] * G, J[K] * A + J[K + 2] * I + J[K + 4], J[K + 1] * A + J[K + 3] * I + J[K + 5]);
                                    this.H.push(this.C.transform.bind(this.C, q, y, F, G, A, I));
                                },
                                rotate: function(q) {
                                    const y = Math.sin(q);
                                    q = Math.cos(q);
                                    this.transform(q, y, -y, q, 0, 0);
                                },
                                _drawPath: function(q, y) {
                                    this.H.push(y.draw.bind(y, this.C, q.T, q.Va === x ? "evenodd" : "nonzero"));
                                },
                                _drawRiveImage: function(q, y, F) {
                                    var G = q.Fb;
                                    if (G) {
                                        var A = this.C, I = a(y);
                                        this.H.push(function() {
                                            A.globalCompositeOperation = I;
                                            A.globalAlpha = F;
                                            A.drawImage(G, 0, 0);
                                            A.globalAlpha = 1;
                                        });
                                    }
                                },
                                _getMatrix: function(q) {
                                    const y = this.S, F = y.length - 6;
                                    for(let G = 0; 6 > G; ++G)q[G] = y[F + G];
                                },
                                _drawImageMesh: function(q, y, F, G, A, I, J, K, X, Q) {
                                    var ea = this.C.canvas.width, R = this.C.canvas.height;
                                    const Yb = X - J, Zb = Q - K;
                                    J = Math.max(J, 0);
                                    K = Math.max(K, 0);
                                    X = Math.min(X, ea);
                                    Q = Math.min(Q, R);
                                    const Ga = X - J, Ha = Q - K;
                                    console.assert(Ga <= Math.min(Yb, ea));
                                    console.assert(Ha <= Math.min(Zb, R));
                                    if (!(0 >= Ga || 0 >= Ha)) {
                                        X = Ga < Yb || Ha < Zb;
                                        ea = Q = 1;
                                        var sa = Math.ceil(Ga * Q), ta = Math.ceil(Ha * ea);
                                        R = ka.hc();
                                        sa > R && (Q *= R / sa, sa = R);
                                        ta > R && (ea *= R / ta, ta = R);
                                        w || (w = new m.DynamicRectanizer(R), w.reset(512, 512));
                                        R = w.addRect(sa, ta);
                                        0 > R && (c(), D.add(this), R = w.addRect(sa, ta), console.assert(0 <= R));
                                        var $b = R & 65535, ac = R >> 16;
                                        M.push({
                                            ha: this.S.slice(this.S.length - 6),
                                            image: q,
                                            Ya: $b,
                                            Za: ac,
                                            ic: J,
                                            jc: K,
                                            Ac: sa,
                                            jb: ta,
                                            Ba: Q,
                                            Ca: ea,
                                            Ta: new Float32Array(G),
                                            Db: new Float32Array(A),
                                            indices: new Uint16Array(I),
                                            mc: X,
                                            wb: q.Ka << 1 | (X ? 1 : 0)
                                        });
                                        T += G.length;
                                        da += I.length;
                                        var za = this.C, qd = a(y);
                                        this.H.push(function() {
                                            za.save();
                                            za.resetTransform();
                                            za.globalCompositeOperation = qd;
                                            za.globalAlpha = F;
                                            const bc = ka.canvas();
                                            bc && za.drawImage(bc, $b, ac, sa, ta, J, K, Ga, Ha);
                                            za.restore();
                                        });
                                    }
                                },
                                _clipPath: function(q) {
                                    this.H.push(this.C.clip.bind(this.C, q.T, q.Va === x ? "evenodd" : "nonzero"));
                                },
                                clear: function() {
                                    D.add(this);
                                    this.H.push(this.C.clearRect.bind(this.C, 0, 0, this.Ua.width, this.Ua.height));
                                },
                                flush: function() {},
                                translate: function(q, y) {
                                    this.transform(1, 0, 0, 1, q, y);
                                }
                            });
                            m.makeRenderer = function(q) {
                                const y = new ra(q), F = y.C;
                                return new Proxy(y, {
                                    get (G, A) {
                                        if ("function" === typeof G[A]) return function(...I) {
                                            return G[A].apply(G, I);
                                        };
                                        if ("function" === typeof F[A]) {
                                            if (-1 < ja.indexOf(A)) throw Error("RiveException: Method call to '" + A + "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");
                                            return function(...I) {
                                                y.H.push(F[A].bind(F, ...I));
                                            };
                                        }
                                        return G[A];
                                    },
                                    set (G, A, I) {
                                        if (A in F) return y.H.push(()=>{
                                            F[A] = I;
                                        }), !0;
                                    }
                                });
                            };
                            m.decodeImage = function(q, y) {
                                new t({
                                    la: y
                                }).decode(q);
                            };
                            m.renderFactory = {
                                makeRenderPaint: function() {
                                    return new B();
                                },
                                makeRenderPath: function() {
                                    return new r();
                                },
                                makeRenderImage: function() {
                                    let q = ca;
                                    return new t({
                                        xa: ()=>{
                                            q.total++;
                                        },
                                        la: ()=>{
                                            q.loaded++;
                                            if (q.loaded === q.total) {
                                                const y = q.ready;
                                                y && (y(), q.ready = null);
                                            }
                                        }
                                    });
                                }
                            };
                            let H = m.load, ca = null;
                            m.load = function(q, y, F = !0) {
                                const G = new m.FallbackFileAssetLoader();
                                void 0 !== y && G.addLoader(y);
                                F && (y = new m.CDNFileAssetLoader(), G.addLoader(y));
                                return new Promise(function(A) {
                                    let I = null;
                                    ca = {
                                        total: 0,
                                        loaded: 0,
                                        ready: function() {
                                            A(I);
                                        }
                                    };
                                    I = H(q, G);
                                    0 == ca.total && A(I);
                                });
                            };
                            let rd = m.RendererWrapper.prototype.align;
                            m.RendererWrapper.prototype.align = function(q, y, F, G, A = 1.0) {
                                rd.call(this, q, y, F, G, A);
                            };
                            d = new fa();
                            m.requestAnimationFrame = d.requestAnimationFrame.bind(d);
                            m.cancelAnimationFrame = d.cancelAnimationFrame.bind(d);
                            m.enableFPSCounter = d.Rb.bind(d);
                            m.disableFPSCounter = d.Ob;
                            d.ob = c;
                            m.resolveAnimationFrame = c;
                            m.cleanup = function() {
                                w && w.delete();
                            };
                        };
                        var ma = Object.assign({}, m), na = "./this.program", oa = "object" == typeof window, pa = "function" == typeof importScripts, qa = "", ua, va;
                        if (oa || pa) pa ? qa = self.location.href : "undefined" != typeof document && document.currentScript && (qa = document.currentScript.src), _scriptDir && (qa = _scriptDir), 0 !== qa.indexOf("blob:") ? qa = qa.substr(0, qa.replace(/[?#].*/, "").lastIndexOf("/") + 1) : qa = "", pa && (va = (a)=>{
                            var b = new XMLHttpRequest();
                            b.open("GET", a, !1);
                            b.responseType = "arraybuffer";
                            b.send(null);
                            return new Uint8Array(b.response);
                        }), ua = (a, b, c)=>{
                            var d = new XMLHttpRequest();
                            d.open("GET", a, !0);
                            d.responseType = "arraybuffer";
                            d.onload = ()=>{
                                200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
                            };
                            d.onerror = c;
                            d.send(null);
                        };
                        var wa = m.print || console.log.bind(console), xa = m.printErr || console.error.bind(console);
                        Object.assign(m, ma);
                        ma = null;
                        m.thisProgram && (na = m.thisProgram);
                        var ya;
                        m.wasmBinary && (ya = m.wasmBinary);
                        var noExitRuntime = m.noExitRuntime || !0;
                        "object" != typeof WebAssembly && Aa("no native wasm support detected");
                        var Ba, z, Ca = !1, C, E, Da, Ea, L, N, Fa, Ia;
                        function Ja() {
                            var a = Ba.buffer;
                            m.HEAP8 = C = new Int8Array(a);
                            m.HEAP16 = Da = new Int16Array(a);
                            m.HEAP32 = L = new Int32Array(a);
                            m.HEAPU8 = E = new Uint8Array(a);
                            m.HEAPU16 = Ea = new Uint16Array(a);
                            m.HEAPU32 = N = new Uint32Array(a);
                            m.HEAPF32 = Fa = new Float32Array(a);
                            m.HEAPF64 = Ia = new Float64Array(a);
                        }
                        var Ka, La = [], Ma = [], Na = [];
                        function Oa() {
                            var a = m.preRun.shift();
                            La.unshift(a);
                        }
                        var Pa = 0, Qa = null, Ra = null;
                        function Aa(a) {
                            if (m.onAbort) m.onAbort(a);
                            a = "Aborted(" + a + ")";
                            xa(a);
                            Ca = !0;
                            a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
                            ba(a);
                            throw a;
                        }
                        function Sa(a) {
                            return a.startsWith("data:application/octet-stream;base64,");
                        }
                        var Ta;
                        Ta = "canvas_advanced.wasm";
                        if (!Sa(Ta)) {
                            var Ua = Ta;
                            Ta = m.locateFile ? m.locateFile(Ua, qa) : qa + Ua;
                        }
                        function Va(a) {
                            if (a == Ta && ya) return new Uint8Array(ya);
                            if (va) return va(a);
                            throw "both async and sync fetching of the wasm failed";
                        }
                        function Wa(a) {
                            if (!ya && (oa || pa)) {
                                if ("function" == typeof fetch && !a.startsWith("file://")) return fetch(a, {
                                    credentials: "same-origin"
                                }).then((b)=>{
                                    if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
                                    return b.arrayBuffer();
                                }).catch(()=>Va(a));
                                if (ua) return new Promise((b, c)=>{
                                    ua(a, (d)=>b(new Uint8Array(d)), c);
                                });
                            }
                            return Promise.resolve().then(()=>Va(a));
                        }
                        function Xa(a, b, c) {
                            return Wa(a).then((d)=>WebAssembly.instantiate(d, b)).then((d)=>d).then(c, (d)=>{
                                xa("failed to asynchronously prepare wasm: " + d);
                                Aa(d);
                            });
                        }
                        function Ya(a, b) {
                            var c = Ta;
                            return ya || "function" != typeof WebAssembly.instantiateStreaming || Sa(c) || c.startsWith("file://") || "function" != typeof fetch ? Xa(c, a, b) : fetch(c, {
                                credentials: "same-origin"
                            }).then((d)=>WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
                                    xa("wasm streaming compile failed: " + e);
                                    xa("falling back to ArrayBuffer instantiation");
                                    return Xa(c, a, b);
                                }));
                        }
                        var Za, $a, db = {
                            449484: (a, b, c, d, e)=>{
                                if ("undefined" === typeof window || void 0 === (window.AudioContext || window.webkitAudioContext)) return 0;
                                if ("undefined" === typeof window.h) {
                                    window.h = {
                                        Aa: 0
                                    };
                                    window.h.I = {};
                                    window.h.I.ya = a;
                                    window.h.I.capture = b;
                                    window.h.I.La = c;
                                    window.h.ga = {};
                                    window.h.ga.stopped = d;
                                    window.h.ga.xb = e;
                                    let f = window.h;
                                    f.D = [];
                                    f.yc = function(g) {
                                        for(var n = 0; n < f.D.length; ++n){
                                            if (null == f.D[n]) return f.D[n] = g, n;
                                        }
                                        f.D.push(g);
                                        return f.D.length - 1;
                                    };
                                    f.Cb = function(g) {
                                        for(f.D[g] = null; 0 < f.D.length;){
                                            if (null == f.D[f.D.length - 1]) f.D.pop();
                                            else break;
                                        }
                                    };
                                    f.Sc = function(g) {
                                        for(var n = 0; n < f.D.length; ++n){
                                            if (f.D[n] == g) return f.Cb(n);
                                        }
                                    };
                                    f.ra = function(g) {
                                        return f.D[g];
                                    };
                                    f.Bb = [
                                        "touchend",
                                        "click"
                                    ];
                                    f.unlock = function() {
                                        for(var g = 0; g < f.D.length; ++g){
                                            var n = f.D[g];
                                            null != n && null != n.J && n.state === f.ga.xb && n.J.resume().then(()=>{
                                                ab(n.pb);
                                            }, (p)=>{
                                                console.error("Failed to resume audiocontext", p);
                                            });
                                        }
                                        f.Bb.map(function(p) {
                                            document.removeEventListener(p, f.unlock, !0);
                                        });
                                    };
                                    f.Bb.map(function(g) {
                                        document.addEventListener(g, f.unlock, !0);
                                    });
                                }
                                window.h.Aa += 1;
                                return 1;
                            },
                            451662: ()=>{
                                "undefined" !== typeof window.h && (--window.h.Aa, 0 === window.h.Aa && delete window.h);
                            },
                            451826: ()=>void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia,
                            451930: ()=>{
                                try {
                                    var a = new (window.AudioContext || window.webkitAudioContext)(), b = a.sampleRate;
                                    a.close();
                                    return b;
                                } catch (c) {
                                    return 0;
                                }
                            },
                            452101: (a, b, c, d, e, f)=>{
                                if ("undefined" === typeof window.h) return -1;
                                var g = {}, n = {};
                                a == window.h.I.ya && 0 != c && (n.sampleRate = c);
                                g.J = new (window.AudioContext || window.webkitAudioContext)(n);
                                g.J.suspend();
                                g.state = window.h.ga.stopped;
                                c = 0;
                                a != window.h.I.ya && (c = b);
                                g.Z = g.J.createScriptProcessor(d, c, b);
                                g.Z.onaudioprocess = function(p) {
                                    if (null == g.sa || 0 == g.sa.length) g.sa = new Float32Array(Fa.buffer, e, d * b);
                                    if (a == window.h.I.capture || a == window.h.I.La) {
                                        for(var l = 0; l < b; l += 1)for(var u = p.inputBuffer.getChannelData(l), v = g.sa, x = 0; x < d; x += 1)v[x * b + l] = u[x];
                                        bb(f, d, e);
                                    }
                                    if (a == window.h.I.ya || a == window.h.I.La) {
                                        for(cb(f, d, e), l = 0; l < p.outputBuffer.numberOfChannels; ++l)for(u = p.outputBuffer.getChannelData(l), v = g.sa, x = 0; x < d; x += 1)u[x] = v[x * b + l];
                                    } else for(l = 0; l < p.outputBuffer.numberOfChannels; ++l)p.outputBuffer.getChannelData(l).fill(0.0);
                                };
                                a != window.h.I.capture && a != window.h.I.La || navigator.mediaDevices.getUserMedia({
                                    audio: !0,
                                    video: !1
                                }).then(function(p) {
                                    g.Da = g.J.createMediaStreamSource(p);
                                    g.Da.connect(g.Z);
                                    g.Z.connect(g.J.destination);
                                }).catch(function(p) {
                                    console.log("Failed to get user media: " + p);
                                });
                                a == window.h.I.ya && g.Z.connect(g.J.destination);
                                g.pb = f;
                                return window.h.yc(g);
                            },
                            454978: (a)=>window.h.ra(a).J.sampleRate,
                            455051: (a)=>{
                                a = window.h.ra(a);
                                void 0 !== a.Z && (a.Z.onaudioprocess = function() {}, a.Z.disconnect(), a.Z = void 0);
                                void 0 !== a.Da && (a.Da.disconnect(), a.Da = void 0);
                                a.J.close();
                                a.J = void 0;
                                a.pb = void 0;
                            },
                            455451: (a)=>{
                                window.h.Cb(a);
                            },
                            455501: (a)=>{
                                a = window.h.ra(a);
                                a.J.resume();
                                a.state = window.h.ga.xb;
                            },
                            455640: (a)=>{
                                a = window.h.ra(a);
                                a.J.suspend();
                                a.state = window.h.ga.stopped;
                            }
                        }, eb = (a)=>{
                            for(; 0 < a.length;)a.shift()(m);
                        }, fb = (a, b)=>{
                            for(var c = 0, d = a.length - 1; 0 <= d; d--){
                                var e = a[d];
                                "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
                            }
                            if (b) for(; c; c--)a.unshift("..");
                            return a;
                        }, gb = (a)=>{
                            var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
                            (a = fb(a.split("/").filter((d)=>!!d), !b).join("/")) || b || (a = ".");
                            a && c && (a += "/");
                            return (b ? "/" : "") + a;
                        }, hb = (a)=>{
                            var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
                            a = b[0];
                            b = b[1];
                            if (!a && !b) return ".";
                            b && (b = b.substr(0, b.length - 1));
                            return a + b;
                        }, ib = (a)=>{
                            if ("/" === a) return "/";
                            a = gb(a);
                            a = a.replace(/\/$/, "");
                            var b = a.lastIndexOf("/");
                            return -1 === b ? a : a.substr(b + 1);
                        }, jb = ()=>{
                            if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return (a)=>crypto.getRandomValues(a);
                            Aa("initRandomDevice");
                        }, kb = (a)=>(kb = jb())(a);
                        function lb() {
                            for(var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--){
                                b = 0 <= c ? arguments[c] : "/";
                                if ("string" != typeof b) throw new TypeError("Arguments to path.resolve must be strings");
                                if (!b) return "";
                                a = b + "/" + a;
                                b = "/" === b.charAt(0);
                            }
                            a = fb(a.split("/").filter((d)=>!!d), !b).join("/");
                            return (b ? "/" : "") + a || ".";
                        }
                        var mb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, nb = (a, b, c)=>{
                            var d = b + c;
                            for(c = b; a[c] && !(c >= d);)++c;
                            if (16 < c - b && a.buffer && mb) return mb.decode(a.subarray(b, c));
                            for(d = ""; b < c;){
                                var e = a[b++];
                                if (e & 128) {
                                    var f = a[b++] & 63;
                                    if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | f);
                                    else {
                                        var g = a[b++] & 63;
                                        e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                                        65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
                                    }
                                } else d += String.fromCharCode(e);
                            }
                            return d;
                        }, ob = [], pb = (a)=>{
                            for(var b = 0, c = 0; c < a.length; ++c){
                                var d = a.charCodeAt(c);
                                127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
                            }
                            return b;
                        }, qb = (a, b, c, d)=>{
                            if (!(0 < d)) return 0;
                            var e = c;
                            d = c + d - 1;
                            for(var f = 0; f < a.length; ++f){
                                var g = a.charCodeAt(f);
                                if (55296 <= g && 57343 >= g) {
                                    var n = a.charCodeAt(++f);
                                    g = 65536 + ((g & 1023) << 10) | n & 1023;
                                }
                                if (127 >= g) {
                                    if (c >= d) break;
                                    b[c++] = g;
                                } else {
                                    if (2047 >= g) {
                                        if (c + 1 >= d) break;
                                        b[c++] = 192 | g >> 6;
                                    } else {
                                        if (65535 >= g) {
                                            if (c + 2 >= d) break;
                                            b[c++] = 224 | g >> 12;
                                        } else {
                                            if (c + 3 >= d) break;
                                            b[c++] = 240 | g >> 18;
                                            b[c++] = 128 | g >> 12 & 63;
                                        }
                                        b[c++] = 128 | g >> 6 & 63;
                                    }
                                    b[c++] = 128 | g & 63;
                                }
                            }
                            b[c] = 0;
                            return c - e;
                        };
                        function rb(a, b) {
                            var c = Array(pb(a) + 1);
                            a = qb(a, c, 0, c.length);
                            b && (c.length = a);
                            return c;
                        }
                        var sb = [];
                        function tb(a, b) {
                            sb[a] = {
                                input: [],
                                F: [],
                                V: b
                            };
                            ub(a, vb);
                        }
                        var vb = {
                            open: function(a) {
                                var b = sb[a.node.za];
                                if (!b) throw new O(43);
                                a.s = b;
                                a.seekable = !1;
                            },
                            close: function(a) {
                                a.s.V.qa(a.s);
                            },
                            qa: function(a) {
                                a.s.V.qa(a.s);
                            },
                            read: function(a, b, c, d) {
                                if (!a.s || !a.s.V.ib) throw new O(60);
                                for(var e = 0, f = 0; f < d; f++){
                                    try {
                                        var g = a.s.V.ib(a.s);
                                    } catch (n) {
                                        throw new O(29);
                                    }
                                    if (void 0 === g && 0 === e) throw new O(6);
                                    if (null === g || void 0 === g) break;
                                    e++;
                                    b[c + f] = g;
                                }
                                e && (a.node.timestamp = Date.now());
                                return e;
                            },
                            write: function(a, b, c, d) {
                                if (!a.s || !a.s.V.Oa) throw new O(60);
                                try {
                                    for(var e = 0; e < d; e++)a.s.V.Oa(a.s, b[c + e]);
                                } catch (f) {
                                    throw new O(29);
                                }
                                d && (a.node.timestamp = Date.now());
                                return e;
                            }
                        }, wb = {
                            ib: function() {
                                a: {
                                    if (!ob.length) {
                                        var a = null;
                                        "undefined" != typeof window && "function" == typeof window.prompt ? (a = window.prompt("Input: "), null !== a && (a += "\n")) : "function" == typeof readline && (a = readline(), null !== a && (a += "\n"));
                                        if (!a) {
                                            a = null;
                                            break a;
                                        }
                                        ob = rb(a, !0);
                                    }
                                    a = ob.shift();
                                }
                                return a;
                            },
                            Oa: function(a, b) {
                                null === b || 10 === b ? (wa(nb(a.F, 0)), a.F = []) : 0 != b && a.F.push(b);
                            },
                            qa: function(a) {
                                a.F && 0 < a.F.length && (wa(nb(a.F, 0)), a.F = []);
                            },
                            bc: function() {
                                return {
                                    Fc: 25856,
                                    Hc: 5,
                                    Ec: 191,
                                    Gc: 35387,
                                    Dc: [
                                        3,
                                        28,
                                        127,
                                        21,
                                        4,
                                        0,
                                        1,
                                        0,
                                        17,
                                        19,
                                        26,
                                        0,
                                        18,
                                        15,
                                        23,
                                        22,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0
                                    ]
                                };
                            },
                            cc: function() {
                                return 0;
                            },
                            dc: function() {
                                return [
                                    24,
                                    80
                                ];
                            }
                        }, xb = {
                            Oa: function(a, b) {
                                null === b || 10 === b ? (xa(nb(a.F, 0)), a.F = []) : 0 != b && a.F.push(b);
                            },
                            qa: function(a) {
                                a.F && 0 < a.F.length && (xa(nb(a.F, 0)), a.F = []);
                            }
                        };
                        function yb(a, b) {
                            var c = a.j ? a.j.length : 0;
                            c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.j, a.j = new Uint8Array(b), 0 < a.v && a.j.set(c.subarray(0, a.v), 0));
                        }
                        var P = {
                            O: null,
                            U () {
                                return P.createNode(null, "/", 16895, 0);
                            },
                            createNode (a, b, c, d) {
                                if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new O(63);
                                P.O || (P.O = {
                                    dir: {
                                        node: {
                                            Y: P.l.Y,
                                            P: P.l.P,
                                            ka: P.l.ka,
                                            va: P.l.va,
                                            ub: P.l.ub,
                                            Ab: P.l.Ab,
                                            vb: P.l.vb,
                                            sb: P.l.sb,
                                            Ea: P.l.Ea
                                        },
                                        stream: {
                                            ba: P.m.ba
                                        }
                                    },
                                    file: {
                                        node: {
                                            Y: P.l.Y,
                                            P: P.l.P
                                        },
                                        stream: {
                                            ba: P.m.ba,
                                            read: P.m.read,
                                            write: P.m.write,
                                            pa: P.m.pa,
                                            lb: P.m.lb,
                                            nb: P.m.nb
                                        }
                                    },
                                    link: {
                                        node: {
                                            Y: P.l.Y,
                                            P: P.l.P,
                                            ma: P.l.ma
                                        },
                                        stream: {}
                                    },
                                    $a: {
                                        node: {
                                            Y: P.l.Y,
                                            P: P.l.P
                                        },
                                        stream: zb
                                    }
                                });
                                c = Ab(a, b, c, d);
                                16384 === (c.mode & 61440) ? (c.l = P.O.dir.node, c.m = P.O.dir.stream, c.j = {}) : 32768 === (c.mode & 61440) ? (c.l = P.O.file.node, c.m = P.O.file.stream, c.v = 0, c.j = null) : 40960 === (c.mode & 61440) ? (c.l = P.O.link.node, c.m = P.O.link.stream) : 8192 === (c.mode & 61440) && (c.l = P.O.$a.node, c.m = P.O.$a.stream);
                                c.timestamp = Date.now();
                                a && (a.j[b] = c, a.timestamp = c.timestamp);
                                return c;
                            },
                            Kc (a) {
                                return a.j ? a.j.subarray ? a.j.subarray(0, a.v) : new Uint8Array(a.j) : new Uint8Array(0);
                            },
                            l: {
                                Y (a) {
                                    var b = {};
                                    b.Jc = 8192 === (a.mode & 61440) ? a.id : 1;
                                    b.Mc = a.id;
                                    b.mode = a.mode;
                                    b.Oc = 1;
                                    b.uid = 0;
                                    b.Lc = 0;
                                    b.za = a.za;
                                    16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.v : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                                    b.Bc = new Date(a.timestamp);
                                    b.Nc = new Date(a.timestamp);
                                    b.Ic = new Date(a.timestamp);
                                    b.Jb = 4096;
                                    b.Cc = Math.ceil(b.size / b.Jb);
                                    return b;
                                },
                                P (a, b) {
                                    void 0 !== b.mode && (a.mode = b.mode);
                                    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                                    if (void 0 !== b.size && (b = b.size, a.v != b)) {
                                        if (0 == b) a.j = null, a.v = 0;
                                        else {
                                            var c = a.j;
                                            a.j = new Uint8Array(b);
                                            c && a.j.set(c.subarray(0, Math.min(b, a.v)));
                                            a.v = b;
                                        }
                                    }
                                },
                                ka () {
                                    throw Bb[44];
                                },
                                va (a, b, c, d) {
                                    return P.createNode(a, b, c, d);
                                },
                                ub (a, b, c) {
                                    if (16384 === (a.mode & 61440)) {
                                        try {
                                            var d = Cb(b, c);
                                        } catch (f) {}
                                        if (d) {
                                            for(var e in d.j)throw new O(55);
                                        }
                                    }
                                    delete a.parent.j[a.name];
                                    a.parent.timestamp = Date.now();
                                    a.name = c;
                                    b.j[c] = a;
                                    b.timestamp = a.parent.timestamp;
                                    a.parent = b;
                                },
                                Ab (a, b) {
                                    delete a.j[b];
                                    a.timestamp = Date.now();
                                },
                                vb (a, b) {
                                    var c = Cb(a, b), d;
                                    for(d in c.j)throw new O(55);
                                    delete a.j[b];
                                    a.timestamp = Date.now();
                                },
                                sb (a) {
                                    var b = [
                                        ".",
                                        ".."
                                    ], c;
                                    for(c in a.j)a.j.hasOwnProperty(c) && b.push(c);
                                    return b;
                                },
                                Ea (a, b, c) {
                                    a = P.createNode(a, b, 41471, 0);
                                    a.link = c;
                                    return a;
                                },
                                ma (a) {
                                    if (40960 !== (a.mode & 61440)) throw new O(28);
                                    return a.link;
                                }
                            },
                            m: {
                                read (a, b, c, d, e) {
                                    var f = a.node.j;
                                    if (e >= a.node.v) return 0;
                                    a = Math.min(a.node.v - e, d);
                                    if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
                                    else for(d = 0; d < a; d++)b[c + d] = f[e + d];
                                    return a;
                                },
                                write (a, b, c, d, e, f) {
                                    b.buffer === C.buffer && (f = !1);
                                    if (!d) return 0;
                                    a = a.node;
                                    a.timestamp = Date.now();
                                    if (b.subarray && (!a.j || a.j.subarray)) {
                                        if (f) return a.j = b.subarray(c, c + d), a.v = d;
                                        if (0 === a.v && 0 === e) return a.j = b.slice(c, c + d), a.v = d;
                                        if (e + d <= a.v) return a.j.set(b.subarray(c, c + d), e), d;
                                    }
                                    yb(a, e + d);
                                    if (a.j.subarray && b.subarray) a.j.set(b.subarray(c, c + d), e);
                                    else for(f = 0; f < d; f++)a.j[e + f] = b[c + f];
                                    a.v = Math.max(a.v, e + d);
                                    return d;
                                },
                                ba (a, b, c) {
                                    1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.v);
                                    if (0 > b) throw new O(28);
                                    return b;
                                },
                                pa (a, b, c) {
                                    yb(a.node, b + c);
                                    a.node.v = Math.max(a.node.v, b + c);
                                },
                                lb (a, b, c, d, e) {
                                    if (32768 !== (a.node.mode & 61440)) throw new O(43);
                                    a = a.node.j;
                                    if (e & 2 || a.buffer !== C.buffer) {
                                        if (0 < c || c + b < a.length) a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                                        c = !0;
                                        Aa();
                                        b = void 0;
                                        if (!b) throw new O(48);
                                        C.set(a, b);
                                    } else c = !1, b = a.byteOffset;
                                    return {
                                        o: b,
                                        M: c
                                    };
                                },
                                nb (a, b, c, d) {
                                    P.m.write(a, b, 0, d, c, !1);
                                    return 0;
                                }
                            }
                        };
                        function Db(a, b) {
                            var c = 0;
                            a && (c |= 365);
                            b && (c |= 146);
                            return c;
                        }
                        var Eb = null, Fb = {}, Gb = [], Hb = 1, Ib = null, Jb = !0, O = null, Bb = {}, Lb = (a, b = {})=>{
                            a = lb(a);
                            if (!a) return {
                                path: "",
                                node: null
                            };
                            b = Object.assign({
                                gb: !0,
                                Qa: 0
                            }, b);
                            if (8 < b.Qa) throw new O(32);
                            a = a.split("/").filter((g)=>!!g);
                            for(var c = Eb, d = "/", e = 0; e < a.length; e++){
                                var f = e === a.length - 1;
                                if (f && b.parent) break;
                                c = Cb(c, a[e]);
                                d = gb(d + "/" + a[e]);
                                c.wa && (!f || f && b.gb) && (c = c.wa.root);
                                if (!f || b.fb) for(f = 0; 40960 === (c.mode & 61440);){
                                    if (c = Kb(d), d = lb(hb(d), c), c = Lb(d, {
                                        Qa: b.Qa + 1
                                    }).node, 40 < f++) throw new O(32);
                                }
                            }
                            return {
                                path: d,
                                node: c
                            };
                        }, Mb = (a)=>{
                            for(var b;;){
                                if (a === a.parent) return a = a.U.mb, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
                                b = b ? `${a.name}/${b}` : a.name;
                                a = a.parent;
                            }
                        }, Nb = (a, b)=>{
                            for(var c = 0, d = 0; d < b.length; d++)c = (c << 5) - c + b.charCodeAt(d) | 0;
                            return (a + c >>> 0) % Ib.length;
                        }, Cb = (a, b)=>{
                            var c;
                            if (c = (c = Ob(a, "x")) ? c : a.l.ka ? 0 : 2) throw new O(c, a);
                            for(c = Ib[Nb(a.id, b)]; c; c = c.lc){
                                var d = c.name;
                                if (c.parent.id === a.id && d === b) return c;
                            }
                            return a.l.ka(a, b);
                        }, Ab = (a, b, c, d)=>{
                            a = new Pb(a, b, c, d);
                            b = Nb(a.parent.id, a.name);
                            a.lc = Ib[b];
                            return Ib[b] = a;
                        }, Qb = (a)=>{
                            var b = [
                                "r",
                                "w",
                                "rw"
                            ][a & 3];
                            a & 512 && (b += "w");
                            return b;
                        }, Ob = (a, b)=>{
                            if (Jb) return 0;
                            if (!b.includes("r") || a.mode & 292) {
                                if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) return 2;
                            } else return 2;
                            return 0;
                        }, Rb = (a, b)=>{
                            try {
                                return Cb(a, b), 20;
                            } catch (c) {}
                            return Ob(a, "wx");
                        }, Sb = ()=>{
                            for(var a = 0; 4096 >= a; a++){
                                if (!Gb[a]) return a;
                            }
                            throw new O(33);
                        }, Tb = (a)=>{
                            a = Gb[a];
                            if (!a) throw new O(8);
                            return a;
                        }, Vb = (a, b = -1)=>{
                            Ub || (Ub = function() {
                                this.h = {};
                            }, Ub.prototype = {}, Object.defineProperties(Ub.prototype, {
                                object: {
                                    get () {
                                        return this.node;
                                    },
                                    set (c) {
                                        this.node = c;
                                    }
                                },
                                flags: {
                                    get () {
                                        return this.h.flags;
                                    },
                                    set (c) {
                                        this.h.flags = c;
                                    }
                                },
                                position: {
                                    get () {
                                        return this.h.position;
                                    },
                                    set (c) {
                                        this.h.position = c;
                                    }
                                }
                            }));
                            a = Object.assign(new Ub(), a);
                            -1 == b && (b = Sb());
                            a.X = b;
                            return Gb[b] = a;
                        }, zb = {
                            open: (a)=>{
                                a.m = Fb[a.node.za].m;
                                a.m.open && a.m.open(a);
                            },
                            ba: ()=>{
                                throw new O(70);
                            }
                        }, ub = (a, b)=>{
                            Fb[a] = {
                                m: b
                            };
                        }, Wb = (a, b)=>{
                            var c = "/" === b, d = !b;
                            if (c && Eb) throw new O(10);
                            if (!c && !d) {
                                var e = Lb(b, {
                                    gb: !1
                                });
                                b = e.path;
                                e = e.node;
                                if (e.wa) throw new O(10);
                                if (16384 !== (e.mode & 61440)) throw new O(54);
                            }
                            b = {
                                type: a,
                                Qc: {},
                                mb: b,
                                kc: []
                            };
                            a = a.U(b);
                            a.U = b;
                            b.root = a;
                            c ? Eb = a : e && (e.wa = b, e.U && e.U.kc.push(b));
                        }, S = (a, b, c)=>{
                            var d = Lb(a, {
                                parent: !0
                            }).node;
                            a = ib(a);
                            if (!a || "." === a || ".." === a) throw new O(28);
                            var e = Rb(d, a);
                            if (e) throw new O(e);
                            if (!d.l.va) throw new O(63);
                            return d.l.va(d, a, b, c);
                        }, Xb = (a, b, c)=>{
                            "undefined" == typeof c && (c = b, b = 438);
                            S(a, b | 8192, c);
                        }, cc = (a, b)=>{
                            if (!lb(a)) throw new O(44);
                            var c = Lb(b, {
                                parent: !0
                            }).node;
                            if (!c) throw new O(44);
                            b = ib(b);
                            var d = Rb(c, b);
                            if (d) throw new O(d);
                            if (!c.l.Ea) throw new O(63);
                            c.l.Ea(c, b, a);
                        }, Kb = (a)=>{
                            a = Lb(a).node;
                            if (!a) throw new O(44);
                            if (!a.l.ma) throw new O(28);
                            return lb(Mb(a.parent), a.l.ma(a));
                        }, ec = (a, b, c)=>{
                            if ("" === a) throw new O(44);
                            if ("string" == typeof b) {
                                var d = {
                                    r: 0,
                                    "r+": 2,
                                    w: 577,
                                    "w+": 578,
                                    a: 1089,
                                    "a+": 1090
                                }[b];
                                if ("undefined" == typeof d) throw Error(`Unknown file open mode: ${b}`);
                                b = d;
                            }
                            c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
                            if ("object" == typeof a) var e = a;
                            else {
                                a = gb(a);
                                try {
                                    e = Lb(a, {
                                        fb: !(b & 131072)
                                    }).node;
                                } catch (f) {}
                            }
                            d = !1;
                            if (b & 64) {
                                if (e) {
                                    if (b & 128) throw new O(20);
                                } else e = S(a, c, 0), d = !0;
                            }
                            if (!e) throw new O(44);
                            8192 === (e.mode & 61440) && (b &= -513);
                            if (b & 65536 && 16384 !== (e.mode & 61440)) throw new O(54);
                            if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Qb(b) || b & 512) ? 31 : Ob(e, Qb(b)) : 44)) throw new O(c);
                            if (b & 512 && !d) {
                                c = e;
                                c = "string" == typeof c ? Lb(c, {
                                    fb: !0
                                }).node : c;
                                if (!c.l.P) throw new O(63);
                                if (16384 === (c.mode & 61440)) throw new O(31);
                                if (32768 !== (c.mode & 61440)) throw new O(28);
                                if (d = Ob(c, "w")) throw new O(d);
                                c.l.P(c, {
                                    size: 0,
                                    timestamp: Date.now()
                                });
                            }
                            b &= -131713;
                            e = Vb({
                                node: e,
                                path: Mb(e),
                                flags: b,
                                seekable: !0,
                                position: 0,
                                m: e.m,
                                zc: [],
                                error: !1
                            });
                            e.m.open && e.m.open(e);
                            !m.logReadFiles || b & 1 || (dc || (dc = {}), a in dc || (dc[a] = 1));
                            return e;
                        }, fc = (a, b, c)=>{
                            if (null === a.X) throw new O(8);
                            if (!a.seekable || !a.m.ba) throw new O(70);
                            if (0 != c && 1 != c && 2 != c) throw new O(28);
                            a.position = a.m.ba(a, b, c);
                            a.zc = [];
                        }, gc = ()=>{
                            O || (O = function(a, b) {
                                this.name = "ErrnoError";
                                this.node = b;
                                this.pc = function(c) {
                                    this.aa = c;
                                };
                                this.pc(a);
                                this.message = "FS error";
                            }, O.prototype = Error(), O.prototype.constructor = O, [
                                44
                            ].forEach((a)=>{
                                Bb[a] = new O(a);
                                Bb[a].stack = "<generic error, no stack>";
                            }));
                        }, hc, jc = (a, b, c)=>{
                            a = gb("/dev/" + a);
                            var d = Db(!!b, !!c);
                            ic || (ic = 64);
                            var e = ic++ << 8 | 0;
                            ub(e, {
                                open: (f)=>{
                                    f.seekable = !1;
                                },
                                close: ()=>{
                                    c && c.buffer && c.buffer.length && c(10);
                                },
                                read: (f, g, n, p)=>{
                                    for(var l = 0, u = 0; u < p; u++){
                                        try {
                                            var v = b();
                                        } catch (x) {
                                            throw new O(29);
                                        }
                                        if (void 0 === v && 0 === l) throw new O(6);
                                        if (null === v || void 0 === v) break;
                                        l++;
                                        g[n + u] = v;
                                    }
                                    l && (f.node.timestamp = Date.now());
                                    return l;
                                },
                                write: (f, g, n, p)=>{
                                    for(var l = 0; l < p; l++)try {
                                        c(g[n + l]);
                                    } catch (u) {
                                        throw new O(29);
                                    }
                                    p && (f.node.timestamp = Date.now());
                                    return l;
                                }
                            });
                            Xb(a, d, e);
                        }, ic, kc = {}, Ub, dc, lc = void 0;
                        function mc() {
                            lc += 4;
                            return L[lc - 4 >> 2];
                        }
                        function nc(a) {
                            if (void 0 === a) return "_unknown";
                            a = a.replace(/[^a-zA-Z0-9_]/g, "$");
                            var b = a.charCodeAt(0);
                            return 48 <= b && 57 >= b ? `_${a}` : a;
                        }
                        function oc(a, b) {
                            a = nc(a);
                            return ({
                                [a]: function() {
                                    return b.apply(this, arguments);
                                }
                            })[a];
                        }
                        function pc() {
                            this.M = [
                                void 0
                            ];
                            this.hb = [];
                        }
                        var U = new pc(), qc = void 0;
                        function V(a) {
                            throw new qc(a);
                        }
                        var rc = (a)=>{
                            a || V("Cannot use deleted val. handle = " + a);
                            return U.get(a).value;
                        }, sc = (a)=>{
                            switch(a){
                                case void 0:
                                    return 1;
                                case null:
                                    return 2;
                                case !0:
                                    return 3;
                                case !1:
                                    return 4;
                                default:
                                    return U.pa({
                                        tb: 1,
                                        value: a
                                    });
                            }
                        };
                        function tc(a) {
                            var b = Error, c = oc(a, function(d) {
                                this.name = a;
                                this.message = d;
                                d = Error(d).stack;
                                void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
                            });
                            c.prototype = Object.create(b.prototype);
                            c.prototype.constructor = c;
                            c.prototype.toString = function() {
                                return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
                            };
                            return c;
                        }
                        var uc = void 0, vc = void 0;
                        function W(a) {
                            for(var b = ""; E[a];)b += vc[E[a++]];
                            return b;
                        }
                        var wc = [];
                        function xc() {
                            for(; wc.length;){
                                var a = wc.pop();
                                a.g.fa = !1;
                                a["delete"]();
                            }
                        }
                        var yc = void 0, zc = {};
                        function Ac(a, b) {
                            for(void 0 === b && V("ptr should not be undefined"); a.A;)b = a.na(b), a = a.A;
                            return b;
                        }
                        var Bc = {};
                        function Cc(a) {
                            a = Dc(a);
                            var b = W(a);
                            Ec(a);
                            return b;
                        }
                        function Fc(a, b) {
                            var c = Bc[a];
                            void 0 === c && V(b + " has unknown type " + Cc(a));
                            return c;
                        }
                        function Gc() {}
                        var Hc = !1;
                        function Ic(a) {
                            --a.count.value;
                            0 === a.count.value && (a.G ? a.L.W(a.G) : a.u.i.W(a.o));
                        }
                        function Jc(a, b, c) {
                            if (b === c) return a;
                            if (void 0 === c.A) return null;
                            a = Jc(a, b, c.A);
                            return null === a ? null : c.Pb(a);
                        }
                        var Kc = {};
                        function Lc(a, b) {
                            b = Ac(a, b);
                            return zc[b];
                        }
                        var Mc = void 0;
                        function Nc(a) {
                            throw new Mc(a);
                        }
                        function Oc(a, b) {
                            b.u && b.o || Nc("makeClassHandle requires ptr and ptrType");
                            !!b.L !== !!b.G && Nc("Both smartPtrType and smartPtr must be specified");
                            b.count = {
                                value: 1
                            };
                            return Pc(Object.create(a, {
                                g: {
                                    value: b
                                }
                            }));
                        }
                        function Pc(a) {
                            if ("undefined" === typeof FinalizationRegistry) return Pc = (b)=>b, a;
                            Hc = new FinalizationRegistry((b)=>{
                                Ic(b.g);
                            });
                            Pc = (b)=>{
                                var c = b.g;
                                c.G && Hc.register(b, {
                                    g: c
                                }, b);
                                return b;
                            };
                            Gc = (b)=>{
                                Hc.unregister(b);
                            };
                            return Pc(a);
                        }
                        var Qc = {};
                        function Rc(a) {
                            for(; a.length;){
                                var b = a.pop();
                                a.pop()(b);
                            }
                        }
                        function Sc(a) {
                            return this.fromWireType(L[a >> 2]);
                        }
                        var Tc = {}, Uc = {};
                        function Y(a, b, c) {
                            function d(n) {
                                n = c(n);
                                n.length !== a.length && Nc("Mismatched type converter count");
                                for(var p = 0; p < a.length; ++p)Vc(a[p], n[p]);
                            }
                            a.forEach(function(n) {
                                Uc[n] = b;
                            });
                            var e = Array(b.length), f = [], g = 0;
                            b.forEach((n, p)=>{
                                Bc.hasOwnProperty(n) ? e[p] = Bc[n] : (f.push(n), Tc.hasOwnProperty(n) || (Tc[n] = []), Tc[n].push(()=>{
                                    e[p] = Bc[n];
                                    ++g;
                                    g === f.length && d(e);
                                }));
                            });
                            0 === f.length && d(e);
                        }
                        function Wc(a) {
                            switch(a){
                                case 1:
                                    return 0;
                                case 2:
                                    return 1;
                                case 4:
                                    return 2;
                                case 8:
                                    return 3;
                                default:
                                    throw new TypeError(`Unknown type size: ${a}`);
                            }
                        }
                        function Xc(a, b, c = {}) {
                            var d = b.name;
                            a || V(`type "${d}" must have a positive integer typeid pointer`);
                            if (Bc.hasOwnProperty(a)) {
                                if (c.$b) return;
                                V(`Cannot register type '${d}' twice`);
                            }
                            Bc[a] = b;
                            delete Uc[a];
                            Tc.hasOwnProperty(a) && (b = Tc[a], delete Tc[a], b.forEach((e)=>e()));
                        }
                        function Vc(a, b, c = {}) {
                            if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                            Xc(a, b, c);
                        }
                        function Yc(a) {
                            V(a.g.u.i.name + " instance already deleted");
                        }
                        function Zc() {}
                        function $c(a, b, c) {
                            if (void 0 === a[b].B) {
                                var d = a[b];
                                a[b] = function() {
                                    a[b].B.hasOwnProperty(arguments.length) || V(`Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${a[b].B})!`);
                                    return a[b].B[arguments.length].apply(this, arguments);
                                };
                                a[b].B = [];
                                a[b].B[d.ea] = d;
                            }
                        }
                        function ad(a, b, c) {
                            m.hasOwnProperty(a) ? ((void 0 === c || void 0 !== m[a].B && void 0 !== m[a].B[c]) && V(`Cannot register public name '${a}' twice`), $c(m, a, a), m.hasOwnProperty(c) && V(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`), m[a].B[c] = b) : (m[a] = b, void 0 !== c && (m[a].Pc = c));
                        }
                        function bd(a, b, c, d, e, f, g, n) {
                            this.name = a;
                            this.constructor = b;
                            this.N = c;
                            this.W = d;
                            this.A = e;
                            this.Ub = f;
                            this.na = g;
                            this.Pb = n;
                            this.qb = [];
                        }
                        function cd(a, b, c) {
                            for(; b !== c;)b.na || V(`Expected null or instance of ${c.name}, got an instance of ${b.name}`), a = b.na(a), b = b.A;
                            return a;
                        }
                        function dd(a, b) {
                            if (null === b) return this.Na && V(`null is not a valid ${this.name}`), 0;
                            b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                            b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            return cd(b.g.o, b.g.u.i, this.i);
                        }
                        function fd(a, b) {
                            if (null === b) {
                                this.Na && V(`null is not a valid ${this.name}`);
                                if (this.ua) {
                                    var c = this.Pa();
                                    null !== a && a.push(this.W, c);
                                    return c;
                                }
                                return 0;
                            }
                            b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                            b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            !this.ta && b.g.u.ta && V(`Cannot convert argument of type ${b.g.L ? b.g.L.name : b.g.u.name} to parameter type ${this.name}`);
                            c = cd(b.g.o, b.g.u.i, this.i);
                            if (this.ua) switch(void 0 === b.g.G && V("Passing raw pointer to smart pointer is illegal"), this.tc){
                                case 0:
                                    b.g.L === this ? c = b.g.G : V(`Cannot convert argument of type ${b.g.L ? b.g.L.name : b.g.u.name} to parameter type ${this.name}`);
                                    break;
                                case 1:
                                    c = b.g.G;
                                    break;
                                case 2:
                                    if (b.g.L === this) c = b.g.G;
                                    else {
                                        var d = b.clone();
                                        c = this.oc(c, sc(function() {
                                            d["delete"]();
                                        }));
                                        null !== a && a.push(this.W, c);
                                    }
                                    break;
                                default:
                                    V("Unsupporting sharing policy");
                            }
                            return c;
                        }
                        function gd(a, b) {
                            if (null === b) return this.Na && V(`null is not a valid ${this.name}`), 0;
                            b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                            b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            b.g.u.ta && V(`Cannot convert argument of type ${b.g.u.name} to parameter type ${this.name}`);
                            return cd(b.g.o, b.g.u.i, this.i);
                        }
                        function hd(a, b, c, d) {
                            this.name = a;
                            this.i = b;
                            this.Na = c;
                            this.ta = d;
                            this.ua = !1;
                            this.W = this.oc = this.Pa = this.rb = this.tc = this.nc = void 0;
                            void 0 !== b.A ? this.toWireType = fd : (this.toWireType = d ? dd : gd, this.K = null);
                        }
                        function jd(a, b, c) {
                            m.hasOwnProperty(a) || Nc("Replacing nonexistant public symbol");
                            void 0 !== m[a].B && void 0 !== c ? m[a].B[c] = b : (m[a] = b, m[a].ea = c);
                        }
                        var kd = [], ld = (a)=>{
                            var b = kd[a];
                            b || (a >= kd.length && (kd.length = a + 1), kd[a] = b = Ka.get(a));
                            return b;
                        }, md = (a, b)=>{
                            var c = [];
                            return function() {
                                c.length = 0;
                                Object.assign(c, arguments);
                                if (a.includes("j")) {
                                    var d = m["dynCall_" + a];
                                    d = c && c.length ? d.apply(null, [
                                        b
                                    ].concat(c)) : d.call(null, b);
                                } else d = ld(b).apply(null, c);
                                return d;
                            };
                        };
                        function Z(a, b) {
                            a = W(a);
                            var c = a.includes("j") ? md(a, b) : ld(b);
                            "function" != typeof c && V(`unknown function pointer with signature ${a}: ${b}`);
                            return c;
                        }
                        var nd = void 0;
                        function od(a, b) {
                            function c(f) {
                                e[f] || Bc[f] || (Uc[f] ? Uc[f].forEach(c) : (d.push(f), e[f] = !0));
                            }
                            var d = [], e = {};
                            b.forEach(c);
                            throw new nd(`${a}: ` + d.map(Cc).join([
                                ", "
                            ]));
                        }
                        function pd(a, b, c, d, e) {
                            var f = b.length;
                            2 > f && V("argTypes array size mismatch! Must at least get return value and 'this' types!");
                            var g = null !== b[1] && null !== c, n = !1;
                            for(c = 1; c < b.length; ++c)if (null !== b[c] && void 0 === b[c].K) {
                                n = !0;
                                break;
                            }
                            var p = "void" !== b[0].name, l = f - 2, u = Array(l), v = [], x = [];
                            return function() {
                                arguments.length !== l && V(`function ${a} called with ${arguments.length} arguments, expected ${l} args!`);
                                x.length = 0;
                                v.length = g ? 2 : 1;
                                v[0] = e;
                                if (g) {
                                    var k = b[1].toWireType(x, this);
                                    v[1] = k;
                                }
                                for(var t = 0; t < l; ++t)u[t] = b[t + 2].toWireType(x, arguments[t]), v.push(u[t]);
                                t = d.apply(null, v);
                                if (n) Rc(x);
                                else for(var r = g ? 1 : 2; r < b.length; r++){
                                    var B = 1 === r ? k : u[r - 2];
                                    null !== b[r].K && b[r].K(B);
                                }
                                k = p ? b[0].fromWireType(t) : void 0;
                                return k;
                            };
                        }
                        function sd(a, b) {
                            for(var c = [], d = 0; d < a; d++)c.push(N[b + 4 * d >> 2]);
                            return c;
                        }
                        function td(a, b, c) {
                            a instanceof Object || V(`${c} with invalid "this": ${a}`);
                            a instanceof b.i.constructor || V(`${c} incompatible with "this" of type ${a.constructor.name}`);
                            a.g.o || V(`cannot call emscripten binding method ${c} on deleted object`);
                            return cd(a.g.o, a.g.u.i, b.i);
                        }
                        function ud(a) {
                            a >= U.h && 0 === --U.get(a).tb && U.Zb(a);
                        }
                        function vd(a, b, c) {
                            switch(b){
                                case 0:
                                    return function(d) {
                                        return this.fromWireType((c ? C : E)[d]);
                                    };
                                case 1:
                                    return function(d) {
                                        return this.fromWireType((c ? Da : Ea)[d >> 1]);
                                    };
                                case 2:
                                    return function(d) {
                                        return this.fromWireType((c ? L : N)[d >> 2]);
                                    };
                                default:
                                    throw new TypeError("Unknown integer type: " + a);
                            }
                        }
                        function ed(a) {
                            if (null === a) return "null";
                            var b = typeof a;
                            return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
                        }
                        function wd(a, b) {
                            switch(b){
                                case 2:
                                    return function(c) {
                                        return this.fromWireType(Fa[c >> 2]);
                                    };
                                case 3:
                                    return function(c) {
                                        return this.fromWireType(Ia[c >> 3]);
                                    };
                                default:
                                    throw new TypeError("Unknown float type: " + a);
                            }
                        }
                        function xd(a, b, c) {
                            switch(b){
                                case 0:
                                    return c ? function(d) {
                                        return C[d];
                                    } : function(d) {
                                        return E[d];
                                    };
                                case 1:
                                    return c ? function(d) {
                                        return Da[d >> 1];
                                    } : function(d) {
                                        return Ea[d >> 1];
                                    };
                                case 2:
                                    return c ? function(d) {
                                        return L[d >> 2];
                                    } : function(d) {
                                        return N[d >> 2];
                                    };
                                default:
                                    throw new TypeError("Unknown integer type: " + a);
                            }
                        }
                        var yd = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, zd = (a, b)=>{
                            var c = a >> 1;
                            for(var d = c + b / 2; !(c >= d) && Ea[c];)++c;
                            c <<= 1;
                            if (32 < c - a && yd) return yd.decode(E.subarray(a, c));
                            c = "";
                            for(d = 0; !(d >= b / 2); ++d){
                                var e = Da[a + 2 * d >> 1];
                                if (0 == e) break;
                                c += String.fromCharCode(e);
                            }
                            return c;
                        }, Ad = (a, b, c)=>{
                            void 0 === c && (c = 2147483647);
                            if (2 > c) return 0;
                            c -= 2;
                            var d = b;
                            c = c < 2 * a.length ? c / 2 : a.length;
                            for(var e = 0; e < c; ++e)Da[b >> 1] = a.charCodeAt(e), b += 2;
                            Da[b >> 1] = 0;
                            return b - d;
                        }, Bd = (a)=>2 * a.length, Cd = (a, b)=>{
                            for(var c = 0, d = ""; !(c >= b / 4);){
                                var e = L[a + 4 * c >> 2];
                                if (0 == e) break;
                                ++c;
                                65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e);
                            }
                            return d;
                        }, Dd = (a, b, c)=>{
                            void 0 === c && (c = 2147483647);
                            if (4 > c) return 0;
                            var d = b;
                            c = d + c - 4;
                            for(var e = 0; e < a.length; ++e){
                                var f = a.charCodeAt(e);
                                if (55296 <= f && 57343 >= f) {
                                    var g = a.charCodeAt(++e);
                                    f = 65536 + ((f & 1023) << 10) | g & 1023;
                                }
                                L[b >> 2] = f;
                                b += 4;
                                if (b + 4 > c) break;
                            }
                            L[b >> 2] = 0;
                            return b - d;
                        }, Ed = (a)=>{
                            for(var b = 0, c = 0; c < a.length; ++c){
                                var d = a.charCodeAt(c);
                                55296 <= d && 57343 >= d && ++c;
                                b += 4;
                            }
                            return b;
                        }, Fd = {};
                        function Gd(a) {
                            var b = Fd[a];
                            return void 0 === b ? W(a) : b;
                        }
                        var Hd = [];
                        function Id(a) {
                            var b = Hd.length;
                            Hd.push(a);
                            return b;
                        }
                        function Jd(a, b) {
                            for(var c = Array(a), d = 0; d < a; ++d)c[d] = Fc(N[b + 4 * d >> 2], "parameter " + d);
                            return c;
                        }
                        var Kd = [], Ld = [], Md = {}, Od = ()=>{
                            if (!Nd) {
                                var a = {
                                    USER: "web_user",
                                    LOGNAME: "web_user",
                                    PATH: "/",
                                    PWD: "/",
                                    HOME: "/home/web_user",
                                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                                    _: na || "./this.program"
                                }, b;
                                for(b in Md)void 0 === Md[b] ? delete a[b] : a[b] = Md[b];
                                var c = [];
                                for(b in a)c.push(`${b}=${a[b]}`);
                                Nd = c;
                            }
                            return Nd;
                        }, Nd, Pd = (a)=>0 === a % 4 && (0 !== a % 100 || 0 === a % 400), Qd = [
                            31,
                            29,
                            31,
                            30,
                            31,
                            30,
                            31,
                            31,
                            30,
                            31,
                            30,
                            31
                        ], Rd = [
                            31,
                            28,
                            31,
                            30,
                            31,
                            30,
                            31,
                            31,
                            30,
                            31,
                            30,
                            31
                        ], Sd = (a, b, c, d)=>{
                            function e(k, t, r) {
                                for(k = "number" == typeof k ? k.toString() : k || ""; k.length < t;)k = r[0] + k;
                                return k;
                            }
                            function f(k, t) {
                                return e(k, t, "0");
                            }
                            function g(k, t) {
                                function r(D) {
                                    return 0 > D ? -1 : 0 < D ? 1 : 0;
                                }
                                var B;
                                0 === (B = r(k.getFullYear() - t.getFullYear())) && 0 === (B = r(k.getMonth() - t.getMonth())) && (B = r(k.getDate() - t.getDate()));
                                return B;
                            }
                            function n(k) {
                                switch(k.getDay()){
                                    case 0:
                                        return new Date(k.getFullYear() - 1, 11, 29);
                                    case 1:
                                        return k;
                                    case 2:
                                        return new Date(k.getFullYear(), 0, 3);
                                    case 3:
                                        return new Date(k.getFullYear(), 0, 2);
                                    case 4:
                                        return new Date(k.getFullYear(), 0, 1);
                                    case 5:
                                        return new Date(k.getFullYear() - 1, 11, 31);
                                    case 6:
                                        return new Date(k.getFullYear() - 1, 11, 30);
                                }
                            }
                            function p(k) {
                                var t = k.ca;
                                for(k = new Date(new Date(k.da + 1900, 0, 1).getTime()); 0 < t;){
                                    var r = k.getMonth(), B = (Pd(k.getFullYear()) ? Qd : Rd)[r];
                                    if (t > B - k.getDate()) t -= B - k.getDate() + 1, k.setDate(1), 11 > r ? k.setMonth(r + 1) : (k.setMonth(0), k.setFullYear(k.getFullYear() + 1));
                                    else {
                                        k.setDate(k.getDate() + t);
                                        break;
                                    }
                                }
                                r = new Date(k.getFullYear() + 1, 0, 4);
                                t = n(new Date(k.getFullYear(), 0, 4));
                                r = n(r);
                                return 0 >= g(t, k) ? 0 >= g(r, k) ? k.getFullYear() + 1 : k.getFullYear() : k.getFullYear() - 1;
                            }
                            var l = L[d + 40 >> 2];
                            d = {
                                wc: L[d >> 2],
                                vc: L[d + 4 >> 2],
                                Fa: L[d + 8 >> 2],
                                Sa: L[d + 12 >> 2],
                                Ga: L[d + 16 >> 2],
                                da: L[d + 20 >> 2],
                                R: L[d + 24 >> 2],
                                ca: L[d + 28 >> 2],
                                Rc: L[d + 32 >> 2],
                                uc: L[d + 36 >> 2],
                                xc: l ? l ? nb(E, l) : "" : ""
                            };
                            c = c ? nb(E, c) : "";
                            l = {
                                "%c": "%a %b %d %H:%M:%S %Y",
                                "%D": "%m/%d/%y",
                                "%F": "%Y-%m-%d",
                                "%h": "%b",
                                "%r": "%I:%M:%S %p",
                                "%R": "%H:%M",
                                "%T": "%H:%M:%S",
                                "%x": "%m/%d/%y",
                                "%X": "%H:%M:%S",
                                "%Ec": "%c",
                                "%EC": "%C",
                                "%Ex": "%m/%d/%y",
                                "%EX": "%H:%M:%S",
                                "%Ey": "%y",
                                "%EY": "%Y",
                                "%Od": "%d",
                                "%Oe": "%e",
                                "%OH": "%H",
                                "%OI": "%I",
                                "%Om": "%m",
                                "%OM": "%M",
                                "%OS": "%S",
                                "%Ou": "%u",
                                "%OU": "%U",
                                "%OV": "%V",
                                "%Ow": "%w",
                                "%OW": "%W",
                                "%Oy": "%y"
                            };
                            for(var u in l)c = c.replace(new RegExp(u, "g"), l[u]);
                            var v = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), x = "January February March April May June July August September October November December".split(" ");
                            l = {
                                "%a": (k)=>v[k.R].substring(0, 3),
                                "%A": (k)=>v[k.R],
                                "%b": (k)=>x[k.Ga].substring(0, 3),
                                "%B": (k)=>x[k.Ga],
                                "%C": (k)=>f((k.da + 1900) / 100 | 0, 2),
                                "%d": (k)=>f(k.Sa, 2),
                                "%e": (k)=>e(k.Sa, 2, " "),
                                "%g": (k)=>p(k).toString().substring(2),
                                "%G": (k)=>p(k),
                                "%H": (k)=>f(k.Fa, 2),
                                "%I": (k)=>{
                                    k = k.Fa;
                                    0 == k ? k = 12 : 12 < k && (k -= 12);
                                    return f(k, 2);
                                },
                                "%j": (k)=>{
                                    for(var t = 0, r = 0; r <= k.Ga - 1; t += (Pd(k.da + 1900) ? Qd : Rd)[r++]);
                                    return f(k.Sa + t, 3);
                                },
                                "%m": (k)=>f(k.Ga + 1, 2),
                                "%M": (k)=>f(k.vc, 2),
                                "%n": ()=>"\n",
                                "%p": (k)=>0 <= k.Fa && 12 > k.Fa ? "AM" : "PM",
                                "%S": (k)=>f(k.wc, 2),
                                "%t": ()=>"\t",
                                "%u": (k)=>k.R || 7,
                                "%U": (k)=>f(Math.floor((k.ca + 7 - k.R) / 7), 2),
                                "%V": (k)=>{
                                    var t = Math.floor((k.ca + 7 - (k.R + 6) % 7) / 7);
                                    2 >= (k.R + 371 - k.ca - 2) % 7 && t++;
                                    if (t) 53 == t && (r = (k.R + 371 - k.ca) % 7, 4 == r || 3 == r && Pd(k.da) || (t = 1));
                                    else {
                                        t = 52;
                                        var r = (k.R + 7 - k.ca - 1) % 7;
                                        (4 == r || 5 == r && Pd(k.da % 400 - 1)) && t++;
                                    }
                                    return f(t, 2);
                                },
                                "%w": (k)=>k.R,
                                "%W": (k)=>f(Math.floor((k.ca + 7 - (k.R + 6) % 7) / 7), 2),
                                "%y": (k)=>(k.da + 1900).toString().substring(2),
                                "%Y": (k)=>k.da + 1900,
                                "%z": (k)=>{
                                    k = k.uc;
                                    var t = 0 <= k;
                                    k = Math.abs(k) / 60;
                                    return (t ? "+" : "-") + String("0000" + (k / 60 * 100 + k % 60)).slice(-4);
                                },
                                "%Z": (k)=>k.xc,
                                "%%": ()=>"%"
                            };
                            c = c.replace(/%%/g, "\x00\x00");
                            for(u in l)c.includes(u) && (c = c.replace(new RegExp(u, "g"), l[u](d)));
                            c = c.replace(/\0\0/g, "%");
                            u = rb(c, !1);
                            if (u.length > b) return 0;
                            C.set(u, a);
                            return u.length - 1;
                        };
                        function Pb(a, b, c, d) {
                            a || (a = this);
                            this.parent = a;
                            this.U = a.U;
                            this.wa = null;
                            this.id = Hb++;
                            this.name = b;
                            this.mode = c;
                            this.l = {};
                            this.m = {};
                            this.za = d;
                        }
                        Object.defineProperties(Pb.prototype, {
                            read: {
                                get: function() {
                                    return 365 === (this.mode & 365);
                                },
                                set: function(a) {
                                    a ? this.mode |= 365 : this.mode &= -366;
                                }
                            },
                            write: {
                                get: function() {
                                    return 146 === (this.mode & 146);
                                },
                                set: function(a) {
                                    a ? this.mode |= 146 : this.mode &= -147;
                                }
                            }
                        });
                        gc();
                        Ib = Array(4096);
                        Wb(P, "/");
                        S("/tmp", 16895, 0);
                        S("/home", 16895, 0);
                        S("/home/web_user", 16895, 0);
                        (()=>{
                            S("/dev", 16895, 0);
                            ub(259, {
                                read: ()=>0,
                                write: (d, e, f, g)=>g
                            });
                            Xb("/dev/null", 259);
                            tb(1280, wb);
                            tb(1536, xb);
                            Xb("/dev/tty", 1280);
                            Xb("/dev/tty1", 1536);
                            var a = new Uint8Array(1024), b = 0, c = ()=>{
                                0 === b && (b = kb(a).byteLength);
                                return a[--b];
                            };
                            jc("random", c);
                            jc("urandom", c);
                            S("/dev/shm", 16895, 0);
                            S("/dev/shm/tmp", 16895, 0);
                        })();
                        (()=>{
                            S("/proc", 16895, 0);
                            var a = S("/proc/self", 16895, 0);
                            S("/proc/self/fd", 16895, 0);
                            Wb({
                                U: ()=>{
                                    var b = Ab(a, "fd", 16895, 73);
                                    b.l = {
                                        ka: (c, d)=>{
                                            var e = Tb(+d);
                                            c = {
                                                parent: null,
                                                U: {
                                                    mb: "fake"
                                                },
                                                l: {
                                                    ma: ()=>e.path
                                                }
                                            };
                                            return c.parent = c;
                                        }
                                    };
                                    return b;
                                }
                            }, "/proc/self/fd");
                        })();
                        Object.assign(pc.prototype, {
                            get (a) {
                                return this.M[a];
                            },
                            has (a) {
                                return void 0 !== this.M[a];
                            },
                            pa (a) {
                                var b = this.hb.pop() || this.M.length;
                                this.M[b] = a;
                                return b;
                            },
                            Zb (a) {
                                this.M[a] = void 0;
                                this.hb.push(a);
                            }
                        });
                        qc = m.BindingError = class extends Error {
                            constructor(a){
                                super(a);
                                this.name = "BindingError";
                            }
                        };
                        U.M.push({
                            value: void 0
                        }, {
                            value: null
                        }, {
                            value: !0
                        }, {
                            value: !1
                        });
                        U.h = U.M.length;
                        m.count_emval_handles = function() {
                            for(var a = 0, b = U.h; b < U.M.length; ++b)void 0 !== U.M[b] && ++a;
                            return a;
                        };
                        uc = m.PureVirtualError = tc("PureVirtualError");
                        for(var Td = Array(256), Ud = 0; 256 > Ud; ++Ud)Td[Ud] = String.fromCharCode(Ud);
                        vc = Td;
                        m.getInheritedInstanceCount = function() {
                            return Object.keys(zc).length;
                        };
                        m.getLiveInheritedInstances = function() {
                            var a = [], b;
                            for(b in zc)zc.hasOwnProperty(b) && a.push(zc[b]);
                            return a;
                        };
                        m.flushPendingDeletes = xc;
                        m.setDelayFunction = function(a) {
                            yc = a;
                            wc.length && yc && yc(xc);
                        };
                        Mc = m.InternalError = class extends Error {
                            constructor(a){
                                super(a);
                                this.name = "InternalError";
                            }
                        };
                        Zc.prototype.isAliasOf = function(a) {
                            if (!(this instanceof Zc && a instanceof Zc)) return !1;
                            var b = this.g.u.i, c = this.g.o, d = a.g.u.i;
                            for(a = a.g.o; b.A;)c = b.na(c), b = b.A;
                            for(; d.A;)a = d.na(a), d = d.A;
                            return b === d && c === a;
                        };
                        Zc.prototype.clone = function() {
                            this.g.o || Yc(this);
                            if (this.g.ia) return this.g.count.value += 1, this;
                            var a = Pc, b = Object, c = b.create, d = Object.getPrototypeOf(this), e = this.g;
                            a = a(c.call(b, d, {
                                g: {
                                    value: {
                                        count: e.count,
                                        fa: e.fa,
                                        ia: e.ia,
                                        o: e.o,
                                        u: e.u,
                                        G: e.G,
                                        L: e.L
                                    }
                                }
                            }));
                            a.g.count.value += 1;
                            a.g.fa = !1;
                            return a;
                        };
                        Zc.prototype["delete"] = function() {
                            this.g.o || Yc(this);
                            this.g.fa && !this.g.ia && V("Object already scheduled for deletion");
                            Gc(this);
                            Ic(this.g);
                            this.g.ia || (this.g.G = void 0, this.g.o = void 0);
                        };
                        Zc.prototype.isDeleted = function() {
                            return !this.g.o;
                        };
                        Zc.prototype.deleteLater = function() {
                            this.g.o || Yc(this);
                            this.g.fa && !this.g.ia && V("Object already scheduled for deletion");
                            wc.push(this);
                            1 === wc.length && yc && yc(xc);
                            this.g.fa = !0;
                            return this;
                        };
                        hd.prototype.Vb = function(a) {
                            this.rb && (a = this.rb(a));
                            return a;
                        };
                        hd.prototype.ab = function(a) {
                            this.W && this.W(a);
                        };
                        hd.prototype.argPackAdvance = 8;
                        hd.prototype.readValueFromPointer = Sc;
                        hd.prototype.deleteObject = function(a) {
                            if (null !== a) a["delete"]();
                        };
                        hd.prototype.fromWireType = function(a) {
                            function b() {
                                return this.ua ? Oc(this.i.N, {
                                    u: this.nc,
                                    o: c,
                                    L: this,
                                    G: a
                                }) : Oc(this.i.N, {
                                    u: this,
                                    o: a
                                });
                            }
                            var c = this.Vb(a);
                            if (!c) return this.ab(a), null;
                            var d = Lc(this.i, c);
                            if (void 0 !== d) {
                                if (0 === d.g.count.value) return d.g.o = c, d.g.G = a, d.clone();
                                d = d.clone();
                                this.ab(a);
                                return d;
                            }
                            d = this.i.Ub(c);
                            d = Kc[d];
                            if (!d) return b.call(this);
                            d = this.ta ? d.Kb : d.pointerType;
                            var e = Jc(c, this.i, d.i);
                            return null === e ? b.call(this) : this.ua ? Oc(d.i.N, {
                                u: d,
                                o: e,
                                L: this,
                                G: a
                            }) : Oc(d.i.N, {
                                u: d,
                                o: e
                            });
                        };
                        nd = m.UnboundTypeError = tc("UnboundTypeError");
                        var Xd = {
                            __syscall_fcntl64: function(a, b, c) {
                                lc = c;
                                try {
                                    var d = Tb(a);
                                    switch(b){
                                        case 0:
                                            var e = mc();
                                            return 0 > e ? -28 : Vb(d, e).X;
                                        case 1:
                                        case 2:
                                            return 0;
                                        case 3:
                                            return d.flags;
                                        case 4:
                                            return e = mc(), d.flags |= e, 0;
                                        case 5:
                                            return e = mc(), Da[e + 0 >> 1] = 2, 0;
                                        case 6:
                                        case 7:
                                            return 0;
                                        case 16:
                                        case 8:
                                            return -28;
                                        case 9:
                                            return L[Vd() >> 2] = 28, -1;
                                        default:
                                            return -28;
                                    }
                                } catch (f) {
                                    if ("undefined" == typeof kc || "ErrnoError" !== f.name) throw f;
                                    return -f.aa;
                                }
                            },
                            __syscall_ioctl: function(a, b, c) {
                                lc = c;
                                try {
                                    var d = Tb(a);
                                    switch(b){
                                        case 21509:
                                            return d.s ? 0 : -59;
                                        case 21505:
                                            if (!d.s) return -59;
                                            if (d.s.V.bc) {
                                                b = [
                                                    3,
                                                    28,
                                                    127,
                                                    21,
                                                    4,
                                                    0,
                                                    1,
                                                    0,
                                                    17,
                                                    19,
                                                    26,
                                                    0,
                                                    18,
                                                    15,
                                                    23,
                                                    22,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0
                                                ];
                                                var e = mc();
                                                L[e >> 2] = 25856;
                                                L[e + 4 >> 2] = 5;
                                                L[e + 8 >> 2] = 191;
                                                L[e + 12 >> 2] = 35387;
                                                for(var f = 0; 32 > f; f++)C[e + f + 17 >> 0] = b[f] || 0;
                                            }
                                            return 0;
                                        case 21510:
                                        case 21511:
                                        case 21512:
                                            return d.s ? 0 : -59;
                                        case 21506:
                                        case 21507:
                                        case 21508:
                                            if (!d.s) return -59;
                                            if (d.s.V.cc) for(e = mc(), b = [], f = 0; 32 > f; f++)b.push(C[e + f + 17 >> 0]);
                                            return 0;
                                        case 21519:
                                            if (!d.s) return -59;
                                            e = mc();
                                            return L[e >> 2] = 0;
                                        case 21520:
                                            return d.s ? -28 : -59;
                                        case 21531:
                                            e = mc();
                                            if (!d.m.ac) throw new O(59);
                                            return d.m.ac(d, b, e);
                                        case 21523:
                                            if (!d.s) return -59;
                                            d.s.V.dc && (f = [
                                                24,
                                                80
                                            ], e = mc(), Da[e >> 1] = f[0], Da[e + 2 >> 1] = f[1]);
                                            return 0;
                                        case 21524:
                                            return d.s ? 0 : -59;
                                        case 21515:
                                            return d.s ? 0 : -59;
                                        default:
                                            return -28;
                                    }
                                } catch (g) {
                                    if ("undefined" == typeof kc || "ErrnoError" !== g.name) throw g;
                                    return -g.aa;
                                }
                            },
                            __syscall_openat: function(a, b, c, d) {
                                lc = d;
                                try {
                                    b = b ? nb(E, b) : "";
                                    var e = b;
                                    if ("/" === e.charAt(0)) b = e;
                                    else {
                                        var f = -100 === a ? "/" : Tb(a).path;
                                        if (0 == e.length) throw new O(44);
                                        b = gb(f + "/" + e);
                                    }
                                    var g = d ? mc() : 0;
                                    return ec(b, c, g).X;
                                } catch (n) {
                                    if ("undefined" == typeof kc || "ErrnoError" !== n.name) throw n;
                                    return -n.aa;
                                }
                            },
                            _embind_create_inheriting_constructor: function(a, b, c) {
                                a = W(a);
                                b = Fc(b, "wrapper");
                                c = rc(c);
                                var d = [].slice, e = b.i, f = e.N, g = e.A.N, n = e.A.constructor;
                                a = oc(a, function() {
                                    e.A.qb.forEach((function(l) {
                                        if (this[l] === g[l]) throw new uc(`Pure virtual function ${l} must be implemented in JavaScript`);
                                    }).bind(this));
                                    Object.defineProperty(this, "__parent", {
                                        value: f
                                    });
                                    this.__construct.apply(this, d.call(arguments));
                                });
                                f.__construct = function() {
                                    this === f && V("Pass correct 'this' to __construct");
                                    var l = n.implement.apply(void 0, [
                                        this
                                    ].concat(d.call(arguments)));
                                    Gc(l);
                                    var u = l.g;
                                    l.notifyOnDestruction();
                                    u.ia = !0;
                                    Object.defineProperties(this, {
                                        g: {
                                            value: u
                                        }
                                    });
                                    Pc(this);
                                    l = u.o;
                                    l = Ac(e, l);
                                    zc.hasOwnProperty(l) ? V(`Tried to register registered instance: ${l}`) : zc[l] = this;
                                };
                                f.__destruct = function() {
                                    this === f && V("Pass correct 'this' to __destruct");
                                    Gc(this);
                                    var l = this.g.o;
                                    l = Ac(e, l);
                                    zc.hasOwnProperty(l) ? delete zc[l] : V(`Tried to unregister unregistered instance: ${l}`);
                                };
                                a.prototype = Object.create(f);
                                for(var p in c)a.prototype[p] = c[p];
                                return sc(a);
                            },
                            _embind_finalize_value_object: function(a) {
                                var b = Qc[a];
                                delete Qc[a];
                                var c = b.Pa, d = b.W, e = b.eb, f = e.map((g)=>g.Yb).concat(e.map((g)=>g.rc));
                                Y([
                                    a
                                ], f, (g)=>{
                                    var n = {};
                                    e.forEach((p, l)=>{
                                        var u = g[l], v = p.Wb, x = p.Xb, k = g[l + e.length], t = p.qc, r = p.sc;
                                        n[p.Sb] = {
                                            read: (B)=>u.fromWireType(v(x, B)),
                                            write: (B, D)=>{
                                                var w = [];
                                                t(r, B, k.toWireType(w, D));
                                                Rc(w);
                                            }
                                        };
                                    });
                                    return [
                                        {
                                            name: b.name,
                                            fromWireType: function(p) {
                                                var l = {}, u;
                                                for(u in n)l[u] = n[u].read(p);
                                                d(p);
                                                return l;
                                            },
                                            toWireType: function(p, l) {
                                                for(var u in n){
                                                    if (!(u in l)) throw new TypeError(`Missing field: "${u}"`);
                                                }
                                                var v = c();
                                                for(u in n)n[u].write(v, l[u]);
                                                null !== p && p.push(d, v);
                                                return v;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: Sc,
                                            K: d
                                        }
                                    ];
                                });
                            },
                            _embind_register_bigint: function() {},
                            _embind_register_bool: function(a, b, c, d, e) {
                                var f = Wc(c);
                                b = W(b);
                                Vc(a, {
                                    name: b,
                                    fromWireType: function(g) {
                                        return !!g;
                                    },
                                    toWireType: function(g, n) {
                                        return n ? d : e;
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: function(g) {
                                        if (1 === c) var n = C;
                                        else if (2 === c) n = Da;
                                        else if (4 === c) n = L;
                                        else throw new TypeError("Unknown boolean type size: " + b);
                                        return this.fromWireType(n[g >> f]);
                                    },
                                    K: null
                                });
                            },
                            _embind_register_class: function(a, b, c, d, e, f, g, n, p, l, u, v, x) {
                                u = W(u);
                                f = Z(e, f);
                                n && (n = Z(g, n));
                                l && (l = Z(p, l));
                                x = Z(v, x);
                                var k = nc(u);
                                ad(k, function() {
                                    od(`Cannot construct ${u} due to unbound types`, [
                                        d
                                    ]);
                                });
                                Y([
                                    a,
                                    b,
                                    c
                                ], d ? [
                                    d
                                ] : [], function(t) {
                                    t = t[0];
                                    if (d) {
                                        var r = t.i;
                                        var B = r.N;
                                    } else B = Zc.prototype;
                                    t = oc(k, function() {
                                        if (Object.getPrototypeOf(this) !== D) throw new qc("Use 'new' to construct " + u);
                                        if (void 0 === w.$) throw new qc(u + " has no accessible constructor");
                                        var T = w.$[arguments.length];
                                        if (void 0 === T) throw new qc(`Tried to invoke ctor of ${u} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(w.$).toString()}) parameters instead!`);
                                        return T.apply(this, arguments);
                                    });
                                    var D = Object.create(B, {
                                        constructor: {
                                            value: t
                                        }
                                    });
                                    t.prototype = D;
                                    var w = new bd(u, t, D, x, r, f, n, l);
                                    w.A && (void 0 === w.A.oa && (w.A.oa = []), w.A.oa.push(w));
                                    r = new hd(u, w, !0, !1);
                                    B = new hd(u + "*", w, !1, !1);
                                    var M = new hd(u + " const*", w, !1, !0);
                                    Kc[a] = {
                                        pointerType: B,
                                        Kb: M
                                    };
                                    jd(k, t);
                                    return [
                                        r,
                                        B,
                                        M
                                    ];
                                });
                            },
                            _embind_register_class_class_function: function(a, b, c, d, e, f, g) {
                                var n = sd(c, d);
                                b = W(b);
                                f = Z(e, f);
                                Y([], [
                                    a
                                ], function(p) {
                                    function l() {
                                        od(`Cannot call ${u} due to unbound types`, n);
                                    }
                                    p = p[0];
                                    var u = `${p.name}.${b}`;
                                    b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                                    var v = p.i.constructor;
                                    void 0 === v[b] ? (l.ea = c - 1, v[b] = l) : ($c(v, b, u), v[b].B[c - 1] = l);
                                    Y([], n, function(x) {
                                        x = pd(u, [
                                            x[0],
                                            null
                                        ].concat(x.slice(1)), null, f, g);
                                        void 0 === v[b].B ? (x.ea = c - 1, v[b] = x) : v[b].B[c - 1] = x;
                                        if (p.i.oa) for (const k of p.i.oa)k.constructor.hasOwnProperty(b) || (k.constructor[b] = x);
                                        return [];
                                    });
                                    return [];
                                });
                            },
                            _embind_register_class_class_property: function(a, b, c, d, e, f, g, n) {
                                b = W(b);
                                f = Z(e, f);
                                Y([], [
                                    a
                                ], function(p) {
                                    p = p[0];
                                    var l = `${p.name}.${b}`, u = {
                                        get () {
                                            od(`Cannot access ${l} due to unbound types`, [
                                                c
                                            ]);
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    };
                                    u.set = n ? ()=>{
                                        od(`Cannot access ${l} due to unbound types`, [
                                            c
                                        ]);
                                    } : ()=>{
                                        V(`${l} is a read-only property`);
                                    };
                                    Object.defineProperty(p.i.constructor, b, u);
                                    Y([], [
                                        c
                                    ], function(v) {
                                        v = v[0];
                                        var x = {
                                            get () {
                                                return v.fromWireType(f(d));
                                            },
                                            enumerable: !0
                                        };
                                        n && (n = Z(g, n), x.set = (k)=>{
                                            var t = [];
                                            n(d, v.toWireType(t, k));
                                            Rc(t);
                                        });
                                        Object.defineProperty(p.i.constructor, b, x);
                                        return [];
                                    });
                                    return [];
                                });
                            },
                            _embind_register_class_constructor: function(a, b, c, d, e, f) {
                                var g = sd(b, c);
                                e = Z(d, e);
                                Y([], [
                                    a
                                ], function(n) {
                                    n = n[0];
                                    var p = `constructor ${n.name}`;
                                    void 0 === n.i.$ && (n.i.$ = []);
                                    if (void 0 !== n.i.$[b - 1]) throw new qc(`Cannot register multiple constructors with identical number of parameters (${b - 1}) for class '${n.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                                    n.i.$[b - 1] = ()=>{
                                        od(`Cannot construct ${n.name} due to unbound types`, g);
                                    };
                                    Y([], g, function(l) {
                                        l.splice(1, 0, null);
                                        n.i.$[b - 1] = pd(p, l, null, e, f);
                                        return [];
                                    });
                                    return [];
                                });
                            },
                            _embind_register_class_function: function(a, b, c, d, e, f, g, n) {
                                var p = sd(c, d);
                                b = W(b);
                                f = Z(e, f);
                                Y([], [
                                    a
                                ], function(l) {
                                    function u() {
                                        od(`Cannot call ${v} due to unbound types`, p);
                                    }
                                    l = l[0];
                                    var v = `${l.name}.${b}`;
                                    b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                                    n && l.i.qb.push(b);
                                    var x = l.i.N, k = x[b];
                                    void 0 === k || void 0 === k.B && k.className !== l.name && k.ea === c - 2 ? (u.ea = c - 2, u.className = l.name, x[b] = u) : ($c(x, b, v), x[b].B[c - 2] = u);
                                    Y([], p, function(t) {
                                        t = pd(v, t, l, f, g);
                                        void 0 === x[b].B ? (t.ea = c - 2, x[b] = t) : x[b].B[c - 2] = t;
                                        return [];
                                    });
                                    return [];
                                });
                            },
                            _embind_register_class_property: function(a, b, c, d, e, f, g, n, p, l) {
                                b = W(b);
                                e = Z(d, e);
                                Y([], [
                                    a
                                ], function(u) {
                                    u = u[0];
                                    var v = `${u.name}.${b}`, x = {
                                        get () {
                                            od(`Cannot access ${v} due to unbound types`, [
                                                c,
                                                g
                                            ]);
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    };
                                    x.set = p ? ()=>{
                                        od(`Cannot access ${v} due to unbound types`, [
                                            c,
                                            g
                                        ]);
                                    } : ()=>{
                                        V(v + " is a read-only property");
                                    };
                                    Object.defineProperty(u.i.N, b, x);
                                    Y([], p ? [
                                        c,
                                        g
                                    ] : [
                                        c
                                    ], function(k) {
                                        var t = k[0], r = {
                                            get () {
                                                var D = td(this, u, v + " getter");
                                                return t.fromWireType(e(f, D));
                                            },
                                            enumerable: !0
                                        };
                                        if (p) {
                                            p = Z(n, p);
                                            var B = k[1];
                                            r.set = function(D) {
                                                var w = td(this, u, v + " setter"), M = [];
                                                p(l, w, B.toWireType(M, D));
                                                Rc(M);
                                            };
                                        }
                                        Object.defineProperty(u.i.N, b, r);
                                        return [];
                                    });
                                    return [];
                                });
                            },
                            _embind_register_emval: function(a, b) {
                                b = W(b);
                                Vc(a, {
                                    name: b,
                                    fromWireType: function(c) {
                                        var d = rc(c);
                                        ud(c);
                                        return d;
                                    },
                                    toWireType: function(c, d) {
                                        return sc(d);
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Sc,
                                    K: null
                                });
                            },
                            _embind_register_enum: function(a, b, c, d) {
                                function e() {}
                                c = Wc(c);
                                b = W(b);
                                e.values = {};
                                Vc(a, {
                                    name: b,
                                    constructor: e,
                                    fromWireType: function(f) {
                                        return this.constructor.values[f];
                                    },
                                    toWireType: function(f, g) {
                                        return g.value;
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: vd(b, c, d),
                                    K: null
                                });
                                ad(b, e);
                            },
                            _embind_register_enum_value: function(a, b, c) {
                                var d = Fc(a, "enum");
                                b = W(b);
                                a = d.constructor;
                                d = Object.create(d.constructor.prototype, {
                                    value: {
                                        value: c
                                    },
                                    constructor: {
                                        value: oc(`${d.name}_${b}`, function() {})
                                    }
                                });
                                a.values[c] = d;
                                a[b] = d;
                            },
                            _embind_register_float: function(a, b, c) {
                                c = Wc(c);
                                b = W(b);
                                Vc(a, {
                                    name: b,
                                    fromWireType: function(d) {
                                        return d;
                                    },
                                    toWireType: function(d, e) {
                                        return e;
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: wd(b, c),
                                    K: null
                                });
                            },
                            _embind_register_function: function(a, b, c, d, e, f) {
                                var g = sd(b, c);
                                a = W(a);
                                e = Z(d, e);
                                ad(a, function() {
                                    od(`Cannot call ${a} due to unbound types`, g);
                                }, b - 1);
                                Y([], g, function(n) {
                                    jd(a, pd(a, [
                                        n[0],
                                        null
                                    ].concat(n.slice(1)), null, e, f), b - 1);
                                    return [];
                                });
                            },
                            _embind_register_integer: function(a, b, c, d, e) {
                                b = W(b);
                                -1 === e && (e = 4294967295);
                                e = Wc(c);
                                var f = (n)=>n;
                                if (0 === d) {
                                    var g = 32 - 8 * c;
                                    f = (n)=>n << g >>> g;
                                }
                                c = b.includes("unsigned") ? function(n, p) {
                                    return p >>> 0;
                                } : function(n, p) {
                                    return p;
                                };
                                Vc(a, {
                                    name: b,
                                    fromWireType: f,
                                    toWireType: c,
                                    argPackAdvance: 8,
                                    readValueFromPointer: xd(b, e, 0 !== d),
                                    K: null
                                });
                            },
                            _embind_register_memory_view: function(a, b, c) {
                                function d(f) {
                                    f >>= 2;
                                    var g = N;
                                    return new e(g.buffer, g[f + 1], g[f]);
                                }
                                var e = [
                                    Int8Array,
                                    Uint8Array,
                                    Int16Array,
                                    Uint16Array,
                                    Int32Array,
                                    Uint32Array,
                                    Float32Array,
                                    Float64Array
                                ][b];
                                c = W(c);
                                Vc(a, {
                                    name: c,
                                    fromWireType: d,
                                    argPackAdvance: 8,
                                    readValueFromPointer: d
                                }, {
                                    $b: !0
                                });
                            },
                            _embind_register_std_string: function(a, b) {
                                b = W(b);
                                var c = "std::string" === b;
                                Vc(a, {
                                    name: b,
                                    fromWireType: function(d) {
                                        var e = N[d >> 2], f = d + 4;
                                        if (c) for(var g = f, n = 0; n <= e; ++n){
                                            var p = f + n;
                                            if (n == e || 0 == E[p]) {
                                                g = g ? nb(E, g, p - g) : "";
                                                if (void 0 === l) var l = g;
                                                else l += String.fromCharCode(0), l += g;
                                                g = p + 1;
                                            }
                                        }
                                        else {
                                            l = Array(e);
                                            for(n = 0; n < e; ++n)l[n] = String.fromCharCode(E[f + n]);
                                            l = l.join("");
                                        }
                                        Ec(d);
                                        return l;
                                    },
                                    toWireType: function(d, e) {
                                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                        var f = "string" == typeof e;
                                        f || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || V("Cannot pass non-string to std::string");
                                        var g = c && f ? pb(e) : e.length;
                                        var n = Wd(4 + g + 1), p = n + 4;
                                        N[n >> 2] = g;
                                        if (c && f) qb(e, E, p, g + 1);
                                        else {
                                            if (f) for(f = 0; f < g; ++f){
                                                var l = e.charCodeAt(f);
                                                255 < l && (Ec(p), V("String has UTF-16 code units that do not fit in 8 bits"));
                                                E[p + f] = l;
                                            }
                                            else for(f = 0; f < g; ++f)E[p + f] = e[f];
                                        }
                                        null !== d && d.push(Ec, n);
                                        return n;
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Sc,
                                    K: function(d) {
                                        Ec(d);
                                    }
                                });
                            },
                            _embind_register_std_wstring: function(a, b, c) {
                                c = W(c);
                                if (2 === b) {
                                    var d = zd;
                                    var e = Ad;
                                    var f = Bd;
                                    var g = ()=>Ea;
                                    var n = 1;
                                } else 4 === b && (d = Cd, e = Dd, f = Ed, g = ()=>N, n = 2);
                                Vc(a, {
                                    name: c,
                                    fromWireType: function(p) {
                                        for(var l = N[p >> 2], u = g(), v, x = p + 4, k = 0; k <= l; ++k){
                                            var t = p + 4 + k * b;
                                            if (k == l || 0 == u[t >> n]) x = d(x, t - x), void 0 === v ? v = x : (v += String.fromCharCode(0), v += x), x = t + b;
                                        }
                                        Ec(p);
                                        return v;
                                    },
                                    toWireType: function(p, l) {
                                        "string" != typeof l && V(`Cannot pass non-string to C++ string type ${c}`);
                                        var u = f(l), v = Wd(4 + u + b);
                                        N[v >> 2] = u >> n;
                                        e(l, v + 4, u + b);
                                        null !== p && p.push(Ec, v);
                                        return v;
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Sc,
                                    K: function(p) {
                                        Ec(p);
                                    }
                                });
                            },
                            _embind_register_value_object: function(a, b, c, d, e, f) {
                                Qc[a] = {
                                    name: W(b),
                                    Pa: Z(c, d),
                                    W: Z(e, f),
                                    eb: []
                                };
                            },
                            _embind_register_value_object_field: function(a, b, c, d, e, f, g, n, p, l) {
                                Qc[a].eb.push({
                                    Sb: W(b),
                                    Yb: c,
                                    Wb: Z(d, e),
                                    Xb: f,
                                    rc: g,
                                    qc: Z(n, p),
                                    sc: l
                                });
                            },
                            _embind_register_void: function(a, b) {
                                b = W(b);
                                Vc(a, {
                                    fc: !0,
                                    name: b,
                                    argPackAdvance: 0,
                                    fromWireType: function() {},
                                    toWireType: function() {}
                                });
                            },
                            _emscripten_get_now_is_monotonic: ()=>!0,
                            _emval_as: function(a, b, c) {
                                a = rc(a);
                                b = Fc(b, "emval::as");
                                var d = [], e = sc(d);
                                N[c >> 2] = e;
                                return b.toWireType(d, a);
                            },
                            _emval_call_method: function(a, b, c, d, e) {
                                a = Hd[a];
                                b = rc(b);
                                c = Gd(c);
                                var f = [];
                                N[d >> 2] = sc(f);
                                return a(b, c, f, e);
                            },
                            _emval_call_void_method: function(a, b, c, d) {
                                a = Hd[a];
                                b = rc(b);
                                c = Gd(c);
                                a(b, c, null, d);
                            },
                            _emval_decref: ud,
                            _emval_get_method_caller: function(a, b) {
                                var c = Jd(a, b), d = c[0];
                                b = d.name + "_$" + c.slice(1).map(function(g) {
                                    return g.name;
                                }).join("_") + "$";
                                var e = Kd[b];
                                if (void 0 !== e) return e;
                                var f = Array(a - 1);
                                e = Id((g, n, p, l)=>{
                                    for(var u = 0, v = 0; v < a - 1; ++v)f[v] = c[v + 1].readValueFromPointer(l + u), u += c[v + 1].argPackAdvance;
                                    g = g[n].apply(g, f);
                                    for(v = 0; v < a - 1; ++v)c[v + 1].Nb && c[v + 1].Nb(f[v]);
                                    if (!d.fc) return d.toWireType(p, g);
                                });
                                return Kd[b] = e;
                            },
                            _emval_get_module_property: function(a) {
                                a = Gd(a);
                                return sc(m[a]);
                            },
                            _emval_get_property: function(a, b) {
                                a = rc(a);
                                b = rc(b);
                                return sc(a[b]);
                            },
                            _emval_incref: function(a) {
                                4 < a && (U.get(a).tb += 1);
                            },
                            _emval_new_array: function() {
                                return sc([]);
                            },
                            _emval_new_cstring: function(a) {
                                return sc(Gd(a));
                            },
                            _emval_new_object: function() {
                                return sc({});
                            },
                            _emval_run_destructors: function(a) {
                                var b = rc(a);
                                Rc(b);
                                ud(a);
                            },
                            _emval_set_property: function(a, b, c) {
                                a = rc(a);
                                b = rc(b);
                                c = rc(c);
                                a[b] = c;
                            },
                            _emval_take_value: function(a, b) {
                                a = Fc(a, "_emval_take_value");
                                a = a.readValueFromPointer(b);
                                return sc(a);
                            },
                            abort: ()=>{
                                Aa("");
                            },
                            emscripten_asm_const_int: (a, b, c)=>{
                                Ld.length = 0;
                                var d;
                                for(c >>= 2; d = E[b++];)c += 105 != d & c, Ld.push(105 == d ? L[c] : Ia[c++ >> 1]), ++c;
                                return db[a].apply(null, Ld);
                            },
                            emscripten_date_now: function() {
                                return Date.now();
                            },
                            emscripten_get_now: ()=>performance.now(),
                            emscripten_memcpy_big: (a, b, c)=>E.copyWithin(a, b, b + c),
                            emscripten_resize_heap: (a)=>{
                                var b = E.length;
                                a >>>= 0;
                                if (2147483648 < a) return !1;
                                for(var c = 1; 4 >= c; c *= 2){
                                    var d = b * (1 + 0.2 / c);
                                    d = Math.min(d, a + 100663296);
                                    var e = Math;
                                    d = Math.max(a, d);
                                    a: {
                                        e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - Ba.buffer.byteLength + 65535 >>> 16;
                                        try {
                                            Ba.grow(e);
                                            Ja();
                                            var f = 1;
                                            break a;
                                        } catch (g) {}
                                        f = void 0;
                                    }
                                    if (f) return !0;
                                }
                                return !1;
                            },
                            environ_get: (a, b)=>{
                                var c = 0;
                                Od().forEach(function(d, e) {
                                    var f = b + c;
                                    e = N[a + 4 * e >> 2] = f;
                                    for(f = 0; f < d.length; ++f)C[e++ >> 0] = d.charCodeAt(f);
                                    C[e >> 0] = 0;
                                    c += d.length + 1;
                                });
                                return 0;
                            },
                            environ_sizes_get: (a, b)=>{
                                var c = Od();
                                N[a >> 2] = c.length;
                                var d = 0;
                                c.forEach(function(e) {
                                    d += e.length + 1;
                                });
                                N[b >> 2] = d;
                                return 0;
                            },
                            fd_close: function(a) {
                                try {
                                    var b = Tb(a);
                                    if (null === b.X) throw new O(8);
                                    b.Ma && (b.Ma = null);
                                    try {
                                        b.m.close && b.m.close(b);
                                    } catch (c) {
                                        throw c;
                                    } finally{
                                        Gb[b.X] = null;
                                    }
                                    b.X = null;
                                    return 0;
                                } catch (c) {
                                    if ("undefined" == typeof kc || "ErrnoError" !== c.name) throw c;
                                    return c.aa;
                                }
                            },
                            fd_read: function(a, b, c, d) {
                                try {
                                    a: {
                                        var e = Tb(a);
                                        a = b;
                                        for(var f, g = b = 0; g < c; g++){
                                            var n = N[a >> 2], p = N[a + 4 >> 2];
                                            a += 8;
                                            var l = e, u = n, v = p, x = f, k = C;
                                            if (0 > v || 0 > x) throw new O(28);
                                            if (null === l.X) throw new O(8);
                                            if (1 === (l.flags & 2097155)) throw new O(8);
                                            if (16384 === (l.node.mode & 61440)) throw new O(31);
                                            if (!l.m.read) throw new O(28);
                                            var t = "undefined" != typeof x;
                                            if (!t) x = l.position;
                                            else if (!l.seekable) throw new O(70);
                                            var r = l.m.read(l, k, u, v, x);
                                            t || (l.position += r);
                                            var B = r;
                                            if (0 > B) {
                                                var D = -1;
                                                break a;
                                            }
                                            b += B;
                                            if (B < p) break;
                                            "undefined" !== typeof f && (f += B);
                                        }
                                        D = b;
                                    }
                                    N[d >> 2] = D;
                                    return 0;
                                } catch (w) {
                                    if ("undefined" == typeof kc || "ErrnoError" !== w.name) throw w;
                                    return w.aa;
                                }
                            },
                            fd_seek: function(a, b, c, d, e) {
                                b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
                                try {
                                    if (isNaN(b)) return 61;
                                    var f = Tb(a);
                                    fc(f, b, d);
                                    $a = [
                                        f.position >>> 0,
                                        (Za = f.position, 1.0 <= +Math.abs(Za) ? 0.0 < Za ? +Math.floor(Za / 4294967296.0) >>> 0 : ~~+Math.ceil((Za - +(~~Za >>> 0)) / 4294967296.0) >>> 0 : 0)
                                    ];
                                    L[e >> 2] = $a[0];
                                    L[e + 4 >> 2] = $a[1];
                                    f.Ma && 0 === b && 0 === d && (f.Ma = null);
                                    return 0;
                                } catch (g) {
                                    if ("undefined" == typeof kc || "ErrnoError" !== g.name) throw g;
                                    return g.aa;
                                }
                            },
                            fd_write: function(a, b, c, d) {
                                try {
                                    a: {
                                        var e = Tb(a);
                                        a = b;
                                        for(var f, g = b = 0; g < c; g++){
                                            var n = N[a >> 2], p = N[a + 4 >> 2];
                                            a += 8;
                                            var l = e, u = n, v = p, x = f, k = C;
                                            if (0 > v || 0 > x) throw new O(28);
                                            if (null === l.X) throw new O(8);
                                            if (0 === (l.flags & 2097155)) throw new O(8);
                                            if (16384 === (l.node.mode & 61440)) throw new O(31);
                                            if (!l.m.write) throw new O(28);
                                            l.seekable && l.flags & 1024 && fc(l, 0, 2);
                                            var t = "undefined" != typeof x;
                                            if (!t) x = l.position;
                                            else if (!l.seekable) throw new O(70);
                                            var r = l.m.write(l, k, u, v, x, void 0);
                                            t || (l.position += r);
                                            var B = r;
                                            if (0 > B) {
                                                var D = -1;
                                                break a;
                                            }
                                            b += B;
                                            "undefined" !== typeof f && (f += B);
                                        }
                                        D = b;
                                    }
                                    N[d >> 2] = D;
                                    return 0;
                                } catch (w) {
                                    if ("undefined" == typeof kc || "ErrnoError" !== w.name) throw w;
                                    return w.aa;
                                }
                            },
                            strftime_l: (a, b, c, d)=>Sd(a, b, c, d)
                        };
                        (function() {
                            function a(c) {
                                z = c = c.exports;
                                Ba = z.memory;
                                Ja();
                                Ka = z.__indirect_function_table;
                                Ma.unshift(z.__wasm_call_ctors);
                                Pa--;
                                m.monitorRunDependencies && m.monitorRunDependencies(Pa);
                                if (0 == Pa && (null !== Qa && (clearInterval(Qa), Qa = null), Ra)) {
                                    var d = Ra;
                                    Ra = null;
                                    d();
                                }
                                return c;
                            }
                            var b = {
                                env: Xd,
                                wasi_snapshot_preview1: Xd
                            };
                            Pa++;
                            m.monitorRunDependencies && m.monitorRunDependencies(Pa);
                            if (m.instantiateWasm) try {
                                return m.instantiateWasm(b, a);
                            } catch (c) {
                                xa("Module.instantiateWasm callback failed with error: " + c), ba(c);
                            }
                            Ya(b, function(c) {
                                a(c.instance);
                            }).catch(ba);
                            return {};
                        })();
                        var Ec = (a)=>(Ec = z.free)(a), Wd = (a)=>(Wd = z.malloc)(a), ab = m._ma_device__on_notification_unlocked = (a)=>(ab = m._ma_device__on_notification_unlocked = z.ma_device__on_notification_unlocked)(a);
                        m._ma_malloc_emscripten = (a, b)=>(m._ma_malloc_emscripten = z.ma_malloc_emscripten)(a, b);
                        m._ma_free_emscripten = (a, b)=>(m._ma_free_emscripten = z.ma_free_emscripten)(a, b);
                        var bb = m._ma_device_process_pcm_frames_capture__webaudio = (a, b, c)=>(bb = m._ma_device_process_pcm_frames_capture__webaudio = z.ma_device_process_pcm_frames_capture__webaudio)(a, b, c), cb = m._ma_device_process_pcm_frames_playback__webaudio = (a, b, c)=>(cb = m._ma_device_process_pcm_frames_playback__webaudio = z.ma_device_process_pcm_frames_playback__webaudio)(a, b, c), Vd = ()=>(Vd = z.__errno_location)(), Dc = (a)=>(Dc = z.__getTypeName)(a);
                        m.__embind_initialize_bindings = ()=>(m.__embind_initialize_bindings = z._embind_initialize_bindings)();
                        m.dynCall_iiji = (a, b, c, d, e)=>(m.dynCall_iiji = z.dynCall_iiji)(a, b, c, d, e);
                        m.dynCall_jiji = (a, b, c, d, e)=>(m.dynCall_jiji = z.dynCall_jiji)(a, b, c, d, e);
                        m.dynCall_iiiji = (a, b, c, d, e, f)=>(m.dynCall_iiiji = z.dynCall_iiiji)(a, b, c, d, e, f);
                        m.dynCall_iij = (a, b, c, d)=>(m.dynCall_iij = z.dynCall_iij)(a, b, c, d);
                        m.dynCall_jii = (a, b, c)=>(m.dynCall_jii = z.dynCall_jii)(a, b, c);
                        m.dynCall_viijii = (a, b, c, d, e, f, g)=>(m.dynCall_viijii = z.dynCall_viijii)(a, b, c, d, e, f, g);
                        m.dynCall_iiiiij = (a, b, c, d, e, f, g)=>(m.dynCall_iiiiij = z.dynCall_iiiiij)(a, b, c, d, e, f, g);
                        m.dynCall_iiiiijj = (a, b, c, d, e, f, g, n, p)=>(m.dynCall_iiiiijj = z.dynCall_iiiiijj)(a, b, c, d, e, f, g, n, p);
                        m.dynCall_iiiiiijj = (a, b, c, d, e, f, g, n, p, l)=>(m.dynCall_iiiiiijj = z.dynCall_iiiiiijj)(a, b, c, d, e, f, g, n, p, l);
                        var Yd;
                        Ra = function Zd() {
                            Yd || $d();
                            Yd || (Ra = Zd);
                        };
                        function $d() {
                            function a() {
                                if (!Yd && (Yd = !0, m.calledRun = !0, !Ca)) {
                                    m.noFSInit || hc || (hc = !0, gc(), m.stdin = m.stdin, m.stdout = m.stdout, m.stderr = m.stderr, m.stdin ? jc("stdin", m.stdin) : cc("/dev/tty", "/dev/stdin"), m.stdout ? jc("stdout", null, m.stdout) : cc("/dev/tty", "/dev/stdout"), m.stderr ? jc("stderr", null, m.stderr) : cc("/dev/tty1", "/dev/stderr"), ec("/dev/stdin", 0), ec("/dev/stdout", 1), ec("/dev/stderr", 1));
                                    Jb = !1;
                                    eb(Ma);
                                    aa(m);
                                    if (m.onRuntimeInitialized) m.onRuntimeInitialized();
                                    if (m.postRun) for("function" == typeof m.postRun && (m.postRun = [
                                        m.postRun
                                    ]); m.postRun.length;){
                                        var b = m.postRun.shift();
                                        Na.unshift(b);
                                    }
                                    eb(Na);
                                }
                            }
                            if (!(0 < Pa)) {
                                if (m.preRun) for("function" == typeof m.preRun && (m.preRun = [
                                    m.preRun
                                ]); m.preRun.length;)Oa();
                                eb(La);
                                0 < Pa || (m.setStatus ? (m.setStatus("Running..."), setTimeout(function() {
                                    setTimeout(function() {
                                        m.setStatus("");
                                    }, 1);
                                    a();
                                }, 1)) : a());
                            }
                        }
                        if (m.preInit) for("function" == typeof m.preInit && (m.preInit = [
                            m.preInit
                        ]); 0 < m.preInit.length;)m.preInit.pop()();
                        $d();
                        return moduleArg.ready;
                    };
                })();
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Rive;
            /***/ },
            /* 2 */ /***/ (module1)=>{
                module1.exports = /*#__PURE__*/ JSON.parse('{"name":"@rive-app/canvas","version":"2.26.5","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}');
            /***/ },
            /* 3 */ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Animation: ()=>/* reexport safe */ _Animation__WEBPACK_IMPORTED_MODULE_0__.Animation
                });
                /* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
            /***/ },
            /* 4 */ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Animation: ()=>/* binding */ Animation
                });
                /**
 * Represents an animation that can be played on an Artboard.
 * Wraps animations and instances from the runtime and keeps track of playback state.
 *
 * The `Animation` class manages the state and behavior of a single animation instance,
 * including its current time, loop count, and ability to scrub to a specific time.
 *
 * The class provides methods to advance the animation, apply its interpolated keyframe
 * values to the Artboard, and clean up the underlying animation instance when the
 * animation is no longer needed.
 */ var Animation = /** @class */ function() {
                    /**
     * Constructs a new animation
     * @constructor
     * @param {any} animation: runtime animation object
     * @param {any} instance: runtime animation instance object
     */ function Animation(animation, artboard, runtime, playing) {
                        this.animation = animation;
                        this.artboard = artboard;
                        this.playing = playing;
                        this.loopCount = 0;
                        /**
         * The time to which the animation should move to on the next render.
         * If not null, the animation will scrub to this time instead of advancing by the given time.
         */ this.scrubTo = null;
                        this.instance = new runtime.LinearAnimationInstance(animation, artboard);
                    }
                    Object.defineProperty(Animation.prototype, "name", {
                        /**
         * Returns the animation's name
         */ get: function() {
                            return this.animation.name;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Animation.prototype, "time", {
                        /**
         * Returns the animation's name
         */ get: function() {
                            return this.instance.time;
                        },
                        /**
         * Sets the animation's current time
         */ set: function(value) {
                            this.instance.time = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Animation.prototype, "loopValue", {
                        /**
         * Returns the animation's loop type
         */ get: function() {
                            return this.animation.loopValue;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Animation.prototype, "needsScrub", {
                        /**
         * Indicates whether the animation needs to be scrubbed.
         * @returns `true` if the animation needs to be scrubbed, `false` otherwise.
         */ get: function() {
                            return this.scrubTo !== null;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    /**
     * Advances the animation by the give time. If the animation needs scrubbing,
     * time is ignored and the stored scrub value is used.
     * @param time the time to advance the animation by if no scrubbing required
     */ Animation.prototype.advance = function(time) {
                        if (this.scrubTo === null) this.instance.advance(time);
                        else {
                            this.instance.time = 0;
                            this.instance.advance(this.scrubTo);
                            this.scrubTo = null;
                        }
                    };
                    /**
     * Apply interpolated keyframe values to the artboard. This should be called after calling
     * .advance() on an animation instance so that new values are applied to properties.
     *
     * Note: This does not advance the artboard, which updates all objects on the artboard
     * @param mix - Mix value for the animation from 0 to 1
     */ Animation.prototype.apply = function(mix) {
                        this.instance.apply(mix);
                    };
                    /**
     * Deletes the backing Wasm animation instance; once this is called, this
     * animation is no more.
     */ Animation.prototype.cleanup = function() {
                        this.instance.delete();
                    };
                    return Animation;
                }();
            /***/ },
            /* 5 */ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ BLANK_URL: ()=>/* reexport safe */ _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.BLANK_URL,
                    /* harmony export */ registerTouchInteractions: ()=>/* reexport safe */ _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__.registerTouchInteractions,
                    /* harmony export */ sanitizeUrl: ()=>/* reexport safe */ _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.sanitizeUrl
                });
                /* harmony import */ var _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
                /* harmony import */ var _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
            /***/ },
            /* 6 */ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ registerTouchInteractions: ()=>/* binding */ registerTouchInteractions
                });
                var _this = undefined;
                /**
 * Returns the clientX and clientY properties from touch or mouse events. Also
 * calls preventDefault() on the event if it is a touchstart or touchmove to prevent
 * scrolling the page on mobile devices
 * @param event - Either a TouchEvent or a MouseEvent
 * @returns - Coordinates of the clientX and clientY properties from the touch/mouse event
 */ var getClientCoordinates = function(event, isTouchScrollEnabled) {
                    var _a, _b;
                    if ([
                        "touchstart",
                        "touchmove"
                    ].indexOf(event.type) > -1 && ((_a = event.touches) === null || _a === void 0 ? void 0 : _a.length)) {
                        // This flag, if false, prevents touch events on the canvas default behavior
                        // which may prevent scrolling if a drag motion on the canvas is performed
                        if (!isTouchScrollEnabled) event.preventDefault();
                        return {
                            clientX: event.touches[0].clientX,
                            clientY: event.touches[0].clientY
                        };
                    } else if (event.type === "touchend" && ((_b = event.changedTouches) === null || _b === void 0 ? void 0 : _b.length)) return {
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY
                    };
                    else return {
                        clientX: event.clientX,
                        clientY: event.clientY
                    };
                };
                /**
 * Registers mouse move/up/down callback handlers on the canvas to send meaningful coordinates to
 * the state machine pointer move/up/down functions based on cursor interaction
 */ var registerTouchInteractions = function(_a) {
                    var canvas = _a.canvas, artboard = _a.artboard, _b = _a.stateMachines, stateMachines = _b === void 0 ? [] : _b, renderer = _a.renderer, rive = _a.rive, fit = _a.fit, alignment = _a.alignment, _c = _a.isTouchScrollEnabled, isTouchScrollEnabled = _c === void 0 ? false : _c, _d = _a.layoutScaleFactor, layoutScaleFactor = _d === void 0 ? 1.0 : _d;
                    if (!canvas || !stateMachines.length || !renderer || !rive || !artboard || typeof window === "undefined") return null;
                    /**
     * After a touchend event, some browsers may fire synthetic mouse events
     * (mouseover, mousedown, mousemove, mouseup) if the touch interaction did not cause
     * any default action (such as scrolling).
     *
     * This is done to simulate the behavior of a mouse for applications that do not support
     * touch events.
     *
     * We're keeping track of the previous event to not send the synthetic mouse events if the
     * touch event was a click (touchstart -> touchend).
     *
     * This is only needed when `isTouchScrollEnabled` is false
     * When true, `preventDefault()` is called which prevents this behaviour.
     **/ var _prevEventType = null;
                    var _syntheticEventsActive = false;
                    var processEventCallback = function(event) {
                        // Exit early out of all synthetic mouse events
                        // https://stackoverflow.com/questions/9656990/how-to-prevent-simulated-mouse-events-in-mobile-browsers
                        // https://stackoverflow.com/questions/25572070/javascript-touchend-versus-click-dilemma
                        if (_syntheticEventsActive && event instanceof MouseEvent) {
                            // Synthetic event finished
                            if (event.type == "mouseup") _syntheticEventsActive = false;
                            return;
                        }
                        // Test if it's a "touch click". This could cause the browser to send
                        // synthetic mouse events.
                        _syntheticEventsActive = isTouchScrollEnabled && event.type === "touchend" && _prevEventType === "touchstart";
                        _prevEventType = event.type;
                        var boundingRect = event.currentTarget.getBoundingClientRect();
                        var _a = getClientCoordinates(event, isTouchScrollEnabled), clientX = _a.clientX, clientY = _a.clientY;
                        if (!clientX && !clientY) return;
                        var canvasX = clientX - boundingRect.left;
                        var canvasY = clientY - boundingRect.top;
                        var forwardMatrix = rive.computeAlignment(fit, alignment, {
                            minX: 0,
                            minY: 0,
                            maxX: boundingRect.width,
                            maxY: boundingRect.height
                        }, artboard.bounds, layoutScaleFactor);
                        var invertedMatrix = new rive.Mat2D();
                        forwardMatrix.invert(invertedMatrix);
                        var canvasCoordinatesVector = new rive.Vec2D(canvasX, canvasY);
                        var transformedVector = rive.mapXY(invertedMatrix, canvasCoordinatesVector);
                        var transformedX = transformedVector.x();
                        var transformedY = transformedVector.y();
                        transformedVector.delete();
                        invertedMatrix.delete();
                        canvasCoordinatesVector.delete();
                        forwardMatrix.delete();
                        switch(event.type){
                            /**
             * There's a 2px buffer for a hitRadius when translating the pointer coordinates
             * down to the state machine. In cases where the hitbox is about that much away
             * from the Artboard border, we don't have exact precision on determining pointer
             * exit. We're therefore adding to the translated coordinates on mouseout of a canvas
             * to ensure that we report the mouse has truly exited the hitarea.
             * https://github.com/rive-app/rive-cpp/blob/master/src/animation/state_machine_instance.cpp#L336
             *
             * We add/subtract 10000 to account for when the graphic goes beyond the canvas bound
             * due to for example, a fit: 'cover'. Not perfect, but helps reliably (for now) ensure
             * we report going out of bounds when the mouse is out of the canvas
             */ case "mouseout":
                                for(var _i = 0, stateMachines_1 = stateMachines; _i < stateMachines_1.length; _i++){
                                    var stateMachine = stateMachines_1[_i];
                                    stateMachine.pointerMove(transformedX, transformedY);
                                }
                                break;
                            // Pointer moving/hovering on the canvas
                            case "touchmove":
                            case "mouseover":
                            case "mousemove":
                                for(var _b = 0, stateMachines_2 = stateMachines; _b < stateMachines_2.length; _b++){
                                    var stateMachine = stateMachines_2[_b];
                                    stateMachine.pointerMove(transformedX, transformedY);
                                }
                                break;
                            // Pointer click initiated but not released yet on the canvas
                            case "touchstart":
                            case "mousedown":
                                for(var _c = 0, stateMachines_3 = stateMachines; _c < stateMachines_3.length; _c++){
                                    var stateMachine = stateMachines_3[_c];
                                    stateMachine.pointerDown(transformedX, transformedY);
                                }
                                break;
                            // Pointer click released on the canvas
                            case "touchend":
                            case "mouseup":
                                for(var _d = 0, stateMachines_4 = stateMachines; _d < stateMachines_4.length; _d++){
                                    var stateMachine = stateMachines_4[_d];
                                    stateMachine.pointerUp(transformedX, transformedY);
                                }
                                break;
                            default:
                        }
                    };
                    var callback = processEventCallback.bind(_this);
                    canvas.addEventListener("mouseover", callback);
                    canvas.addEventListener("mouseout", callback);
                    canvas.addEventListener("mousemove", callback);
                    canvas.addEventListener("mousedown", callback);
                    canvas.addEventListener("mouseup", callback);
                    canvas.addEventListener("touchmove", callback, {
                        passive: isTouchScrollEnabled
                    });
                    canvas.addEventListener("touchstart", callback, {
                        passive: isTouchScrollEnabled
                    });
                    canvas.addEventListener("touchend", callback);
                    return function() {
                        canvas.removeEventListener("mouseover", callback);
                        canvas.removeEventListener("mouseout", callback);
                        canvas.removeEventListener("mousemove", callback);
                        canvas.removeEventListener("mousedown", callback);
                        canvas.removeEventListener("mouseup", callback);
                        canvas.removeEventListener("touchmove", callback);
                        canvas.removeEventListener("touchstart", callback);
                        canvas.removeEventListener("touchend", callback);
                    };
                };
            /***/ },
            /* 7 */ /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ BLANK_URL: ()=>/* binding */ BLANK_URL,
                    /* harmony export */ sanitizeUrl: ()=>/* binding */ sanitizeUrl
                });
                // Reference: https://github.com/braintree/sanitize-url/tree/main
                var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
                var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
                var htmlCtrlEntityRegex = /&(newline|tab);/gi;
                var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
                var urlSchemeRegex = /^.+(:|&colon;)/gim;
                var relativeFirstCharacters = [
                    ".",
                    "/"
                ];
                var BLANK_URL = "about:blank";
                function isRelativeUrlWithoutProtocol(url) {
                    return relativeFirstCharacters.indexOf(url[0]) > -1;
                }
                // adapted from https://stackoverflow.com/a/29824550/2601552
                function decodeHtmlCharacters(str) {
                    var removedNullByte = str.replace(ctrlCharactersRegex, "");
                    return removedNullByte.replace(htmlEntitiesRegex, function(match, dec) {
                        return String.fromCharCode(dec);
                    });
                }
                function sanitizeUrl(url) {
                    if (!url) return BLANK_URL;
                    var sanitizedUrl = decodeHtmlCharacters(url).replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
                    if (!sanitizedUrl) return BLANK_URL;
                    if (isRelativeUrlWithoutProtocol(sanitizedUrl)) return sanitizedUrl;
                    var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
                    if (!urlSchemeParseResults) return sanitizedUrl;
                    var urlScheme = urlSchemeParseResults[0];
                    if (invalidProtocolRegex.test(urlScheme)) return BLANK_URL;
                    return sanitizedUrl;
                }
            /***/ }
        ];
        /************************************************************************/ /******/ // The module cache
        /******/ var __webpack_module_cache__ = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) /******/ return cachedModule.exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__);
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /************************************************************************/ /******/ /* webpack/runtime/define property getters */ /******/ (()=>{
            /******/ // define getter functions for harmony exports
            /******/ __webpack_require__.d = (exports, definition)=>{
                /******/ for(var key in definition)/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) /******/ Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            /******/ };
        /******/ })();
        /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ (()=>{
            /******/ __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
        /******/ })();
        /******/ /******/ /* webpack/runtime/make namespace object */ /******/ (()=>{
            /******/ // define __esModule on exports
            /******/ __webpack_require__.r = (exports)=>{
                /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/ Object.defineProperty(exports, '__esModule', {
                    value: true
                });
            /******/ };
        /******/ })();
        /******/ /************************************************************************/ var __webpack_exports__ = {};
        // This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
        (()=>{
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ Alignment: ()=>/* binding */ Alignment,
                /* harmony export */ DataEnum: ()=>/* binding */ DataEnum,
                /* harmony export */ EventType: ()=>/* binding */ EventType,
                /* harmony export */ Fit: ()=>/* binding */ Fit,
                /* harmony export */ Layout: ()=>/* binding */ Layout,
                /* harmony export */ LoopType: ()=>/* binding */ LoopType,
                /* harmony export */ Rive: ()=>/* binding */ Rive,
                /* harmony export */ RiveEventType: ()=>/* binding */ RiveEventType,
                /* harmony export */ RiveFile: ()=>/* binding */ RiveFile,
                /* harmony export */ RuntimeLoader: ()=>/* binding */ RuntimeLoader,
                /* harmony export */ StateMachineInput: ()=>/* binding */ StateMachineInput,
                /* harmony export */ StateMachineInputType: ()=>/* binding */ StateMachineInputType,
                /* harmony export */ Testing: ()=>/* binding */ Testing,
                /* harmony export */ ViewModel: ()=>/* binding */ ViewModel,
                /* harmony export */ ViewModelInstance: ()=>/* binding */ ViewModelInstance,
                /* harmony export */ ViewModelInstanceBoolean: ()=>/* binding */ ViewModelInstanceBoolean,
                /* harmony export */ ViewModelInstanceColor: ()=>/* binding */ ViewModelInstanceColor,
                /* harmony export */ ViewModelInstanceEnum: ()=>/* binding */ ViewModelInstanceEnum,
                /* harmony export */ ViewModelInstanceNumber: ()=>/* binding */ ViewModelInstanceNumber,
                /* harmony export */ ViewModelInstanceString: ()=>/* binding */ ViewModelInstanceString,
                /* harmony export */ ViewModelInstanceTrigger: ()=>/* binding */ ViewModelInstanceTrigger,
                /* harmony export */ ViewModelInstanceValue: ()=>/* binding */ ViewModelInstanceValue,
                /* harmony export */ decodeAudio: ()=>/* binding */ decodeAudio,
                /* harmony export */ decodeFont: ()=>/* binding */ decodeFont,
                /* harmony export */ decodeImage: ()=>/* binding */ decodeImage
            });
            /* harmony import */ var _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
            /* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
            /* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
            /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
            var __extends = function() {
                var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                    };
                    return extendStatics(d, b);
                };
                return function(d, b) {
                    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            var __assign = function() {
                __assign = Object.assign || function(t) {
                    for(var s, i = 1, n = arguments.length; i < n; i++){
                        s = arguments[i];
                        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var __awaiter = function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                        resolve(value);
                    });
                }
                return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = function(thisArg, body) {
                var _ = {
                    label: 0,
                    sent: function() {
                        if (t[0] & 1) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
                return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return step([
                            n,
                            v
                        ]);
                    };
                }
                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while(g && (g = 0, op[0] && (_ = 0)), _)try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [
                            op[0] & 2,
                            t.value
                        ];
                        switch(op[0]){
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [
                                    0
                                ];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [
                            6,
                            e
                        ];
                        y = 0;
                    } finally{
                        f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            };
            var RiveError = /** @class */ function(_super) {
                __extends(RiveError, _super);
                function RiveError() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.isHandledError = true;
                    return _this;
                }
                return RiveError;
            }(Error);
            // #regions helpers
            var resolveErrorMessage = function(error) {
                return error && error.isHandledError ? error.message : "Problem loading file; may be corrupt!";
            };
            // #region layout
            // Fit options for the canvas
            var Fit;
            (function(Fit) {
                Fit["Cover"] = "cover";
                Fit["Contain"] = "contain";
                Fit["Fill"] = "fill";
                Fit["FitWidth"] = "fitWidth";
                Fit["FitHeight"] = "fitHeight";
                Fit["None"] = "none";
                Fit["ScaleDown"] = "scaleDown";
                Fit["Layout"] = "layout";
            })(Fit || (Fit = {}));
            // Alignment options for the canvas
            var Alignment;
            (function(Alignment) {
                Alignment["Center"] = "center";
                Alignment["TopLeft"] = "topLeft";
                Alignment["TopCenter"] = "topCenter";
                Alignment["TopRight"] = "topRight";
                Alignment["CenterLeft"] = "centerLeft";
                Alignment["CenterRight"] = "centerRight";
                Alignment["BottomLeft"] = "bottomLeft";
                Alignment["BottomCenter"] = "bottomCenter";
                Alignment["BottomRight"] = "bottomRight";
            })(Alignment || (Alignment = {}));
            // Alignment options for Rive animations in a HTML canvas
            var Layout = /** @class */ function() {
                function Layout(params) {
                    var _a, _b, _c, _d, _e, _f, _g;
                    this.fit = (_a = params === null || params === void 0 ? void 0 : params.fit) !== null && _a !== void 0 ? _a : Fit.Contain;
                    this.alignment = (_b = params === null || params === void 0 ? void 0 : params.alignment) !== null && _b !== void 0 ? _b : Alignment.Center;
                    this.layoutScaleFactor = (_c = params === null || params === void 0 ? void 0 : params.layoutScaleFactor) !== null && _c !== void 0 ? _c : 1;
                    this.minX = (_d = params === null || params === void 0 ? void 0 : params.minX) !== null && _d !== void 0 ? _d : 0;
                    this.minY = (_e = params === null || params === void 0 ? void 0 : params.minY) !== null && _e !== void 0 ? _e : 0;
                    this.maxX = (_f = params === null || params === void 0 ? void 0 : params.maxX) !== null && _f !== void 0 ? _f : 0;
                    this.maxY = (_g = params === null || params === void 0 ? void 0 : params.maxY) !== null && _g !== void 0 ? _g : 0;
                }
                // Alternative constructor to build a Layout from an interface/object
                Layout.new = function(_a) {
                    var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                    console.warn("This function is deprecated: please use `new Layout({})` instead");
                    return new Layout({
                        fit: fit,
                        alignment: alignment,
                        minX: minX,
                        minY: minY,
                        maxX: maxX,
                        maxY: maxY
                    });
                };
                /**
     * Makes a copy of the layout, replacing any specified parameters
     */ Layout.prototype.copyWith = function(_a) {
                    var fit = _a.fit, alignment = _a.alignment, layoutScaleFactor = _a.layoutScaleFactor, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                    return new Layout({
                        fit: fit !== null && fit !== void 0 ? fit : this.fit,
                        alignment: alignment !== null && alignment !== void 0 ? alignment : this.alignment,
                        layoutScaleFactor: layoutScaleFactor !== null && layoutScaleFactor !== void 0 ? layoutScaleFactor : this.layoutScaleFactor,
                        minX: minX !== null && minX !== void 0 ? minX : this.minX,
                        minY: minY !== null && minY !== void 0 ? minY : this.minY,
                        maxX: maxX !== null && maxX !== void 0 ? maxX : this.maxX,
                        maxY: maxY !== null && maxY !== void 0 ? maxY : this.maxY
                    });
                };
                // Returns fit for the Wasm runtime format
                Layout.prototype.runtimeFit = function(rive) {
                    if (this.cachedRuntimeFit) return this.cachedRuntimeFit;
                    var fit;
                    if (this.fit === Fit.Cover) fit = rive.Fit.cover;
                    else if (this.fit === Fit.Contain) fit = rive.Fit.contain;
                    else if (this.fit === Fit.Fill) fit = rive.Fit.fill;
                    else if (this.fit === Fit.FitWidth) fit = rive.Fit.fitWidth;
                    else if (this.fit === Fit.FitHeight) fit = rive.Fit.fitHeight;
                    else if (this.fit === Fit.ScaleDown) fit = rive.Fit.scaleDown;
                    else if (this.fit === Fit.Layout) fit = rive.Fit.layout;
                    else fit = rive.Fit.none;
                    this.cachedRuntimeFit = fit;
                    return fit;
                };
                // Returns alignment for the Wasm runtime format
                Layout.prototype.runtimeAlignment = function(rive) {
                    if (this.cachedRuntimeAlignment) return this.cachedRuntimeAlignment;
                    var alignment;
                    if (this.alignment === Alignment.TopLeft) alignment = rive.Alignment.topLeft;
                    else if (this.alignment === Alignment.TopCenter) alignment = rive.Alignment.topCenter;
                    else if (this.alignment === Alignment.TopRight) alignment = rive.Alignment.topRight;
                    else if (this.alignment === Alignment.CenterLeft) alignment = rive.Alignment.centerLeft;
                    else if (this.alignment === Alignment.CenterRight) alignment = rive.Alignment.centerRight;
                    else if (this.alignment === Alignment.BottomLeft) alignment = rive.Alignment.bottomLeft;
                    else if (this.alignment === Alignment.BottomCenter) alignment = rive.Alignment.bottomCenter;
                    else if (this.alignment === Alignment.BottomRight) alignment = rive.Alignment.bottomRight;
                    else alignment = rive.Alignment.center;
                    this.cachedRuntimeAlignment = alignment;
                    return alignment;
                };
                return Layout;
            }();
            // Runtime singleton; use getInstance to provide a callback that returns the
            // Rive runtime
            var RuntimeLoader = /** @class */ function() {
                // Class is never instantiated
                function RuntimeLoader() {}
                // Loads the runtime
                RuntimeLoader.loadRuntime = function() {
                    _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]({
                        // Loads Wasm bundle
                        locateFile: function() {
                            return RuntimeLoader.wasmURL;
                        }
                    }).then(function(rive) {
                        var _a;
                        RuntimeLoader.runtime = rive;
                        // Fire all the callbacks
                        while(RuntimeLoader.callBackQueue.length > 0)(_a = RuntimeLoader.callBackQueue.shift()) === null || _a === void 0 || _a(RuntimeLoader.runtime);
                    }).catch(function(error) {
                        // Capture specific error details
                        var errorDetails = {
                            message: (error === null || error === void 0 ? void 0 : error.message) || "Unknown error",
                            type: (error === null || error === void 0 ? void 0 : error.name) || "Error",
                            // Some browsers may provide additional WebAssembly-specific details
                            wasmError: error instanceof WebAssembly.CompileError || error instanceof WebAssembly.RuntimeError,
                            originalError: error
                        };
                        // Log detailed error for debugging
                        console.debug("Rive WASM load error details:", errorDetails);
                        // In case unpkg fails, or the wasm was not supported, we try to load the fallback module from jsdelivr.
                        // This `rive_fallback.wasm` is compiled to support older architecture.
                        // TODO: (Gordon): preemptively test browser support and load the correct wasm file. Then use jsdelvr only if unpkg fails.
                        var backupJsdelivrUrl = "https://cdn.jsdelivr.net/npm/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive_fallback.wasm");
                        if (RuntimeLoader.wasmURL.toLowerCase() !== backupJsdelivrUrl) {
                            console.warn("Failed to load WASM from ".concat(RuntimeLoader.wasmURL, " (").concat(errorDetails.message, "), trying jsdelivr as a backup"));
                            RuntimeLoader.setWasmUrl(backupJsdelivrUrl);
                            RuntimeLoader.loadRuntime();
                        } else {
                            var errorMessage = [
                                "Could not load Rive WASM file from ".concat(RuntimeLoader.wasmURL, " or ").concat(backupJsdelivrUrl, "."),
                                "Possible reasons:",
                                "- Network connection is down",
                                "- WebAssembly is not supported in this environment",
                                "- The WASM file is corrupted or incompatible",
                                "\nError details:",
                                "- Type: ".concat(errorDetails.type),
                                "- Message: ".concat(errorDetails.message),
                                "- WebAssembly-specific error: ".concat(errorDetails.wasmError),
                                "\nTo resolve, you may need to:",
                                "1. Check your network connection",
                                "2. Set a new WASM source via RuntimeLoader.setWasmUrl()",
                                "3. Call RuntimeLoader.loadRuntime() again"
                            ].join("\n");
                            console.error(errorMessage);
                        }
                    });
                };
                // Provides a runtime instance via a callback
                RuntimeLoader.getInstance = function(callback) {
                    // If it's not loading, start loading runtime
                    if (!RuntimeLoader.isLoading) {
                        RuntimeLoader.isLoading = true;
                        RuntimeLoader.loadRuntime();
                    }
                    if (!RuntimeLoader.runtime) RuntimeLoader.callBackQueue.push(callback);
                    else callback(RuntimeLoader.runtime);
                };
                // Provides a runtime instance via a promise
                RuntimeLoader.awaitInstance = function() {
                    return new Promise(function(resolve) {
                        return RuntimeLoader.getInstance(function(rive) {
                            return resolve(rive);
                        });
                    });
                };
                // Manually sets the wasm url
                RuntimeLoader.setWasmUrl = function(url) {
                    RuntimeLoader.wasmURL = url;
                };
                // Gets the current wasm url
                RuntimeLoader.getWasmUrl = function() {
                    return RuntimeLoader.wasmURL;
                };
                // Flag to indicate that loading has started/completed
                RuntimeLoader.isLoading = false;
                // List of callbacks for the runtime that come in while loading
                RuntimeLoader.callBackQueue = [];
                // Path to the Wasm file; default path works for testing only;
                // if embedded wasm is used then this is never used.
                RuntimeLoader.wasmURL = "https://unpkg.com/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive.wasm");
                return RuntimeLoader;
            }();
            // #endregion
            // #region state machines
            var StateMachineInputType;
            (function(StateMachineInputType) {
                StateMachineInputType[StateMachineInputType["Number"] = 56] = "Number";
                StateMachineInputType[StateMachineInputType["Trigger"] = 58] = "Trigger";
                StateMachineInputType[StateMachineInputType["Boolean"] = 59] = "Boolean";
            })(StateMachineInputType || (StateMachineInputType = {}));
            /**
 * An input for a state machine
 */ var StateMachineInput = /** @class */ function() {
                function StateMachineInput(type, runtimeInput) {
                    this.type = type;
                    this.runtimeInput = runtimeInput;
                }
                Object.defineProperty(StateMachineInput.prototype, "name", {
                    /**
         * Returns the name of the input
         */ get: function() {
                        return this.runtimeInput.name;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(StateMachineInput.prototype, "value", {
                    /**
         * Returns the current value of the input
         */ get: function() {
                        return this.runtimeInput.value;
                    },
                    /**
         * Sets the value of the input
         */ set: function(value) {
                        this.runtimeInput.value = value;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Fires a trigger; does nothing on Number or Boolean input types
     */ StateMachineInput.prototype.fire = function() {
                    if (this.type === StateMachineInputType.Trigger) this.runtimeInput.fire();
                };
                /**
     * Deletes the input
     */ StateMachineInput.prototype.delete = function() {
                    this.runtimeInput = null;
                };
                return StateMachineInput;
            }();
            var RiveEventType;
            (function(RiveEventType) {
                RiveEventType[RiveEventType["General"] = 128] = "General";
                RiveEventType[RiveEventType["OpenUrl"] = 131] = "OpenUrl";
            })(RiveEventType || (RiveEventType = {}));
            var StateMachine = /** @class */ function() {
                /**
     * @constructor
     * @param stateMachine runtime state machine object
     * @param instance runtime state machine instance object
     */ function StateMachine(stateMachine, runtime, playing, artboard) {
                    this.stateMachine = stateMachine;
                    this.playing = playing;
                    this.artboard = artboard;
                    /**
         * Caches the inputs from the runtime
         */ this.inputs = [];
                    this.instance = new runtime.StateMachineInstance(stateMachine, artboard);
                    this.initInputs(runtime);
                }
                Object.defineProperty(StateMachine.prototype, "name", {
                    get: function() {
                        return this.stateMachine.name;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(StateMachine.prototype, "statesChanged", {
                    /**
         * Returns a list of state names that have changed on this frame
         */ get: function() {
                        var names = [];
                        for(var i = 0; i < this.instance.stateChangedCount(); i++)names.push(this.instance.stateChangedNameByIndex(i));
                        return names;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Advances the state machine instance by a given time.
     * @param time - the time to advance the animation by in seconds
     */ StateMachine.prototype.advance = function(time) {
                    this.instance.advance(time);
                };
                /**
     * Advances the state machine instance by a given time and apply changes to artboard.
     * @param time - the time to advance the animation by in seconds
     */ StateMachine.prototype.advanceAndApply = function(time) {
                    this.instance.advanceAndApply(time);
                };
                /**
     * Returns the number of events reported from the last advance call
     * @returns Number of events reported
     */ StateMachine.prototype.reportedEventCount = function() {
                    return this.instance.reportedEventCount();
                };
                /**
     * Returns a RiveEvent object emitted from the last advance call at the given index
     * of a list of potentially multiple events. If an event at the index is not found,
     * undefined is returned.
     * @param i index of the event reported in a list of potentially multiple events
     * @returns RiveEvent or extended RiveEvent object returned, or undefined
     */ StateMachine.prototype.reportedEventAt = function(i) {
                    return this.instance.reportedEventAt(i);
                };
                /**
     * Fetches references to the state machine's inputs and caches them
     * @param runtime an instance of the runtime; needed for the SMIInput types
     */ StateMachine.prototype.initInputs = function(runtime) {
                    // Fetch the inputs from the runtime if we don't have them
                    for(var i = 0; i < this.instance.inputCount(); i++){
                        var input = this.instance.input(i);
                        this.inputs.push(this.mapRuntimeInput(input, runtime));
                    }
                };
                /**
     * Maps a runtime input to it's appropriate type
     * @param input
     */ StateMachine.prototype.mapRuntimeInput = function(input, runtime) {
                    if (input.type === runtime.SMIInput.bool) return new StateMachineInput(StateMachineInputType.Boolean, input.asBool());
                    else if (input.type === runtime.SMIInput.number) return new StateMachineInput(StateMachineInputType.Number, input.asNumber());
                    else if (input.type === runtime.SMIInput.trigger) return new StateMachineInput(StateMachineInputType.Trigger, input.asTrigger());
                };
                /**
     * Deletes the backing Wasm state machine instance; once this is called, this
     * state machine is no more.
     */ StateMachine.prototype.cleanup = function() {
                    this.inputs.forEach(function(input) {
                        input.delete();
                    });
                    this.inputs.length = 0;
                    this.instance.delete();
                };
                StateMachine.prototype.bindViewModelInstance = function(viewModelInstance) {
                    if (viewModelInstance.runtimeInstance != null) this.instance.bindViewModelInstance(viewModelInstance.runtimeInstance);
                };
                return StateMachine;
            }();
            // #endregion
            // #region animator
            /**
 * Manages animation
 */ var Animator = /** @class */ function() {
                /**
     * Constructs a new animator
     * @constructor
     * @param runtime Rive runtime; needed to instance animations & state machines
     * @param artboard the artboard that holds all animations and state machines
     * @param animations optional list of animations
     * @param stateMachines optional list of state machines
     */ function Animator(runtime, artboard, eventManager, animations, stateMachines) {
                    if (animations === void 0) animations = [];
                    if (stateMachines === void 0) stateMachines = [];
                    this.runtime = runtime;
                    this.artboard = artboard;
                    this.eventManager = eventManager;
                    this.animations = animations;
                    this.stateMachines = stateMachines;
                }
                /**
     * Adds animations and state machines by their names. If names are shared
     * between animations & state machines, then the first one found will be
     * created. Best not to use the same names for these in your Rive file.
     * @param animatable the name(s) of animations and state machines to add
     * @returns a list of names of the playing animations and state machines
     */ Animator.prototype.add = function(animatables, playing, fireEvent) {
                    if (fireEvent === void 0) fireEvent = true;
                    animatables = mapToStringArray(animatables);
                    // If animatables is empty, play or pause everything
                    if (animatables.length === 0) {
                        this.animations.forEach(function(a) {
                            return a.playing = playing;
                        });
                        this.stateMachines.forEach(function(m) {
                            return m.playing = playing;
                        });
                    } else {
                        // Play/pause already instanced items, or create new instances
                        var instancedAnimationNames = this.animations.map(function(a) {
                            return a.name;
                        });
                        var instancedMachineNames = this.stateMachines.map(function(m) {
                            return m.name;
                        });
                        for(var i = 0; i < animatables.length; i++){
                            var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                            var mIndex = instancedMachineNames.indexOf(animatables[i]);
                            if (aIndex >= 0 || mIndex >= 0) {
                                if (aIndex >= 0) // Animation is instanced, play/pause it
                                this.animations[aIndex].playing = playing;
                                else // State machine is instanced, play/pause it
                                this.stateMachines[mIndex].playing = playing;
                            } else {
                                // Try to create a new animation instance
                                var anim = this.artboard.animationByName(animatables[i]);
                                if (anim) {
                                    var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_2__.Animation(anim, this.artboard, this.runtime, playing);
                                    // Display the first frame of the specified animation
                                    newAnimation.advance(0);
                                    newAnimation.apply(1.0);
                                    this.animations.push(newAnimation);
                                } else {
                                    // Try to create a new state machine instance
                                    var sm = this.artboard.stateMachineByName(animatables[i]);
                                    if (sm) {
                                        var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                                        this.stateMachines.push(newStateMachine);
                                    }
                                }
                            }
                        }
                    }
                    // Fire play/paused events for animations
                    if (fireEvent) {
                        if (playing) this.eventManager.fire({
                            type: EventType.Play,
                            data: this.playing
                        });
                        else this.eventManager.fire({
                            type: EventType.Pause,
                            data: this.paused
                        });
                    }
                    return playing ? this.playing : this.paused;
                };
                /**
     * Adds linear animations by their names.
     * @param animatables the name(s) of animations to add
     * @param playing whether animations should play on instantiation
     */ Animator.prototype.initLinearAnimations = function(animatables, playing) {
                    // Play/pause already instanced items, or create new instances
                    // This validation is kept to maintain compatibility with current behavior.
                    // But given that it this is called during artboard initialization
                    // it should probably be safe to remove.
                    var instancedAnimationNames = this.animations.map(function(a) {
                        return a.name;
                    });
                    for(var i = 0; i < animatables.length; i++){
                        var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                        if (aIndex >= 0) this.animations[aIndex].playing = playing;
                        else {
                            // Try to create a new animation instance
                            var anim = this.artboard.animationByName(animatables[i]);
                            if (anim) {
                                var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_2__.Animation(anim, this.artboard, this.runtime, playing);
                                // Display the first frame of the specified animation
                                newAnimation.advance(0);
                                newAnimation.apply(1.0);
                                this.animations.push(newAnimation);
                            }
                        }
                    }
                };
                /**
     * Adds state machines by their names.
     * @param animatables the name(s) of state machines to add
     * @param playing whether state machines should play on instantiation
     */ Animator.prototype.initStateMachines = function(animatables, playing) {
                    // Play/pause already instanced items, or create new instances
                    // This validation is kept to maintain compatibility with current behavior.
                    // But given that it this is called during artboard initialization
                    // it should probably be safe to remove.
                    var instancedStateMachineNames = this.stateMachines.map(function(a) {
                        return a.name;
                    });
                    for(var i = 0; i < animatables.length; i++){
                        var aIndex = instancedStateMachineNames.indexOf(animatables[i]);
                        if (aIndex >= 0) this.stateMachines[aIndex].playing = playing;
                        else {
                            // Try to create a new state machine instance
                            var sm = this.artboard.stateMachineByName(animatables[i]);
                            if (sm) {
                                var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                                this.stateMachines.push(newStateMachine);
                                if (!playing) newStateMachine.advanceAndApply(0);
                            } else // In order to maintain compatibility with current behavior, if a state machine is not found
                            // we look for an animation with the same name
                            this.initLinearAnimations([
                                animatables[i]
                            ], playing);
                        }
                    }
                };
                /**
     * Play the named animations/state machines
     * @param animatables the names of the animations/machines to play; plays all if empty
     * @returns a list of the playing items
     */ Animator.prototype.play = function(animatables) {
                    return this.add(animatables, true);
                };
                /**
     * Pauses named animations and state machines, or everything if nothing is
     * specified
     * @param animatables names of the animations and state machines to pause
     * @returns a list of names of the animations and state machines paused
     */ Animator.prototype.pause = function(animatables) {
                    return this.add(animatables, false);
                };
                /**
     * Set time of named animations
     * @param animations names of the animations to scrub
     * @param value time scrub value, a floating point number to which the playhead is jumped
     * @returns a list of names of the animations that were scrubbed
     */ Animator.prototype.scrub = function(animatables, value) {
                    var forScrubbing = this.animations.filter(function(a) {
                        return animatables.includes(a.name);
                    });
                    forScrubbing.forEach(function(a) {
                        return a.scrubTo = value;
                    });
                    return forScrubbing.map(function(a) {
                        return a.name;
                    });
                };
                Object.defineProperty(Animator.prototype, "playing", {
                    /**
         * Returns a list of names of all animations and state machines currently
         * playing
         */ get: function() {
                        return this.animations.filter(function(a) {
                            return a.playing;
                        }).map(function(a) {
                            return a.name;
                        }).concat(this.stateMachines.filter(function(m) {
                            return m.playing;
                        }).map(function(m) {
                            return m.name;
                        }));
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Animator.prototype, "paused", {
                    /**
         * Returns a list of names of all animations and state machines currently
         * paused
         */ get: function() {
                        return this.animations.filter(function(a) {
                            return !a.playing;
                        }).map(function(a) {
                            return a.name;
                        }).concat(this.stateMachines.filter(function(m) {
                            return !m.playing;
                        }).map(function(m) {
                            return m.name;
                        }));
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Stops and removes all named animations and state machines
     * @param animatables animations and state machines to remove
     * @returns a list of names of removed items
     */ Animator.prototype.stop = function(animatables) {
                    var _this = this;
                    animatables = mapToStringArray(animatables);
                    // If nothing's specified, wipe them out, all of them
                    var removedNames = [];
                    // Stop everything
                    if (animatables.length === 0) {
                        removedNames = this.animations.map(function(a) {
                            return a.name;
                        }).concat(this.stateMachines.map(function(m) {
                            return m.name;
                        }));
                        // Clean up before emptying the arrays
                        this.animations.forEach(function(a) {
                            return a.cleanup();
                        });
                        this.stateMachines.forEach(function(m) {
                            return m.cleanup();
                        });
                        // Empty out the arrays
                        this.animations.splice(0, this.animations.length);
                        this.stateMachines.splice(0, this.stateMachines.length);
                    } else {
                        // Remove only the named animations/state machines
                        var animationsToRemove = this.animations.filter(function(a) {
                            return animatables.includes(a.name);
                        });
                        animationsToRemove.forEach(function(a) {
                            a.cleanup();
                            _this.animations.splice(_this.animations.indexOf(a), 1);
                        });
                        var machinesToRemove = this.stateMachines.filter(function(m) {
                            return animatables.includes(m.name);
                        });
                        machinesToRemove.forEach(function(m) {
                            m.cleanup();
                            _this.stateMachines.splice(_this.stateMachines.indexOf(m), 1);
                        });
                        removedNames = animationsToRemove.map(function(a) {
                            return a.name;
                        }).concat(machinesToRemove.map(function(m) {
                            return m.name;
                        }));
                    }
                    this.eventManager.fire({
                        type: EventType.Stop,
                        data: removedNames
                    });
                    // Return the list of animations removed
                    return removedNames;
                };
                Object.defineProperty(Animator.prototype, "isPlaying", {
                    /**
         * Returns true if at least one animation is active
         */ get: function() {
                        return this.animations.reduce(function(acc, curr) {
                            return acc || curr.playing;
                        }, false) || this.stateMachines.reduce(function(acc, curr) {
                            return acc || curr.playing;
                        }, false);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Animator.prototype, "isPaused", {
                    /**
         * Returns true if all animations are paused and there's at least one animation
         */ get: function() {
                        return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Animator.prototype, "isStopped", {
                    /**
         * Returns true if there are no playing or paused animations/state machines
         */ get: function() {
                        return this.animations.length === 0 && this.stateMachines.length === 0;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * If there are no animations or state machines, add the first one found
     * @returns the name of the animation or state machine instanced
     */ Animator.prototype.atLeastOne = function(playing, fireEvent) {
                    if (fireEvent === void 0) fireEvent = true;
                    var instancedName;
                    if (this.animations.length === 0 && this.stateMachines.length === 0) {
                        if (this.artboard.animationCount() > 0) // Add the first animation
                        this.add([
                            instancedName = this.artboard.animationByIndex(0).name
                        ], playing, fireEvent);
                        else if (this.artboard.stateMachineCount() > 0) // Add the first state machine
                        this.add([
                            instancedName = this.artboard.stateMachineByIndex(0).name
                        ], playing, fireEvent);
                    }
                    return instancedName;
                };
                /**
     * Checks if any animations have looped and if so, fire the appropriate event
     */ Animator.prototype.handleLooping = function() {
                    for(var _i = 0, _a = this.animations.filter(function(a) {
                        return a.playing;
                    }); _i < _a.length; _i++){
                        var animation = _a[_i];
                        // Emit if the animation looped
                        if (animation.loopValue === 0 && animation.loopCount) {
                            animation.loopCount = 0;
                            // This is a one-shot; if it has ended, delete the instance
                            this.stop(animation.name);
                        } else if (animation.loopValue === 1 && animation.loopCount) {
                            this.eventManager.fire({
                                type: EventType.Loop,
                                data: {
                                    animation: animation.name,
                                    type: LoopType.Loop
                                }
                            });
                            animation.loopCount = 0;
                        } else if (animation.loopValue === 2 && animation.loopCount > 1) {
                            this.eventManager.fire({
                                type: EventType.Loop,
                                data: {
                                    animation: animation.name,
                                    type: LoopType.PingPong
                                }
                            });
                            animation.loopCount = 0;
                        }
                    }
                };
                /**
     * Checks if states have changed in state machines and fires a statechange
     * event
     */ Animator.prototype.handleStateChanges = function() {
                    var statesChanged = [];
                    for(var _i = 0, _a = this.stateMachines.filter(function(sm) {
                        return sm.playing;
                    }); _i < _a.length; _i++){
                        var stateMachine = _a[_i];
                        statesChanged.push.apply(statesChanged, stateMachine.statesChanged);
                    }
                    if (statesChanged.length > 0) this.eventManager.fire({
                        type: EventType.StateChange,
                        data: statesChanged
                    });
                };
                Animator.prototype.handleAdvancing = function(time) {
                    this.eventManager.fire({
                        type: EventType.Advance,
                        data: time
                    });
                };
                return Animator;
            }();
            // #endregion
            // #region events
            /**
 * Supported event types triggered in Rive
 */ var EventType;
            (function(EventType) {
                EventType["Load"] = "load";
                EventType["LoadError"] = "loaderror";
                EventType["Play"] = "play";
                EventType["Pause"] = "pause";
                EventType["Stop"] = "stop";
                EventType["Loop"] = "loop";
                EventType["Draw"] = "draw";
                EventType["Advance"] = "advance";
                EventType["StateChange"] = "statechange";
                EventType["RiveEvent"] = "riveevent";
                EventType["AudioStatusChange"] = "audiostatuschange";
            })(EventType || (EventType = {}));
            /**
 * Looping types: one-shot, loop, and ping-pong
 */ var LoopType;
            (function(LoopType) {
                LoopType["OneShot"] = "oneshot";
                LoopType["Loop"] = "loop";
                LoopType["PingPong"] = "pingpong";
            })(LoopType || (LoopType = {}));
            // Manages Rive events and listeners
            var EventManager = /** @class */ function() {
                function EventManager(listeners) {
                    if (listeners === void 0) listeners = [];
                    this.listeners = listeners;
                }
                // Gets listeners of specified type
                EventManager.prototype.getListeners = function(type) {
                    return this.listeners.filter(function(e) {
                        return e.type === type;
                    });
                };
                // Adds a listener
                EventManager.prototype.add = function(listener) {
                    if (!this.listeners.includes(listener)) this.listeners.push(listener);
                };
                /**
     * Removes a listener
     * @param listener the listener with the callback to be removed
     */ EventManager.prototype.remove = function(listener) {
                    // We can't simply look for the listener as it'll be a different instance to
                    // one originally subscribed. Find all the listeners of the right type and
                    // then check their callbacks which should match.
                    for(var i = 0; i < this.listeners.length; i++){
                        var currentListener = this.listeners[i];
                        if (currentListener.type === listener.type) {
                            if (currentListener.callback === listener.callback) {
                                this.listeners.splice(i, 1);
                                break;
                            }
                        }
                    }
                };
                /**
     * Clears all listeners of specified type, or every listener if no type is
     * specified
     * @param type the type of listeners to clear, or all listeners if not
     * specified
     */ EventManager.prototype.removeAll = function(type) {
                    var _this = this;
                    if (!type) this.listeners.splice(0, this.listeners.length);
                    else this.listeners.filter(function(l) {
                        return l.type === type;
                    }).forEach(function(l) {
                        return _this.remove(l);
                    });
                };
                // Fires an event
                EventManager.prototype.fire = function(event) {
                    var eventListeners = this.getListeners(event.type);
                    eventListeners.forEach(function(listener) {
                        return listener.callback(event);
                    });
                };
                return EventManager;
            }();
            // Manages a queue of tasks
            var TaskQueueManager = /** @class */ function() {
                function TaskQueueManager(eventManager) {
                    this.eventManager = eventManager;
                    this.queue = [];
                }
                // Adds a task top the queue
                TaskQueueManager.prototype.add = function(task) {
                    this.queue.push(task);
                };
                // Processes all tasks in the queue
                TaskQueueManager.prototype.process = function() {
                    while(this.queue.length > 0){
                        var task = this.queue.shift();
                        if (task === null || task === void 0 ? void 0 : task.action) task.action();
                        if (task === null || task === void 0 ? void 0 : task.event) this.eventManager.fire(task.event);
                    }
                };
                return TaskQueueManager;
            }();
            // #endregion
            // #region Audio
            var SystemAudioStatus;
            (function(SystemAudioStatus) {
                SystemAudioStatus[SystemAudioStatus["AVAILABLE"] = 0] = "AVAILABLE";
                SystemAudioStatus[SystemAudioStatus["UNAVAILABLE"] = 1] = "UNAVAILABLE";
            })(SystemAudioStatus || (SystemAudioStatus = {}));
            // Class to handle audio context availability and status changes
            var AudioManager = /** @class */ function(_super) {
                __extends(AudioManager, _super);
                function AudioManager() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this._started = false;
                    _this._enabled = false;
                    _this._status = SystemAudioStatus.UNAVAILABLE;
                    return _this;
                }
                AudioManager.prototype.delay = function(time) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            return [
                                2 /*return*/ ,
                                new Promise(function(resolve) {
                                    return setTimeout(resolve, time);
                                })
                            ];
                        });
                    });
                };
                AudioManager.prototype.timeout = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            return [
                                2 /*return*/ ,
                                new Promise(function(_, reject) {
                                    return setTimeout(reject, 50);
                                })
                            ];
                        });
                    });
                };
                // Alerts animations on status changes and removes the listeners to avoid alerting twice.
                AudioManager.prototype.reportToListeners = function() {
                    this.fire({
                        type: EventType.AudioStatusChange
                    });
                    this.removeAll();
                };
                /**
     * The audio context has been resolved.
     * Alert any listeners that we can now play audio.
     * Rive will now play audio at the configured volume.
     */ AudioManager.prototype.enableAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            if (!this._enabled) {
                                this._enabled = true;
                                this._status = SystemAudioStatus.AVAILABLE;
                                this.reportToListeners();
                            }
                            return [
                                2 /*return*/ 
                            ];
                        });
                    });
                };
                /**
     * Check if we are able to play audio.
     *
     * We currently check the audio context, when resume() returns before a timeout we know that the
     * audio context is running and we can enable audio.
     */ AudioManager.prototype.testAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var _a;
                        return __generator(this, function(_b) {
                            switch(_b.label){
                                case 0:
                                    if (!(this._status === SystemAudioStatus.UNAVAILABLE && this._audioContext !== null)) return [
                                        3 /*break*/ ,
                                        4
                                    ];
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]);
                                    return [
                                        4 /*yield*/ ,
                                        Promise.race([
                                            this._audioContext.resume(),
                                            this.timeout()
                                        ])
                                    ];
                                case 2:
                                    _b.sent();
                                    this.enableAudio();
                                    return [
                                        3 /*break*/ ,
                                        4
                                    ];
                                case 3:
                                    _a = _b.sent();
                                    return [
                                        3 /*break*/ ,
                                        4
                                    ];
                                case 4:
                                    return [
                                        2 /*return*/ 
                                    ];
                            }
                        });
                    });
                };
                /**
     * Establish audio for use with rive.
     * We both test if we can use audio intermittently and listen for user interaction.
     * The aim is to enable audio playback as soon as the browser allows this.
     */ AudioManager.prototype._establishAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            switch(_a.label){
                                case 0:
                                    if (!!this._started) return [
                                        3 /*break*/ ,
                                        5
                                    ];
                                    this._started = true;
                                    if (!(typeof window == "undefined")) return [
                                        3 /*break*/ ,
                                        1
                                    ];
                                    this.enableAudio();
                                    return [
                                        3 /*break*/ ,
                                        5
                                    ];
                                case 1:
                                    this._audioContext = new AudioContext();
                                    this.listenForUserAction();
                                    _a.label = 2;
                                case 2:
                                    if (!(this._status === SystemAudioStatus.UNAVAILABLE)) return [
                                        3 /*break*/ ,
                                        5
                                    ];
                                    return [
                                        4 /*yield*/ ,
                                        this.testAudio()
                                    ];
                                case 3:
                                    _a.sent();
                                    return [
                                        4 /*yield*/ ,
                                        this.delay(1000)
                                    ];
                                case 4:
                                    _a.sent();
                                    return [
                                        3 /*break*/ ,
                                        2
                                    ];
                                case 5:
                                    return [
                                        2 /*return*/ 
                                    ];
                            }
                        });
                    });
                };
                AudioManager.prototype.listenForUserAction = function() {
                    var _this = this;
                    // NOTE: AudioContexts are ready immediately if requested in a ui callback
                    // we *could* re request one in this listener.
                    var _clickListener = function() {
                        return __awaiter(_this, void 0, void 0, function() {
                            return __generator(this, function(_a) {
                                // note this has "better" results than calling `await this.testAudio()`
                                // as we force audio to be enabled in the current thread, rather than chancing
                                // the thread to be passed over for some other async context
                                this.enableAudio();
                                return [
                                    2 /*return*/ 
                                ];
                            });
                        });
                    };
                    // NOTE: we should test this on mobile/pads
                    document.addEventListener("pointerdown", _clickListener, {
                        once: true
                    });
                };
                /**
     * Establish the audio context for rive, this lets rive know that we can play audio.
     */ AudioManager.prototype.establishAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            this._establishAudio();
                            return [
                                2 /*return*/ 
                            ];
                        });
                    });
                };
                Object.defineProperty(AudioManager.prototype, "systemVolume", {
                    get: function() {
                        if (this._status === SystemAudioStatus.UNAVAILABLE) {
                            // We do an immediate test to avoid depending on the delay of the running test
                            this.testAudio();
                            return 0;
                        }
                        return 1;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(AudioManager.prototype, "status", {
                    get: function() {
                        return this._status;
                    },
                    enumerable: false,
                    configurable: true
                });
                return AudioManager;
            }(EventManager);
            var audioManager = new AudioManager();
            var FakeResizeObserver = /** @class */ function() {
                function FakeResizeObserver() {}
                FakeResizeObserver.prototype.observe = function() {};
                FakeResizeObserver.prototype.unobserve = function() {};
                FakeResizeObserver.prototype.disconnect = function() {};
                return FakeResizeObserver;
            }();
            var MyResizeObserver = globalThis.ResizeObserver || FakeResizeObserver;
            /**
 * This class takes care of any observers that will be attached to an animation.
 * It should be treated as a singleton because observers are much more performant
 * when used for observing multiple elements by a single instance.
 */ var ObjectObservers = /** @class */ function() {
                function ObjectObservers() {
                    var _this = this;
                    this._elementsMap = new Map();
                    /**
         * Resize observers trigger both when the element changes its size and also when the
         * element is added or removed from the document.
         */ this._onObservedEntry = function(entry) {
                        var observed = _this._elementsMap.get(entry.target);
                        if (observed !== null) observed.onResize(entry.target.clientWidth == 0 || entry.target.clientHeight == 0);
                        else _this._resizeObserver.unobserve(entry.target);
                    };
                    this._onObserved = function(entries) {
                        entries.forEach(_this._onObservedEntry);
                    };
                    this._resizeObserver = new MyResizeObserver(this._onObserved);
                }
                // Adds an observable element
                ObjectObservers.prototype.add = function(element, onResize) {
                    var observed = {
                        onResize: onResize,
                        element: element
                    };
                    this._elementsMap.set(element, observed);
                    this._resizeObserver.observe(element);
                    return observed;
                };
                // Removes an observable element
                ObjectObservers.prototype.remove = function(observed) {
                    this._resizeObserver.unobserve(observed.element);
                    this._elementsMap.delete(observed.element);
                };
                return ObjectObservers;
            }();
            var observers = new ObjectObservers();
            var RiveFile = /** @class */ function() {
                function RiveFile(params) {
                    // Allow the runtime to automatically load assets hosted in Rive's runtime.
                    this.enableRiveAssetCDN = true;
                    this.referenceCount = 0;
                    this.destroyed = false;
                    this.src = params.src;
                    this.buffer = params.buffer;
                    if (params.assetLoader) this.assetLoader = params.assetLoader;
                    this.enableRiveAssetCDN = typeof params.enableRiveAssetCDN == "boolean" ? params.enableRiveAssetCDN : true;
                    // New event management system
                    this.eventManager = new EventManager();
                    if (params.onLoad) this.on(EventType.Load, params.onLoad);
                    if (params.onLoadError) this.on(EventType.LoadError, params.onLoadError);
                }
                RiveFile.prototype.initData = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var _a, loader, _b;
                        var _c;
                        return __generator(this, function(_d) {
                            switch(_d.label){
                                case 0:
                                    if (!this.src) return [
                                        3 /*break*/ ,
                                        2
                                    ];
                                    _a = this;
                                    return [
                                        4 /*yield*/ ,
                                        loadRiveFile(this.src)
                                    ];
                                case 1:
                                    _a.buffer = _d.sent();
                                    _d.label = 2;
                                case 2:
                                    if (this.destroyed) return [
                                        2 /*return*/ 
                                    ];
                                    if (this.assetLoader) loader = new this.runtime.CustomFileAssetLoader({
                                        loadContents: this.assetLoader
                                    });
                                    // Load the Rive file
                                    _b = this;
                                    return [
                                        4 /*yield*/ ,
                                        this.runtime.load(new Uint8Array(this.buffer), loader, this.enableRiveAssetCDN)
                                    ];
                                case 3:
                                    // Load the Rive file
                                    _b.file = _d.sent();
                                    if (this.destroyed) {
                                        (_c = this.file) === null || _c === void 0 || _c.delete();
                                        this.file = null;
                                        return [
                                            2 /*return*/ 
                                        ];
                                    }
                                    if (this.file !== null) this.eventManager.fire({
                                        type: EventType.Load,
                                        data: this
                                    });
                                    else {
                                        this.eventManager.fire({
                                            type: EventType.LoadError,
                                            data: null
                                        });
                                        throw new Error(RiveFile.fileLoadErrorMessage);
                                    }
                                    return [
                                        2 /*return*/ 
                                    ];
                            }
                        });
                    });
                };
                RiveFile.prototype.init = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var _a;
                        return __generator(this, function(_b) {
                            switch(_b.label){
                                case 0:
                                    // If no source file url specified, it's a bust
                                    if (!this.src && !this.buffer) throw new Error(RiveFile.missingErrorMessage);
                                    _a = this;
                                    return [
                                        4 /*yield*/ ,
                                        RuntimeLoader.awaitInstance()
                                    ];
                                case 1:
                                    _a.runtime = _b.sent();
                                    if (this.destroyed) return [
                                        2 /*return*/ 
                                    ];
                                    return [
                                        4 /*yield*/ ,
                                        this.initData()
                                    ];
                                case 2:
                                    _b.sent();
                                    return [
                                        2 /*return*/ 
                                    ];
                            }
                        });
                    });
                };
                /**
     * Subscribe to Rive-generated events
     * @param type the type of event to subscribe to
     * @param callback callback to fire when the event occurs
     */ RiveFile.prototype.on = function(type, callback) {
                    this.eventManager.add({
                        type: type,
                        callback: callback
                    });
                };
                /**
     * Unsubscribes from a Rive-generated event
     * @param type the type of event to unsubscribe from
     * @param callback the callback to unsubscribe
     */ RiveFile.prototype.off = function(type, callback) {
                    this.eventManager.remove({
                        type: type,
                        callback: callback
                    });
                };
                RiveFile.prototype.cleanup = function() {
                    var _a;
                    this.referenceCount -= 1;
                    if (this.referenceCount <= 0) {
                        this.removeAllRiveEventListeners();
                        (_a = this.file) === null || _a === void 0 || _a.delete();
                        this.file = null;
                        this.destroyed = true;
                    }
                };
                /**
     * Unsubscribes all Rive listeners from an event type, or everything if no type is
     * given
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */ RiveFile.prototype.removeAllRiveEventListeners = function(type) {
                    this.eventManager.removeAll(type);
                };
                RiveFile.prototype.getInstance = function() {
                    if (this.file !== null) {
                        this.referenceCount += 1;
                        return this.file;
                    }
                };
                // Error message for missing source or buffer
                RiveFile.missingErrorMessage = "Rive source file or data buffer required";
                // Error message for file load error
                RiveFile.fileLoadErrorMessage = "The file failed to load";
                return RiveFile;
            }();
            var Rive = /** @class */ function() {
                function Rive(params) {
                    var _this = this;
                    var _a;
                    // Tracks if a Rive file is loaded
                    this.loaded = false;
                    // Tracks if a Rive file is destroyed
                    this.destroyed = false;
                    // Reference of an object that handles any observers for the animation
                    this._observed = null;
                    /**
         * Tracks if a Rive file is loaded; we need this in addition to loaded as some
         * commands (e.g. contents) can be called as soon as the file is loaded.
         * However, playback commands need to be queued and run in order once initial
         * animations and autoplay has been sorted out. This applies to play, pause,
         * and start.
         */ this.readyForPlaying = false;
                    // Runtime artboard
                    this.artboard = null;
                    // place to clear up event listeners
                    this.eventCleanup = null;
                    this.shouldDisableRiveListeners = false;
                    this.automaticallyHandleEvents = false;
                    // Allow the runtime to automatically load assets hosted in Rive's runtime.
                    this.enableRiveAssetCDN = true;
                    // Keep a local value of the set volume to update it asynchronously
                    this._volume = 1;
                    // Keep a local value of the set width to update it asynchronously
                    this._artboardWidth = undefined;
                    // Keep a local value of the set height to update it asynchronously
                    this._artboardHeight = undefined;
                    // Keep a local value of the device pixel ratio used in rendering and canvas/artboard resizing
                    this._devicePixelRatioUsed = 1;
                    // Whether the canvas element's size is 0
                    this._hasZeroSize = false;
                    // Audio event listener
                    this._audioEventListener = null;
                    // draw method bound to the class
                    this._boundDraw = null;
                    this._viewModelInstance = null;
                    this._dataEnums = null;
                    // Durations to generate a frame for the last second. Used for performance profiling.
                    this.durations = [];
                    this.frameTimes = [];
                    this.frameCount = 0;
                    this.isTouchScrollEnabled = false;
                    this.onCanvasResize = function(hasZeroSize) {
                        var toggledDisplay = _this._hasZeroSize !== hasZeroSize;
                        _this._hasZeroSize = hasZeroSize;
                        if (!hasZeroSize) {
                            if (toggledDisplay) _this.resizeDrawingSurfaceToCanvas();
                        } else if (!_this._layout.maxX || !_this._layout.maxY) _this.resizeToCanvas();
                    };
                    /**
         * Used be draw to track when a second of active rendering time has passed.
         * Used for debugging purposes
         */ this.renderSecondTimer = 0;
                    this._boundDraw = this.draw.bind(this);
                    this.canvas = params.canvas;
                    if (params.canvas.constructor === HTMLCanvasElement) this._observed = observers.add(this.canvas, this.onCanvasResize);
                    this.src = params.src;
                    this.buffer = params.buffer;
                    this.riveFile = params.riveFile;
                    this.layout = (_a = params.layout) !== null && _a !== void 0 ? _a : new Layout();
                    this.shouldDisableRiveListeners = !!params.shouldDisableRiveListeners;
                    this.isTouchScrollEnabled = !!params.isTouchScrollEnabled;
                    this.automaticallyHandleEvents = !!params.automaticallyHandleEvents;
                    this.enableRiveAssetCDN = params.enableRiveAssetCDN === undefined ? true : params.enableRiveAssetCDN;
                    // New event management system
                    this.eventManager = new EventManager();
                    if (params.onLoad) this.on(EventType.Load, params.onLoad);
                    if (params.onLoadError) this.on(EventType.LoadError, params.onLoadError);
                    if (params.onPlay) this.on(EventType.Play, params.onPlay);
                    if (params.onPause) this.on(EventType.Pause, params.onPause);
                    if (params.onStop) this.on(EventType.Stop, params.onStop);
                    if (params.onLoop) this.on(EventType.Loop, params.onLoop);
                    if (params.onStateChange) this.on(EventType.StateChange, params.onStateChange);
                    if (params.onAdvance) this.on(EventType.Advance, params.onAdvance);
                    /**
         * @deprecated Use camelCase'd versions instead.
         */ if (params.onload && !params.onLoad) this.on(EventType.Load, params.onload);
                    if (params.onloaderror && !params.onLoadError) this.on(EventType.LoadError, params.onloaderror);
                    if (params.onplay && !params.onPlay) this.on(EventType.Play, params.onplay);
                    if (params.onpause && !params.onPause) this.on(EventType.Pause, params.onpause);
                    if (params.onstop && !params.onStop) this.on(EventType.Stop, params.onstop);
                    if (params.onloop && !params.onLoop) this.on(EventType.Loop, params.onloop);
                    if (params.onstatechange && !params.onStateChange) this.on(EventType.StateChange, params.onstatechange);
                    /**
         * Asset loading
         */ if (params.assetLoader) this.assetLoader = params.assetLoader;
                    // Hook up the task queue
                    this.taskQueue = new TaskQueueManager(this.eventManager);
                    this.init({
                        src: this.src,
                        buffer: this.buffer,
                        riveFile: this.riveFile,
                        autoplay: params.autoplay,
                        autoBind: params.autoBind,
                        animations: params.animations,
                        stateMachines: params.stateMachines,
                        artboard: params.artboard,
                        useOffscreenRenderer: params.useOffscreenRenderer
                    });
                }
                // Alternative constructor to build a Rive instance from an interface/object
                Rive.new = function(params) {
                    console.warn("This function is deprecated: please use `new Rive({})` instead");
                    return new Rive(params);
                };
                // Event handler for when audio context becomes available
                Rive.prototype.onSystemAudioChanged = function() {
                    this.volume = this._volume;
                };
                // Initializes the Rive object either from constructor or load()
                Rive.prototype.init = function(_a) {
                    var _this = this;
                    var src = _a.src, buffer = _a.buffer, riveFile = _a.riveFile, animations = _a.animations, stateMachines = _a.stateMachines, artboard = _a.artboard, _b = _a.autoplay, autoplay = _b === void 0 ? false : _b, _c = _a.useOffscreenRenderer, useOffscreenRenderer = _c === void 0 ? false : _c, _d = _a.autoBind, autoBind = _d === void 0 ? false : _d;
                    if (this.destroyed) return;
                    this.src = src;
                    this.buffer = buffer;
                    this.riveFile = riveFile;
                    // If no source file url specified, it's a bust
                    if (!this.src && !this.buffer && !this.riveFile) throw new RiveError(Rive.missingErrorMessage);
                    // List of animations that should be initialized.
                    var startingAnimationNames = mapToStringArray(animations);
                    // List of state machines that should be initialized
                    var startingStateMachineNames = mapToStringArray(stateMachines);
                    // Ensure loaded is marked as false if loading new file
                    this.loaded = false;
                    this.readyForPlaying = false;
                    // Ensure the runtime is loaded
                    RuntimeLoader.awaitInstance().then(function(runtime) {
                        if (_this.destroyed) return;
                        _this.runtime = runtime;
                        _this.removeRiveListeners();
                        _this.deleteRiveRenderer();
                        // Get the canvas where you want to render the animation and create a renderer
                        _this.renderer = _this.runtime.makeRenderer(_this.canvas, useOffscreenRenderer);
                        // Initial size adjustment based on devicePixelRatio if no width/height are
                        // specified explicitly
                        if (!(_this.canvas.width || _this.canvas.height)) _this.resizeDrawingSurfaceToCanvas();
                        // Load Rive data from a source uri or a data buffer
                        _this.initData(artboard, startingAnimationNames, startingStateMachineNames, autoplay, autoBind).then(function() {
                            return _this.setupRiveListeners();
                        }).catch(function(e) {
                            console.error(e);
                        });
                    }).catch(function(e) {
                        console.error(e);
                    });
                };
                /**
     * Setup Rive Listeners on the canvas
     * @param riveListenerOptions - Enables TouchEvent events on the canvas. Set to true to allow
     * touch scrolling on the canvas element on touch-enabled devices
     * i.e. { isTouchScrollEnabled: true }
     */ Rive.prototype.setupRiveListeners = function(riveListenerOptions) {
                    var _this = this;
                    if (this.eventCleanup) this.eventCleanup();
                    if (!this.shouldDisableRiveListeners) {
                        var activeStateMachines = (this.animator.stateMachines || []).filter(function(sm) {
                            return sm.playing && _this.runtime.hasListeners(sm.instance);
                        }).map(function(sm) {
                            return sm.instance;
                        });
                        var touchScrollEnabledOption = this.isTouchScrollEnabled;
                        if (riveListenerOptions && "isTouchScrollEnabled" in riveListenerOptions) touchScrollEnabledOption = riveListenerOptions.isTouchScrollEnabled;
                        this.eventCleanup = (0, _utils__WEBPACK_IMPORTED_MODULE_3__.registerTouchInteractions)({
                            canvas: this.canvas,
                            artboard: this.artboard,
                            stateMachines: activeStateMachines,
                            renderer: this.renderer,
                            rive: this.runtime,
                            fit: this._layout.runtimeFit(this.runtime),
                            alignment: this._layout.runtimeAlignment(this.runtime),
                            isTouchScrollEnabled: touchScrollEnabledOption,
                            layoutScaleFactor: this._layout.layoutScaleFactor
                        });
                    }
                };
                /**
     * Remove Rive Listeners setup on the canvas
     */ Rive.prototype.removeRiveListeners = function() {
                    if (this.eventCleanup) {
                        this.eventCleanup();
                        this.eventCleanup = null;
                    }
                };
                /**
     * If the instance has audio and the system audio is not ready
     * we hook the instance to the audio manager
     */ Rive.prototype.initializeAudio = function() {
                    var _this = this;
                    var _a;
                    // Initialize audio if needed
                    if (audioManager.status == SystemAudioStatus.UNAVAILABLE) {
                        if (((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.hasAudio) && this._audioEventListener === null) {
                            this._audioEventListener = {
                                type: EventType.AudioStatusChange,
                                callback: function() {
                                    return _this.onSystemAudioChanged();
                                }
                            };
                            audioManager.add(this._audioEventListener);
                            audioManager.establishAudio();
                        }
                    }
                };
                Rive.prototype.initArtboardSize = function() {
                    if (!this.artboard) return;
                    // Use preset values if they are not undefined
                    this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width;
                    this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height;
                };
                // Initializes runtime with Rive data and preps for playing
                Rive.prototype.initData = function(artboardName, animationNames, stateMachineNames, autoplay, autoBind) {
                    return __awaiter(this, void 0, void 0, function() {
                        var error_1, msg;
                        var _a;
                        return __generator(this, function(_b) {
                            switch(_b.label){
                                case 0:
                                    _b.trys.push([
                                        0,
                                        3,
                                        ,
                                        4
                                    ]);
                                    if (!(this.riveFile == null)) return [
                                        3 /*break*/ ,
                                        2
                                    ];
                                    this.riveFile = new RiveFile({
                                        src: this.src,
                                        buffer: this.buffer,
                                        enableRiveAssetCDN: this.enableRiveAssetCDN,
                                        assetLoader: this.assetLoader
                                    });
                                    return [
                                        4 /*yield*/ ,
                                        this.riveFile.init()
                                    ];
                                case 1:
                                    _b.sent();
                                    _b.label = 2;
                                case 2:
                                    // Check for riveFile in case it has been cleaned up while initializing;
                                    if (!this.riveFile) throw new RiveError(Rive.cleanupErrorMessage);
                                    this.file = this.riveFile.getInstance();
                                    // Initialize and draw frame
                                    this.initArtboard(artboardName, animationNames, stateMachineNames, autoplay, autoBind);
                                    // Initialize the artboard size
                                    this.initArtboardSize();
                                    // Check for audio
                                    this.initializeAudio();
                                    // Everything's set up, emit a load event
                                    this.loaded = true;
                                    this.eventManager.fire({
                                        type: EventType.Load,
                                        data: (_a = this.src) !== null && _a !== void 0 ? _a : "buffer"
                                    });
                                    // Flag ready for playback commands and clear the task queue; this order
                                    // is important or it may infinitely recurse
                                    this.readyForPlaying = true;
                                    this.taskQueue.process();
                                    this.drawFrame();
                                    return [
                                        2 /*return*/ ,
                                        Promise.resolve()
                                    ];
                                case 3:
                                    error_1 = _b.sent();
                                    msg = resolveErrorMessage(error_1);
                                    console.warn(msg);
                                    this.eventManager.fire({
                                        type: EventType.LoadError,
                                        data: msg
                                    });
                                    return [
                                        2 /*return*/ ,
                                        Promise.reject(msg)
                                    ];
                                case 4:
                                    return [
                                        2 /*return*/ 
                                    ];
                            }
                        });
                    });
                };
                // Initialize for playback
                Rive.prototype.initArtboard = function(artboardName, animationNames, stateMachineNames, autoplay, autoBind) {
                    if (!this.file) return;
                    // Fetch the artboard
                    var rootArtboard = artboardName ? this.file.artboardByName(artboardName) : this.file.defaultArtboard();
                    // Check we have a working artboard
                    if (!rootArtboard) {
                        var msg = "Invalid artboard name or no default artboard";
                        console.warn(msg);
                        this.eventManager.fire({
                            type: EventType.LoadError,
                            data: msg
                        });
                        return;
                    }
                    this.artboard = rootArtboard;
                    rootArtboard.volume = this._volume * audioManager.systemVolume;
                    // Check that the artboard has at least 1 animation
                    if (this.artboard.animationCount() < 1) {
                        var msg = "Artboard has no animations";
                        this.eventManager.fire({
                            type: EventType.LoadError,
                            data: msg
                        });
                        throw msg;
                    }
                    // Initialize the animator
                    this.animator = new Animator(this.runtime, this.artboard, this.eventManager);
                    // Initialize the animations; as loaded hasn't happened yet, we need to
                    // suppress firing the play/pause events until the load event has fired. To
                    // do this we tell the animator to suppress firing events, and add event
                    // firing to the task queue.
                    var instanceNames;
                    if (animationNames.length > 0 || stateMachineNames.length > 0) {
                        instanceNames = animationNames.concat(stateMachineNames);
                        this.animator.initLinearAnimations(animationNames, autoplay);
                        this.animator.initStateMachines(stateMachineNames, autoplay);
                    } else instanceNames = [
                        this.animator.atLeastOne(autoplay, false)
                    ];
                    // Queue up firing the playback events
                    this.taskQueue.add({
                        event: {
                            type: autoplay ? EventType.Play : EventType.Pause,
                            data: instanceNames
                        }
                    });
                    if (autoBind) {
                        var viewModel = this.file.defaultArtboardViewModel(rootArtboard);
                        if (viewModel !== null) {
                            var runtimeInstance = viewModel.defaultInstance();
                            if (runtimeInstance !== null) {
                                var viewModelInstance = new ViewModelInstance(runtimeInstance, null);
                                this.bindViewModelInstance(viewModelInstance);
                            }
                        }
                    }
                };
                // Draws the current artboard frame
                Rive.prototype.drawFrame = function() {
                    var _a, _b;
                    if ((_a = document === null || document === void 0 ? void 0 : document.timeline) === null || _a === void 0 ? void 0 : _a.currentTime) {
                        if (this.loaded && this.artboard && !this.frameRequestId) {
                            this._boundDraw(document.timeline.currentTime);
                            (_b = this.runtime) === null || _b === void 0 || _b.resolveAnimationFrame();
                        }
                    } else this.startRendering();
                };
                /**
     * Draw rendering loop; renders animation frames at the correct time interval.
     * @param time the time at which to render a frame
     */ Rive.prototype.draw = function(time, onSecond) {
                    var _a;
                    // Clear the frameRequestId, as we're now rendering a fresh frame
                    this.frameRequestId = null;
                    var before = performance.now();
                    // On the first pass, make sure lastTime has a valid value
                    if (!this.lastRenderTime) this.lastRenderTime = time;
                    // Handle the onSecond callback
                    this.renderSecondTimer += time - this.lastRenderTime;
                    if (this.renderSecondTimer > 5000) {
                        this.renderSecondTimer = 0;
                        onSecond === null || onSecond === void 0 || onSecond();
                    }
                    // Calculate the elapsed time between frames in seconds
                    var elapsedTime = (time - this.lastRenderTime) / 1000;
                    this.lastRenderTime = time;
                    // - Advance non-paused animations by the elapsed number of seconds
                    // - Advance any animations that require scrubbing
                    // - Advance to the first frame even when autoplay is false
                    var activeAnimations = this.animator.animations.filter(function(a) {
                        return a.playing || a.needsScrub;
                    })// The scrubbed animations must be applied first to prevent weird artifacts
                    // if the playing animations conflict with the scrubbed animating attribuates.
                    .sort(function(first) {
                        return first.needsScrub ? -1 : 1;
                    });
                    for(var _i = 0, activeAnimations_1 = activeAnimations; _i < activeAnimations_1.length; _i++){
                        var animation = activeAnimations_1[_i];
                        animation.advance(elapsedTime);
                        if (animation.instance.didLoop) animation.loopCount += 1;
                        animation.apply(1.0);
                    }
                    // - Advance non-paused state machines by the elapsed number of seconds
                    // - Advance to the first frame even when autoplay is false
                    var activeStateMachines = this.animator.stateMachines.filter(function(a) {
                        return a.playing;
                    });
                    for(var _b = 0, activeStateMachines_1 = activeStateMachines; _b < activeStateMachines_1.length; _b++){
                        var stateMachine = activeStateMachines_1[_b];
                        // Check for events before the current frame's state machine advance
                        var numEventsReported = stateMachine.reportedEventCount();
                        if (numEventsReported) for(var i = 0; i < numEventsReported; i++){
                            var event_1 = stateMachine.reportedEventAt(i);
                            if (event_1) {
                                if (event_1.type === RiveEventType.OpenUrl) {
                                    this.eventManager.fire({
                                        type: EventType.RiveEvent,
                                        data: event_1
                                    });
                                    // Handle the event side effect if explicitly enabled
                                    if (this.automaticallyHandleEvents) {
                                        var newAnchorTag = document.createElement("a");
                                        var _c = event_1, url = _c.url, target = _c.target;
                                        var sanitizedUrl = (0, _utils__WEBPACK_IMPORTED_MODULE_3__.sanitizeUrl)(url);
                                        url && newAnchorTag.setAttribute("href", sanitizedUrl);
                                        target && newAnchorTag.setAttribute("target", target);
                                        if (sanitizedUrl && sanitizedUrl !== _utils__WEBPACK_IMPORTED_MODULE_3__.BLANK_URL) newAnchorTag.click();
                                    }
                                } else this.eventManager.fire({
                                    type: EventType.RiveEvent,
                                    data: event_1
                                });
                            }
                        }
                        stateMachine.advanceAndApply(elapsedTime);
                    // stateMachine.instance.apply(this.artboard);
                    }
                    // Once the animations have been applied to the artboard, advance it
                    // by the elapsed time.
                    if (this.animator.stateMachines.length == 0) this.artboard.advance(elapsedTime);
                    var renderer = this.renderer;
                    // Canvas must be wiped to prevent artifacts
                    renderer.clear();
                    renderer.save();
                    // Update the renderer alignment if necessary
                    this.alignRenderer();
                    // Do not draw on 0 canvas size
                    if (!this._hasZeroSize) this.artboard.draw(renderer);
                    renderer.restore();
                    renderer.flush();
                    // Check for any animations that looped
                    this.animator.handleLooping();
                    // Check for any state machines that had a state change
                    this.animator.handleStateChanges();
                    // Report advanced time
                    this.animator.handleAdvancing(elapsedTime);
                    // Add duration to create frame to durations array
                    this.frameCount++;
                    var after = performance.now();
                    this.frameTimes.push(after);
                    this.durations.push(after - before);
                    while(this.frameTimes[0] <= after - 1000){
                        this.frameTimes.shift();
                        this.durations.shift();
                    }
                    (_a = this._viewModelInstance) === null || _a === void 0 || _a.handleCallbacks();
                    // Calling requestAnimationFrame will rerun draw() at the correct rate:
                    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
                    if (this.animator.isPlaying) // Request a new rendering frame
                    this.startRendering();
                    else if (this.animator.isPaused) // Reset the end time so on playback it starts at the correct frame
                    this.lastRenderTime = 0;
                    else if (this.animator.isStopped) // Reset animation instances, artboard and time
                    // TODO: implement this properly when we have instancing
                    // this.initArtboard();
                    // this.drawFrame();
                    this.lastRenderTime = 0;
                };
                /**
     * Align the renderer
     */ Rive.prototype.alignRenderer = function() {
                    var _a = this, renderer = _a.renderer, runtime = _a.runtime, _layout = _a._layout, artboard = _a.artboard;
                    // Align things up safe in the knowledge we can restore if changed
                    renderer.align(_layout.runtimeFit(runtime), _layout.runtimeAlignment(runtime), {
                        minX: _layout.minX,
                        minY: _layout.minY,
                        maxX: _layout.maxX,
                        maxY: _layout.maxY
                    }, artboard.bounds, this._devicePixelRatioUsed * _layout.layoutScaleFactor);
                };
                Object.defineProperty(Rive.prototype, "fps", {
                    get: function() {
                        return this.durations.length;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "frameTime", {
                    get: function() {
                        if (this.durations.length === 0) return 0;
                        return (this.durations.reduce(function(a, b) {
                            return a + b;
                        }, 0) / this.durations.length).toFixed(4);
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Cleans up all Wasm-generated objects that need to be manually destroyed:
     * artboard instances, animation instances, state machine instances,
     * renderer instance, file and runtime.
     *
     * Once this is called, you will need to initialise a new instance of the
     * Rive class
     */ Rive.prototype.cleanup = function() {
                    var _a, _b;
                    this.destroyed = true;
                    // Stop the renderer if it hasn't already been stopped.
                    this.stopRendering();
                    // Clean up any artboard, animation or state machine instances.
                    this.cleanupInstances();
                    // Remove from observer
                    if (this._observed !== null) observers.remove(this._observed);
                    this.removeRiveListeners();
                    if (this.file) {
                        (_a = this.riveFile) === null || _a === void 0 || _a.cleanup();
                        this.file = null;
                    }
                    this.riveFile = null;
                    this.deleteRiveRenderer();
                    if (this._audioEventListener !== null) {
                        audioManager.remove(this._audioEventListener);
                        this._audioEventListener = null;
                    }
                    (_b = this._viewModelInstance) === null || _b === void 0 || _b.cleanup();
                    this._viewModelInstance = null;
                    this._dataEnums = null;
                };
                /**
     * Cleans up the Renderer object. Only call this API if you no longer
     * need to render Rive content in your session.
     */ Rive.prototype.deleteRiveRenderer = function() {
                    var _a;
                    (_a = this.renderer) === null || _a === void 0 || _a.delete();
                    this.renderer = null;
                };
                /**
     * Cleans up any Wasm-generated objects that need to be manually destroyed:
     * artboard instances, animation instances, state machine instances.
     *
     * Once this is called, things will need to be reinitialized or bad things
     * might happen.
     */ Rive.prototype.cleanupInstances = function() {
                    if (this.eventCleanup !== null) this.eventCleanup();
                    // Delete all animation and state machine instances
                    this.stop();
                    if (this.artboard) {
                        this.artboard.delete();
                        this.artboard = null;
                    }
                };
                /**
     * Tries to query the setup Artboard for a text run node with the given name.
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @returns - TextValueRun node or undefined if the text run cannot be queried
     */ Rive.prototype.retrieveTextRun = function(textRunName) {
                    var _a;
                    if (!textRunName) {
                        console.warn("No text run name provided");
                        return;
                    }
                    if (!this.artboard) {
                        console.warn("Tried to access text run, but the Artboard is null");
                        return;
                    }
                    var textRun = this.artboard.textRun(textRunName);
                    if (!textRun) {
                        console.warn("Could not access a text run with name '".concat(textRunName, "' in the '").concat((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.name, "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));
                        return;
                    }
                    return textRun;
                };
                /**
     * Returns a string from a given text run node name, or undefined if the text run
     * cannot be queried.
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @returns - String value of the text run node or undefined
     */ Rive.prototype.getTextRunValue = function(textRunName) {
                    var textRun = this.retrieveTextRun(textRunName);
                    return textRun ? textRun.text : undefined;
                };
                /**
     * Sets a text value for a given text run node name if possible
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @param textRunValue - String value to set on the text run node
     */ Rive.prototype.setTextRunValue = function(textRunName, textRunValue) {
                    var textRun = this.retrieveTextRun(textRunName);
                    if (textRun) textRun.text = textRunValue;
                };
                // Plays specified animations; if none specified, it unpauses everything.
                Rive.prototype.play = function(animationNames, autoplay) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    // If the file's not loaded, queue up the play
                    if (!this.readyForPlaying) {
                        this.taskQueue.add({
                            action: function() {
                                return _this.play(animationNames, autoplay);
                            }
                        });
                        return;
                    }
                    this.animator.play(animationNames);
                    if (this.eventCleanup) this.eventCleanup();
                    this.setupRiveListeners();
                    this.startRendering();
                };
                // Pauses specified animations; if none specified, pauses all.
                Rive.prototype.pause = function(animationNames) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    // If the file's not loaded, early out, nothing to pause
                    if (!this.readyForPlaying) {
                        this.taskQueue.add({
                            action: function() {
                                return _this.pause(animationNames);
                            }
                        });
                        return;
                    }
                    if (this.eventCleanup) this.eventCleanup();
                    this.animator.pause(animationNames);
                };
                Rive.prototype.scrub = function(animationNames, value) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    // If the file's not loaded, early out, nothing to pause
                    if (!this.readyForPlaying) {
                        this.taskQueue.add({
                            action: function() {
                                return _this.scrub(animationNames, value);
                            }
                        });
                        return;
                    }
                    // Scrub the animation time; we draw a single frame here so that if
                    // nothing's currently playing, the scrubbed animation is still rendered/
                    this.animator.scrub(animationNames, value || 0);
                    this.drawFrame();
                };
                // Stops specified animations; if none specifies, stops them all.
                Rive.prototype.stop = function(animationNames) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    // If the file's not loaded, early out, nothing to pause
                    if (!this.readyForPlaying) {
                        this.taskQueue.add({
                            action: function() {
                                return _this.stop(animationNames);
                            }
                        });
                        return;
                    }
                    // If there is no artboard, this.animator will be undefined
                    if (this.animator) this.animator.stop(animationNames);
                    if (this.eventCleanup) this.eventCleanup();
                };
                /**
     * Resets the animation
     * @param artboard the name of the artboard, or default if none given
     * @param animations the names of animations for playback
     * @param stateMachines the names of state machines for playback
     * @param autoplay whether to autoplay when reset, defaults to false
     *
     */ Rive.prototype.reset = function(params) {
                    var _a, _b;
                    // Get the current artboard, animations, state machines, and playback states
                    var artBoardName = params === null || params === void 0 ? void 0 : params.artboard;
                    var animationNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.animations);
                    var stateMachineNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.stateMachines);
                    var autoplay = (_a = params === null || params === void 0 ? void 0 : params.autoplay) !== null && _a !== void 0 ? _a : false;
                    var autoBind = (_b = params === null || params === void 0 ? void 0 : params.autoBind) !== null && _b !== void 0 ? _b : false;
                    // Stop everything and clean up
                    this.cleanupInstances();
                    // Reinitialize an artboard instance with the state
                    this.initArtboard(artBoardName, animationNames, stateMachineNames, autoplay, autoBind);
                    this.taskQueue.process();
                };
                // Loads a new Rive file, keeping listeners in place
                Rive.prototype.load = function(params) {
                    this.file = null;
                    // Stop all animations
                    this.stop();
                    // Reinitialize
                    this.init(params);
                };
                Object.defineProperty(Rive.prototype, "layout", {
                    /**
         * Returns the current layout. Note that layout should be treated as
         * immutable. If you want to change the layout, create a new one use the
         * layout setter
         */ get: function() {
                        return this._layout;
                    },
                    // Sets a new layout
                    set: function(layout) {
                        this._layout = layout;
                        // If the maxX or maxY are 0, then set them to the canvas width and height
                        if (!layout.maxX || !layout.maxY) this.resizeToCanvas();
                        if (this.loaded && !this.animator.isPlaying) this.drawFrame();
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Sets the layout bounds to the current canvas size; this is typically called
     * when the canvas is resized
     */ Rive.prototype.resizeToCanvas = function() {
                    this._layout = this.layout.copyWith({
                        minX: 0,
                        minY: 0,
                        maxX: this.canvas.width,
                        maxY: this.canvas.height
                    });
                };
                /**
     * Accounts for devicePixelRatio as a multiplier to render the size of the canvas drawing surface.
     * Uses the size of the backing canvas to set new width/height attributes. Need to re-render
     * and resize the layout to match the new drawing surface afterwards.
     * Useful function for consumers to include in a window resize listener.
     *
     * This method will set the {@link devicePixelRatioUsed} property.
     *
     * Optionally, you can provide a {@link customDevicePixelRatio} to provide a
     * custom value.
     */ Rive.prototype.resizeDrawingSurfaceToCanvas = function(customDevicePixelRatio) {
                    if (this.canvas instanceof HTMLCanvasElement && !!window) {
                        var _a = this.canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
                        var dpr = customDevicePixelRatio || window.devicePixelRatio || 1;
                        this.devicePixelRatioUsed = dpr;
                        this.canvas.width = dpr * width;
                        this.canvas.height = dpr * height;
                        this.resizeToCanvas();
                        this.drawFrame();
                        if (this.layout.fit === Fit.Layout) {
                            var scaleFactor = this._layout.layoutScaleFactor;
                            this.artboard.width = width / scaleFactor;
                            this.artboard.height = height / scaleFactor;
                        }
                    }
                };
                Object.defineProperty(Rive.prototype, "source", {
                    // Returns the animation source, which may be undefined
                    get: function() {
                        return this.src;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "activeArtboard", {
                    /**
         * Returns the name of the active artboard
         */ get: function() {
                        return this.artboard ? this.artboard.name : "";
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "animationNames", {
                    // Returns a list of animation names on the chosen artboard
                    get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded || !this.artboard) return [];
                        var animationNames = [];
                        for(var i = 0; i < this.artboard.animationCount(); i++)animationNames.push(this.artboard.animationByIndex(i).name);
                        return animationNames;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "stateMachineNames", {
                    /**
         * Returns a list of state machine names from the current artboard
         */ get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded || !this.artboard) return [];
                        var stateMachineNames = [];
                        for(var i = 0; i < this.artboard.stateMachineCount(); i++)stateMachineNames.push(this.artboard.stateMachineByIndex(i).name);
                        return stateMachineNames;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Returns the inputs for the specified instanced state machine, or an empty
     * list if the name is invalid or the state machine is not instanced
     * @param name the state machine name
     * @returns the inputs for the named state machine
     */ Rive.prototype.stateMachineInputs = function(name) {
                    // If the file's not loaded, early out, nothing to pause
                    if (!this.loaded) return;
                    var stateMachine = this.animator.stateMachines.find(function(m) {
                        return m.name === name;
                    });
                    return stateMachine === null || stateMachine === void 0 ? void 0 : stateMachine.inputs;
                };
                // Returns the input with the provided name at the given path
                Rive.prototype.retrieveInputAtPath = function(name, path) {
                    if (!name) {
                        console.warn("No input name provided for path '".concat(path, "'"));
                        return;
                    }
                    if (!this.artboard) {
                        console.warn("Tried to access input: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                        return;
                    }
                    var input = this.artboard.inputByPath(name, path);
                    if (!input) {
                        console.warn("Could not access an input with name: '".concat(name, "', at path:'").concat(path, "'"));
                        return;
                    }
                    return input;
                };
                /**
     * Set the boolean input with the provided name at the given path with value
     * @param input the state machine input name
     * @param value the value to set the input to
     * @param path the path the input is located at an artboard level
     */ Rive.prototype.setBooleanStateAtPath = function(inputName, value, path) {
                    var input = this.retrieveInputAtPath(inputName, path);
                    if (!input) return;
                    if (input.type === StateMachineInputType.Boolean) input.asBool().value = value;
                    else console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a boolean"));
                };
                /**
     * Set the number input with the provided name at the given path with value
     * @param input the state machine input name
     * @param value the value to set the input to
     * @param path the path the input is located at an artboard level
     */ Rive.prototype.setNumberStateAtPath = function(inputName, value, path) {
                    var input = this.retrieveInputAtPath(inputName, path);
                    if (!input) return;
                    if (input.type === StateMachineInputType.Number) input.asNumber().value = value;
                    else console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a number"));
                };
                /**
     * Fire the trigger with the provided name at the given path
     * @param input the state machine input name
     * @param path the path the input is located at an artboard level
     */ Rive.prototype.fireStateAtPath = function(inputName, path) {
                    var input = this.retrieveInputAtPath(inputName, path);
                    if (!input) return;
                    if (input.type === StateMachineInputType.Trigger) input.asTrigger().fire();
                    else console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a trigger"));
                };
                // Returns the TextValueRun object for the provided name at the given path
                Rive.prototype.retrieveTextAtPath = function(name, path) {
                    if (!name) {
                        console.warn("No text name provided for path '".concat(path, "'"));
                        return;
                    }
                    if (!path) {
                        console.warn("No path provided for text '".concat(name, "'"));
                        return;
                    }
                    if (!this.artboard) {
                        console.warn("Tried to access text: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                        return;
                    }
                    var text = this.artboard.textByPath(name, path);
                    if (!text) {
                        console.warn("Could not access text with name: '".concat(name, "', at path:'").concat(path, "'"));
                        return;
                    }
                    return text;
                };
                /**
     * Retrieves the text value for a specified text run at a given path
     * @param textName The name of the text run
     * @param path The path to the text run within the artboard
     * @returns The text value of the text run, or undefined if not found
     *
     * @example
     * // Get the text value for a text run named "title" at one nested artboard deep
     * const titleText = riveInstance.getTextRunValueAtPath("title", "artboard1");
     *
     * @example
     * // Get the text value for a text run named "subtitle" within a nested group two artboards deep
     * const subtitleText = riveInstance.getTextRunValueAtPath("subtitle", "group/nestedGroup");
     *
     * @remarks
     * If the text run cannot be found at the specified path, a warning will be logged to the console.
     */ Rive.prototype.getTextRunValueAtPath = function(textName, path) {
                    var run = this.retrieveTextAtPath(textName, path);
                    if (!run) {
                        console.warn("Could not get text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                        return;
                    }
                    return run.text;
                };
                /**
     * Sets the text value for a specified text run at a given path
     * @param textName The name of the text run
     * @param value The new text value to set
     * @param path The path to the text run within the artboard
     * @returns void
     *
     * @example
     * // Set the text value for a text run named "title" at one nested artboard deep
     * riveInstance.setTextRunValueAtPath("title", "New Title", "artboard1");
     *
     * @example
     * // Set the text value for a text run named "subtitle" within a nested group two artboards deep
     * riveInstance.setTextRunValueAtPath("subtitle", "New Subtitle", "group/nestedGroup");
     *
     * @remarks
     * If the text run cannot be found at the specified path, a warning will be logged to the console.
     */ Rive.prototype.setTextRunValueAtPath = function(textName, value, path) {
                    var run = this.retrieveTextAtPath(textName, path);
                    if (!run) {
                        console.warn("Could not set text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                        return;
                    }
                    run.text = value;
                };
                Object.defineProperty(Rive.prototype, "playingStateMachineNames", {
                    // Returns a list of playing machine names
                    get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded) return [];
                        return this.animator.stateMachines.filter(function(m) {
                            return m.playing;
                        }).map(function(m) {
                            return m.name;
                        });
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "playingAnimationNames", {
                    // Returns a list of playing animation names
                    get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded) return [];
                        return this.animator.animations.filter(function(a) {
                            return a.playing;
                        }).map(function(a) {
                            return a.name;
                        });
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "pausedAnimationNames", {
                    // Returns a list of paused animation names
                    get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded) return [];
                        return this.animator.animations.filter(function(a) {
                            return !a.playing;
                        }).map(function(a) {
                            return a.name;
                        });
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "pausedStateMachineNames", {
                    /**
         *  Returns a list of paused machine names
         * @returns a list of state machine names that are paused
         */ get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded) return [];
                        return this.animator.stateMachines.filter(function(m) {
                            return !m.playing;
                        }).map(function(m) {
                            return m.name;
                        });
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "isPlaying", {
                    /**
         * @returns true if any animation is playing
         */ get: function() {
                        return this.animator.isPlaying;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "isPaused", {
                    /**
         * @returns true if all instanced animations are paused
         */ get: function() {
                        return this.animator.isPaused;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "isStopped", {
                    /**
         * @returns true if no animations are playing or paused
         */ get: function() {
                        return this.animator.isStopped;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "bounds", {
                    /**
         * @returns the bounds of the current artboard, or undefined if the artboard
         * isn't loaded yet.
         */ get: function() {
                        return this.artboard ? this.artboard.bounds : undefined;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Subscribe to Rive-generated events
     * @param type the type of event to subscribe to
     * @param callback callback to fire when the event occurs
     */ Rive.prototype.on = function(type, callback) {
                    this.eventManager.add({
                        type: type,
                        callback: callback
                    });
                };
                /**
     * Unsubscribes from a Rive-generated event
     * @param type the type of event to unsubscribe from
     * @param callback the callback to unsubscribe
     */ Rive.prototype.off = function(type, callback) {
                    this.eventManager.remove({
                        type: type,
                        callback: callback
                    });
                };
                /**
     * Unsubscribes from a Rive-generated event
     * @deprecated
     * @param callback the callback to unsubscribe from
     */ Rive.prototype.unsubscribe = function(type, callback) {
                    console.warn("This function is deprecated: please use `off()` instead.");
                    this.off(type, callback);
                };
                /**
     * Unsubscribes all Rive listeners from an event type, or everything if no type is
     * given
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */ Rive.prototype.removeAllRiveEventListeners = function(type) {
                    this.eventManager.removeAll(type);
                };
                /**
     * Unsubscribes all listeners from an event type, or everything if no type is
     * given
     * @deprecated
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */ Rive.prototype.unsubscribeAll = function(type) {
                    console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead.");
                    this.removeAllRiveEventListeners(type);
                };
                /**
     * Stops the rendering loop; this is different from pausing in that it doesn't
     * change the state of any animation. It stops rendering from occurring. This
     * is designed for situations such as when Rive isn't visible.
     *
     * The only way to start rendering again is to call `startRendering`.
     * Animations that are marked as playing will start from the position that
     * they would have been at if rendering had not been stopped.
     */ Rive.prototype.stopRendering = function() {
                    if (this.loaded && this.frameRequestId) {
                        if (this.runtime.cancelAnimationFrame) this.runtime.cancelAnimationFrame(this.frameRequestId);
                        else cancelAnimationFrame(this.frameRequestId);
                        this.frameRequestId = null;
                    }
                };
                /**
     * Starts the rendering loop if it has been previously stopped. If the
     * renderer is already active, then this will have zero effect.
     */ Rive.prototype.startRendering = function() {
                    if (this.loaded && this.artboard && !this.frameRequestId) {
                        if (this.runtime.requestAnimationFrame) this.frameRequestId = this.runtime.requestAnimationFrame(this._boundDraw);
                        else this.frameRequestId = requestAnimationFrame(this._boundDraw);
                    }
                };
                /**
     * Enables frames-per-second (FPS) reporting for the runtime
     * If no callback is provided, Rive will append a fixed-position div at the top-right corner of
     * the page with the FPS reading
     * @param fpsCallback - Callback from the runtime during the RAF loop that supplies the FPS value
     */ Rive.prototype.enableFPSCounter = function(fpsCallback) {
                    this.runtime.enableFPSCounter(fpsCallback);
                };
                /**
     * Disables frames-per-second (FPS) reporting for the runtime
     */ Rive.prototype.disableFPSCounter = function() {
                    this.runtime.disableFPSCounter();
                };
                Object.defineProperty(Rive.prototype, "contents", {
                    /**
         * Returns the contents of a Rive file: the artboards, animations, and state machines
         */ get: function() {
                        if (!this.loaded) return undefined;
                        var riveContents = {
                            artboards: []
                        };
                        for(var i = 0; i < this.file.artboardCount(); i++){
                            var artboard = this.file.artboardByIndex(i);
                            var artboardContents = {
                                name: artboard.name,
                                animations: [],
                                stateMachines: []
                            };
                            for(var j = 0; j < artboard.animationCount(); j++){
                                var animation = artboard.animationByIndex(j);
                                artboardContents.animations.push(animation.name);
                            }
                            for(var k = 0; k < artboard.stateMachineCount(); k++){
                                var stateMachine = artboard.stateMachineByIndex(k);
                                var name_1 = stateMachine.name;
                                var instance = new this.runtime.StateMachineInstance(stateMachine, artboard);
                                var inputContents = [];
                                for(var l = 0; l < instance.inputCount(); l++){
                                    var input = instance.input(l);
                                    inputContents.push({
                                        name: input.name,
                                        type: input.type
                                    });
                                }
                                artboardContents.stateMachines.push({
                                    name: name_1,
                                    inputs: inputContents
                                });
                            }
                            riveContents.artboards.push(artboardContents);
                        }
                        return riveContents;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "volume", {
                    /**
         * Getter / Setter for the volume of the artboard
         */ get: function() {
                        if (this.artboard && this.artboard.volume !== this._volume) this._volume = this.artboard.volume;
                        return this._volume;
                    },
                    set: function(value) {
                        this._volume = value;
                        if (this.artboard) this.artboard.volume = value * audioManager.systemVolume;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "artboardWidth", {
                    /**
         * The width of the artboard.
         *
         * This will return 0 if the artboard is not loaded yet and a custom
         * width has not been set.
         *
         * Do not set this value manually when using {@link resizeDrawingSurfaceToCanvas}
         * with a {@link Layout.fit} of {@link Fit.Layout}, as the artboard width is
         * automatically set.
         */ get: function() {
                        var _a;
                        if (this.artboard) return this.artboard.width;
                        return (_a = this._artboardWidth) !== null && _a !== void 0 ? _a : 0;
                    },
                    set: function(value) {
                        this._artboardWidth = value;
                        if (this.artboard) this.artboard.width = value;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "artboardHeight", {
                    /**
         * The height of the artboard.
         *
         * This will return 0 if the artboard is not loaded yet and a custom
         * height has not been set.
         *
         * Do not set this value manually when using {@link resizeDrawingSurfaceToCanvas}
         * with a {@link Layout.fit} of {@link Fit.Layout}, as the artboard height is
         * automatically set.
         */ get: function() {
                        var _a;
                        if (this.artboard) return this.artboard.height;
                        return (_a = this._artboardHeight) !== null && _a !== void 0 ? _a : 0;
                    },
                    set: function(value) {
                        this._artboardHeight = value;
                        if (this.artboard) this.artboard.height = value;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Reset the artboard size to its original values.
     */ Rive.prototype.resetArtboardSize = function() {
                    if (this.artboard) {
                        this.artboard.resetArtboardSize();
                        this._artboardWidth = this.artboard.width;
                        this._artboardHeight = this.artboard.height;
                    } else {
                        // If the artboard isn't loaded, we need to reset the custom width and height
                        this._artboardWidth = undefined;
                        this._artboardHeight = undefined;
                    }
                };
                Object.defineProperty(Rive.prototype, "devicePixelRatioUsed", {
                    /**
         * The device pixel ratio used in rendering and canvas/artboard resizing.
         *
         * This value will be overidden by the device pixel ratio used in
         * {@link resizeDrawingSurfaceToCanvas}. If you use that method, do not set this value.
         */ get: function() {
                        return this._devicePixelRatioUsed;
                    },
                    set: function(value) {
                        this._devicePixelRatioUsed = value;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Initialize the data context with the view model instance.
     */ Rive.prototype.bindViewModelInstance = function(viewModelInstance) {
                    var _a;
                    if (this.artboard && !this.destroyed) {
                        if (viewModelInstance && viewModelInstance.runtimeInstance) {
                            viewModelInstance.internalIncrementReferenceCount();
                            (_a = this._viewModelInstance) === null || _a === void 0 || _a.cleanup();
                            this._viewModelInstance = viewModelInstance;
                            this.artboard.bindViewModelInstance(viewModelInstance.runtimeInstance);
                            this.animator.stateMachines.forEach(function(stateMachine) {
                                return stateMachine.bindViewModelInstance(viewModelInstance);
                            });
                        }
                    }
                };
                Object.defineProperty(Rive.prototype, "viewModelInstance", {
                    get: function() {
                        return this._viewModelInstance;
                    },
                    enumerable: false,
                    configurable: true
                });
                Rive.prototype.viewModelByIndex = function(index) {
                    var viewModel = this.file.viewModelByIndex(index);
                    if (viewModel !== null) return new ViewModel(viewModel);
                    return null;
                };
                Rive.prototype.viewModelByName = function(name) {
                    var viewModel = this.file.viewModelByName(name);
                    if (viewModel !== null) return new ViewModel(viewModel);
                    return null;
                };
                Rive.prototype.enums = function() {
                    if (this._dataEnums === null) {
                        var dataEnums = this.file.enums();
                        this._dataEnums = dataEnums.map(function(dataEnum) {
                            return new DataEnum(dataEnum);
                        });
                    }
                    return this._dataEnums;
                };
                Rive.prototype.defaultViewModel = function() {
                    if (this.artboard) {
                        var viewModel = this.file.defaultArtboardViewModel(this.artboard);
                        if (viewModel) return new ViewModel(viewModel);
                    }
                    return null;
                };
                // Error message for missing source or buffer
                Rive.missingErrorMessage = "Rive source file or data buffer required";
                // Error message for removed rive file
                Rive.cleanupErrorMessage = "Attempt to use file after calling cleanup.";
                return Rive;
            }();
            var ViewModel = /** @class */ function() {
                function ViewModel(viewModel) {
                    this._viewModel = viewModel;
                }
                Object.defineProperty(ViewModel.prototype, "instanceCount", {
                    get: function() {
                        return this._viewModel.instanceCount;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ViewModel.prototype, "name", {
                    get: function() {
                        return this._viewModel.name;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModel.prototype.instanceByIndex = function(index) {
                    var instance = this._viewModel.instanceByIndex(index);
                    if (instance !== null) return new ViewModelInstance(instance, null);
                    return null;
                };
                ViewModel.prototype.instanceByName = function(name) {
                    var instance = this._viewModel.instanceByName(name);
                    if (instance !== null) return new ViewModelInstance(instance, null);
                    return null;
                };
                ViewModel.prototype.defaultInstance = function() {
                    var runtimeInstance = this._viewModel.defaultInstance();
                    if (runtimeInstance !== null) return new ViewModelInstance(runtimeInstance, null);
                    return null;
                };
                ViewModel.prototype.instance = function() {
                    var runtimeInstance = this._viewModel.instance();
                    if (runtimeInstance !== null) return new ViewModelInstance(runtimeInstance, null);
                    return null;
                };
                Object.defineProperty(ViewModel.prototype, "properties", {
                    get: function() {
                        return this._viewModel.getProperties();
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ViewModel.prototype, "instanceNames", {
                    get: function() {
                        return this._viewModel.getInstanceNames();
                    },
                    enumerable: false,
                    configurable: true
                });
                return ViewModel;
            }();
            var DataEnum = /** @class */ function() {
                function DataEnum(dataEnum) {
                    this._dataEnum = dataEnum;
                }
                Object.defineProperty(DataEnum.prototype, "name", {
                    get: function() {
                        return this._dataEnum.name;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataEnum.prototype, "values", {
                    get: function() {
                        return this._dataEnum.values;
                    },
                    enumerable: false,
                    configurable: true
                });
                return DataEnum;
            }();
            var ViewModelInstance = /** @class */ function() {
                function ViewModelInstance(runtimeInstance, root) {
                    this._propertiesWithCallbacks = [];
                    this._referenceCount = 0;
                    this._runtimeInstance = runtimeInstance;
                    this._root = root || this;
                }
                Object.defineProperty(ViewModelInstance.prototype, "runtimeInstance", {
                    get: function() {
                        return this._runtimeInstance;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstance.prototype.handleCallbacks = function() {
                    if (this._propertiesWithCallbacks.length !== 0) this._propertiesWithCallbacks.forEach(function(property) {
                        property.handleCallbacks();
                    });
                };
                ViewModelInstance.prototype.clearCallbacks = function() {
                    this._propertiesWithCallbacks.forEach(function(property) {
                        property.clearCallbacks();
                    });
                };
                /**
     * method to access a property instance of type number belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the number property
     */ ViewModelInstance.prototype.number = function(path) {
                    var _a;
                    var instance = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.number(path);
                    if (instance) return new ViewModelInstanceNumber(instance, this._root);
                    return null;
                };
                /**
     * method to access a property instance of type string belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the number property
     */ ViewModelInstance.prototype.string = function(path) {
                    var _a;
                    var instance = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.string(path);
                    if (instance) return new ViewModelInstanceString(instance, this._root);
                    return null;
                };
                /**
     * method to access a property instance of type boolean belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the number property
     */ ViewModelInstance.prototype.boolean = function(path) {
                    var _a;
                    var instance = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.boolean(path);
                    if (instance) return new ViewModelInstanceBoolean(instance, this._root);
                    return null;
                };
                /**
     * method to access a property instance of type color belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the number property
     */ ViewModelInstance.prototype.color = function(path) {
                    var _a;
                    var instance = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.color(path);
                    if (instance) return new ViewModelInstanceColor(instance, this._root);
                    return null;
                };
                /**
     * method to access a property instance of type trigger belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the number property
     */ ViewModelInstance.prototype.trigger = function(path) {
                    var _a;
                    var instance = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.trigger(path);
                    if (instance) return new ViewModelInstanceTrigger(instance, this._root);
                    return null;
                };
                /**
     * method to access a property instance of type enum belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the number property
     */ ViewModelInstance.prototype.enum = function(path) {
                    var _a;
                    var instance = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.enum(path);
                    if (instance) return new ViewModelInstanceEnum(instance, this._root);
                    return null;
                };
                /**
     * method to access a view model property instance belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the number property
     */ ViewModelInstance.prototype.viewModel = function(path) {
                    var _a;
                    var viewModelInstance = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.viewModel(path);
                    if (viewModelInstance) return new ViewModelInstance(viewModelInstance, this._root);
                    return null;
                };
                /**
     * method to replace a view model property with another view model value
     * @param path - path to the view model property
     * @param value - view model that will replace the original
     */ ViewModelInstance.prototype.replaceViewModel = function(path, value) {
                    var _a;
                    if (value.runtimeInstance !== null) return ((_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.replaceViewModel(path, value.runtimeInstance)) || false;
                    return false;
                };
                /*
     * method for internal use, it shouldn't be called externally
     */ ViewModelInstance.prototype.addToCallbacks = function(property) {
                    if (!this._propertiesWithCallbacks.includes(property)) this._propertiesWithCallbacks.push(property);
                };
                /*
     * method for internal use, it shouldn't be called externally
     */ ViewModelInstance.prototype.removeFromCallbacks = function(property) {
                    if (this._propertiesWithCallbacks.includes(property)) this._propertiesWithCallbacks = this._propertiesWithCallbacks.filter(function(prop) {
                        return prop !== property;
                    });
                };
                /*
     * method to add one to the reference counter of the instance.
     * Use if the file owning the reference is destroyed but the instance needs to stay around
     */ ViewModelInstance.prototype.incrementReferenceCount = function() {
                    var _a;
                    this._referenceCount++;
                    (_a = this._runtimeInstance) === null || _a === void 0 || _a.incrementReferenceCount();
                };
                /*
     * method to subtract one to the reference counter of the instance.
     * Use if incrementReferenceCount has been called
     */ ViewModelInstance.prototype.decrementReferenceCount = function() {
                    var _a;
                    this._referenceCount--;
                    (_a = this._runtimeInstance) === null || _a === void 0 || _a.decrementReferenceCount();
                };
                Object.defineProperty(ViewModelInstance.prototype, "properties", {
                    get: function() {
                        var _a;
                        return ((_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.getProperties().map(function(prop) {
                            return __assign({}, prop);
                        })) || [];
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstance.prototype.internalIncrementReferenceCount = function() {
                    this._referenceCount++;
                };
                ViewModelInstance.prototype.cleanup = function() {
                    this._referenceCount--;
                    if (this._referenceCount <= 0) {
                        this._runtimeInstance = null;
                        this.clearCallbacks();
                        this._propertiesWithCallbacks = [];
                    }
                };
                return ViewModelInstance;
            }();
            var ViewModelInstanceValue = /** @class */ function() {
                function ViewModelInstanceValue(instance, root) {
                    this.callbacks = [];
                    this._viewModelInstanceValue = instance;
                    this._rootViewModel = root;
                }
                ViewModelInstanceValue.prototype.on = function(callback) {
                    // Since we don't clean the changed flag for properties that don't have listeners,
                    // we clean it the first time we add a listener to it
                    if (this.callbacks.length === 0) this._viewModelInstanceValue.clearChanges();
                    if (!this.callbacks.includes(callback)) {
                        this.callbacks.push(callback);
                        this._rootViewModel.addToCallbacks(this);
                    }
                };
                ViewModelInstanceValue.prototype.off = function(callback) {
                    if (!callback) this.callbacks.length = 0;
                    else this.callbacks = this.callbacks.filter(function(cb) {
                        return cb !== callback;
                    });
                    if (this.callbacks.length === 0) this._rootViewModel.removeFromCallbacks(this);
                };
                ViewModelInstanceValue.prototype.internalHandleCallback = function(callback) {};
                ViewModelInstanceValue.prototype.handleCallbacks = function() {
                    var _this = this;
                    if (this._viewModelInstanceValue.hasChanged) {
                        this._viewModelInstanceValue.clearChanges();
                        this.callbacks.forEach(function(callback) {
                            _this.internalHandleCallback(callback);
                        });
                    }
                };
                ViewModelInstanceValue.prototype.clearCallbacks = function() {
                    this.callbacks.length = 0;
                };
                Object.defineProperty(ViewModelInstanceValue.prototype, "name", {
                    get: function() {
                        return this._viewModelInstanceValue.name;
                    },
                    enumerable: false,
                    configurable: true
                });
                return ViewModelInstanceValue;
            }();
            var ViewModelInstanceString = /** @class */ function(_super) {
                __extends(ViewModelInstanceString, _super);
                function ViewModelInstanceString(instance, root) {
                    return _super.call(this, instance, root) || this;
                }
                Object.defineProperty(ViewModelInstanceString.prototype, "value", {
                    get: function() {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.value = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceString.prototype.internalHandleCallback = function(callback) {
                    callback(this.value);
                };
                return ViewModelInstanceString;
            }(ViewModelInstanceValue);
            var ViewModelInstanceNumber = /** @class */ function(_super) {
                __extends(ViewModelInstanceNumber, _super);
                function ViewModelInstanceNumber(instance, root) {
                    return _super.call(this, instance, root) || this;
                }
                Object.defineProperty(ViewModelInstanceNumber.prototype, "value", {
                    get: function() {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.value = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceNumber.prototype.internalHandleCallback = function(callback) {
                    callback(this.value);
                };
                return ViewModelInstanceNumber;
            }(ViewModelInstanceValue);
            var ViewModelInstanceBoolean = /** @class */ function(_super) {
                __extends(ViewModelInstanceBoolean, _super);
                function ViewModelInstanceBoolean(instance, root) {
                    return _super.call(this, instance, root) || this;
                }
                Object.defineProperty(ViewModelInstanceBoolean.prototype, "value", {
                    get: function() {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.value = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceBoolean.prototype.internalHandleCallback = function(callback) {
                    callback(this.value);
                };
                return ViewModelInstanceBoolean;
            }(ViewModelInstanceValue);
            var ViewModelInstanceTrigger = /** @class */ function(_super) {
                __extends(ViewModelInstanceTrigger, _super);
                function ViewModelInstanceTrigger(instance, root) {
                    return _super.call(this, instance, root) || this;
                }
                ViewModelInstanceTrigger.prototype.trigger = function() {
                    return this._viewModelInstanceValue.trigger();
                };
                ViewModelInstanceTrigger.prototype.internalHandleCallback = function(callback) {
                    callback();
                };
                return ViewModelInstanceTrigger;
            }(ViewModelInstanceValue);
            var ViewModelInstanceEnum = /** @class */ function(_super) {
                __extends(ViewModelInstanceEnum, _super);
                function ViewModelInstanceEnum(instance, root) {
                    return _super.call(this, instance, root) || this;
                }
                Object.defineProperty(ViewModelInstanceEnum.prototype, "value", {
                    get: function() {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.value = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ViewModelInstanceEnum.prototype, "valueIndex", {
                    get: function() {
                        return this._viewModelInstanceValue.valueIndex;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.valueIndex = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ViewModelInstanceEnum.prototype, "values", {
                    get: function() {
                        return this._viewModelInstanceValue.values;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceEnum.prototype.internalHandleCallback = function(callback) {
                    callback(this.value);
                };
                return ViewModelInstanceEnum;
            }(ViewModelInstanceValue);
            var ViewModelInstanceColor = /** @class */ function(_super) {
                __extends(ViewModelInstanceColor, _super);
                function ViewModelInstanceColor(instance, root) {
                    return _super.call(this, instance, root) || this;
                }
                Object.defineProperty(ViewModelInstanceColor.prototype, "value", {
                    get: function() {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.value = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceColor.prototype.rgb = function(r, g, b) {
                    this._viewModelInstanceValue.rgb(r, g, b);
                };
                ViewModelInstanceColor.prototype.rgba = function(r, g, b, a) {
                    this._viewModelInstanceValue.argb(a, r, g, b);
                };
                ViewModelInstanceColor.prototype.argb = function(a, r, g, b) {
                    this._viewModelInstanceValue.argb(a, r, g, b);
                };
                // Value 0 to 255
                ViewModelInstanceColor.prototype.alpha = function(a) {
                    this._viewModelInstanceValue.alpha(a);
                };
                // Value 0 to 1
                ViewModelInstanceColor.prototype.opacity = function(o) {
                    this._viewModelInstanceValue.alpha(Math.round(Math.max(0, Math.min(1, o)) * 255));
                };
                ViewModelInstanceColor.prototype.internalHandleCallback = function(callback) {
                    callback(this.value);
                };
                return ViewModelInstanceColor;
            }(ViewModelInstanceValue);
            // Loads Rive data from a URI via fetch.
            var loadRiveFile = function(src) {
                return __awaiter(void 0, void 0, void 0, function() {
                    var req, res, buffer;
                    return __generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                req = new Request(src);
                                return [
                                    4 /*yield*/ ,
                                    fetch(req)
                                ];
                            case 1:
                                res = _a.sent();
                                return [
                                    4 /*yield*/ ,
                                    res.arrayBuffer()
                                ];
                            case 2:
                                buffer = _a.sent();
                                return [
                                    2 /*return*/ ,
                                    buffer
                                ];
                        }
                    });
                });
            };
            // #endregion
            // #region utility functions
            /*
 * Utility function to ensure an object is a string array
 */ var mapToStringArray = function(obj) {
                if (typeof obj === "string") return [
                    obj
                ];
                else if (obj instanceof Array) return obj;
                // If obj is undefined, return empty array
                return [];
            };
            // #endregion
            // #region testing utilities
            // Exports to only be used for tests
            var Testing = {
                EventManager: EventManager,
                TaskQueueManager: TaskQueueManager
            };
            // #endregion
            // #region asset loaders
            /**
 * Decodes bytes into an audio asset.
 *
 * Be sure to call `.unref()` on the audio once it is no longer needed. This
 * allows the engine to clean it up when it is not used by any more animations.
 */ var decodeAudio = function(bytes) {
                return new Promise(function(resolve) {
                    return RuntimeLoader.getInstance(function(rive) {
                        rive.decodeAudio(bytes, resolve);
                    });
                });
            };
            /**
 * Decodes bytes into an image.
 *
 * Be sure to call `.unref()` on the image once it is no longer needed. This
 * allows the engine to clean it up when it is not used by any more animations.
 */ var decodeImage = function(bytes) {
                return new Promise(function(resolve) {
                    return RuntimeLoader.getInstance(function(rive) {
                        rive.decodeImage(bytes, resolve);
                    });
                });
            };
            /**
 * Decodes bytes into a font.
 *
 * Be sure to call `.unref()` on the font once it is no longer needed. This
 * allows the engine to clean it up when it is not used by any more animations.
 */ var decodeFont = function(bytes) {
                return new Promise(function(resolve) {
                    return RuntimeLoader.getInstance(function(rive) {
                        rive.decodeFont(bytes, resolve);
                    });
                });
            };
        // #endregion
        })();
        /******/ return __webpack_exports__;
    /******/ })();
});

},{}],"7E6YN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "las1", ()=>las1);
parcelHelpers.export(exports, "las2", ()=>las2);
parcelHelpers.export(exports, "las3", ()=>las3);
parcelHelpers.export(exports, "hit1", ()=>hit1);
parcelHelpers.export(exports, "hit2", ()=>hit2);
parcelHelpers.export(exports, "hit3", ()=>hit3);
parcelHelpers.export(exports, "hit4", ()=>hit4);
parcelHelpers.export(exports, "hit5", ()=>hit5);
parcelHelpers.export(exports, "hit6", ()=>hit6);
parcelHelpers.export(exports, "powerOn", ()=>powerOn);
parcelHelpers.export(exports, "playerJoin", ()=>playerJoin);
parcelHelpers.export(exports, "shield1", ()=>shield1);
parcelHelpers.export(exports, "shieldDown", ()=>shieldDown);
parcelHelpers.export(exports, "shieldHoverOn", ()=>shieldHoverOn);
parcelHelpers.export(exports, "shieldHoverOff", ()=>shieldHoverOff);
parcelHelpers.export(exports, "reticleHoverOn", ()=>reticleHoverOn);
parcelHelpers.export(exports, "reticleHoverOff", ()=>reticleHoverOff);
parcelHelpers.export(exports, "hpHoverOn", ()=>hpHoverOn);
parcelHelpers.export(exports, "lasSoundList", ()=>lasSoundList);
parcelHelpers.export(exports, "hitSoundList", ()=>hitSoundList);
var _howler = require("howler");
var las1 = new (0, _howler.Howl)({
    src: [
        new URL(require("db785bee054df463"))
    ],
    volume: .5,
    html5: true
});
var las2 = new (0, _howler.Howl)({
    src: [
        new URL(require("e1c21c141141f3e1"))
    ],
    volume: .5,
    html5: true
});
var las3 = new (0, _howler.Howl)({
    src: [
        new URL(require("977a510fb4ac671b"))
    ],
    volume: .5,
    html5: true
});
var hit1 = new (0, _howler.Howl)({
    src: [
        new URL(require("c545003b58cdf8e6"))
    ],
    volume: .5,
    html5: true
});
var hit2 = new (0, _howler.Howl)({
    src: [
        new URL(require("636824a87904cb8b"))
    ],
    volume: .5,
    html5: true
});
var hit3 = new (0, _howler.Howl)({
    src: [
        new URL(require("fac3912d4113e63f"))
    ],
    volume: .5,
    html5: true
});
var hit4 = new (0, _howler.Howl)({
    src: [
        new URL(require("75519465ffffe915"))
    ],
    volume: .5,
    html5: true
});
var hit5 = new (0, _howler.Howl)({
    src: [
        new URL(require("e0a76e06e656043a"))
    ],
    volume: .5,
    html5: true
});
var hit6 = new (0, _howler.Howl)({
    src: [
        new URL(require("b16b862fe761b4ac"))
    ],
    volume: .5,
    html5: true
});
var powerOn = new (0, _howler.Howl)({
    src: [
        new URL(require("2e70e3ae98ba281a"))
    ],
    html5: true
});
var playerJoin = new (0, _howler.Howl)({
    src: [
        new URL(require("7ecab160571786b4"))
    ],
    html5: true
});
var shield1 = new (0, _howler.Howl)({
    src: [
        new URL(require("3b293950d07ed723"))
    ],
    volume: .5,
    html5: true
});
var shieldDown = new (0, _howler.Howl)({
    src: [
        new URL(require("f86af3a4548f380"))
    ],
    volume: .5,
    html5: true
});
var shieldHoverOn = new (0, _howler.Howl)({
    src: [
        new URL(require("886835858ba847d1"))
    ],
    volume: .5,
    html5: true
});
var shieldHoverOff = new (0, _howler.Howl)({
    src: [
        new URL(require("886835858ba847d1"))
    ],
    volume: .1,
    html5: true
});
var reticleHoverOn = new (0, _howler.Howl)({
    src: [
        new URL(require("87f83d7965ca532"))
    ],
    volume: .5,
    html5: true
});
var reticleHoverOff = new (0, _howler.Howl)({
    src: [
        new URL(require("87f83d7965ca532"))
    ],
    volume: .4,
    html5: true
});
var hpHoverOn = new (0, _howler.Howl)({
    src: [
        new URL(require("62593b3fb7d0639d"))
    ],
    volume: .14,
    html5: true
});
var lasSoundList = [
    las1,
    las2,
    las3
];
var hitSoundList = [
    hit1,
    hit2,
    hit3,
    hit4,
    hit5,
    hit6
];

},{"howler":"go5Yk","db785bee054df463":"jP67J","e1c21c141141f3e1":"isjZo","977a510fb4ac671b":"8LpE4","c545003b58cdf8e6":"eCGap","636824a87904cb8b":"2OxiU","fac3912d4113e63f":"4GA9W","75519465ffffe915":"ew7Na","e0a76e06e656043a":"5qvSq","b16b862fe761b4ac":"03Tbm","2e70e3ae98ba281a":"46NuU","7ecab160571786b4":"9RfkQ","87f83d7965ca532":"7WSCw","62593b3fb7d0639d":"9iBFT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","3b293950d07ed723":"3wIt2","f86af3a4548f380":"ty9kX","886835858ba847d1":"4jgVq"}],"go5Yk":[function(require,module,exports,__globalThis) {
var global = arguments[3];
/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */ (function() {
    'use strict';
    /** Global Methods **/ /***************************************************************************/ /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */ var HowlerGlobal1 = function() {
        this.init();
    };
    HowlerGlobal1.prototype = {
        /**
     * Initialize the global Howler object.
     * @return {Howler}
     */ init: function() {
            var self = this || Howler1;
            // Create a global ID counter.
            self._counter = 1000;
            // Pool of unlocked HTML5 Audio objects.
            self._html5AudioPool = [];
            self.html5PoolSize = 10;
            // Internal properties.
            self._codecs = {};
            self._howls = [];
            self._muted = false;
            self._volume = 1;
            self._canPlayEvent = 'canplaythrough';
            self._navigator = typeof window !== 'undefined' && window.navigator ? window.navigator : null;
            // Public properties.
            self.masterGain = null;
            self.noAudio = false;
            self.usingWebAudio = true;
            self.autoSuspend = true;
            self.ctx = null;
            // Set to false to disable the auto audio unlocker.
            self.autoUnlock = true;
            // Setup the various state values for global tracking.
            self._setup();
            return self;
        },
        /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */ volume: function(vol) {
            var self = this || Howler1;
            vol = parseFloat(vol);
            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) setupAudioContext();
            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                self._volume = vol;
                // Don't update any of the nodes if we are muted.
                if (self._muted) return self;
                // When using Web Audio, we just need to adjust the master gain.
                if (self.usingWebAudio) self.masterGain.gain.setValueAtTime(vol, Howler1.ctx.currentTime);
                // Loop through and change volume for all HTML5 audio nodes.
                for(var i = 0; i < self._howls.length; i++)if (!self._howls[i]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i]._getSoundIds();
                    // Loop through all sounds and change the volumes.
                    for(var j = 0; j < ids.length; j++){
                        var sound = self._howls[i]._soundById(ids[j]);
                        if (sound && sound._node) sound._node.volume = sound._volume * vol;
                    }
                }
                return self;
            }
            return self._volume;
        },
        /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */ mute: function(muted) {
            var self = this || Howler1;
            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) setupAudioContext();
            self._muted = muted;
            // With Web Audio, we just need to mute the master gain.
            if (self.usingWebAudio) self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler1.ctx.currentTime);
            // Loop through and mute all HTML5 Audio nodes.
            for(var i = 0; i < self._howls.length; i++)if (!self._howls[i]._webAudio) {
                // Get all of the sounds in this Howl group.
                var ids = self._howls[i]._getSoundIds();
                // Loop through all sounds and mark the audio node as muted.
                for(var j = 0; j < ids.length; j++){
                    var sound = self._howls[i]._soundById(ids[j]);
                    if (sound && sound._node) sound._node.muted = muted ? true : sound._muted;
                }
            }
            return self;
        },
        /**
     * Handle stopping all sounds globally.
     */ stop: function() {
            var self = this || Howler1;
            // Loop through all Howls and stop them.
            for(var i = 0; i < self._howls.length; i++)self._howls[i].stop();
            return self;
        },
        /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */ unload: function() {
            var self = this || Howler1;
            for(var i = self._howls.length - 1; i >= 0; i--)self._howls[i].unload();
            // Create a new AudioContext to make sure it is fully reset.
            if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
                self.ctx.close();
                self.ctx = null;
                setupAudioContext();
            }
            return self;
        },
        /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */ codecs: function(ext) {
            return (this || Howler1)._codecs[ext.replace(/^x-/, '')];
        },
        /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */ _setup: function() {
            var self = this || Howler1;
            // Keeps track of the suspend/resume state of the AudioContext.
            self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';
            // Automatically begin the 30-second suspend process
            self._autoSuspend();
            // Check if audio is available.
            if (!self.usingWebAudio) {
                // No audio is available on this system if noAudio is set to true.
                if (typeof Audio !== 'undefined') try {
                    var test = new Audio();
                    // Check if the canplaythrough event is available.
                    if (typeof test.oncanplaythrough === 'undefined') self._canPlayEvent = 'canplay';
                } catch (e) {
                    self.noAudio = true;
                }
                else self.noAudio = true;
            }
            // Test to make sure audio isn't disabled in Internet Explorer.
            try {
                var test = new Audio();
                if (test.muted) self.noAudio = true;
            } catch (e) {}
            // Check for supported codecs.
            if (!self.noAudio) self._setupCodecs();
            return self;
        },
        /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */ _setupCodecs: function() {
            var self = this || Howler1;
            var audioTest = null;
            // Must wrap in a try/catch because IE11 in server mode throws an error.
            try {
                audioTest = typeof Audio !== 'undefined' ? new Audio() : null;
            } catch (err) {
                return self;
            }
            if (!audioTest || typeof audioTest.canPlayType !== 'function') return self;
            var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');
            // Opera version <33 has mixed MP3 support, so we need to check for and block it.
            var ua = self._navigator ? self._navigator.userAgent : '';
            var checkOpera = ua.match(/OPR\/(\d+)/g);
            var isOldOpera = checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33;
            var checkSafari = ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1;
            var safariVersion = ua.match(/Version\/(.*?) /);
            var isOldSafari = checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15;
            self._codecs = {
                mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
                mpeg: !!mpegTest,
                opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType('audio/wav')).replace(/^no$/, ''),
                aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
                caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                m4b: !!(audioTest.canPlayType('audio/x-m4b;') || audioTest.canPlayType('audio/m4b;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
                webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
                dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
                flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
            };
            return self;
        },
        /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */ _unlockAudio: function() {
            var self = this || Howler1;
            // Only run this if Web Audio is supported and it hasn't already been unlocked.
            if (self._audioUnlocked || !self.ctx) return;
            self._audioUnlocked = false;
            self.autoUnlock = false;
            // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
            // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
            // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
            if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
                self._mobileUnloaded = true;
                self.unload();
            }
            // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
            // http://stackoverflow.com/questions/24119684
            self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
            // Call this method on touch start to create and play a buffer,
            // then check if the audio actually played to determine if
            // audio has now been unlocked on iOS, Android, etc.
            var unlock = function(e) {
                // Create a pool of unlocked HTML5 Audio objects that can
                // be used for playing sounds without user interaction. HTML5
                // Audio objects must be individually unlocked, as opposed
                // to the WebAudio API which only needs a single activation.
                // This must occur before WebAudio setup or the source.onended
                // event will not fire.
                while(self._html5AudioPool.length < self.html5PoolSize)try {
                    var audioNode = new Audio();
                    // Mark this Audio object as unlocked to ensure it can get returned
                    // to the unlocked pool when released.
                    audioNode._unlocked = true;
                    // Add the audio node to the pool.
                    self._releaseHtml5Audio(audioNode);
                } catch (e) {
                    self.noAudio = true;
                    break;
                }
                // Loop through any assigned audio nodes and unlock them.
                for(var i = 0; i < self._howls.length; i++)if (!self._howls[i]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i]._getSoundIds();
                    // Loop through all sounds and unlock the audio nodes.
                    for(var j = 0; j < ids.length; j++){
                        var sound = self._howls[i]._soundById(ids[j]);
                        if (sound && sound._node && !sound._node._unlocked) {
                            sound._node._unlocked = true;
                            sound._node.load();
                        }
                    }
                }
                // Fix Android can not play in suspend state.
                self._autoResume();
                // Create an empty buffer.
                var source = self.ctx.createBufferSource();
                source.buffer = self._scratchBuffer;
                source.connect(self.ctx.destination);
                // Play the empty buffer.
                if (typeof source.start === 'undefined') source.noteOn(0);
                else source.start(0);
                // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
                if (typeof self.ctx.resume === 'function') self.ctx.resume();
                // Setup a timeout to check that we are unlocked on the next event loop.
                source.onended = function() {
                    source.disconnect(0);
                    // Update the unlocked state and prevent this check from happening again.
                    self._audioUnlocked = true;
                    // Remove the touch start listener.
                    document.removeEventListener('touchstart', unlock, true);
                    document.removeEventListener('touchend', unlock, true);
                    document.removeEventListener('click', unlock, true);
                    document.removeEventListener('keydown', unlock, true);
                    // Let all sounds know that audio has been unlocked.
                    for(var i = 0; i < self._howls.length; i++)self._howls[i]._emit('unlock');
                };
            };
            // Setup a touch start listener to attempt an unlock in.
            document.addEventListener('touchstart', unlock, true);
            document.addEventListener('touchend', unlock, true);
            document.addEventListener('click', unlock, true);
            document.addEventListener('keydown', unlock, true);
            return self;
        },
        /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */ _obtainHtml5Audio: function() {
            var self = this || Howler1;
            // Return the next object from the pool if one exists.
            if (self._html5AudioPool.length) return self._html5AudioPool.pop();
            //.Check if the audio is locked and throw a warning.
            var testPlay = new Audio().play();
            if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) testPlay.catch(function() {
                console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
            });
            return new Audio();
        },
        /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */ _releaseHtml5Audio: function(audio) {
            var self = this || Howler1;
            // Don't add audio to the pool if we don't know if it has been unlocked.
            if (audio._unlocked) self._html5AudioPool.push(audio);
            return self;
        },
        /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */ _autoSuspend: function() {
            var self = this;
            if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler1.usingWebAudio) return;
            // Check if any sounds are playing.
            for(var i = 0; i < self._howls.length; i++){
                if (self._howls[i]._webAudio) for(var j = 0; j < self._howls[i]._sounds.length; j++){
                    if (!self._howls[i]._sounds[j]._paused) return self;
                }
            }
            if (self._suspendTimer) clearTimeout(self._suspendTimer);
            // If no sound has played after 30 seconds, suspend the context.
            self._suspendTimer = setTimeout(function() {
                if (!self.autoSuspend) return;
                self._suspendTimer = null;
                self.state = 'suspending';
                // Handle updating the state of the audio context after suspending.
                var handleSuspension = function() {
                    self.state = 'suspended';
                    if (self._resumeAfterSuspend) {
                        delete self._resumeAfterSuspend;
                        self._autoResume();
                    }
                };
                // Either the state gets suspended or it is interrupted.
                // Either way, we need to update the state to suspended.
                self.ctx.suspend().then(handleSuspension, handleSuspension);
            }, 30000);
            return self;
        },
        /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */ _autoResume: function() {
            var self = this;
            if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler1.usingWebAudio) return;
            if (self.state === 'running' && self.ctx.state !== 'interrupted' && self._suspendTimer) {
                clearTimeout(self._suspendTimer);
                self._suspendTimer = null;
            } else if (self.state === 'suspended' || self.state === 'running' && self.ctx.state === 'interrupted') {
                self.ctx.resume().then(function() {
                    self.state = 'running';
                    // Emit to all Howls that the audio has resumed.
                    for(var i = 0; i < self._howls.length; i++)self._howls[i]._emit('resume');
                });
                if (self._suspendTimer) {
                    clearTimeout(self._suspendTimer);
                    self._suspendTimer = null;
                }
            } else if (self.state === 'suspending') self._resumeAfterSuspend = true;
            return self;
        }
    };
    // Setup the global audio controller.
    var Howler1 = new HowlerGlobal1();
    /** Group Methods **/ /***************************************************************************/ /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */ var Howl1 = function(o) {
        var self = this;
        // Throw an error if no source is provided.
        if (!o.src || o.src.length === 0) {
            console.error('An array of source files must be passed with any new Howl.');
            return;
        }
        self.init(o);
    };
    Howl1.prototype = {
        /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */ init: function(o) {
            var self = this;
            // If we don't have an AudioContext created yet, run the setup.
            if (!Howler1.ctx) setupAudioContext();
            // Setup user-defined default properties.
            self._autoplay = o.autoplay || false;
            self._format = typeof o.format !== 'string' ? o.format : [
                o.format
            ];
            self._html5 = o.html5 || false;
            self._muted = o.mute || false;
            self._loop = o.loop || false;
            self._pool = o.pool || 5;
            self._preload = typeof o.preload === 'boolean' || o.preload === 'metadata' ? o.preload : true;
            self._rate = o.rate || 1;
            self._sprite = o.sprite || {};
            self._src = typeof o.src !== 'string' ? o.src : [
                o.src
            ];
            self._volume = o.volume !== undefined ? o.volume : 1;
            self._xhr = {
                method: o.xhr && o.xhr.method ? o.xhr.method : 'GET',
                headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
                withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false
            };
            // Setup all other default properties.
            self._duration = 0;
            self._state = 'unloaded';
            self._sounds = [];
            self._endTimers = {};
            self._queue = [];
            self._playLock = false;
            // Setup event listeners.
            self._onend = o.onend ? [
                {
                    fn: o.onend
                }
            ] : [];
            self._onfade = o.onfade ? [
                {
                    fn: o.onfade
                }
            ] : [];
            self._onload = o.onload ? [
                {
                    fn: o.onload
                }
            ] : [];
            self._onloaderror = o.onloaderror ? [
                {
                    fn: o.onloaderror
                }
            ] : [];
            self._onplayerror = o.onplayerror ? [
                {
                    fn: o.onplayerror
                }
            ] : [];
            self._onpause = o.onpause ? [
                {
                    fn: o.onpause
                }
            ] : [];
            self._onplay = o.onplay ? [
                {
                    fn: o.onplay
                }
            ] : [];
            self._onstop = o.onstop ? [
                {
                    fn: o.onstop
                }
            ] : [];
            self._onmute = o.onmute ? [
                {
                    fn: o.onmute
                }
            ] : [];
            self._onvolume = o.onvolume ? [
                {
                    fn: o.onvolume
                }
            ] : [];
            self._onrate = o.onrate ? [
                {
                    fn: o.onrate
                }
            ] : [];
            self._onseek = o.onseek ? [
                {
                    fn: o.onseek
                }
            ] : [];
            self._onunlock = o.onunlock ? [
                {
                    fn: o.onunlock
                }
            ] : [];
            self._onresume = [];
            // Web Audio or HTML5 Audio?
            self._webAudio = Howler1.usingWebAudio && !self._html5;
            // Automatically try to enable audio.
            if (typeof Howler1.ctx !== 'undefined' && Howler1.ctx && Howler1.autoUnlock) Howler1._unlockAudio();
            // Keep track of this Howl group in the global controller.
            Howler1._howls.push(self);
            // If they selected autoplay, add a play event to the load queue.
            if (self._autoplay) self._queue.push({
                event: 'play',
                action: function() {
                    self.play();
                }
            });
            // Load the source file unless otherwise specified.
            if (self._preload && self._preload !== 'none') self.load();
            return self;
        },
        /**
     * Load the audio file.
     * @return {Howler}
     */ load: function() {
            var self = this;
            var url = null;
            // If no audio is available, quit immediately.
            if (Howler1.noAudio) {
                self._emit('loaderror', null, 'No audio support.');
                return;
            }
            // Make sure our source is in an array.
            if (typeof self._src === 'string') self._src = [
                self._src
            ];
            // Loop through the sources and pick the first one that is compatible.
            for(var i = 0; i < self._src.length; i++){
                var ext, str;
                if (self._format && self._format[i]) // If an extension was specified, use that instead.
                ext = self._format[i];
                else {
                    // Make sure the source is a string.
                    str = self._src[i];
                    if (typeof str !== 'string') {
                        self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                        continue;
                    }
                    // Extract the file extension from the URL or base64 data URI.
                    ext = /^data:audio\/([^;,]+);/i.exec(str);
                    if (!ext) ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
                    if (ext) ext = ext[1].toLowerCase();
                }
                // Log a warning if no extension was found.
                if (!ext) console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
                // Check if this extension is available.
                if (ext && Howler1.codecs(ext)) {
                    url = self._src[i];
                    break;
                }
            }
            if (!url) {
                self._emit('loaderror', null, 'No codec support for selected audio sources.');
                return;
            }
            self._src = url;
            self._state = 'loading';
            // If the hosting page is HTTPS and the source isn't,
            // drop down to HTML5 Audio to avoid Mixed Content errors.
            if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
                self._html5 = true;
                self._webAudio = false;
            }
            // Create a new sound object and add it to the pool.
            new Sound1(self);
            // Load and decode the audio data for playback.
            if (self._webAudio) loadBuffer(self);
            return self;
        },
        /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */ play: function(sprite, internal) {
            var self = this;
            var id = null;
            // Determine if a sprite, sound id or nothing was passed
            if (typeof sprite === 'number') {
                id = sprite;
                sprite = null;
            } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) // If the passed sprite doesn't exist, do nothing.
            return null;
            else if (typeof sprite === 'undefined') {
                // Use the default sound sprite (plays the full audio length).
                sprite = '__default';
                // Check if there is a single paused sound that isn't ended.
                // If there is, play that sound. If not, continue as usual.
                if (!self._playLock) {
                    var num = 0;
                    for(var i = 0; i < self._sounds.length; i++)if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                        num++;
                        id = self._sounds[i]._id;
                    }
                    if (num === 1) sprite = null;
                    else id = null;
                }
            }
            // Get the selected node, or get one from the pool.
            var sound = id ? self._soundById(id) : self._inactiveSound();
            // If the sound doesn't exist, do nothing.
            if (!sound) return null;
            // Select the sprite definition.
            if (id && !sprite) sprite = sound._sprite || '__default';
            // If the sound hasn't loaded, we must wait to get the audio's duration.
            // We also need to wait to make sure we don't run into race conditions with
            // the order of function calls.
            if (self._state !== 'loaded') {
                // Set the sprite value on this sound.
                sound._sprite = sprite;
                // Mark this sound as not ended in case another sound is played before this one loads.
                sound._ended = false;
                // Add the sound to the queue to be played on load.
                var soundId = sound._id;
                self._queue.push({
                    event: 'play',
                    action: function() {
                        self.play(soundId);
                    }
                });
                return soundId;
            }
            // Don't play the sound if an id was passed and it is already playing.
            if (id && !sound._paused) {
                // Trigger the play event, in order to keep iterating through queue.
                if (!internal) self._loadQueue('play');
                return sound._id;
            }
            // Make sure the AudioContext isn't suspended, and resume it if it is.
            if (self._webAudio) Howler1._autoResume();
            // Determine how long to play for and where to start playing.
            var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
            var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000 - seek);
            var timeout = duration * 1000 / Math.abs(sound._rate);
            var start = self._sprite[sprite][0] / 1000;
            var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
            sound._sprite = sprite;
            // Mark the sound as ended instantly so that this async playback
            // doesn't get grabbed by another call to play while this one waits to start.
            sound._ended = false;
            // Update the parameters of the sound.
            var setParams = function() {
                sound._paused = false;
                sound._seek = seek;
                sound._start = start;
                sound._stop = stop;
                sound._loop = !!(sound._loop || self._sprite[sprite][2]);
            };
            // End the sound instantly if seek is at the end.
            if (seek >= stop) {
                self._ended(sound);
                return;
            }
            // Begin the actual playback.
            var node = sound._node;
            if (self._webAudio) {
                // Fire this when the sound is ready to play to begin Web Audio playback.
                var playWebAudio = function() {
                    self._playLock = false;
                    setParams();
                    self._refreshBuffer(sound);
                    // Setup the playback params.
                    var vol = sound._muted || self._muted ? 0 : sound._volume;
                    node.gain.setValueAtTime(vol, Howler1.ctx.currentTime);
                    sound._playStart = Howler1.ctx.currentTime;
                    // Play the sound using the supported method.
                    if (typeof node.bufferSource.start === 'undefined') sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
                    else sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
                    // Start a new timer if none is present.
                    if (timeout !== Infinity) self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                    if (!internal) setTimeout(function() {
                        self._emit('play', sound._id);
                        self._loadQueue();
                    }, 0);
                };
                if (Howler1.state === 'running' && Howler1.ctx.state !== 'interrupted') playWebAudio();
                else {
                    self._playLock = true;
                    // Wait for the audio context to resume before playing.
                    self.once('resume', playWebAudio);
                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            } else {
                // Fire this when the sound is ready to play to begin HTML5 Audio playback.
                var playHtml5 = function() {
                    node.currentTime = seek;
                    node.muted = sound._muted || self._muted || Howler1._muted || node.muted;
                    node.volume = sound._volume * Howler1.volume();
                    node.playbackRate = sound._rate;
                    // Some browsers will throw an error if this is called without user interaction.
                    try {
                        var play = node.play();
                        // Support older browsers that don't support promises, and thus don't have this issue.
                        if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
                            // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
                            self._playLock = true;
                            // Set param values immediately.
                            setParams();
                            // Releases the lock and executes queued actions.
                            play.then(function() {
                                self._playLock = false;
                                node._unlocked = true;
                                if (!internal) self._emit('play', sound._id);
                                else self._loadQueue();
                            }).catch(function() {
                                self._playLock = false;
                                self._emit('playerror', sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                // Reset the ended and paused values.
                                sound._ended = true;
                                sound._paused = true;
                            });
                        } else if (!internal) {
                            self._playLock = false;
                            setParams();
                            self._emit('play', sound._id);
                        }
                        // Setting rate before playing won't work in IE, so we set it again here.
                        node.playbackRate = sound._rate;
                        // If the node is still paused, then we can assume there was a playback issue.
                        if (node.paused) {
                            self._emit('playerror', sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                            return;
                        }
                        // Setup the end timer on sprites or listen for the ended event.
                        if (sprite !== '__default' || sound._loop) self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                        else {
                            self._endTimers[sound._id] = function() {
                                // Fire ended on this audio node.
                                self._ended(sound);
                                // Clear this listener.
                                node.removeEventListener('ended', self._endTimers[sound._id], false);
                            };
                            node.addEventListener('ended', self._endTimers[sound._id], false);
                        }
                    } catch (err) {
                        self._emit('playerror', sound._id, err);
                    }
                };
                // If this is streaming audio, make sure the src is set and load again.
                if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
                    node.src = self._src;
                    node.load();
                }
                // Play immediately if ready, or wait for the 'canplaythrough'e vent.
                var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler1._navigator.isCocoonJS;
                if (node.readyState >= 3 || loadedNoReadyState) playHtml5();
                else {
                    self._playLock = true;
                    self._state = 'loading';
                    var listener = function() {
                        self._state = 'loaded';
                        // Begin playback.
                        playHtml5();
                        // Clear this listener.
                        node.removeEventListener(Howler1._canPlayEvent, listener, false);
                    };
                    node.addEventListener(Howler1._canPlayEvent, listener, false);
                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            }
            return sound._id;
        },
        /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */ pause: function(id) {
            var self = this;
            // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
            if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                    event: 'pause',
                    action: function() {
                        self.pause(id);
                    }
                });
                return self;
            }
            // If no id is passed, get all ID's to be paused.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Clear the end timer.
                self._clearTimer(ids[i]);
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound && !sound._paused) {
                    // Reset the seek position.
                    sound._seek = self.seek(ids[i]);
                    sound._rateSeek = 0;
                    sound._paused = true;
                    // Stop currently running fades.
                    self._stopFade(ids[i]);
                    if (sound._node) {
                        if (self._webAudio) {
                            // Make sure the sound has been created.
                            if (!sound._node.bufferSource) continue;
                            if (typeof sound._node.bufferSource.stop === 'undefined') sound._node.bufferSource.noteOff(0);
                            else sound._node.bufferSource.stop(0);
                            // Clean up the buffer source.
                            self._cleanBuffer(sound._node);
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) sound._node.pause();
                    }
                }
                // Fire the pause event, unless `true` is passed as the 2nd argument.
                if (!arguments[1]) self._emit('pause', sound ? sound._id : null);
            }
            return self;
        },
        /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */ stop: function(id, internal) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to stop when capable.
            if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                    event: 'stop',
                    action: function() {
                        self.stop(id);
                    }
                });
                return self;
            }
            // If no id is passed, get all ID's to be stopped.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Clear the end timer.
                self._clearTimer(ids[i]);
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound) {
                    // Reset the seek position.
                    sound._seek = sound._start || 0;
                    sound._rateSeek = 0;
                    sound._paused = true;
                    sound._ended = true;
                    // Stop currently running fades.
                    self._stopFade(ids[i]);
                    if (sound._node) {
                        if (self._webAudio) // Make sure the sound's AudioBufferSourceNode has been created.
                        {
                            if (sound._node.bufferSource) {
                                if (typeof sound._node.bufferSource.stop === 'undefined') sound._node.bufferSource.noteOff(0);
                                else sound._node.bufferSource.stop(0);
                                // Clean up the buffer source.
                                self._cleanBuffer(sound._node);
                            }
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                            sound._node.currentTime = sound._start || 0;
                            sound._node.pause();
                            // If this is a live stream, stop download once the audio is stopped.
                            if (sound._node.duration === Infinity) self._clearSound(sound._node);
                        }
                    }
                    if (!internal) self._emit('stop', sound._id);
                }
            }
            return self;
        },
        /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */ mute: function(muted, id) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to mute when capable.
            if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                    event: 'mute',
                    action: function() {
                        self.mute(muted, id);
                    }
                });
                return self;
            }
            // If applying mute/unmute to all sounds, update the group's value.
            if (typeof id === 'undefined') {
                if (typeof muted === 'boolean') self._muted = muted;
                else return self._muted;
            }
            // If no id is passed, get all ID's to be muted.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound) {
                    sound._muted = muted;
                    // Cancel active fade and set the volume to the end value.
                    if (sound._interval) self._stopFade(sound._id);
                    if (self._webAudio && sound._node) sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler1.ctx.currentTime);
                    else if (sound._node) sound._node.muted = Howler1._muted ? true : muted;
                    self._emit('mute', sound._id);
                }
            }
            return self;
        },
        /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */ volume: function() {
            var self = this;
            var args = arguments;
            var vol, id;
            // Determine the values based on arguments.
            if (args.length === 0) // Return the value of the groups' volume.
            return self._volume;
            else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
                // First check if this is an ID, and if not, assume it is a new volume.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else vol = parseFloat(args[0]);
            } else if (args.length >= 2) {
                vol = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // Update the volume or return the current volume.
            var sound;
            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                // If the sound hasn't loaded, add it to the load queue to change volume when capable.
                if (self._state !== 'loaded' || self._playLock) {
                    self._queue.push({
                        event: 'volume',
                        action: function() {
                            self.volume.apply(self, args);
                        }
                    });
                    return self;
                }
                // Set the group volume.
                if (typeof id === 'undefined') self._volume = vol;
                // Update one or all volumes.
                id = self._getSoundIds(id);
                for(var i = 0; i < id.length; i++){
                    // Get the sound.
                    sound = self._soundById(id[i]);
                    if (sound) {
                        sound._volume = vol;
                        // Stop currently running fades.
                        if (!args[2]) self._stopFade(id[i]);
                        if (self._webAudio && sound._node && !sound._muted) sound._node.gain.setValueAtTime(vol, Howler1.ctx.currentTime);
                        else if (sound._node && !sound._muted) sound._node.volume = vol * Howler1.volume();
                        self._emit('volume', sound._id);
                    }
                }
            } else {
                sound = id ? self._soundById(id) : self._sounds[0];
                return sound ? sound._volume : 0;
            }
            return self;
        },
        /**
     * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */ fade: function(from, to, len, id) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to fade when capable.
            if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                    event: 'fade',
                    action: function() {
                        self.fade(from, to, len, id);
                    }
                });
                return self;
            }
            // Make sure the to/from/len values are numbers.
            from = Math.min(Math.max(0, parseFloat(from)), 1);
            to = Math.min(Math.max(0, parseFloat(to)), 1);
            len = parseFloat(len);
            // Set the volume to the start position.
            self.volume(from, id);
            // Fade the volume of one or all sounds.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Get the sound.
                var sound = self._soundById(ids[i]);
                // Create a linear fade or fall back to timeouts with HTML5 Audio.
                if (sound) {
                    // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
                    if (!id) self._stopFade(ids[i]);
                    // If we are using Web Audio, let the native methods do the actual fade.
                    if (self._webAudio && !sound._muted) {
                        var currentTime = Howler1.ctx.currentTime;
                        var end = currentTime + len / 1000;
                        sound._volume = from;
                        sound._node.gain.setValueAtTime(from, currentTime);
                        sound._node.gain.linearRampToValueAtTime(to, end);
                    }
                    self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
                }
            }
            return self;
        },
        /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */ _startFadeInterval: function(sound, from, to, len, id, isGroup) {
            var self = this;
            var vol = from;
            var diff = to - from;
            var steps = Math.abs(diff / 0.01);
            var stepLen = Math.max(4, steps > 0 ? len / steps : len);
            var lastTick = Date.now();
            // Store the value being faded to.
            sound._fadeTo = to;
            // Update the volume value on each interval tick.
            sound._interval = setInterval(function() {
                // Update the volume based on the time since the last tick.
                var tick = (Date.now() - lastTick) / len;
                lastTick = Date.now();
                vol += diff * tick;
                // Round to within 2 decimal points.
                vol = Math.round(vol * 100) / 100;
                // Make sure the volume is in the right bounds.
                if (diff < 0) vol = Math.max(to, vol);
                else vol = Math.min(to, vol);
                // Change the volume.
                if (self._webAudio) sound._volume = vol;
                else self.volume(vol, sound._id, true);
                // Set the group's volume.
                if (isGroup) self._volume = vol;
                // When the fade is complete, stop it and fire event.
                if (to < from && vol <= to || to > from && vol >= to) {
                    clearInterval(sound._interval);
                    sound._interval = null;
                    sound._fadeTo = null;
                    self.volume(to, sound._id);
                    self._emit('fade', sound._id);
                }
            }, stepLen);
        },
        /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */ _stopFade: function(id) {
            var self = this;
            var sound = self._soundById(id);
            if (sound && sound._interval) {
                if (self._webAudio) sound._node.gain.cancelScheduledValues(Howler1.ctx.currentTime);
                clearInterval(sound._interval);
                sound._interval = null;
                self.volume(sound._fadeTo, id);
                sound._fadeTo = null;
                self._emit('fade', id);
            }
            return self;
        },
        /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */ loop: function() {
            var self = this;
            var args = arguments;
            var loop, id, sound;
            // Determine the values for loop and id.
            if (args.length === 0) // Return the grou's loop value.
            return self._loop;
            else if (args.length === 1) {
                if (typeof args[0] === 'boolean') {
                    loop = args[0];
                    self._loop = loop;
                } else {
                    // Return this sound's loop value.
                    sound = self._soundById(parseInt(args[0], 10));
                    return sound ? sound._loop : false;
                }
            } else if (args.length === 2) {
                loop = args[0];
                id = parseInt(args[1], 10);
            }
            // If no id is passed, get all ID's to be looped.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                sound = self._soundById(ids[i]);
                if (sound) {
                    sound._loop = loop;
                    if (self._webAudio && sound._node && sound._node.bufferSource) {
                        sound._node.bufferSource.loop = loop;
                        if (loop) {
                            sound._node.bufferSource.loopStart = sound._start || 0;
                            sound._node.bufferSource.loopEnd = sound._stop;
                            // If playing, restart playback to ensure looping updates.
                            if (self.playing(ids[i])) {
                                self.pause(ids[i], true);
                                self.play(ids[i], true);
                            }
                        }
                    }
                }
            }
            return self;
        },
        /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */ rate: function() {
            var self = this;
            var args = arguments;
            var rate, id;
            // Determine the values based on arguments.
            if (args.length === 0) // We will simply return the current rate of the first node.
            id = self._sounds[0]._id;
            else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new rate value.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else rate = parseFloat(args[0]);
            } else if (args.length === 2) {
                rate = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // Update the playback rate or return the current value.
            var sound;
            if (typeof rate === 'number') {
                // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
                if (self._state !== 'loaded' || self._playLock) {
                    self._queue.push({
                        event: 'rate',
                        action: function() {
                            self.rate.apply(self, args);
                        }
                    });
                    return self;
                }
                // Set the group rate.
                if (typeof id === 'undefined') self._rate = rate;
                // Update one or all volumes.
                id = self._getSoundIds(id);
                for(var i = 0; i < id.length; i++){
                    // Get the sound.
                    sound = self._soundById(id[i]);
                    if (sound) {
                        // Keep track of our position when the rate changed and update the playback
                        // start position so we can properly adjust the seek position for time elapsed.
                        if (self.playing(id[i])) {
                            sound._rateSeek = self.seek(id[i]);
                            sound._playStart = self._webAudio ? Howler1.ctx.currentTime : sound._playStart;
                        }
                        sound._rate = rate;
                        // Change the playback rate.
                        if (self._webAudio && sound._node && sound._node.bufferSource) sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler1.ctx.currentTime);
                        else if (sound._node) sound._node.playbackRate = rate;
                        // Reset the timers.
                        var seek = self.seek(id[i]);
                        var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000 - seek;
                        var timeout = duration * 1000 / Math.abs(sound._rate);
                        // Start a new end timer if sound is already playing.
                        if (self._endTimers[id[i]] || !sound._paused) {
                            self._clearTimer(id[i]);
                            self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                        }
                        self._emit('rate', sound._id);
                    }
                }
            } else {
                sound = self._soundById(id);
                return sound ? sound._rate : self._rate;
            }
            return self;
        },
        /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */ seek: function() {
            var self = this;
            var args = arguments;
            var seek, id;
            // Determine the values based on arguments.
            if (args.length === 0) // We will simply return the current position of the first node.
            {
                if (self._sounds.length) id = self._sounds[0]._id;
            } else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new seek position.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else if (self._sounds.length) {
                    id = self._sounds[0]._id;
                    seek = parseFloat(args[0]);
                }
            } else if (args.length === 2) {
                seek = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // If there is no ID, bail out.
            if (typeof id === 'undefined') return 0;
            // If the sound hasn't loaded, add it to the load queue to seek when capable.
            if (typeof seek === 'number' && (self._state !== 'loaded' || self._playLock)) {
                self._queue.push({
                    event: 'seek',
                    action: function() {
                        self.seek.apply(self, args);
                    }
                });
                return self;
            }
            // Get the sound.
            var sound = self._soundById(id);
            if (sound) {
                if (typeof seek === 'number' && seek >= 0) {
                    // Pause the sound and update position for restarting playback.
                    var playing = self.playing(id);
                    if (playing) self.pause(id, true);
                    // Move the position of the track and cancel timer.
                    sound._seek = seek;
                    sound._ended = false;
                    self._clearTimer(id);
                    // Update the seek position for HTML5 Audio.
                    if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) sound._node.currentTime = seek;
                    // Seek and emit when ready.
                    var seekAndEmit = function() {
                        // Restart the playback if the sound was playing.
                        if (playing) self.play(id, true);
                        self._emit('seek', id);
                    };
                    // Wait for the play lock to be unset before emitting (HTML5 Audio).
                    if (playing && !self._webAudio) {
                        var emitSeek = function() {
                            if (!self._playLock) seekAndEmit();
                            else setTimeout(emitSeek, 0);
                        };
                        setTimeout(emitSeek, 0);
                    } else seekAndEmit();
                } else {
                    if (self._webAudio) {
                        var realTime = self.playing(id) ? Howler1.ctx.currentTime - sound._playStart : 0;
                        var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                        return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
                    } else return sound._node.currentTime;
                }
            }
            return self;
        },
        /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */ playing: function(id) {
            var self = this;
            // Check the passed sound ID (if any).
            if (typeof id === 'number') {
                var sound = self._soundById(id);
                return sound ? !sound._paused : false;
            }
            // Otherwise, loop through all sounds and check if any are playing.
            for(var i = 0; i < self._sounds.length; i++){
                if (!self._sounds[i]._paused) return true;
            }
            return false;
        },
        /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */ duration: function(id) {
            var self = this;
            var duration = self._duration;
            // If we pass an ID, get the sound and return the sprite length.
            var sound = self._soundById(id);
            if (sound) duration = self._sprite[sound._sprite][1] / 1000;
            return duration;
        },
        /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */ state: function() {
            return this._state;
        },
        /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */ unload: function() {
            var self = this;
            // Stop playing any active sounds.
            var sounds = self._sounds;
            for(var i = 0; i < sounds.length; i++){
                // Stop the sound if it is currently playing.
                if (!sounds[i]._paused) self.stop(sounds[i]._id);
                // Remove the source or disconnect.
                if (!self._webAudio) {
                    // Set the source to 0-second silence to stop any downloading (except in IE).
                    self._clearSound(sounds[i]._node);
                    // Remove any event listeners.
                    sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
                    sounds[i]._node.removeEventListener(Howler1._canPlayEvent, sounds[i]._loadFn, false);
                    sounds[i]._node.removeEventListener('ended', sounds[i]._endFn, false);
                    // Release the Audio object back to the pool.
                    Howler1._releaseHtml5Audio(sounds[i]._node);
                }
                // Empty out all of the nodes.
                delete sounds[i]._node;
                // Make sure all timers are cleared out.
                self._clearTimer(sounds[i]._id);
            }
            // Remove the references in the global Howler object.
            var index = Howler1._howls.indexOf(self);
            if (index >= 0) Howler1._howls.splice(index, 1);
            // Delete this sound from the cache (if no other Howl is using it).
            var remCache = true;
            for(i = 0; i < Howler1._howls.length; i++)if (Howler1._howls[i]._src === self._src || self._src.indexOf(Howler1._howls[i]._src) >= 0) {
                remCache = false;
                break;
            }
            if (cache && remCache) delete cache[self._src];
            // Clear global errors.
            Howler1.noAudio = false;
            // Clear out `self`.
            self._state = 'unloaded';
            self._sounds = [];
            self = null;
            return null;
        },
        /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */ on: function(event, fn, id, once) {
            var self = this;
            var events = self['_on' + event];
            if (typeof fn === 'function') events.push(once ? {
                id: id,
                fn: fn,
                once: once
            } : {
                id: id,
                fn: fn
            });
            return self;
        },
        /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */ off: function(event, fn, id) {
            var self = this;
            var events = self['_on' + event];
            var i = 0;
            // Allow passing just an event and ID.
            if (typeof fn === 'number') {
                id = fn;
                fn = null;
            }
            if (fn || id) // Loop through event store and remove the passed function.
            for(i = 0; i < events.length; i++){
                var isId = id === events[i].id;
                if (fn === events[i].fn && isId || !fn && isId) {
                    events.splice(i, 1);
                    break;
                }
            }
            else if (event) // Clear out all events of this type.
            self['_on' + event] = [];
            else {
                // Clear out all events of every type.
                var keys = Object.keys(self);
                for(i = 0; i < keys.length; i++)if (keys[i].indexOf('_on') === 0 && Array.isArray(self[keys[i]])) self[keys[i]] = [];
            }
            return self;
        },
        /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */ once: function(event, fn, id) {
            var self = this;
            // Setup the event listener.
            self.on(event, fn, id, 1);
            return self;
        },
        /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */ _emit: function(event, id, msg) {
            var self = this;
            var events = self['_on' + event];
            // Loop through event store and fire all functions.
            for(var i = events.length - 1; i >= 0; i--)// Only fire the listener if the correct ID is used.
            if (!events[i].id || events[i].id === id || event === 'load') {
                setTimeout((function(fn) {
                    fn.call(this, id, msg);
                }).bind(self, events[i].fn), 0);
                // If this event was setup with `once`, remove it.
                if (events[i].once) self.off(event, events[i].fn, events[i].id);
            }
            // Pass the event type into load queue so that it can continue stepping.
            self._loadQueue(event);
            return self;
        },
        /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */ _loadQueue: function(event) {
            var self = this;
            if (self._queue.length > 0) {
                var task = self._queue[0];
                // Remove this task if a matching event was passed.
                if (task.event === event) {
                    self._queue.shift();
                    self._loadQueue();
                }
                // Run the task if no event type is passed.
                if (!event) task.action();
            }
            return self;
        },
        /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */ _ended: function(sound) {
            var self = this;
            var sprite = sound._sprite;
            // If we are using IE and there was network latency we may be clipping
            // audio before it completes playing. Lets check the node to make sure it
            // believes it has completed, before ending the playback.
            if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
                setTimeout(self._ended.bind(self, sound), 100);
                return self;
            }
            // Should this sound loop?
            var loop = !!(sound._loop || self._sprite[sprite][2]);
            // Fire the ended event.
            self._emit('end', sound._id);
            // Restart the playback for HTML5 Audio loop.
            if (!self._webAudio && loop) self.stop(sound._id, true).play(sound._id);
            // Restart this timer if on a Web Audio loop.
            if (self._webAudio && loop) {
                self._emit('play', sound._id);
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                sound._playStart = Howler1.ctx.currentTime;
                var timeout = (sound._stop - sound._start) * 1000 / Math.abs(sound._rate);
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            }
            // Mark the node as paused.
            if (self._webAudio && !loop) {
                sound._paused = true;
                sound._ended = true;
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                self._clearTimer(sound._id);
                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
                // Attempt to auto-suspend AudioContext if no sounds are still playing.
                Howler1._autoSuspend();
            }
            // When using a sprite, end the track.
            if (!self._webAudio && !loop) self.stop(sound._id, true);
            return self;
        },
        /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */ _clearTimer: function(id) {
            var self = this;
            if (self._endTimers[id]) {
                // Clear the timeout or remove the ended listener.
                if (typeof self._endTimers[id] !== 'function') clearTimeout(self._endTimers[id]);
                else {
                    var sound = self._soundById(id);
                    if (sound && sound._node) sound._node.removeEventListener('ended', self._endTimers[id], false);
                }
                delete self._endTimers[id];
            }
            return self;
        },
        /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */ _soundById: function(id) {
            var self = this;
            // Loop through all sounds and find the one with this ID.
            for(var i = 0; i < self._sounds.length; i++){
                if (id === self._sounds[i]._id) return self._sounds[i];
            }
            return null;
        },
        /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */ _inactiveSound: function() {
            var self = this;
            self._drain();
            // Find the first inactive node to recycle.
            for(var i = 0; i < self._sounds.length; i++){
                if (self._sounds[i]._ended) return self._sounds[i].reset();
            }
            // If no inactive node was found, create a new one.
            return new Sound1(self);
        },
        /**
     * Drain excess inactive sounds from the pool.
     */ _drain: function() {
            var self = this;
            var limit = self._pool;
            var cnt = 0;
            var i = 0;
            // If there are less sounds than the max pool size, we are done.
            if (self._sounds.length < limit) return;
            // Count the number of inactive sounds.
            for(i = 0; i < self._sounds.length; i++)if (self._sounds[i]._ended) cnt++;
            // Remove excess inactive sounds, going in reverse order.
            for(i = self._sounds.length - 1; i >= 0; i--){
                if (cnt <= limit) return;
                if (self._sounds[i]._ended) {
                    // Disconnect the audio source when using Web Audio.
                    if (self._webAudio && self._sounds[i]._node) self._sounds[i]._node.disconnect(0);
                    // Remove sounds until we have the pool size.
                    self._sounds.splice(i, 1);
                    cnt--;
                }
            }
        },
        /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */ _getSoundIds: function(id) {
            var self = this;
            if (typeof id === 'undefined') {
                var ids = [];
                for(var i = 0; i < self._sounds.length; i++)ids.push(self._sounds[i]._id);
                return ids;
            } else return [
                id
            ];
        },
        /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */ _refreshBuffer: function(sound) {
            var self = this;
            // Setup the buffer source for playback.
            sound._node.bufferSource = Howler1.ctx.createBufferSource();
            sound._node.bufferSource.buffer = cache[self._src];
            // Connect to the correct node.
            if (sound._panner) sound._node.bufferSource.connect(sound._panner);
            else sound._node.bufferSource.connect(sound._node);
            // Setup looping and playback rate.
            sound._node.bufferSource.loop = sound._loop;
            if (sound._loop) {
                sound._node.bufferSource.loopStart = sound._start || 0;
                sound._node.bufferSource.loopEnd = sound._stop || 0;
            }
            sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler1.ctx.currentTime);
            return self;
        },
        /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */ _cleanBuffer: function(node) {
            var self = this;
            var isIOS = Howler1._navigator && Howler1._navigator.vendor.indexOf('Apple') >= 0;
            if (!node.bufferSource) return self;
            if (Howler1._scratchBuffer && node.bufferSource) {
                node.bufferSource.onended = null;
                node.bufferSource.disconnect(0);
                if (isIOS) try {
                    node.bufferSource.buffer = Howler1._scratchBuffer;
                } catch (e) {}
            }
            node.bufferSource = null;
            return self;
        },
        /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */ _clearSound: function(node) {
            var checkIE = /MSIE |Trident\//.test(Howler1._navigator && Howler1._navigator.userAgent);
            if (!checkIE) node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
        }
    };
    /** Single Sound Methods **/ /***************************************************************************/ /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */ var Sound1 = function(howl) {
        this._parent = howl;
        this.init();
    };
    Sound1.prototype = {
        /**
     * Initialize a new Sound object.
     * @return {Sound}
     */ init: function() {
            var self = this;
            var parent = self._parent;
            // Setup the default parameters.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default';
            // Generate a unique ID for this sound.
            self._id = ++Howler1._counter;
            // Add itself to the parent's pool.
            parent._sounds.push(self);
            // Create the new node.
            self.create();
            return self;
        },
        /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */ create: function() {
            var self = this;
            var parent = self._parent;
            var volume = Howler1._muted || self._muted || self._parent._muted ? 0 : self._volume;
            if (parent._webAudio) {
                // Create the gain node for controlling volume (the source will connect to this).
                self._node = typeof Howler1.ctx.createGain === 'undefined' ? Howler1.ctx.createGainNode() : Howler1.ctx.createGain();
                self._node.gain.setValueAtTime(volume, Howler1.ctx.currentTime);
                self._node.paused = true;
                self._node.connect(Howler1.masterGain);
            } else if (!Howler1.noAudio) {
                // Get an unlocked Audio object from the pool.
                self._node = Howler1._obtainHtml5Audio();
                // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
                self._errorFn = self._errorListener.bind(self);
                self._node.addEventListener('error', self._errorFn, false);
                // Listen for 'canplaythrough' event to let us know the sound is ready.
                self._loadFn = self._loadListener.bind(self);
                self._node.addEventListener(Howler1._canPlayEvent, self._loadFn, false);
                // Listen for the 'ended' event on the sound to account for edge-case where
                // a finite sound has a duration of Infinity.
                self._endFn = self._endListener.bind(self);
                self._node.addEventListener('ended', self._endFn, false);
                // Setup the new audio node.
                self._node.src = parent._src;
                self._node.preload = parent._preload === true ? 'auto' : parent._preload;
                self._node.volume = volume * Howler1.volume();
                // Begin loading the source.
                self._node.load();
            }
            return self;
        },
        /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */ reset: function() {
            var self = this;
            var parent = self._parent;
            // Reset all of the parameters of this sound.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._rateSeek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default';
            // Generate a new ID so that it isn't confused with the previous sound.
            self._id = ++Howler1._counter;
            return self;
        },
        /**
     * HTML5 Audio error listener callback.
     */ _errorListener: function() {
            var self = this;
            // Fire an error event and pass back the code.
            self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);
            // Clear the event listener.
            self._node.removeEventListener('error', self._errorFn, false);
        },
        /**
     * HTML5 Audio canplaythrough listener callback.
     */ _loadListener: function() {
            var self = this;
            var parent = self._parent;
            // Round up the duration to account for the lower precision in HTML5 Audio.
            parent._duration = Math.ceil(self._node.duration * 10) / 10;
            // Setup a sprite if none is defined.
            if (Object.keys(parent._sprite).length === 0) parent._sprite = {
                __default: [
                    0,
                    parent._duration * 1000
                ]
            };
            if (parent._state !== 'loaded') {
                parent._state = 'loaded';
                parent._emit('load');
                parent._loadQueue();
            }
            // Clear the event listener.
            self._node.removeEventListener(Howler1._canPlayEvent, self._loadFn, false);
        },
        /**
     * HTML5 Audio ended listener callback.
     */ _endListener: function() {
            var self = this;
            var parent = self._parent;
            // Only handle the `ended`` event if the duration is Infinity.
            if (parent._duration === Infinity) {
                // Update the parent duration to match the real audio duration.
                // Round up the duration to account for the lower precision in HTML5 Audio.
                parent._duration = Math.ceil(self._node.duration * 10) / 10;
                // Update the sprite that corresponds to the real duration.
                if (parent._sprite.__default[1] === Infinity) parent._sprite.__default[1] = parent._duration * 1000;
                // Run the regular ended method.
                parent._ended(self);
            }
            // Clear the event listener since the duration is now correct.
            self._node.removeEventListener('ended', self._endFn, false);
        }
    };
    /** Helper Methods **/ /***************************************************************************/ var cache = {};
    /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */ var loadBuffer = function(self) {
        var url = self._src;
        // Check if the buffer has already been cached and use it instead.
        if (cache[url]) {
            // Set the duration from the cache.
            self._duration = cache[url].duration;
            // Load the sound into this Howl.
            loadSound(self);
            return;
        }
        if (/^data:[^;]+;base64,/.test(url)) {
            // Decode the base64 data URI without XHR, since some browsers don't support it.
            var data = atob(url.split(',')[1]);
            var dataView = new Uint8Array(data.length);
            for(var i = 0; i < data.length; ++i)dataView[i] = data.charCodeAt(i);
            decodeAudioData(dataView.buffer, self);
        } else {
            // Load the buffer from the URL.
            var xhr = new XMLHttpRequest();
            xhr.open(self._xhr.method, url, true);
            xhr.withCredentials = self._xhr.withCredentials;
            xhr.responseType = 'arraybuffer';
            // Apply any custom headers to the request.
            if (self._xhr.headers) Object.keys(self._xhr.headers).forEach(function(key) {
                xhr.setRequestHeader(key, self._xhr.headers[key]);
            });
            xhr.onload = function() {
                // Make sure we get a successful response back.
                var code = (xhr.status + '')[0];
                if (code !== '0' && code !== '2' && code !== '3') {
                    self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
                    return;
                }
                decodeAudioData(xhr.response, self);
            };
            xhr.onerror = function() {
                // If there is an error, switch to HTML5 Audio.
                if (self._webAudio) {
                    self._html5 = true;
                    self._webAudio = false;
                    self._sounds = [];
                    delete cache[url];
                    self.load();
                }
            };
            safeXhrSend(xhr);
        }
    };
    /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */ var safeXhrSend = function(xhr) {
        try {
            xhr.send();
        } catch (e) {
            xhr.onerror();
        }
    };
    /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */ var decodeAudioData = function(arraybuffer, self) {
        // Fire a load error if something broke.
        var error = function() {
            self._emit('loaderror', null, 'Decoding audio data failed.');
        };
        // Load the sound on success.
        var success = function(buffer) {
            if (buffer && self._sounds.length > 0) {
                cache[self._src] = buffer;
                loadSound(self, buffer);
            } else error();
        };
        // Decode the buffer into an audio source.
        if (typeof Promise !== 'undefined' && Howler1.ctx.decodeAudioData.length === 1) Howler1.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
        else Howler1.ctx.decodeAudioData(arraybuffer, success, error);
    };
    /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */ var loadSound = function(self, buffer) {
        // Set the duration.
        if (buffer && !self._duration) self._duration = buffer.duration;
        // Setup a sprite if none is defined.
        if (Object.keys(self._sprite).length === 0) self._sprite = {
            __default: [
                0,
                self._duration * 1000
            ]
        };
        // Fire the loaded event.
        if (self._state !== 'loaded') {
            self._state = 'loaded';
            self._emit('load');
            self._loadQueue();
        }
    };
    /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */ var setupAudioContext = function() {
        // If we have already detected that Web Audio isn't supported, don't run this step again.
        if (!Howler1.usingWebAudio) return;
        // Check if we are using Web Audio and setup the AudioContext if we are.
        try {
            if (typeof AudioContext !== 'undefined') Howler1.ctx = new AudioContext();
            else if (typeof webkitAudioContext !== 'undefined') Howler1.ctx = new webkitAudioContext();
            else Howler1.usingWebAudio = false;
        } catch (e) {
            Howler1.usingWebAudio = false;
        }
        // If the audio context creation still failed, set using web audio to false.
        if (!Howler1.ctx) Howler1.usingWebAudio = false;
        // Check if a webview is being used on iOS8 or earlier (rather than the browser).
        // If it is, disable Web Audio as it causes crashing.
        var iOS = /iP(hone|od|ad)/.test(Howler1._navigator && Howler1._navigator.platform);
        var appVersion = Howler1._navigator && Howler1._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var version = appVersion ? parseInt(appVersion[1], 10) : null;
        if (iOS && version && version < 9) {
            var safari = /safari/.test(Howler1._navigator && Howler1._navigator.userAgent.toLowerCase());
            if (Howler1._navigator && !safari) Howler1.usingWebAudio = false;
        }
        // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
        if (Howler1.usingWebAudio) {
            Howler1.masterGain = typeof Howler1.ctx.createGain === 'undefined' ? Howler1.ctx.createGainNode() : Howler1.ctx.createGain();
            Howler1.masterGain.gain.setValueAtTime(Howler1._muted ? 0 : Howler1._volume, Howler1.ctx.currentTime);
            Howler1.masterGain.connect(Howler1.ctx.destination);
        }
        // Re-run the setup on Howler.
        Howler1._setup();
    };
    // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
    if (typeof define === 'function' && define.amd) define([], function() {
        return {
            Howler: Howler1,
            Howl: Howl1
        };
    });
    exports.Howler = Howler1;
    exports.Howl = Howl1;
    // Add to global in Node.js (for testing, etc).
    if (typeof global !== 'undefined') {
        global.HowlerGlobal = HowlerGlobal1;
        global.Howler = Howler1;
        global.Howl = Howl1;
        global.Sound = Sound1;
    } else if (typeof window !== 'undefined') {
        window.HowlerGlobal = HowlerGlobal1;
        window.Howler = Howler1;
        window.Howl = Howl1;
        window.Sound = Sound1;
    }
})();
/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */ (function() {
    'use strict';
    // Setup default properties.
    HowlerGlobal.prototype._pos = [
        0,
        0,
        0
    ];
    HowlerGlobal.prototype._orientation = [
        0,
        0,
        -1,
        0,
        1,
        0
    ];
    /** Global Methods **/ /***************************************************************************/ /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */ HowlerGlobal.prototype.stereo = function(pan) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Loop through all Howls and update their stereo panning.
        for(var i = self._howls.length - 1; i >= 0; i--)self._howls[i].stereo(pan);
        return self;
    };
    /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */ HowlerGlobal.prototype.pos = function(x, y, z) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== 'number' ? self._pos[1] : y;
        z = typeof z !== 'number' ? self._pos[2] : z;
        if (typeof x === 'number') {
            self._pos = [
                x,
                y,
                z
            ];
            if (typeof self.ctx.listener.positionX !== 'undefined') {
                self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
                self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
                self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
            } else self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
        } else return self._pos;
        return self;
    };
    /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */ HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Set the defaults for optional 'y' & 'z'.
        var or = self._orientation;
        y = typeof y !== 'number' ? or[1] : y;
        z = typeof z !== 'number' ? or[2] : z;
        xUp = typeof xUp !== 'number' ? or[3] : xUp;
        yUp = typeof yUp !== 'number' ? or[4] : yUp;
        zUp = typeof zUp !== 'number' ? or[5] : zUp;
        if (typeof x === 'number') {
            self._orientation = [
                x,
                y,
                z,
                xUp,
                yUp,
                zUp
            ];
            if (typeof self.ctx.listener.forwardX !== 'undefined') {
                self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
            } else self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
        } else return or;
        return self;
    };
    /** Group Methods **/ /***************************************************************************/ /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */ Howl.prototype.init = function(_super) {
        return function(o) {
            var self = this;
            // Setup user-defined default properties.
            self._orientation = o.orientation || [
                1,
                0,
                0
            ];
            self._stereo = o.stereo || null;
            self._pos = o.pos || null;
            self._pannerAttr = {
                coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
                coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
                coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
                distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
                maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
                panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
                refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
                rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
            };
            // Setup event listeners.
            self._onstereo = o.onstereo ? [
                {
                    fn: o.onstereo
                }
            ] : [];
            self._onpos = o.onpos ? [
                {
                    fn: o.onpos
                }
            ] : [];
            self._onorientation = o.onorientation ? [
                {
                    fn: o.onorientation
                }
            ] : [];
            // Complete initilization with howler.js core's init function.
            return _super.call(this, o);
        };
    }(Howl.prototype.init);
    /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */ Howl.prototype.stereo = function(pan, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'stereo',
                action: function() {
                    self.stereo(pan, id);
                }
            });
            return self;
        }
        // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
        var pannerType = typeof Howler.ctx.createStereoPanner === 'undefined' ? 'spatial' : 'stereo';
        // Setup the group's stereo panning if no ID is passed.
        if (typeof id === 'undefined') {
            // Return the group's stereo panning if no parameters are passed.
            if (typeof pan === 'number') {
                self._stereo = pan;
                self._pos = [
                    pan,
                    0,
                    0
                ];
            } else return self._stereo;
        }
        // Change the streo panning of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof pan === 'number') {
                    sound._stereo = pan;
                    sound._pos = [
                        pan,
                        0,
                        0
                    ];
                    if (sound._node) {
                        // If we are falling back, make sure the panningModel is equalpower.
                        sound._pannerAttr.panningModel = 'equalpower';
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner || !sound._panner.pan) setupPanner(sound, pannerType);
                        if (pannerType === 'spatial') {
                            if (typeof sound._panner.positionX !== 'undefined') {
                                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                            } else sound._panner.setPosition(pan, 0, 0);
                        } else sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
                    }
                    self._emit('stereo', sound._id);
                } else return sound._stereo;
            }
        }
        return self;
    };
    /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */ Howl.prototype.pos = function(x, y, z, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change position when capable.
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'pos',
                action: function() {
                    self.pos(x, y, z, id);
                }
            });
            return self;
        }
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== 'number' ? 0 : y;
        z = typeof z !== 'number' ? -0.5 : z;
        // Setup the group's spatial position if no ID is passed.
        if (typeof id === 'undefined') {
            // Return the group's spatial position if no parameters are passed.
            if (typeof x === 'number') self._pos = [
                x,
                y,
                z
            ];
            else return self._pos;
        }
        // Change the spatial position of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof x === 'number') {
                    sound._pos = [
                        x,
                        y,
                        z
                    ];
                    if (sound._node) {
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner || sound._panner.pan) setupPanner(sound, 'spatial');
                        if (typeof sound._panner.positionX !== 'undefined') {
                            sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                            sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                            sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
                        } else sound._panner.setPosition(x, y, z);
                    }
                    self._emit('pos', sound._id);
                } else return sound._pos;
            }
        }
        return self;
    };
    /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */ Howl.prototype.orientation = function(x, y, z, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'orientation',
                action: function() {
                    self.orientation(x, y, z, id);
                }
            });
            return self;
        }
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== 'number' ? self._orientation[1] : y;
        z = typeof z !== 'number' ? self._orientation[2] : z;
        // Setup the group's spatial orientation if no ID is passed.
        if (typeof id === 'undefined') {
            // Return the group's spatial orientation if no parameters are passed.
            if (typeof x === 'number') self._orientation = [
                x,
                y,
                z
            ];
            else return self._orientation;
        }
        // Change the spatial orientation of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof x === 'number') {
                    sound._orientation = [
                        x,
                        y,
                        z
                    ];
                    if (sound._node) {
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner) {
                            // Make sure we have a position to setup the node with.
                            if (!sound._pos) sound._pos = self._pos || [
                                0,
                                0,
                                -0.5
                            ];
                            setupPanner(sound, 'spatial');
                        }
                        if (typeof sound._panner.orientationX !== 'undefined') {
                            sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                            sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                            sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
                        } else sound._panner.setOrientation(x, y, z);
                    }
                    self._emit('orientation', sound._id);
                } else return sound._orientation;
            }
        }
        return self;
    };
    /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */ Howl.prototype.pannerAttr = function() {
        var self = this;
        var args = arguments;
        var o, id, sound;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // Determine the values based on arguments.
        if (args.length === 0) // Return the group's panner attribute values.
        return self._pannerAttr;
        else if (args.length === 1) {
            if (typeof args[0] === 'object') {
                o = args[0];
                // Set the grou's panner attribute values.
                if (typeof id === 'undefined') {
                    if (!o.pannerAttr) o.pannerAttr = {
                        coneInnerAngle: o.coneInnerAngle,
                        coneOuterAngle: o.coneOuterAngle,
                        coneOuterGain: o.coneOuterGain,
                        distanceModel: o.distanceModel,
                        maxDistance: o.maxDistance,
                        refDistance: o.refDistance,
                        rolloffFactor: o.rolloffFactor,
                        panningModel: o.panningModel
                    };
                    self._pannerAttr = {
                        coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                        coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                        coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                        distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
                        maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
                        refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
                        rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                        panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
                    };
                }
            } else {
                // Return this sound's panner attribute values.
                sound = self._soundById(parseInt(args[0], 10));
                return sound ? sound._pannerAttr : self._pannerAttr;
            }
        } else if (args.length === 2) {
            o = args[0];
            id = parseInt(args[1], 10);
        }
        // Update the values of the specified sounds.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            sound = self._soundById(ids[i]);
            if (sound) {
                // Merge the new values into the sound.
                var pa = sound._pannerAttr;
                pa = {
                    coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
                    coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
                    coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
                    distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
                    maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
                    refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
                    rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
                    panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
                };
                // Create a new panner node if one doesn't already exist.
                var panner = sound._panner;
                if (!panner) {
                    // Make sure we have a position to setup the node with.
                    if (!sound._pos) sound._pos = self._pos || [
                        0,
                        0,
                        -0.5
                    ];
                    // Create a new panner node.
                    setupPanner(sound, 'spatial');
                    panner = sound._panner;
                }
                // Update the panner values or create a new panner if none exists.
                panner.coneInnerAngle = pa.coneInnerAngle;
                panner.coneOuterAngle = pa.coneOuterAngle;
                panner.coneOuterGain = pa.coneOuterGain;
                panner.distanceModel = pa.distanceModel;
                panner.maxDistance = pa.maxDistance;
                panner.refDistance = pa.refDistance;
                panner.rolloffFactor = pa.rolloffFactor;
                panner.panningModel = pa.panningModel;
            }
        }
        return self;
    };
    /** Single Sound Methods **/ /***************************************************************************/ /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */ Sound.prototype.init = function(_super) {
        return function() {
            var self = this;
            var parent = self._parent;
            // Setup user-defined default properties.
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            // Complete initilization with howler.js core Sound's init function.
            _super.call(this);
            // If a stereo or position was specified, set it up.
            if (self._stereo) parent.stereo(self._stereo);
            else if (self._pos) parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
        };
    }(Sound.prototype.init);
    /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */ Sound.prototype.reset = function(_super) {
        return function() {
            var self = this;
            var parent = self._parent;
            // Reset all spatial plugin properties on this sound.
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            // If a stereo or position was specified, set it up.
            if (self._stereo) parent.stereo(self._stereo);
            else if (self._pos) parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
            else if (self._panner) {
                // Disconnect the panner.
                self._panner.disconnect(0);
                self._panner = undefined;
                parent._refreshBuffer(self);
            }
            // Complete resetting of the sound.
            return _super.call(this);
        };
    }(Sound.prototype.reset);
    /** Helper Methods **/ /***************************************************************************/ /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */ var setupPanner = function(sound, type) {
        type = type || 'spatial';
        // Create the new panner node.
        if (type === 'spatial') {
            sound._panner = Howler.ctx.createPanner();
            sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
            sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
            sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
            sound._panner.distanceModel = sound._pannerAttr.distanceModel;
            sound._panner.maxDistance = sound._pannerAttr.maxDistance;
            sound._panner.refDistance = sound._pannerAttr.refDistance;
            sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
            sound._panner.panningModel = sound._pannerAttr.panningModel;
            if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
            } else sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
            if (typeof sound._panner.orientationX !== 'undefined') {
                sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
                sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
                sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
            } else sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
        } else {
            sound._panner = Howler.ctx.createStereoPanner();
            sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
        }
        sound._panner.connect(sound._node);
        // Update the connections.
        if (!sound._paused) sound._parent.pause(sound._id, true).play(sound._id, true);
    };
})();

},{}],"jP67J":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("weapon_laser_009.46c04f50.wav") + "?" + Date.now();

},{}],"isjZo":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("weapon_laser_007.b0bdbbda.wav") + "?" + Date.now();

},{}],"8LpE4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("weapon_laser_008.520cfe73.wav") + "?" + Date.now();

},{}],"eCGap":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("explosion_small_003.6444fc3a.wav") + "?" + Date.now();

},{}],"2OxiU":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("explosion_small_006.bfa682f6.wav") + "?" + Date.now();

},{}],"4GA9W":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("explosion_small_011.46b77d59.wav") + "?" + Date.now();

},{}],"ew7Na":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("explosion_small_014.d2481655.wav") + "?" + Date.now();

},{}],"5qvSq":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("explosion_small_015.4c0c7c1a.wav") + "?" + Date.now();

},{}],"03Tbm":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("explosion_small_016.3474ec45.wav") + "?" + Date.now();

},{}],"46NuU":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("PowerOnSound1.9a0f6f05.mp3") + "?" + Date.now();

},{}],"9RfkQ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("gui_023.56914dfb.wav") + "?" + Date.now();

},{}],"7WSCw":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("gui_013.79e88f75.wav") + "?" + Date.now();

},{}],"9iBFT":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("gui_036.c924dfbc.wav") + "?" + Date.now();

},{}],"3wIt2":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("gui_020.4c9f7d9f.wav") + "?" + Date.now();

},{}],"ty9kX":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("gui_032.c59b5ff9.wav") + "?" + Date.now();

},{}],"4jgVq":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("gui_007.4f0af434.wav") + "?" + Date.now();

},{}],"2j5W2":[function(require,module,exports,__globalThis) {
'use strict';
var stringify = require("a472ccaa2f2351e9");
var parse = require("7ffa4249597bf32b");
var formats = require("454df9476704f887");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"a472ccaa2f2351e9":"flRhl","7ffa4249597bf32b":"lFcAo","454df9476704f887":"85SVc"}],"flRhl":[function(require,module,exports,__globalThis) {
'use strict';
var getSideChannel = require("6246bbb805756d41");
var utils = require("44263cc7b702ebf");
var formats = require("929f8531a94a537c");
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: 'indices',
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encodeDotInKeys: false,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'symbol' || typeof v === 'bigint';
};
var sentinel = {};
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag){
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) throw new RangeError('Cyclic object value');
            else findFlag = true; // Break while
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') step = 0;
    }
    if (typeof filter === 'function') obj = filter(prefix, obj);
    else if (obj instanceof Date) obj = serializeDate(obj);
    else if (generateArrayPrefix === 'comma' && isArray(obj)) obj = utils.maybeMap(obj, function(value) {
        if (value instanceof Date) return serializeDate(value);
        return value;
    });
    if (obj === null) {
        if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        obj = '';
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [
                formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))
            ];
        }
        return [
            formatter(prefix) + '=' + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === 'undefined') return values;
    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) obj = utils.maybeMap(obj, encoder);
        objKeys = [
            {
                value: obj.length > 0 ? obj.join(',') || null : void 0
            }
        ];
    } else if (isArray(filter)) objKeys = filter;
    else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, '%2E') : prefix;
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + '[]' : encodedPrefix;
    if (allowEmptyArrays && isArray(obj) && obj.length === 0) return adjustedPrefix + '[]';
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];
        if (skipNulls && value === null) continue;
        var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, '%2E') : key;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? '.' + encodedKey : '[' + encodedKey + ']');
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) return defaults;
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    if (typeof opts.encodeDotInKeys !== 'undefined' && typeof opts.encodeDotInKeys !== 'boolean') throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') throw new TypeError('Encoder has to be a function.');
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) throw new TypeError('Unknown format option provided.');
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) filter = opts.filter;
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
    else if ('indices' in opts) arrayFormat = opts.indices ? 'indices' : 'repeat';
    else arrayFormat = defaults.arrayFormat;
    if ('commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat: arrayFormat,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === 'boolean' ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== 'object' || obj === null) return '';
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === 'comma' && options.commaRoundTrip;
    if (!objKeys) objKeys = Object.keys(obj);
    if (options.sort) objKeys.sort(options.sort);
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) continue;
        pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';
    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
        prefix += 'utf8=%26%2310003%3B&';
        else // encodeURIComponent('✓')
        prefix += 'utf8=%E2%9C%93&';
    }
    return joined.length > 0 ? prefix + joined : '';
};

},{"6246bbb805756d41":"eaiEg","44263cc7b702ebf":"4Zvho","929f8531a94a537c":"85SVc"}],"eaiEg":[function(require,module,exports,__globalThis) {
'use strict';
var $TypeError = require("1d3f7a3f029b095e");
var inspect = require("9f4f5a92d8c6543");
var getSideChannelList = require("5a169a7b609983a5");
var getSideChannelMap = require("e26eec6007592cd");
var getSideChannelWeakMap = require("a282926cb8532787");
var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
/** @type {import('.')} */ module.exports = function getSideChannel() {
    /** @typedef {ReturnType<typeof getSideChannel>} Channel */ /** @type {Channel | undefined} */ var $channelData;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
        },
        'delete': function(key) {
            return !!$channelData && $channelData['delete'](key);
        },
        get: function(key) {
            return $channelData && $channelData.get(key);
        },
        has: function(key) {
            return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
            if (!$channelData) $channelData = makeChannel();
            $channelData.set(key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};

},{"1d3f7a3f029b095e":"izd0l","9f4f5a92d8c6543":"aklQB","5a169a7b609983a5":"cg5uH","e26eec6007592cd":"3M1ai","a282926cb8532787":"cJseI"}],"izd0l":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./type')} */ module.exports = TypeError;

},{}],"aklQB":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) return str;
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}
var utilInspect = require("faefcb1694f2ad90");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var quotes = {
    __proto__: null,
    'double': '"',
    single: "'"
};
var quoteREs = {
    __proto__: null,
    'double': /(["\\])/g,
    single: /(['\\])/g
};
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    if (has(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === 'undefined') return 'undefined';
    if (obj === null) return 'null';
    if (typeof obj === 'boolean') return obj ? 'true' : 'false';
    if (typeof obj === 'string') return inspectString(obj, opts);
    if (typeof obj === 'number') {
        if (obj === 0) return Infinity / obj > 0 ? '0' : '-0';
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') depth = 0;
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') return isArray(obj) ? '[Array]' : '[Object]';
    var indent = getIndent(opts, depth);
    if (typeof seen === 'undefined') seen = [];
    else if (indexOf(seen, obj) >= 0) return '[Circular]';
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) newOpts.quoteStyle = opts.quoteStyle;
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === 'function' && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++)s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        s += '>';
        if (obj.childNodes && obj.childNodes.length) s += '...';
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) return '[]';
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) return '[' + indentedJoin(xs, indent) + ']';
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        if (parts.length === 0) return '[' + String(obj) + ']';
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) return utilInspect(obj, {
            depth: maxDepth - depth
        });
        else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') return obj.inspect();
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) return weakCollectionOf('WeakMap');
    if (isWeakSet(obj)) return weakCollectionOf('WeakSet');
    if (isWeakRef(obj)) return weakCollectionOf('WeakRef');
    if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
    if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
    if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
    if (isString(obj)) return markBoxed(inspect(String(obj)));
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */ if (typeof window !== 'undefined' && obj === window) return '{ [object Window] }';
    if (typeof globalThis !== 'undefined' && obj === globalThis || typeof global !== 'undefined' && obj === global) return '{ [object globalThis] }';
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) return tag + '{}';
        if (indent) return tag + '{' + indentedJoin(ys, indent) + '}';
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}
function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
}
function isArray(obj) {
    return toStr(obj) === '[object Array]' && canTrustToString(obj);
}
function isDate(obj) {
    return toStr(obj) === '[object Date]' && canTrustToString(obj);
}
function isRegExp(obj) {
    return toStr(obj) === '[object RegExp]' && canTrustToString(obj);
}
function isError(obj) {
    return toStr(obj) === '[object Error]' && canTrustToString(obj);
}
function isString(obj) {
    return toStr(obj) === '[object String]' && canTrustToString(obj);
}
function isNumber(obj) {
    return toStr(obj) === '[object Number]' && canTrustToString(obj);
}
function isBoolean(obj) {
    return toStr(obj) === '[object Boolean]' && canTrustToString(obj);
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) return obj && typeof obj === 'object' && obj instanceof Symbol;
    if (typeof obj === 'symbol') return true;
    if (!obj || typeof obj !== 'object' || !symToString) return false;
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) return false;
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) return f.name;
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) return m[1];
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') return false;
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') return false;
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') return false;
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') return false;
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') return false;
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== 'object') return false;
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) return true;
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
    quoteRE.lastIndex = 0;
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) return '\\' + x;
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return 'Object(' + str + ')';
}
function weakCollectionOf(type) {
    return type + ' { ? }';
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], '\n') >= 0) return false;
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') baseIndent = '\t';
    else if (typeof opts.indent === 'number' && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), ' ');
    else return null;
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) return '';
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++)xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++)symMap['$' + syms[k]] = syms[k];
    }
    for(var key in obj){
        if (!has(obj, key)) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) continue; // eslint-disable-line no-restricted-syntax, no-continue
        else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        else xs.push(key + ': ' + inspect(obj[key], obj));
    }
    if (typeof gOPS === 'function') {
        for(var j = 0; j < syms.length; j++)if (isEnumerable.call(obj, syms[j])) xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
    }
    return xs;
}

},{"faefcb1694f2ad90":"eoH60"}],"eoH60":[function(require,module,exports,__globalThis) {
"use strict";

},{}],"cg5uH":[function(require,module,exports,__globalThis) {
'use strict';
var inspect = require("c82a24db877dbdb5");
var $TypeError = require("7492c0a54ac02a69");
/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list.
* By doing so, all the recently used nodes can be accessed relatively quickly.
*/ /** @type {import('./list.d.ts').listGetNode} */ // eslint-disable-next-line consistent-return
var listGetNode = function(list, key, isDelete) {
    /** @type {typeof list | NonNullable<(typeof list)['next']>} */ var prev = list;
    /** @type {(typeof list)['next']} */ var curr;
    // eslint-disable-next-line eqeqeq
    for(; (curr = prev.next) != null; prev = curr)if (curr.key === key) {
        prev.next = curr.next;
        if (!isDelete) {
            // eslint-disable-next-line no-extra-parens
            curr.next = /** @type {NonNullable<typeof list.next>} */ list.next;
            list.next = curr; // eslint-disable-line no-param-reassign
        }
        return curr;
    }
};
/** @type {import('./list.d.ts').listGet} */ var listGet = function(objects, key) {
    if (!objects) return void 0;
    var node = listGetNode(objects, key);
    return node && node.value;
};
/** @type {import('./list.d.ts').listSet} */ var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) node.value = value;
    else // Prepend the new node to the beginning of the list
    objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */ {
        key: key,
        next: objects.next,
        value: value
    };
};
/** @type {import('./list.d.ts').listHas} */ var listHas = function(objects, key) {
    if (!objects) return false;
    return !!listGetNode(objects, key);
};
/** @type {import('./list.d.ts').listDelete} */ // eslint-disable-next-line consistent-return
var listDelete = function(objects, key) {
    if (objects) return listGetNode(objects, key, true);
};
/** @type {import('.')} */ module.exports = function getSideChannelList() {
    /** @typedef {ReturnType<typeof getSideChannelList>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
        },
        'delete': function(key) {
            var root = $o && $o.next;
            var deletedNode = listDelete($o, key);
            if (deletedNode && root && root === deletedNode) $o = void 0;
            return !!deletedNode;
        },
        get: function(key) {
            return listGet($o, key);
        },
        has: function(key) {
            return listHas($o, key);
        },
        set: function(key, value) {
            if (!$o) // Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
            $o = {
                next: void 0
            };
            // eslint-disable-next-line no-extra-parens
            listSet(/** @type {NonNullable<typeof $o>} */ $o, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};

},{"c82a24db877dbdb5":"aklQB","7492c0a54ac02a69":"izd0l"}],"3M1ai":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("a1eef823705394c3");
var callBound = require("5e33adfb500d5ba2");
var inspect = require("2202d24f09ef0ac8");
var $TypeError = require("2772cd2df080356f");
var $Map = GetIntrinsic('%Map%', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */ var $mapGet = callBound('Map.prototype.get', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */ var $mapSet = callBound('Map.prototype.set', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapHas = callBound('Map.prototype.has', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapDelete = callBound('Map.prototype.delete', true);
/** @type {<K, V>(thisArg: Map<K, V>) => number} */ var $mapSize = callBound('Map.prototype.size', true);
/** @type {import('.')} */ module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
    /** @typedef {ReturnType<typeof getSideChannelMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {Map<K, V> | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
        },
        'delete': function(key) {
            if ($m) {
                var result = $mapDelete($m, key);
                if ($mapSize($m) === 0) $m = void 0;
                return result;
            }
            return false;
        },
        get: function(key) {
            if ($m) return $mapGet($m, key);
        },
        has: function(key) {
            if ($m) return $mapHas($m, key);
            return false;
        },
        set: function(key, value) {
            if (!$m) // @ts-expect-error TS can't handle narrowing a variable inside a closure
            $m = new $Map();
            $mapSet($m, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why TS is erroring here
    return channel;
};

},{"a1eef823705394c3":"dq2j0","5e33adfb500d5ba2":"bg5Sv","2202d24f09ef0ac8":"aklQB","2772cd2df080356f":"izd0l"}],"dq2j0":[function(require,module,exports,__globalThis) {
'use strict';
var undefined1;
var $Object = require("2664640474097f21");
var $Error = require("ff34c740859aa28e");
var $EvalError = require("349515b7ea9b6cef");
var $RangeError = require("9da01653b2dd9abf");
var $ReferenceError = require("68586abd6b0136da");
var $SyntaxError = require("662263fdbc077fc8");
var $TypeError = require("abdfc34e5f6bb86");
var $URIError = require("daca1f932429e03e");
var abs = require("6a52a0c0ffccac74");
var floor = require("d01cf04757c5320b");
var max = require("a2657a92cb7dae87");
var min = require("6367c0241be1f01");
var pow = require("9bee48b90a8c96d");
var round = require("b5cc049891156ba3");
var sign = require("8d956274d8c0407e");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = require("7f0abb73c570ef31");
var $defineProperty = require("3cbcb7341b0412ef");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require("1f00f712d594ccf")();
var getProto = require("89cf41d095fe5a0a");
var $ObjectGPO = require("a5e781ace21741c8");
var $ReflectGPO = require("db08b186beb7f382");
var $apply = require("213af9137f841281");
var $call = require("56d5af438508fcc0");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var errorProto = getProto(getProto(e));
    INTRINSICS['%Error.prototype%'] = errorProto;
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') value = getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = require("7c5e688e48cd07b0");
var hasOwn = require("af36d49b4b8c6c7c");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $TypeError('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $SyntaxError('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"2664640474097f21":"kIGCS","ff34c740859aa28e":"3yFkT","349515b7ea9b6cef":"j0agx","9da01653b2dd9abf":"16mIV","68586abd6b0136da":"gWp16","662263fdbc077fc8":"c6rW6","abdfc34e5f6bb86":"izd0l","daca1f932429e03e":"5ea2p","6a52a0c0ffccac74":"iGU7x","d01cf04757c5320b":"2UZdd","a2657a92cb7dae87":"awNT2","6367c0241be1f01":"futfa","9bee48b90a8c96d":"5PoPH","b5cc049891156ba3":"2Qg8z","8d956274d8c0407e":"aIf7v","7f0abb73c570ef31":"3RG4k","3cbcb7341b0412ef":"lLFQB","1f00f712d594ccf":"9Wdk5","89cf41d095fe5a0a":"j2rSW","a5e781ace21741c8":"kfqqq","db08b186beb7f382":"5EAiL","213af9137f841281":"6JWoY","56d5af438508fcc0":"6LNxJ","7c5e688e48cd07b0":"fptAP","af36d49b4b8c6c7c":"kzo7j"}],"kIGCS":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('.')} */ module.exports = Object;

},{}],"3yFkT":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('.')} */ module.exports = Error;

},{}],"j0agx":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./eval')} */ module.exports = EvalError;

},{}],"16mIV":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./range')} */ module.exports = RangeError;

},{}],"gWp16":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./ref')} */ module.exports = ReferenceError;

},{}],"c6rW6":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./syntax')} */ module.exports = SyntaxError;

},{}],"5ea2p":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./uri')} */ module.exports = URIError;

},{}],"iGU7x":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./abs')} */ module.exports = Math.abs;

},{}],"2UZdd":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./floor')} */ module.exports = Math.floor;

},{}],"awNT2":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./max')} */ module.exports = Math.max;

},{}],"futfa":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./min')} */ module.exports = Math.min;

},{}],"5PoPH":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./pow')} */ module.exports = Math.pow;

},{}],"2Qg8z":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./round')} */ module.exports = Math.round;

},{}],"aIf7v":[function(require,module,exports,__globalThis) {
'use strict';
var $isNaN = require("d292273fa9eecbef");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) return number;
    return number < 0 ? -1 : 1;
};

},{"d292273fa9eecbef":"f4quv"}],"f4quv":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};

},{}],"3RG4k":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('.')} */ var $gOPD = require("2065a078be813600");
if ($gOPD) try {
    $gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"2065a078be813600":"gSPq2"}],"gSPq2":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;

},{}],"lLFQB":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) try {
    $defineProperty({}, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = false;
}
module.exports = $defineProperty;

},{}],"9Wdk5":[function(require,module,exports,__globalThis) {
'use strict';
var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require("3fb25678c62d2fce");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return hasSymbolSham();
};

},{"3fb25678c62d2fce":"dtIdI"}],"dtIdI":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') return false;
    if (typeof Symbol.iterator === 'symbol') return true;
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') return false;
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') return false;
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = /** @type {PropertyDescriptor} */ Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"j2rSW":[function(require,module,exports,__globalThis) {
'use strict';
var reflectGetProto = require("ba0ea764912daf49");
var originalGetProto = require("1bd809a13f9b0f46");
var getDunderProto = require("fbec8086c64f7968");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') throw new TypeError('getProto: not an object');
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;

},{"ba0ea764912daf49":"5EAiL","1bd809a13f9b0f46":"kfqqq","fbec8086c64f7968":"5YxvX"}],"5EAiL":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;

},{}],"kfqqq":[function(require,module,exports,__globalThis) {
'use strict';
var $Object = require("23f06d8f004a91fb");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;

},{"23f06d8f004a91fb":"kIGCS"}],"5YxvX":[function(require,module,exports,__globalThis) {
'use strict';
var callBind = require("20202e6273970ec3");
var gOPD = require("6e9e415ed4ed192c");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') throw e;
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;

},{"20202e6273970ec3":"lGIDP","6e9e415ed4ed192c":"3RG4k"}],"lGIDP":[function(require,module,exports,__globalThis) {
'use strict';
var bind = require("d6d8aee3c61fa381");
var $TypeError = require("3ad70b4ee76fdc3");
var $call = require("79792e7530a25b0e");
var $actualApply = require("1883a23d55f655c3");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') throw new $TypeError('a function is required');
    return $actualApply(bind, $call, args);
};

},{"d6d8aee3c61fa381":"fptAP","3ad70b4ee76fdc3":"izd0l","79792e7530a25b0e":"6LNxJ","1883a23d55f655c3":"boX6a"}],"fptAP":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("12e173b4dbaee960");
module.exports = Function.prototype.bind || implementation;

},{"12e173b4dbaee960":"ci6fN"}],"ci6fN":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
    for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) str += joiner;
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) return result;
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs[i] = '$' + i;
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"6LNxJ":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;

},{}],"boX6a":[function(require,module,exports,__globalThis) {
'use strict';
var bind = require("ba0cb57b961776b");
var $apply = require("8002d8d4a5e40cd8");
var $call = require("dd5326344bf1485c");
var $reflectApply = require("ddbf3cfadf2f22c");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);

},{"ba0cb57b961776b":"fptAP","8002d8d4a5e40cd8":"6JWoY","dd5326344bf1485c":"6LNxJ","ddbf3cfadf2f22c":"bqjcZ"}],"6JWoY":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;

},{}],"bqjcZ":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;

},{}],"kzo7j":[function(require,module,exports,__globalThis) {
'use strict';
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = require("126cb75e62f8e17b");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);

},{"126cb75e62f8e17b":"fptAP"}],"bg5Sv":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("90205503fa989ea7");
var callBindBasic = require("79b99f4b8fc521d");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $indexOf = callBindBasic([
    GetIntrinsic('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) return callBindBasic(/** @type {const} */ [
        intrinsic
    ]);
    return intrinsic;
};

},{"90205503fa989ea7":"dq2j0","79b99f4b8fc521d":"lGIDP"}],"cJseI":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("13f8b3ed6c08f802");
var callBound = require("fcc2ce3a04e4916a");
var inspect = require("92adfc822fa342a4");
var getSideChannelMap = require("1290b6babf3b47b6");
var $TypeError = require("2293e69a0f659b70");
var $WeakMap = GetIntrinsic('%WeakMap%', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */ var $weakMapGet = callBound('WeakMap.prototype.get', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */ var $weakMapSet = callBound('WeakMap.prototype.set', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapHas = callBound('WeakMap.prototype.has', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapDelete = callBound('WeakMap.prototype.delete', true);
/** @type {import('.')} */ module.exports = $WeakMap ? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
    /** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {WeakMap<K & object, V> | undefined} */ var $wm;
    /** @type {Channel | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
        },
        'delete': function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) return $weakMapDelete($wm, key);
            } else if (getSideChannelMap) {
                if ($m) return $m['delete'](key);
            }
            return false;
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) return $weakMapGet($wm, key);
            }
            return $m && $m.get(key);
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) return $weakMapHas($wm, key);
            }
            return !!$m && $m.has(key);
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if (!$wm) $wm = new $WeakMap();
                $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
                if (!$m) $m = getSideChannelMap();
                // eslint-disable-next-line no-extra-parens
                /** @type {NonNullable<typeof $m>} */ $m.set(key, value);
            }
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
} : getSideChannelMap;

},{"13f8b3ed6c08f802":"dq2j0","fcc2ce3a04e4916a":"bg5Sv","92adfc822fa342a4":"aklQB","1290b6babf3b47b6":"3M1ai","2293e69a0f659b70":"izd0l"}],"4Zvho":[function(require,module,exports,__globalThis) {
'use strict';
var formats = require("7adf3674f81a2c87");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i)array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j)if (typeof obj[j] !== 'undefined') compacted.push(obj[j]);
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for(var i = 0; i < source.length; ++i)if (typeof source[i] !== 'undefined') obj[i] = source[i];
    return obj;
};
var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) return target;
    if (typeof source !== 'object') {
        if (isArray(target)) target.push(source);
        else if (target && typeof target === 'object') {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
        } else return [
            target,
            source
        ];
        return target;
    }
    if (!target || typeof target !== 'object') return [
        target
    ].concat(source);
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') target[i] = merge(targetItem, item, options);
                else target.push(item);
            } else target[i] = item;
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) acc[key] = merge(acc[key], value, options);
        else acc[key] = value;
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var limit = 1024;
/* eslint operator-linebreak: [2, "before"] */ var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) return str;
    var string = str;
    if (typeof str === 'symbol') string = Symbol.prototype.toString.call(str);
    else if (typeof str !== 'string') string = String(str);
    if (charset === 'iso-8859-1') return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
    });
    var out = '';
    for(var j = 0; j < string.length; j += limit){
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for(var i = 0; i < segment.length; ++i){
            var c = segment.charCodeAt(i);
            if (c === 0x2D // -
             || c === 0x2E // .
             || c === 0x5F // _
             || c === 0x7E // ~
             || c >= 0x30 && c <= 0x39 // 0-9
             || c >= 0x41 && c <= 0x5A // a-z
             || c >= 0x61 && c <= 0x7A // A-Z
             || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
            ) {
                arr[arr.length] = segment.charAt(i);
                continue;
            }
            if (c < 0x80) {
                arr[arr.length] = hexTable[c];
                continue;
            }
            if (c < 0x800) {
                arr[arr.length] = hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            if (c < 0xD800 || c >= 0xE000) {
                arr[arr.length] = hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            i += 1;
            c = 0x10000 + ((c & 0x3FF) << 10 | segment.charCodeAt(i) & 0x3FF);
            arr[arr.length] = hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
        }
        out += arr.join('');
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: 'o'
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') return false;
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
    return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1)mapped.push(fn(val[i]));
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{"7adf3674f81a2c87":"85SVc"}],"85SVc":[function(require,module,exports,__globalThis) {
'use strict';
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};
module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

},{}],"lFcAo":[function(require,module,exports,__globalThis) {
'use strict';
var utils = require("e76649c95dd0e736");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    duplicates: 'combine',
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictNullHandling: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) return val.split(',');
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
        __proto__: null
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    cleanStr = cleanStr.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i)if (parts[i].indexOf('utf8=') === 0) {
            if (parts[i] === charsetSentinel) charset = 'utf-8';
            else if (parts[i] === isoSentinel) charset = 'iso-8859-1';
            skipIndex = i;
            i = parts.length; // The eslint settings do not allow break;
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) continue;
        var part = parts[i];
        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, 'value');
            });
        }
        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') val = interpretNumericEntities(val);
        if (part.indexOf('[]=') > -1) val = isArray(val) ? [
            val
        ] : val;
        var existing = has.call(obj, key);
        if (existing && options.duplicates === 'combine') obj[key] = utils.combine(obj[key], val);
        else if (!existing || options.duplicates === 'last') obj[key] = val;
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === '[]' && options.parseArrays) obj = options.allowEmptyArrays && (leaf === '' || options.strictNullHandling && leaf === null) ? [] : [].concat(leaf);
        else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, '.') : cleanRoot;
            var index = parseInt(decodedRoot, 10);
            if (!options.parseArrays && decodedRoot === '') obj = {
                0: leaf
            };
            else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (decodedRoot !== '__proto__') obj[decodedRoot] = leaf;
        }
        leaf = obj;
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) return;
    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
    // The regex chunks
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    // Get the parent
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    // Stash the parent if it exists
    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) return;
        }
        keys.push(parent);
    }
    // Loop through children appending to the array until we hit depth
    var i = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) return;
        }
        keys.push(segment[1]);
    }
    // If there's a remainder, check strictDepth option for throw, else just add whatever is left
    if (segment) {
        if (options.strictDepth === true) throw new RangeError('Input depth exceeded depth option of ' + options.depth + ' and strictDepth is true');
        keys.push('[' + key.slice(segment.index) + ']');
    }
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) return defaults;
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    if (typeof opts.decodeDotInKeys !== 'undefined' && typeof opts.decodeDotInKeys !== 'boolean') throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
    if (opts.decoder !== null && typeof opts.decoder !== 'undefined' && typeof opts.decoder !== 'function') throw new TypeError('Decoder has to be a function.');
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
    var duplicates = typeof opts.duplicates === 'undefined' ? defaults.duplicates : opts.duplicates;
    if (duplicates !== 'combine' && duplicates !== 'first' && duplicates !== 'last') throw new TypeError('The duplicates option must be either combine, first, or last');
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === 'boolean' ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates: duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === 'boolean' ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === '' || str === null || typeof str === 'undefined') return options.plainObjects ? Object.create(null) : {};
    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) return obj;
    return utils.compact(obj);
};

},{"e76649c95dd0e736":"4Zvho"}],"24OPJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Protocol version.
 *
 * @public
 */ parcelHelpers.export(exports, "protocol", ()=>(0, _socketIoParser.protocol));
parcelHelpers.export(exports, "Fetch", ()=>(0, _engineIoClient.Fetch));
parcelHelpers.export(exports, "NodeXHR", ()=>(0, _engineIoClient.NodeXHR));
parcelHelpers.export(exports, "XHR", ()=>(0, _engineIoClient.XHR));
parcelHelpers.export(exports, "NodeWebSocket", ()=>(0, _engineIoClient.NodeWebSocket));
parcelHelpers.export(exports, "WebSocket", ()=>(0, _engineIoClient.WebSocket));
parcelHelpers.export(exports, "WebTransport", ()=>(0, _engineIoClient.WebTransport));
/**
 * Expose constructors for standalone build.
 *
 * @public
 */ parcelHelpers.export(exports, "Manager", ()=>(0, _managerJs.Manager));
parcelHelpers.export(exports, "Socket", ()=>(0, _socketJs.Socket));
parcelHelpers.export(exports, "io", ()=>lookup);
parcelHelpers.export(exports, "connect", ()=>lookup);
parcelHelpers.export(exports, "default", ()=>lookup);
var _urlJs = require("./url.js");
var _managerJs = require("./manager.js");
var _socketJs = require("./socket.js");
var _socketIoParser = require("socket.io-parser");
var _engineIoClient = require("engine.io-client");
/**
 * Managers cache.
 */ const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = (0, _urlJs.url)(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) io = new (0, _managerJs.Manager)(source, opts);
    else {
        if (!cache[id]) cache[id] = new (0, _managerJs.Manager)(source, opts);
        io = cache[id];
    }
    if (parsed.query && !opts.query) opts.query = parsed.queryKey;
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: (0, _managerJs.Manager),
    Socket: (0, _socketJs.Socket),
    io: lookup,
    connect: lookup
});

},{"./url.js":"3DhHP","./manager.js":"9SqfW","./socket.js":"5p2b8","socket.io-parser":"374iO","engine.io-client":"g33FB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3DhHP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */ parcelHelpers.export(exports, "url", ()=>url);
var _engineIoClient = require("engine.io-client");
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) uri = loc.protocol + uri;
            else uri = loc.host + uri;
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) uri = loc.protocol + "//" + uri;
            else uri = "https://" + uri;
        }
        // parse
        obj = (0, _engineIoClient.parse)(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) obj.port = "80";
        else if (/^(http|ws)s$/.test(obj.protocol)) obj.port = "443";
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}

},{"engine.io-client":"g33FB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g33FB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SocketWithoutUpgrade", ()=>(0, _socketJs.SocketWithoutUpgrade));
parcelHelpers.export(exports, "SocketWithUpgrade", ()=>(0, _socketJs.SocketWithUpgrade));
parcelHelpers.export(exports, "Transport", ()=>(0, _transportJs.Transport));
parcelHelpers.export(exports, "TransportError", ()=>(0, _transportJs.TransportError));
parcelHelpers.export(exports, "transports", ()=>(0, _indexJs.transports));
parcelHelpers.export(exports, "installTimerFunctions", ()=>(0, _utilJs.installTimerFunctions));
parcelHelpers.export(exports, "parse", ()=>(0, _parseuriJs.parse));
parcelHelpers.export(exports, "nextTick", ()=>(0, _globalsNodeJs.nextTick));
parcelHelpers.export(exports, "Fetch", ()=>(0, _pollingFetchJs.Fetch));
parcelHelpers.export(exports, "NodeXHR", ()=>(0, _pollingXhrNodeJs.XHR));
parcelHelpers.export(exports, "XHR", ()=>(0, _pollingXhrJs.XHR));
parcelHelpers.export(exports, "NodeWebSocket", ()=>(0, _websocketNodeJs.WS));
parcelHelpers.export(exports, "WebSocket", ()=>(0, _websocketJs.WS));
parcelHelpers.export(exports, "WebTransport", ()=>(0, _webtransportJs.WT));
parcelHelpers.export(exports, "Socket", ()=>(0, _socketJs.Socket));
parcelHelpers.export(exports, "protocol", ()=>protocol);
var _socketJs = require("./socket.js");
var _transportJs = require("./transport.js");
var _indexJs = require("./transports/index.js");
var _utilJs = require("./util.js");
var _parseuriJs = require("./contrib/parseuri.js");
var _globalsNodeJs = require("./globals.node.js");
var _pollingFetchJs = require("./transports/polling-fetch.js");
var _pollingXhrNodeJs = require("./transports/polling-xhr.node.js");
var _pollingXhrJs = require("./transports/polling-xhr.js");
var _websocketNodeJs = require("./transports/websocket.node.js");
var _websocketJs = require("./transports/websocket.js");
var _webtransportJs = require("./transports/webtransport.js");
const protocol = (0, _socketJs.Socket).protocol;

},{"./socket.js":"glETn","./transport.js":"9tBQf","./transports/index.js":"91wUX","./util.js":"kk7Cp","./contrib/parseuri.js":"5Y2kK","./globals.node.js":"6Aw5d","./transports/polling-fetch.js":"3mA2E","./transports/polling-xhr.node.js":"3Fuqh","./transports/polling-xhr.js":"3Fuqh","./transports/websocket.node.js":"8Q316","./transports/websocket.js":"8Q316","./transports/webtransport.js":"g53pT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"glETn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
 * successfully establishes the connection.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithoutUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithUpgrade
 * @see Socket
 */ parcelHelpers.export(exports, "SocketWithoutUpgrade", ()=>SocketWithoutUpgrade);
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see Socket
 */ parcelHelpers.export(exports, "SocketWithUpgrade", ()=>SocketWithUpgrade);
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * @example
 * import { Socket } from "engine.io-client";
 *
 * const socket = new Socket();
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see SocketWithUpgrade
 */ parcelHelpers.export(exports, "Socket", ()=>Socket);
var _indexJs = require("./transports/index.js");
var _utilJs = require("./util.js");
var _parseqsJs = require("./contrib/parseqs.js");
var _parseuriJs = require("./contrib/parseuri.js");
var _componentEmitter = require("@socket.io/component-emitter");
var _engineIoParser = require("engine.io-parser");
var _globalsNodeJs = require("./globals.node.js");
const withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
const OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
// script, so we create one single event listener here which will forward the event to the socket instances
addEventListener("offline", ()=>{
    OFFLINE_EVENT_LISTENERS.forEach((listener)=>listener());
}, false);
class SocketWithoutUpgrade extends (0, _componentEmitter.Emitter) {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */ constructor(uri, opts){
        super();
        this.binaryType = (0, _globalsNodeJs.defaultBinaryType);
        this.writeBuffer = [];
        this._prevBufferLen = 0;
        this._pingInterval = -1;
        this._pingTimeout = -1;
        this._maxPayload = -1;
        /**
         * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
         * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
         */ this._pingTimeoutTime = Infinity;
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            const parsedUri = (0, _parseuriJs.parse)(uri);
            opts.hostname = parsedUri.host;
            opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
            opts.port = parsedUri.port;
            if (parsedUri.query) opts.query = parsedUri.query;
        } else if (opts.host) opts.hostname = (0, _parseuriJs.parse)(opts.host).host;
        (0, _utilJs.installTimerFunctions)(this, opts);
        this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) // if no port is specified manually, use the protocol default
        opts.port = this.secure ? "443" : "80";
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = [];
        this._transportsByName = {};
        opts.transports.forEach((t)=>{
            const transportName = t.prototype.name;
            this.transports.push(transportName);
            this._transportsByName[transportName] = t;
        });
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: false
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") this.opts.query = (0, _parseqsJs.decode)(this.opts.query);
        if (withEventListeners) {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this._beforeunloadEventListener = ()=>{
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this._offlineEventListener = ()=>{
                    this._onClose("transport close", {
                        description: "network connection lost"
                    });
                };
                OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
            }
        }
        if (this.opts.withCredentials) this._cookieJar = (0, _globalsNodeJs.createCookieJar)();
        this._open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */ createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = (0, _engineIoParser.protocol);
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id) query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[name]);
        return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */ _open() {
        if (this.transports.length === 0) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(()=>{
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        const transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const transport = this.createTransport(transportName);
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */ setTransport(transport) {
        if (this.transport) this.transport.removeAllListeners();
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason)=>this._onClose("transport close", reason));
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */ onOpen() {
        this.readyState = "open";
        SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */ _onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch(packet.type){
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this._sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    this._resetPingTimeout();
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this._onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */ onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this._pingInterval = data.pingInterval;
        this._pingTimeout = data.pingTimeout;
        this._maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState) return;
        this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */ _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const delay = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + delay;
        this._pingTimeoutTimer = this.setTimeoutFn(()=>{
            this._onClose("ping timeout");
        }, delay);
        if (this.opts.autoUnref) this._pingTimeoutTimer.unref();
    }
    /**
     * Called on `drain` event
     *
     * @private
     */ _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this._prevBufferLen = 0;
        if (0 === this.writeBuffer.length) this.emitReserved("drain");
        else this.flush();
    }
    /**
     * Flush write buffers.
     *
     * @private
     */ flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const packets = this._getWritablePackets();
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this._prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */ _getWritablePackets() {
        const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) return this.writeBuffer;
        let payloadSize = 1; // first packet type
        for(let i = 0; i < this.writeBuffer.length; i++){
            const data = this.writeBuffer[i].data;
            if (data) payloadSize += (0, _utilJs.byteLength)(data);
            if (i > 0 && payloadSize > this._maxPayload) return this.writeBuffer.slice(0, i);
            payloadSize += 2; // separator + packet type
        }
        return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */ /* private */ _hasPingExpired() {
        if (!this._pingTimeoutTime) return true;
        const hasExpired = Date.now() > this._pingTimeoutTime;
        if (hasExpired) {
            this._pingTimeoutTime = 0;
            (0, _globalsNodeJs.nextTick)(()=>{
                this._onClose("ping timeout");
            }, this.setTimeoutFn);
        }
        return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */ write(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */ send(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */ _sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) return;
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn) this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */ close() {
        const close = ()=>{
            this._onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = ()=>{
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = ()=>{
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) this.once("drain", ()=>{
                if (this.upgrading) waitForUpgrade();
                else close();
            });
            else if (this.upgrading) waitForUpgrade();
            else close();
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */ _onError(err) {
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
            this.transports.shift();
            return this._open();
        }
        this.emitReserved("error", err);
        this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */ _onClose(reason, description) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this._pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (withEventListeners) {
                if (this._beforeunloadEventListener) removeEventListener("beforeunload", this._beforeunloadEventListener, false);
                if (this._offlineEventListener) {
                    const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
                    if (i !== -1) OFFLINE_EVENT_LISTENERS.splice(i, 1);
                }
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this._prevBufferLen = 0;
        }
    }
}
SocketWithoutUpgrade.protocol = (0, _engineIoParser.protocol);
class SocketWithUpgrade extends SocketWithoutUpgrade {
    constructor(){
        super(...arguments);
        this._upgrades = [];
    }
    onOpen() {
        super.onOpen();
        if ("open" === this.readyState && this.opts.upgrade) for(let i = 0; i < this._upgrades.length; i++)this._probe(this._upgrades[i]);
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */ _probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        const onTransportOpen = ()=>{
            if (failed) return;
            transport.send([
                {
                    type: "ping",
                    data: "probe"
                }
            ]);
            transport.once("packet", (msg)=>{
                if (failed) return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport) return;
                    SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
                    this.transport.pause(()=>{
                        if (failed) return;
                        if ("closed" === this.readyState) return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([
                            {
                                type: "upgrade"
                            }
                        ]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                } else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed) return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err)=>{
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) freezeTransport();
        }
        // Remove all listeners on the transport and on self
        const cleanup = ()=>{
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") // favor WebTransport
        this.setTimeoutFn(()=>{
            if (!failed) transport.open();
        }, 200);
        else transport.open();
    }
    onHandshake(data) {
        this._upgrades = this._filterUpgrades(data.upgrades);
        super.onHandshake(data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */ _filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        for(let i = 0; i < upgrades.length; i++)if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
        return filteredUpgrades;
    }
}
class Socket extends SocketWithUpgrade {
    constructor(uri, opts = {}){
        const o = typeof uri === "object" ? uri : opts;
        if (!o.transports || o.transports && typeof o.transports[0] === "string") o.transports = (o.transports || [
            "polling",
            "websocket",
            "webtransport"
        ]).map((transportName)=>(0, _indexJs.transports)[transportName]).filter((t)=>!!t);
        super(uri, o);
    }
}

},{"./transports/index.js":"91wUX","./util.js":"kk7Cp","./contrib/parseqs.js":"1zNF1","./contrib/parseuri.js":"5Y2kK","@socket.io/component-emitter":"9MXWi","engine.io-parser":"kVTy2","./globals.node.js":"6Aw5d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"91wUX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transports", ()=>transports);
var _pollingXhrNodeJs = require("./polling-xhr.node.js");
var _websocketNodeJs = require("./websocket.node.js");
var _webtransportJs = require("./webtransport.js");
const transports = {
    websocket: (0, _websocketNodeJs.WS),
    webtransport: (0, _webtransportJs.WT),
    polling: (0, _pollingXhrNodeJs.XHR)
};

},{"./polling-xhr.node.js":"3Fuqh","./websocket.node.js":"8Q316","./webtransport.js":"g53pT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3Fuqh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseXHR", ()=>BaseXHR);
parcelHelpers.export(exports, "Request", ()=>Request);
/**
 * HTTP long-polling based on the built-in `XMLHttpRequest` object.
 *
 * Usage: browser
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */ parcelHelpers.export(exports, "XHR", ()=>XHR);
var _pollingJs = require("./polling.js");
var _componentEmitter = require("@socket.io/component-emitter");
var _utilJs = require("../util.js");
var _globalsNodeJs = require("../globals.node.js");
var _hasCorsJs = require("../contrib/has-cors.js");
function empty() {}
class BaseXHR extends (0, _pollingJs.Polling) {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */ constructor(opts){
        super(opts);
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) port = isSSL ? "443" : "80";
            this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
        }
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */ doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context)=>{
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */ doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context)=>{
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
class Request extends (0, _componentEmitter.Emitter) {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */ constructor(createRequest, uri, opts){
        super();
        this.createRequest = createRequest;
        (0, _utilJs.installTimerFunctions)(this, opts);
        this._opts = opts;
        this._method = opts.method || "GET";
        this._uri = uri;
        this._data = undefined !== opts.data ? opts.data : null;
        this._create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */ _create() {
        var _a;
        const opts = (0, _utilJs.pick)(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this._opts.xd;
        const xhr = this._xhr = this.createRequest(opts);
        try {
            xhr.open(this._method, this._uri, true);
            try {
                if (this._opts.extraHeaders) {
                    // @ts-ignore
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for(let i in this._opts.extraHeaders)if (this._opts.extraHeaders.hasOwnProperty(i)) xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
                }
            } catch (e) {}
            if ("POST" === this._method) try {
                xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (e) {}
            try {
                xhr.setRequestHeader("Accept", "*/*");
            } catch (e) {}
            (_a = this._opts.cookieJar) === null || _a === void 0 || _a.addCookies(xhr);
            // ie6 check
            if ("withCredentials" in xhr) xhr.withCredentials = this._opts.withCredentials;
            if (this._opts.requestTimeout) xhr.timeout = this._opts.requestTimeout;
            xhr.onreadystatechange = ()=>{
                var _a;
                if (xhr.readyState === 3) (_a = this._opts.cookieJar) === null || _a === void 0 || _a.parseCookies(// @ts-ignore
                xhr.getResponseHeader("set-cookie"));
                if (4 !== xhr.readyState) return;
                if (200 === xhr.status || 1223 === xhr.status) this._onLoad();
                else // make sure the `error` event handler that's user-set
                // does not throw in the same tick and gets caught here
                this.setTimeoutFn(()=>{
                    this._onError(typeof xhr.status === "number" ? xhr.status : 0);
                }, 0);
            };
            xhr.send(this._data);
        } catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(()=>{
                this._onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this._index = Request.requestsCount++;
            Request.requests[this._index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @private
     */ _onError(err) {
        this.emitReserved("error", err, this._xhr);
        this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */ _cleanup(fromError) {
        if ("undefined" === typeof this._xhr || null === this._xhr) return;
        this._xhr.onreadystatechange = empty;
        if (fromError) try {
            this._xhr.abort();
        } catch (e) {}
        if (typeof document !== "undefined") delete Request.requests[this._index];
        this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */ _onLoad() {
        const data = this._xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this._cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @package
     */ abort() {
        this._cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */ if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") // @ts-ignore
    attachEvent("onunload", unloadHandler);
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in (0, _globalsNodeJs.globalThisShim) ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for(let i in Request.requests)if (Request.requests.hasOwnProperty(i)) Request.requests[i].abort();
}
const hasXHR2 = function() {
    const xhr = newRequest({
        xdomain: false
    });
    return xhr && xhr.responseType !== null;
}();
class XHR extends BaseXHR {
    constructor(opts){
        super(opts);
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    request(opts = {}) {
        Object.assign(opts, {
            xd: this.xd
        }, this.opts);
        return new Request(newRequest, this.uri(), opts);
    }
}
function newRequest(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || (0, _hasCorsJs.hasCORS))) return new XMLHttpRequest();
    } catch (e) {}
    if (!xdomain) try {
        return new (0, _globalsNodeJs.globalThisShim)[[
            "Active"
        ].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
}

},{"./polling.js":"ePbRc","@socket.io/component-emitter":"9MXWi","../util.js":"kk7Cp","../globals.node.js":"6Aw5d","../contrib/has-cors.js":"40IkM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ePbRc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Polling", ()=>Polling);
var _transportJs = require("../transport.js");
var _utilJs = require("../util.js");
var _engineIoParser = require("engine.io-parser");
class Polling extends (0, _transportJs.Transport) {
    constructor(){
        super(...arguments);
        this._polling = false;
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */ doOpen() {
        this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */ pause(onPause) {
        this.readyState = "pausing";
        const pause = ()=>{
            this.readyState = "paused";
            onPause();
        };
        if (this._polling || !this.writable) {
            let total = 0;
            if (this._polling) {
                total++;
                this.once("pollComplete", function() {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function() {
                    --total || pause();
                });
            }
        } else pause();
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */ _poll() {
        this._polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */ onData(data) {
        const callback = (packet)=>{
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") this.onOpen();
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({
                    description: "transport closed by the server"
                });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        (0, _engineIoParser.decodePayload)(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this._polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) this._poll();
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */ doClose() {
        const close = ()=>{
            this.write([
                {
                    type: "close"
                }
            ]);
        };
        if ("open" === this.readyState) close();
        else // in case we're trying to close while
        // handshaking is in progress (GH-164)
        this.once("open", close);
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */ write(packets) {
        this.writable = false;
        (0, _engineIoParser.encodePayload)(packets, (data)=>{
            this.doWrite(data, ()=>{
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */ uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        // cache busting is forced
        if (false !== this.opts.timestampRequests) query[this.opts.timestampParam] = (0, _utilJs.randomString)();
        if (!this.supportsBinary && !query.sid) query.b64 = 1;
        return this.createUri(schema, query);
    }
}

},{"../transport.js":"9tBQf","../util.js":"kk7Cp","engine.io-parser":"kVTy2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9tBQf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TransportError", ()=>TransportError);
parcelHelpers.export(exports, "Transport", ()=>Transport);
var _engineIoParser = require("engine.io-parser");
var _componentEmitter = require("@socket.io/component-emitter");
var _utilJs = require("./util.js");
var _parseqsJs = require("./contrib/parseqs.js");
class TransportError extends Error {
    constructor(reason, description, context){
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends (0, _componentEmitter.Emitter) {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */ constructor(opts){
        super();
        this.writable = false;
        (0, _utilJs.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */ onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */ open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */ close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */ send(packets) {
        if (this.readyState === "open") this.write(packets);
    }
    /**
     * Called upon open
     *
     * @protected
     */ onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */ onData(data) {
        const packet = (0, _engineIoParser.decodePacket)(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */ onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */ onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */ pause(onPause) {}
    createUri(schema, query = {}) {
        return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    }
    _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
        if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) return ":" + this.opts.port;
        else return "";
    }
    _query(query) {
        const encodedQuery = (0, _parseqsJs.encode)(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
    }
}

},{"engine.io-parser":"kVTy2","@socket.io/component-emitter":"9MXWi","./util.js":"kk7Cp","./contrib/parseqs.js":"1zNF1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kVTy2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPacketEncoderStream", ()=>createPacketEncoderStream);
parcelHelpers.export(exports, "createPacketDecoderStream", ()=>createPacketDecoderStream);
parcelHelpers.export(exports, "protocol", ()=>protocol);
parcelHelpers.export(exports, "encodePacket", ()=>(0, _encodePacketJs.encodePacket));
parcelHelpers.export(exports, "encodePayload", ()=>encodePayload);
parcelHelpers.export(exports, "decodePacket", ()=>(0, _decodePacketJs.decodePacket));
parcelHelpers.export(exports, "decodePayload", ()=>decodePayload);
var _encodePacketJs = require("./encodePacket.js");
var _decodePacketJs = require("./decodePacket.js");
var _commonsJs = require("./commons.js");
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback)=>{
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i)=>{
        // force base64 encoding for binary packets
        (0, _encodePacketJs.encodePacket)(packet, false, (encodedPacket)=>{
            encodedPackets[i] = encodedPacket;
            if (++count === length) callback(encodedPackets.join(SEPARATOR));
        });
    });
};
const decodePayload = (encodedPayload, binaryType)=>{
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for(let i = 0; i < encodedPackets.length; i++){
        const decodedPacket = (0, _decodePacketJs.decodePacket)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") break;
    }
    return packets;
};
function createPacketEncoderStream() {
    return new TransformStream({
        transform (packet, controller) {
            (0, _encodePacketJs.encodePacketToBinary)(packet, (encodedPacket)=>{
                const payloadLength = encodedPacket.length;
                let header;
                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                } else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                } else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                }
                // first bit indicates whether the payload is plain text (0) or binary (1)
                if (packet.data && typeof packet.data !== "string") header[0] |= 0x80;
                controller.enqueue(header);
                controller.enqueue(encodedPacket);
            });
        }
    });
}
let TEXT_DECODER;
function totalLength(chunks) {
    return chunks.reduce((acc, chunk)=>acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
    if (chunks[0].length === size) return chunks.shift();
    const buffer = new Uint8Array(size);
    let j = 0;
    for(let i = 0; i < size; i++){
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
        }
    }
    if (chunks.length && j < chunks[0].length) chunks[0] = chunks[0].slice(j);
    return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) TEXT_DECODER = new TextDecoder();
    const chunks = [];
    let state = 0 /* State.READ_HEADER */ ;
    let expectedLength = -1;
    let isBinary = false;
    return new TransformStream({
        transform (chunk, controller) {
            chunks.push(chunk);
            while(true){
                if (state === 0 /* State.READ_HEADER */ ) {
                    if (totalLength(chunks) < 1) break;
                    const header = concatChunks(chunks, 1);
                    isBinary = (header[0] & 0x80) === 0x80;
                    expectedLength = header[0] & 0x7f;
                    if (expectedLength < 126) state = 3 /* State.READ_PAYLOAD */ ;
                    else if (expectedLength === 126) state = 1 /* State.READ_EXTENDED_LENGTH_16 */ ;
                    else state = 2 /* State.READ_EXTENDED_LENGTH_64 */ ;
                } else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */ ) {
                    if (totalLength(chunks) < 2) break;
                    const headerArray = concatChunks(chunks, 2);
                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                    state = 3 /* State.READ_PAYLOAD */ ;
                } else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */ ) {
                    if (totalLength(chunks) < 8) break;
                    const headerArray = concatChunks(chunks, 8);
                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                    const n = view.getUint32(0);
                    if (n > Math.pow(2, 21) - 1) {
                        // the maximum safe integer in JavaScript is 2^53 - 1
                        controller.enqueue((0, _commonsJs.ERROR_PACKET));
                        break;
                    }
                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                    state = 3 /* State.READ_PAYLOAD */ ;
                } else {
                    if (totalLength(chunks) < expectedLength) break;
                    const data = concatChunks(chunks, expectedLength);
                    controller.enqueue((0, _decodePacketJs.decodePacket)(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                    state = 0 /* State.READ_HEADER */ ;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                    controller.enqueue((0, _commonsJs.ERROR_PACKET));
                    break;
                }
            }
        }
    });
}
const protocol = 4;

},{"./encodePacket.js":"4VOJI","./decodePacket.js":"howvf","./commons.js":"9Mqqu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4VOJI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encodePacketToBinary", ()=>encodePacketToBinary);
parcelHelpers.export(exports, "encodePacket", ()=>encodePacket);
var _commonsJs = require("./commons.js");
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback)=>{
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(data, callback);
    } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(new Blob([
            data
        ]), callback);
    }
    // plain string
    return callback((0, _commonsJs.PACKET_TYPES)[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback)=>{
    const fileReader = new FileReader();
    fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
};
function toArray(data) {
    if (data instanceof Uint8Array) return data;
    else if (data instanceof ArrayBuffer) return new Uint8Array(data);
    else return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (withNativeBlob && packet.data instanceof Blob) return packet.data.arrayBuffer().then(toArray).then(callback);
    else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) return callback(toArray(packet.data));
    encodePacket(packet, false, (encoded)=>{
        if (!TEXT_ENCODER) TEXT_ENCODER = new TextEncoder();
        callback(TEXT_ENCODER.encode(encoded));
    });
}

},{"./commons.js":"9Mqqu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9Mqqu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PACKET_TYPES", ()=>PACKET_TYPES);
parcelHelpers.export(exports, "PACKET_TYPES_REVERSE", ()=>PACKET_TYPES_REVERSE);
parcelHelpers.export(exports, "ERROR_PACKET", ()=>ERROR_PACKET);
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key)=>{
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = {
    type: "error",
    data: "parser error"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"howvf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodePacket", ()=>decodePacket);
var _commonsJs = require("./commons.js");
var _base64ArraybufferJs = require("./contrib/base64-arraybuffer.js");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType)=>{
    if (typeof encodedPacket !== "string") return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
    };
    const type = encodedPacket.charAt(0);
    if (type === "b") return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
    const packetType = (0, _commonsJs.PACKET_TYPES_REVERSE)[type];
    if (!packetType) return 0, _commonsJs.ERROR_PACKET;
    return encodedPacket.length > 1 ? {
        type: (0, _commonsJs.PACKET_TYPES_REVERSE)[type],
        data: encodedPacket.substring(1)
    } : {
        type: (0, _commonsJs.PACKET_TYPES_REVERSE)[type]
    };
};
const decodeBase64Packet = (data, binaryType)=>{
    if (withNativeArrayBuffer) {
        const decoded = (0, _base64ArraybufferJs.decode)(data);
        return mapBinary(decoded, binaryType);
    } else return {
        base64: true,
        data
    }; // fallback for old browsers
};
const mapBinary = (data, binaryType)=>{
    switch(binaryType){
        case "blob":
            if (data instanceof Blob) // from WebSocket + binaryType "blob"
            return data;
            else // from HTTP long-polling or WebTransport
            return new Blob([
                data
            ]);
        case "arraybuffer":
        default:
            if (data instanceof ArrayBuffer) // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
            return data;
            else // from WebTransport (Uint8Array)
            return data.buffer;
    }
};

},{"./commons.js":"9Mqqu","./contrib/base64-arraybuffer.js":"gpSS7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gpSS7":[function(require,module,exports,__globalThis) {
// imported from https://github.com/socketio/base64-arraybuffer
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "decode", ()=>decode);
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for(let i = 0; i < chars.length; i++)lookup[chars.charCodeAt(i)] = i;
const encode = (arraybuffer)=>{
    let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for(i = 0; i < len; i += 3){
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + '=';
    else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + '==';
    return base64;
};
const decode = (base64)=>{
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') bufferLength--;
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for(i = 0; i < len; i += 4){
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9MXWi":[function(require,module,exports,__globalThis) {
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Emitter", ()=>Emitter);
function Emitter(obj) {
    if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */ function mixin(obj) {
    for(var key in Emitter.prototype)obj[key] = Emitter.prototype[key];
    return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.once = function(event, fn) {
    function on() {
        this.off(event, on);
        fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    // all
    if (0 == arguments.length) {
        this._callbacks = {};
        return this;
    }
    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;
    // remove all handlers
    if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
    }
    // remove specific handler
    var cb;
    for(var i = 0; i < callbacks.length; i++){
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
        }
    }
    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) delete this._callbacks['$' + event];
    return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */ Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1), callbacks = this._callbacks['$' + event];
    for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    if (callbacks) {
        callbacks = callbacks.slice(0);
        for(var i = 0, len = callbacks.length; i < len; ++i)callbacks[i].apply(this, args);
    }
    return this;
};
// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */ Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */ Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kk7Cp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pick", ()=>pick);
parcelHelpers.export(exports, "installTimerFunctions", ()=>installTimerFunctions);
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
parcelHelpers.export(exports, "byteLength", ()=>byteLength);
/**
 * Generates a random 8-characters string.
 */ parcelHelpers.export(exports, "randomString", ()=>randomString);
var _globalsNodeJs = require("./globals.node.js");
function pick(obj, ...attr) {
    return attr.reduce((acc, k)=>{
        if (obj.hasOwnProperty(k)) acc[k] = obj[k];
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = (0, _globalsNodeJs.globalThisShim).setTimeout;
const NATIVE_CLEAR_TIMEOUT = (0, _globalsNodeJs.globalThisShim).clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind((0, _globalsNodeJs.globalThisShim));
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind((0, _globalsNodeJs.globalThisShim));
    } else {
        obj.setTimeoutFn = (0, _globalsNodeJs.globalThisShim).setTimeout.bind((0, _globalsNodeJs.globalThisShim));
        obj.clearTimeoutFn = (0, _globalsNodeJs.globalThisShim).clearTimeout.bind((0, _globalsNodeJs.globalThisShim));
    }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
    if (typeof obj === "string") return utf8Length(obj);
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
    let c = 0, length = 0;
    for(let i = 0, l = str.length; i < l; i++){
        c = str.charCodeAt(i);
        if (c < 0x80) length += 1;
        else if (c < 0x800) length += 2;
        else if (c < 0xd800 || c >= 0xe000) length += 3;
        else {
            i++;
            length += 4;
        }
    }
    return length;
}
function randomString() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}

},{"./globals.node.js":"6Aw5d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6Aw5d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "globalThisShim", ()=>globalThisShim);
parcelHelpers.export(exports, "defaultBinaryType", ()=>defaultBinaryType);
parcelHelpers.export(exports, "createCookieJar", ()=>createCookieJar);
const nextTick = (()=>{
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) return (cb)=>Promise.resolve().then(cb);
    else return (cb, setTimeoutFn)=>setTimeoutFn(cb, 0);
})();
const globalThisShim = (()=>{
    if (typeof self !== "undefined") return self;
    else if (typeof window !== "undefined") return window;
    else return Function("return this")();
})();
const defaultBinaryType = "arraybuffer";
function createCookieJar() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1zNF1":[function(require,module,exports,__globalThis) {
// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encode", ()=>encode);
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */ parcelHelpers.export(exports, "decode", ()=>decode);
function encode(obj) {
    let str = '';
    for(let i in obj)if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
    return str;
}
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for(let i = 0, l = pairs.length; i < l; i++){
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"40IkM":[function(require,module,exports,__globalThis) {
// imported from https://github.com/component/has-cors
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasCORS", ()=>hasCORS);
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
// if XMLHttp support is disabled in IE then it will throw
// when trying to create
}
const hasCORS = value;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8Q316":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseWS", ()=>BaseWS);
/**
 * WebSocket transport based on the built-in `WebSocket` object.
 *
 * Usage: browser, Node.js (since v21), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * @see https://caniuse.com/mdn-api_websocket
 * @see https://nodejs.org/api/globals.html#websocket
 */ parcelHelpers.export(exports, "WS", ()=>WS);
var _transportJs = require("../transport.js");
var _utilJs = require("../util.js");
var _engineIoParser = require("engine.io-parser");
var _globalsNodeJs = require("../globals.node.js");
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class BaseWS extends (0, _transportJs.Transport) {
    get name() {
        return "websocket";
    }
    doOpen() {
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative ? {} : (0, _utilJs.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) opts.headers = this.opts.extraHeaders;
        try {
            this.ws = this.createSocket(uri, protocols, opts);
        } catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */ addEventListeners() {
        this.ws.onopen = ()=>{
            if (this.opts.autoUnref) this.ws._socket.unref();
            this.onOpen();
        };
        this.ws.onclose = (closeEvent)=>this.onClose({
                description: "websocket connection closed",
                context: closeEvent
            });
        this.ws.onmessage = (ev)=>this.onData(ev.data);
        this.ws.onerror = (e)=>this.onError("websocket error", e);
    }
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0, _engineIoParser.encodePacket)(packet, this.supportsBinary, (data)=>{
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    this.doWrite(packet, data);
                } catch (e) {}
                if (lastPacket) // fake drain
                // defer to next tick to allow Socket to clear writeBuffer
                (0, _globalsNodeJs.nextTick)(()=>{
                    this.writable = true;
                    this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.onerror = ()=>{};
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */ uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        // append timestamp to URI
        if (this.opts.timestampRequests) query[this.opts.timestampParam] = (0, _utilJs.randomString)();
        // communicate binary support capabilities
        if (!this.supportsBinary) query.b64 = 1;
        return this.createUri(schema, query);
    }
}
const WebSocketCtor = (0, _globalsNodeJs.globalThisShim).WebSocket || (0, _globalsNodeJs.globalThisShim).MozWebSocket;
class WS extends BaseWS {
    createSocket(uri, protocols, opts) {
        return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
    }
    doWrite(_packet, data) {
        this.ws.send(data);
    }
}

},{"../transport.js":"9tBQf","../util.js":"kk7Cp","engine.io-parser":"kVTy2","../globals.node.js":"6Aw5d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g53pT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * WebTransport transport based on the built-in `WebTransport` object.
 *
 * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
 * @see https://caniuse.com/webtransport
 */ parcelHelpers.export(exports, "WT", ()=>WT);
var _transportJs = require("../transport.js");
var _globalsNodeJs = require("../globals.node.js");
var _engineIoParser = require("engine.io-parser");
class WT extends (0, _transportJs.Transport) {
    get name() {
        return "webtransport";
    }
    doOpen() {
        try {
            // @ts-ignore
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        } catch (err) {
            return this.emitReserved("error", err);
        }
        this._transport.closed.then(()=>{
            this.onClose();
        }).catch((err)=>{
            this.onError("webtransport error", err);
        });
        // note: we could have used async/await, but that would require some additional polyfills
        this._transport.ready.then(()=>{
            this._transport.createBidirectionalStream().then((stream)=>{
                const decoderStream = (0, _engineIoParser.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                const reader = stream.readable.pipeThrough(decoderStream).getReader();
                const encoderStream = (0, _engineIoParser.createPacketEncoderStream)();
                encoderStream.readable.pipeTo(stream.writable);
                this._writer = encoderStream.writable.getWriter();
                const read = ()=>{
                    reader.read().then(({ done, value })=>{
                        if (done) return;
                        this.onPacket(value);
                        read();
                    }).catch((err)=>{});
                };
                read();
                const packet = {
                    type: "open"
                };
                if (this.query.sid) packet.data = `{"sid":"${this.query.sid}"}`;
                this._writer.write(packet).then(()=>this.onOpen());
            });
        });
    }
    write(packets) {
        this.writable = false;
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            this._writer.write(packet).then(()=>{
                if (lastPacket) (0, _globalsNodeJs.nextTick)(()=>{
                    this.writable = true;
                    this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        var _a;
        (_a = this._transport) === null || _a === void 0 || _a.close();
    }
}

},{"../transport.js":"9tBQf","../globals.node.js":"6Aw5d","engine.io-parser":"kVTy2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Y2kK":[function(require,module,exports,__globalThis) {
// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parse", ()=>parse);
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor'
];
function parse(str) {
    if (str.length > 8000) throw "URI too long";
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    let m = re.exec(str || ''), uri = {}, i = 14;
    while(i--)uri[parts[i]] = m[i] || '';
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) names.splice(0, 1);
    if (path.slice(-1) == '/') names.splice(names.length - 1, 1);
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) data[$1] = $2;
    });
    return data;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3mA2E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * HTTP long-polling based on the built-in `fetch()` method.
 *
 * Usage: browser, Node.js (since v18), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @see https://caniuse.com/fetch
 * @see https://nodejs.org/api/globals.html#fetch
 */ parcelHelpers.export(exports, "Fetch", ()=>Fetch);
var _pollingJs = require("./polling.js");
class Fetch extends (0, _pollingJs.Polling) {
    doPoll() {
        this._fetch().then((res)=>{
            if (!res.ok) return this.onError("fetch read error", res.status, res);
            res.text().then((data)=>this.onData(data));
        }).catch((err)=>{
            this.onError("fetch read error", err);
        });
    }
    doWrite(data, callback) {
        this._fetch(data).then((res)=>{
            if (!res.ok) return this.onError("fetch write error", res.status, res);
            callback();
        }).catch((err)=>{
            this.onError("fetch write error", err);
        });
    }
    _fetch(data) {
        var _a;
        const isPost = data !== undefined;
        const headers = new Headers(this.opts.extraHeaders);
        if (isPost) headers.set("content-type", "text/plain;charset=UTF-8");
        (_a = this.socket._cookieJar) === null || _a === void 0 || _a.appendCookies(headers);
        return fetch(this.uri(), {
            method: isPost ? "POST" : "GET",
            body: isPost ? data : null,
            headers,
            credentials: this.opts.withCredentials ? "include" : "omit"
        }).then((res)=>{
            var _a;
            // @ts-ignore getSetCookie() was added in Node.js v19.7.0
            (_a = this.socket._cookieJar) === null || _a === void 0 || _a.parseCookies(res.headers.getSetCookie());
            return res;
        });
    }
}

},{"./polling.js":"ePbRc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9SqfW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Manager", ()=>Manager);
var _engineIoClient = require("engine.io-client");
var _socketJs = require("./socket.js");
var _socketIoParser = require("socket.io-parser");
var _onJs = require("./on.js");
var _backo2Js = require("./contrib/backo2.js");
var _componentEmitter = require("@socket.io/component-emitter");
class Manager extends (0, _componentEmitter.Emitter) {
    constructor(uri, opts){
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        (0, _engineIoClient.installTimerFunctions)(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new (0, _backo2Js.Backoff)({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || _socketIoParser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect) this.open();
    }
    reconnection(v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        if (!v) this.skipReconnect = true;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined) return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */ maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */ open(fn) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new (0, _engineIoClient.Socket)(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = (0, _onJs.on)(socket, "open", function() {
            self.onopen();
            fn && fn();
        });
        const onError = (err)=>{
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) fn(err);
            else // Only do this if there is no fn to handle the error
            this.maybeReconnectOnOpen();
        };
        // emit `error`
        const errorSub = (0, _onJs.on)(socket, "error", onError);
        if (false !== this._timeout) {
            const timeout = this._timeout;
            // set timer
            const timer = this.setTimeoutFn(()=>{
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
            }, timeout);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(()=>{
                this.clearTimeoutFn(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */ connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */ onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push((0, _onJs.on)(socket, "ping", this.onping.bind(this)), (0, _onJs.on)(socket, "data", this.ondata.bind(this)), (0, _onJs.on)(socket, "error", this.onerror.bind(this)), (0, _onJs.on)(socket, "close", this.onclose.bind(this)), // @ts-ignore
        (0, _onJs.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */ onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */ ondata(data) {
        try {
            this.decoder.add(data);
        } catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */ ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        (0, _engineIoClient.nextTick)(()=>{
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */ onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */ socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new (0, _socketJs.Socket)(this, nsp, opts);
            this.nsps[nsp] = socket;
        } else if (this._autoConnect && !socket.active) socket.connect();
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */ _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps){
            const socket = this.nsps[nsp];
            if (socket.active) return;
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */ _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for(let i = 0; i < encodedPackets.length; i++)this.engine.write(encodedPackets[i], packet.options);
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */ cleanup() {
        this.subs.forEach((subDestroy)=>subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */ _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */ disconnect() {
        return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */ onclose(reason, description) {
        var _a;
        this.cleanup();
        (_a = this.engine) === null || _a === void 0 || _a.close();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) this.reconnect();
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */ reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        } else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(()=>{
                if (self.skipReconnect) return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect) return;
                self.open((err)=>{
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    } else self.onreconnect();
                });
            }, delay);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(()=>{
                this.clearTimeoutFn(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */ onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}

},{"engine.io-client":"g33FB","./socket.js":"5p2b8","socket.io-parser":"374iO","./on.js":"8KEhl","./contrib/backo2.js":"4h5CX","@socket.io/component-emitter":"9MXWi","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5p2b8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */ parcelHelpers.export(exports, "Socket", ()=>Socket);
var _socketIoParser = require("socket.io-parser");
var _onJs = require("./on.js");
var _componentEmitter = require("@socket.io/component-emitter");
/**
 * Internal events.
 * These events can't be emitted by the user.
 */ const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
});
class Socket extends (0, _componentEmitter.Emitter) {
    /**
     * `Socket` constructor.
     */ constructor(io, nsp, opts){
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */ this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */ this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */ this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */ this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */ this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */ this._queueSeq = 0;
        this.ids = 0;
        /**
         * A map containing acknowledgement handlers.
         *
         * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
         *
         * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
         * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
         * - `const value = await socket.emitWithAck("test")`
         *
         * From those that don't:
         *
         * - `socket.emit("test", (value) => { ... });`
         *
         * In the first case, the handlers will be called with an error when:
         *
         * - the timeout is reached
         * - the socket gets disconnected
         *
         * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
         * an acknowledgement from the server.
         *
         * @private
         */ this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) this.auth = opts.auth;
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect) this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */ get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */ subEvents() {
        if (this.subs) return;
        const io = this.io;
        this.subs = [
            (0, _onJs.on)(io, "open", this.onopen.bind(this)),
            (0, _onJs.on)(io, "packet", this.onpacket.bind(this)),
            (0, _onJs.on)(io, "error", this.onerror.bind(this)),
            (0, _onJs.on)(io, "close", this.onclose.bind(this))
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */ get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */ connect() {
        if (this.connected) return this;
        this.subEvents();
        if (!this.io["_reconnecting"]) this.io.open(); // ensure open
        if ("open" === this.io._readyState) this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */ open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */ send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */ emit(ev, ...args) {
        var _a, _b, _c;
        if (RESERVED_EVENTS.hasOwnProperty(ev)) throw new Error('"' + ev.toString() + '" is a reserved event name');
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: (0, _socketIoParser.PacketType).EVENT,
            data: args
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
        const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
        const discardPacket = this.flags.volatile && !isTransportWritable;
        if (discardPacket) ;
        else if (isConnected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        } else this.sendBuffer.push(packet);
        this.flags = {};
        return this;
    }
    /**
     * @private
     */ _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(()=>{
            delete this.acks[id];
            for(let i = 0; i < this.sendBuffer.length; i++)if (this.sendBuffer[i].id === id) this.sendBuffer.splice(i, 1);
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args)=>{
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */ emitWithAck(ev, ...args) {
        return new Promise((resolve, reject)=>{
            const fn = (arg1, arg2)=>{
                return arg1 ? reject(arg1) : resolve(arg2);
            };
            fn.withError = true;
            args.push(fn);
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */ _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") ack = args.pop();
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({
                fromQueue: true
            }, this.flags)
        };
        args.push((err, ...responseArgs)=>{
            if (packet !== this._queue[0]) // the packet has already been acknowledged
            return;
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (ack) ack(err);
                }
            } else {
                this._queue.shift();
                if (ack) ack(null, ...responseArgs);
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */ _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) return;
        const packet = this._queue[0];
        if (packet.pending && !force) return;
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */ packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */ onopen() {
        if (typeof this.auth == "function") this.auth((data)=>{
            this._sendConnectPacket(data);
        });
        else this._sendConnectPacket(this.auth);
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */ _sendConnectPacket(data) {
        this.packet({
            type: (0, _socketIoParser.PacketType).CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, data) : data
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */ onerror(err) {
        if (!this.connected) this.emitReserved("connect_error", err);
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */ onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */ _clearAcks() {
        Object.keys(this.acks).forEach((id)=>{
            const isBuffered = this.sendBuffer.some((packet)=>String(packet.id) === id);
            if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                const ack = this.acks[id];
                delete this.acks[id];
                if (ack.withError) ack.call(this, new Error("socket has been disconnected"));
            }
        });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */ onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace) return;
        switch(packet.type){
            case (0, _socketIoParser.PacketType).CONNECT:
                if (packet.data && packet.data.sid) this.onconnect(packet.data.sid, packet.data.pid);
                else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case (0, _socketIoParser.PacketType).EVENT:
            case (0, _socketIoParser.PacketType).BINARY_EVENT:
                this.onevent(packet);
                break;
            case (0, _socketIoParser.PacketType).ACK:
            case (0, _socketIoParser.PacketType).BINARY_ACK:
                this.onack(packet);
                break;
            case (0, _socketIoParser.PacketType).DISCONNECT:
                this.ondisconnect();
                break;
            case (0, _socketIoParser.PacketType).CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */ onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) args.push(this.ack(packet.id));
        if (this.connected) this.emitEvent(args);
        else this.receiveBuffer.push(Object.freeze(args));
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners)listener.apply(this, args);
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") this._lastOffset = args[args.length - 1];
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */ ack(id) {
        const self = this;
        let sent = false;
        return function(...args) {
            // prevent double callbacks
            if (sent) return;
            sent = true;
            self.packet({
                type: (0, _socketIoParser.PacketType).ACK,
                id: id,
                data: args
            });
        };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */ onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") return;
        delete this.acks[packet.id];
        // @ts-ignore FIXME ack is incorrectly inferred as 'never'
        if (ack.withError) packet.data.unshift(null);
        // @ts-ignore
        ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */ onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */ emitBuffered() {
        this.receiveBuffer.forEach((args)=>this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet)=>{
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */ ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */ destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy)=>subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */ disconnect() {
        if (this.connected) this.packet({
            type: (0, _socketIoParser.PacketType).DISCONNECT
        });
        // remove socket from pool
        this.destroy();
        if (this.connected) // fire events
        this.onclose("io client disconnect");
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */ close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */ compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */ get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */ timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */ onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */ prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */ offAny(listener) {
        if (!this._anyListeners) return this;
        if (listener) {
            const listeners = this._anyListeners;
            for(let i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
            }
        } else this._anyListeners = [];
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */ listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */ onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */ prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */ offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) return this;
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for(let i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
            }
        } else this._anyOutgoingListeners = [];
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */ listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */ notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners)listener.apply(this, packet.data);
        }
    }
}

},{"socket.io-parser":"374iO","./on.js":"8KEhl","@socket.io/component-emitter":"9MXWi","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"374iO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "protocol", ()=>protocol);
parcelHelpers.export(exports, "PacketType", ()=>PacketType);
/**
 * A socket.io Encoder instance
 */ parcelHelpers.export(exports, "Encoder", ()=>Encoder);
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */ parcelHelpers.export(exports, "Decoder", ()=>Decoder);
var _componentEmitter = require("@socket.io/component-emitter");
var _binaryJs = require("./binary.js");
var _isBinaryJs = require("./is-binary.js");
/**
 * These strings must not be used as event names, as they have a special meaning.
 */ const RESERVED_EVENTS = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
];
const protocol = 5;
var PacketType;
(function(PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */ constructor(replacer){
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */ encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if ((0, _isBinaryJs.hasBinary)(obj)) return this.encodeAsBinary({
                type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
                nsp: obj.nsp,
                data: obj.data,
                id: obj.id
            });
        }
        return [
            this.encodeAsString(obj)
        ];
    }
    /**
     * Encode packet as string.
     */ encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) str += obj.attachments + "-";
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) str += obj.nsp + ",";
        // immediately followed by the id
        if (null != obj.id) str += obj.id;
        // json data
        if (null != obj.data) str += JSON.stringify(obj.data, this.replacer);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */ encodeAsBinary(obj) {
        const deconstruction = (0, _binaryJs.deconstructPacket)(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
class Decoder extends (0, _componentEmitter.Emitter) {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */ constructor(reviver){
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */ add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) super.emitReserved("decoded", packet);
            } else // non-binary full packet
            super.emitReserved("decoded", packet);
        } else if ((0, _isBinaryJs.isBinary)(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        } else throw new Error("Unknown type: " + obj);
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */ decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === undefined) throw new Error("unknown packet type " + p.type);
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while(str.charAt(++i) !== "-" && i != str.length);
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") throw new Error("Illegal attachments");
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if ("," === c) break;
                if (i === str.length) break;
            }
            p.nsp = str.substring(start, i);
        } else p.nsp = "/";
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length) break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) p.data = payload;
            else throw new Error("invalid payload");
        }
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        } catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch(type){
            case PacketType.CONNECT:
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */ destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */ class BinaryReconstructor {
    constructor(packet){
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */ takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = (0, _binaryJs.reconstructPacket)(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */ finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

},{"@socket.io/component-emitter":"9MXWi","./binary.js":"5Ac0P","./is-binary.js":"2QViU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Ac0P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */ parcelHelpers.export(exports, "deconstructPacket", ()=>deconstructPacket);
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */ parcelHelpers.export(exports, "reconstructPacket", ()=>reconstructPacket);
var _isBinaryJs = require("./is-binary.js");
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
        packet: pack,
        buffers: buffers
    };
}
function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if ((0, _isBinaryJs.isBinary)(data)) {
        const placeholder = {
            _placeholder: true,
            num: buffers.length
        };
        buffers.push(data);
        return placeholder;
    } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for(let i = 0; i < data.length; i++)newData[i] = _deconstructPacket(data[i], buffers);
        return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for(const key in data)if (Object.prototype.hasOwnProperty.call(data, key)) newData[key] = _deconstructPacket(data[key], buffers);
        return newData;
    }
    return data;
}
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
        if (isIndexValid) return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        else throw new Error("illegal attachments");
    } else if (Array.isArray(data)) for(let i = 0; i < data.length; i++)data[i] = _reconstructPacket(data[i], buffers);
    else if (typeof data === "object") {
        for(const key in data)if (Object.prototype.hasOwnProperty.call(data, key)) data[key] = _reconstructPacket(data[key], buffers);
    }
    return data;
}

},{"./is-binary.js":"2QViU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2QViU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */ parcelHelpers.export(exports, "isBinary", ()=>isBinary);
parcelHelpers.export(exports, "hasBinary", ()=>hasBinary);
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") return false;
    if (Array.isArray(obj)) {
        for(let i = 0, l = obj.length; i < l; i++){
            if (hasBinary(obj[i])) return true;
        }
        return false;
    }
    if (isBinary(obj)) return true;
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) return hasBinary(obj.toJSON(), true);
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8KEhl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "on", ()=>on);
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4h5CX":[function(require,module,exports,__globalThis) {
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Backoff", ()=>Backoff);
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */ Backoff.prototype.duration = function() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */ Backoff.prototype.reset = function() {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */ Backoff.prototype.setMin = function(min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */ Backoff.prototype.setMax = function(max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */ Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lWANB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const CONFIG = {
    development: {
        SOCKET_URL: "http://localhost:3000"
    },
    production: {
        SOCKET_URL: "https://hitcore.app"
    }
};
//Important Learning!!:
//This allows us to have different ip addresses for dev and production builds
// Had to install "cross-env" module in the dev to allow the command to work in windows
//You set this variable in the package.json run scripts
exports.default = CONFIG["development"];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fwvO9":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("hitpoints_core.6a4775a0.riv") + "?" + Date.now();

},{}]},["gP97P","EhQIl"], "EhQIl", "parcelRequire1f53", "./", "/")

//# sourceMappingURL=game.1c945341.js.map
