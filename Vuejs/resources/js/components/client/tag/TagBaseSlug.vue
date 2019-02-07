<style>
.list-under {
	margin-right: 10px;
}
</style>
<template>
	<div class="container">
		<div class="row">
			Tag Name : {{ slug }}
		</div>

		<div class="row">
			<div class="col-md-8">
				<div class="row"  v-for="post in reversePostOfTag(page)" :key="post.id">
					<div class="col-md-1">
						<img src="/images/profile/profile.png" class="avatar-client">
					</div>
					<div class="col-md-11">
						<p>
							<a href="#">{{ post.user.name }}</a>
							{{ post.created_at | agoDate }}
							<br>
							<router-link :to="'/p/' + post.slug">{{ post.title }}</router-link>{{ post.id }}
						</p>
						<div class="btn-group">
							<!-- <li  v-for="tag in post.tags"> -->
								<router-link  v-for="tag in post['tags']" :to="'/t/' + tag.slug" type="button" class="btn btn-primary btn-client" :key="tag.id">
									{{ tag.name }}
								</router-link>
							<!-- </li> -->
						</div>
						<p>
							<i class="fas fa-eye client"></i>&nbsp;{{ post.view }} &nbsp;&nbsp;&nbsp;
							<i class="fa fa-comments client"></i>&nbsp;{{ post.comments.length }}
						</p>
						<hr>
					</div>
				</div>
				<button  v-for="n in totalPage" type="button" :class="page==n ? 'btn btn-success':'btn btn-light'" v-text="n" @click="changePage(n)"></button>
			</div>
			<div class="col-md-4">
				{{ slug }}
				<div class="row">
					<div class="col-md-4">
						{{ posts.length }} Posts
					</div>
					<div class="col-md-4">
						1 Question
					</div>
					<div class="col-md-4">
						1 Followers
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	export default {
	// console.log(this.$route.params.id);
		data() {
			return {
				slug: this.$route.params.slug,
				tag : {
				},
				posts: {},
				totalPage: '',
				perPage: 3,
				page: 1,
			}
		},

		methods: {
			changePage(value) {
				this.page = value;
				this.scrollToTop();
            },

            reversePostOfTag(page=1) {
		        var newArray = [];
		        var x = this.posts.length;
			  	for (var i = x - this.perPage*page + this.perPage - 1; i >= 0 && i >= x-this.perPage*page; i--) {
			    	newArray.push(this.posts[i]);
			  	}
			  	return newArray;
		    },

            getPostFirstPage() {
            	var newArray = [];
            	var x = this.tag['posts'].length;
            	console.log(x);
			  	for (var i = x - 1; i >= 0 && i >= x-2; i--) {
			    	newArray.push(this.tag['posts'][i]);
			  	}
			  	return newArray;
            },
            
			getTagSingle() {
				axios.get('' + '/api/t/'+this.slug)
				.then(response => (
						this.tag = response.data, 
						this.posts = response.data['posts'], 
						this.totalPage = Math.ceil(response.data['posts'].length/this.perPage)
					));
			},

			scrollToTop() {
                window.scrollTo(0,0);
            }
		},

		computed: {
		    
		},

		watch: {
		    '$route.params.slug': function (slug) {
		    	this.slug = this.$route.params.slug;
		    	this.page =1;
		      	this.getTagSingle();
				this.scrollToTop();
		    },

		    
	 	},

		created() {
			this.getTagSingle();
			// this.getPostFirstPage();
		}
	}
</script>