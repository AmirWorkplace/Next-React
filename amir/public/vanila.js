const dotAll = document.querySelectorAll(".element");

let animation = anime.timeline({
  targets: dotAll,
  easing: "easeInOutExpo",
  loop: true,
  delay: anime.stagger(100, {
    grid: [10, 10],
    from: "center",
  }),
});

animation
  .add({
    rotateZ: 180,
    translateY: anime.stagger(-20, {
      grid: [10, 10],
      from: "center",
      axis: "y",
    }),
    translateX: anime.stagger(-20, {
      grid: [10, 10],
      from: "center",
      axis: "x",
    }),
  })
  .add({
    borderRadius: 50,
  })
  .add({
    scale: 0.2,
    opacity: 0.2,
  });

animation
  .add({
    rotateZ: 180,
    translateY: anime.stagger(0, {
      grid: [10, 10],
      from: "center",
      axis: "y",
    }),
    translateX: anime.stagger(0, {
      grid: [10, 10],
      from: "center",
      axis: "x",
    }),
  })
  .add({
    scale: 1,
    borderRadius: 0,
  })
  .add({
    rotateZ: -90,
  });
