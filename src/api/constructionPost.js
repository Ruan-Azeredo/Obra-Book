import axios from "axios"

export const constructionPost = (data) => {
    axios.post("http://localhost:8080/api/construction", {
        name: data.name,
        clientID: data.clientID,
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    document.location.reload()
}