import axios from "axios"

export const workerPut = (data) => {
    axios.put("http://localhost:8080/api/worker", {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        dailyWage: data.dailyWage,
        phoneNo: data.phoneNo,
        cpf: data.cpf,
        age: data.age,
        type: data.type,
        status: data.status,
        isAssigned: data.isAssigned,
        district: data.district,
        street: data.street,
        number: data.number,
        zip_code: data.zip_code
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    document.location.reload()
}