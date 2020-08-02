/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/23bae12c/index.html","e84d8c94eb459257abda6355ed52177b"],["/404.html","c58562b902abebe9a01cdacd3f7015b7"],["/57f766c7/index.html","f06b5ae0193556def6211fca59734a68"],["/602fe57f/index.html","888cc39ecd4642b2a142ef729d39f78f"],["/65dfe4f3/index.html","dd1c8cb5a6777d3e6c2d2d520933ec59"],["/81449276/index.html","02712fc9f26073f325789160ea293f9c"],["/8a795854/index.html","5488d94352b281e9f7d7f43d6c9c1caf"],["/8d8a5dcf/index.html","b7dfd04c773974dc42e1d7276bf30f1e"],["/8f2a7d48/index.html","2f20edaaf2b27248cbcf62eb66a5c7b3"],["/95b9d3c/index.html","7540076ecb28ca263ebc715d52d786f0"],["/9ab3d01/index.html","4db59a6cdd7c557d4fa640da3de37071"],["/9nine/index.html","1daaabf172282e1b7c2df63767824ad8"],["/I_Walk_Among_Zombies/index.html","466218f48d806395cf158d9d94a65d6e"],["/Kagikko_L-only/index.html","56bd01003c8ea59b99ad1ae1df15d655"],["/a455fadf/index.html","b2cc84fea504b4ca70ebe7c486647c5a"],["/a8e0ebd8/index.html","44789039e42a39b2e3bf57698e8302cc"],["/about/index.html","3cdd6d4b7f72918f5e00cff91d48031f"],["/archives/2020/02/index.html","82556d0abf1ffa4dee8f94db49688cfa"],["/archives/2020/03/index.html","1765361fd13d6d5888338948a93433de"],["/archives/2020/04/index.html","8646d43bf1354f8ccee9e8ae39c08373"],["/archives/2020/05/index.html","27120700be5f4cac3f1a4a42a6b93117"],["/archives/2020/06/index.html","8ab4155c66946005e8011b050f668259"],["/archives/2020/07/index.html","f11abdbee4f6509844b654d5f70b3383"],["/archives/2020/08/index.html","ec2ed7c895cfd6af662b915710030a32"],["/archives/2020/index.html","417556ec8f4c46c09cfd74531998a323"],["/archives/2020/page/2/index.html","4a37f5d016c40520b1c044c79c2eda68"],["/archives/2020/page/3/index.html","c0fe13c974bddeecb87445d2fa30beaa"],["/archives/2020/page/4/index.html","9071ea1460a99f9e9ce5d38cc2cd29f9"],["/archives/index.html","813370b2d1200358686bfc1972716966"],["/archives/page/2/index.html","65f146ac4328d85f8034f459ffa1bc3b"],["/archives/page/3/index.html","45cd2f0d501172204e35aea8a6974292"],["/archives/page/4/index.html","8ac34f4540a0a00e7f2a91ad304eb405"],["/bc05d2f0/index.html","d05b25b491fed0f4c01f318e4ad9e18d"],["/categories/Termux/index.html","f6229639fa41eab006524e72480e805c"],["/categories/index.html","c0684e1b2225f67f490b6d068f0623d5"],["/categories/教程/index.html","b541aa0359112fff5c42b9e8be2947df"],["/categories/游戏/index.html","e96877c140e25ee4166607b07dfcea9e"],["/categories/照片/index.html","1baacc2d4b3f61f7d125533642df65e9"],["/categories/玩机技巧/index.html","4a878210f4e13374b3b8390a4d47d40e"],["/categories/琐事/index.html","78eea2c626b382dbbe4535fbfd02092a"],["/cloverdays/index.html","4b80b373f9f5939499dbf90c57d5ac9b"],["/css/cyberpunk.css","f6b4d7a267282eac492d3b04735cc833"],["/css/default.css","bb49ceff6664bc256c53c99b86ba8601"],["/css/style.css","bb49ceff6664bc256c53c99b86ba8601"],["/d4d75639/index.html","224bf9a7a9676079d30d0a1eefe40e83"],["/daa2f75/index.html","945c626fc14062c68a2b4216bf1d3d19"],["/de854e23/index.html","b8d228b96dc5183340a6af15259a04ba"],["/dfdd089a/index.html","73111aeebc62e11ee25796dfc92ea1b3"],["/e9027427/index.html","3cfca5cfc167a810360c862d8759dcca"],["/eye/index.html","cb183f700843048a6444aa28ff1662c7"],["/friends/index.html","9bddf74ad9f56e105934773278438e56"],["/hexo/index.html","044e211b5b0bbd71d1722b3ff71cbce0"],["/hexo2/index.html","74f8ae7534f2df35bf0afd7757063710"],["/how_to_go/index.html","49b7dae3a5ec5e82de72d905d6cf3e38"],["/hwzs/index.html","77e61d5731099da0914c21ec03244384"],["/img/avatar.png","8c257f9fdc3c92ebd07e84f3eb181297"],["/img/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/img/logo.svg","78c34960b55c12a2e1286351c45358f5"],["/img/og_image.png","c0c40988f5babf31dba70bccd41506a4"],["/img/razor-bottom-black.svg","3f0f5185dd8f5c8b2145e8388c86bc5c"],["/img/razor-top-black.svg","0d266d3422294d93cecc342bb3757473"],["/img/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/img/wechat.jpg","aab1f644eebc1306e251be4bf8206bea"],["/index.html","fee7d0d66d269459f1de2d231b2dc9f4"],["/jbn/index.html","685e9f0c67a37867991a19102f486dc7"],["/js/algolia.js","9a5211b37d86edf2eb0314b5f1f64ac4"],["/js/animation.js","909a13a980da00854b246c544f2f9697"],["/js/back_to_top.js","93c900ce5f3dc9f28b082c80456c5520"],["/js/google_cse.js","f8df6329b2d17a7f2f6574963857c554"],["/js/insight.js","a6cc440c6d601202680a98fb095adb6b"],["/js/main.js","ca530b2ba040266166ab1e27d0d303ae"],["/page/2/index.html","c204d8414d1a01d91345b4c4b7f59b92"],["/page/3/index.html","80ad7373029487a99a83cea516bee9bb"],["/page/4/index.html","bb50a8cda4bf98edd12835dc7028afcf"],["/siguan/index.html","7464ac0b49127f16232a363e58f22b1b"],["/sw-register.js","7462f1d1c827b51212c7c85ccd596009"],["/tags/ADB/index.html","96122a2bc7d6448c4af02504aa9f8687"],["/tags/KRKR/index.html","136abf4f16d8c4cf54f60fb0bfcac822"],["/tags/ONS/index.html","ce1ef1e52c64f762b31569e7ade25b11"],["/tags/PC/index.html","0170cfbb340016b8428f209414be8aab"],["/tags/alcot/index.html","b3af0a04ecfe112f09a1c71b4bceb7ed"],["/tags/galgame/index.html","b2fb5dca8f88b92070d897fed2f48dd5"],["/tags/galgame/page/2/index.html","ab19891976c86131a4f538b79095cdbd"],["/tags/hexo/index.html","5c0377c9150b00e948981b126d598081"],["/tags/hide/index.html","f087f17d0d49ec8ac963ae8b4afa49e4"],["/tags/hide/page/2/index.html","e46ff8c8ee8bc4bff8cdc339a3cd5139"],["/tags/index.html","29796beed301530ab1bb88bf88ed1ed2"],["/tags/termux/index.html","9ba4618f06a73cf06f1577be3079808b"],["/tags/夜羊社/index.html","16e6e9f9e840be37112c4cb4d303c67a"],["/tags/安卓/index.html","452c4b12ab75fce5212e31b476269066"],["/tags/工具/index.html","f007ab0ffe062cb4e51bc5b178db6cc2"],["/tags/最近在玩的游戏/index.html","240e31ed9313a10fb3274d047512ff4a"],["/tags/美化/index.html","4add912b58389f9b553b1002febd6b23"],["/tags/表情包/index.html","63cb5e2eae074ef2d91006b6bd6d4da0"],["/tags/视频/index.html","67a992a697a70b6bad4620e6ace05386"],["/tags/风景/index.html","444969dad51cddb1f87cd6782c7ec4a2"],["/top/index.html","40a2ccc34b176f37b8b6fee744fdbd05"],["/whj/index.html","fd9b1bf45fd332f0e074393df691500c"]];
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
