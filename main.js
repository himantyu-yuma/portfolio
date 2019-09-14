let worksData;

$.ajax({
    url:'./works.json',
    async: true,
    type:'POST',
    dataType: "json",
})
// Ajaxリクエストが成功した時発動
.done( (data) => {
    worksData = data;

})
// Ajaxリクエストが失敗した時発動
.fail( (data) => {
    console.log('error')
})

$(function(){
    $('#game').append(
        $('<h3>',{
            text: worksData.game_apps[0].title
        })
    )
})