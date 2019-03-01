<style>
.list-under {
	margin-right: 10px;
}
</style>
<template>
	<div class="container">
		<div class="row">
			<div class="col-md-9">
				<p>
					{{  question['created_at'] }}&nbsp;&nbsp;&nbsp; 
					<i class="fas fa-eye client"></i>&nbsp;{{ question['view'] }} &nbsp;&nbsp;&nbsp;
					<i class="fa fa-comments client"></i>&nbsp;{{ question['comments'].length }}
				</p>
				<div class="row">
					<div class="col-md-11">	
						<h1>{{ question['title'] }}</h1>
					</div>
					<div class="col-md-1">
						<div v-if="userPermission.hasPermission('questions.edit')" class="dropdown">
						  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						    <router-link :to="'' +'/q/' + this.slug + '/edit'" class="dropdown-item" href="#">Edit</router-link>
						    <a class="dropdown-item" href="#">Add to my series</a>
						    <a class="dropdown-item" href="#">Delete this post</a>
						  </div>
						</div>
					</div>
				</div>
                    <tag-of-new :tagData="question['tags']"></tag-of-new>
				<br>
				<p v-html="question['body']"></p>
				<comment :slug="slug"></comment>
			</div>
			<div class="col-md-3">
				<div class="row">
					<div class="col-md-3">
						<img v-if="question['user'].avatar !=null" :src="'/images/profile/' + question['user'].avatar" class="avatar-client">
						<img v-else src="/images/profile/profile.png" class="avatar-client">
					</div>
					<div class="col-md-9">
						<p>
                   			<user-popper :userData="question['user']"></user-popper>
							{{ question['user'].email }}
						</p>
						<p>
							{{ question['user'].followers.length }} follwers
							{{ question['user'].questions.length }} questions
						</p>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	import Comment from './Comment.vue';

	export default {
        props: ['userPermission'],

		components: {Comment},
		data() {
			return {
				slug: this.$route.params.slug,
				question : {
					user: {
						email: '',
						followers: {},
						posts: {},
						questions: {},
					},
					comments: {},
				},
			}
		},

		methods: {
			getQuestionSingle() {
				axios.get('q/'+this.slug)
				.then(response => this.question = response.data);
			},
			scrollToTop() {
                window.scrollTo(0,0);
            }
		},

		computed: {
		    reversePostOfUser: function() {
		        var newArray = [];
			  	for (var i = this.post['user']['posts'].length - 1; i >= 0; i--) {
			    	newArray.push(this.post['user']['posts'][i]);
			  	}
			  	return newArray;
		    }
		},

		watch: {
		    '$route.params.slug': function (slug) {
		    	this.slug = this.$route.params.slug;
		      	this.getPostSingle();
				this.scrollToTop();
		    },

		    
	 	},

		created() {
			 this.$Progress.start();
			this.getQuestionSingle();
            this.$Progress.finish();
        	this.$emit('updatedUser');
		}, 
	}
</script>