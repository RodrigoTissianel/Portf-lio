
// ===========================================================
// ================= HEADER GLASS EFFECT =====================
// ===========================================================

function scrollHeader(){
    const header = document.getElementById('header');

    if(this.scrollY >= 50) header.classList.add('header-active'); else header.classList.remove('header-active');
}

window.addEventListener('scroll', scrollHeader);




// ===========================================================
// =================== GSAP ANIMATIONS =======================
// ===========================================================

//========== Introduction and hero fade animations ==========//

document.addEventListener('DOMContentLoaded', ()=>{
    let tl = gsap.timeline();

    tl.fromTo('.introduction',1,
    {
        opacity: 1 ,
        height:'100%'
    }, {
        opacity: 0,
        height: '90%',
        delay: 5,
        ease: 'expo.Out'
    })
    .to('.introduction',.1,
    {
        opacity: 0,
        height: '0%',
        delay: 0,
        ease: 'expo.Out'
    })
    .fromTo('.nav-left-item', 2,{
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: 'expo.inOut',
        stagger: .3,
    }, '-=1')
    .fromTo('.logo', 2,{
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: 'expo.inOut',
    }, '-=1')
    .fromTo('.nav-right-item', 2,{
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: 'expo.inOut',
        stagger: .3,
    }, '-=1')
    .fromTo('.greeting', 2,{
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: 'expo.inOut',
    }, '-=4')
    .fromTo('.hero-svg', 2,{
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        ease: 'expo.inOut',
    }, '-=3')
})






gsap.registerPlugin(ScrollTrigger);


//========== Creating the matchMedia ==========//
let mm = gsap.matchMedia();

mm.add({
    isDesktop: "(min-width: 960px)",
    isLaptop: "(max-width: 1140px)"
}, 

(context)=>{
    let {isDesktop, isLaptop} = context.conditions;

    //========== Animations for resolutions above 960px ==========//

    //========== Name animation ==========//
    gsap.to(".name",{
        x: isDesktop ? 100: 50,
        duration: 2,
        scrollTrigger:{
        trigger: ".name",
        start: isDesktop ? "top 20%": "top 23%" ,
        end: isDesktop ? "bottom 33%" : "bottom 23%",
        // markers: true,
        scrub: 3,
        },
        
    });
    
    //========== Surname animation ==========//
    gsap.to(".surname",{
        x: isDesktop ? -100: -50,
        //duration: 10,
        scrollTrigger:{
        trigger: ".name",
        start: isDesktop ? "top 20%": "top 23%" ,
        end: isDesktop ? "bottom 33%" : "bottom 23%",
        // markers: true,
        scrub: 3,
        },
        
    });

    
    //========== GSAP Timeline ==========//
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".t-shape",
           //markers: true,
            start: "top 15%",
            end: isLaptop ? "bottom -16%" : "bottom -22%",
            scrub: true,
            pin: true,
        }
    });
    
    //========== Div about-me pinned ==========//
    tl.to(".about-me",{
        scrollTrigger:{
            trigger: ".about-me",
            start: "top 15%",
            end: isLaptop ? "bottom 5%" : "bottom -10%",
            //markers: true,
            scrub: 3,
            pin: isLaptop ? false : true, 
        }
    })
    .to(".led",{
        y: isLaptop ? 570 :  560,
        opacity: 1,
        scrollTrigger:{
            trigger: ".led",
            scrub: 1,
            //markers: true,
            start: "bottom -15%",
            end: "top -60%"
        }
    })
    .to(".other-skill",{
        opacity: 1,
        scrollTrigger:{
            trigger: ".led",
            scrub: 1,
            //markers: true,
            start: "bottom -15%",
            end: "top -28%"
        }
    })
    .to(".other-skill",{
        opacity: 0,
        scrollTrigger:{
            trigger: ".led",
            scrub: 1,
            //markers: true,
            start: "bottom -26%",
            end: "top -45%",
        }
    })
    .fromTo(".expertise",{
        opacity: 0,
        scrollTrigger:{
            trigger: ".led",
            scrub: 1,
           // markers: true,
            start: "bottom -24%",
            end: "top -45%"
        }
    }, 
    {
        opacity: 1,
        scrollTrigger:{
            trigger: ".led",
            scrub: 1,
           // markers: true,
            start: "bottom -24%",
            end: "top -50%"
        }
    });


    return () =>{
        //========== Animation on resolutions under 960px
    
        //========== GSAP Timeline ==========//
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: ".t-shape",
                // markers: true,
                start: "top 20%",
                end: "bottom -10%",
                scrub: true,
                pin: true,
            }
        });
        
        //========== Div about-me unpinned ==========//
        tl.to(".about-me",{
            scrollTrigger:{
                trigger: ".about-me",
                start: "top 20%",
                end: isLaptop ? "bottom 5%" : "bottom -10%",
                //markers: true,
                scrub: 3,
                pin: false, 
            }
        })
        .to(".led",{
            y: 500,
            opacity: 1,
            scrollTrigger:{
                trigger: ".led",
                scrub: 1,
                //markers: true,
                start: "bottom -14%",
                end: "top -50%"
            }
        })
        .to(".other-skill",{
            opacity: 1,
            scrollTrigger:{
                trigger: ".led",
                scrub: 1,
                //markers: true,
                toggleActions: "play reverse none none",
                start: "bottom -15%",
                end: "top -28%"
            }
        })
        .to(".other-skill",{
            opacity: 0,
            scrollTrigger:{
                trigger: ".led",
                scrub: 1,
                //markers: true,
                start: "bottom -26%",
                end: "top -45%",
            }
        })
        .fromTo(".expertise",{
            opacity: 0,
            scrollTrigger:{
                trigger: ".led",
                scrub: 1,
               // markers: true,
                start: "bottom -24%",
                end: "top -45%"
            }
        }, 
        {
            opacity: 1,
            scrollTrigger:{
                trigger: ".led",
                scrub: 1,
               // markers: true,
                start: "bottom -24%",
                end: "top -50%"
            }
        });
    
    }

});
