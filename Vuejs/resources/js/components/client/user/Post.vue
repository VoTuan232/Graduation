<template>
	<div class="container">
		<div v-if="posts.data.length > 0" class="row"  v-for="post in posts.data" :key="post.id">
            <div class="col-md-1">
                <img v-if="userData.avatar !=null" :src="'/images/profile/' + userData.avatar" class="avatar-client">
                <img v-else src="/images/profile/profile.png" class="avatar-client">
            </div>
            <div class="col-md-11">
                <p>
                   	<user-popper :userData="userData"></user-popper>
	                {{ post.created_at}}
	                <br>
	                <router-link :to="'/p/' + post.slug">{{ post.title }}</router-link>
                </p>
                <div v-if="post.tags.length > 0" class="btn-group">
                    <tag-of-new :tagData="post.tags"></tag-of-new>
                </div>
                <p>
                    <i class="fas fa-eye client"></i>&nbsp;{{ post.view }} &nbsp;&nbsp;&nbsp;
                    <i class="fa fa-comments client"></i>&nbsp;{{ post.comments.length }}
                </p>
                <hr>
            </div>
        </div>
        <div v-else>
        	There is nothing here.
        </div>
        <div>
            <pagination  :data="posts" @pagination-change-page="getResults"></pagination>
        </div>
	</div>
</template>

<script>
	export default {
		props: ['userData'],

		data() {
			return {
				slug: this.$route.params.email,
				posts: {},
			}
		},

		methods: {
			getResults(page = 1) {
                axios.get('' + '/api/u/' + this.slug + '/posts?page=' + page)
                    .then(response => {
                        this.posts = response.data;
                });
                this.$root.scrollToTop();
            },

			getPostsOfUser() {
				axios.get('' + '/api/u/' + this.slug + '/posts')
				.then(response => 
					this.posts = response.data, 
				);
			}
		},

		created() {
            this.$Progress.start();
			this.getPostsOfUser();
            this.$Progress.finish();
		}
	}
</script>