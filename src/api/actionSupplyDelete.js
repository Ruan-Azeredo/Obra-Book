import axios from "axios"

export const actionSupplyDelete = (data) => {
    axios.delete(`http://localhost:8080/api/supplyAction/${data.id}`
    ).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    document.location.reload()
}