import axios from "axios"

export const actionWorkerPost = (data) => {
    axios.post("http://localhost:8080/api/workerAction", {
        data: data.data,
        constructionID: data.constructionID,
        workerID: data.workerID,
        description: data.description,
        isReport: data.isReport
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    document.location.reload()
}