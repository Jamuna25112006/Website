// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});
var filterbtns=$('..filter-button-group').find('button');
function resetilterBtns(){
    filterbtns.each(function(){
        $(this).removeClass('active-filter-btn');
    })
}