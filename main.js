let worksData;

$.ajax({
    url: './works.json',
    async: true,
    dataType: "json",
})
    // Ajaxリクエストが成功した時発動
    .done((data) => {
        worksData = data;
        // ゲーム部分のhtml展開
        for (let i = 0; i < worksData.game_apps.length; i++) {
            const title = worksData.game_apps[i].title;
            const image = worksData.game_apps[i].image;
            const description = worksData.game_apps[i].description;
            const link = worksData.game_apps[i].link;
            const winLink = worksData.game_apps[i].winLink;
            const macLink = worksData.game_apps[i].macLink;
            const id = worksData.game_apps[i].id;

            $('#game').append(
                $('<h3/>').text(title)
            ).append(
                $('<div>', {
                    class: 'row'
                }).append(
                    $('<div>', {
                        class: 'col-sm'
                    }).append(
                        $('<img>', {
                            src: image
                        })
                    )
                ).append(
                    $('<div>', {
                        class: 'col-sm description'
                    }).append(
                        $('<h4>', {
                            text: description
                        })
                    ).append(
                        $('<div>', {
                            class: 'links',
                            id: id
                        })
                    )
                )
            )
            if (link) {
                $('#' + id).append(
                    $('<h4>', {
                        class: 'mt-5',
                    }).append(
                        $('<a>', {
                            text: '公開ページ',
                            href: link
                        })
                    )
                )
            }
            if (winLink) {
                $('#' + id).append(
                    $('<h4>', {
                        class: 'mt-5',
                    }).append(
                        $('<a>', {
                            text: 'Windows',
                            href: winLink
                        })
                    )
                )
            }
            if (macLink) {
                $('#' + id).append(
                    $('<h4>', {
                        class: 'mt-5',
                    }).append(
                        $('<a>', {
                            text: 'Mac',
                            href: macLink
                        })
                    )
                )
            }
        }
        // 動画部分の追加
        for (let i = 0; i < worksData.movie.length; i++) {
            const title = worksData.movie[i].title;
            const description = worksData.movie[i].description;
            const image = worksData.movie[i].image;
            const id = worksData.movie[i].id;
            const youtube = worksData.movie[i].youtube;

            $('#movie').append(
                $('<h3/>').text(title)
            ).append(
                $('<div>', {
                    class: 'row'
                }).append(
                    $('<div>', {
                        class: 'col-sm image-wrap',
                        id: id
                    })
                ).append(
                    $('<div>', {
                        class: 'col-sm description'
                    }).append(
                        $('<h4>', {
                            text: description
                        })
                    )
                )
            )
            if (image) {
                $('#' + id).append(
                    $('<img>', {
                        src: image
                    })
                );
            }
            if(youtube){
                $('#' + id).append(youtube);
                $('iframe').css('height',$('iframe').width()*9/16);
            }
        }
    })
    // Ajaxリクエストが失敗した時発動
    .fail((data) => {
        console.log('error')
    });