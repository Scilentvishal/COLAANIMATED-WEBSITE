var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: "true",
    markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "8%",
  },
  "orange"
);

tl.to(
  "#orangeSlice",
  {
    top: "150%",
    left: "20%",
  },
  "orange"
);

tl.to(
  "#orange",
  {
    top: "160%",
    width: "15%",
    right: "10%",
  },
  "orange"
);
