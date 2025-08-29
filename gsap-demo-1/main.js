tl = gsap.timeline()

tl.from("h1", {
    scale:0,
    opacity:0,
    duration:1,
})
tl.from("nav ul li", {
    y:-100,
    stagger:0.2,
    duration:0.5,
    ease:"back.out(1.7)",
})

gsap.to("h2" , {
    opacity:0.1,
    duration:1,
    delay:1,
    repeat:-1,
    yoyo:true,
})

gsap.from("p", {
    y:100,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.2,
    repeat:-1,
    yoyo:true,
})

