TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollOverflow: true,
  navigation: true,
  licenseKey: "F3571033-D8F448C5-A6C4F335-85C49F0F",
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
  }
});
