<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6">
        <div class="split left">
          <h1>Hello, <strong> Chris</strong></h1>
          <Welcome msg="Welcome to your dashboard, kindly sort the user base."/>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="split right">
        <h1>Hello, <strong> Chris</strong></h1>
        <HelloWorld msg="Welcome to your dashboard, kindly sort the user base."/>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Welcome
  }
}
</script>

<style>
html, body{
    padding :0;
    margin : 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width : 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: #2c3e50;
}

.split {
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;
}

.left{
  left: 0;
  text-align: left;
  padding: 120px;
  margin-top: 160px;
}

.right{
  right: 0;
}

h1{
    color: #ffffff;
    font-weight: 200000px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
