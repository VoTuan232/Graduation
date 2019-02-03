<template>
  <div>
      <div>
          <router-link to="/" href="#">Newlist</router-link>
          <router-link to="/series">Series</router-link>
          <router-link to="/following">Following</router-link>
      </div>
      
      <div class="row">
        <div class="col-md-8">
          <router-view></router-view>
        </div>
        
        <div class="col-md-4">
          Newest Question
        </div>
      </div>
      
  </div>

</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
