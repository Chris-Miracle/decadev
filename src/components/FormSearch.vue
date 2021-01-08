<template>
    <div class="search">
        <a class="search-btn" href="#" >
            <i class="fas fa-search"></i>
        </a>
        <input  class="search-txt" type="text" name="" placeholder="Find a user">
    </div>
    <FindUser/>
</template>

<script>
import FindUser from './FindUser.vue';

export default {
    name: 'FormSearch',
    components: {
        FindUser,
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400');
    .search{
    height: 40px;
    width: 60%;
    border: none;
    border-radius: 1.2rem;
    padding: 10px;
    margin-bottom: 50px;
    background-color: rgba(245, 222, 179, 0.13);
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
    color:#fff ;
    font-size: 16px;
}

.search-btn,
.speack-btn{
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

input::placeholder{
    color: white;
}
</style>