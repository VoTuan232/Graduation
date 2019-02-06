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
				<div class="row"  v-for="post in tag['posts']" :key="post.id">
					<div class="col-md-1">
						<img src="/images/profile/profile.png" class="avatar-client">
					</div>
					<div class="col-md-11">
						<p>
							<a href="#">{{ post.user.name }}</a>
							{{ post.created_at | agoDate }}
							<br>
							<router-link :to="'/t/' + post.slug">{{ post.title }}</router-link>{{ post.id }}
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
				<div class="card-footer">
                    <pagination  :data="tag['posts']" @pagination-change-page="getResults"></pagination>
                </div>
			</div>
			<div class="col-md-4">
				{{ slug }}
				<div class="row">
					<div class="col-md-4">
						{{ tag['posts'].length }} Posts
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
					posts: {},
				},
				page: 1
			}
		},

		methods: {
			getResults(page = 1) {
                axios.get(''+'/api/m/posts?page=' + page)
                    .then(response => {
                        this.posts = response.data;
                });
            },
            
			getTagSingle() {
				axios.get('' + '/api/t/'+this.slug)
				.then(response => this.tag = response.data);
			},
			scrollToTop() {
                window.scrollTo(0,0);
            }
		},

		computed: {
		    reversePostOfTag: function() {
		        var newArray = [];
			  	for (var i = this.tag['posts'].length - 1; i >= 0; i--) {
			    	newArray.push(this.tag['posts'][i]);
			  	}
			  	return newArray;
		    }
		},

		watch: {
		    '$route.params.slug': function (slug) {
		    	this.slug = this.$route.params.slug;
		      	this.getTagSingle();
				this.scrollToTop();
		    },

		    
	 	},

		created() {
			this.getTagSingle();
		}
	}
</script>