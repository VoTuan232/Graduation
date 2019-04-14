/*List user's post who logged following*/


<style>
    .avatar-client {
    border-radius: 50%;
    height: 37px;
    width: 37px;
    }
    .client {
    color: #9b9b9b;
    }
    .btn-client {
    margin-right: 5px;
    }
</style>
<template>
    <div v-if="posts.length > 0" class="container">
        <div class="row"  v-for="x in showCount" :key="posts[x-1].id">
            <div class="col-md-1">
                <!-- <img v-if="post.user.avatar !=null" :src="'images/profile/' + post.user.avatar" class="avatar-client"> -->
                <img src="images/profile/profile.png" class="avatar-client">
            </div>
            <div class="col-md-11">
                <p>
                <!-- <router-link :to="'' + '/u/' + $root.changeEmail(post.user.email)" href="#">{{ post.user.name }}</router-link> -->
                    <!-- <user-popper :userData="post.user"></user-popper> -->
                {{ posts[x-1].created_at }}
                <br>
                <router-link :to="'/p/' + posts[x-1].slug">{{ posts[x-1].title }}</router-link>
                </p>
              <!--   <div  v-if="post.tags.length > 0" class="btn-group">
                    <tag-of-new :tagData="post.tags"></tag-of-new>
                </div> -->
                <p>
                    <i class="fas fa-eye client"></i>&nbsp;{{ posts[x-1].view }} &nbsp;&nbsp;&nbsp;
                    <i class="fa fa-comments client"></i>&nbsp;{{ posts[x-1].comments.length }}
                </p>
                <hr>
            </div>
        </div>
        <div>
            <a v-if="x in pageCount">{{ x+1 }}</a>
        </div>
      <!--   <div>
            <pagination  :data="posts" @pagination-change-page="getResults"></pagination>
        </div> -->
    </div>
    <div v-else class="container">
        There is nothing here!
    </div>
</template>
<script>
    export default {
    	data() {
    		return {
    			posts: '',
                showCount: 20,
                pageCount: '',
    		}
    	},
    
    	methods: {
    		getResults(page = 1) {
                   axios.get('c/newestposts?page=' + page)
                       .then(response => {
                           this.posts = response.data;
                   });
                this.$root.scrollToTop();
                       
               },
    
    		getPosts() {
    			axios.get('p/following')
    			.then(({data}) => {
                    this.posts = [];
                    for (var x in data) {
                        console.log(x);
                        this.posts = this.posts.concat(data[x].posts);
                    }
                    this.pageCount = Math.ceil(this.posts.length/this.showCount);
                    console.log(this.pageCount);
                    console.log(this.posts.length);
                });
    		}
    	},
    
    	created() {
            this.$Progress.start();
            this.getPosts();
            this.$Progress.finish();
    	}
    
    }
</script>



