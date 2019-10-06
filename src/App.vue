<!-- 1. 템플릿 -->
<template>
  <div id="app">
    <button class="btn btn-primary">Button</button>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<!-- 2. 스크립트 -->
<script>
export default {
  name: 'App'
}

</script>

<!-- 3. 스타일 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
