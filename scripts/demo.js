//扩展 jQuery 元素集来提供新的方法（通常用来制作插件）
jQuery.fn.extend({
  setReadOnly: function(readonly) {
	return this.find('input:text').attr('readonly', readonly).css('opacity', readonly ? 0.5 : 1.0);
  },
  check: function() {
    return this.each(function() { this.checked = true; });
  },
  uncheck: function() {
    return this.each(function() { this.checked = false; });
  },
  alertWhileClick:function(){
	$(this).click(function(){
		alert($(this).val());
	});
  } 
});

//另一种写法
$.fn.setReadOnly2 = function(readonly) {
	return this.find('input:text').attr('readonly', readonly).css('opacity', readonly ? 0.5 : 1.0);
};

//扩展jQuery对象本身,用来在jQuery命名空间上增加新函数
jQuery.extend({
  min: function(a, b) { return a < b ? a : b; },
  max: function(a, b) { return a > b ? a : b; }
});


/** 获取当前 Channel参数 */
function getChannel() {
    var hashMatches = /\Wchannel_id=(\d+)/.exec(window.location.search);
    if ((hashMatches || 0).length === 2) {
        return hashMatches[1];
    }
}

//init
$(document).ready(function()
{
	//click
	var msg = $("#msg").text();
	$('#msg').bind('click', function() 
	{
	  //$("#msg").append($(this).text());
	});

	$("#Text1").alertWhileClick(); 

	//compare
	var num = $.min(2,3);
	$("#msg").append(num);

	//select
	$('#InvoiceRequired').click(function() {
		$('.InvoiceInfo').setReadOnly(!this.checked);
	});
	$('.InvoiceInfo').setReadOnly(false);
});

