$(function () {
  $('.rule').click(function () {
    $('.rulesDia').show()
  })
  $('.ruleClose').click(function () {
    $('.rulesDia').hide()
  })
  $('.play').click(function () {
    $('.videoDia').html(
      '<div class="videoBox diaBox"><div class="videoClose diaClose"><i class="close1 close"></i><i class="close2 close"></i></div><video class="video" autoplay controls="controls" src="img/EndlessJourney.mp4"></video></div>'
    )
    $('.videoDia').show()
  })
  $(document).on('click', '.videoClose', function () {
    $('.videoDia').hide()
    $('.videoDia').html('')
  })
  $('.noPreClose').click(function () {
    $('.noPreDia').hide()
  })
  $('.havePreClose').click(function () {
    $('.havePreDia').hide()
  })
  $('.haveLotteryClose').click(function () {
    $('.haveLotteryDia').hide()
  })
})
