const $form = $(".form");
// const $form = $(document.querySelector(".form"));
// document.querySelector(".form");
console.log($form);

const $inputs = $(".form input");
console.log($inputs.eq(0).hasClass("name-input"));

$inputs.eq(0).prop("data-id", 1);
console.log($inputs.eq(0).prop("data-id"));

setTimeout(() => {
  $(".btn").css({
    color: "black",
    width: "300px",
    "background-color": "green",
  });
}, 1000);

// console.log($inputs.eq(0).height());
// console.log($inputs.eq(0).innerHeight());
// console.log($inputs.eq(0).outerHeight());
// console.log($inputs.eq(1).offset());
// console.log($inputs.eq(0).position());
// console.log($inputs.eq(0).scrollTop());

// console.log($form.html("<p>oooops</p>"));

$form.find(".name-input").on("change", function (event) {
  console.log($(this).val());
});

const $window = $(window);

let isModalShowed = false;

let previousWidth = $window.width();

const debouncedResize = _.debounce(function () {
  const currentWidth = $window.width();

  if (previousWidth - currentWidth > 0) {
    console.log("Smaller!");
  } else {
    console.log("Bigger");
  }
  previousWidth = currentWidth;

  if (!isModalShowed && $window.width() <= 768) {
    isModalShowed = true;
    alert("Window is mobile!");
  }
}, 1000);

$window.on("resize", debouncedResize);

// | 1 = 2 = 3 = = = 5 = = 10 |

$(".btn--custom").on("click", function () {
  // $form.find(".name-input").trigger("change");
  $inputs.toggle();
});

const soneobj = $(".name-input");
soneobj.on("customEvent", function () {
  console.log("customEvent fired!!");
});

soneobj.trigger("customEvent");

$(window).ready(function () {
  $(".sliderWrapper").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
