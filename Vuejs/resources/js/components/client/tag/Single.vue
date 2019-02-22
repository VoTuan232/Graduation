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
          <router-link :to="'/t' + slug" href="#" class="list-function">Posts</router-link>
          <router-link to="/series" class="list-function notfirst">Questions</router-link>
          <router-link to="/following" class="list-function notfirst">Following</router-link>
          <router-link to="/following" class="list-function notfirst">Trendings</router-link>
          <router-link to="/following" class="list-function notfirst">Videos</router-link>
          <router-link to="/following" class="list-function notfirst">Editor's Choice</router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/questions/ask" type="button" class="btn btn-primary "><i class="fa fa-pen"></i>Ask Question</router-link>
        </div>
      </div>
      <br><br>
      <div class="row">
            <router-view :tagData="tag"></router-view>
      </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        slug: this.$route.params.slug,
        tag: {},
      }
    },

    methods: {
      getTagSingle() {
        axios.get('t/'+this.slug)
        .then(response => this.tag = response.data);
      },
    },

    created() {
       this.$Progress.start();
      this.getTagSingle();
            this.$Progress.finish();
    }
  }
</script>
