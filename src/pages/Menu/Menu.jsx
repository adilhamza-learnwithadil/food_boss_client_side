import { Helmet } from 'react-helmet-async';
import PageCover from '../../components/Cover/PageCover';
import SectionCover from '../../components/Cover/SectionCover';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from '../../components/MenuCategory/MenuCategory';
import { Link } from 'react-router-dom';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Food Boss | Our Menu</title>
            </Helmet>
            <PageCover bgId='menu'></PageCover>
            <div className="max-w-7xl mx-auto my-20">
                <SectionTitle smallTitle="---Don't miss---" title="TODAY'S OFFER"></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
            </div>



            <SectionCover id='section_cover_1' title='DESSERTS' des='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></SectionCover>
            <div className="max-w-7xl mx-auto my-20">
                <MenuCategory items={dessert}></MenuCategory>
                <Link to={`/order_food/dessert`} className='mx-auto w-[300px] text-center items-center justify-center flex mt-10 btn bg-[#fff0] border-[#FFB600] border-b-2 border-l-0 border-r-0 border-t-0 text-[#FFB600] hover:text-[#FFf] px-10 hover:bg-[#FFB600] hover:border-[#FFB600]'>ORDER YOUR FAVOURITE FOOD</Link>

            </div>



            <SectionCover id='section_cover_2' title='Pizza' des='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></SectionCover>
            <div className="max-w-7xl mx-auto my-20">
                <MenuCategory items={pizza}></MenuCategory>
                <Link to={`/order_food/pizza`} className='mx-auto w-[300px] text-center items-center justify-center flex mt-10 btn bg-[#fff0] border-[#FFB600] border-b-2 border-l-0 border-r-0 border-t-0 text-[#FFB600] hover:text-[#FFf] px-10 hover:bg-[#FFB600] hover:border-[#FFB600]'>ORDER YOUR FAVOURITE FOOD</Link>
            </div>



            <SectionCover id='section_cover_3' title='Salad' des='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></SectionCover>
            <div className="max-w-7xl mx-auto my-20">
                <MenuCategory items={salad}></MenuCategory>
                <Link to={`/order_food/salad`} className='mx-auto w-[300px] text-center items-center justify-center flex mt-10 btn bg-[#fff0] border-[#FFB600] border-b-2 border-l-0 border-r-0 border-t-0 text-[#FFB600] hover:text-[#FFf] px-10 hover:bg-[#FFB600] hover:border-[#FFB600]'>ORDER YOUR FAVOURITE FOOD</Link>
            </div>



            <SectionCover id='section_cover_4' title='Soup' des='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></SectionCover>
            <div className="max-w-7xl mx-auto my-20">
                <MenuCategory items={soup}></MenuCategory>
                <Link to={`/order_food/soup`} className='mx-auto w-[300px] text-center items-center justify-center flex mt-10 btn bg-[#fff0] border-[#FFB600] border-b-2 border-l-0 border-r-0 border-t-0 text-[#FFB600] hover:text-[#FFf] px-10 hover:bg-[#FFB600] hover:border-[#FFB600]'>ORDER YOUR FAVOURITE FOOD</Link>
            </div>
        </div>
    );
};

export default Menu;