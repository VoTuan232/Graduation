<template>
	<div class="container">
		<div v-if="questions.data.length > 0" class="row"  v-for="question in questions.data" :key="question.id">
            <div class="col-md-1">
                <img v-if="userData.avatar !=null" :src="'/images/profile/' + userData.avatar" class="avatar-client">
                <img v-else src="/images/profile/profile.png" class="avatar-client">
            </div>
            <div class="col-md-11">
                <p>
                   	<user-popper :userData="userData"></user-popper>
	                {{ question.created_at}}
	                <br>
	                <router-link :to="'/q/' + question.slug">{{ question.title }}</router-link>
                </p>
                <div v-if="question.tags.length > 0" class="btn-group">
                    <tag-of-new :tagData="question.tags"></tag-of-new>
                </div>
                <p>
                    <i class="fas fa-eye client"></i>&nbsp;{{ question.view }} &nbsp;&nbsp;&nbsp;
                    <i class="fa fa-comments client"></i>&nbsp;{{ question.comments.length }}
                </p>
                <hr>
            </div>
        </div>
        <div v-else>
        	There is nothing here.
        </div>
        <div>
            <pagination  :data="questions" @pagination-change-page="getResults"></pagination>
        </div>
	</div>
</template>

<script>
	export default {
		props: ['userData'],

		data() {
			return {
				slug: this.$route.params.email,
				questions: {},
			}
		},

		methods: {
			getResults(page = 1) {
                axios.get('' + '/api/u/' + this.slug + '/questions?page=' + page)
                    .then(response => {
                        this.questions = response.data;
                });
                this.$root.scrollToTop();
                    
            },

			getQuestionsOfUser() {
				axios.get('' + '/api/u/' + this.slug + '/questions')
				.then(response => this.questions = response.data);
			}
		},

		created() {
             this.$Progress.start();
            this.getQuestionsOfUser();
            this.$Progress.finish();
		}
	}
</script>