<template>
	<div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div v-if="user == ''" class="image">
            <img v-if="$auth.user().avatar == null" src="/images/profile/profile.png" class="img-circle elevation-2 myselft" alt="User Image">
            <img v-else :src="'/images/profile/'+$auth.user().avatar" class="img-circle elevation-2 myselft" alt="User Image">
        </div>
        <div v-else class="image">
            <img v-if="user.avatar == null" src="/images/profile/profile.png" class="img-circle elevation-2 myselft" alt="User Image">
            <img v-else :src="'/images/profile/'+user.avatar" class="img-circle elevation-2 myselft" alt="User Image">
        </div>
        <div class="info">
                <a v-if="user == ''" href="#" class="d-block" v-html="$auth.user().name"></a>
                <a v-else href="#" class="d-block" v-html="user.name"></a>
        </div>
    </div>
</template>

<script>
		// var user = this.$auth.user();
		// console.log(user);
	export default {
		data() {
			return {
                user : '',
			}
		},

		methods: {
			getUserCurrent() {
				axios.get('auth/user')
				.then(response => this.user = response.data.data)
			}
		},

		created() {

			Fire.$on('afterUpdateProfile', () => {
				this.getUserCurrent();
            });
		}
	}
</script>