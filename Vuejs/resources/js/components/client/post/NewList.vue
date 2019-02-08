

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
    <div class="container">
        <div class="row"  v-for="post in posts.data" :key="post.id">
            <div class="col-md-1">
                <img v-if="post.user.avatar !=null" :src="'images/profile/' + post.user.avatar" class="avatar-client">
                <img v-else src="images/profile/profile.png" class="avatar-client">
            </div>
            <div class="col-md-11">
                <p>
                    <popper trigger="hover" :options="{placement: 'top'}">
		                <div class="popper">
		                	<div class="row">
		                		<div class="col-md-3">
				                	<router-link :to="'u/' + post.user.email" href="#">{{ post.user.name }}</router-link>
		                		</div>
		                		<div class="col-md-9">
				                	<router-link :to="'u/' + post.user.email" href="#">{{ post.user.name }}</router-link>
				                	<br>
				                	{{ post.user.followers.length }} follwers
				                	{{ post.user.posts.length }} posts
		                		</div>
		                	</div>
		                </div>
		                <a href="#" slot="reference" class="top">
				        <router-link :to="'u/' + changeEmail(post.user.email)" href="#">{{ post.user.name }}</router-link>
		                </a>  
	                </popper>
                {{ post.created_at }}
                <br>
                <router-link :to="'/p/' + post.slug">{{ post.title }}</router-link>
                </p>
                <!-- <router-link :to="{ name: 'user', params: { userId: 123 }}">{{ post.title }}</router-link> -->
                <div  v-if="post.tags.length > 0" class="btn-group">
                    <!-- <li  v-for="tag in post.tags"> -->
                    <router-link  v-for="tag in post.tags" :to="'/t/' + tag.slug" type="button" class="btn btn-primary btn-client" :key="tag.id">
                        {{ tag.name }}
                    </router-link>
                    <!-- </li> -->
                </div>
                <p>
                    <i class="fas fa-eye client"></i>&nbsp;{{ post.view }} &nbsp;&nbsp;&nbsp;
                    <i class="fa fa-comments client"></i>&nbsp;{{ post.comments.length }}
                </p>
                <hr>
            </div>
        </div>
        <div>
            <pagination  :data="posts" @pagination-change-page="getResults"></pagination>
        </div>
    </div>
</template>
<script>
    export default {
    	data() {
    		return {
    			posts: {},
    		}
    	},
    
    	methods: {
    		changeEmail(email) {
    			return email.replace('@gmail.com', '');
    		},

    		getResults(page = 1) {
                   axios.get('' + '/api/c/newestposts?page=' + page)
                       .then(response => {
                           this.posts = response.data;
                   });
               },
    
    		getPosts() {
    			axios.get('' + '/api/c/newestposts')
    			.then(({data}) => this.posts = data)
    		}
    	},
    
    	created() {
    		this.getPosts();
    	}
    
    }
</script>

