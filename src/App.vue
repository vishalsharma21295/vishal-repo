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
	<div>With computed property : {{reverse}}</div>
	<div>STORE DATA ======= {{ msgNew }}</div>
	<button @click="increment">Store update</button>
	<button @click="increments">Error msg</button>
	<button @click="decrement">Store decre</button>
	<div> om click count increment{{ count }}</div>
	<button @click="countcall">click to increment</button>
	<button @click="msgss">Click to show</button>
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
	<h1>Actions work</h1>
		<div>{{ msgNew }}</div>
		<button @click ="actionWork">Action</button>
		<button @click ="actionWorkSecond">Dis-action</button>
  </div>
</template>

<script>

import {EventBus} from '@/main.js';

export default {
	name : 'App',
	
	data () {
		return {
			  msg: 'Change',
			  watchData : ''
		}
	},
	computed : {
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
		}
	},
	watch : {
		watchData:function() {
		}
	},
	methods : {
		actionWork() {

			EventBus.$emit('eventWork',"Hello EventBus");

			this.$store.dispatch('actionWork');
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
	},
	mounted() {
	
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
