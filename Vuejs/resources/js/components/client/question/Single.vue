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
				<h1>{{ question['title'] }}</h1>
				<router-link v-for="tag in question['tags']" :to="'/t/' + tag.slug" type="button" class="btn btn-primary btn-client" :key="tag.id">
					{{ tag.name }}
				</router-link>
				<br>
				<p>
					{{ question['body'] }}
				</p>
				<button type="button" class="btn btn-primary">Post Answer</button>
			</div>
			<div class="col-md-3">
				<div class="row">
					<div class="col-md-3">
						<img v-if="question['user'].avatar !=null" :src="'/images/profile/' + question['user'].avatar" class="avatar-client">
						<img v-else src="/images/profile/profile.png" class="avatar-client">
					</div>
					<div class="col-md-9">
						<p>
							<popper trigger="hover" :options="{placement: 'top'}">
				                <div class="popper">
				                	<div class="row">
				                		<div class="col-md-3">
						                	<router-link :to="'' + '/u/' + $root.changeEmail(question['user'].email)" href="#">{{ question['user'].name }}</router-link>
				                		</div>
				                		<div class="col-md-9">
						                	<router-link :to="'' + '/u/' + $root.changeEmail(question['user'].email)" href="#">{{ question['user'].name }}</router-link>
						                	<br>
						                	{{ question['user'].followers.length }} follwers
						                	{{ question['user'].posts.length }} posts
				                		</div>
				                	</div>
				                </div>
				                <a href="#" slot="reference" class="top">
						        <router-link :to="'' + '/u/' + $root.changeEmail(question['user'].email)" href="#">{{ question['user'].name }}</router-link>
				                </a>  
			                </popper>
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
	export default {
		data() {
			return {
				slug: this.$route.params.slug,
				question : {
					user: {
						followers: {},
						posts: {},
					},
					comments: {},
				},
			}
		},

		methods: {
			getQuestionSingle() {
				axios.get('' + '/api/q/'+this.slug)
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
			this.getQuestionSingle();
		}, 
	}
</script>