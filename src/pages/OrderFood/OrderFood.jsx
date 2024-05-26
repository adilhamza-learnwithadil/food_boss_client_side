import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PageCover from "../../components/Cover/PageCover";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import '../../index.css'
import useMenu from "../../hooks/useMenu";
import Card from "./Card";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')




    return (
        <div>
            <Helmet>
                <title>Food Boss | Order Food</title>
            </Helmet>
            <PageCover bgId='order' title='Order Food'></PageCover>
            <div className="max-w-7xl mx-auto">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='uppercase mx-auto items-center justify-center w-[450px]'>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 gap-y-14 my-20">
                            {
                                salad.map(salad => <Card key={salad._id} food={salad}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 gap-y-14 my-20">
                            {
                                pizza.map(pizza => <Card key={pizza._id} food={pizza}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 gap-y-14 my-20">
                            {
                                soup.map(soup => <Card key={soup._id} food={soup}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 gap-y-14 my-20">
                            {
                                dessert.map(dessert => <Card key={dessert._id} food={dessert}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 gap-y-14 my-20">
                            {
                                drinks.map(drinks => <Card key={drinks._id} food={drinks}></Card>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;