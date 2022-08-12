const form = document.getElementById("payForm");
form.addEventListener("submit", payNow);

function payNow(e) {
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-18df10b7a4021808db6a5c64e892c643-X",
        tx_ref: "fy_" + Math.floor((Math.random() * 1000000000) + 1),
        amount: document.getElementById("amount").value,
        currency: "NGN",

        customer: {
            email: document.getElementById("email").value,
            phonenumber: document.getElementById("phoneNumber").value,
            name: document.getElementById("fullName").value
        },
        callback: function(data) {
            console.log(data);
        }

    });
}