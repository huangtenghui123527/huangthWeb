<template>
    <div id="tecNav">
        <ul>
            <li><router-link :to="{path:'/myTechnology/tecOne'}">目录一</router-link></li>
            <li>
                <title>目录二</title>
                <ul>
                    <li><router-link :to="{path:'/myTechnology/tecOne'}">目录二-1</router-link></li>
                    <li><router-link :to="{path:'/myTechnology/tecOne'}">目录二-2</router-link></li>
                    <li><router-link :to="{path:'/myTechnology/tecOne'}">目录二-3</router-link></li>
                </ul>
            </li>
            <li><router-link :to="{path:'/myTechnology/tecOne'}">目录三</router-link></li>
            <li><router-link :to="{path:'/myTechnology/tecOne'}">目录四</router-link></li>
            <li><router-link :to="{path:'/myTechnology/tecOne'}">目录五</router-link></li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    #tecNav{
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
        a{
            color: white;
        }
    }
</style>