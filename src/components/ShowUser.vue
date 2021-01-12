<template>
    <div v-show="Hide" class="wrapper">
        <div>
            <div @click="HideComp"  class="button-green-show"><i class="fas fa-arrow-left"></i><span style="cursor: pointer;">  RESULTS</span></div>
        </div>
                <div class="container-1">
                    <div class="image"><img src="@/assets/check.jpg" ></div>
                    <div class="info">
                        <h3>{{ userDetails.name }}<span style="font-weight: lighter;">23</span></h3>
                        <i><p>No 5 Okoro Street Off 57 Immaculate.</p></i>
                    <!-- <div class="row"> -->
                        <div class="container-3">
                            <div class="email">
                                <span><i class="fas fa-envelope" ></i></span>
                                <div class="content">
                                    <small>chrisstarkmira15@gmail.com</small>
                                </div>
                            </div>
                            <div class="date">
                                <span>JOINED:</span>
                                <div class="content">
                                    <small>2020-01-08</small>
                                </div>
                            </div>
                            <div class="phone">
                                <span><i class="fas fa-phone-volume"></i></span>
                                <div class="content">
                                    <small> 0903857937</small>
                                </div>
                            </div>
                            <div class="phone">
                                <span><i class="fas fa-mobile"></i></span>
                                <div class="content">
                                    <small> 0903857937</small>
                                </div>
                            </div>
                        </div>
                    <!-- </div> -->
                    </div>
                    <!-- <div class="show-user">
                        <div class="button-green-user"><i class="fas fa-arrow-right"></i></div>
                    </div> -->
                </div>
            <!-- <ShowUser/> -->
            </div>
</template>

<script>
export default {
    name: 'ShowUser',
    props:{
        User_Roll: Boolean,
        userDetails : {}
    },
    data(){
        return{
            Hide: true,
        }
    },
    methods:{
        HideComp(){
            this.Hide = false;
            this.$emit('ShowUserRoll');
        }
    }
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

/* .wrapper{
    margin: 40px;
} */

.button-green-show{
    margin: 22px;
}

.container-1{
	display: grid;
	width: 50%;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2em;
}

img{
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 6px solid #6ebe99;
}

.email{
    padding: 12px;
    background-color: rgb(187, 193, 209);
    border: none;
    border-radius: 25px;
}

.date{
    padding: 12px;
    background-color: rgb(235, 206, 211);
    border: none;
    border-radius: 25px;
    width: 150px;
}

.email, .phone, .date{
    display: flex;
    text-align: center;
    color: gray;
    font-size: 16px;
    font-weight: lighter;
    margin-bottom: 15px;
}


.content{
    margin-left: 10px;
}


</style>