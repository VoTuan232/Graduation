<template>
	<img v-if="avatar !=null" :src="'images/profile/' + avatar" class="avatar-client">
    <img v-else src="images/profile/profile.png" class="avatar-client">
</template>

<script>
	export default {
		props: ['user_id'],
		data() {
			return {
				avatar: '',
			}
		},

		methods: {
			getUserImage() {
				axios.get('u/' + this.user_id + '/getImageBaseUserId')
				.then(response => {
					this.avatar = response.data.avatar;
				});
			}
		},

		created() {
			this.getUserImage();
		}	
	}
</script>