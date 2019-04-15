<style>
.list-function {
  font-size: 1.2em;
  font-weight: 700;
}

.notfirst {
  margin-left: 40px;
}

.tag-image {
  height:50px;
  width: 100%;
}
</style>
<template>
  <div>
      <div class="row">
        <div class="col-md-1">
          <img src="/images/tag/tag.jpg" class="tag-image"/>
        </div>
        <div class="col-md-4">
          <h1>{{ tag.name }}</h1>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <router-link :to="'/t/' + slug" href="#" class="list-function">Posts</router-link>
            <router-link :to="'' + '/t/' + slug + '/questions'" class="list-function notfirst">Questions</router-link>
            <!-- <router-link to="/following" class="list-function notfirst">Followers</router-link> -->
          </div>
          <br>
          <div class="row">
            <router-view :tagData="tag"></router-view>
          </div>          
        </div>
        <div class="col-md-4">
          <information-tag-single :tagData="tag"></information-tag-single>
          <div class="col-md-12">
            <h4>Popular tags <span>_______________</span></h4>
          </div>
        </div>
      </div>
  </div>

</template>

<script>
  import InformationTagSingle from '../../asset/InformationTagSingle.vue';

  export default {
    components: {InformationTagSingle},

    data() {
      return {
        slug: this.$route.params.slug,
        tag: {
          posts: {},
          questions: {},
        },
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
