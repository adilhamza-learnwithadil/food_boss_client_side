import { RiDeleteBin6Line } from "react-icons/ri";
const Table = ({ food, index, handleDelete }) => {
    return (
        <tr>
            <td>{index +1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-lg w-24 h-14">
                            <img src={food?.FoodImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{food.FoodName}</div>
                </div>
            </td>
            <td>${food.Price}</td>
            <th>
                <button onClick={handleDelete} className="btn btn-ghost btn-xsbtn bg-[#FFB600] border-[#FFB600] px-5 text-xl text-white hover:bg-[#fff] hover:text-[#FFB600]"><RiDeleteBin6Line /></button>
            </th>
        </tr>
    );
};

export default Table;