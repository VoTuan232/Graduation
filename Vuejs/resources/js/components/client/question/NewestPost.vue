<template>
	<div class="container">
		<h5>NEWEST POST ________________</h5>

		<div v-for="(post, index) in posts" v-if="index < 5">
			<router-link :to="'' + '/p/' + post.slug">{{ post.title }}</router-link>
			<br>
				<i class="fas fa-eye client"></i>&nbsp;{{ post.view }} &nbsp;&nbsp;&nbsp;
				<i class="fa fa-comments client"></i>&nbsp;{{ post.comments.length }}
			<br>
			<router-link :to="'' + 'u/' + $root.changeEmail(post.user.email)">{{ post.user.name }}</router-link>
			<hr>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				posts: {}
			}
		},

		methods: {
			getPosts() {
				axios.get('p/slidebar')
				.then(response => this.posts = response.data)
			}
		},

		created() {
			this.$Progress.start();
			this.getPosts();
            this.$Progress.finish();
		}		
	}
</script>