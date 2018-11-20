$(document).ready(function(){
    $("div").scroll(function(){
        $("span").text( x+= 1);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  })

$(document).ready(function(){
    $('.collapsible').collapsible();
  });