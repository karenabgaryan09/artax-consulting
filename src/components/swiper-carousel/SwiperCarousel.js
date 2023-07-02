import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import localData from "../../localData";
import {Button} from '../'

export default function SwiperCarousel({items,Card,options,rest={}}) {
    const {  preloader,angleLeft,angleRight } = localData.svgs;

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return (
        <>
            {!items || !Object.keys(items).length ? (
                <img src={preloader} width="300" />
            ) : (
                <div className="swiper-custom-wrapper">
                    
                    <Swiper
                        touchStartPreventDefault={false}
                        // loop={true}
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        // onSwiper={(swiper) => console.log(swiper)}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                //   width: 640,
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                //   width: 768,
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                        }}
                        {...options}

                    >
                        {items.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card {...{...item,index}} {...rest} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className="swiper-custom-center">
                        <button className="swiper-custom-angle prev btn btn-circle-dark" color="primary" ref={navigationPrevRef}>
                            {angleLeft}
                        </button>
                        <button className="swiper-custom-angle next btn btn-circle-dark" color="primary" ref={navigationNextRef}>
                            {angleRight}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
