<template>
	<div class="container" id="posts-user">
		<div v-if="posts.data.length > 0" class="row"  v-for="post in posts.data" :key="post.id">
            <div class="col-md-1">
                <img v-if="userData.avatar !=null" :src="'/images/profile/' + userData.avatar" class="avatar-client">
                <img v-else src="/images/profile/profile.png" class="avatar-client">
            </div>
            <div class="col-md-11">
                <p>
                    <router-link :to="'' + '/u/' + $root.changeEmail(userData.email)" href="#">{{ userData.name }}</router-link>
                   	<!-- <user-popper-not-load :userData="userData"></user-popper-not-load> -->
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
        <pagination  :data="posts" @pagination-change-page="getResults" :limit="2">
            <span slot="prev-nav">&lt; Previous</span>
            <span slot="next-nav">Next &gt;</span>
        </pagination>
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
                axios.get('u/' + this.slug + '/posts?page=' + page)
                    .then(response => {
                        this.posts = response.data;
                });
                this.$scrollTo("#scrollToTop");
            },

			getPostsOfUser() {
				axios.get('u/' + this.slug + '/posts')
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