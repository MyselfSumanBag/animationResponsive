

var tl =gsap.timeline();

tl.from('nav,#nav-part1,#nav-part2,nav button',{
    y:-100,
    // delay:0.5,
    duration:0.5,
    stagger:0.3,
    
})
tl.from('main img',{
    y:-700,
    duration:1,
    stagger:0.4,
    
})
tl.from('#main h1',{
    x:-100,
    opacity:0,
    fontWeight:700,
    

})
tl.from('#page1-bottom-p',{
    x:-100,
    opacity:0,
})
tl.to('#down',{
    y:15,
    repeat:-1,
    yoyo:true,
    // opacity:0,
    // scale:1.2
})
tl.from('#page1-bottom-part2',{
    x:-100,
    opacity:0
})

const image = [
    
]