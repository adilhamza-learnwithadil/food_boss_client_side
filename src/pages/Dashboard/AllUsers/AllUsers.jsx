import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UserTable from "./UserTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {
    const { deleteUser } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        deleteUser()
                            .then(res => { })
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    const handleAdminUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Admin him!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            toast.success(`You aer created ${user.name} as a admin`)
                            Swal.fire({
                                title: "Admin Created Suxcessfully!",
                                text: "Your file has been admined.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    const handleCasrtomerUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Castomer him!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/castomer/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            toast.success(`You aer created ${user.name} as a castomer`)
                            Swal.fire({
                                title: "Castomer Created Suxcessfully!",
                                text: "Your file has been castomer.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="my-10">
                <SectionTitle smallTitle='---My Cart---' title='WANNA ADD MORE?'></SectionTitle>
                <div className="w-[1000px] h-[720px] mx-auto p-10 bg-[#fff] rounded-3xl px-14">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold">Total User: {users.length}</h2>
                    </div>


                    <div className="overflow-x-auto mt-7  h-[550px] overflow-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>EMAIL</th>
                                    <th>ROLE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => <UserTable key={user._id} index={index} user={user} handleDeleteUser={() => handleDeleteUser(user)} handleAdminUser={() => handleAdminUser(user)} handleCasrtomerUser={() => handleCasrtomerUser(user)}></UserTable>)
                                }
                            </tbody>

                        </table>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default AllUsers;