var t1  = gsap.timeline();
t1

.from(".nav-item1" , {
    duration:1,
    onStart:function(){
    $('.nav-item1').textillate({ in: { effect: 'fadeInLeft' } });
}
})
.from(".nav-item2" , {
    opacity:0,
    onStart:function(){
    $('.nav-item2').textillate({ in: { effect: 'fadeInLeft' } });
}
})
.from(".nav-item3" , {
    opacity:0,
    onStart:function(){
    $('.nav-item3').textillate({ in: { effect: 'fadeInLeft' } });
}
})

.from(".nav-item4" , {
    opacity:0,
    onStart:function(){
    $('.nav-item4').textillate({ in: { effect: 'fadeInLeft' } });
}
})
.from(".nav-item5" , {
    opacity:0,
    onStart:function(){
    $('.nav-item5').textillate({ in: { effect: 'fadeInLeft' } });
}
})

.from(".nav-item6" , {
    opacity:0,
    onStart:function(){
    $('.nav-item6').textillate({ in: { effect: 'fadeInLeft' } });
}
})
.from(".homeleft" , {
    opacity : 0,
    y:100,
})
.from(".abtmeLeft" , {
    opacity : 0,
    x:100,
});

gsap.from(".abtmeRight h1", {
    opacity: 0,
    scrollTrigger: {
        trigger : ".abtmeRight h1",
        scroller : "body",
        start : "top 60%",

    }
})

gsap.from(".abtmeRight h2", {
    opacity: 0,
    scrollTrigger: {
        trigger : ".abtmeRight h2",
        scroller : "body",
        start : "top 60%",
    }
})

gsap.from(".abtmeRight p", {
    opacity: 0,
    scrollTrigger: {
        trigger : ".abtmeRight p",
        scroller : "body",
        start : "top 60%",
    }
})


gsap.from(".abtmeRight .btn", {
    opacity: 0,
    scrollTrigger: {
        trigger : ".abtmeRight .btn",
        scroller : "body",
        start : "top 60%",
    }
})
gsap.from("#edu h1", {
    opacity: 0,
    scrollTrigger: {
        trigger : "#edu h1",
        scroller : "body",
        start : "top 60%",

    }
})
gsap.from("#edu .cont1", {
    opacity: 0,
    scrollTrigger: {
        trigger : "#edu .cont1",
        scroller : "body",
        start : "top 60%",
    }
})

gsap.from("#edu .cont2", {
    opacity: 0,
    scrollTrigger: {
        trigger : "#edu .cont2",
        scroller : "body",
        start : "top 60%",
    }
})



gsap.from("#edu .cont3", {
    opacity: 0,
    scrollTrigger: {
        trigger : "#edu .cont3",
        scroller : "body",
        start : "top 60%",
    }
})



gsap.from(".service", {
    opacity: 0,
    scrollTrigger: {
        trigger : ".service",
        scroller : "body",
        start : "top 60%",
    }
})


gsap.from("#service .card1", {
    opacity: 0,
    y: -100,
    scrollTrigger: {
        trigger : "#service .card1",
        scroller : "body",
        start : "top 60%",
        // markers : true,
        start: "top 70%"
    }
})
gsap.from("#service .card2", {
    opacity: 0,
    y: -100,
    scrollTrigger: {
        trigger : "#service .card2",
        scroller : "body",
        start : "top 40%",
        // markers : true,
        start: "top 70%"
    }
})


gsap.from("#service .card3", {
    opacity: 0,
    y: -100,
    scrollTrigger: {
        trigger : "#service .card3",
            scroller : "body",
                start : "top 40%",
            
                start: "top 70%"
            }
})


gsap.from("#service .card4", {
    opacity: 0,
    y: -100,
    scrollTrigger: {
        trigger : "#service .card4",
            scroller : "body",
                start : "top 40%",
            
                start: "top 70%"
            }
})
