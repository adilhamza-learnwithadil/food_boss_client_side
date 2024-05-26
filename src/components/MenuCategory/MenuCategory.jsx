import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({items}) => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 gap-y-10 mt-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;