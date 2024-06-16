/**
 * @typedef {Object} Link
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef {Object} Work
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {Array<Link>} links
 * 
 */

/**
 * @type {Array<Work>}
 */
export const webWorks = [
  {
    "title": "技育祭おまとめさん",
    "description": "技育祭2021用に制作した、講演毎のTweetがまとめて見られるサイト",
    "image": "image/geek.png",
    "links": [
      {
        "name": "link",
        "url": "https://twist-geek.herokuapp.com/"
      }
    ]
  },
  {
    "title": "miteru",
    "description": "研究用に制作した、マウスポインタを疑似的な視線情報として伝達可能な通話アプリ",
    "image": "image/miteru.png",
    "links": [
      {
        "name": "link",
        "url": "https://hai-conference.net/symp2021/proceedings/html/paper/paper-G-14.html"
      }
    ]
  },
  {
    "title": "レポートヘルパーくん",
    "description": "ハッカソンで制作した、レポート制作を手助けするためのLINE Bot",
    "image": "image/reporthelper.png",
    "links": [
      {
        "name": "link",
        "url": "https://docs.google.com/presentation/d/1jjgLMoTBOnfpMXzCpWOdQFDWL1zCv4ImsTzcHEIBnxg/edit?usp=sharing"
      }
    ]
  },
  {
    "title": "2020年捏造アルバム",
    "description": "ハッカソンで制作した、2020年の思い出を捏造するためのLINE Bot",
    "image": "image/netsuzou.png",
    "links": [
      {
        "name": "link",
        "url": "https://docs.google.com/presentation/d/1q7cGQsjMIVmUa4fTp6Tsoesxqsl6d2PvKTfkkEJkLuQ/edit?usp=sharing"
      }
    ]
  },
  {
    "title": "バーチャル廊下",
    "description": "ハッカソンで制作した、オンラインで廊下での雑談を再現するためのWebアプリ",
    "image": "image/vrouka.png",
    "links": [
      {
        "name": "link",
        "url": "https://docs.google.com/presentation/d/1jnR8nWh144R6d2Kw8l5GVfkhvoxceX7ROf1P629aM7U/edit?usp=sharing"
      }
    ]
  },
  {
    "title": "Family-Request",
    "description": "ハッカソンで制作した、家族間のコミュニケーションを円滑にするためのWebアプリ",
    "image": "image/familyreq.png",
    "links": [
      {
        "name": "link",
        "url": "https://docs.google.com/presentation/d/11xrRzxVsF73Xlss_zw2qgAZZijWZxhxhmmwscX-VFHI/edit?usp=sharing"
      }
    ]
  },
  {
    "title": "WebAR花火（プラネタリウム）",
    "description": "ハッカソンで制作した、ARで花火を見ようとしてプラネタリウムになってしまったWebアプリ",
    "image": "image/arhanabi.png",
    "links": [
      {
        "name": "link",
        "url": "https://docs.google.com/presentation/d/1ZSYd9yZHoEvpZM3kmWDHit4_2IkMvJrv9lHZ9pP22k4/edit?usp=sharing"
      }
    ]
  },
  {
    "title": "Playfests",
    "description": "ハッカソンで作成した、YouTubeのプレイリストをみんなで作ってみんなで楽しむWebアプリ",
    "image": "image/playfests.png",
    "links": [
      {
        "name": "link",
        "url": "https://docs.google.com/presentation/d/1gBVFKUtO-l81_kU53hmNzSqoDvV3EELNoP73dyCM-ZE/edit?usp=sharing"
      }
    ]
  },
  {
    "title": "ShodaiManabaHighlight",
    "description": "商大のmanaba用のChrome拡張",
    "image": "image/manaba.png",
    "links": [
      {
        "name": "link",
        "url": "https://soukatsu-ouc.com/works/494"
      }
    ]
  },
  {
    "title": "商大生のための時間割",
    "description": "小樽商科大学の生徒向けの時間割Webアプリ（北海道学生アプリコンテスト経済産業局長賞受賞）",
    "image": "video/timetable.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://timetable.417.works/"
      },
      {
        "name": "article",
        "url": "https://www.otaru-uc.ac.jp/news/141122/"
      }
    ]
  },
  {
    "title": "safARi pARk",
    "description": "JPHACKS2019にて製作したWebARアプリ．北海道会場のBest Hack Day Award受賞．",
    "image": "video/jphacks.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://github.com/jphacks/SP_1907"
      },
      {
        "name": "article",
        "url": "https://www.otaru-uc.ac.jp/news/19263/"
      }
    ]
  },
  {
    "title": "抽選アプリ",
    "description": "高校のイベント用に作った抽選Webアプリ",
    "image": "video/lottery.mp4",
    "links": [
      {
        "name": "article",
        "url": "https://www.city.shizuoka.lg.jp/000835144.pdf"
      }
    ]
  },
  {
    "title": "スタンプラリー",
    "description": "高校のイベント用に作ったQRコードを使用したスタンプラリーWebアプリ",
    "image": "video/stamp-rally.mp4",
    "links": [
      {
        "name": "article",
        "url": "https://www.city.shizuoka.lg.jp/000835144.pdf"
      }
    ]
  }
];

