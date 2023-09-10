import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Students = ()=> {
    const url = "https://studentdb-c9874-default-rtdb.firebaseio.com/students.json"
    const notify = () => toast("DONE!");
    const dataError = (data) => toast(`CAN'T LEAVE ${data} EMPTY`);
    const [formData, setFormData] = useState({
        firstname: "",
        lastname:"",
        surname: "",
        age: ""
    })
    const handleInput = (e)=> {
        const {name, value} = e.target
        setFormData(prev=> {
            return ({
                ...prev,
                [name]:value
            })
        })
    }
    const addStudentMutation = useMutation({
        mutationFn: (data)=> {
            return axios.post(url, data, {
            headers: {"Content-Type": "application/json"},
        })},
        onSuccess: ()=> {
            notify()
        },
    })
    const handleSubmit = (e)=> {
        e.preventDefault()
        if (!formData.firstname.trim()) return dataError("FIRSTNAME")
        if (!formData.lastname.trim()) return dataError("LASTNAME")
        if (!formData.surname.trim()) return dataError("SURNAME")
        if (!formData.age.trim()) return dataError("AGE")
        addStudentMutation.mutate(formData)
        
        setFormData(prev=>{
            return ({
                ...prev,
                firstname: "",
                lastname:"",
                surname: "",
                age: ""
            })
        })
    }
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-4xl">STUDENT FORM</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="FirstName" value={formData.firstname} onChange={handleInput} name="firstname" className="w-full h-10 font-bold text-xl pl-2 border-2 border-black  mb-4" type="text" />
                <input placeholder="LastName" value={formData.lastname} onChange={handleInput} name="lastname" className="w-full h-10 font-bold text-xl pl-2 border-2 border-black  mb-4" type="text" />
                <input placeholder="SurName" value={formData.surname} onChange={handleInput} name="surname" className="w-full h-10 font-bold text-xl pl-2 border-2 border-black  mb-4" type="text" />
                <input placeholder="age" value={formData.age} onChange={handleInput} name="age" type="text" className="w-full h-10 font-bold text-xl pl-2 border-2 border-black  mb-4" />
                <button className="bg-slate-400 font-bold block px-4 py-2 text-2xl rounded-lg">
                    SUBMIT
                </button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Students;