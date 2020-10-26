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

const $menu = $(".dropdown-content");

$(document).mouseup((e) => {
  if (
    !$menu.is(e.target) && // if the target of the click isn't the container...
    $menu.has(e.target).length === 0
  ) {
    // ... nor a descendant of the container ***
    $menu.hide();
  }
});

//for words3  line line 2 :margin-left:75px

//var clickedPrev;

// function replacement() {
//   $("#all-words:visible").hide(this);
//   $(".words1").show();
//   //for words that come directly after words(that are firtst)
//   //$("words2").removeClass(".line line1").replaceWith(".line line2");
//   $(".learn-more").css("top", "404px");
// }

// // if (clickedPrev == null)
// $(".box1").click(replacement);

//replace words
var word_num = {
  box1: 1,
  box2: 2,
  box3: 3,
  box4: 4,
  box5: 5,
  box6: 6,
  box7: 7,
};

$(document).ready(function () {
  var status;

  $(".box").click(function () {
    status = $(this).attr("id");
  });

  $(document).ready(function () {
    $(".box").click(function () {
      $("#all-words:visible").hide(1800);
      $(".words" + word_num[status]).show();
    });
  });
});

// $(document).ready(function () {
//   $(".box").click(function () {
//     $("#all-words:visible").attr("class");
//   });
// });

// $(document).ready(function () {
//   $(".box1").click({
//     $(".box1").animate({ width: '400px' }, "slow");
//   });
//   $(".box1 img").animate({ height: '500px' }, "slow");
// });

// $(".box1").click(return_clicked(clickedPrev));
// alert(clickedPrev);

// function return_clicked(clicked) {
//   clicked = $(this).attr("class");
//   console.log(clicked);
// }

// $(".box2").click(function (event) {
//   var status = $(this).attr("id");
//   alert(status);
// });

// $(".box3").click(function (event) {
//   var status = $(this).attr("id");
//   alert(status);
// });

// $(".box4").click(function (event) {
//   var status = $(this).attr("id");
//   alert(status);
// });

// $(".box5").click(function (event) {
//   var status = $(this).attr("id");
//   alert(status);
// });

// $(".box6").click(function (event) {
//   var status = $(this).attr("id");
//   alert(status);
// });

// $(".box7").click(function (event) {
//   var status = $(this).attr("id");
//   alert(status);
// });
