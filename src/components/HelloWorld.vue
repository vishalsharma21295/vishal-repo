<template>
  <div class="hello">
   {{msg}}
   <input type="text" v-model="msg" />
   <button v-on:click="show">Click on me </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Working Example of LifeCycle'
    }
  },
  methods: {
	  show: () => {
		  alert("cheddck");
	  }
  },
  beforeCreate () {
    console.log('BeforeCreated LifeCycle called')
  },
  created () {
    console.log('Created lifecycle called')
  },
  beforeMount () {
    console.log('BeforeMounted Lifecycle called')
  },
  mounted () {
    console.log('Mounted lifecycle called')
  },
  beforeUpdate () {
    console.log('Before Update called')
  },
  updated () {
    this.msg = 'hhh'
    console.log('update called')
  },
  beforeDestroy () {
    console.log('Before destroy called')
  },
  destroyed () {
    console.log('destroy called')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.hello {
  margin-top:20px;  
}
</style>
