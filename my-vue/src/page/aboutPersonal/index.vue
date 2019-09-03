<template>
    <div id="aboutPersonal">
        <ul class="nav-list">
            <li>
                <span data-hover="我的家庭">我的家庭</span>
            </li>                            
                <li>
                <span data-hover="技术专题">技术专题</span>
            </li>
            <li>
                <span data-hover="关于个人">关于个人</span>
            </li>  
        </ul>
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide><img src="@/assets/img/swiper/banner1.jpg" alt="banner1"></swiper-slide>
            <swiper-slide><img src="@/assets/img/swiper/banner2.jpg" alt="banner2"></swiper-slide>
            <swiper-slide><img src="@/assets/img/swiper/banner3.jpg" alt="banner3"></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>   
        <div id="aboutUs">
            <h2>About Us</h2>
            <p >关于自己介绍</p>
            <dl>
                <dt><img src="@/assets/img/personal/about-img.jpg" alt="about-img"></dt>
                <dd>
                    <h3>were're the best</h3>
                    <p>letter one</p>
                    <p>letter tow</p>
                </dd>
            </dl>
        </div>
        <div id="service">
            <ul>
                <li>
                    <p class="icon-p">
                        <i class="icon iconfont  icon-home"></i>
                    </p>
                    <p>Home</p>
                </li>
            </ul>
        </div> 
        <div id="events"></div> 
        <div id="contacts"></div> 
    </div>
</template>
<script>
import {swiper,swiperSlide} from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
export default {
    components:{
        swiper,
        swiperSlide
    },
    data(){
        return{
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets:true
                },
                autoplay:{
                    delay:2000,
                    disableOnInteraction:false
                }
            },
            // swiperSlides: [1, 2, 3, 4, 5]
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted(){
        this.swiper.slideTo(3, 1000, false)
    }
}
</script>
<style lang="scss" scoped>
    @import "./personal.scss"
</style>