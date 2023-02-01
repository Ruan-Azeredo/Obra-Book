import axios from "axios"

export const actionToolPost = (data) => {
    axios.post("http://localhost:8080/api/toolAction", {
        data: data.data,
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