//hovering on the dropdown elements

$(document).ready(function () {
  $(".account .fa-user, .account #account").hover(
    function () {
      $(this).css("color", "#4d4d4d");
    },
    function () {
      $(this).css("color", "white");
    }
  );
});

$(".events").hover(
  function () {
    $(this).css("color", "#4d4d4d");
  },
  function () {
    $(this).css("color", "white");
  }
);


 //making the dropdwon menu appear and disppear when u click on the bars
$("#bars").css("cursor", "pointer");

$("#bars").click(function () {
    $(".dropdown-content").css("display", "inline-block"); 
});


const $menu = $('.dropdown-content');

$(document).mouseup(e => {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
 && $menu.has(e.target).length === 0) // ... nor a descendant of the container ***
    {
        $menu.hide();
   }
  });




