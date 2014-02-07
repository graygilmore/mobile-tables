/*!
* Mobile Tables
*
* Copyright 2014, Gray Gilmore - http://blog.graygilmore.com
* Released under the MIT license
*
*/

(function( $ ){

    $.fn.mobileTable = function( options ) {

        var settings = {
            breakpoint: 720
        };

        if ( options ) {
          $.extend( settings, options );
        }

        return this.each( function () {

            var table = $(this);

            if ( window.innerWidth < settings.breakpoint ) {

                if( table.hasClass('titles-ready') ) {
                    table.addClass('mobile-layout');
                    return
                }

                table.addClass('mobile-layout titles-ready');

                table.find('thead th').each( function (i) {
                    var columnTitle = $(this).text();
                    table.find('tr td:nth-child('+(i+1)+')').prepend('<span class="column-title">'+columnTitle+'</span>');
                });

            } else {

                table.removeClass('mobile-layout');

            }
        });
    };

})( jQuery );