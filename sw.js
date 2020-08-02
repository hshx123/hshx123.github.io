/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/23bae12c/index.html","ec9ded9d76ad718573d1c1736d7b3651"],["/57f766c7/index.html","07b9c15b353306c512015c007dcbd7db"],["/602fe57f/index.html","9bc5d14d7c8e60f4b3ecde2aec4725f1"],["/65dfe4f3/index.html","1a73ecd6ec95ca1567dc1b8056b5d0aa"],["/81449276/index.html","70ae275c2d3f26810d21c5ab6daed8b6"],["/8a795854/index.html","cb28953060f5dde0495acc352c81e4ff"],["/8d8a5dcf/index.html","ffff6659ea737b1fa249cf60fb5f8bad"],["/8f2a7d48/index.html","e34bbef459178bee4c8da649b9c54eb2"],["/95b9d3c/index.html","4b33f027c5561161c9400b4e3e382f40"],["/9ab3d01/index.html","09dc7fc244e863ae9658a47ef21058d5"],["/9nine/index.html","a6c6d18bb58d902a021c42a9029c0b93"],["/I_Walk_Among_Zombies/index.html","0b261bc8dae0b81f79ca7757662c25ac"],["/Kagikko_L-only/index.html","5a3a522196f06ce46dd4c8097a46f4a6"],["/a455fadf/index.html","387e38f711e76e0b191f7b75f89ef1fc"],["/a8e0ebd8/index.html","107e526aab54b9bb877429c0d7d47af6"],["/about/index.html","f945337984c789221aabf3599f5f6a64"],["/archives/2020/02/index.html","37fcf51eb1bc60d8b4b6da0f893ebd5e"],["/archives/2020/03/index.html","f2e180ffa3b8ae0f8e2b251d02fbca4d"],["/archives/2020/04/index.html","233e4023861623462e06dd6e14469b53"],["/archives/2020/05/index.html","01e542e9729d1b5c65c6a3706151bd98"],["/archives/2020/06/index.html","67bb65c0630c9c1a4d01df26896a2ab5"],["/archives/2020/07/index.html","9d294606e72ff56b7c3e5882611bb8eb"],["/archives/2020/08/index.html","3130871d2eae13901ebc8d9c42a5349f"],["/archives/2020/index.html","25661613fbbd0d21f3ba00efcd5eaf71"],["/archives/2020/page/2/index.html","550000642660eee5618f22eebec1780e"],["/archives/2020/page/3/index.html","5b1adae76308e76601e20f14c6c717bc"],["/archives/2020/page/4/index.html","6510d31446d8d941abf154939de47988"],["/archives/index.html","86a261f8ec210c21970a158d082b2a7b"],["/archives/page/2/index.html","410b6f06aaf70dc2b6c5bac2b1dd0cbd"],["/archives/page/3/index.html","6e94f09c57833d5042beb88bd730ed2a"],["/archives/page/4/index.html","2a1e48e777bdf54f30a94618b24d0828"],["/bc05d2f0/index.html","3fa521d08e39589efb081b46d6508733"],["/categories/Termux/index.html","8dd782024f573c81b0ee74e3c7773971"],["/categories/index.html","99f84562a0ef3bd7718ceccf92340749"],["/categories/教程/index.html","5005e4f92988f5cf2b40ba9d3f228fb5"],["/categories/游戏/index.html","f6ceaf7ff68396f1ccc735ff8964e3ad"],["/categories/照片/index.html","577d781aa82e03b4e9988e2200ff41e0"],["/categories/玩机技巧/index.html","16be0181f604108f1a4b2d40c366ed5b"],["/categories/琐事/index.html","c352eca624e6c581742c56b148cdc0ac"],["/cloverdays/index.html","2870fc6c7e79c508decf52d572f7c587"],["/css/cyberpunk.css","2db0d7538b6ea339f299abf312f2f428"],["/css/default.css","76e36c8f5cc1fe0a58d1c6bea84503e8"],["/css/style.css","d05cec2eaa32fcfa6bd7920e85914897"],["/d4d75639/index.html","64659ed63d7b724d5792e2156ba7d9e4"],["/daa2f75/index.html","573d83ab81006bd6f8bcd3eeb9c0df8e"],["/de854e23/index.html","73a9b1e3fd348fc79d368abc922e167c"],["/dfdd089a/index.html","30eb8a136c740f1bea22dc30944b97f2"],["/e9027427/index.html","49bce0979a8973a6fdb31bf8e7228d19"],["/eye/index.html","de028992d652230181c648c014e398b3"],["/friends/index.html","ea70eea34fb4c885c520ee0cd3401e31"],["/hexo/index.html","821c57583da56f4abcecbf3cc9ee3486"],["/hexo2/index.html","683519935bd1a40a8ee4926c22e26a5f"],["/how_to_go/index.html","214fefd99ecdbc8eb95aaa22ad4cd7c3"],["/hwzs/index.html","f3b21cc4304afc3bf56c541ec273e747"],["/img/avatar.png","8c257f9fdc3c92ebd07e84f3eb181297"],["/img/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/img/logo.svg","78c34960b55c12a2e1286351c45358f5"],["/img/og_image.png","c0c40988f5babf31dba70bccd41506a4"],["/img/razor-bottom-black.svg","3f0f5185dd8f5c8b2145e8388c86bc5c"],["/img/razor-top-black.svg","0d266d3422294d93cecc342bb3757473"],["/img/thumbnail.svg","b15ba22d74204f664cdfed75d03de230"],["/img/wechat.jpg","aab1f644eebc1306e251be4bf8206bea"],["/index.html","c4394014877f5448f86731d66d1865af"],["/jbn/index.html","b015f5f5dca2d20e613a332dc926fa28"],["/js/algolia.js","9a5211b37d86edf2eb0314b5f1f64ac4"],["/js/animation.js","909a13a980da00854b246c544f2f9697"],["/js/back_to_top.js","93c900ce5f3dc9f28b082c80456c5520"],["/js/google_cse.js","f8df6329b2d17a7f2f6574963857c554"],["/js/insight.js","a6cc440c6d601202680a98fb095adb6b"],["/js/main.js","ca530b2ba040266166ab1e27d0d303ae"],["/page/2/index.html","bf2d7cea64cc3c8cfbe0485e85d59c83"],["/page/3/index.html","06cbf37cc5161ba1ff1460bbee278f0c"],["/page/4/index.html","4881663b9bd7e42d8b4df5a15d9ac75c"],["/siguan/index.html","77b1b83db7029375cdf16fad7c064db3"],["/sw-register.js","8d7e55bb2469096e3520320a200412a0"],["/tags/ADB/index.html","4177c98cd4fdf29140b9c0e77d62ebea"],["/tags/KRKR/index.html","652e39360cb8f4e301e630da1af45bdc"],["/tags/ONS/index.html","8fbb4ce34e542da954d36c6df1427575"],["/tags/PC/index.html","8f6520831b6ea31daafc929af4fbf402"],["/tags/alcot/index.html","bf406bfe81239d81ffc7d93badba5554"],["/tags/galgame/index.html","0d25873f006bf532e0847cf21903ae14"],["/tags/galgame/page/2/index.html","1fa9276e0783e7aa6125032b848a8c79"],["/tags/hexo/index.html","b04f7a48ce73023d5744625f7fa39354"],["/tags/hide/index.html","4d664a1d19817e81c238a93802194d37"],["/tags/hide/page/2/index.html","906dcdd8bee6d4534edff7011c0b4f73"],["/tags/index.html","0a74d7fe7d921a17a0318ff689c2c5e7"],["/tags/termux/index.html","8fa8c6be02217d28350f8cb695112635"],["/tags/夜羊社/index.html","332ab3054f4d415a771bc7bc6d8a758f"],["/tags/安卓/index.html","9977944f5afc4bd0817669ec9f219803"],["/tags/工具/index.html","7e323eefbdac55c5157322611001d2af"],["/tags/最近在玩的游戏/index.html","7ef98afe446031017a779c39768de4ee"],["/tags/美化/index.html","3964b3b81a4a2a397dd137864e3478c2"],["/tags/表情包/index.html","c33cb4b7707316c1ba1cb30318a68f01"],["/tags/视频/index.html","046c778ddc18428b3e2ef36815e2d5cd"],["/tags/风景/index.html","ca8cbbac0436f1c450f741a3ac5cbe6a"],["/top/index.html","ce4d48fa9932909dd987c60ec93fef70"],["/whj/index.html","10cad5d17fd211c6190d88e4c71432aa"]];
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
