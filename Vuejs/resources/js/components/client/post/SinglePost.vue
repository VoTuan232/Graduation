<style>
.list-under {
	margin-right: 10px;
}

.navbar-vote {
  overflow: hidden;
  position: fixed;
  top: 200px;
  left: 60px;
}

.vote {
	color: #9b9b9b;
	cursor: pointer;
}

.voted {
	color: #5488c7;
	cursor: pointer;
}

.vote-number {
	margin-left: 5px;
	font-size: 2em;
	/*font-size: .6em;
	height: .6em;
	line-height: .6em;
	color: #9b9b9b;
	font-weight: 500;*/
}
</style>
<template>
	<div class="container">
		<div class="navbar-vote">
		  <span v-if="!upvote" @click="up_vote"><i class="fas fa-sort-up fa-3x vote"></i></span>
		  <span v-else @click="remove_up_vote"><i class="fas fa-sort-up fa-3x voted"></i></span>
		  <br>
		  <span class="vote-number">{{ vote }}</span>
		  <br>
		  <span v-if="!downvote" @click="down_vote"><i class="fas fa-sort-down fa-3x vote"></i></span>
		  <span v-else @click="remove_down_vote"><i class="fas fa-sort-down fa-3x voted"></i></span>
		</div>
		<div class="row">
			<div class="col-md-1">
				<img v-if="post['user']['avatar'] !=null" :src="'/images/profile/' + post['user']['avatar']" class="avatar-client">
				<img v-else src="/images/profile/profile.png" class="avatar-client">
			</div>
			<div class="col-md-8">
				<p>
                	<router-link :to="'' + '/u/' + $root.changeEmail(post['user'].email)" href="#">{{ post['user'].name }}</router-link>
                    <!-- <user-popper-not-load :userData="post['user']"></user-popper-not-load> -->
					<!-- {{ post['created_at'] | agoDate }} -->
					<br>
					<div v-if="post['user'].id">
						<infor-user :userid="post['user'].id"></infor-user>
					</div>
					<!-- <i class="fa fa-user-friends"></i>{{ post['user']['followers'].length }}&nbsp;&nbsp;&nbsp; -->
					<!-- <i class="fas fa-pen"></i>{{ post['user']['posts'].length }} -->
				</p>
				
			</div>
			<!-- <div class="col-md-3">
				<div class="navbar">
				  <a href="#home">Home</a>
				  <a href="#news">News</a>
				  <a href="#contact">Contact</a>
				</div>
			</div> -->
			<div class="col-md-3">
				Published {{ post['created_at'] | changeCreatedDate}}
				<p>
					<i class="fas fa-eye client" title="view"></i>&nbsp;{{ post['view'] }} &nbsp;&nbsp;&nbsp;
					<i class="fa fa-comments client" title="comment"></i>&nbsp;{{ post['comments'].length }}
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-8">
				<h1>{{ post['title'] }}</h1>
                <tag-of-new :tagData="post['tags']"></tag-of-new>
				<p v-html="post['body']"></p>
			</div>
			<div class="col-md-1">
				<div v-if="userPermission.hasPermission('post.edit')" class="dropdown">
				  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				  </button>
				  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
				    <router-link :to="'' +'/p/' + this.slug + '/edit'" class="dropdown-item" href="#">Edit</router-link>
				    <a class="dropdown-item" href="#">Add to my series</a>
				    <a class="dropdown-item" href="#">Delete this post</a>
				  </div>
				</div>
			</div>
		</div>
		
		<comment :slug="slug"></comment>

		<h4>Related</h4>
		<div class="row">
			<!-- 4 posts -->
		</div>
		
		<h4>More from {{ post['user'].name }}</h4>
		<!-- <div class="row">
			<br>
			<div v-for="(item,index) in reversePostOfUser" v-if="reversePostOfUser && reversePostOfUser.length > 0 && index <= 3" class="card list-under" style="width: 16.5rem;" :key="item.id">
			  <div class="card-body">
			    <h5 class="card-title">{{ item.title }}</h5>{{ item.id }}
			    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <router-link :to="'/p/' + item.slug" href="#" class="btn btn-primary">>>>See More</router-link>
			  </div>
			</div>
		</div> -->
    </div>
</template>

<script>
	import Comment from './Comment.vue';
	import InforUser from './InforUser.vue';

	export default {
        props: ['userPermission'],

		components: {Comment, InforUser},
		data() {
			return {
				slug: this.$route.params.slug,
				limitationList: '',
				post : {
					user: {
						email: '',
						followers: {},
						posts: {},
					},
					comments: {},
				},
				vote: '',
				upvote: false,
				downvote: false,
			}
		},

		//socket io
		// sockets: {
	 //        // connect: function () {
	 //        //     console.log('socket connected')
	 //        // },
	 //        // message: function (data) {
	 //        //     console.log(data)
	 //        // }
	 //    },
	    
		methods: {
			getPostSingle() {
				axios.get('p/'+this.slug)
				.then(response => this.post = response.data);
				this.$root.scrollToTop();
			},

			countVote() {
				axios.get('p/' + this.slug + '/countVote')
				.then(response => this.vote = response.data.vote);
			},

			checkVote() {
				axios.get('/p/' + this.slug + '/checkVote')
				.then((response) => {
					if (response.data.like == 0) {
						this.upvote = false;
						this.downvote = false;
					}
					else if (response.data.like == 1) {
						this.upvote = true	;
						this.downvote = false;
					}
					else if (response.data.like == -1) {
						this.upvote = false	;
						this.downvote = true;
					}
				})
			},

			up_vote() {
				this.upvote = true;
				if (this.downvote == false) {
					axios.post('p/' + this.slug + '/upvote', {checkDownvote: false})
					.then(response => this.vote = response.data.vote);
				}
				else {
					axios.post('p/' + this.slug + '/upvote', {checkDownvote: true})
					.then(response => this.vote = response.data.vote);
				}
				this.downvote = false;
			},

			remove_up_vote() {
				this.upvote = false;
				axios.post('p/' + this.slug + '/removeUpvote')
					.then(response => this.vote = response.data.vote);
			},

			down_vote() {
				this.downvote = true;
				if (this.upvote == false) {
					axios.post('p/' + this.slug + '/downvote', {checkUpvote: false})
					.then(response => this.vote = response.data.vote);
				}
				else {
					axios.post('p/' + this.slug + '/downvote', {checkUpvote: true})
					.then(response => this.vote = response.data.vote);
				} 
				this.upvote = false;
			},

			remove_down_vote() {
				this.downvote = false;
				axios.post('p/' + this.slug + '/removeDownvote')
					.then(response => this.vote = response.data.vote);
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
				this.$root.scrollToTop();
				
		    },

		    
	 	},

		created() {
			this.$Progress.start();
			this.getPostSingle();
			this.checkVote();
			this.countVote();
			this.$Progress.finish();
        	this.$emit('updatedUser');
		}, 
	}
</script>