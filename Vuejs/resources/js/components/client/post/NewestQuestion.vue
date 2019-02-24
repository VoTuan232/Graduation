<template>
	<div class="container">
		<h5>NEWEST QUESTION ________________</h5>

		<div v-for="(question, index) in questions" v-if="index < 5">
			<router-link :to="'' + '/q/' + question.slug">{{ question.title }}</router-link>
			<br>
				<i class="fas fa-eye client"></i>&nbsp;{{ question.view }} &nbsp;&nbsp;&nbsp;
				<i class="fa fa-comments client"></i>&nbsp;{{ question.comments.length }}
		<br>
			<router-link :to="'' + 'u/' + $root.changeEmail(question.user.email)">{{ question.user.name }}</router-link>
			<hr>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				questions: {}
			}
		},

		methods: {
			getQuestions() {
				axios.get('q/slidebar')
				.then(response => this.questions = response.data)
			}
		},

		created() {
			this.$Progress.start();
			this.getQuestions();
            this.$Progress.finish();
		}		
	}
</script>