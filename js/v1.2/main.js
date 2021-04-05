const apps = [
    {
        "title": "技育祭おまとめさん",
        "link": "https://twist-geek.herokuapp.com/",
        "description": "技育祭2021用に制作した、講演毎のTweetがまとめて見られるサイト",
        "image": "image/geek.png"
    },
    {
        "title": "miteru",
        "link": "https://hai-conference.net/symp2021/proceedings/html/paper/paper-G-14.html",
        "description": "研究用に制作した、マウスポインタを疑似的な視線情報として伝達可能な通話アプリ",
        "image": "image/miteru.png"
    },
    {
        "title": "レポートヘルパーくん",
        "link": "https://docs.google.com/presentation/d/1jjgLMoTBOnfpMXzCpWOdQFDWL1zCv4ImsTzcHEIBnxg/edit?usp=sharing",
        "description": "ハッカソンで制作した、レポート制作を手助けするためのLINE Bot",
        "image": "image/reporthelper.png"
    },
    {
        "title": "2020年捏造アルバム",
        "link": "https://docs.google.com/presentation/d/1q7cGQsjMIVmUa4fTp6Tsoesxqsl6d2PvKTfkkEJkLuQ/edit?usp=sharing",
        "description": "ハッカソンで制作した、2020年の思い出を捏造するためのLINE Bot",
        "image": "image/netsuzou.png"
    },
    {
        "title": "バーチャル廊下",
        "link": "https://docs.google.com/presentation/d/1jnR8nWh144R6d2Kw8l5GVfkhvoxceX7ROf1P629aM7U/edit?usp=sharing",
        "description": "ハッカソンで制作した、オンラインで廊下での雑談を再現するためのWebアプリ",
        "image": "image/vrouka.png"
    },
    {
        "title": "Family-Request",
        "link": "https://docs.google.com/presentation/d/11xrRzxVsF73Xlss_zw2qgAZZijWZxhxhmmwscX-VFHI/edit?usp=sharing",
        "description": "ハッカソンで制作した、家族間のコミュニケーションを円滑にするためのWebアプリ",
        "image": "image/familyreq.png"
    },
    {
        "title": "WebAR花火（プラネタリウム）",
        "link": "https://docs.google.com/presentation/d/1ZSYd9yZHoEvpZM3kmWDHit4_2IkMvJrv9lHZ9pP22k4/edit?usp=sharing",
        "description": "ハッカソンで制作した、ARで花火を見ようとしてプラネタリウムになってしまったWebアプリ",
        "image": "image/arhanabi.png"
    },
    {
        "title": "Playfests",
        "link": "https://docs.google.com/presentation/d/1gBVFKUtO-l81_kU53hmNzSqoDvV3EELNoP73dyCM-ZE/edit?usp=sharing",
        "description": "ハッカソンで作成した、YouTubeのプレイリストをみんなで作ってみんなで楽しむWebアプリ",
        "image": "image/playfests.png"
    },
    {
        "title": "ShodaiManabaHighlight",
        "link": "https://soukatsu-ouc.com/works/494",
        "description": "商大のmanaba用のChrome拡張",
        "image": "image/manaba.png"
    },
    {
        "title": "商大生のための時間割",
        "link": "https://seana-totaru.com/",
        "article": "https://www.otaru-uc.ac.jp/news/141122/",
        "description": "小樽商科大学の生徒向けの時間割Webアプリ（北海道学生アプリコンテスト経済産業局長賞受賞）",
        "video": "video/timetable.mp4"
    },
    {
        "title": "safARi pARk",
        "link": "https://github.com/jphacks/SP_1907",
        "article": "https://www.otaru-uc.ac.jp/news/19263/",
        "description": "JPHACKS2019にて製作したWebARアプリ．北海道会場のBest Hack Day Award受賞．",
        "video": "video/jphacks.mp4"
    },
    {
        "title": "抽選アプリ",
        "article": "https://www.city.shizuoka.lg.jp/000835144.pdf",
        "description": "高校のイベント用に作った抽選Webアプリ",
        "video": "video/lottery.mp4"
    },
    {
        "title": "スタンプラリー",
        "article": "https://www.city.shizuoka.lg.jp/000835144.pdf",
        "description": "高校のイベント用に作ったQRコードを使用したスタンプラリーWebアプリ",
        "video": "video/stamp-rally.mp4"
    }
]
const games = [
    {
        "title": "デコリヤドカリ",
        "link": "https://soukatsu-ouc.com/works/%e3%83%87%e3%82%b3%e3%83%aa%e3%83%a4%e3%83%89%e3%82%ab%e3%83%aa",
        "win": "https://github.com/himantyu-yuma/ggj-yadokari/releases/download/v0.5-alpha/win.zip",
        "mac": "https://github.com/himantyu-yuma/ggj-yadokari/releases/download/v0.5-alpha/mac.zip",
        "description": "GGJ2021で制作した3D宝探し（？）ゲーム",
        "video": "video/yadokari.mp4"
    },
    {
        "title": "扉開けて",
        "link": "https://unityroom.com/games/door-open",
        "description": "unity1week「あける」で制作したゲーム",
        "video": "video/dooropen.mp4"
    },
    {
        "title": "声 is パワー",
        "link": "https://soukatsu-ouc.com/works/%e5%a3%b0is%e3%83%91%e3%83%af%e3%83%bc",
        "win": "https://drive.google.com/file/d/1jyZ6zRWA514mF2fq0lNQDFmUibiIs7G5/view?usp=sharing&export=download",
        "mac": "https://drive.google.com/file/d/1z_s3DO1cg5wLfnTcwNI4TGuKJQIkPMB6/view?usp=sharing&export=download",
        "description": "声量を攻撃力や防御力にできたらおもしろいなと思って実験的に作ったゲーム",
        "image": "image/voicebattle.png"
    },
    {
        "title": "グルメペンギンの大冒険II -Delux Edition-",
        "link": "https://soukatsu-ouc.com/works/%e3%82%b0%e3%83%ab%e3%83%a1%e3%83%9a%e3%83%b3%e3%82%ae%e3%83%b3%e3%81%ae%e5%a4%a7%e5%86%92%e9%99%baii-delux-edition",
        "win": "https://drive.google.com/file/d/1UPG8RS1Qtw_5A1sV0cGL_QUK91n-DBR-/view?usp=sharing",
        "mac": "https://drive.google.com/file/d/1b9zSezXHdb-h4e1BJuD1fLmrqWTBRppQ/view?usp=sharing",
        "description": "創作活動部の制作企画で作ったゲーム。複数ステージに分かれている。",
        "video": "video/penguin.mp4"
    },
    {
        "title": "もしも、普通の女子学生である私が美少女に愛を迫られる中で、そんなどころではない定期考査と学祭を両立させるとしたら？",
        "link": "https://soukatsu-ouc.com/works/%e3%82%82%e3%81%97%e3%82%82%e3%80%81%e6%99%ae%e9%80%9a%e3%81%ae%e5%a5%b3%e5%ad%90%e5%ad%a6%e7%94%9f%e3%81%a7%e3%81%82%e3%82%8b%e7%a7%81%e3%81%8c%e7%be%8e%e5%b0%91%e5%a5%b3%e3%81%ab%e6%84%9b%e3%82%92",
        "win": "https://github.com/soukatsu-ouc-programmers/2020summer-novel/releases/download/v1.1/win.zip",
        "description": "ノベルゲーム制作をやってみようと思って作ったゲーム",
        "video": "video/novel.mp4"
    },
    {
        "title": "Super Dangomushi",
        "link": "https://soukatsu-ouc.com/works/super-dangomushi",
        "win": "https://drive.google.com/file/d/1wgzxQB0hQtnT-a3JGZX_Dg0eBudS_bMT/view?usp=sharing",
        "mac": "https://drive.google.com/file/d/1PW0evaLfHMKlsNhhYjZWuiFFylBCVbAA/view?usp=sharing",
        "description": "部内全体の制作企画の下調べとして作ったゲーム",
        "video": "video/dangomushi.mp4"
    },
    {
        "title": "vs3分間の賢者タイム",
        "link": "https://soukatsu-ouc.com/works/ggj2020-kenja",
        "win": "https://ggj.s3.amazonaws.com/games/2020/02/247027/exec/jOWQ8/v3.zip",
        "description": "GGJ2020にて製作したゲーム",
        "video": "video/kenja.mp4"
    },
    {
        "title": "恐怖の館からの脱出（わくわく粗探しゲーム）",
        "link": "https://unityroom.com/games/horrorff",
        "description": "Unity1週間ゲームジャムで作ったゲーム",
        "video": "video/horror.mp4"
    },
    {
        "title": "箸子",
        "link": "https://soukatsu-ouc.com/works/chopstick",
        "win": "https://drive.google.com/open?id=1hhA6zs_9KrQOBqfuLk7tF0PuZSQ2tS3k",
        "description": "北大のkawazさんと合同で作ったゲーム",
        "video": "video/chopstick.mp4"
    },
    {
        "title": "バーチャルオープンキャンパス",
        "link": "http://virtual-ouc.net/lp",
        "description": "小樽商科大学のバーチャルオープンキャンパスアプリ（Android iOS）",
        "video": "video/vrouc.mp4"
    },
    {
        "title": "VR交通安全教室",
        "link": "https://www.otaru-uc.ac.jp/event/6905/",
        "description": "小樽警察署の方から話をいただき，小樽市内の小学校で開催した交通安全教室用のVRゲーム",
        "video": "video/traffic-safety.mp4"
    },
    {
        "title": "World of Snowplows",
        "link": "https://soukatsu-ouc.com/works/world-of-snowplows",
        "win": "https://drive.google.com/uc?export=download&id=1hhfjr1uou0-nmBCy9A4A2u8w99MK6h_R",
        "mac": "https://drive.google.com/uc?export=download&id=1fzhQMfk3w19gnMlSBJAStppqHRO61R_H",
        "description": "2泊3日の合宿で作った除雪ゲーム。",
        "video": "video/wos.mp4"
    },
    {
        "title": "Cube Simulator",
        "win": "https://drive.google.com/uc?export=download&id=1h94-PIjKp1bC-OQPvUmEXjj3qtVnq0qi",
        "description": "Unityで初めて作ったゲーム。バグ多め。",
        "video": "video/cube-simulator.mp4"
    }
];

const videos = [
    {
        "title": "NOI Channel",
        "description": "木村ゼミで運営しているVTuber「NOI」の動画（一部）",
        "youtube": "https://www.youtube.com/embed/hgdInNmzDKc",
    },
    {
        "title": "商大生のための時間割 PV",
        "description": "商大生のための時間割（開発したWebアプリ）のPV",
        "youtube": "https://www.youtube.com/embed/6us6d1F4Suo",
    },
    {
        "title": "OUC Navi PV",
        "description": "OUC Navi（ゼミで運用しているWebサービス）のPV",
        "youtube": "https://www.youtube.com/embed/dqm91vwLMa8",
    },
    {
        "title": "VROUC PV",
        "description": "バーチャルオープンキャンパスのPV",
        "youtube": "https://www.youtube.com/embed/J2YwOo44aFg",
    },
    {
        "title": "高校時代の動画その2",
        "description": "高校時代に作った動画その2",
        "video": "video/beam.mp4",
    },
    {
        "title": "高校時代の動画その1",
        "description": "高校時代に作った動画その1",
        "video": "video/battle.mp4",
    }
]

// vueで描画
var vm = new Vue({
    el: '#app',
    data: {
        apps: apps,
        games: games,
        videos: videos
    }
});