/**
 * @type {Array<Work>}
 */
export const gameWorks = [
  {
    "title": "デコリヤドカリ",
    "description": "GGJ2021で制作した3D宝探し（？）ゲーム",
    "image": "video/yadokari.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://soukatsu-ouc.com/works/%e3%83%87%e3%82%b3%e3%83%aa%e3%83%a4%e3%83%89%e3%82%ab%e3%83%aa"
      },
      {
        "name": "win",
        "url": "https://github.com/himantyu-yuma/ggj-yadokari/releases/download/v0.5-alpha/win.zip"
      },
      {
        "name": "mac",
        "url": "https://github.com/himantyu-yuma/ggj-yadokari/releases/download/v0.5-alpha/mac.zip"
      },
      {
        "name": "video",
        "url": "video/yadokari.mp4"
      }
    ]
  },
  {
    "title": "扉開けて",
    "description": "unity1week「あける」で制作したゲーム",
    "image": "video/dooropen.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://unityroom.com/games/door-open"
      },
      {
        "name": "video",
        "url": "video/dooropen.mp4"
      }
    ]
  },
  {
    "title": "声 is パワー",
    "description": "声量を攻撃力や防御力にできたらおもしろいなと思って実験的に作ったゲーム",
    "image": "image/voicebattle.png",
    "links": [
      {
        "name": "link",
        "url": "https://soukatsu-ouc.com/works/%e5%a3%b0is%e3%83%91%e3%83%af%e3%83%bc"
      },
      {
        "name": "win",
        "url": "https://drive.google.com/file/d/1jyZ6zRWA514mF2fq0lNQDFmUibiIs7G5/view?usp=sharing&export=download"
      },
      {
        "name": "mac",
        "url": "https://drive.google.com/file/d/1z_s3DO1cg5wLfnTcwNI4TGuKJQIkPMB6/view?usp=sharing&export=download"
      }
    ]
  },
  {
    "title": "グルメペンギンの大冒険II -Delux Edition-",
    "description": "創作活動部の制作企画で作ったゲーム。複数ステージに分かれている。",
    "image": "video/penguin.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://soukatsu-ouc.com/works/%e3%82%b0%e3%83%ab%e3%83%a1%e3%83%9a%e3%83%b3%e3%82%ae%e3%83%b3%e3%81%ae%e5%a4%a7%e5%86%92%e9%99%baii-delux-edition"
      },
      {
        "name": "win",
        "url": "https://drive.google.com/file/d/1UPG8RS1Qtw_5A1sV0cGL_QUK91n-DBR-/view?usp=sharing"
      },
      {
        "name": "mac",
        "url": "https://drive.google.com/file/d/1b9zSezXHdb-h4e1BJuD1fLmrqWTBRppQ/view?usp=sharing"
      },
      {
        "name": "video",
        "url": "video/penguin.mp4"
      }
    ]
  },
  {
    "title": "もしも、普通の女子学生である私が美少女に愛を迫られる中で、そんなどころではない定期考査と学祭を両立させるとしたら？",
    "description": "ノベルゲーム制作をやってみようと思って作ったゲーム",
    "image": "video/novel.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://soukatsu-ouc.com/works/%e3%82%82%e3%81%97%e3%82%82%e3%80%81%e6%99%ae%e9%80%9a%e3%81%ae%e5%a5%b3%e5%ad%90%e5%ad%a6%e7%94%9f%e3%81%a7%e3%81%82%e3%82%8b%e7%a7%81%e3%81%8c%e7%be%8e%e5%b0%91%e5%a5%b3%e3%81%ab%e6%84%9b%e3%82%92"
      },
      {
        "name": "win",
        "url": "https://github.com/soukatsu-ouc-programmers/2020summer-novel/releases/download/v1.1/win.zip"
      },
      {
        "name": "video",
        "url": "video/novel.mp4"
      }
    ]
  },
  {
    "title": "Super Dangomushi",
    "description": "部内全体の制作企画の下調べとして作ったゲーム",
    "image": "video/dangomushi.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://soukatsu-ouc.com/works/super-dangomushi"
      },
      {
        "name": "win",
        "url": "https://drive.google.com/file/d/1wgzxQB0hQtnT-a3JGZX_Dg0eBudS_bMT/view?usp=sharing"
      },
      {
        "name": "mac",
        "url": "https://drive.google.com/file/d/1PW0evaLfHMKlsNhhYjZWuiFFylBCVbAA/view?usp=sharing"
      },
      {
        "name": "video",
        "url": "video/dangomushi.mp4"
      }
    ]
  },
  {
    "title": "vs3分間の賢者タイム",
    "description": "GGJ2020にて製作したゲーム",
    "image": "video/kenja.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://soukatsu-ouc.com/works/ggj2020-kenja"
      },
      {
        "name": "win",
        "url": "https://ggj.s3.amazonaws.com/games/2020/02/247027/exec/jOWQ8/v3.zip"
      },
      {
        "name": "video",
        "url": "video/kenja.mp4"
      }
    ]
  },
  {
    "title": "恐怖の館からの脱出（わくわく粗探しゲーム）",
    "description": "Unity1週間ゲームジャムで作ったゲーム",
    "image": "video/horror.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://unityroom.com/games/horrorff"
      },
      {
        "name": "video",
        "url": "video/horror.mp4"
      }
    ]
  },
  {
    "title": "箸子",
    "description": "北大のkawazさんと合同で作ったゲーム",
    "image": "video/chopstick.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://soukatsu-ouc.com/works/chopstick"
      },
      {
        "name": "win",
        "url": "https://drive.google.com/open?id=1hhA6zs_9KrQOBqfuLk7tF0PuZSQ2tS3k"
      },
      {
        "name": "video",
        "url": "video/chopstick.mp4"
      }
    ]
  },
  {
    "title": "バーチャルオープンキャンパス",
    "description": "小樽商科大学のバーチャルオープンキャンパスアプリ（Android iOS）",
    "image": "video/vrouc.mp4",
    "links": [
      {
        "name": "link",
        "url": "http://virtual-ouc.net/lp"
      },
      {
        "name": "video",
        "url": "video/vrouc.mp4"
      }
    ]
  },
  {
    "title": "VR交通安全教室",
    "description": "小樽警察署の方から話をいただき，小樽市内の小学校で開催した交通安全教室用のVRゲーム",
    "image": "video/traffic-safety.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://www.otaru-uc.ac.jp/event/6905/"
      },
      {
        "name": "video",
        "url": "video/traffic-safety.mp4"
      }
    ]
  },
  {
    "title": "World of Snowplows",
    "description": "2泊3日の合宿で作った除雪ゲーム。",
    "image": "video/wos.mp4",
    "links": [
      {
        "name": "link",
        "url": "https://soukatsu-ouc.com/works/world-of-snowplows"
      },
      {
        "name": "win",
        "url": "https://drive.google.com/uc?export=download&id=1hhfjr1uou0-nmBCy9A4A2u8w99MK6h_R"
      },
      {
        "name": "mac",
        "url": "https://drive.google.com/uc?export=download&id=1fzhQMfk3w19gnMlSBJAStppqHRO61R_H"
      },
      {
        "name": "video",
        "url": "video/wos.mp4"
      }
    ]
  },
  {
    "title": "Cube Simulator",
    "description": "Unityで初めて作ったゲーム。バグ多め。",
    "image": "video/cube-simulator.mp4",
    "links": [
      {
        "name": "win",
        "url": "https://drive.google.com/uc?export=download&id=1h94-PIjKp1bC-OQPvUmEXjj3qtVnq0qi"
      },
      {
        "name": "video",
        "url": "video/cube-simulator.mp4"
      }
    ]
  }
];

