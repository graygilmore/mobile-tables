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

        var applyStyles = function() {
            var tableStyles = ".column-title { font-weight: 700; width: 114px; padding-right: 23px; display: none; }";
            tableStyles += " .mobile-layout .column-title { display: -moz-inline-stack; display: inline-block; vertical-align: middle; zoom: 1; }";
            tableStyles += " .mobile-layout thead { display: none; }";
            tableStyles += " .mobile-layout tr td { width: 100%; display: block; text-align: left; }";
            tableStyles += " .mobile-layout tr:nth-child(even) td { background: #ddd; }";

            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet){
                style.styleSheet.cssText = tableStyles;
            } else {
                style.appendChild(document.createTextNode(tableStyles));
            }

            head.appendChild(style);
        };
        if( !$("style:contains('.mobile-layout')").length ) { applyStyles(); }

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