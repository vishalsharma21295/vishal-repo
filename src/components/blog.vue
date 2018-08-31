
<template>
    <div id="blog">
        <h1>This is a Blog Page {{teamId}}</h1>
        <akash></akash>
        <justcheck></justcheck>
        <career :justpass= "msg"></career>
        <button @click="goHome">Go Career!!!</button>
        <div><h1>{{ eventBuzz}}</h1></div>
        <button>Eventbuzz</button>
    </div>
</template>
<script>
import akash from "@/components/aakash";
import justcheck from "@/components/justcheck";
import career from "@/components/career";
import { EventBus } from "@/main.js";
export default {
  name: "blog",
  data() {
    return {
      msg: "hi blog!!",
      eventBuzz: "hello eventbuzz"
    };
  },
  components: {
    akash,
    justcheck,
    career
  },
  mounted() {},
  created() {
    this.teamId = this.$route.params.teamId;
    EventBus.$once("eventBuzzButton", payload => {
      console.log("hello=>>", payload);
      this.eventBuzz = payload;
    });
  },
  methods: {
    goHome() {
      this.$router.push("/career");
    }
  }
};
</script>
<style>
#blog {
  margin-top: 20px;
}
</style>