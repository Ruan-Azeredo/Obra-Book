import axios from "axios"

export const supplyPut = (data) => {
    axios.put("http://localhost:8080/api/supply", {
        id: data.id,
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