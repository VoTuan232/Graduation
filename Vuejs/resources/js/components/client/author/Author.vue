<template>
	<div class="container">
		<div class="row">
			<h3>Top Author __________________________________________</h3>
		</div>
		<br>
		<div class="row">
			<div v-for="user in users" class="col-md-4 mb-5" :key="user.id">
				<box-user-single :boxUserSingle="user"></box-user-single>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: {},
			}
		},

		methods: {
			loadUsers() {
    			axios.get('authors').then(response => this.users = response.data);
    		},
		},

		created() {
			this.loadUsers();
		}
	}
</script>