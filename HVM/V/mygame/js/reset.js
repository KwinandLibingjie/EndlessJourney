$(function () {
  ;(function (win, doc) {
    console.log('win', win)
    console.log('doc', doc)
    var maxWidth = 540
    if (!win.addEventListener) return
    function setFont() {
      var html = document.documentElement
      var k = 750
      if (html.clientWidth > maxWidth) {
        html.style.fontSize = (maxWidth / 750) * 100 + 'px'
      } else {
        html.style.fontSize = (html.clientWidth / k) * 100 + 'px'
      }
    }
    win.addEventListener(
      'DOMContentLoaded',
      function (e) {
        setTimeout(function () {
          var body = doc.getElementsByTagName('body')[0]

          body.style.margin = '0 auto'
          body.style.maxWidth = maxWidth + 'px'
          setFont
        }, 300)
      },
      false
    )
    win.addEventListener(
      'resize',
      function () {
        setTimeout(setFont, 300)
      },
      false
    )
    win.addEventListener(
      'pageshow',
      function () {
        setTimeout(setFont, 300)
      },
      false
    )
    win.addEventListener(
      'load',
      function () {
        setTimeout(setFont, 300)
      },
      false
    )
    setFont()
    setTimeout(function () {
      setFont()
    }, 300)
  })(window, document)

  window.addEventListener(
    'load',
    function () {
      setTimeout(hideURLbar, 0)
    },
    false
  )
  function hideURLbar() {
    window.scrollTo(0, 1)
  }
})
