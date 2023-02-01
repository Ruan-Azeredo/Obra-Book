import axios from "axios"

export const actionSupplyPost = (data) => {
    axios.post("http://localhost:8080/api/supplyAction", {
        data: data.data,
        quantity: data.quantity,
        constructionID: data.constructionID,
        supplyID: data.supplyID,
        description: data.description,
        isReport: data.isReport
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    document.location.reload()
}