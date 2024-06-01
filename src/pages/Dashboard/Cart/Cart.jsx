import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Table from "./Table";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.Price), 0);
    const axiosSecure = useAxiosSecure()


    const handleDelete = id => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
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


    return (
        <div className="my-10">
            <SectionTitle smallTitle='---My Cart---' title='WANNA ADD MORE?'></SectionTitle>
            <div className="w-[1000px] h-[720px] mx-auto p-10 bg-[#fff] rounded-3xl px-14">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Total Orders: {cart.length}</h2>
                    <h2 className="text-2xl font-semibold">Total Price: {totalPrice}</h2>
                    <button className="btn bg-[#FFB600] border-[#FFB600] px-8 text-white hover:bg-[#fff] hover:text-[#FFB600]">Pay</button>
                </div>


                <div className="overflow-x-auto mt-7  h-[550px] overflow-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((food, index) => <Table key={food._id} index={index} food={food} handleDelete={() => handleDelete(food._id)}></Table>)
                            }
                        </tbody>

                    </table>
                </div>



            </div>
        </div>
    );
};

export default Cart;