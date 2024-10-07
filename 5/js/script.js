
document.getElementById("calculate").addEventListener("click", function () {
    const quantity = document.getElementById("quantity").value;
    const productPrice = document.getElementById("product").value;
    const totalCost = quantity * productPrice;

    const quantityPattern = /^[1-9][0-9]*$/;

    if (!quantityPattern.test(quantity)) {
        document.getElementById("warning").classList.add("warning-active");
        document.getElementById("wrap").classList.remove("wrap-active");
    } else {
        document.getElementById("result").textContent = totalCost + " руб";
        document.getElementById("wrap").classList.add("wrap-active");
        document.getElementById("warning").classList.remove("warning-active");
    }
});
