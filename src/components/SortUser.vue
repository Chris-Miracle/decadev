<template>
    <div class="sortuser-box">
        <div class="box">
            <h1>All Users</h1>
            <p>Filter by</p>
            <div class="container">
                <div class="search-box">
                    <div class="search">
                        <a class="search-btn" href="#" >
                            <i class="fas fa-search"></i>
                        </a>
                        <input  class="search-txt" type="text" name="" placeholder="Find in list">
                    </div>
                </div>
                <div class="dropdown">
                    <div class="search">
                        <select name="country" class="dropdown-txt">
                            <option value="country">Country</option>
                        </select>
                        <!-- <a class="search-btn" href="#" >
                            <i class="fas fa-search"></i>
                        </a> -->
                    </div>
                </div>
                <div class="switch-country" style="margin-top:15px;">
                    <div class="switch">
                        <input type="checkbox" checked class="switch">
                        <label>Show Country</label>
                    </div>
                </div>
            </div>
            <Users/>
            <div class="container-2">
                <div class="dowload">
                    <div class="button-purple"><i class="fas fa-download"></i> Download Results</div>
                </div>
                <div class="paginate">
                    <div class="button-gray"><i class="fas fa-chevron-left"></i></div>
                    <div class="button-black"><i class="fas fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Users from './Users.vue'

export default {
    name: 'SortUser',
    components: 
    {
        Users
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sortuser-box{
    background-color: #fff;
    width: 100%;
    height: 740px;
    border-radius: 30px;
    margin-top: 10px;
}

.box{
    margin-top: 0;
    padding: 40px;
    padding-left: 65px;
    text-align: left;
    /* padding-left: 30px; */
}

h1{
    color: #000;
    margin: 0;
}

.container{
	display: grid;
	width: 50%;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 2.5em;
}

.search{
    height: 30px;
    width: 100%;
    border: none;
    border-radius: 1.2rem;
    padding: 10px;
    margin-bottom: 20px;
    background-color: rgba(77, 70, 59, 0.13);
    /* opacity: 0.1; */
    /* border: 1px solid #e6e6e6; */
    display: flex;
    justify-content: space-between;
}
.search-txt{
    border: none;
    background: none;
    outline: none;
    flex: 1;
    padding: 0 10px;
    color:gray ;
    font-size: 16px;
}

.dropdown{
    margin-right: 8px;
}

.dropdown-txt{
    border: none;
    background: none;
    outline: none;
    flex: 1;
    padding: 0 10px;
    color: gray ;
    font-size: 16px;
    margin-left: 5px;
    font-weight: bolder;
}

/* select, option{
    border: none;
    background: none;
    outline: none;
    flex: 1;
    padding: 0 10px;
    color: gray ;
    font-size: 16px;
} */

.search-btn,
.speack-btn{
    color: gray;
    width: 20px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.switch{
    display: flex;
}

label{
    font-size: 12px;
}

input::placeholder{
    color: gray;
    font-weight: bolder;
}

input[type="checkbox"].switch{
    appearance: none;
    width: 3.5em;
    height: 1.5em;
    background: #ddd;
    border-radius: 3em;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: all .2s ease-in-out;
}

input[type="checkbox"].switch:checked{
    background: #6ebe99;
}

input[type="checkbox"].switch:after{
    position: absolute;
    content: "";
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 .25em rgba(0,0,0,.3);
    transform: scale(.7);
    left: 0;
    transition: all .2s ease-in-out;
}

input[type="checkbox"].switch:checked:after{
    left: calc(100% - 1.5em);
}

.container-2{
	display: grid;
	width: 100%;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 18.5em;
    justify-content: space-between;
}

.button-purple{
	padding: 15px;
	text-align: center;
	cursor: pointer;
	background-color: #02092b;
	color: white;
	font-size: 1em;
	border-radius: 20px;
	transition: .3s;
    width: 100%;
}

.paginate{
	display: flex;
	/* width: 50%; */
    /* margin-top: 20px; */
    /* justify-content: left; */
}

.button-gray{
	padding: 10px;
	text-align: center;
	cursor: pointer;
	background-color: rgb(218, 210, 210);
	color: #000;
	font-size: 1em;
	border-radius: 7px;
    width: 30px;
    margin: 3px;
}

.button-black{
	padding: 10px;
	text-align: center;
	cursor: pointer;
	background-color: rgb(19, 18, 18);
	color: rgb(243, 239, 239);
	font-size: 1em;
	border-radius: 7px;
    width: 30px;
    margin: 3px;
}

</style>
