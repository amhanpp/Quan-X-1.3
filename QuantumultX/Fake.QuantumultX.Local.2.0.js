[general]
server_check_url=http://www.google.com/generate_204
;geo_location_checker=http://www.example.com/json/, https://www.example.com/script.js
;dns_exclusion_list=*.qq.com, qq.com, *.cmpassport.com
;ssid_suspended_list=LINK_22E174, LINK_22E175
;udp_whitelist=53, 123, 1900, 80-443
;excluded_routes= 192.168.0.0/16, 172.16.0.0/12, 100.64.0.0/10, 10.0.0.0/8
;icmp_auto_reply=true
[dns]
server=1.1.1.1
server=1.0.0.1
server=8.8.8.8
server=8.8.4.4


[policy]
available=Fake iAP Policy, Fake iAP Server 01, Fake iAP Server 02, Fake iAP Server 03, img-url=https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/pill_1f48a.png
static=Fake PXX Policy, direct, Fake iAP Policy, img-url=https://raw.githubusercontent.com/crossutility/Quantumult-X/master/icon-samples/apple.PNG

#
# Params "tag" and "enabled" are optional.
# The default sync interval for all kinds of remote resources is 24*60*60 seconds.
#

[server_remote]
https://github.com/tinycarrot/tinycarrot/raw/master/quantumutlx/remote/fakeiap_server.txt, tag=Fake iAP Server, enabled=true

[filter_remote]
https://raw.githubusercontent.com/tinycarrot/tinycarrot/master/Profile/quantumult/fakePXX-itunes.txt, tag=Fake PXX Filter, force-policy=Fake PXX Policy, enabled=true
https://raw.githubusercontent.com/tinycarrot/tinycarrot/master/Profile/quantumult/fakeiap-filter.txt, tag=Fake iAP Filter, force-policy=Fake iAP Policy, enabled=true
https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/hostsVN-quantumult-exceptions-rule.conf, tag=🇻🇳hostsVN, force-policy=direct, enabled=true
https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/hostsVN-quantumult-rule.conf, tag=🇻🇳hostsVN, force-policy=reject, enabled=true


[rewrite_remote]
https://raw.githubusercontent.com/chankanzu/Quan-X-1.3/master/QuantumultX/Fake_Vip.txt, tag=Fakevip, enabled=false
https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/hostsVN-quantumultX-rewrite.conf, tag=🇻🇳hostsVN, enabled=true

[server_local]

;http=127.0.0.1:8001, username=, password=, fast-open=false, udp-relay=false, certificate=1 ,tag=LOCAL DEBUG Server

;shadowsocks=ss-a.example.com:80, method=chacha20, password=pwd, obfs=http, obfs-host=bing.com, obfs-uri=/resource/file, fast-open=false, udp-relay=false, server_check_url=http://www.apple.com/generate_204, tag=Sample-A
;shadowsocks=ss-b.example.com:80, method=chacha20, password=pwd, obfs=http, obfs-host=bing.com, obfs-uri=/resource/file, fast-open=false, udp-relay=false, tag=Sample-B
;shadowsocks=ss-c.example.com:443, method=chacha20, password=pwd, obfs=tls, obfs-host=bing.com, fast-open=false, udp-relay=false, tag=Sample-C
;shadowsocks=ssr-a.example.com:443, method=chacha20, password=pwd, ssr-protocol=auth_chain_b, ssr-protocol-param=def, obfs=tls1.2_ticket_fastauth, obfs-host=bing.com, tag=Sample-D
;shadowsocks=ws-a.example.com:80, method=aes-128-gcm, password=pwd, obfs=ws, obfs-uri=/ws, fast-open=false, udp-relay=false, tag=Sample-E
;shadowsocks=ws-b.example.com:80, method=aes-128-gcm, password=pwd, obfs=ws, fast-open=false, udp-relay=false, tag=Sample-F
;shadowsocks=ws-tls-a.example.com:443, method=aes-128-gcm, password=pwd, obfs=wss, obfs-uri=/ws, fast-open=false, udp-relay=false, tag=Sample-G

[filter_local]
;host, *, LOCAL DEBUG Server
;user-agent, ?abc*, proxy
;host, www.google.com, proxy
;host-keyword, adsite, reject
;host-suffix, googleapis.com, proxy
final, direct

