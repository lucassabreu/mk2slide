$('.fit')
    .css('flex-grow', 4)
    .each((i, e) => maxFontSizeToFit(e))
    .css('flex-grow', '');
$('section').each((i, element) => element.id = 'slide-' + i);

function maxFontSizeToFit(element) {
    var fitContent = $('<span />').html($(element).html());
    $(element).html('');
    var expectedHeight = $(element).height();
    var expectedWidth = $(element).width();
    $(element).append(fitContent);
    var ratio = 1;
    var compare = (diff) => diff < 0;
    if (fitContent.height() < expectedHeight) {
    	ratio = -1;
    	compare = (diff) => diff > 0;
    }
    var count = 0;
    while(compare(expectedHeight - fitContent.height())) {
    	var fontSize = parseInt($(element).css('font-size')) - ratio;
    	$(element).css('font-size', fontSize + 'px');
    	if ((++count) > 999) {
    		element.css('color', 'red');
    		break;
        }
    }
    while(expectedWidth < fitContent.width()) {
    	var fontSize = parseInt($(element).css('font-size')) - 1;
    	$(element).css('font-size', fontSize + 'px');
    }
    $(element).html(fitContent.html());
}

