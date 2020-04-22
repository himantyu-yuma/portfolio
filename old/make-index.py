# -*- coding: utf-8 -*-
import sys
import json
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# 第1引数を出力先のhtml名にする
out_html = sys.argv[1]
# 作品データの入っているjson
data = './works.json'
# 最初の部分のhtml
before_html = '''
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  <link rel="stylesheet" href="main.css">
  <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet">
  <title>PORTFOLIO</title>
  <!--[if IE]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>

    <![endif]-->
  <style>
    article,
    aside,
    dialog,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>PORTFOLIO</h1>
  </div>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-sm navbar-light">
      <a href="./index.html" class="navbar-brand menu">Home</a>
      <a href="#about" class="navbar-brand menu">About</a>
      <a href="#works" class="navbar-brand menu">Works</a>
      <a href="#" class="navbar-brand menu">Contact</a>
    </nav>
  </header>

  <div class="container about">
    <h2 class="sec-head" id="about">About</h2>
    <p>Name：<a href="https://github.com/himantyu-yuma">himantyu-yuma</a></p>
    <p>Twitter：<a href="https://twitter.com/k_y_kenzen">@k_y_kenzen</a></p>
    <p>Facebook：<a href="https://www.facebook.com/himantyu.yuma">笠原 有真</a></p>
  </div>

  <div class="container works">
    <h2 class="sec-head" id="works">Works</h2>

    <h2>ゲーム・アプリ</h2>
    <section id="game">
'''
# 中間部分のhtml
middle_html = '''
    </section>

    <h2 class="mt-5">動画</h2>
    <section id="movie">
'''
# 最後の部分のhtml
after_html = '''
    </section>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
      integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
      crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
      integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
      crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="main.js"></script>
</body>

</html>
'''
game_section = ''
video_section = ''

# jsonデータを読み込んでデコード
with open(data, mode='r', encoding='utf-8') as f:
    works = json.loads(f.read())
for game in works['game_apps']:
    title = game['title']
    img_path = game['image']
    description = game['description']
    if 'link' in game:
        link = game['link']
        link_text = f'<h4 class="mt-5"><a href="{link}">紹介ページ</a></h4>'
    else:
        link_text = ''
    if 'winLink' in game:
        win_link = game['winLink']
        win_link_text = f'<h4 class="mt-5"><a href="{win_link}">Windows</a></h4>'
    else:
        win_link_text = ''
    if 'macLink' in game:
        mac_link = game['macLink']
        mac_link_text = f'<h4 class="mt-5"><a href="{mac_link}">Mac</a></h4>'
    else:
        mac_link_text = ''
    links = link_text+win_link_text+mac_link_text
    # ゲームの欄に入力するouterhtmlを記述
    game_section += f'''
    <h3>{title}</h3>
      <div class="row">
        <div class="col-sm">
          <img src="{img_path}">
        </div>
        <div class="col-sm description">
          <h4>{description}</h4>
          <div class="links">
            {links}
          </div>
        </div>
      </div>
  '''
for video in works['movie']:
    title = video['title']
    img_path = video['image']
    description = video['description']
    if 'youtube' in video:
        youtube = video['youtube']
        img_text = youtube
    else:
        img_text = f'<img src="{img_path}">'
    # ビデオの欄に入力するouterhtmlを記述
    video_section += f'''
    <h3>{title}</h3>
      <div class="row">
        <div class="col-sm">
          {img_text}
        </div>
        <div class="col-sm description">
          <h4>{description}</h4>
        </div>
      </div>
  '''
html = before_html+game_section+middle_html+video_section+after_html

with open(out_html, mode='w', encoding='utf-8') as f:
    f.write(html)