/**
 * @type {Array<Work>}
 */
export const videoWorks = [
  {
    "title": "NOI Channel",
    "description": "木村ゼミで運営しているVTuber「NOI」の動画（一部）",
    "image": "https://img.youtube.com/vi/hgdInNmzDKc/hqdefault.jpg",
    "links": [
      {
        "name": "youtube",
        "url": "https://www.youtube.com/embed/hgdInNmzDKc"
      }
    ]
  },
  {
    "title": "商大生のための時間割 PV",
    "description": "商大生のための時間割（開発したWebアプリ）のPV",
    "image": "https://img.youtube.com/vi/6us6d1F4Suo/hqdefault.jpg",
    "links": [
      {
        "name": "youtube",
        "url": "https://www.youtube.com/embed/6us6d1F4Suo"
      }
    ]
  },
  {
    "title": "OUC Navi PV",
    "description": "OUC Navi（ゼミで運用しているWebサービス）のPV",
    "image": "https://img.youtube.com/vi/dqm91vwLMa8/hqdefault.jpg",
    "links": [
      {
        "name": "youtube",
        "url": "https://www.youtube.com/embed/dqm91vwLMa8"
      }
    ]
  },
  {
    "title": "VROUC PV",
    "description": "バーチャルオープンキャンパスのPV",
    "image": "https://img.youtube.com/vi/J2YwOo44aFg/hqdefault.jpg",
    "links": [
      {
        "name": "youtube",
        "url": "https://www.youtube.com/embed/J2YwOo44aFg"
      }
    ]
  },
  {
    "title": "高校時代の動画その2",
    "description": "高校時代に作った動画その2",
    "image": "video/beam.mp4",
    "links": [
      {
        "name": "video",
        "url": "video/beam.mp4"
      }
    ]
  },
  {
    "title": "高校時代の動画その1",
    "description": "高校時代に作った動画その1",
    "image": "video/battle.mp4",
    "links": [
      {
        "name": "video",
        "url": "video/battle.mp4"
      }
    ]
  }
];
