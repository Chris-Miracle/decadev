<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6">
        <div class="split left">
          <h1>Hello, <strong> Chris</strong></h1>
          <Welcome msg="Welcome to your dashboard, kindly sort the user base."/>
          <div class="user">
              <p class="show-user">Show Users</p>
          </div>
          <div class="container">
              <div v-on:click="users()" class="button-pink "><i class="fas fa-users"></i></div>
              <div v-on:click="male()" class="button-green"><i class="fas fa-male"></i></div>
              <div v-on:click="female()" class="button-purple"><i class="fas fa-female"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="split right">
        <div v-show="Allusers">
          <Users/>
        </div>
        <div v-show="Maleusers">
          <MaleUsers/>
        </div>
        <div v-show="Femaleusers">
          <FemaleUsers/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import Users from './components/Users/Users.vue'
import MaleUsers from './components/Users/MaleUsers.vue'
import FemaleUsers from './components/Users/FemaleUsers.vue'

export default {
  name: 'App',
  components: {
    Welcome,
    Users,
    MaleUsers,
    FemaleUsers
  },
  data(){
    return{
        Allusers: true,
        Maleusers: false,
        Femaleusers: false
    }
  },
  methods:{
    users(){
      this.Femaleusers = false
      this.Maleusers = false
      this.Allusers = true
    },
    male(){
      this.Allusers = false
      this.Femaleusers = false
      this.Maleusers = true
    },
    female(){
      this.Allusers = false
      this.Maleusers = false
      this.Femaleusers = true
    }
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

.show-user{
    color: #ffff;
}

.container{
	display: grid;
	width: 50%;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 2.5em;
	padding-top: 20px;
}

.button-green{
	padding: 18px;
	text-align: center;
	cursor: pointer;
	background-color: #6ebe99;
	color: white;
	font-size: 3em;
	border-radius: 15px;
	transition: .3s;
    width: 50px;
}

.button-pink{
    padding: 15px;
	text-align: center;
	cursor: pointer;
	background-color: rgb(238, 76, 238);
	color: white;
	font-size: 3em;
	border-radius: 15px;
	transition: .3s;
    width: 70px;
}

.button-purple{
    padding: 18px;
	text-align: center;
	cursor: pointer;
	background-color: purple;
	color: white;
	font-size: 3em;
	border-radius: 15px;
	transition: .3s;
    width: 50px;
}
    .button-pink:hover {
		/* box-shadow: 10px 10px 10px fuchsia; */
		transform: scale(1.09);
		background-color: rgb(238, 76, 238);
		color: #fff;
	}

    .button-green:hover {
		/* box-shadow: 10px 10px 10px fuchsia; */
		transform: scale(1.09);
		background-color: rgb(102, 219, 102);
		color: #fff;
	}

    .button-purple:hover {
		/* box-shadow: 10px 10px 10px fuchsia; */
		transform: scale(1.09);
		background-color: rgb(187, 41, 187);
		color: #fff;
	}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
