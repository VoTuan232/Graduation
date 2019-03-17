<template>
	<div>
		<i class="fa fa-user-friends" title="followers"></i>{{ userInfor.countFollowers }}&nbsp;&nbsp;&nbsp;
		<i class="fas fa-pen" title="posts"></i> {{ userInfor.countPosts }}
	</div>
</template>

<script>
	export default {
		props: ['userid'],

		data() {
			// console.log(this.userid);
			return {
				userInfor: {},
			}
		},

		methods: {
			getUserInfor() {
				axios.get('/u/' + this.userid + '/getUserInfor')
				.then((response) => {
					this.userInfor = response.data;
				})
			}
		},

		created() {
			this.getUserInfor();
		}
	}
</script>