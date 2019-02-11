<style>
.list-under {
	margin-right: 10px;
}
</style>
<template>
	<div class="container">
		<div class="row">
			<div class="col-md-1">
				<img v-if="post['user']['avatar'] !=null" :src="'/images/profile/' + post['user']['avatar']" class="avatar-client">
				<img v-else src="/images/profile/profile.png" class="avatar-client">
			</div>
			<div class="col-md-8">
				<p>
                    <user-popper :userData="post['user']"></user-popper>
					{{ post['created_at'] | agoDate }}
					<br>
					<i class="fa fa-user-friends"></i>{{ post['user']['followers'].length }}&nbsp;&nbsp;&nbsp;
					<!-- <i class="fa fa-user-friends"></i>{{ user['followers'].length }}&nbsp;&nbsp;&nbsp; -->
					<!-- <i class="fas fa-pen"></i>{{ user['posts'].length }} -->
					<i class="fas fa-pen"></i>{{ post['user']['posts'].length }}
				</p>
				
			</div>
			<div class="col-md-3">
				Published {{ post['created_at'] | changeCreatedDate}}
				<p>
					<i class="fas fa-eye client"></i>&nbsp;{{ post['view'] }} &nbsp;&nbsp;&nbsp;
					<i class="fa fa-comments client"></i>&nbsp;{{ post['comments'].length }}
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-8">
				<h1>{{ post['title'] }}</h1>
				<router-link v-for="tag in post['tags']" :to="'/t/' + tag.slug" type="button" class="btn btn-primary btn-client" :key="tag.id">
					{{ tag.name }}
				</router-link>
				<p>{{ post['body'] }}</p>
			</div>
		</div>
		
		<h4>Related</h4>
		<div class="row">
			<!-- 4 posts -->
		</div>
		
		<h4>More from {{ post['user'].name }}</h4>
		<div class="row">
			<br>
			<div v-for="(item,index) in reversePostOfUser" v-if="reversePostOfUser && reversePostOfUser.length > 0 && index <= 3" class="card list-under" style="width: 16.5rem;" :key="item.id">
			  <div class="card-body">
			    <h5 class="card-title">{{ item.title }}</h5>{{ item.id }}
			    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <router-link :to="'/p/' + item.slug" href="#" class="btn btn-primary">>>>See More</router-link>
			  </div>
			</div>
		</div>
    </div>
</template>

<script>
    import UserPopper from '../../asset/UserPopper.vue';

	export default {
		components: {UserPopper},
		
		data() {
			return {
				slug: this.$route.params.slug,
				limitationList: '',
				post : {
					user: {
						followers: {},
						posts: {},
					},
					comments: {},
				},
			}
		},

		methods: {
			getPostSingle() {
				axios.get('' + '/api/p/'+this.slug)
				.then(response => this.post = response.data);
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
			this.getPostSingle();
		}, 
	}
</script>