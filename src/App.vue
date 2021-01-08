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
        <SortUser/>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import SortUser from './components/SortUser.vue'

export default {
  name: 'App',
  components: {
    Welcome,
    SortUser
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
    background-color: #02092b;
    height: 100vh;
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
  margin-top: 70px;
  width: 50%;
}

.right{
  right: 0;
  margin-right: 10px;
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
