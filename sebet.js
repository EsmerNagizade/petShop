

let newTrendContainer=document.querySelector('.new_trend_container')


// Render the basket items
// function renderBasket() {
//   newTrendContainer.innerHTML = '';
//   basket.forEach(data => {
//       newTrendContainer.innerHTML += `
//           <div class="new_trend_card">
//               <div class="new_trend_img">
//                   <img src="${data.img}" alt="">
//               </div>
//               <p>
//                   ${data.name}
//                   <span>${data.price * data.count}</span>
//                   <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M10.7819 6.42857V11.1429C10.7819 11.6167 10.3751 12 9.87343 12C9.37179 12 8.96497 11.6167 8.96497 11.1429V6.42857C8.96497 5.07429 8.00257 3.94018 6.69382 3.56786V11.1429C6.69382 11.6167 6.287 12 5.78535 12C5.28371 12 4.87689 11.6167 4.87689 11.1429V3.56786C3.56814 3.94018 2.60574 5.07321 2.60574 6.42857V11.1429C2.60574 11.6167 2.19892 12 1.69728 12C1.19564 12 0.788818 11.6167 0.788818 11.1429V6.42857C0.788818 4.12259 2.55464 2.20179 4.87689 1.79732V0.857143C4.87689 0.383304 5.28371 0 5.78535 0C6.287 0 6.69382 0.383304 6.69382 0.857143V1.79625C9.01607 2.20179 10.7819 4.12232 10.7819 6.42857Z" fill="black"/>
//                   </svg>
//               </p>
//               <div>
//                   <button onclick="minus(${data.id})">-</button>
//                   <p>${data.count}</p>
//                   <button onclick="plus(${data.id})">+</button>
//               </div>
//           </div>
//       `;
//   });
// }

// // Function to increase the count of a product in the basket
// function plus(id) {
//   let checkbasket = basket.find(data => data.id === id);
//   if (checkbasket) {
//       checkbasket.count++;
//   } else {
//       console.error(`Product with id ${id} not found in basket`);
//   }
//   localStorage.setItem("products", JSON.stringify(basket));
//   renderBasket();
// }

// // Function to decrease the count of a product in the basket
// function minus(id) {
//   let checkbasket = basket.find(data => data.id === id);
//   if (checkbasket && checkbasket.count > 0) {
//       checkbasket.count--;
//       if (checkbasket.count === 0) {
//           basket = basket.filter(data => data.id !== id);
//       }
//   } else {
//       console.error(`Product with id ${id} not found in basket or count is already 0`);
//   }
//   localStorage.setItem("products", JSON.stringify(basket));
//   renderBasket();
// }

// // Initial render of the basket
// renderBasket();

function basketislet() {
   newTrendContainer.innerHTML='';
  basket.forEach(data=>{
   
        newTrendContainer.innerHTML+=`
            <div class="new_trend_card">
              <div class="new_trend_img">
      <img src="${data.img}" alt="">
    
              </div>
              <p>
                ${data.name}
                  <span>${data.price*data.count}</span>
  
                  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7819 6.42857V11.1429C10.7819 11.6167 10.3751 12 9.87343 12C9.37179 12 8.96497 11.6167 8.96497 11.1429V6.42857C8.96497 5.07429 8.00257 3.94018 6.69382 3.56786V11.1429C6.69382 11.6167 6.287 12 5.78535 12C5.28371 12 4.87689 11.6167 4.87689 11.1429V3.56786C3.56814 3.94018 2.60574 5.07321 2.60574 6.42857V11.1429C2.60574 11.6167 2.19892 12 1.69728 12C1.19564 12 0.788818 11.6167 0.788818 11.1429V6.42857C0.788818 4.12259 2.55464 2.20179 4.87689 1.79732V0.857143C4.87689 0.383304 5.28371 0 5.78535 0C6.287 0 6.69382 0.383304 6.69382 0.857143V1.79625C9.01607 2.20179 10.7819 4.12232 10.7819 6.42857Z" fill="black"/>
                  </svg>
              </p>
              <div>
             <button onclick="minus(${data.id})">-</button>
              
              <p>${data.count}</p>
                <button onclick="plus(${data.id})">+</button>
              </div>
          </div>
        `
      })
}

window.addEventListener("load",()=>{
  basketislet()
})
    // function plus(z) {
    //   let checkbasket=basket.find(data=>data.id===z)
    //   if (checkbasket) {
    //     checkbasket.count++
    //     basket.push(checkbasket)
    //   }
    //   else{

    //   }
    //   localStorage.setItem("products",JSON.stringify(checkbasket))
    //   basketislet()
    // }

    function plus(x) {
      let check=basket.find(data=>data.id===x)
      if (check){
        check.count++
      }else{

      }
      localStorage.setItem("products",JSON.stringify(check))
       basketislet()
    }

    function minus(x) {
      let check=basket.find(data=>data.id===x)
      if (check && check.count>0){

        check.count--
        
        
        if (check.count===0) {
          basket = basket.filter(data=>data.id!==x)
        }
      }
      else{
      // let index=basket.filter(data=>data.id!==x)
      // if (index){
      
      //   basketislet()
      }

      localStorage.setItem("products",JSON.stringify(basket))
      basketislet()
      }
    

    let newTrendCard=document.querySelectorAll(".new_trend_card")
    