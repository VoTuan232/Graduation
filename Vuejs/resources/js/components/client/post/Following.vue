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
    <div v-if="posts.length > 0" class="container" id="following_posts">
        <div class="row"  v-for="x in page*perPage" v-if="x > (page-1)*perPage && x <= posts.length" :key="posts[x-1].id">
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
            <a v-if="page > 1" type="button" class="btn btn-light" style="border: 1px solid #ad9d9d;" @click="previousPage">< Previous</a>
            <a v-if="(page - 3) > 1 " type="button" class="btn btn-light" style="border: 1px solid #ad9d9d;" @click="changePage(1)">1</a>
            <a v-if="(page - 3) > 1 " type="button" class="btn btn-light" style="border: 1px solid #ad9d9d;">...</a>
            <a v-for="x in pageCount" v-if="x <= (page + 3) && x >= (page - 3)" type="button" :class="pageCurrent(x)" style="border: 1px solid #ad9d9d;" @click="changePage(x)">{{ x }}</a>
            <a v-if="(page + 3) < pageCount" type="button" class="btn btn-light" style="border: 1px solid #ad9d9d;">...</a>
            <a v-if="(page + 3) < pageCount" type="button" class="btn btn-light" style="border: 1px solid #ad9d9d;" @click="changePage(pageCount)">{{ pageCount }}</a>
            <a v-if="page < pageCount" type="button" class="btn btn-light" style="border: 1px solid #ad9d9d;" @click="nextPage">Next ></a>
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
                perPage: 20,
                pageCount: '',
                page: 1,
    		}
    	},
    
    	methods: {
            pageCurrent(x) {
                if (x == this.page) {
                    return "btn btn-primary";
                }
                else {
                    return "btn btn-light";
                }
            },

            changePage(page) {
                this.page = page;
                this.$scrollTo("#following_posts");
            },

            previousPage() {
                this.page -=1;
                this.$scrollTo("#following_posts");
            },

            nextPage() {
                this.page +=1;
                this.$scrollTo("#following_posts");
            },

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
                        this.posts = this.posts.concat(data[x].posts);
                    }
                    this.pageCount = Math.ceil(this.posts.length/this.perPage);
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



