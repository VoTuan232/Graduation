<template>
	<div class="container">
		<div class="row">
			<div class="col-md-1">
				<img :src="'/images/profile/' + post['user'].avatar" class="avatar-client">
			</div>
			<div class="col-md-8">
				<p>
					<a href="#">{{ post['user'].name }}</a>
					{{ post['created_at'] | agoDate }}
					<br>
					<i class="fa fa-user-friends"></i>{{ user['posts'].length }}&nbsp;&nbsp;&nbsp;
					<i class="fas fa-pen"></i>
				</p>
				<button v-for="tag in post['tags']" type="button" class="btn btn-primary btn-client" :key="tag.id">
					{{ tag.name }}
				</button>
			</div>
			<div class="col-md-3">
				Published {{ post['created_at'] | changeCreatedDate}}
				<p>
					<i class="fas fa-eye client"></i>&nbsp;{{ post['view'] }} &nbsp;&nbsp;&nbsp;
					<i class="fa fa-comments client"></i>&nbsp;{{ post['comments'].length }}
				</p>
			</div>
		</div>
    </div>
</template>

<script>
	export default {
	// console.log(this.$route.params.id);
		data() {
			return {
				slug: this.$route.params.slug,
				post : {},
				user: {},
			}
		},

		methods: {
			getPostSingle() {
				axios.get('' + '/api/p/'+this.slug)
				.then(response => this.post = response.data);
			},
			getUserBaseSlugPost() {
				axios.get('' + '/api/user/p/'+this.slug)
				.then(response => this.user = response.data);
			}
		},

		created() {
			this.getPostSingle();
			this.getUserBaseSlugPost();
		}
	}
</script>