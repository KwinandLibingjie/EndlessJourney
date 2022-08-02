$(function () {
  //进入论坛
  $(function () {
    $('.ltLink').click(function () {
      window.location.href = 'migamecenter://circle_info_act?id=151945'
    })
  })
  //活动规则
  $(function () {
    $('.rule').click(function () {
      $('.rulesDia').show()
    })
    $('.ruleClose').click(function () {
      $('.rulesDia').hide()
    })
  })
  //英雄swiper
  $(function () {
    var swiper = new Swiper('#swiper', {
      clickable: true,
      autoplay: true,
      loop: true,
    })

    $('.swiper-pagination').on('click', 'div', function () {
      var index = $(this).index()
      swiper.slideTo(index, 0, false)
    })
  })
  //精彩视频
  $(function () {
    $('.play').click(function () {
      $('.videoDia').html(
        '<div class="videoBox diaBox"><div class="videoClose diaClose"><i class="close1 close"></i><i class="close2 close"></i></div><video class="video" autoplay controls="controls" src="img/EndlessJourney.mp4?jv=1.0.20220624"></video></div>'
      )
      $('.videoDia').show()
    })
    $(document).on('click', '.videoClose', function () {
      $('.videoDia').hide()
      $('.videoDia').html('')
    })
  })
  //S级任务
  $(function () {
    $('.sActivity').click(function () {
      window.location.href = 'migamecenter://openurl/https://game.xiaomi.com/viewpoint/1438278677_1656071736864_14'
    })
  })
})
