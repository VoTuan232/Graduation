<template>
	<div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
            <img v-if="$auth.user().avatar == null" src="/images/profile/profile.png" class="img-circle elevation-2 myselft" alt="User Image">
            <img v-else :src="'/images/profile/'+$auth.user().avatar" class="img-circle elevation-2 myselft" alt="User Image">
        </div>
        <div class="info">
                <a href="#" class="d-block" v-html="$auth.user().name"></a>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
                user : '',
			}
		},

		methods: {
			getUserCurrent() {
				axios.get('auth/user')
				.then(response => this.user = response.data)
			}

		},

		created() {
			// this.getUserCurrent();
			Fire.$on('afterUpdateProfile', () => {
                
            });
		}
	}
</script>