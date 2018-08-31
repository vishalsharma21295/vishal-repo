<template>
    <div id="blog">
        This is the new Contact Us page!!!
        <input type="type" id="jack"  v-on:keyup ="name" >
        <input type="type" id="john" v-on:keyup ="name" >
        <input type="type" id="mike" v-on:keyup ="name" >
        <br>
        <button v-on:click="name">click </button>
        <span>Checked names: </span>
    </div>
</template>
<script>
export default {
    name:'contact',
    data(){
        return {
        checkedNames: ''
        }
    },
    methods : {
        name:function(e){
           console.log(e.target.value)
        }
    }
}

</script>
<style>
    #blog {
        margin-top:20px;
    }
</style>