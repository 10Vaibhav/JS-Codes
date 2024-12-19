//                      $ <-----> JQuery
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// $(document).ready(()=>{
//     $("h1").css("color","red");
// })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Manipulating Elements and Styles with JQuery

// $("h1").css("color", "red");
// $("h1").addClass("big-title margin_50");
// $("h1").removeClass("big-title");

// console.log($("h1").hasClass("margin_50"));

// $("button");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Manipulating Text with JQuery

// $("h1").text("Bye");

// $("button").text("Don't Click Me");

// $("button").html("<em>Hey</em>");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Manipulating Attributes with JQuery

// getting the value of the attribute
// console.log($("img").attr("src"))

// setting the value of the attribute
// $(a).attr("href", "https://www.yahoo.com")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Adding Event listener to JQuery

// $("h1").click(function(){
//     $("h1").css("color","purple");
// })

// $("button").click(function(){
//     $("h1").css("color","purple")
// })


// $("input").keydown(function(e){
//     console.log(e.key);
// })


// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple");
// })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Adding and Removing Elements with JQuery

// $("h1").before("<button>New</button>")

// $("h1").after("<button>New</button>")

// $("h1").prepend("<button>New</button>")

// $("h1").append("<button>New</button>")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Website Animations with JQuery

// Hide
// $("button").on("click", function(){
//     $("h1").hide();
// })
// $("h1").show()

//Toggle
// $("button").on("click", function(){
//     $("h1").toggle();
// })

//Fading
// $("button").on("click", function(){
//     $("h1").fadeOut();
// })
// $("h1").fadeIn();

//Sliding
// $("button").on("click", function(){
//     $("h1").slideUp();
// })

// $("button").on("click", function(){
//     $("h1").slideToggle();
// })

//Custom Animation
// here you can animate on numeric values only.

// $("button").on("click", function(){
//     $("h1").animate({opacity:0.5});
// })

// For Having More than one Animation.
$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})