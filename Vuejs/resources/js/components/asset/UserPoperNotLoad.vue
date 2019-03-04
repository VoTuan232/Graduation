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
                    <img v-if="userData.avatar != null" :src="'/images/profile/' + userData.avatar" class="userpopper-avatar" />
                	<img v-else src="/images/profile/profile.png" class="userpopper-avatar" />
        		</div>
        		<div class="col-md-9">
                	<router-link :to="'u/' + userData.name" href="#">{{ userData.name }}</router-link>
                	<br>
                	{{ userData.followers.length }} followers
                	{{ userData.posts.length }} posts
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
			}
		},
	}
</script>