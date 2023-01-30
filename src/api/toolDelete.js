import axios from "axios"

export const toolDelete = (data) => {
    axios.delete(`http://localhost:8080/api/tool/${data.id}`
    ).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    document.location.reload()
}