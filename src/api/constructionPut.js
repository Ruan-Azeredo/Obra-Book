import axios from "axios"

export const constructionPut = (data) => {
    axios.put("http://localhost:8080/api/construction", {
        id: data.id,
        name: data.name,
        clientID: data.clientID,
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    document.location.reload()
}