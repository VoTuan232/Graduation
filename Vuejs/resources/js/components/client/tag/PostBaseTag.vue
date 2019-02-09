<style>
.list-under {
	margin-right: 10px;
}
</style>
<template>
	<div class="container">
		<div class="row">
			Tag Name : {{ tagData.name }}
		</div>

		<div class="row">
			<div class="col-md-8">
				<!-- <div class="row"  v-for="post in reversePostOfTag(page)" :key="post.id"> -->
				<div class="row"  v-for="post in posts.data" :key="post.id">
					<div class="col-md-1">
						<img src="/images/profile/profile.png" class="avatar-client">
					</div>
					<div class="col-md-11">
						<p>
							<popper trigger="hover" :options="{placement: 'top'}">
				                <div class="popper">
				                	<div class="row">
				                		<div class="col-md-3">
						                	<router-link :to="'' +'/u/' + $root.changeEmail(post.user.email)" href="#">{{ post.user.name }}</router-link>
				                		</div>
				                		<div class="col-md-9">
						                	<router-link :to="'' +'/u/' + $root.changeEmail(post.user.email)" href="#">{{ post.user.name }}</router-link>
						                	<br>
						                	{{ post.user.followers.length }} follwers
						                	{{ post.user.posts.length }} posts
				                		</div>
				                	</div>
				                </div>
				                <a href="#" slot="reference" class="top">
						        <router-link :to="'' +'/u/' + $root.changeEmail(post.user.email)" href="#">{{ post.user.name }}</router-link>
				                </a>  
			                </popper>
							{{ post.created_at}}
							<br>
							<router-link :to="'/p/' + post.slug">{{ post.title }}</router-link>
						</p>
						<div class="btn-group">
							<!-- <li  v-for="tag in post.tags"> -->
								<router-link  v-for="tag in post.tags" :to="'/t/' + tag.slug" type="button" class="btn btn-primary btn-client" :key="tag.id">
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
				 <div>
                    <pagination  :data="posts" @pagination-change-page="getResults"></pagination>
                </div>
				<!-- <button  v-for="n in totalPage" type="button" :class="page==n ? 'btn btn-success':'btn btn-light'" v-text="n" @click="changePage(n)"></button> -->
				<!-- this.$parent.$options.methods.someParentMethod(data) -->
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
		props: ['tagData'],

		data() {
			return {
				slug: this.$route.params.slug,
				posts: {},
				// tag : {
				// },
				// totalPage: '',
				// perPage: 3,
				// page: 1,
			}
		},

		methods: {
			getResults(page = 1) {
                axios.get('' + '/api/t/' + this.slug + '/posts?page=' + page)
                    .then(response => {
                        this.posts = response.data;
                });
            },

			scrollToTop() {
                window.scrollTo(0,0);
            },

			getTagSingle() {
				axios.get('' + '/api/t/' + this.slug + '/posts')
				.then(response => this.posts = response.data);
			},

			/* change page when click number page
			changePage(value) {
				this.page = value;
				this.scrollToTop();
            },
            */

            /* reverse id
            reversePostOfTag(page=1) {
		        var newArray = [];
		        var x = this.posts.length;
			  	for (var i = x - this.perPage*page + this.perPage - 1; i >= 0 && i >= x-this.perPage*page; i--) {
			    	newArray.push(this.posts[i]);
			  	}
			  	return newArray;
		    },
		    */
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
		}
	}
</script>