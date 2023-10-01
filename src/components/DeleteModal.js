import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import FetchSingleStudent from "../hooks/FetchSingleStudent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteModal = ({deleteModal, setDeleteModal, keyId})=> {
    const notify = () => toast("DELETED SUCCESSFULLY!");
    const url = `https://studentdb-c9874-default-rtdb.firebaseio.com/students/${keyId}.json`;
    const queryClient = useQueryClient()
    const deleteStudent = useMutation({
        mutationFn: ()=> axios.delete(url),
        onSuccess: ()=> queryClient.invalidateQueries(["students"])
    })
    const {data} = FetchSingleStudent(keyId)
    const deleteStudentData = (e)=> {
        e.preventDefault()
        deleteStudent.mutate()
        notify()
        setTimeout(() => {
            setDeleteModal(false)
        }, 3000);
    }
        return (
        <div className={`fixed flex justify-center items-center inset-0 ${deleteModal ? "bg-black bg-opacity-[0.8] z-10" : "z-[-10] bg-transparent"} duration-300`}>
            <div className={`text-center absolute z-20 ${deleteModal ? "scale-100" : "scale-0"} w-fit bg-white shadow-md rounded-md p-5 duration-300`}>
                <form onSubmit={deleteStudentData} action="">
                    <h1 className="font-bold text-md">Are you sure you want to delete?</h1>
                    <p className="font-semibold">{data?.data.firstname} {data?.data.lastname}</p>
                    <div className="justify-center flex gap-2">
                        <button className="bg-red-600 font-bold block p-1 md:px-1 d:py-1  md:text-md rounded-sm md:rounded-lg">
                            DELETE
                        </button>
                        <p onClick={()=> setDeleteModal(false)} className="cursor-pointer bg-slate-400 font-bold block p-1 md:px-1 d:py-1 md:text-md rounded-sm md:rounded-lg">
                            BACK
                        </p>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}


export default DeleteModal;