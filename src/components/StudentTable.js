import FetchStudents from "../hooks/FetchStudents"
import { Link } from "react-router-dom";
const StudentTable = () => {
    const {data} = FetchStudents()
    console.log(data)
    return (
        <>
            <table className="border border-collapse border-slate-400 text-left table-auto mx-auto">
                <caption className="caption-top">
                    STUDENTS DATA
                </caption>
                <thead>
                    <tr>
                        <th className="border border-slate-300">FIRSTNAME</th>
                        <th className="border border-slate-300">LASTNAME</th>
                        <th className="border border-slate-300">SURNAME</th>
                        <th className="border border-slate-300">AGE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-300"></td>
                        <td className="border border-slate-300"></td>
                        <td className="border border-slate-300"></td>
                    </tr>
                </tbody>
            </table>
            <Link to={`/studentform`} className="w-fit mx-auto bg-blue-700 font-bold block p-1 md:px-1 md:py-1 md:text-xl rounded-sm md:rounded-lg">Back to Form</Link>
        </>
    );
};

export default StudentTable;
