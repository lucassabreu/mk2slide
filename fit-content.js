// copied from https://stackoverflow.com/questions/35960419/how-can-i-auto-shrink-text-to-fit-div-width-and-height-using-javascript
$(function() {
    $('.fit-text').each(function() {
        var fitTextContent = $('<span />');
        fitTextContent.html($(this).html());
        $(this).html('').append(fitTextContent);
        // Fit height
        var fitHeight = parseInt($(this).height());
        if (fitTextContent.height() > fitHeight) {
            var c = 0;
            while (fitTextContent.height() > fitHeight) {
                var fontSize = parseInt($(this).css('font-size'));
                fontSize = fontSize - 1 + "px";
                $(this).css('font-size', fontSize);
                c++;
                if (c > 999) {
                    $(this).css('background', 'red');
                    break;
                }
            }
        }
        //// Fit width
        //var fitWidth = parseInt($(this).width());
        //var $div = $(this);
        //var c = 0;
        //var spanWidth = parseInt($(this).width());
        //while (fitWidth < spanWidth) {
        //    $div.find('span').each(function() {
        //        var fontSize = parseInt($(this).css('font-size'));
        //        fontSize = fontSize - 1 + "px";
        //        $(this).css('font-size', fontSize);
        //    });
        //    spanWidth = parseInt($(this).width());
        //    c++;
        //    if (c > 999) {
        //        $div.css('background', 'red');
        //        break;
        //    }
        //}
    });
});
