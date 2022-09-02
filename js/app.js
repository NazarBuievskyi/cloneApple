//time line

// const tlIntro = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.first-page',
//         start: '0%',
//         end: '100%',
//         scrub: true,
//         markers: true,
//     }
// })

// tlIntro.fromTo('nav', {opacity: 1}, {opacity: 0})

const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: '.first-page',
        start: '0%',
        end: '100%',
        pin: true,
        pinSpacing: false,
    }
})




const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        markers: {startColor: 'red', endColor: 'blue'},
        scrub: true,
        start: '-20%',
        end: '40%',
    }
})

tlH.fromTo('.highlight', 
{color: 'rgba(255,255,255, 0.4)'},
{color: 'rgba(255,255,255, 1)', stagger: 1})

const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        markers: {startColor: 'pink', endColor: 'pink'},
        scrub: true,
        start: '0%',
        end: '60%',
    }
})

tlHRemove.to('.highlight', 
{color: 'rgba(255,255,255, 0.4)', stagger: 1})