#
# The "reject" returns HTTP status code 404 with no content.
# The "reject-200" returns HTTP status code 200 with no content.
# The "reject-img" returns HTTP status code 200 with content of 1px gif.
# The "reject-dict" returns HTTP status code 200 with content of empty json object.
# The "reject-array" returns HTTP status code 200 with content of empty json array.
# The "request-header" works for all the http headers not just one single header, so you can match two or more headers including CRLF in one regular expression.
# The length and encoding related HTTP header fields will be automatically processed by Quantumult if the "rewrite" is body related, so you should not handle them by yourself. The max supported response size is 256kB(decompressed) for response-body and script-response-body.
# When using javascript in rewrite, you can use those objects: $request, $response, $notify(title, subtitle, message), console.log(message) and Quantumult’s built-in objects all have prefix "$".
# Supports: $request.scheme, $request.method, $request.url, $request.path, $request.headers, $response.statusCode, $response.headers, $response.body
# The $notify(title, subtitle, message) will post iOS notifications if Quantumult notification has been enabled.
# The console.log(message)  will output logs to Quantumult log file if the log level is "debug".
#

[mitm]
passphrase = 3FDCC70A
p12 = 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

skip_validating_cert = true
force_sni_domain_name = true
;empty_sni_enabled = true

hostname = avatar-nct.nixcdn.com, spclient.wg.spotify.com, oa.zalo.me, vsco.co, api.gyrosco.pe, origin-prod-phoenix.jibjab.com, api.termius.com, api.picsart.com, api.unfold.app, viva-asia1.vvbrd.com, graph.nhaccuatui.com, api.memrise.com, buy.itunes.apple.com, api.sync.me, pool.elsanow.io, lambda.us-east-1.amazonaws.com, api.mondlylanguages.com, api.busuu.com, owa.videoshowiosglobalserver.com:8095, accounts.elevateapp.net, purchases.ws.pho.to, api-intl.mr.meitu.com, bmall.camera360.com, api.tv.zing.vn, api.calm.com, www.calm.com, api.global.mp3.zing.vn, apimboom2.globaldelight.net, photos.adobe.io, license.pdfexpert.com, subs.platforms.team, apic.musixmatch.com, api.getmimo.com, api.revenuecat.com, engbright.com, api.lingokids.com, www.peacefulsoundsapp.com, duolingo-leaderboards-prod.duolingo.com,  commerce-i18n-api.faceu.mobi, mobile-api.adguard.com, api.blinkist.com, api.sololearn.com, api-kinemaster-assetstore.nexstreaming.com, subs.studycat.net, production.platform.originatorkids.com, pibo.jp, revoapi.moneylover.me, apis.littlefox.com, www.api.monkeyuni.net, api.prod.headspace.com, *.sleepcycle.com, api.ejoy.io, api.pushover.net, api.intsig.net, api.overhq.com, receipt-validator.herewetest.com, payments-p.yoursmartkid.com, education.github.com, backend.getdrafts.com, api.deezer.com, ssl-api.itranslateapp.com, sk.ulysses.app, dayone.me, api.leanplum.com, static.moneylover.me, api.farfaria.com, api.kidsup.net, api-production.endel.io, lcs-mobile-cops.adobe.io, p*-buy.itunes.apple.com, wolframalpha.com, *.wolfram.com,   api.shred.app, vocabinnews.com, *.deluxeweather.com, *.platforms.team, lumosity.com, *.crashlytics.com, license.enpass.io, mp.bybutter.com, *.grammarly.com, splice.oracle.*.com, api.keepkeep.com, planner5d.com, secure.istreamer.com, api.mazii.net, api.medium.com, api.revenuecat.com, api.thenx.com, vtpay9.viettel.vn, api.quizlet.com, api.spendee.com, ads.penreader.com, device-provisioning.googleapis.com, app.autocad360.com, oecd.oupchina.com.hk, qgytjlfnjfjf774fha7f.xiangxiangapps.com, 

[rewrite_local]

(.video_id=\w{32})(.watermark=)(.*) url 302 $1

#vsco
^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/ url script-response-body chankanzu/vsco.js

#gyroscope
^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ url script-response-body chankanzu/Gyroscope.vip.js

#Termius 
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body chankanzu/Terminus.js

#PicsArt
^https:\/\/api\.picsart\.com\/users\/show\/me\.json$ url script-response-body chankanzu/picsArt.vip.js

