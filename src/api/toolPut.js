import axios from "axios"

export const toolPut = (data) => {
    axios.put("http://localhost:8080/api/tool", {
        id: data.id,
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