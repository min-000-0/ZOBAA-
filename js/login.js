import Swiper from "swiper";
import { Pagination } from 'swiper/modules';

const swiper = new Swiper(".swiper-container", { 
     modules: [Pagination],
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".my-pagination",
        clickable: true,
    },
});