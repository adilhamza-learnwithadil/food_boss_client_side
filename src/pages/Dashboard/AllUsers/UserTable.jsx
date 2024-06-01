import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUserSecret, FaUsers } from "react-icons/fa";


const UserTable = ({ index, user, handleDeleteUser, handleAdminUser, handleCasrtomerUser }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="font-bold">{user.name}</div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{user.email}</div>
                </div>
            </td>
            <td>
                {
                    user.role === 'admin' ? <button onClick={handleCasrtomerUser} className="btn btn-ghost btn-xsbtn bg-[#FFB600] border-[#FFB600] px-5 text-xl text-white hover:bg-[#fff] hover:text-[#FFB600]"><FaUserSecret /></button> :
                    <button onClick={handleAdminUser} className="btn btn-ghost btn-xsbtn bg-[#FFB600] border-[#FFB600] px-5 text-xl text-white hover:bg-[#fff] hover:text-[#FFB600]"><FaUsers /></button>
                }
            </td>
            <th>
                <button onClick={handleDeleteUser} className="btn btn-ghost btn-xsbtn bg-[#FFB600] border-[#FFB600] px-5 text-xl text-white hover:bg-[#fff] hover:text-[#FFB600]"><RiDeleteBin6Line /></button>
            </th>
        </tr>
    );
};

export default UserTable;