  /////Mutation Observer

  const targetNode = document.querySelector("#pdp_dsk_carousel");
const config = { attributes: true, childList: true, subtree: true };
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type === 'attributes') {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

  /* ----------------START---------------- */

/// slider display off
var pdp_dsk_slider = document.querySelector("#pdp_dsk_slider");
pdp_dsk_slider.style.display = "none";


//// carousel width 
var pdp_dsk_carousel = document.querySelector("#pdp_dsk_carousel");
//pdp_dsk_carousel.style.display = "none"
pdp_dsk_carousel.style.width ="1500px";

// carousel image css

var carousel_ul = document.getElementById('pdp_dsk_carousel').querySelector(".slides");
console.log(carousel_ul);

var carousel_li = document.getElementById('pdp_dsk_carousel').querySelectorAll(".slides li");
for ( var i= 0; i<carousel_li.length; i++){
    carousel_li[i].style.width="300px";
    carousel_li[i].style.height = "500px";
    carousel_li[i].style.margin = "3px";
    //carousel_li[2].style.display = "none";
    //carousel_li[3].style.display = "none";
    //carousel_li[4].style.display = "none";
    //console.log(slides_li[i]);
}

/// arrow create
     
   var carousel_ul = document.getElementById('pdp_dsk_carousel').querySelector(".slides");

   var arrow_left = document.createElement('div');
   arrow_left.innerHTML=`<div class="arrow-left" style="width:0 ; height:0; border-top: 10px solid transparent;  border-bottom: 10px solid transparent; border-right:10px solid black;
   position:absolute;
   bottom: 240px;"></div>`
   var arrow_right = document.createElement('div');
   arrow_right.innerHTML= `<div class="arrow-right" style="width: 0; height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left: 10px solid black; 
   position: absolute;
   bottom: 240px;
   left: 560px;"></div>`;

   carousel_ul.append(arrow_right)
   carousel_ul.insertBefore(arrow_left,carousel_ul.firstChild);
   

///image slider 

var carousel_li = document.getElementById('pdp_dsk_carousel').querySelectorAll(".slides li");
console.log(carousel_li);
var arrow_l = document.querySelector(".arrow-left");

var arrow_r = document.querySelector(".arrow-right");
var current = 0;

// Clear all images
function reset() {
    for (let i = 0; i < carousel_li.length; i++) {
      carousel_li[i].style.display = "none";
    }
  }

  // Initial slide
function startSlide() {
    reset();
    carousel_li[0].style.display = "block";
    carousel_li[1].style.display = "block";
    
   
  }
    
  // Show previous
function slideLeft() {
    reset();
    
   carousel_li[current - 1].style.display = "block";
   carousel_li[2].style.display = "block";
   
    current--;
  }

  // Show next
function slideRight() {
    reset();
   carousel_li[current + 1].style.display = "block";
   carousel_li[3].style.display = "block";

   current++;
  }
    
    // Left arrow click
 arrow_l.addEventListener("click", function () {
    if (current === 0) {
      current = carousel_li.length;
    }
    slideLeft();
  });
// Right arrow click
  arrow_r.addEventListener("click", function () {
    if (current === carousel_li.length - 1) {
      current = -1;
    }
    slideRight();
  });
  startSlide();

  
/*----------------- The Modal------------------- */

var modaldiv= document.createElement('div');
modaldiv.innerHTML = `<div id="myModal" class="modal" style="position: fixed;
z-index: 1; padding-top: 100px; left:0; top: 30px;width: 100%; height: 100%; overflow: auto;background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.9);"
<span class="cls" style="
position: fixed;
left: 900px;
top: 140px;
font-size: larger;
font-weight: bold;">&times;</span>
<img class="modal-content" id="images" style=" margin: auto;display: block;width: 80%;
max-width: 700px;">
</div>
`;

var carousel = document.getElementById('pdp_dsk_carousel');
carousel.insertBefore(modaldiv,carousel.firstChild);

var modal = document.querySelector(".modal");
modal.style.display="none";

///close
var closediv = document.createElement('div');
closediv.innerHTML=`<div class="close" style="z-index: 2;
position: fixed;
left: 960px;
top: 160px;
font-size: x-larger;
font-weight: bold;color:red;"> CLOSE </div>`;

carousel.append(closediv);
closediv.style.display="none";


var img = document.getElementById('pdp_dsk_carousel').querySelectorAll(".slides li img")[0];
//console.log(img);
var modalImg = document.getElementById("images"); 

  img.addEventListener("click",function(){
    modalImg.src = this.src;
    modal.style.display= "block";
    closediv.style.display="block";
  })
  
var img1 = document.getElementById('pdp_dsk_carousel').querySelectorAll(".slides li img")[1];
img1.addEventListener("click",function(){
  modalImg.src = this.src;
  modal.style.display= "block";
  closediv.style.display="block";
})

var img2 = document.getElementById('pdp_dsk_carousel').querySelectorAll(".slides li img")[2];
img2.addEventListener("click",function(){
  modalImg.src = this.src;
  modal.style.display= "block";
  closediv.style.display="block";
})

var img3 = document.getElementById('pdp_dsk_carousel').querySelectorAll(".slides li img")[3];

img3.addEventListener("click",function(){
  modalImg.src = this.src;
  modal.style.display= "block";
  closediv.style.display="block";
})
var img4 = document.getElementById('pdp_dsk_carousel').querySelectorAll(".slides li img")[4];
img4.addEventListener("click",function(){
  modalImg.src = this.src;
  modal.style.display= "block";
  closediv.style.display="block";
})

closediv.addEventListener('click',function(){
  modal.style.display="none";
  closediv.style.display="none";
      startSlide();
})


// accordion move

var PDP_accordian = document.querySelector('#PDP_accordion_container');
PDP_accordian.style.transform = "translate(-600px,-250px)";



/*-------- FINISH ---------------------*/