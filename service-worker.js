"use strict";var precacheConfig=[["/new-tab-daily-theme/index.html","106f6fa833714ca8639fcf2fdb019adb"],["/new-tab-daily-theme/static/css/main.5df98c17.css","7834490e15a748b846d5211849557f4d"],["/new-tab-daily-theme/static/media/Lato-Black.21c4d25c.woff","21c4d25c75a50d8871360343a8cab85d"],["/new-tab-daily-theme/static/media/Lato-Black.77d35374.ttf","77d353744697c77955f9bacc7f3ed90a"],["/new-tab-daily-theme/static/media/Lato-Black.9ab28490.woff2","9ab28490b471a4ecb5b009a8cf1e8ee1"],["/new-tab-daily-theme/static/media/Lato-Black.cb6fe25e.svg","cb6fe25ec47ffbaef682b71b1b133b8a"],["/new-tab-daily-theme/static/media/Lato-Black.f21ec1ef.eot","f21ec1ef673d97424fa24c6569c61e2f"],["/new-tab-daily-theme/static/media/Lato-BlackItalic.16d065a7.eot","16d065a79427b54476fdb5b93e6412a2"],["/new-tab-daily-theme/static/media/Lato-BlackItalic.3a9f8a8c.woff2","3a9f8a8c8cc8facb4e0a83a0dea7329b"],["/new-tab-daily-theme/static/media/Lato-BlackItalic.5fc797bf.svg","5fc797bf364b753dbb597806348a2fac"],["/new-tab-daily-theme/static/media/Lato-BlackItalic.6c522f09.ttf","6c522f09efc8b83271666585f9fc6bf0"],["/new-tab-daily-theme/static/media/Lato-BlackItalic.eb70fa8a.woff","eb70fa8a58ab4cf49c42f84f23afcc8f"],["/new-tab-daily-theme/static/media/Lato-Bold.44dfe8cc.ttf","44dfe8cc676882243911a3197a50169e"],["/new-tab-daily-theme/static/media/Lato-Bold.5dfc529d.woff","5dfc529dfa53af18cf8db0ac408b3c19"],["/new-tab-daily-theme/static/media/Lato-Bold.a47d8f9c.eot","a47d8f9cf715b23d1ed1da4054b56f5f"],["/new-tab-daily-theme/static/media/Lato-Bold.cfc7a0ef.woff2","cfc7a0efcf638de6ab09d0524a6c6758"],["/new-tab-daily-theme/static/media/Lato-Bold.e05bae7c.svg","e05bae7c149974995f444c70be1c0aac"],["/new-tab-daily-theme/static/media/Lato-BoldItalic.104d6a88.woff2","104d6a885096c90bfb643259a643d829"],["/new-tab-daily-theme/static/media/Lato-BoldItalic.15518f50.eot","15518f502f7f1a993f83e94c09acc976"],["/new-tab-daily-theme/static/media/Lato-BoldItalic.1ba4767e.ttf","1ba4767ee37aab7e8d34fc339c3538cc"],["/new-tab-daily-theme/static/media/Lato-BoldItalic.4a4cd2e7.svg","4a4cd2e7626ff79b2719e3221d7f2f46"],["/new-tab-daily-theme/static/media/Lato-BoldItalic.5a5f0723.woff","5a5f072318a76b880d5076eeaf1e7417"],["/new-tab-daily-theme/static/media/Lato-Hairline.9353e4f9.woff2","9353e4f9cd72c87482497e661578957a"],["/new-tab-daily-theme/static/media/Lato-Hairline.a0126eff.woff","a0126eff0d671dd2898abe3593ea879f"],["/new-tab-daily-theme/static/media/Lato-Hairline.cc02ace7.eot","cc02ace78557f1308c9382f9ce81b80d"],["/new-tab-daily-theme/static/media/Lato-Hairline.db15ac79.ttf","db15ac7981b2d2897d1a3c22892b5a51"],["/new-tab-daily-theme/static/media/Lato-Hairline.e5d453c9.svg","e5d453c9f92af2d3ad810b9507a213c0"],["/new-tab-daily-theme/static/media/Lato-HairlineItalic.51e3f958.woff","51e3f9585f4f66bee1ad9c5b488b46ca"],["/new-tab-daily-theme/static/media/Lato-HairlineItalic.8f30b438.svg","8f30b43840d0cadafe1347ec570458a0"],["/new-tab-daily-theme/static/media/Lato-HairlineItalic.a567f4a8.ttf","a567f4a8e101cb600004e09526a1a170"],["/new-tab-daily-theme/static/media/Lato-HairlineItalic.d1b4f2b6.woff2","d1b4f2b60c46b18d634524c24a20aa7e"],["/new-tab-daily-theme/static/media/Lato-HairlineItalic.f5bafa9a.eot","f5bafa9ae1e00250dd15255820777e83"],["/new-tab-daily-theme/static/media/Lato-Italic.1ffe5066.svg","1ffe506636db6daac79dafb1100efe8d"],["/new-tab-daily-theme/static/media/Lato-Italic.3ecfbc65.woff","3ecfbc65f009551edc7e58dd35a8a2ec"],["/new-tab-daily-theme/static/media/Lato-Italic.56c4cb26.ttf","56c4cb26fd6a48b9c0ebcc07b376ee38"],["/new-tab-daily-theme/static/media/Lato-Italic.af5a576d.eot","af5a576da8a3d664ac832355065cb8bd"],["/new-tab-daily-theme/static/media/Lato-Italic.b441b790.woff2","b441b7902bd4c1e6092e35ed1d287e56"],["/new-tab-daily-theme/static/media/Lato-Light.5b761f2d.ttf","5b761f2d1e4259ea6ac7ab3ebf7f3c49"],["/new-tab-daily-theme/static/media/Lato-Light.96b78ec9.woff2","96b78ec9be61a9b1e91d455627636d53"],["/new-tab-daily-theme/static/media/Lato-Light.9d57e0c9.woff","9d57e0c919026e4d61c7f7087e43a00f"],["/new-tab-daily-theme/static/media/Lato-Light.b13b187d.svg","b13b187d608ae75fa657f27698a77054"],["/new-tab-daily-theme/static/media/Lato-Light.f014a7e8.eot","f014a7e840bcd8fcdbaaba729f2847d9"],["/new-tab-daily-theme/static/media/Lato-LightItalic.3d747d8b.ttf","3d747d8bf464744eecb91556d86de11b"],["/new-tab-daily-theme/static/media/Lato-LightItalic.75da51e5.svg","75da51e5d9b7014a8456bc62e7e544e9"],["/new-tab-daily-theme/static/media/Lato-LightItalic.88376c87.eot","88376c870233634fa4b208b40902bd5c"],["/new-tab-daily-theme/static/media/Lato-LightItalic.a0d2a3a8.woff2","a0d2a3a8df176d2319d2fb8e009c8280"],["/new-tab-daily-theme/static/media/Lato-LightItalic.e4669f8c.woff","e4669f8c91a258d8de12601f86154cce"],["/new-tab-daily-theme/static/media/Lato-Regular.3679ad95.woff2","3679ad95a1ac1277cd25d379a55712b5"],["/new-tab-daily-theme/static/media/Lato-Regular.39a39050.eot","39a3905085ad34aa621eaccdd6b70440"],["/new-tab-daily-theme/static/media/Lato-Regular.7f690e50.ttf","7f690e503a254e0b8349aec0177e07aa"],["/new-tab-daily-theme/static/media/Lato-Regular.e4fa05a4.woff","e4fa05a4f0c9ec0fa8dd8d44fcb259a4"],["/new-tab-daily-theme/static/media/Lato-Regular.e9d329fb.svg","e9d329fb99c7e3244dc344c9e0e422de"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="/new-tab-daily-theme/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});