<template>
    <div id="rotate">
        <div class="box">
            <ul class="minbox">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ol class="maxbox">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #rotate{
        padding: 10px;
        position: relative;
        height: 400px;
        .box{
            width: 200px;
            height: 200px;
            position: absolute;
            left: 0;
            top:0;
            bottom: 0;
            right: 0;
            margin: auto auto;
            transform-style: preserve-3d;
            transform: rotateX(13deg);
            animation: move 5s linear infinite;
            .minbox{
                width: 100px;
                height: 100px;
                position: absolute;
                left: 50px;
                top: 30px;
                transform-style: preserve-3d;
                li{
                    width: 100px;
                    height: 100px;
                    left: 0;
                    top: 0;
                    position: absolute;
                    &:nth-child(1){
                        background: url('~@/assets/img/rotats/01.png') no-repeat 0 0;
                        transform: translateZ(50px);
                    }
                    &:nth-child(2){
                        background: url('~@/assets/img/rotats/02.png') no-repeat 0 0;
                        transform:rotateX(180deg) translateZ(50px);
                    }
                    &:nth-child(3){
                        background: url('~@/assets/img/rotats/03.png') no-repeat 0 0;
                        transform:rotateX(-90deg) translateZ(50px);
                    }
                    &:nth-child(4){
                        background: url('~@/assets/img/rotats/04.png') no-repeat 0 0;
                        transform:rotateX(90deg) translateZ(50px);
                    }
                    &:nth-child(5){
                        background: url('~@/assets/img/rotats/05.png') no-repeat 0 0;
                        transform:rotateY(-90deg) translateZ(50px);
                    }
                    &:nth-child(6){
                        background: url('~@/assets/img/rotats/06.png') no-repeat 0 0;
                        transform:rotateY(90deg) translateZ(50px);
                    }
                }
            }
            .maxbox{
                width: 800px;
                height: 400px;
                position: absolute;
                left: 0;
                top: -20px;
                transform-style: preserve-3d;
                li{
                    width: 200px;
                    height: 200px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    opacity: .2;
                    transition: all 2s ease;
                    &:nth-child(1){
                        background: url('~@/assets/img/rotats/1.png') no-repeat 0 0;
                        transform: translateZ(100px)
                    }
                    &:nth-child(2){
                        background: url('~@/assets/img/rotats/2.png') no-repeat 0 0;
                        transform:rotateX(180deg) translateZ(100px)
                    }
                    &:nth-child(3){
                        background: url('~@/assets/img/rotats/3.png') no-repeat 0 0;
                        transform:rotateX(-90deg) translateZ(100px)
                    }
                    &:nth-child(4){
                        background: url('~@/assets/img/rotats/4.png') no-repeat 0 0;
                        transform:rotateX(90deg) translateZ(100px)
                    }
                    &:nth-child(5){
                        background: url('~@/assets/img/rotats/5.png') no-repeat 0 0;
                        transform:rotateY(90deg) translateZ(100px)
                    }
                    &:nth-child(6){
                        background: url('~@/assets/img/rotats/2.png') no-repeat 0 0;
                        transform:rotateY(-90deg) translateZ(100px)
                    }
                }
            }
            &:hover ol li{
                width: 400px;
                height: 400px;
                opacity: 0.5;
                left: -100px;
                top: -100px;
            }
            &:hover ol li:nth-child(1){
                transform: translateZ(200px);
            }
            &:hover ol li:nth-child(2){
                transform:rotateX(180deg) translateZ(200px);
            }
            &:hover ol li:nth-child(3){
                transform:rotateX(-90deg) translateZ(200px);
            }
            &:hover ol li:nth-child(4){
                transform:rotateX(90deg) translateZ(200px);
            }
            &:hover ol li:nth-child(5){
                transform:rotateY(-90deg) translateZ(200px);
            }
            &:hover ol li:nth-child(6){
                transform:rotateY(90deg) translateZ(200px);
            }
        }
    }
    @keyframes move {
        0%{
            transform: rotateX(13deg) rotateY(0deg);
        }
        100%{
            transform: rotateX(13deg) rotateY(360deg)
        }
    }
</style>