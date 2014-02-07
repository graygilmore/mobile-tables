mobile-tables
=============

A simple jQuery plugin for better tables on mobile devices.

## Usage

Super simple:

    $('table').mobileTable();
    $(window).resize(function() {
      $('table')mobileTable();
    });

TODO: Move resize functionality directly into the plugin.

Feel free to be specific:

    $('.special-table').mobileTable();

And add your own breakpoint:

    var args = {
      breakpoint: 500 // default is 720
    };

    $('table').mobileTable(args);

## Demo

A demo is available on [CodePen](http://codepen.io/graygilmore/full/EnuoL).