import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import FetchSingleStudent from "../hooks/FetchSingleStudent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditModal = ({modal, setModal, keyId})=> {
    const firstname = useRef()
    const lastname = useRef();
    const surname = useRef();
    const age = useRef();
    const notify = () => toast("UPDATED SUCCESSFULLY!");
    const dataError = (data) => toast(`CAN'T LEAVE ${data} EMPTY`);
    const url = `https://studentdb-c9874-default-rtdb.firebaseio.com/students/${keyId}.json`;
    const queryClient = useQueryClient()
    const updateStudent = useMutation({
        mutationFn: (data)=> axios.put(url, data, {
            headers:{"Content-Type":"application/json"}
        }),
        onSuccess: ()=> queryClient.invalidateQueries(["students"])
    })
    const updateStudentData = (e)=> {
        e.preventDefault();
        const firstNameValue = firstname.current.value
        const lastNameValue = lastname.current.value;
        const surNameValue = surname.current.value;
        const studentAgeValue = age.current.value;
        if(!firstNameValue.trim()) return dataError("FIRSTNAME")
        if(!lastNameValue.trim()) return dataError("LASTNAME")
        if(!surNameValue.trim()) return dataError("SURNAME")
        if(!studentAgeValue.trim()) return dataError("AGE")

        if (data?.data.firstname === firstNameValue &&
            data?.data.lastname === lastNameValue &&
            data?.data.surname === surNameValue &&
            data?.data.age === studentAgeValue) {     
            const notify = () => toast("NO CHANGES MADE!");
            notify()
            return
        }
        const updateData = {
            firstname: firstNameValue,
            lastname: lastNameValue,
            surname: surNameValue,
            age: studentAgeValue
        }
        updateStudent.mutate(updateData)
        notify()
        setTimeout(() => {
            setModal(false)
        }, 3000);
    }
    const {data, error, isFetching} = FetchSingleStudent(keyId)
    if (isFetching) return
    if (error) return <p className="text-center text-xl md:text-3xl font-bold text-red-500">{error.message}</p>
    return (
        <div className={`fixed inset-0 ${modal ? "bg-black bg-opacity-[0.8] z-10" : "z-[-10] bg-transparent"} duration-300`}>
            <div className={`absolute z-20 ${modal ? "top-10" : "top-[-100%]"} left-[50%] translate-x-[-50%] w-[90%] md:w-[35%] bg-white shadow-md rounded-md p-10 duration-300`}>
                <form onSubmit={updateStudentData}>
                    <input placeholder="FirstName" ref={firstname} defaultValue={data?.data.firstname}  name="firstname" className="w-full h-8 md:h-10 font-bold md:text-xl pl-2 border-2 border-black mb-4" type="text" />
                    <input placeholder="LastName" ref={lastname} defaultValue={data?.data.lastname} name="lastname" className="w-full h-8 md:h-10 font-bold md:text-xl pl-2 border-2 border-black mb-4" type="text" />
                    <input placeholder="SurName" ref={surname} defaultValue={data?.data.surname} name="surname" className="w-full h-8 md:h-10 font-bold md:text-xl pl-2 border-2 border-black mb-4" type="text" />
                    <input placeholder="age" ref={age} defaultValue={data?.data.age} name="age" type="text" className="w-full h-8 md:h-10 font-bold md:text-xl pl-2 border-2 border-black mb-4" />
                    <div className="flex gap-2">
                        <button className="bg-green-400 font-bold block p-1 md:px-1 d:py-1 md:text-xl rounded-sm md:rounded-lg">
                            UPDATE
                        </button>
                        <p onClick={()=> setModal(false)} className="cursor-pointer bg-slate-400 font-bold block p-1 md:px-1 d:py-1 md:text-xl rounded-sm md:rounded-lg">
                            BACK
                        </p>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default EditModal;