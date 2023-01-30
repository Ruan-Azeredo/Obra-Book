import axios from "axios"

export const toolPost = (data) => {
    axios.post("http://localhost:8080/api/tool", {
        name: data.name,
        brand: data.brand,
        dailyWage: data.dailyWage,
        price: data.price,
        averageLifeSpan: data.averageLifeSpan,
        provider: data.provider,
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    document.location.reload()
}