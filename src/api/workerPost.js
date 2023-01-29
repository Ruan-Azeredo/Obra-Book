import axios from "axios"

export const workerPost = (data) => {
    axios.post("http://localhost:8080/api/worker", {
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
}