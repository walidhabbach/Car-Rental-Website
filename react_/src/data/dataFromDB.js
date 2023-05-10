
import { useState, useEffect } from 'react';
import axios from 'axios'

export function Cars() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/django_app/Voiture/')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, [])

    return data;
}
export function Brands() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/django_app/Marque/')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, [])

    return data;
}


export function FuelTypes() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/django_app/Carburant/')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, [])

    return data;
}

export function GearBoxs() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/django_app/Transmission/')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, [])

    return data;
}
export function Users() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/django_app/Utilisateur/')
      .then(response => {
            setData(response.data)
         //get the client credentials :
      })
      .catch(error => console.error(error));
    }, [])

    return data;
}


export function Clients(){
        const [data, setData] = useState([]);   
        useEffect(() => {
            axios.get(`http://localhost:8000/django_app/Client/`)
            .then((res) => setData(res.data))
        },[])
        return data;
}

export default function Reservations(){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/django_app/Reservation/`)
        .then((res) => setData(res.data))
    },[])
    return data;
}