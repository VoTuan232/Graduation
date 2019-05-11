<template>
	<div class="container" id="posts-user">
		<div v-if="storages.data.length > 0" v-for="storage in storages.data" :key="storage.id">
            <save-post :post_id="storage.post_id"></save-post>
        </div>
        <div v-else>
        	There is nothing here.
        </div>
        <pagination  :data="storages" @pagination-change-page="getResults" :limit="2">
            <span slot="prev-nav">&lt; Previous</span>
            <span slot="next-nav">Next &gt;</span>
        </pagination>
	</div>
</template>

<script>
	export default {
		props: ['userData'],

		data() {
			return {
				slug: this.$route.params.email,
				storages: {},
			}
		},

		methods: {
			getResults(page = 1) {
                axios.get('u/getStorages?page=' + page)
                    .then(response => {
                        this.storages = response.data;
                });
                this.$scrollTo("#scrollToTop");
            },

			getStoragesOfUser() {
				axios.get('u/getStorages')
				.then(response => 
					this.storages = response.data, 
				);
			}
		},

		created() {
            this.$Progress.start();
			this.getStoragesOfUser();
            this.$Progress.finish();
		}
	}
</script>