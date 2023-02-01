import axios from "axios"

export const actionToolPut = (data) => {
    axios.put("http://localhost:8080/api/toolAction", {
        id: data.id,
        data: data.data,
        quantity: data.quantity,
        constructionID: data.constructionID,
        toolID: data.toolID,
        description: data.description,
        isReport: data.isReport
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    document.location.reload()
}