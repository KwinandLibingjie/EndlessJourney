$(function () {
  var swiper = new Swiper('#swiper', {
    clickable: true,
    pagination: {
      el: '.pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        let paginationHtml = ''
        for (var i = 0; i < total; i++) {
          // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
          if (i == current - 1) {
            paginationHtml +=
              '<div class="swiper-pagination-customs swiper-pagination-customs-active"><img class="customsContent" src="img/' +
              'colorHero' +
              (i + 1) +
              '.png"></img></div>'
          } else {
            paginationHtml +=
              '<div class="swiper-pagination-customs"><img class="customsContent" src="img/' +
              'greyHero' +
              (i + 1) +
              '.png"></img></div>'
          }
        }
        return paginationHtml
      },
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // on: {
    //   slideChange: function () {
    //     debugger
    //     for (i = 1; i <= this.slides.length; i++) {
    //       if (i == this.activeIndex) {
    //         $('.swiper-pagination-customs' + this.activeIndex).css('top', '-0.15rem')
    //       } else {
    //         $('.swiper-pagination-customs' + this.activeIndex).css('top', '0')
    //       }
    //     }
    //   },
    // },
  })

  $('.swiper-pagination').on('click', 'div', function () {
    var index = $(this).index()
    swiper.slideTo(index, 0, false)
  })
})
