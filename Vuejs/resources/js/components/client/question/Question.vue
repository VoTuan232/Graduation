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
          <router-link to="/series" class="list-function notfirst">Unsolved</router-link>
        </div>
        <div class="col-md-4">
          <router-link v-if="$auth.check()" to="/question/ask" type="button" class="btn btn-primary "><i class="fa fa-pen"></i>Ask Question</router-link>
        </div>
      </div>
      <br><br>
      <div class="row">
          <div class="col-md-8">
            <router-view></router-view>
          </div>
          <div class="col-md-4">
            <newest-post></newest-post>
            <div class="container">
              TOP AUTHOR
            </div>
          </div>
      </div>
  </div>

</template>

<script>
  import NewestPost from './NewestPost';

  export default {
    components: {NewestPost},
    data() {
      return {

      }
    }
  }
</script>
