/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/23bae12c/index.html","e6ad5f9464483fa662b557b07d0b2d67"],["/57f766c7/index.html","5a910bf6727724f108eb396b4c3fb326"],["/602fe57f/index.html","b15f0dc7255a2323c83e0a9fe4a403af"],["/65dfe4f3/index.html","fe6c9c7ceb126b477eb7e038724cea9b"],["/81449276/index.html","0152a350373f170dca14fc1e78a98623"],["/8a795854/index.html","4add8fc55551920107cdd889fee31447"],["/8d8a5dcf/index.html","909091321f6128ef9cca6a1227e31251"],["/8f2a7d48/index.html","b35f81edb87ebb47503f8ecf4f2f06dc"],["/95b9d3c/index.html","43797a47a0207649e19744129cba8edc"],["/9ab3d01/index.html","0d1a36645ba8fe209383e7add482857f"],["/9nine/index.html","a76bf4b1028ec648659d540843a761df"],["/I_Walk_Among_Zombies/index.html","0517d37d9f707f1fe427774280581a81"],["/Kagikko_L-only/index.html","21010ae1f4bc6f8c146ccd975f9f510c"],["/a455fadf/index.html","c09581a133cef0ea1ed02ac469974699"],["/a8e0ebd8/index.html","157e4bd61dc5dc458db2e59bcea09d9c"],["/about/index.html","01b5e55e25b118756ca5ded8091b2cdf"],["/archives/2020/02/index.html","9044a01f4097aca87eb32a1f44bee6e4"],["/archives/2020/03/index.html","a6b8a91305e02ff98c6b59a05838d736"],["/archives/2020/04/index.html","5ec1133633d1af9c28043fa3e0281756"],["/archives/2020/05/index.html","88fef39ffebb09f45302b2a9fb9bcb7f"],["/archives/2020/06/index.html","59f942b0dfe9abfb6d6b0914135f2354"],["/archives/2020/07/index.html","502ce45eff864c051bcf5c72d93cfdb4"],["/archives/2020/08/index.html","7ab43f2c86fa77c5ecffd25fa54980ba"],["/archives/2020/index.html","89a102af91fd81e3fb888cbc4f6a94df"],["/archives/2020/page/2/index.html","e7d3e4698eb0b86efa596cc84a0e0019"],["/archives/2020/page/3/index.html","2a571cf8d8e44e35ea2f684a214e60b1"],["/archives/2020/page/4/index.html","289a263c5d4871e7af1e957f21e89461"],["/archives/index.html","1958af74ad7b0f01af312b38d6480dfb"],["/archives/page/2/index.html","41a71d28b718eba1f46e3fb83daf531c"],["/archives/page/3/index.html","993b829320a8d37dd1df38bb05748e78"],["/archives/page/4/index.html","6c4ba72276da05458110c3e3ba1a8ec9"],["/bc05d2f0/index.html","eb2177396e18a7425ad18a57ca1a6705"],["/categories/Termux/index.html","972e9ea702306597285edba5d3158572"],["/categories/index.html","f07deec7fd8c4e3a70d9370dcec1ed09"],["/categories/教程/index.html","fbbd9f7046c2180211327582863a8c48"],["/categories/游戏/index.html","cf49f6bb88ded2d8505bb5ef4917a8de"],["/categories/照片/index.html","6a7366c2f7688155f2c6070a64b11e5e"],["/categories/玩机技巧/index.html","3825c0e1435b6937779dc5e891d40f37"],["/categories/琐事/index.html","41934998a312db12eec878b593ad8504"],["/cloverdays/index.html","3060c73852d93eae2777d815c5416612"],["/css/cyberpunk.css","2db0d7538b6ea339f299abf312f2f428"],["/css/default.css","76e36c8f5cc1fe0a58d1c6bea84503e8"],["/css/style.css","d05cec2eaa32fcfa6bd7920e85914897"],["/d4d75639/index.html","ee05a3296993fb24250e4fd975860032"],["/daa2f75/index.html","3ab8198669e2d996f7aaafc0217a9591"],["/de854e23/index.html","c4426c889f441d57dae844e040827706"],["/dfdd089a/index.html","c0aa9b40cf0d903b2ce138c1755c4957"],["/e9027427/index.html","439395f8d57bbd61561ef9e950bf8de8"],["/eye/index.html","ca6cfd26ab38483ed179e684f7bc85d8"],["/friends/index.html","3efd11c49bfa40217845a16e177d074b"],["/hexo/index.html","a73597672de67340310b63deb2386d76"],["/hexo2/index.html","4b0ab044c2308f7ec7aab1502d782850"],["/how_to_go/index.html","93d785d2d3044ff6a1642c069c884da3"],["/hwzs/index.html","766cc59851a37e44a2966dc2e12fcfb0"],["/img/avatar.png","8c257f9fdc3c92ebd07e84f3eb181297"],["/img/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/img/logo.svg","78c34960b55c12a2e1286351c45358f5"],["/img/og_image.png","c0c40988f5babf31dba70bccd41506a4"],["/img/razor-bottom-black.svg","3f0f5185dd8f5c8b2145e8388c86bc5c"],["/img/razor-top-black.svg","0d266d3422294d93cecc342bb3757473"],["/img/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/img/wechat.jpg","aab1f644eebc1306e251be4bf8206bea"],["/index.html","b6f094d4b7fcf5f9c9be6cf174f4833a"],["/jbn/index.html","64e6e25def11f4960ea53de8c0f51c61"],["/js/algolia.js","9a5211b37d86edf2eb0314b5f1f64ac4"],["/js/animation.js","909a13a980da00854b246c544f2f9697"],["/js/back_to_top.js","93c900ce5f3dc9f28b082c80456c5520"],["/js/google_cse.js","f8df6329b2d17a7f2f6574963857c554"],["/js/insight.js","a6cc440c6d601202680a98fb095adb6b"],["/js/main.js","ca530b2ba040266166ab1e27d0d303ae"],["/page/2/index.html","dbfd4df013ba3667ddc9616137940de2"],["/page/3/index.html","30004e70e79054caf83c5145e16e135a"],["/page/4/index.html","9c77d0f236890ef4226f44c39adfeb61"],["/siguan/index.html","6e0f73ee86cc7d7e1bd0bcc164ce879d"],["/sw-register.js","efc5ff06530f3d109a1239513ebf1a25"],["/tags/ADB/index.html","9ae10edd56be67ec936ecc469c520718"],["/tags/KRKR/index.html","d0a31666de8043456529628dd3d2b057"],["/tags/ONS/index.html","3420fa52096edfc90f60b813a1000200"],["/tags/PC/index.html","66f8088e7d528ac97cec4e0921bc06e8"],["/tags/alcot/index.html","3b8582ab1d06795f3d4ee52698d69631"],["/tags/galgame/index.html","7aa2bc55ec006f5d11300ac77bd306cb"],["/tags/galgame/page/2/index.html","89fd2a13db554a87ce75196a0083fd44"],["/tags/hexo/index.html","10c6055b130ef6d7696268ece48a6892"],["/tags/hide/index.html","4bde844a3048f5923139ffbeee48e923"],["/tags/hide/page/2/index.html","9f6e7de1b2c96ca4a4acbeeb44f941fa"],["/tags/index.html","5b1404f77421e52411a3517495ac0e5a"],["/tags/termux/index.html","4e37f40543485a6d1f2760b640b3100c"],["/tags/夜羊社/index.html","210281e918d4e41f6be4b438e0fdb55d"],["/tags/安卓/index.html","8fe10be5c98b8841960bbd6cc0e70fd6"],["/tags/工具/index.html","19b5fde4921cb72b610d37ff2fd7bb12"],["/tags/最近在玩的游戏/index.html","8d8426baa9cfd5888ebad1ebc2b940ed"],["/tags/美化/index.html","6890773e6465bfcfb5aa37cea893c439"],["/tags/表情包/index.html","5d085c71edd64d59fe2640dd98a4a42e"],["/tags/视频/index.html","8720960483af891f8b128ae738bbefcd"],["/tags/风景/index.html","e2f40b5ddd8315b6983b3cd32d83399a"],["/top/index.html","52355ab69a466f0b5bd6258c740f669d"],["/whj/index.html","ca59937c31bc4a3c8691fec7c1dca0d8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
