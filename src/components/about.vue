
<template>
    <div id="blog">
        <h1>This is a About us Page {{$route.params.teamId}}</h1>
        
        <h3> Hello {{names}}</h3>
        <button @click="goHome">Go contact!!!</button>
        <input type="type" id="jack"  v-on:keyup ="nameNew" >
        <input type="type" id="john" v-on:keyup ="idNew" >
        <input type="type" id="mike" v-on:keyup ="emailNew" >
        <div >Heeloo Eventbus working</div>
        <div>Store wala data===>> {{msgNew}}
            <button @click="aboutButton">About button</button>
            </div>
        <br>
        <button v-on:click="name">click</button>
    </div>
</template>
<script> 
import {EventBus} from '@/main.js'
export default {   
    name:'blog',
    props:{
        names: {
            type : String,
            default : 'mike'
        }
    },
    computed:{
        msgNew(){
            return this.$store.state.msgNew
        }
    },
    data() {
        return {
            user : [
            {
                name : 'Akash ',
                id : '1',
                emailid : 'akash@gmail.com'
            },
            {
                name : 'Paras ',
                id : '2',
                emailid : 'paras@gmail.com'
            },
            {
                name : 'piyush',
                id : '3',
                emailid : 'piyush@gmail.com'
            }
        ]
        }
    },
    mounted (){
    },
    methods :{
        aboutButton(){
            this.$store.commit('aboutButton')
            
        },
        goHome(){
            this.$router.push('/contact');
          
        },
        name(){
            let obj = {
                name:"vishal",
                id:"2",
                emailid :"abc@gmail.com"
            };
            var abc = this.user.push(obj);
        },
        nameNew:function(){
            var name = e.target.value
        },
        idNew:function(){
           var id = e.target.value
        },
        emailNew:function(){
           var email = e.target.value
        }
    }
}
</script>
<style>
    #blog {
        margin-top:20px;
    }
</style>