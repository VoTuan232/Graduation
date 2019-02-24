<style>
.list-under {
	margin-right: 10px;
}
</style>
<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<!-- <div class="row"  v-for="post in reversePostOfTag(page)" :key="post.id"> -->
				<div class="row"  v-for="post in posts.data" :key="post.id">
					<div class="col-md-1">
						<img src="/images/profile/profile.png" class="avatar-client">
					</div>
					<div class="col-md-11">
						<p>
                   			 <user-popper :userData="post.user"></user-popper>
							{{ post.created_at}}
							<br>
							<router-link :to="'/q/' + post.slug">{{ post.title }}</router-link>
						</p>
						<div class="btn-group">
                    		<tag-of-new :tagData="post.tags"></tag-of-new>
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
			<!-- <div class="col-md-4">
				{{ slug }}
				<div class="row">
					<div class="col-md-4">
						{{ posts.length }} Posts
					</div>
					<div class="col-md-4">
						1 Question
					</div>
					<div class="col-md-4">
						1 Followers
					</div>
				</div>
			</div> -->
		</div>
    </div>
</template>

<script>
	export default {
		props: ['tagData'],
		
		data() {
			return {
				slug: this.$route.params.slug,
				posts: {},
			}
		},

		methods: {
			getResults(page = 1) {
                axios.get('t/' + this.slug + '/questions?page=' + page)
                    .then(response => {
                        this.posts = response.data;
                });
				this.$root.scrollToTop();
                    
            },

			scrollToTop() {
                window.scrollTo(0,0);
            },

			getTagSingle() {
				axios.get('t/' + this.slug + '/questions')
				.then(response => this.posts = response.data);
			},
		},

		computed: {
		    
		},

		watch: {
		    '$route.params.slug': function (slug) {
		    	this.slug = this.$route.params.slug;
		    	this.page =1;
		      	this.getTagSingle();
				this.scrollToTop();
		    },

		    
	 	},

		created() {
			 this.$Progress.start();
			this.getTagSingle();
            this.$Progress.finish();
		}
	}
</script>