import { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
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
                [name] : value
            })
        })
    }
    const queryClient = useQueryClient()
    const addStudentMutation = useMutation({
        mutationFn: (data)=> {
            return axios.post(url, data, {
            headers: {"Content-Type": "application/json"},
        })},
        onSuccess: ()=> {
            queryClient.invalidateQueries(["students"])
        },
    })
    const handleSubmit = (e)=> {
        e.preventDefault()
        if (!formData.firstname.trim()) return dataError("FIRSTNAME")
        if (!formData.lastname.trim()) return dataError("LASTNAME")
        if (!formData.surname.trim()) return dataError("SURNAME")
        if (!formData.age.trim()) return dataError("AGE")

        addStudentMutation.mutate(formData)
        notify()
        
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
        <div className="container mx-auto p-4">
            <h1 className="font-bold text-2xl md:text-4xl">STUDENT FORM</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="FirstName" value={formData.firstname} onChange={handleInput} name="firstname" className="w-full h-8 md:h-10 font-bold md:text-xl pl-2 border-2 border-black mb-4" type="text" />
                <input placeholder="LastName" value={formData.lastname} onChange={handleInput} name="lastname" className="w-full h-8 md:h-10 font-bold md:text-xl pl-2 border-2 border-black mb-4" type="text" />
                <input placeholder="SurName" value={formData.surname} onChange={handleInput} name="surname" className="w-full h-8 md:h-10 font-bold md:text-xl pl-2 border-2 border-black mb-4" type="text" />
                <input placeholder="age" value={formData.age} onChange={handleInput} name="age" type="text" className="w-full h-8 md:h-10 font-bold md:text-xl pl-2 border-2 border-black mb-4" />
                <button className="bg-slate-400 font-bold block p-1 md:px-1 d:py-1 md:text-xl rounded-sm md:rounded-lg">
                    SUBMIT
                </button>
            </form>
            <ToastContainer />
            <Link to={`/allstudents`} className="w-fit mx-auto bg-blue-700 font-bold block p-1 md:px-1 md:py-1 md:text-xl rounded-sm md:rounded-lg">VIEW ALL STUDENTS</Link>
        </div>
    )
}


export default Students;