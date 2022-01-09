'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bd589efd4fa5ac54ef3987eabe3d28a9",
"favicon.ico": "2547697f06c29ad290f6377aecaf5b16",
"index.html": "47b5166c3de812289a51dd73357021f2",
"/": "47b5166c3de812289a51dd73357021f2",
"main.dart.js": "754a4365dc9818fdd1e68920dbcb0ebd",
"README.md": "aea8579a18494e0fdfc22de4ee27ea0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a2e9bc0c40ca6785ec80bef7d132e037",
".git/config": "005f89551113501da518333e17eab99b",
".git/objects/61/0a1c562101ae19aec8ea7e8c2a9112d5433dec": "b0136d81a31d739e8ced118f20c5e888",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/159c0deba6ba1113fb9b88b8bab166b604538e": "6807d954fdf846fd13b822ef8d20aeaf",
".git/objects/58/9bf8fc30096167adb2db9cd567e398a8da66e2": "e2d00b0cb1750a11dfe375446597efa6",
".git/objects/0b/35ed63a5173d0d761cf4cf0d154f88bfa5b06a": "f56d7b2c89f9e604977762724b952018",
".git/objects/33/f1cb612a566a264bd32efa68cc04c414ead075": "caa431bf4f1da5a3eba88bce362ff870",
".git/objects/a3/c9e31c53a47165da85b744f6785caad2e2c1c3": "186326852f24d5efd03646e3041fd539",
".git/objects/b5/65dde22487c9094b5537bfeddab1201125c059": "8549301307e5ad18bfe11940c912941b",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/d0/120e1f2f67966a950e94fb9da600c7c88bd4a5": "51ed6dc8e1694fbb8d138aa640b576a0",
".git/objects/da/ff9912da4fb69f4c6ea720eea0e39703bcb5f4": "a900ba650f331f4dc52e6d3affae2269",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/b5ccb10a45537e96501f98b0271845686be957": "a0b551989288f9b2a1a511cf0d06a39f",
".git/objects/fc/3764c4b3f4e23ff3bc8fb16e09e5d160aa6d41": "8ad07fdb8e70ccfd9f9fa1a07cd9ead7",
".git/objects/20/b52ed6d3cf752379137249f1db5450eff51c55": "051edb6bd9fbbc754a28382d8b00edb0",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/8d61de6e927d15a2f3fa6535bf20106ba0343a": "6732199c56c71d3eb6daec80d4d4e951",
".git/objects/7c/4c0b935f0b8267bd588fc566a694db37f56e1d": "e015b528f076f8952f57e570ed959e14",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/17/31179218fb5e2871b8082deb2cb2b68e57a0a4": "a33a8a60f20f2484e7d260ebf8a0d0d5",
".git/objects/17/81674ac1b5a298dbc425c31f622345d087e861": "56cdf2a5ca4500fc579b3f738f38c72a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/75/66dd08bd8a8a8b264cec9f0532f69af39b6b92": "0c4ef38ee7532cd9dcdb406a73e4173e",
".git/objects/2f/7e3ab7511acc78ffebdd96a92b419ca8e4553f": "80b0060780301f644d173da6b35aadbb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/00/e92bb79a8aaa5f5a1413aae64ccb6527c3def9": "c513a7a615e29385b33edc4af3f163d6",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/54/2e6325b4946c8b21188b1b1332aceb1f990e14": "7b3374cfe292ebb948ec514fa3163f23",
".git/objects/5e/4307dd1c9a61b5eef2143d4c97d6ebe3cd58ba": "b5585dbb86a91a7aa398823ffaecc890",
".git/objects/5b/912dc8351a119b13f77c91d03f40d20c6dfe95": "a0de0beb5e5ed62f712f009dc749eb70",
".git/objects/6d/94a69e62882fed6c2680d7bb5affb3e0a46ed7": "01a7d83e4135af3fde8de43b86c0f165",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/90/db6aedcfc959d93955564262c129c19dd081c0": "12c261fcbf909da9b3d9882058fc20bf",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/d3/7ece774a21afc8e41ce2fe9f0be8cdb14fd9ba": "f847ae3b964035e818a488f62603a428",
".git/objects/d5/66b0e952e8d2a42615cb86390d5ade7ed19349": "3a42984de59268d57ca84fff80fb2632",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/7c312247c86d7fc91c6dc0e2c51abfaa03c1c2": "332f644d213bdd9477b2eccc3e9a2956",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/51e5aeea499989c51d5b25b9ecf04b1aef2c18": "e57a81a30e502f2d55021c388ab9c2aa",
".git/objects/cc/1ba44da0b0b4d1c283391bc3042e587eff6bfc": "4e2f66a2e10d7f3599e0c26534925a11",
".git/objects/f8/27cc63714dbad3ca80067e33dc415c345766e3": "b510f931e610a6fdd9eb24074c597cb1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/cc6193511fe95fe58fd482fe9b8c07087dcb27": "8ec8530bc6cd0f64f4e219d72ee91538",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/f48953adfd0e0b482347aaf85dc341aca56622": "f5e9929bd5b732a0230d8e41479c75ab",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8d/f6b6768f4432bace88534860e73ee9c10d4643": "aef589868aa6db9116ff383c48619c99",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/1c/fb33ae8e1ed29e4475f3931bfad64075cc22c7": "7c1a27ee0269712def4c877804c7d404",
".git/objects/1c/43dc6393f90248125845222f3780f18b1d2db4": "30435ce608151a2186398978887fe2e8",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/8b/aa5742c60dcd5b5965093e7fc77358cd880422": "c49d64dcf45a95edf2111c9deebb163a",
".git/objects/8b/75b4bf6a074bfaff9236dd8ec2c9de81869c15": "11a4cc48900009c4dae663719c9493e5",
".git/objects/8b/4bb4f6aec0897da2277e4ce5053b96fe5af106": "f5e6ad71254a4dd9baf8864181bc4749",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1575c1d18599d060a9a826276c384a84",
".git/logs/refs/heads/main": "fc0a64b63b0975932447e3d402438d96",
".git/logs/refs/remotes/origin/main": "0f670ab77f67ccdeaa90c9682ce79d56",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e25e0cb6519bcd27a70cd113e76c5204",
".git/refs/remotes/origin/main": "e25e0cb6519bcd27a70cd113e76c5204",
".git/index": "e4e6b6430f8673ffe6b8409875ea50b7",
".git/COMMIT_EDITMSG": "26283d457fd47cf26036a7bf5aa7fe63",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "57eb49872a771e29031179d4493a55af",
"assets/NOTICES": "73aeb2bf4c53ae8b09ed02436f27e756",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/level-up.png": "35703cd97bef06d6bc0c85465af74907",
"assets/assets/images/esport.jpeg": "ce687d1fc60f2aa8bb4ebc19cb711cf6",
"assets/assets/images/formation.jpg": "bfb2ec5a5433d80b098e16f905a91b78",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
