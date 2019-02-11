<template>
	<div class="container">
		<p>NEWEST QUESTION</p>
		<div v-for="question in questions" class="row">
			<p>{{ question.title }}</p> <br>
			<p>
				<i class="fas fa-eye client"></i>&nbsp;{{ question.view }} &nbsp;&nbsp;&nbsp;
				<i class="fa fa-comments client"></i>&nbsp;{{ question.comments.length }}
			</p>
			<p>{{ question.user.name }}</p>
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
				axios.get('' + 'api/q/slidebar')
				.then(response => this.questions = response.data)
			}
		},

		created() {
			this.getQuestions();
		}		
	}
</script>