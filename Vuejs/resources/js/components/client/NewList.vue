<template>
	<div>
		<div v-for="post in posts.data" :key="post.id">
			<!-- <router-link :to="{ name: 'user', params: { userId: 123 }}">{{ post.title }}</router-link> -->
			<router-link :to="'/p/' + post.slug">{{ post.title }}</router-link>
		</div>
		<div class="card-footer">
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