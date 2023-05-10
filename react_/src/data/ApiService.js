import axios from "axios"
export default class APISerive {


    static InsertReservation(body, token) {
        console.log(body)
        return fetch(`http://localhost:8000/django_app/Reservation/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteReservation(reservation_id, token) {
        return axios.delete(`http://localhost:8000/django_app/Reservation/${reservation_id}/`, {
            headers: {
                'Authorization': `Token ${token}`
            },
        })
    }

    static LoginUser(body) {
        return fetch(`http://localhost:8000/django_app/Utilisateur/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }



    static RegisterUser(body) {
        return fetch(`http://localhost:8000/django_app/Utilisateur/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static addClient(body) {
        return fetch(`http://localhost:8000/django_app/Client/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static async RegisterClient(data) {
        try {
            console.log(data)
            //inserting user : 
            this.RegisterUser(data[0])
            await new Promise(resolve => setTimeout(resolve, 2000));
            //
            const users = await axios.get('http://localhost:8000/django_app/Utilisateur/')
            const lastId = users.data[users.data.length - 1].iduser;
            data[1].iduser = lastId;
            console.log(data[1]);
            this.addClient(data[1]);
        } catch (error) {
            console.error(error);
        }
    }

}