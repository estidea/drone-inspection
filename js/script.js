/* Phone mask */
jQuery(function($){
    $(".input-phone").mask("+38 (099) 999-9999");
 });

 /* Scroll top link */
jQuery(document).ready(function($) {

    var visible = false;
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if (!visible && scrollTop > 1000) {
        $(".scrollToTop").fadeIn();
        visible = true;
      } else if (visible && scrollTop <= 1000) {
        $(".scrollToTop").fadeOut();
        visible = false;
      }
    });
  
    //Click event to scroll to top
    $(".scrollToTop").click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  
  });

/* Reviews scroller */
window.onload = function() {
    horisontalControls("reviews");
}

var currentI = 0;
var length = reviewsArray.length;


function horisontalControls(itemName) {
    var itemBackBtn = $('.'+itemName+'-back-btn'),
        itemNextBtn = $('.'+itemName+'-next-btn'),
        secondCol = $('#'+itemName+'-second-col');

    getReviews(itemName);

    itemNextBtn.on("click", function() {
        if(currentI==length-1) {
            currentI = 0;
        } else {
            currentI++;
        }
        getReviews(itemName);
    });

    secondCol.on("click", function() {
        if(currentI==length-1) {
            currentI = 0;
        } else {
            currentI++;
        }
        getReviews(itemName);
    });

    itemBackBtn.on("click", function() {
        if(currentI==0) {
            currentI = 3;
        } else {
            currentI--;
        }
        getReviews(itemName);
    });
}

function getReviews(itemName) {
    firstCol = $('#'+itemName+'-first-col'),
    secondCol = $('#'+itemName+'-second-col');

    
    firstCol.css("opacity","0.4");
    setTimeout(function() {
        firstCol.find('.avatar').attr("src",reviewsArray[currentI].avatar);
        firstCol.find('name').html(reviewsArray[currentI].name);
        firstCol.find('surname').html(reviewsArray[currentI].surname);
        firstCol.find('i').html(reviewsArray[currentI].company);
        firstCol.find('.review-text').html(reviewsArray[currentI].text);
        firstCol.css("opacity","1");
    },100);

    if(currentI!=length-1) {
        secondCol.find('.avatar').attr("src",reviewsArray[currentI+1].avatar);
        secondCol.find('name').html(reviewsArray[currentI+1].name);
        secondCol.find('surname').html(reviewsArray[currentI+1].surname);
        secondCol.find('i').html(reviewsArray[currentI+1].company);
        secondCol.find('.review-text').html(reviewsArray[currentI+1].text);
    } else {
        secondCol.find('.avatar').attr("src",reviewsArray[0].avatar);
        secondCol.find('name').html(reviewsArray[0].name);
        secondCol.find('surname').html(reviewsArray[0].surname);
        secondCol.find('i').html(reviewsArray[0].company);
        secondCol.find('.review-text').html(reviewsArray[0].text);
    }

    
   
}
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

