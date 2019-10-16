<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from "@/components/header";
export default {
  name: 'App',
  components:{
    MyHeader
  }
}
</script>

<style lang="scss">
  body{
    background: url("./assets/img/bg.jpg") repeat;
  }
  #app{
    width: 1580px;
    // min-height: 1000px;
    margin: 0 auto;
    background: #eee;
  }
</style>
