<template>
	  <router-link :to="'' + '/u/' + $root.changeEmail(email)" href="#">{{ username }}</router-link>
</template>

<script>
	export default {
		props: ['user_id'],
		data() {
			return {
				username: '',
				email: '',
			}
		},

		methods: {
			getUserName() {
				axios.get('u/' + this.user_id + '/getNameBaseUserId')
				.then(response => {
					this.username = response.data.username;
					this.email = response.data.email;
				});
			}
		},

		created() {
			this.getUserName();
		}	
	}
</script>