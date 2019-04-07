<template>
	<div>
		<router-link  v-if="check_trending != null" to="/trending" type="button" class="btn btn-primary btn-client">
	        Trending
	    </router-link>
		<router-link  v-for="tag in tagData" :to="'/t/' + tag.slug" type="button" class="btn btn-primary btn-client" :key="tag.id">
	        {{ tag.name }}
	    </router-link>
	    <a v-if="check_trending == null && checkPermissionTrending" type="button" class="btn btn-primary btn-client" @click="makeTrending">Make Trending</a>
	</div>
</template>

<script>
	export default {
		props: ['tagData', 'checkTrending', 'slug_post', 'checkPermissionTrending'],
		
		data() {
			return {
				check_trending: this.checkTrending,
			}
		},

		methods: {
			makeTrending() {
				this.check_trending = !this.checkTrending;
				axios.put('/p/' + this.slug_post + '/makeTrending')
				.then(response => {
					// console.log('hihi');
				})
			}
		}
	}	
</script>