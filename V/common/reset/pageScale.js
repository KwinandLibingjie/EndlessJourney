/**
 * 类 flexible 移动端适配方案，1rem = 100 设计稿 px
 * 1）pageScale.js 实现 设计稿宽度/100 rem = 理想视口宽度
 * 2）gulp-px2rem-plugin plugin 进行 px -> rem 的编译转换
 */
((function (win, doc) {
    var dpr = devicePixelRatio === 4 ? 1 : devicePixelRatio
    var docEl = doc.documentElement
    var delay = 300                       // 延迟执行 rem 刷新至 DOM 结构稳定后执行
    var maxWidth = 540                    // 最大宽度限制，针对 pad 和 pc
    var designScale = 640 / 100           // 视口宽度的 rem 值
    var rootFontSize = parseFloat(getComputedStyle(docEl).fontSize)
    var refreshRem = function () {
        var width = docEl.clientWidth

        if (width / dpr > maxWidth) {
            width = maxWidth
        }

        /**
         * 1. 欲使 (设计稿宽度/100) rem = 理想视口宽度 = width，所以 1 rem = width / (设计稿宽度/100) = width / designScale
         * 2. 如果使用 px 单位，页面字体大小会随系统字体大小缩放，而页面字体缩放会破坏布局，故采用与 rootFontSize 的百分比来避免这个问题
         */
        docEl.style.fontSize = width / designScale / rootFontSize * 100 + '%'
    }

    docEl.dataset.dpr = dpr

    win.addEventListener('resize', function () { setTimeout(refreshRem, delay) })

    win.addEventListener('pageshow', function () { setTimeout(refreshRem, delay) })

    win.addEventListener('DOMContentLoaded', function (e) {
        var body = doc.getElementsByTagName('body')[0]

        body.style.margin = '0 auto'
        body.style.maxWidth = designScale + 'rem'

        refreshRem()
    })

    refreshRem()
})(window, document))
