(function () {
/** 调试工具 */
var debug = $([
    '<div id="debug" style="position: fixed; top: 200px; right: 5px;',
    'z-index: 10000; background: rgba(255, 255, 249, 0.9);',
    'font-size: 8px; padding: 5px; visibility: hidden;"></div>'
].join('')).appendTo(document.body);

window.log = function (o) {
    debug.css('visibility', 'visible');
    var html = debug.html();
    html += html ? '<br>' : '';
    debug.html(html + String(o));
};

window.dir = function (o, isDeep) {
    debug.css('visibility', 'visible');
    var html = debug.html();
    for (var i in o) {
        if (isDeep || o.hasOwnProperty(i)) {
            html += (html ? '<br>' : '') + i;
        }
        
    }
    debug.html(html);
};

})();