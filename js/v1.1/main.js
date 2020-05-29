// // jsonを読み込んで連想配列に
// $.ajax({
//     url: '/js/v1.0/works.json',
//     dataType: 'json',
//     async: false,
//     success: function (json) {
//         works = json;
//     }
// });
const apps = [
    {
        "title": "ShodaiManabaHighlight",
        "link": "https://soukatsu-ouc.com/works/494",
        "description": "商大のmanaba用のChrome拡張",
        "image": "image/manaba.png"
    },
    {
        "title": "商大生のための時間割",
        "link": "https://seana-totaru.com/",
        "description": "小樽商科大学の生徒向けの時間割Webアプリ",
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

const videos =[
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
        "src": "video/beam.mp4",
    },
    {
        "title": "高校時代の動画その1",
        "description": "高校時代に作った動画その1",
        "src": "video/battle.mp4",
    }
    
]

// vueで描画
var vm = new Vue({
    el: '#app',
    data: {
        games: games,
        videos: videos
    }
});