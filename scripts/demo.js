//��չ jQuery Ԫ�ؼ����ṩ�µķ�����ͨ���������������
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

//��һ��д��
$.fn.setReadOnly2 = function(readonly) {
	return this.find('input:text').attr('readonly', readonly).css('opacity', readonly ? 0.5 : 1.0);
};

//��չjQuery������,������jQuery�����ռ��������º���
jQuery.extend({
  min: function(a, b) { return a < b ? a : b; },
  max: function(a, b) { return a > b ? a : b; }
});


/** ��ȡ��ǰ Channel���� */
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

