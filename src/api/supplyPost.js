import axios from "axios"

export const supplyPost = (data) => {
    axios.post("http://localhost:8080/api/supply", {
        name: data.name,
        brand: data.brand,
        quantity: data.quantity,
        pricePerKg: data.pricePerKg,
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    document.location.reload()
}