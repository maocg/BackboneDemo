$.template('subscription', ['{{each items}}',
    '<li id="sub-${$value.id}">',
        '<div class="sub-item">',
            '<img src="${$value.icon}">',
            '<div class="sub-header">',
                '<div class="sub-title">${$value.title}</div>',
                '<div class="sub-url">${$value.url}</div>',
            '</div>',
        '</div>',
        '<div class="sub-status{{if subscribed}} check{{/if}}"></div>',
    '</li>',
'{{/each}}'].join(''));

var url = "api/list.html";

function expand() {
    var id = $(this).parent().attr('id').split('-')[1];
    var ol = $(this).next('ol.cate-list').slideDown(0);
    $(this).children('div.arrow').addClass('down');
	
	if (id && ol.children('li').length === 0) {

		$.ajax({
			url: url,
			//data: {id:id},
			dataType: 'json',
			success: function (data, status) {
				$.tmpl('subscription', data).appendTo(ol).each(function (i, li) {
					var check = $(this).children('div.sub-status').unbind('click');
					check.hasClass('check') ? check.toggle(unsubscribe, subscribe) : check.toggle(subscribe, unsubscribe);
				});

				//alert(data);
				//$("<li>me,keep foolish </li>").appendTo("ol.cate-list");
				//$(data).appendTo($(this).next('ol.cate-list'));
			},
			error: function (xhr, status, error) {
				alert("load fail:"+error);
        }
    });

	}
}

function collapse() {
    $(this).next('ol.cate-list').slideUp(0);
    $(this).children('div.arrow').removeClass('down');
}

function subscribe() {
	$this.addClass('check');
}

function collapse() {
    $(this).next('ol.cate-list').slideUp(0);
    $(this).children('div.arrow').removeClass('down');
}


function initialize() {
    $('div.cate-header').toggle(expand, collapse);
}

/** ≥ı ºªØ“≥√Ê */
$(document).ready(function () {
    initialize();
});