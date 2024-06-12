let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });




  let leftIcon=document.querySelector('.left_icon')
  
  let   rightIcon=document.querySelector('.right_icon')

  
  let sliderInnerContainer=document.querySelector('.slider_inner_container')
  let count=0;
function slider() {
  for(i=0;i<sliderInnerContainer.children.length;i++){
    sliderInnerContainer.children[i].style.transform=`translateX(-${count*315}px)`
    sliderInnerContainer.children[i].classList.remove('slider_active')
  }
  sliderInnerContainer.children[count+1].classList.add('slider_active')
}

// setInterval(() => {
//   if(count< sliderInnerContainer.children.length-3){
// count++
// slider()
//   }
//   else{
//     count=0
//     slider()
//   }
// }, 2000);

rightIcon.addEventListener('click',()=>{
  if(count< sliderInnerContainer.children.length-3){
    count++
    slider()
      }
      else{
        count=0
        slider()
      }
})


leftIcon.addEventListener('click',()=>{

if(count>0){
  count--
slider()
}
else{
  count=0
  slider()
}
})