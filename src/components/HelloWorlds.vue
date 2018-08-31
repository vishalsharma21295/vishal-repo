<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    
    <label>Firstname: </label>
    <input type='text' class='inputClass' v-on:keyup='getData'>
    <br />
    <label>Lastname: </label>
    <input type='text' class='inputClass' v-on:keyup='getLast'>
    <br />
    <label>Email ID:    </label>
    <input type='Email' class='inputClass' v-on:keyup='getEmail'>
    <br />
    <label>Password: </label>
    <input type='password' class='inputClass' v-on:keyup='getPassword'>
    <br />
    <input type='submit' @click='submit'/>
    <table>
      <tr>
        <td>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Password</th>
        </td>
      </tr>
        <tr v-if='seen'>
        <td>
          <th>{{name}}</th>
          <th>{{last}}</th>
          <th>{{email}}</th>
          <th>{{pass}}</th>
        </td>
      </tr>
       
    </table>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorlds',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:'',
      seen:false, 
      last:'',
      email:'',
      pass:'',
      count:0
    }
  },
  methods:{
    change:function(){
      this.count += 1;
    },
    getData:function(e){
      this.name = e.target.value;
    },
    getLast:function(e){
      this.last = e.target.value;
    },
    getEmail:function(e){
      this.email = e.target.value;
    },
    getPassword:function(e){
      this.pass = e.target.value;
    },
    submit:function(e){
      console.log('First name'+this.name+'Last Name'+this.last+'Email'+this.email+'Password'+this.pass);
      this.seen=true;
      
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
th {
  width: 100px;
    height: 20px;
    border: 1px solid grey;
}
.inputClass {
  margin: 10px;
}
</style>
