// // jsonを読み込んで連想配列に
// $.ajax({
//     url: '/js/v1.0/works.json',
//     dataType: 'json',
//     async: false,
//     success: function (json) {
//         works = json;
//     }
// });

const games = [
        {
            "title": "バーチャルオープンキャンパス",
            "id": "vrouc",
            "link": "http://virtual-ouc.net/lp",
            "description": "小樽商科大学のバーチャルオープンキャンパスアプリ（Android iOS）",
            "src": "video/vrouc.mp4"
        },
        {
            "title": "VR交通安全教室",
            "id": "traffic",
            "link": "https://www.otaru-uc.ac.jp/event/6905/\nhttps://ryokkyu.or.jp/assets/pc/uploads/2019/04/310411ouc.pdf",
            "description": "小樽警察署の方から話をいただき，小樽市内の小学校で開催した交通安全教室用のVRゲーム",
            "src": "video/traffic-safety.mp4"
        },
        {
            "title": "World of Snowplows",
            "id": "wos",
            "link": "https://soukatsu-ouc.com/works/world-of-snowplows",
            "winLink": "https://drive.google.com/uc?export=download&id=1hhfjr1uou0-nmBCy9A4A2u8w99MK6h_R",
            "macLink": "https://drive.google.com/uc?export=download&id=1fzhQMfk3w19gnMlSBJAStppqHRO61R_H",
            "description": "2泊3日の合宿で作った除雪ゲーム。",
            "src": "video/wos.mp4"
        },
        {
            "title": "Cube Simulator",
            "id": "cube",
            "winLink": "https://drive.google.com/uc?export=download&id=1h94-PIjKp1bC-OQPvUmEXjj3qtVnq0qi",
            "description": "Unityで初めて作ったゲーム。バグ多め。",
            "src": "video/cubesimulator.mp4"
        }
    ];

const videos =[
    {
        "title": "商大生のための時間割 PV",
        "description": "商大生のための時間割（開発したWebアプリ）のPV",
        "id": "timetable-pv",
        "youtube": "https://www.youtube.com/embed/6us6d1F4Suo",
    },
    {
        "title": "OUC Navi PV",
        "description": "OUC Navi（ゼミで運用しているWebサービス）のPV",
        "id": "navi-pv",
        "youtube": "https://www.youtube.com/embed/dqm91vwLMa8",
    },
    {
        "title": "VROUC PV",
        "description": "バーチャルオープンキャンパスのPV",
        "id": "vr-pv",
        "youtube": "https://www.youtube.com/embed/J2YwOo44aFg",
    },
    {
        "title": "高校時代の動画その2",
        "description": "高校時代に作った動画その2",
        "src": "video/beam.mp4",
        "id": "beam",
    },
    {
        "title": "高校時代の動画その1",
        "description": "高校時代に作った動画その1",
        "src": "video/battle.mp4",
        "id": "gun",
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