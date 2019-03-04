<style>
    .userpopper-avatar {
         border-radius: 50%;
        width: 90px;
    }
</style>

<template>
	<popper trigger="hover" :options="{placement: 'top'}">
        <div class="popper">
        	<div class="row">
        		<div class="col-md-3">
                    <img v-if="userInfor.avatar != null" :src="'/images/profile/' + userInfor.avatar" class="userpopper-avatar" />
                	<img v-else src="/images/profile/profile.png" class="userpopper-avatar" />
        		</div>
        		<div class="col-md-9">
                	<router-link :to="'u/' + userInfor.name" href="#">{{ userInfor.name }}</router-link>
                	<br>
                	{{ userInfor.followers }} followers
                	{{ userInfor.posts }} posts
        		</div>
        	</div>
        </div>
        <a href="#" slot="reference" class="top">
        <router-link :to="'' + '/u/' + $root.changeEmail(userData.email)" href="#">{{ userData.name }}</router-link>
        </a>  
    </popper>
</template>

<script>
	export default {
		props: ['userData'],
		data() {
			return {
                userInfor: {
                    name: '',
                    avatar: '',
                    followers: '',
                    posts: '',
                },
			}
		},

        methods: {
            getUserInfomation() {
                axios.get('u/' + this.userData.id + '/information')
                .then(response => this.userInfor = response.data)
            }
        },

        created() {
            this.getUserInfomation();
        }
	}
</script>