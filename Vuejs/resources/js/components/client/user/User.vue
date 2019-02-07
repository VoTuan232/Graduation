<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<img src="" alt="User Avatar"/>
			</div>
			<div class="col-md-8">
				{{ user.name }}
				<br>
				{{ user.email }}

			</div>
		</div>
		<div class="row">
          <router-link :to="'/u/' + slug" href="#" class="list-function">Posts</router-link>
          <router-link to="/series" class="list-function notfirst">Series</router-link>
          <router-link to="/following" class="list-function notfirst">Following</router-link>
          <router-link to="/following" class="list-function notfirst">Trendings</router-link>
          <router-link to="/following" class="list-function notfirst">Questions</router-link>
          <router-link to="/following" class="list-function notfirst">Tags</router-link>
          <router-link to="/following" class="list-function notfirst">Drafts</router-link>
        </div>
        <div class="row">
        	<div class="col-md-9">
        		<router-view></router-view>
        	</div>
        	<div class="col-md-3">
        		Infomation
        	</div>
        </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				slug: this.$route.params.email,
				user: {},
			}
		},

		methods: {
			getUserSingle() {
				axios.get('' + '/api/u/' + this.slug)
				.then(response => this.user = response.data);
			}
		},

		created() {
			this.getUserSingle();
		}
	}
</script>