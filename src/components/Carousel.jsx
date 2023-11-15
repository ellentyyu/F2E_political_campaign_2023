import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper";
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';


const sloganList = [
    '為喵星人，護台灣！',
    '從喵的眼中，看見台灣',
    '喵的未來，人的希望',
    '為喵星人，護台灣！',
    '從喵的眼中，看見台灣',
    '喵的未來，人的希望'
];

const dummyData = [
    {
        imageUrl:
            "https://images.unsplash.com/photo-1592858167090-2473780d894d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shopTitle: "夏野豆行",
        content: "商品全面半價",
        useBy: "2023/6/30 20:00 到期",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shopTitle: "全家",
        content: "商品買一送一",
        useBy: "2023/6/30 20:00 到期",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1521401292936-0a2129a30b1c?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shopTitle: "星巴克",
        content: "全面150%折",
        useBy: "2023/6/30 20:00 到期",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1592858167090-2473780d894d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shopTitle: "全家",
        content: "商品買一送一",
        useBy: "2023/6/30 20:00 到期",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1627998691167-4dab0dfcae9f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shopTitle: "星巴克",
        content: "全面150%折",
        useBy: "2023/6/30 20:00 到期",
    },
];

const Carousel = () => {
    return (
        <div className="carousel">
            <Swiper
                modules={[FreeMode, Autoplay]}
                freeMode={{enabled: true, sticky: true}}
                autoplay={{delay: 1, disableOnInteraction: false}}
                allowTouchMove={false}
                loop={true}
                speed={6000}
                slidesPerView={'auto'}
                spaceBetween={24}
                className="bg-coral-700"
            >
                {sloganList.map((slogan, idx) => (
                        <SwiperSlide key={slogan + idx}>
                            <p className="carousel__text">{slogan}</p>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>

    );
};

export default Carousel;
