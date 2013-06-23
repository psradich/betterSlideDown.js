## Better Slide Down jQuery Plugin

The slideDown function in jQuery provides an nice easy way to slide content into view. However I always hated the way it really adjust the height of the element instead of sliding the elemant into view. This plugin dynamicly addes a wrapper around the element and animates the top value to slide the element with no clipping. 

Demo: http://codepen.io/psradich/full/dcCKy

### Usage

Down
$('.slide').betterSlideDown(speed);

Up
$('.slide').betterSlideUp(speed);
