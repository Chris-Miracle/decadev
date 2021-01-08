<template>
    <div class="user">
        <p class="show-user">Show Users</p>
    </div>
    <div class="container">
        <div class="button-pink "><i class="fas fa-users"></i></div>
        <div class="button-green"><i class="fas fa-male"></i></div>
        <div class="button-purple"><i class="fas fa-female"></i></div>
    </div>  
</template>

<script>
export default {
    name: 'FindUser',
}
</script>

<style scoped>
.show-user{
    color: #ffff;
}

.container{
	display: grid;
	width: 50%;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1em;
	padding-top: 20px;
}

.button-green{
	padding: 18px;
	text-align: center;
	cursor: pointer;
	background-color: rgb(102, 219, 102);
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
	background-color: rgb(187, 41, 187);
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
</style>