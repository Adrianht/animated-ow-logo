let tl = gsap.timeline();

// gsap.set('svg', {
//   width: 0,
// })

// tl.to("svg", 4, {
//   width: '80%',
//   ease: "linear",
// })
gsap.set(".o-group-item", {
  opacity: 0,
})

let oTL = gsap.timeline({repeat: -1});
oTL.fromTo("#lightning", 2,
  {
    scale: 0.1,
    transformOrigin: "center",
  },
  {
    scale: 1.5,
    opacity: 1,
    ease: "elastic",
    transformOrigin: "center",
  }
)
oTL.fromTo("#lightning, #o", 2, 
  {
    scale: 1.5,
    transformOrigin: "center",
  },
  {
    scale: 1,
    opacity: 1,
  }
)

oTL.to("#o-group", 5, {
  rotation: 360,
  ease: "linear",
  transformOrigin: "center"
})

gsap.fromTo("#first-n", 2, 
  {
    yPercent: -50
  },
  {
    yPercent: 50,
    yoyo: true,
    repeat: -1,
    ease: "linear"
  }
)

let iTL = gsap.timeline({repeat: -1});

iTL.to("#lower-i", 2, {
  yPercent: 50
})

iTL.to("#lower-i", 3,
  {
    yPercent: -15,
    // repeat: -1,
    ease: "bounce",
  }
)

iTL.to("#upper-i", 5,
  {
    yPercent: -1000,
  },
  "-=1.9"
)
iTL.to("#upper-i", 5, {
    yPercent: 0,
    ease: "bounce"
  }
)

iTL.to("#lower-i", 1, {
  yPercent: 0,
  ease: "linear"
})

gsap.to("#l", 2, {
  scaleY: -1,
  transformOrigin: "center",
  repeat: -1,
  ease: "linear",
  yoyo: true
})

gsap.to("#second-n", 2, {
  scaleX: -1,
  transformOrigin: "center",
  repeat: -1,
  ease: "linear",
  yoyo: true
})

document.onmousemove = function moveE(e) {
  gsap.to("#e", {
    y: e.clientY - 600,
  })
}

