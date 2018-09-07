<template>
	<div id="app">
    <h1>Form Data</h1>
		<router-link class="link" to="/">Home</router-link>
		<router-link class="link" to="/blog/10">Blog</router-link>
		<router-link class="link" to="/contact">Contact Us</router-link>
		<router-link class="link" to="/career">Career</router-link>
		<router-link class="link" to="/about">About Us</router-link>
    <router-view/> 
	<div> Normal data msg : {{msg}}</div>
	<br>
	<input type="text" v-model ="watchData" > =>> {{watchData}}
	<br>
	<hr>
		<ul>
  				<li v-for="(item,index) in jsonobject">
    			{{index}}	=>>{{ item }} 
  				</li>
			</ul>
	<div>With computed property : {{reverse}}</div>
	<div>STORE DATA ======= {{ msgNew }}</div>
	<button @click="increment">Store update</button>
	<button @click="increments">Error msg</button>
	<button @click="decrement">Store decre</button>
	<div> om click count increment{{ count }}</div>
	<button @click="countcall">click to increment</button>
	<button @click="msgss">Click to show</button>
	<ul>	
		<li v-for = 'item in getUp' >
			{{ item.id }} = {{ item.name }}
		</li>
	</ul>
	===<br>
	===<br>
	===<br>
	===<br>
	===<br>
	===<br>
	===<br>
	<br>
	<h1>Mutation work</h1>
	<ul>	
		<li v-for = 'item in userStore' >
			{{ item.id }} = {{ item.name }}=={{ item.emailid }}
		</li>
	</ul>	
		<button @click ="pushEle">Add Element</button>
		===<br>
	===<br>
	===<br>
	===<br>
	===<br>
	===<br>
	===<br>
	<br>
	<h1>Actions work  ==> {{getUpdates}}</h1>
	<div>
			<ul>
  				<li v-for="item in msgData">
    				{{ item.id }} ==> {{ item.name }}
  				</li>
			</ul>
		</div>
		<div>{{ msgNew }}</div>
		<button @click ="actionWork">Action</button>
		<button @click ="actionWorkSecond">Dis-action</button>
		<button @click ="customE">================SOCKET BUTTON=================</button>
		
  </div>
</template>

<script>

import {EventBus} from '@/main.js';
import socket from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
import  { mapGetters} from 'vuex'

export default {
	name : 'App',
	data () {
		return {
			  msg: 'Change',
			  watchData : '',
			  msgData:[
				  {name:"Death Note",id:"6"}
			  ],
			  jsonobject : {}
		}
	},
	socket : {
		connect : function() {
			console.log("socket server is connected")
		},
		customEvents : function(data) {
			console.log(data,"Custom event is fired, like socket.on('customeEvent',function(data){}")
		}
	},
	computed : {
		...mapGetters ({
				getUpdates : 'getlist',
				getUp: 'getSocket'
		}),
		userStore:function(){
			return this.$store.state.userStore
		},
		msgNew: function(){
			return this.$store.state.msgNew
		},
		count(){
			return this.$store.state.count
		},
		reverse : function(){
			this.watchData += "hello";
			return this.msg.split('').reverse().join('')
		},
		customEvents: function(data){
			return data
		}
	},
	watch : {
		watchData:function() {
		}
	},
	created: function(){
		console.log("Mutations work=====",this.getlist)
		// this.actionWork();
	},
	mounted :function(){
		this.$socket.on('customEvent',(data)=>{
			this.msgData=data
			var set = {name:"JUSTICE LEAGUE",id:"5"};
			this.msgData.push(set)
			var self = this
			for(var i=0 ; i< self.msgData.length; i++){
				this.jsonobject[this.msgData[i].id]= this.msgData[i].name
			}
			console.log(this.jsonobject)
		})
		this.$socket.on('connects',(data)=>{
			// this.msgData.push(data)
			console.log("ddddd>>>>>")
			this.jsonobject[data.id] = data.name
			
		})
		this.$socket.on('workEvent',(data)=>{
				this.jsonobject[data.id] = data.name
				console.log(this.jsonobject)
		})
		this.$socket.on('pushEvent', (data)=>{
			console.log(">>>>>")
			this.jsonobject[data.id] = data.name
			console.log(this.jsonobject)
			// this.msgData.filter((item, index) => {
			// 	if(item.id == data.id){ 
			// 		var indexs = this.msgData.indexOf(item)
			// 		this.msgData.splice(indexs,1)
			// 		this.msgData[indexs] = data
			// 		console.log("<<<<<<<<",this.msgData)
			// 	}
			// })
		})
		this.actionWork(this.msgData);
	},
	methods : {
		customE(){

		},
		actionWork(data) {
			var set = {name:"LIMITLESS",id:"8"};
			this.msgData.push(set)
			
			this.$socket.emit("customEvents","Data comes from front end")
			EventBus.$emit('eventWork',"Hello EventBus");
			this.$store.dispatch('actionWork', "hello world");
			this.$store.dispatch('actionSocket',this.msgData)
		},
		actionWorkSecond(){
			
			this.$store.dispatch('actionWorkSecond');
		},
		pushEle(){
			var newUser = {
                name : 'vishal ',
                id : '12',
                emailid : 'vishal@gmail.com'
            };
			this.$store.commit('pushEle',newUser)
		},
		increment (){
			this.$store.commit('increment')
		},
		increments (){
			this.$store.commit('increments')
		},
		decrement (){
			this.$store.commit('decrement')
		},
		countcall(){
			this.$store.commit('countcall',3)
		},
		msgss : function(){
			this.msg =this.msg.split('').reverse().join('')
		}
	}
	
}
</script>
<style>
	#app {
  	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	text-align: center;
  	color: #2c3e50;
  	margin-top: 20px;
	}
	.link{
		width: 40px;
		height: 20px;
		border: 1px solid grey;
		padding:10px;
		margin-right:-5px;
		text-decoration:none;
	}
</style>