/* Animation magic */
if(isMobileDevice()!= true) {
    var tlLoader = new TimelineMax(),
    tlAnimator = new TimelineMax({repeat:-1}),
    tlOpShadow = new TimelineMax({repeat:-1}),
    tlShip = new TimelineMax({repeat:-1}),
    tlWave = new TimelineMax({repeat:-1}),
    tlDrone = new TimelineMax({repeat:-1}),
    tlHead = new TimelineMax({repeat:-1}),
    tlDroneImg = new TimelineMax({repeat:-1}),
    tlArm = new TimelineMax({repeat:-1});

var shadow1 = $('#shadow-1'),
    shadow2 = $('#shadow-2'),
    ship = $('#svg-ship'),
    shadow3 = $('#shadow-3'),
    wave = $('#svg-wave'),
    rope1 = $('#rope-1'),
    wave2 = $('#svg-wave-2'),
    arm = $('#svg-arm'),
    drone = $('#svg-drone'),
    head = $('#svg-head'),
    droneImg = $('#drone-img'),
    width = window.outerWidth;



tlLoader 
    .set(shadow1,{autoAlpha:1,y:-60, scale:1.1})
    .set(shadow2,{autoAlpha:1,y:-180, scale:1.3})
    .set(shadow3,{autoAlpha:1,y:100})
    .set(wave2,{x:width})
var shadow1Width = shadow1.innerWidth(),
    shadow2Width = shadow2.innerWidth(),
    shadow3Width = shadow3.innerWidth();

tlAnimator 
    .fromTo(shadow1,30,{x:width-shadow1Width,ease:Power0.easeNone},{x:-shadow1Width,ease:Power0.easeNone})
    .fromTo(shadow2,35,{x:width-shadow2Width,ease:Power0.easeNone},{x:-shadow2Width-100,ease:Power0.easeNone},'+=-40')
    .fromTo(shadow3,30,{x:width-shadow3Width,ease:Power0.easeNone},{x:-shadow3Width-100,ease:Power0.easeNone},'+=-40')

tlOpShadow
    .fromTo(shadow1,2,{autoAlpha:0},{autoAlpha:1})
    .fromTo(shadow1,28,{autoAlpha:1},{autoAlpha:1})
    .fromTo(shadow2,2,{autoAlpha:0},{autoAlpha:1},'+=-40')
    .fromTo(shadow2,33,{autoAlpha:1},{autoAlpha:1},'+=-38')
    .fromTo(shadow3,2,{autoAlpha:0},{autoAlpha:1},'+=-40')
    .fromTo(shadow3,28,{autoAlpha:1},{autoAlpha:1},'+=-38')


tlShip 
    .fromTo(ship,2,{y:0,x:0,ease:Power0.easeNone},{y:6,x:-3,ease:Power0.easeNone})
    .fromTo(ship,2,{y:6,x:-3,ease:Power0.easeNone},{y:0,x:0,ease:Power0.easeNone})
    .fromTo(ship,2,{y:0,x:0,ease:Power0.easeNone},{y:-6,x:3,ease:Power0.easeNone})
    .fromTo(ship,2,{y:-6,x:3,ease:Power0.easeNone},{y:0,x:0,ease:Power0.easeNone})

tlWave    
    .fromTo(wave,150,{x:0,ease:Power0.easeNone},{x:-width,ease:Power0.easeNone})
    .fromTo(wave2,150,{x:width+40,ease:Power0.easeNone},{x:40,ease:Power0.easeNone},'+=-150')

tlDrone   
    .fromTo(drone,5,{y:0,ease: Power1.easeOut},{y:5,ease: Power1.easeOut})
    .fromTo(drone,5,{y:5,ease: Power1.easeOut},{y:0,ease: Power1.easeOut})

tlArm   
    .fromTo(arm,2,{y:0,x:0,ease: Power1.easeOut},{y:-2,x:2,ease: Power1.easeOut})
    .fromTo(arm,2,{y:-2,x:2,ease: Power1.easeOut},{y:0,x:0,ease: Power1.easeOut})
    .fromTo(head,4,{x:0,ease: Power1.easeOut},{x:2,ease: Power1.easeOut},'+=-4')
    .fromTo(head,4,{x:2,ease: Power1.easeOut},{x:0,ease: Power1.easeOut},'+=-8')

tlHead   
    .fromTo(head,4,{x:0,ease: Power1.easeOut},{x:2,ease: Power1.easeOut})
    .fromTo(head,4,{x:2,ease: Power1.easeOut},{x:0,ease: Power1.easeOut})
    .fromTo(head,4,{x:0,ease: Power1.easeOut},{x:-2,ease: Power1.easeOut})
    .fromTo(head,4,{x:-2,ease: Power1.easeOut},{x:0,ease: Power1.easeOut})


tlDroneImg
    .fromTo(droneImg,2,{y:0,ease: Power1.easeOut},{y:10,ease: Power1.easeOut})
    .fromTo(droneImg,2,{y:10,ease: Power1.easeOut},{y:0,ease: Power1.easeOut})
}