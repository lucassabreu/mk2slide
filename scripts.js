$(function() {
    $('.fit')
        .css('flex-grow', 4)
        .each((i, e) => maxFontSizeToFit(e))
        .css('flex-grow', '');
});

function maxFontSizeToFit(element) {
    var fitContent = $('<span />').html($(element).html());
    $(element).html('');
    var expectedHeight = $(element).height();
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
    $(element).html(fitContent.html());
}