#Vivavideo
^https:\/\/viva-asia1\.vvbrd\.com\/api\/rest\/u\/vip* url script-response-body chankanzu/vivavideo.vip.js

#Undfold
^https:\/\/api\.unfold\.app\/v1\/ios\/receipts$ url script-response-body chankanzu/Unfold.vip.js

#Nhaccuatui
^https:\/\/graph\.nhaccuatui\.com\/.*\/users\/info* url script-response-body chankanzu/nhaccuatui.js

#Memrise
^https:\/\/api\.memrise\.com\/v1\.16\/me\/$ url response-body "is_pro":false response-body "is_pro":true

^https:\/\/api\.memrise\.com\/v1\.16\/(dashboard\/$|leaderboards\/following\/) url script-response-body chankanzu/memrise.vip.js

# Jibjab
^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user$ url script-response-body chankanzu/jibjab.vip.js

#buyhack
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body chankanzu/buy.itunes.apple.com.js

#sync
^https:\/\/api\.sync\.me\/api\/purchases\/(report_purchases|get_purchases)  url script-response-body chankanzu/syn.me.js

#elsaresponse
^https:\/\/pool\.elsanow\.io\/user\/api\/v1\/purchase$ url script-response-body chankanzu/elsa-response.js

#elsarewrite
^https:\/\/pool\.elsanow\.io\/content\/api\/v1\/modules\/download$  url request-header (\r\n)x-session-token:.+(\r\n) request-header $1x-session-token: F3S0w0bysBQFdbjtxpFurrFv2ItBBcBkVQxUddQW+9vjt2JXM751ksqq5GAWpkl+kk9nhig9BGh9JhYHQaokmendY6zLZDscHiRkZD2HrdJclKVCLordAARJhYIrf5C+5OSK6ax2TA45CKi8S09FEtYXN4noXO7gt42NT6WPIv6DKhdIwVxQuIAMLU5abmpMTDlyWeI4ulBWcOQbuZWWZg==

#drops
^https:\/\/lambda\.us-east-1\.amazonaws\.com/.*/functions\/prod-4-syncPurchases\/invocations$ url script-response-body chankanzu/drops.js

#mondly
^https:\/\/api\.mondlylanguages\.com\/v1\/ios\/user\/sync$ url script-response-body chankanzu/mondly.vip.js

#busuu
^https:\/\/api\.busuu\.com\/users\/me* url script-response-body chankanzu/busuu.vip.js

#Videoshow
^https:\/\/owa\.videoshowiosglobalserver\.com* url script-response-body chankanzu/videoshow.vip.js

#elevate
^https:\/\/accounts\.elevateapp\.net\/api\/users\?user%5Bauthentication_token* url script-response-body chankanzu/elevate.vip.js

#beautyplus
^https:\/\/api-intl\.mr\.meitu\.com/.*/subs_offer_elg$ url script-response-body chankanzu/beautyplusvip.js

#camera360
^https:\/\/bmall\.camera360\.com\/api\/(iap\/check-receipt$|mix\/getinfo$) url script-response-body chankanzu/camera360.vip.js

#zingtv
^https?:\/\/api\.tv\.zing\.vn\/.*/user* url script-response-body chankanzu/zingtvvipv1.js

#calm
^https:\/\/api\.calm\.com\/me$ url script-response-body chankanzu/calm.vip.js

#remove_manage
^https:\/\/www\.calm\.com\/mobile\/manage-subscription\?token=*  url reject-img

#lightroom
^https:\/\/photos\.adobe\.io\/v2\/accounts* url response-body "status":.* response-body "status":"subscriber","current_subs":{"product_id":"lightroom","store":"adobe","purchase_date":"2019-10-10T16:32:10.254954Z","sao":{"inpkg_CCES":"0","inpkg_CCLE":"1","inpkg_CCSN":"0","inpkg_CCSV":"0","inpkg_LCCC":"0","inpkg_LPES":"0","inpkg_LRBRL":"0","inpkg_LRMAC":"0","inpkg_LRMC":"0","inpkg_LRMP":"0","inpkg_LRTB":"0","inpkg_PHLT":"0","inpkg_PHLT2":"0","inpkg_PLES":"0","storage_quota":"100"}},"storage":{"used":0,"limit":1154487209165,"display_limit":1099511627776,"warn":992137445376}},"avatar":{"placeholder":true}}

