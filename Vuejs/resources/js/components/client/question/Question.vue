<style>
.list-function {
  font-size: 1.2em;
  font-weight: 700;
}

.notfirst {
  margin-left: 40px;
}
</style>
<template>
  <div>
      <div class="row">
        <div class="col-md-8">
          <router-link to="/questions" href="#" class="list-function">Newlist</router-link>
          <router-link to="/series" class="list-function notfirst">Series</router-link>
          <router-link to="/following" class="list-function notfirst">Following</router-link>
          <router-link to="/following" class="list-function notfirst">Trendings</router-link>
          <router-link to="/following" class="list-function notfirst">Videos</router-link>
          <router-link to="/following" class="list-function notfirst">Editor's Choice</router-link>
        </div>
        <div v-if="$root.userLogged != null" class="col-md-4">
          <router-link to="/question/ask" type="button" class="btn btn-primary "><i class="fa fa-pen"></i>Ask Question</router-link>
        </div>
      </div>
      <br><br>
      <div class="row">
          <div class="col-md-8">
            <router-view></router-view>
          </div>
          <div class="col-md-4">
            Newest Question
            <!-- this is a component -->
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
