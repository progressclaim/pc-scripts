console.log('hacked!');
jQuery(document).ready(function ($) {
  console.log($('p.submit input').val());
  $('p.submit input').val("GO!!!");
});
