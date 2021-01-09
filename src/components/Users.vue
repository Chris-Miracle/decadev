<template>
    <div class="wrapper">
        <div class="container-1">
            <div class="image"><img src="@/assets/check.jpg" ></div>
            <div class="info">
                <h3>Chris Miracle</h3>
                <i><p>No 5 Okoro Street Off 57 Immaculate.</p></i>
                <!-- <div class="row"> -->
                    <div class="container-2">
                    <div class="email">
                            <span><i class="fas fa-envelope" aria-hidden="true"></i></span>
                            <div class="content">
                                <small>chrisstarkmira15@gmail.com</small>
                            </div>
                        </div>
                        <div class="phone">
                            <span><i class="fas fa-phone-volume"></i></span>
                            <div class="content">
                                <small> 0903857937</small>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
            </div>
            <div class="show-user">
                <div class="button-green"><i class="fas fa-arrow-right"></i></div>
            </div>
        </div>
        <div class="container-1">
            <div class="image"><img src="@/assets/check.jpg" ></div>
            <div class="info">
                <h3>Chris Miracle</h3>
                <i><p>No 5 Okoro Street Off 57 Immaculate.</p></i>
                <!-- <div class="row"> -->
                    <div class="container-2">
                    <div class="email">
                            <span><i class="fas fa-envelope" aria-hidden="true"></i></span>
                            <div class="content">
                                <small>chrisstarkmira15@gmail.com</small>
                            </div>
                        </div>
                        <div class="phone">
                            <span><i class="fas fa-phone-volume"></i></span>
                            <div class="content">
                                <small> 0903857937</small>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
            </div>
            <div class="show-user">
                <div class="button-green"><i class="fas fa-arrow-right"></i></div>
            </div>
        </div>
        <div class="container-1">
            <div class="image"><img src="@/assets/check.jpg" ></div>
            <div class="info">
                <h3>Chris Miracle</h3>
                <i><p>No 5 Okoro Street Off 57 Immaculate.</p></i>
                <!-- <div class="row"> -->
                    <div class="container-2">
                    <div class="email">
                            <span><i class="fas fa-envelope" aria-hidden="true"></i></span>
                            <div class="content">
                                <small>chrisstarkmira15@gmail.com</small>
                            </div>
                        </div>
                        <div class="phone">
                            <span><i class="fas fa-phone-volume"></i></span>
                            <div class="content">
                                <small> 0903857937</small>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
            </div>
            <div class="show-user">
                <div class="button-green"><i class="fas fa-arrow-right"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Users',
}
</script>

<style scoped>
h1{
    color: #000;
}

h3{
    margin: 0px;
}

p{
    margin-top: 10px;
}

.wrapper{
    margin: 40px;
}

.container-1{
	display: grid;
	width: 50%;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1em;
}

img{
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 6px solid #6ebe99;
}

.container-2{
	display: grid;
	width: 50%;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1em;
}

.email, .phone{
    display: flex;
    text-align: center;
    color: gray;
    font-size: 16px;
    font-weight: lighter;
}

.row{
    display: grid;
	width: 50%;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 3.5em;
}

.content{
    margin-left: 10px;
}

.button-green{
	padding: 8px;
	text-align: center;
	cursor: pointer;
	background-color: #6ebe99;
	color: white;
	font-size: 1em;
	border-radius: 7px;
    width: 30px;
    margin: 50px;
}

</style>