<style>
	.user-avatar {
		width: 50px;
		height: 50px;
	}
</style>
<template>
	<div v-if="users.length > 0" class="container">
		<div class="row">
			<div v-for="user in users" class="col-md-4 mb-5" :key="user.id">
				<box-user-single :boxUserSingle="user"></box-user-single>
			</div>
		</div>
	</div>
	<div v-else class="container">
		There is nothing here!
	</div>
</template>

<script>

	export default {
		data() {
			return {
				slug: this.$route.params.email,
				users: {},
			}
		},

		methods: {
			loadUsers() {
    			axios.get('u/' + this.slug + '/followers').then(response => this.users = response.data);
    		},
		},

		created() {
			this.loadUsers();
		}
	}
</script>