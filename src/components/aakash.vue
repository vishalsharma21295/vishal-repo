<template>
        <div>
        <h1>Akash component!!!</h1>
        
        <div id="store">
            <p>{{ msgNew }}</p>
            <button @click = 'actionWork'> Click on</button>
        </div>
        <div><h1> {{ akash }}</h1></div>
        <button @click="eventBuzz">Click on button to see data change using eventbuzz</button>
        </div>
</template>
<script>

import { EventBus } from '@/main.js'
export default {
    name:'akash',
    props:['us'],
    data() {
        return {
            akash:"Akash Component child data present",
            user: [
                {name:"vishal",id:"1"},
                {name:"sharma",id:"2"},
                {name:"abhishek",id:"3"},
                {name:"sharma",id:"4"}
            ]
        }
    },
    computed: {
        msgNew: function(){
			return this.$store.state.msgNew
		}
    },
    methods:{
        eventBuzz(){
            var payload = this.user
            var akshEvent = this.akash
            // alert(payload)
            EventBus.$emit('eventBuzzButton',akshEvent)
        },
        actionWork() {
            this.$store.commit('increment')
        }
    },
    created () {
    }
}
</script>
<style>
    #store {
        width:400px;
        height: 100px;
        border: 2px solid grey;
    }
    p {
        width:200px;
        height: 30px;
        border: 1px solid red
    }
</style>