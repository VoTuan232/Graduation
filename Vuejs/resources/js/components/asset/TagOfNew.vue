<template>
	<div>
		<router-link  v-for="tag in tagData" :to="'/t/' + tag.slug" type="button" class="btn btn-primary btn-client" :key="tag.id">
	        {{ tag.name }}
	    </router-link>
	</div>
</template>

<script>
	export default {
		props: ['tagData'],
		
		data() {
			return {

			}
		}
	}	
</script>