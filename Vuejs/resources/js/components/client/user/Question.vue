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
                    <router-link  v-for="tag in question.tags" :to="'/t/' + tag.slug" type="button" class="btn btn-primary btn-client" :key="tag.id">
                        {{ tag.name }}
                    </router-link>
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
    import UserPopper from '../../asset/UserPopper.vue';

	export default {
		props: ['userData'],
		
		components: {UserPopper},

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
            },

			getQuestionsOfUser() {
				axios.get('' + '/api/u/' + this.slug + '/questions')
				.then(response => this.questions = response.data);
			}
		},

		created() {
			this.getQuestionsOfUser();
		}
	}
</script>