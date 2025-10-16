$(document).ready(function () {
  console.log("check");
  $(document).mousemove(function (e) {
    $("#status").html(e.pageX + ", " + e.pageY);

    $(".box").css("width", e.pageX);
    $(".box").css("height", e.pageY);
  });
});

// $(document).ready(function () {
//   console.log("제이쿼리 로드 완료");

//   //class 이름 box-btn을 클릭했을 때, .box의 background-color를 pink로 바꿔라.
//   //그리고 두번째 버튼을 클릭했을 때, .box의 background-color를 다시 blue로 바꿔라.
//   //  $(".box-btn").on("click", funtion () {
//   //    $(".box"). addclass("clicked");

//   //  });
//   //});

//   $(".box-btn").on("click", function () {
//     $(".box").toggleclass("clicked");
//   });
//   var button_clicked = false;

//   $(".box-btn").on("click", function () {
//     if (button_clicked == false) {
//       $(".box").addclass("clicked");
//       button_clicked = true;
//     } else {
//       $(".box").removeclass("clicked");
//       button_clicked = false;
//     }
//   });
//   $(".cat_img").on("mouseneter", function () {
//     $(".cat_img").attr("src", "asset/웹프로그래밍/cat1.png");
//   });

//   $(".cat_img").on("mouseneter", function () {
//     $(".cat_img").attr("src", "asset/웹프로그래밍/cat2.png");
//   });
// });

//class명이 box로 할당된 요소들의 css 속성을 변화시켜라. 혹은 적용해라.
//  $(".box").css("width", "100px");
//  $(".box").css("height", "100px");
//  $(".box").css("background-color", "blue");
//  $(".box").css("border-radius", "16px");
//  $(".box").css("text-align", "center");
//  $(".box").css("margin", "40px");
// $(".box").css("color", "white");

// var a = $(".box");

//  $("a").css("width", "100px");
//  $("a").css("height", "100px");
//  $("a").css("background-color", "blue");
//  $("a").css("border-radius", "16px");
//  $("a").css("text-align", "center");
//  $("a").css("margin", "40px");
//  $("a").css("color", "white");

//  console.log(a);

//  $(".box-btn").on("click",function(){
//    $(".box").css("background-color", "yellow");
//  });

//  $(".box").on("mouseneter", function(){
//    $(".box").css("border-radius", "24px");
//  })

//  $(".box").on("mouseleave", function(){
//    $(".box").css("border-radius", "8px");
//  })
//});
