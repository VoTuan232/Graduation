<template>
	<div>
		{{ post.title }}
	</div>
</template>

<script>
	export default {
	// console.log(this.$route.params.id);
		data() {
			return {
				slug: this.$route.params.slug,
				post: {
					id: '',
					title: '',
					slug: '',
					body: '',
				}
			}
		},

		methods: {
			getPostSingle() {
				axios.get('' + '/api/p/'+this.slug)
				.then((response) => this.post = response.data)
			}
		},

		created() {
			this.getPostSingle();
		}
	}
</script>