#Pdfexpert
^https:\/\/license\.pdfexpert\.com\/api\/1\.0\/pdfexpert6\/subscription\/refresh$ url script-response-body chankanzu/Pdfexpert.vip.js

#productive
^https:\/\/subs\.platforms\.team\/apple\/verifyTransaction$ url script-response-body chankanzu/productive.js

#Musixmatch
^https:\/\/apic\.musixmatch\.com\/ws\/.*\/(user|config)\.get url script-response-body chankanzu/musixmatch.miao.js

#boom
^https:\/\/apimboom2\.globaldelight\.net\/itunesreceipt_v2\.php$ url 302 chankanzu/boom.vip.rsp

#mimo
^https:\/\/api\.getmimo\.com\/v1\/subscriptions$ url script-response-body chankanzu/mimo.vip.js

#mojo
^https:\/\/api\.revenuecat\.com\/v1\/receipts$ url script-response-body chankanzu/mojo.vip.js

#Bright
^https:\/\/engbright\.com\/app-portal\/apple\/receipt$ url 302 chankanzu/Bright.rsp

#lingokids
^https:\/\/api\.lingokids\.com\/v1\/renovate_session$ url script-response-body chankanzu/lingokids.vip.js

#musicalm
^https:\/\/www\.peacefulsoundsapp\.com\/api\/v1\/init$ url script-response-body chankanzu/musicalm.js

#duolingo
^https:\/\/duolingo-leaderboards-prod\.duolingo\.com\/leaderboards* url script-response-body chankanzu/duolingo.js

#ulike
^https:\/\/commerce-i18n-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info$ url script-response-body chankanzu/ulike.js

#adguardpremium
^https:\/\/mobile-api\.adguard\.com\/api\/1\.0\/ios_validate_receipt$ url 302 chankanzu/Adguard.rsp

#zingmp3
^https:\/\/api\.global\.mp3\.zing\.vn\/1\.0\/getUserInfo\?data=* url script-response-body chankanzu/zingmp3.js
^https:\/\/api\.global\.mp3\.zing\.vn\/1\.0\/getSongInfo\?data* url script-response-body chankanzu/zingmp3.getsong.js
^https:\/\/api\.global\.mp3\.zing\.vn\/1\.0\/getDownloadSongInfo\?data$  url script-response-body chankanzu/zingmp3.downloadsong.js

#Blinkist
^https:\/\/api\.blinkist\.com\/v4\/me.json$ url script-response-body chankanzu/me.json
^https:\/\/api\.blinkist\.com\/v4\/me$ url script-response-body chankanzu/me.json
^https:\/\/api\.blinkist\.com\/v4\/me\/access$ url script-response-body chankanzu/blinkist1.js

#sololearn 
^https:\/\/api\.sololearn\.com\/Profile\/GetProfile$ url script-response-body chankanzu/sololearn2.js
^https:\/\/api\.sololearn\.com\/authenticateDevice$ url script-response-body chankanzu/sololearn1.js

#kinemaster
^https:\/\/api-kinemaster-assetstore\.nexstreaming\.com\/.*\/product\/verifyReceipt$ url script-response-body chankanzu/kinemaster.js


#Funenglish
^https:\/\/subs\.studycat\.net\/1\/validatepurchase$ url script-response-body chankanzu/00FunEng1.1.1.js

#Enless
#http:\/\/production\.platform\.originatorkids\.com\/rest\/catalog\/update$ url script-response-body chankanzu/004_Req_endless_learning_school.js

#http:\/\/production\.platform\.originatorkids\.com\/rest\/init 

#Pipo
^https:\/\/pibo\.jp\/api\/4\/user\/login$ url script-response-body chankanzu/006pibo.js

#MoneyLover
^https:\/\/revoapi\.moneylover\.me\/api\/status$ url script-response-body chankanzu/007MoneyLover.js

