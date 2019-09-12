<template>
    <div id="aboutPersonal">
        <ul class="nav-list" id="navList">
            <li>
                <span data-hover="我的家庭">
                   <router-link :to="'/myTechnology'">我的家庭</router-link>
                </span>
            </li>                            
                <li>
                <span data-hover="技术专题">
                   <router-link :to="'/myTechnology'">技术专题</router-link>
                </span>
            </li>
            <li>
                <span data-hover="关于个人">
                   <router-link :to="'/myTechnology'">关于个人</router-link>
                </span>
            </li>  
        </ul>
        <div id="fullpage">
            <swiper :options="swiperOption" ref="mySwiper" class="section active">
                <!-- slides -->
                <swiper-slide><img src="@/assets/img/swiper/banner1.jpg" alt="banner1"></swiper-slide>
                <swiper-slide><img src="@/assets/img/swiper/banner2.jpg" alt="banner2"></swiper-slide>
                <swiper-slide><img src="@/assets/img/swiper/banner3.jpg" alt="banner3"></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper>
           <div id="aboutUs" class="section">
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
            <div id="service" class="section">
                <ul>
                    <li class="icon-li">
                        <p class="icon-p">
                            <i class="icon iconfont  icon-home"></i>
                        </p>
                        <p>Home</p>
                    </li>
                    <li class="re-item">
                        <dl class="re-item-front">
                            <dt><img src="@/assets/img/personal/test-img1.png"  alt="coser"></dt>
                            <dd class="re-item-job">coser</dd>
                            <dd class="re-item-des">成为我们的合作coser，漫展返图，自由扩列，以及无偿拍摄&后期服务</dd>
                        </dl>
                        <div class="re-item-back">
                            <img src="@/assets/img/personal/test-img3.png" alt="苏苏" />
                        </div>
                    </li>
                    <li style="position: relative;">
                    </li>
                </ul>
            </div> 
            <div id="events" class="section">
                <div id="card-warper">
                    <div class="card">
                        <div class="front">
                            <h1>Signature</h1>
                            <p>7.7 deck<span>2018</span></p>
                            <p class="price">$ 89.00</p>
                        </div>
                        <div class="right">
                        <h2>Signature</h2>
                        <ul>
                            <li>Width	7.7"</li>
                            <li>Length	31.75"</li>
                            <li>Wheelbase	14"</li>
                            <li>Nose	6.875"</li>
                            <li>Tail	6.25"</li>
                        </ul>
                        <button>Add to cart, yo</button>
                        </div>                
                    </div>
                    <div class="img-wrapper">
                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png' alt=''>    
                    </div>
                </div>
                <div id="animt-3d">
                    <div class="controls">
                        <h1>Animations, Transitions and 3D Transforms</h1>
                        <p>Toggle the Backfaces Visible checkbox to turn backfaces on and off using <code>-webkit-backface-visibility</code>.</p>
                        <div><button @click="toggleShape()">Toggle Shape</button></div>
                        <div><input type="checkbox" id="backfaces" @click="toggleBackfaces()" checked><label for="backfaces">Backfaces visible</label></div>
                    </div>
                    <div id="container">
                        <div id="stage">
                            <div id="shape" class="cube backfaces">
                                <div class="plane one">1</div>
                                <div class="plane two">2</div>
                                <div class="plane three">3</div>
                                <div class="plane four">4</div>
                                <div class="plane five">5</div>
                                <div class="plane six">6</div>
                                <div class="plane seven">7</div>
                                <div class="plane eight">8</div>
                                <div class="plane nine">9</div>
                                <div class="plane ten">10</div>
                                <div class="plane eleven">11</div>
                                <div class="plane twelve">12</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div id="contacts" class="section">
                <div class="view view-first">
                    <img src="@/assets/img/personal/gallery-img1.jpg">
                    <div class="mask">
                        <h2>Hover Style #1</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-second">
                    <img src="@/assets/img/personal/gallery-img2.jpg">
                    <div class="mask"></div>
                    <div class="content">
                        <h2>Hover Style #1</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-third">
                    <img src="@/assets/img/personal/gallery-img3.jpg">
                    <div class="mask">
                        <h2>Hover Style #3</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-fourth">
                    <img src="@/assets/img/personal/gallery-img4.jpg">
                    <div class="mask">
                        <h2>Hover Style #3</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-fifth">
                    <img src="@/assets/img/personal/gallery-img5.jpg">
                    <div class="mask">
                        <h2>Hover Style #3</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-sixth">
                    <img src="@/assets/img/personal/gallery-img6.jpg">
                    <div class="mask">
                        <h2>Hover Style #3</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-seventh">
                    <img src="@/assets/img/personal/gallery-img7.jpg">
                    <div class="mask">
                        <h2>Hover Style #3</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-eighth">
                    <img src="@/assets/img/personal/gallery-img8.jpg">
                    <div class="mask">
                        <h2>Hover Style #3</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
            <div class="view view-ninth">
                    <img src="@/assets/img/personal/gallery-img8.jpg">
                    <div class="mask mask-1"></div>
                    <div class="mask mask-2"></div>
                    <div class="content">
                        <h2>Hover Style #9</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-tenth">
                    <img src="@/assets/img/personal/gallery-img8.jpg">
                    <div class="mask">
                        <h2>Hover Style #10</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
            </div> 

        </div>
   
 

    </div>
