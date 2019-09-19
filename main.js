let worksData;

$.ajax({
    url: './works.json',
    async: true,
    dataType: "json",
})
    // Ajaxリクエストが成功した時発動
    .done((data) => {
        worksData = data;
        $('#game').append(
            $('<h3/>').append('<a>', {
                text: worksData.game_apps[0].title
            }).append(
                    $('<p>').text(data.description)
                ).append(
                    $('<div>', {
                        class: 'row'
                    })
                )
        )
    })
    // Ajaxリクエストが失敗した時発動
    .fail((data) => {
        console.log('error')
    });