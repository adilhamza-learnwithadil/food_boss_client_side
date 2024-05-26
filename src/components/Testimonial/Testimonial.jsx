import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'





const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => {
                setTestimonial(data)
            })
    }, [])
    return (
        <div className="my-20">
            <SectionTitle smallTitle='---What Our Clients Say---' title='TESTIMONIALS'></SectionTitle>
            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        testimonial.map(review => <SwiperSlide key={review._id}>
                            <div className="w-[900px] mx-auto">
                                <div className="flex text-2xl text-[#FFB600] items-center justify-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <FaQuoteLeft className="text-[80px] text-center w-full my-10 mb-5" />
                                <p className="text-center text-[#777] text-lg">{review.details}</p>
                                <h3 className="text-2xl text-center mt-5 font-bold text-[#FFB600] uppercase">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;