</template>
<script>
import {swiper,swiperSlide} from "vue-awesome-swiper"
// import $ from 'jquery'
// import "fullpage.js"; 

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
        this.swiper.slideTo(3, 1000, false);
        // this.nextTick(() => {
        //  $('#fullpage').fullpage({
        //   //resize字体是否随窗口缩放而缩放，默认false
        //   resize: true,
        //   //scrollingSpeed设置滚动速度，单位毫秒，默认700
        //   scrollingSpeed: 700,
        //   //css3是否使用CSS3 transforms来实现滚动效果，默认为true。若浏览器不支持CSS3，则会用Jquery来实现
        //   css3: true,
        //   fixedElements: "#navList",
        //   continousVertical: true,
        //   //navigationTooltips导航小圆点的提示，注意按顺序设置
        //   navigationTooltips: ['page1', 'page2', 'page3', 'page4', 'page5'],
        //   //showActiveTooltip是否显示当前页面的tooltip信息，默认为false
        //   showActiveTooltip: true,
        //   //slidesNavPosition横向导航的位置，默认为bottom，可以设置为top或bottom
        //   slidesNavPositon: "top",
        //   //scrollOverflow内容超过满屏后是否显示滚动条，默认为false,如果为true则会显示滚动条，若需滚动查看内容还需要jquery.slimscroll插件的配合
        //   scrollOverflow:false,
        // });
    //   });
    },
    methods:{
        toggleBackfaces(){
            var backfacesVisible = document.getElementById('backfaces').checked;
            var shape = document.getElementById('shape');
            if (backfacesVisible)
                this.addClassName(shape, 'backfaces');
            else
                this.removeClassName(shape, 'backfaces');
        },   
        toggleShape(){
            var shape = document.getElementById('shape');
            if (this.hasClassName(shape, 'ring')) {
                this.removeClassName(shape, 'ring');
                this.addClassName(shape, 'cube');
            } else {
                this.removeClassName(shape, 'cube');
                this.addClassName(shape, 'ring');
            }
            
            // Move the ring back in Z so it's not so in-your-face.
            var stage = document.getElementById('stage');
            if (this.hasClassName(shape, 'ring'))
                stage.style.webkitTransform = 'translateZ(-200px)';
            else
                stage.style.webkitTransform = '';
        },
        hasClassName(inElement, inClassName){
            var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
            return regExp.test(inElement.className);
        },
        addClassName(inElement, inClassName){
            if (!this.hasClassName(inElement, inClassName))
                inElement.className = [inElement.className, inClassName].join(' ');
        },
        removeClassName(inElement, inClassName){
            if (this.hasClassName(inElement, inClassName)) {
                var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
                var curClasses = inElement.className;
                inElement.className = curClasses.replace(regExp, ' ');
            }
        },
        toggleClassName(inElement, inClassName){
            if (this.hasClassName(inElement, inClassName))
                this.removeClassName(inElement, inClassName);
            else
                this.addClassName(inElement, inClassName);
        }
    },


}
</script>
<style lang="scss" scoped>
    @import "./personal.scss"
</style>