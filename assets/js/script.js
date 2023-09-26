let basketBtn = document.querySelectorAll(".btn");
let arr = JSON.parse(localStorage.getItem("basket"));

basketBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let id = this.parentNode.getAttribute("data-id");
        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }
        let existProduct = arr.find((p) => p.id == id);
        if (existProduct == undefined) {
            arr.push({
                id: id,
                imgUrl: this.parentNode.previousElementSibling.getAttribute("src"),
                name: this.previousElementSibling.previousElementSibling.innerText,
                description: this.previousElementSibling.innerText,
                price: this.parentNode.firstElementChild.innerText,
                count: 1
            });
        } else {
            existProduct.count++
        }
        localStorage.setItem("basket", JSON.stringify(arr));
        calculateProductCount();
    });
});

function calculateProductCount() {
    let basketCount = document.querySelector(".basket_count");
    if (localStorage.getItem("basket") != null) {
        let sum = 0;
        arr.forEach((p) => {
            sum += p.count;
            basketCount.innerHTML = sum;
        });
    }
}
calculateProductCount();
