<script setup>
const thepool = [
    {
        name: "Albedo",
        wishimg: 'https://genshin.honeyhunterworld.com/img/albedo_038_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Albedo_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/albedo_038_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Alhaitham",
        wishimg: 'https://genshin.honeyhunterworld.com/img/alhatham_078_gacha_splash.webp?x28602',
        profileimg: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/01/15/35428890/25249dd20b86c775fb35bdbbd805d9ec_8879881358376735994.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/alhatham_078_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Amber",
        wishimg: 'https://genshin.honeyhunterworld.com/img/ambor_021_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/a906ddb1b9b01c9356285d40a89b6eb1.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/ambor_021_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Arataki Itto",
        wishimg: 'https://genshin.honeyhunterworld.com/img/itto_057_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Arataki%2520Itto_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/itto_057_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Baizhu",
        wishimg: 'https://genshin.honeyhunterworld.com/img/baizhuer_082_gacha_splash.webp?x28602',
        profileimg: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/05/02/35428890/05599650d7f42e1c4adde373de6b297d_8001303176243726128.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/baizhuer_082_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Barbara",
        wishimg: 'https://genshin.honeyhunterworld.com/img/barbara_014_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/59cee661e980d9e4eca196402b582f36.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/barbara_014_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Beidou",
        wishimg: 'https://genshin.honeyhunterworld.com/img/beidou_024_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/61d7bcde77b8a06bb7a618524af9895c.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/beidou_024_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Bennett",
        wishimg: 'https://genshin.honeyhunterworld.com/img/bennett_032_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/72cb0799091868cbe69328e90e62f94b.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/bennett_032_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Candace",
        wishimg: 'https://genshin.honeyhunterworld.com/img/candace_072_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/c9d510788a4db389817843334d14f18d.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/candace_072_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Charlotte",
        wishimg: 'https://genshin.honeyhunterworld.com/img/charlotte_088_gacha_splash.webp?x28602',
        profileimg: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/11/06/35428890/7bbbff3f35661a93b5091b1f17fae6c0_6927814687713967999.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/charlotte_088_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Chevreuse",
        wishimg: 'https://genshin.honeyhunterworld.com/img/chevreuse_090_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/8cbaf1b000db247e384f5c8979619724.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/chevreuse_090_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Chongyun",
        wishimg: 'https://genshin.honeyhunterworld.com/img/chongyun_036_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/db61061c68adefdeeb6b98ecf1cc681a.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/chongyun_036_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Collei",
        wishimg: 'https://genshin.honeyhunterworld.com/img/collei_067_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/4da2bceaecdc6b95db44e00cfad2daf2.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/collei_067_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Cyno",
        wishimg: 'https://genshin.honeyhunterworld.com/img/cyno_071_gacha_splash.webp?x28602',
        profileimg: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2022/09/28/77454259/e09e2bda5e022611fad0dea1bb6518bb_6757667565719577204.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/cyno_071_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Dehya",
        wishimg: 'https://genshin.honeyhunterworld.com/img/dehya_079_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/7d1d3025ea6ef82d8da302d5aa972c10.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/dehya_079_gacha_card.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Diluc",
        wishimg: 'https://genshin.honeyhunterworld.com/img/diluc_016_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/ea056dcab267a0ba18162adeb3d27888.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/diluc_016_gacha_card.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Diona",
        wishimg: 'https://genshin.honeyhunterworld.com/img/diona_039_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/0d3685dbc5880c0e8dd73ca402201ce0.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/diona_039_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Dori",
        wishimg: 'https://genshin.honeyhunterworld.com/img/dori_068_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/d67b40071c18495cff3a46bfbf9d61f1.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/dori_068_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Eula",
        wishimg: 'https://genshin.honeyhunterworld.com/img/eula_051_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Eula_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/eula_051_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Faruzan",
        wishimg: 'https://genshin.honeyhunterworld.com/img/faruzan_076_icon_70.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/10ae4ff19a542115b41e5a94678a5777.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/faruzan_076_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Fischl",
        wishimg: 'https://genshin.honeyhunterworld.com/img/fischl_031_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/a3b70e51669b5ab3012b74129d2a5812.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/fischl_031_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Freminet",
        wishimg: 'https://genshin.honeyhunterworld.com/img/freminet_085_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/ce8c1cfe3ade451fb5bddb50e9253e08.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/freminet_085_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Furina",
        wishimg: 'https://genshin.honeyhunterworld.com/img/furina_089_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/0ad6a10b5d6b0a823c4048fc7cd734e7.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/furina_089_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Gaming",
        wishimg: 'https://genshin.honeyhunterworld.com/img/gaming_092_gacha_splash.webp?x28602',
        profileimg: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/01/29/35428890/b041ad23a9d6245efac952a9379c5114_8939761424130236195.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/gaming_092_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Ganyu",
        wishimg: 'https://genshin.honeyhunterworld.com/img/ganyu_037_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/f46084df1bc2699920c7b68d5e69547d.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/ganyu_037_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Gorou",
        wishimg: 'https://genshin.honeyhunterworld.com/img/gorou_055_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/50b3930cd5e4e6fc7889f29d15fc06dd.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/gorou_055_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Hu Tao",
        wishimg: 'https://genshin.honeyhunterworld.com/img/hutao_046_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/30a64e1c93f6de2e298158228b438f13.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/hutao_046_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Jean",
        wishimg: 'https://genshin.honeyhunterworld.com/img/qin_003_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/2a70468b694ce53008386fe9987c7e83.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/qin_003_gacha_card.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Kaedehara Kazuha",
        wishimg: 'https://genshin.honeyhunterworld.com/img/kazuha_047_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/b66dfb67c1371dab01c79c8f49b435b5.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/kazuha_047_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Kaeya",
        wishimg: 'https://genshin.honeyhunterworld.com/img/kaeya_015_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/a394197b81c5722b635e7af359c0a520.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/kaeya_015_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Kamisato Ayaka",
        wishimg: 'https://genshin.honeyhunterworld.com/img/ayaka_002_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/3eaa40af37fd729047f7a810baf9d58f.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/ayaka_002_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Kamisato Ayato",
        wishimg: 'https://genshin.honeyhunterworld.com/img/ayato_066_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Kamisato%2520Ayato_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/ayato_066_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Kaveh",
        wishimg: 'https://genshin.honeyhunterworld.com/img/kaveh_081_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/2330b14769f843c50b869da0b22ef260.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/kaveh_081_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Keqing",
        wishimg: 'https://genshin.honeyhunterworld.com/img/keqing_042_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/eb4c6449bf2467c4cad3bdeaac921e7e.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/keqing_042_gacha_card.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Kirara",
        wishimg: 'https://genshin.honeyhunterworld.com/img/momoka_061_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/1cb3d7d4d65741943bbfd3eccffa36b4.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/momoka_061_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Klee",
        wishimg: 'https://genshin.honeyhunterworld.com/img/klee_029_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Klee_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/klee_029_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Kujou Sara",
        wishimg: 'https://genshin.honeyhunterworld.com/img/sara_056_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/99e63faff7c7b6982e64d6ea861a51d5.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/sara_056_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Kuki Shinobu",
        wishimg: 'https://genshin.honeyhunterworld.com/img/shinobu_065_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/64e4aa06d6d8985b56aee971d7fd7724.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/shinobu_065_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Layla",
        wishimg: 'https://genshin.honeyhunterworld.com/img/layla_074_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/5c9faf073e9703c61acf9f6777c47b73.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/layla_074_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Lisa",
        wishimg: 'https://genshin.honeyhunterworld.com/img/lisa_006_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/8e27b689ec486c954398c968ee36a626.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/lisa_006_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Lynette",
        wishimg: 'https://genshin.honeyhunterworld.com/img/linette_083_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/7341da3f51143384b08fdeebae5365b6.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/linette_083_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Lyney",
        wishimg: 'https://genshin.honeyhunterworld.com/img/liney_084_gacha_splash.webp?x28602',
        profileimg: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/08/11/35428890/e343d4442cc3b8e243f0d528bb715f75_1232011243947476013.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/liney_084_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Mika",
        wishimg: 'https://genshin.honeyhunterworld.com/img/mika_080_side_icon_70.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/ad4be577444a41051955f34310744c9c.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/mika_080_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Mona",
        wishimg: 'https://genshin.honeyhunterworld.com/img/mona_041_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/c9c2f095772abe102792fc184672d5e2.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/mona_041_gacha_card.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Nahida",
        wishimg: 'https://genshin.honeyhunterworld.com/img/nahida_073_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/99e73b84df09a2a67b2a7f86ee0a0ec4.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/nahida_073_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Navia",
        wishimg: 'https://genshin.honeyhunterworld.com/img/navia_091_gacha_splash.webp?x28602',
        profileimg: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2023/12/18/35428890/3fc7580c01a9e622692402889706c4db_8301615651200775487.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/navia_091_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Neuvillette",
        wishimg: 'https://genshin.honeyhunterworld.com/img/neuvillette_087_gacha_splash.webp?x28602',
        profileimg: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/26/35428890/0513aa7f482dbb4778545d02f94956fe_7540616405773975535.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/neuvillette_087_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Nilou",
        wishimg: 'https://genshin.honeyhunterworld.com/img/nilou_070_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/5075ed07a231b981c8865b6766365304.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/nilou_070_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Ningguang",
        wishimg: 'https://genshin.honeyhunterworld.com/img/ningguang_027_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/46313c80082fc8134d5d4ac963daef98.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/ningguang_027_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Noelle",
        wishimg: 'https://genshin.honeyhunterworld.com/img/noel_034_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/bb4c5deba479d43eae4ac80df322837f.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/noel_034_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Qiqi",
        wishimg: 'https://genshin.honeyhunterworld.com/img/qiqi_035_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Qiqi_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/qiqi_035_gacha_card.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Raiden Shogun",
        wishimg: 'https://genshin.honeyhunterworld.com/img/shougun_052_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/5fa702eaa527f3bbc81400cb8f8dbe30.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/shougun_052_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Razor",
        wishimg: 'https://genshin.honeyhunterworld.com/img/razor_020_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/401fc0f666ec394c60b3ab0d4378196f.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/razor_020_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Rosaria",
        wishimg: 'https://genshin.honeyhunterworld.com/img/rosaria_045_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/4eae6d29d8063db603f379ac1cc342e4.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/rosaria_045_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Sangonomiya Kokomi",
        wishimg: 'https://genshin.honeyhunterworld.com/img/kokomi_054_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/09475bfeb4ca3ae615756ef7b3ef0a50.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/kokomi_054_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Sayu",
        wishimg: 'https://genshin.honeyhunterworld.com/img/sayu_053_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/81740e04f53029f8c7a1ce0a4d480369.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/sayu_053_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Shenhe",
        wishimg: 'https://genshin.honeyhunterworld.com/img/shenhe_063_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Shenhe_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/shenhe_063_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Shikanoin Heizou",
        wishimg: 'https://genshin.honeyhunterworld.com/img/heizo_059_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/25e949cbe4a3391246951b13aa1f0e09.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/heizo_059_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Sucrose",
        wishimg: 'https://genshin.honeyhunterworld.com/img/sucrose_043_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/d67563812daeb7833fc0b2193ae60d51.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/sucrose_043_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Tartaglia",
        wishimg: 'https://genshin.honeyhunterworld.com/img/tartaglia_033_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Tartaglia_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/tartaglia_033_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Thoma",
        wishimg: 'https://genshin.honeyhunterworld.com/img/tohma_050_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/6cf38441c1520fac55389e45c4d148e2.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/tohma_050_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Tighnari",
        wishimg: 'https://genshin.honeyhunterworld.com/img/tighnari_069_gacha_splash.webp?x28602',
        profileimg: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2022/08/22/35428890/497dd6fac3d3c652a367c67428550747_306268558608889633.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/tighnari_069_gacha_card.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Venti",
        wishimg: 'https://genshin.honeyhunterworld.com/img/venti_022_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Venti_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/venti_022_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Wanderer",
        wishimg: 'https://genshin.honeyhunterworld.com/img/wanderer_075_gacha_splash.webp?x28602',
        profileimg: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2022/12/05/35428890/24d97a22be742fb732ea96f625d1faac_2495743636540582085.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/wanderer_075_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Wriothesley",
        wishimg: 'https://genshin.honeyhunterworld.com/img/wriothesley_086_gacha_splash.webp?x28602',
        profileimg: 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/10/15/35428890/31a0eb2dec5d69ca8dd7616572136b8b_8886987124386670150.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/wriothesley_086_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Xiangling",
        wishimg: 'https://genshin.honeyhunterworld.com/img/xiangling_023_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/34934a78f56e63f56a161f15087d846d.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/xiangling_023_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Xianyun",
        wishimg: 'https://genshin.honeyhunterworld.com/img/liuyun_093_gacha_splash.webp?x28602',
        profileimg: 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/01/29/35428890/2c2be27f8876e9435ab8c8b933b8408c_7973851751945394462.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/liuyun_093_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Xiao",
        wishimg: 'https://genshin.honeyhunterworld.com/img/xiao_026_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Xiao_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/xiao_026_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Xingqiu",
        wishimg: 'https://genshin.honeyhunterworld.com/img/xingqiu_025_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/316a7d9924316f4ec326039c11452d44.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/xingqiu_025_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Xinyan",
        wishimg: 'https://genshin.honeyhunterworld.com/img/xinyan_044_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/13947038bb8df5ad8daa7c552aeb58d8.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/xinyan_044_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Yae Miko",
        wishimg: 'https://genshin.honeyhunterworld.com/img/yae_058_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Yae%2520Miko_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/yae_058_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Yanfei",
        wishimg: 'https://genshin.honeyhunterworld.com/img/feiyan_048_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/9673d854a6760e0019001c46b7f1dd65.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/feiyan_048_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Yaoyao",
        wishimg: 'https://genshin.honeyhunterworld.com/img/yaoyao_077_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/794e9009c2984a3d569d2690c2da1866.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/yaoyao_077_gacha_card.webp?x28602',
        stars: "4",
        standard: true
    },
    {
        name: "Yelan",
        wishimg: 'https://genshin.honeyhunterworld.com/img/yelan_060_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/e379019894dda29acc5fb6abfda4f815.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/yelan_060_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Yoimiya",
        wishimg: 'https://genshin.honeyhunterworld.com/img/yoimiya_049_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Yoimiya_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/yoimiya_049_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Yunjin",
        wishimg: 'https://genshin.honeyhunterworld.com/img/yunjin_064_gacha_splash.webp?x28602',
        profileimg: 'https://act-webstatic.hoyoverse.com/hk4e/e20200928calculate/item_icon_u854wf/98276e51ffe135707af1088c4c2f45e7.png?x-oss-process=image%2Fformat%2Cwebp',
        cardimg: 'https://genshin.honeyhunterworld.com/img/yunjin_064_gacha_card.webp?x28602x',
        stars: "4",
        standard: true
    },
    {
        name: "Zhongli",
        wishimg: 'https://genshin.honeyhunterworld.com/img/zhongli_030_gacha_splash.webp?x28602',
        profileimg: 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/character/Zhongli_icon.png',
        cardimg: 'https://genshin.honeyhunterworld.com/img/zhongli_030_gacha_card.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Aquila Favonia",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11501_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11501.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11501_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Summit Shaper",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11504_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11504.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11504_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Primordial Jade Cutter",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11505_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11505.webp?x28602', 
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11505_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Freedom Sworn",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11503_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11503.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11503_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Mistsplitter Reforged",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11509_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11509.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11509_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Haran Geppaku Futsu",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11510_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11510.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11510_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Key of Khaj-Nisut",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11511_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11511.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11511_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Light of Foliar Incision",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11512_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11512.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11512_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Splendor of Tranquil Waters",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11513_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11513.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11513_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "A Thousand Floating Dreams",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14511_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14511.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14511_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Amos' Bow",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15502_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15502_gacha_icon.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15502_gacha_icon.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Aqua Simulacra",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15508_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15508_gacha_icon.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15508_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Beacon of the Reed Sea",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12511_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12511.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12511_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Calamity Queller",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13507_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13507.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13507_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Cashflow Supervision",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14513_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14513.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14513_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Crane's Echoing Call",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14515_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14515.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14515_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Elegy for the End",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15503_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15503.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15503_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Engulfing Lightning",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13509_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13509.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13509_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Everlasting Moonglow",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14506_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14506.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14506_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Hunter's Path",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15511_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15511.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15511_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Jadefall's Splendor",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14505_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14505.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14505_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Kagura's Verity",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14509_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14509.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14509_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Lost Prayers to the Sacred Winds",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14502_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14502.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14502_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Memory of Dust",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14504_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14504.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14504_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Polar Star",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15507_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15507.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15507_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Primordial Jade Winged-Spear",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13505_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13505.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13505_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Redhorn Stonethresher",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12510_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12510.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12510_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Skyward Atlas",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14501_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14501.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14501_gacha_icon.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Skyward Harp",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15501_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15501.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15501_gacha_icon.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Skyward Blade",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11502_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11502.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11502_gacha_icon.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Skyward Spine",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13502_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13502.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13502_gacha_icon.webp?x28602',
        stars: "5",
        standard: true
    },    {
        name: "Skyward Pride",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12501_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12501.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12501_gacha_icon.webp?x28602',
        stars: "5",
        standard: true
    },
    {
        name: "Song of Broken Pines",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12503_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12503.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12503_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Staff of Homa",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13501_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13501.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13501_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Staff of the Scarlet Sands",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13511_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13511.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13511_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "The First Great Magic",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15512_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15512.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15512_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "The Unforged",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12504_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12504.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12504_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Thundering Pulse",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15509_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15509.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15509_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Tome of the Eternal Flow",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14514_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14514.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14514_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Tulaytullah's Rememberance",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14512_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14512.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14512_gacha_icon.webp?x28602t',
        stars: "5",
        standard: false
    },
    {
        name: "Verdict",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12512_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12512.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12512_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Vortex Vanquisher",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13504_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13504.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13504_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Wolf's Gravestone",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12502_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12502.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12502_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Akuoumaru",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12416_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12416.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12416_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Alley Hunter",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15410_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15410.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15410_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Dragon's Bane",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13401_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13401.webp?x28602', 
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13401_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Eye of Perception",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14409_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14409.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14409_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Favonius Codex",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14401_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14401.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14401_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Favonius Greatsword",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12401_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12401.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12401_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Favonius Lance",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13407_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13407.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13407_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Favonius Sword",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11401_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11401.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11401_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Favonius Warbow",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15401_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15401.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15401_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Lion's Roar",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11405_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11405.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11405_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Lithic Blade",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12410_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12410.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12410_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Lithic Spear",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13406_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13406.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13406_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Makhaira Aquamarine",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12415_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12415.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12415_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Mitternacht Waltz",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15412_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15412.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15412_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Mouun's Moon",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15416_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15416.webp?x28602',  
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15416_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Portable Power Saw",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12427_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12427.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12427_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Prospector's Drill",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13427_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13427.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13427_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Rainslasher",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12405_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12405.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12405_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Range Gauge",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15427_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15427.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15427_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Rust",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15405_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15405.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15405_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Sacrificial Bow",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15403_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15403.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15403_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Sacraficial Fragments",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14403_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14403.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14403_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Sacraficial Greatsword",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12403_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12403.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12403_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Sacraficial Sword",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11403_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11403.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11403_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "The Alley Flash",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11410_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11410.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11410_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "The Bell",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12402_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12402.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12402_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "The Dockhand's Assistant",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11427_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11427.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11427_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "The Flute",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11402_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11402.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11402_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "The Stringless",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15402_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15402.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15402_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "The Widsith",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14402_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14402.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14402_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Wandering Evenstar",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14416_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14416.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14416_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Wavebreaker's Fin",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13416_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13416.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13416_gacha_icon.webp?x28602',
        stars: "5",
        standard: false
    },
    {
        name: "Wine and Song",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14410_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14410.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14410_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Xiphos' Moonlight",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11418_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11418.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11418_gacha_icon.webp?x28602',
        stars: "4",
        standard: false
    },
    {
        name: "Raven Bow",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15301_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15301.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15301_gacha_icon.webp?x28602',
        stars: "3",
        standard: false
    },
    {
        name: "Sharpshooter's Oath",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15302_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15301.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15302_gacha_icon.webp?x28602',
        stars: "3",
        standard: false
    },
    {
        name: "Slingshot",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n15304_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n15304.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n15304_gacha_icon.webp?x28602',
        stars: "3",
        standard: false
    },
    {
        name: "Emerald Orb",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14304_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14304.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14304_gacha_icon.webp?x28602',
        stars: "3",
        standard: false
    },
    {
        name: "Magic Guide",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14301_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14301.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14301_gacha_icon.webp?x28602',
        stars: "3",
        standard: false
    },
    {
        name: "Thrilling Tales of Dragon Slayers",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n14302.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n14302.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n14302.webp?x28602',
        stars: "3",
        standard: false
    },
    {
        name: "Bloodtainted Greatsword",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12302_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12302.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12302_gacha_icon.webp?x28602',
        stars: "3",
        standard: false
    },
    {
        name: "Debate Club",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12305_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12305.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12305_gacha_icon.webp?x28602',
        stars: "3",
        standard: false
    },
    {
        name: "Ferrous Shadow",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n12301_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n12301.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n12301_gacha_icon.webp?x28602',
        stars: "3",
        standard: false
    },
    {
        name: "Black Tassel",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n13303_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n13303.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n13303_gacha_icon.webp?x28602',
        stars: "3",
        standard: false
    },
    {
        name: "Cool Steel",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11301_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11301.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11301_gacha_icon.webp?x28602',
        stars: "3",
        standard: true
    },
    {
        name: "Harbinger of Dawn",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11302_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11302.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11302_gacha_icon.webp?x28602',
        stars: "3",
        standard: false
    },
    {
        name: "Skyrider Sword",
        wishimg: 'https://genshin.honeyhunterworld.com/img/i_n11306_gacha_icon.webp?x28602',
        profileimg: 'https://genshin.honeyhunterworld.com/img/i_n11306.webp?x28602',
        cardimg: 'https://genshin.honeyhunterworld.com/img/i_n11306_gacha_icon.webp?x28602',
        stars: "3",
        standard: false
    },
]

//wish template background thing https://pbs.twimg.com/media/ErZ-eN_XUAQeIhN.jpg:large
//bacco 5 star : #99602d
//bacco 4 star: #6c5f94 
//bacco 3 star : #5392b8
</script>

<template>

</template>
