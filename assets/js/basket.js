let table = document.querySelector('table');
let arr = JSON.parse(localStorage.getItem('basket'));

if (localStorage.getItem('basket') != null) {
  table.classList.remove('d-none');
  arr.forEach((p) => {
    let tr = `<tr>
    <td data-id="${p.id}"><img src="${p.imgUrl}" alt="." width="200px" height="200px"></td>
    <td>${p.name}</td>
    <td>${p.description}</td>
    <td>${p.price}</td>
    <td>
    <i class="fa-regular fa-square-minus" style="cursor: pointer; user-select: none; font-size: 20px"></i>
    <span style="user-select: none;">${p.count}</span>
    <i class="fa-regular fa-square-plus" style="cursor: pointer; user-select: none; font-size: 20px"></i>
    </td>
    <td>${p.price.slice(0, p.price.length - 1) * p.count}$</td>
    <td><i class="fa-solid fa-trash-can" style="font-size: 30px; cursor: pointer; color: red;"></i></td>
  </tr>`;
    table.lastElementChild.innerHTML += tr;
  });
}

const decrement = document.querySelectorAll(".fa-square-minus");
const increment = document.querySelectorAll(".fa-square-plus");

decrement.forEach(item => {
  item.addEventListener("click", function () {
    const id = this.parentNode.parentNode.firstElementChild.getAttribute("data-id");
    const existProduct = arr.find((p) => p.id == id);
    if (existProduct.count > 1) {
      existProduct.count--;
      this.nextElementSibling.innerHTML = existProduct.count;
      this.parentNode.nextElementSibling.innerHTML = existProduct.price.slice(0, existProduct.price.length - 1) * existProduct.count + "$"
      localStorage.setItem("basket", JSON.stringify(arr));
    }
  });
});

increment.forEach(item => {
  item.addEventListener("click", function () {
    const id = this.parentNode.parentNode.firstElementChild.getAttribute("data-id");
    const existProduct = arr.find((p) => p.id == id);
    existProduct.count++;
    this.previousElementSibling.innerHTML = existProduct.count;
    this.parentNode.nextElementSibling.innerHTML = existProduct.price.slice(0, existProduct.price.length - 1) * existProduct.count + "$"
    localStorage.setItem("basket", JSON.stringify(arr));
  });
});

let deleteBtn = document.querySelectorAll('.fa-trash-can');

deleteBtn.forEach((btn) => {
  btn.setAttribute('onclick', 'Delete(this)');
})

function Delete(item) {
  let product = item.parentNode.parentNode.firstElementChild.getAttribute('data-id').value;
  arr.splice(product, 1);
  localStorage.setItem('basket', JSON.stringify(arr));
  item.parentNode.parentNode.remove();
  calculateProductCount();
}

function calculateProductCount() {
  let basketCount = document.querySelector(".basket_count");
  if (localStorage.getItem("basket") != null) {
    let sum = 0;
    arr.forEach((p) => {
      sum += p.count;
      basketCount.innerHTML = sum;
    });
    basketCount.innerHTML = sum;
  }
}
calculateProductCount();



















































// let table = document.querySelector(".table");
// let arr = JSON.parse(localStorage.getItem("basket"));

// if (localStorage.getItem("basket") != null) {
//   table.classList.remove("d-none");
//   arr.forEach((p) => {
//     let tr = `<tr">
//     <td data-id="${p.id}"><img src="${p.imgUrl}" alt="" width="200px" height="200px"></td>
//     <td>${p.name}</td>
//     <td>${p.description}</td>
//     <td>${p.price}</td>
//     <td>${p.count}</td>
//     <td>${p.price.slice(0, p.price.length - 1) * p.count}$</td>
//     <td><i class="fa-solid fa-trash-can" style="font-size: 30px; cursor: pointer; color: red;"></i></td>
//   </tr>`;
//     table.lastElementChild.innerHTML += tr;
//   });
//   calculateTotalPrice(arr);
// }

// let deleteBtn = document.querySelectorAll(".fa-trash-can");

// deleteBtn.forEach((deleteBtn) => {
//   deleteBtn.setAttribute("onclick", "Delete(this)");
// });

// function Delete(item) {
//   let product = item.parentNode.parentNode.firstElementChild.getAttribute("data-id").value;
//   arr.splice(product, 1);
//   localStorage.setItem("basket", JSON.stringify(arr));
//   item.parentNode.parentNode.remove();
//   calculateProductCount();
//   calculateTotalPrice();
// }

// function calculateProductCount() {
//   if (localStorage.getItem("basket") != null) {
//     let basketCount = document.querySelector(".basket_count");
//     let sum = 0;
//     arr.forEach((p) => {
//       sum += p.count;
//       basketCount.innerHTML = sum;
//     });
//     basketCount.innerHTML = sum;
//   }
// }
// calculateProductCount();


// function calculateTotalPrice() {
//   if (localStorage.getItem("basket") != null) {
//     let totalPrice = document.querySelector(".total_price");
//     let sum = 0;
//     arr.forEach((p) => {
//       sum += p.price.slice(0, p.price.length - 1) * p.count;
//       totalPrice.innerHTML = sum;
//     });
//     totalPrice.innerHTML = sum + "$";
//   }
// }
// calculateTotalPrice();