

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
    <div v-if="posts.data.length > 0" class="container" id="posts_trending">
        <div class="row"  v-for="post in posts.data" :key="post.id">
            <div class="col-md-1">
                <img v-if="post.user.avatar !=null" :src="'images/profile/' + post.user.avatar" class="avatar-client">
                <img v-else src="images/profile/profile.png" class="avatar-client">
            </div>
            <div class="col-md-11">
                <p>
                    <router-link :to="'' + '/u/' + $root.changeEmail(post.user.email)" href="#">{{ post.user.name }}</router-link>
                    <!-- <user-popper :userData="post.user"></user-popper> -->
                    {{ post.created_at }}
                <br>
                <router-link :to="'/p/' + post.slug">{{ post.title }}</router-link>
                </p>
                <div class="btn-group">
                    <tag-of-new :tagData="post.tags" :checkTrending="true"></tag-of-new>
                </div>
                <!-- <div  v-if="post.tags.length > 0" class="btn-group">
                    <tag-of-new :tagData="post.tags"></tag-of-new>
                </div> -->
                <p>
                    <i class="fas fa-eye client"></i>&nbsp;{{ post.view }} &nbsp;&nbsp;&nbsp;
                    <i class="fa fa-comments client"></i>&nbsp;{{ post.comments.length }}
                </p>
                <hr>
            </div>
        </div>
        <pagination  :data="posts" @pagination-change-page="getResults" :limit="2">
            <span slot="prev-nav">&lt; Previous</span>
            <span slot="next-nav">Next &gt;</span>
        </pagination>
    </div>
    <div v-else class="container">
        There is nothing here!
    </div>
</template>
<script>
    export default {
    	data() {
    		return {
    			posts: {
                    data: {}
                },
    		}
    	},
    
    	methods: {
    		getResults(page = 1) {
                   axios.get('p/trending?page=' + page)
                       .then(response => {
                           this.posts = response.data;
                   });
                this.$scrollTo("#posts_trending");
                       
               },
    
    		getPosts() {
    			axios.get('p/trending')
    			.then(({data}) => this.posts = data)
    		}
    	},
    
    	created() {
            this.$Progress.start();
            this.getPosts();
            this.$Progress.finish();
    	}
    
    }
</script>

