jQuery(function () {
  new Splide(".splide", {
    autoplay: true,
    interval: 5000,
    speed: 500,
    pauseOnFocus: false,
    autoheight: "true",
    type: "loop",
    heifht: "1029px",
    drag: "free",
    snap: true,
  }).mount();
});
