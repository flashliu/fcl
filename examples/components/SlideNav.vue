<template>
    <div class="list-group">
        <router-link :to="i.path" class="list-group-item" :class="{active:$route.path==i.path}" :key="i.name" v-for="i in data">{{i.desc}}</router-link>
    </div>
</template>
<script>
import navConfig from "../nav.config";
export default {
  name: "SlideNav",
  data(){
      return{
          data:navConfig
      }
  }
};
</script>
