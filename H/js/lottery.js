$(function () {
  //抽奖
  var click = false
  var price = [
    'HUAWEI FreeBuds 4E',
    '华为 nova 9',
    '华为AI音响',
    '京东卡500',
    '京东卡100',
    '京东卡50',
    '远征大礼包',
    '7',
  ]
  var luck = {
    index: -1,
    count: 7,
    timer: 0,
    speed: 20,
    times: 0,
    cycle: 10,
    prize: -1,
    init: function (id) {
      if ($('#' + id).find('.luck-unit').length > 0) {
        $luck = $('#' + id)
        $units = $luck.find('.luck-unit')
        this.obj = $luck
        this.count = $units.length
        $luck.find('.luck-unit-' + this.index).addClass('active')
      }
    },
    roll: function () {
      var index = this.index
      var count = this.count
      var luck = this.obj
      $(luck)
        .find('.luck-unit-' + index)
        .removeClass('active')
      index += 1
      if (index > count - 1) {
        index = 0
      }
      $(luck)
        .find('.luck-unit-' + index)
        .addClass('active')
      this.index = index
      return false
    },
    stop: function (index) {
      this.prize = index
      return false
    },
  }

  luck.init('J_lottery')
  function roll() {
    luck.times += 1
    luck.roll()
    if (luck.times > luck.cycle + 10 && luck.prize == luck.index) {
      clearTimeout(luck.timer)
      luck.times = 0
      setTimeout(function () {
        $('#J_cj').removeClass('cj_btn_dom')
        $('.luck-unit').removeClass('active')
        $('.haveLotteryDetail').html(luck.prize == 7 ? '太可惜了，竟然与奖品擦肩而过' : '恭喜获得' + price[luck.prize])
        $('.haveLotteryDia').show()
        luck.prize = -1
      }, 200)
      click = false
    } else {
      if (luck.times < luck.cycle) {
        luck.speed -= 10
      } else if (luck.times == luck.cycle) {
        var index = (Math.random() * luck.count) | 0
        luck.prize = index
      } else {
        if (luck.times > luck.cycle + 10 && ((luck.prize == 0 && luck.index == 7) || luck.prize == luck.index + 1)) {
          luck.speed += 110
        } else {
          luck.speed += 20
        }
      }
      if (luck.speed < 40) {
        luck.speed = 40
      }
      luck.timer = setTimeout(roll, luck.speed)
    }
    return false
  }

  var kind = '2'
  //点击抽奖按钮
  $('#J_cj').on('click', function () {
    if (kind == '0') {
      $('.noPreDia').show()
    } else if (kind == '1') {
      $('.haveLotteryDetail').html('已参与过活动，敬请关注论坛，参与更多有奖活动')
      $('.haveLotteryDia').show()
    } else {
      $(this).addClass('cj_btn_dom')
      if (click) {
        return false
      } else {
        luck.speed = 100
        roll()
        click = true
        return false
      }
    }
  })
})
