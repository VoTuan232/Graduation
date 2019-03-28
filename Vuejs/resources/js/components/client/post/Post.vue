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
          <router-link to="/" href="#" class="list-function">Newlist</router-link>
          <!-- <router-link to="/series" class="list-function notfirst">Series</router-link> -->
          <router-link v-if="$auth.check()" to="/following" class="list-function notfirst">Following</router-link>
          <router-link to="/trending" class="list-function notfirst">Trendings</router-link>
          <!-- <router-link to="/following" class="list-function notfirst">Videos</router-link> -->
          <!-- <router-link to="/following" class="list-function notfirst">Editor's Choice</router-link> -->
        </div>
        <div class="col-md-4">
          <router-link v-if="$auth.check()" to="publish/post" type="button" class="btn btn-primary "><i class="fa fa-pen"></i>Create Post</router-link>
        </div>
      </div>
      <br><br>
      <div class="row">
          <div class="col-md-8">
            <router-view :userPermission="userPermission"></router-view>
          </div>
          <div class="col-md-4">
            <newest-question></newest-question>
            <div class="container">
              TOP AUTHOR
            </div>
          </div>
      </div>
  </div>

</template>

<script>
  import NewestQuestion from './NewestQuestion';
  export default {
    props: ['userPermission'],
    components: {NewestQuestion},
    data() {
      return {
      }
    },
    created() {
      if(this.$auth.check()) {
        this.$emit('updatedUser');
      }
    }
  }
</script>
