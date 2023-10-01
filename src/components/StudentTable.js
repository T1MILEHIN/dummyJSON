import { useState } from "react";
import FetchStudents from "../hooks/FetchStudents"
import { Link } from "react-router-dom";
import Loader from "./Loader"
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";


const StudentTable = () => {
    const [modal, setModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [keyId, setKeyId] = useState("")
    const { data, isLoading, error } = FetchStudents()
    if (isLoading) return <Loader />
    if (error) return <p className="min-h-screen flex justify-center items-center text-xl md:text-3xl font-bold text-red-500">{error.message}</p>
    if (data?.data === null) return <div className="min-h-screen flex flex-col justify-center items-center text-xl md:text-3xl font-bold text-red-500"> <h1 >NO DATA YET</h1> <p className="font-thin text-blue-500 active:text-red-500"><Link to={"/studentform"}>Go back</Link></p></div>;

    const DATA = data?.data ?? "NO DATA" // Nullish coalescing !!
    let keys = Object.keys(DATA)
    const edit = (key)=> {
        setModal(true)
        setKeyId(key)
    }
    const del = (key) => {
        setDeleteModal(true)
        setKeyId(key)
    }
    return (
        <div className="relative min-h-screen">
            <table className="border-collapse border border-slate-400 text-left table-auto mx-auto">
                <caption className="caption-bottom">
                    STUDENTS DATA
                </caption>
                <thead>
                    <tr>
                        <th className="py-3 px-2 border border-slate-300">FIRSTNAME</th>
                        <th className="py-3 px-2 border border-slate-300">LASTNAME</th>
                        <th className="py-3 px-2 border border-slate-300">SURNAME</th>
                        <th className="py-3 px-2 border border-slate-300">AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data && keys?.map((key)=> (
                    <tr>
                        <td className="py-3 px-2 border border-slate-300">{data?.data[key]?.firstname}</td>
                        <td className="py-3 px-2 border border-slate-300">{data?.data[key]?.lastname}</td>
                        <td className="py-3 px-2 border border-slate-300">{data?.data[key]?.surname}</td>
                        <td className="py-3 px-2 border border-slate-300">{data?.data[key]?.age}</td>
                        <td onClick={()=> edit(key)} className="font-black text-white cursor-pointer py-3 px-2 border border-slate-300 bg-green-400 hover:bg-green-600">EDIT</td>
                        <td onClick={()=> del(key)} className="font-black text-white cursor-pointer py-3 px-2 border border-slate-300 bg-red-400 hover:bg-red-600">DELETE</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <Link to={`/studentform`} className="mt-2 w-fit mx-auto bg-blue-700 font-bold block p-1 md:px-1 md:py-1 md:text-xl rounded-sm md:rounded-lg">Back to Form</Link>
           
           <EditModal modal={modal} setModal={setModal} keyId={keyId} />

           <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} keyId={keyId}/>
        </div>
    );
};

export default StudentTable;