#LittleFox
^https:\/\/apis\.littlefox\.com\/api\/v1\/auth\/* url script-response-body chankanzu/LittleFox.js

#sleepcycle
^https:\/\/s\.sleepcycle\.com\/downloadReceipt$ url script-response-body chankanzu/sleepcycle1.js
^https:\/\/s\.sleepcycle\.com\/useraccountstats$ url script-response-body chankanzu/sleepcycle2.js

#ejoy
^https:\/\/api\.ejoy\.io\/graph$ url script-response-body chankanzu/ejoy.js


#pushover
^https:\/\/api\.pushover\.net\/1\/messages\.json* url script-response-body chankanzu/pushover.js

#CamScanner
^https:\/\/api\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body chankanzu/CamScaner.js

#over
^https:\/\/api\.overhq\.com\/(user\/token\/refresh$|subscription\/verifyReceipt$) url script-response-body chankanzu/over.vip.js

#1blocker
^https:\/\/api\.revenuecat\.com\/.*\/subscribers\/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$ url script-response-body chankanzu/1blocker.js

#speak&translate
^https:\/\/receipt-validator\.herewetest\.com\/apple\/verifyTransaction$ url script-response-body chankanzu/speak%26translate.js

#Keiki
https://payments-p.yoursmartkid.com/api/v1/checkSubscription?udid* url script-response-body chankanzu/Keiki.vip.js


#document
^https:\/\/license\.pdfexpert\.com\/api\/.*\/documents\/subscription\/(refresh$|check$) url script-response-body chankanzu/documents.js

#workingcopy
^https:\/\/education\.github\.com\/api\/user$ url script-response-body chankanzu/workingcopy.js

#draft
^https:\/\/backend\.getdrafts\.com\/api\/.*\/verification* url script-response-body chankanzu/draft.js

#deezer
^https:\/\/api\.deezer\.com\/1.0\/gateway.php?input=3&method=mobile_userAutolog&api_key* url script-response-body chankanzu/deezer.js

#phothop&PSexpress
^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile url script-response-body chankanzu/PhotoshopEp.js

#itranslate
^https:\/\/ssl-api\.itranslateapp\.com\/accounts\/v4\/subscriptions\/verify\/ios$ url script-response-body chankanzu/itranslate.js

#ulysses
^https:\/\/sk\.ulysses\.app\/api\/v1\/ url script-response-body chankanzu/ulysses.js

#pre_dayone
;^https:\/\/dayone\.me\/api\/users$ url request-header (\r\n)If-None-Match:.+(\r\n) request-header $1 

#dayone
^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ url script-response-body chankanzu/dayone.js
#yousican
^https:\/\/api\.leanplum\.com\/api$ url script-response-body chankanzu/yousician.js

#MoneyLover
^https:\/\/static\.moneylover\.me\/icon_pack\/icon_pack.json$ url 302 chankanzu/icon.moneylover.js
^https:\/\/static\.moneylover\.me\/data\/subscription_product.json$ url 302 chankanzu/Trial.Moneylover.js

#Fafaria
^https:\/\/api\.farfaria\.com\/users\/sign_in.json*  url 302 chankanzu/Fafaria.json

#Kidsup
^https:\/\/api\.kidsup\.net\/verify$ url script-response-body chankanzu/Kidsup.js
^https:\/\/api\.kidsup\.net\/unlock$ url script-response-body chankanzu/kidsup2.js

#endel
^https:\/\/api-production\.endel\.io\/.*\/user$ url script-response-body chankanzu/endel.js

#Buy
;^https:\/\/p*-buy\.itunes\.apple\.com\/WebObjects\/MZFastFinance.woa\/wa\/inAppCheckDownloadQueue$ url script-response-body chankanzu/bitsboard.js
;^https:\/\/p*-buy\.itunes\.apple\.com\/WebObjects\/MZFinance.woa\/wa\/inAppPendingTransactions$ url script-response-body chankanzu/receipt.js

#wolfram

^https:\/\/www\.wolframalpha\.com\/users\/me\/account* url script-response-body chankanzu/Wolfram1.js
^https:\/\/account\.wolfram\.com\/auth\/introspect$ url script-response-body chankanzu/Wolfram.js

#shred
^https:\/\/api\.shred\.app\/verifyReceipt$ url script-response-body chankanzu/shred.js

#4english
^https:\/\/vocabinnews\.com\/v1\/users\/me\/info$ url script-response-body chankanzu/4english.vip.js
^https:\/\/vocabinnews\.com\/v1\/users\/me\/functions$ url script-response-body chankanzu/4English2.js
^https:\/\/onesignal\.com\/api\/v1\/apps\/b060ca09-cf25-42b8-85a1-d2d7021a351f\/ios_params.js* url 302 chankanzu/4english3.js
^https:\/\/vocabinnews\.com\/v2\/books* url script-response-body chankanzu/4englishbook.js

#weathernow
^http:\/\/subscription\.deluxeweather\.com\/check_receipt.php$ url 302 chankanzu/Weathernow.php

#weatherlive
^https:\/\/subs\.platforms\.team\/apple\/verifyTransaction$ url script-response-body chankanzu/weathelive.js

#lumosity
^https:\/\/www\.lumosity\.com\/api\/v2\/subscriptions* url script-response-body chankanzu/lumosity.js
^https:\/\/www\.lumosity\.com\/api\/v2\/user* url script-response-body chankanzu/lumosity2.js
^https:\/\/www\.lumosity\.com\/api\/v2\/insights\/game_result_stats* url script-response-body chankanzu/lumosity3.js
^https:\/\/www\.lumosity\.com\/api\/oauth\/token$ url script-response-body chankanzu/lumosity4.js

#atlasenglish
^https:\/\/settings\.crashlytics\.com\/spi\/v2\/platforms\/ios\/apps\/com.gocas.byroon\/settings* url script-response-body chankanzu/atlasenglish.js

#nichi
^https?:\/\/mp\.bybutter\.com\/mood\/(official-templates|privileges) url script-response-body chankanzu/nichi.js

#grammarly
^https:\/\/subscription\.grammarly\.com\/api\/v1$ url script-response-body chankanzu/grammarly.js

#splice
^https:\/\/splice\.oracle\.\w+\.com\/devices\/me url script-response-body chankanzu/splice.js

#planner5d
^https:\/\/planner5d\.com\/api\/sets url script-response-body chankanzu/planner5d.js

#playerxtreme
;^https:\/\/secure\.istreamer\.com\/backend$ url request-header (\r\n)If-None-Match:.+(\r\n) request-header $1 

^https:\/\/secure\.istreamer\.com\/backend$ url script-response-body chankanzu/playerxtreme.js

#Mazzidict
^https:\/\/api\.mazii\.net\/api\/init-login$ url script-response-body chankanzu/mazzidict.js

#medium
^https:\/\/api\.medium\.com:443\/_\/ios\/config$ url 302 chankanzu/Medium.js
^https:\/\/api\.medium\.com:443\/me\/settings$ url 302 chankanzu/Medium2.js

#singbot
^https:\/\/api\.revenuecat\.com\/v1\/subscribers* url script-response-body chankanzu/Singbot.js

#abaenglish
^hhttps:\/\/api\.revenuecat\.com\/v1\/(receipts|\d{1,})$ url script-response-body chankanzu/abaenglish.vip.js

#thenx
^https:\/\/api\.thenx\.com\/v1\/users\/current$ url script-response-body chankanzu/thenx.js

#quizlet
^https:\/\/api\.quizlet\.com\/3.4\/users* url script-response-body chankanzu/Quizlet.js
^https:\/\/api\.quizlet\.com\/3.4\/users\/apple-subscription\/free-trial$ url script-response-body chankanzu/quizlet2.js

#allappsmonkey
^https:\/\/www\.api\.monkeyuni\.net\/api\/.+\/mobile\/account\/load-update url script-response-body chankanzu/monkey.js

#autocad
^https:\/\/app\.autocad360\.com\/main\/users\/login\/v2$  url script-response-body chankanzu/autocad.js

#oecd
^https:\/\/oecd\.oupchina\.com\.hk\/regapi.php$ url script-response-body chankanzu/regapi.php

#xiang
^https:\/\/qgytjlfnjfjf774fha7f\.xiangxiangapps\.com\/ucp\/index* url script-response-body chankanzu/xiangxiangapps.js

#headspace.com
^https:\/\/api\.prod\.headspace\.com\/(profile\/v1\/profiles\/HSUSER_AQ4C06TQNY80IET3|subscription\/user-subscriptions?userId=HSUSER_AQ4C06TQNY80IET3|profile\/v1\/profiles\/HSUSER_AQ4C06TQNY80IET3)$ url script-request-header chankanzu/headspace2.js
^https:\/\/api\.prod\.headspace\.com\/subscription\/user-subscriptions?userId=HSUSER_AQ4C06TQNY80IET3$ url script-response-body chankanzu/headspace.js
