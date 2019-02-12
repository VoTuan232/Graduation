<style>	
	.avatar-user {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}

	.username {
		font-size: 1.9rem;
	}

	.follow {
		margin-bottom: 13px;
		border: 1px solid #e6bdbd;
	}
</style>
<template>
	<div class="container">
		<div class="row">
			<div class="col-md-2">
				<img v-if="user.avatar != null" :src="'/images/profile/' + user.avatar" alt="User Avatar" class="avatar-user" />
				<img v-else src="/images/profile/profile.png" alt="User Avatar" class="avatar-user" />
			</div>
			<div class="col-md-10">
				<p>
				<span class="username">{{ user.name }}</span> &nbsp; 
				<button  class="btn btn-light follow" type="button">Follow</button>
				</p>
				<p>{{ user.email }}</p>
				<p>Report</p>
			</div>
		</div>
		<div class="row mt-5">
          <router-link :to="'/u/' + slug" href="#" class="list-function">Posts</router-link>
          <router-link :to="'/u/' + slug + '/questions'" class="list-function notfirst">Questions</router-link>
          <router-link to="/series" class="list-function notfirst">Series</router-link>
          <router-link to="/following" class="list-function notfirst">Following</router-link>
          <router-link to="/following" class="list-function notfirst">Trendings</router-link>
          <router-link to="/following" class="list-function notfirst">Tags</router-link>
          <router-link to="/following" class="list-function notfirst">Drafts</router-link>
        </div>
        <div class="row  mt-5">
        	<div class="col-md-9">
        		<router-view :userData="user"></router-view>
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
				.then(response => 
					this.user = response.data,
				);
				this.$root.scrollToTop();
			}
		},

		created() {
            this.$Progress.start();
			this.getUserSingle();
            this.$Progress.finish();
		}
	}
</script>