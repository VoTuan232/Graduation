<template>
	<div class="container">
		<div class="row"  v-for="post in user['posts']" :key="post.id">
            <div class="col-md-1">
                <img v-if="user['avatar'] !=null" :src="'/images/profile/' + user['avatar']" class="avatar-client">
                <img v-else src="images/profile/profile.png" class="avatar-client">
            </div>
            <div class="col-md-11">
                <p>
                    <popper trigger="hover" :options="{placement: 'top'}">
		                <div class="popper">
		                	<div class="row">
		                		<div class="col-md-3">
				                	<router-link :to="'u/' + email" href="#">{{ user['name'] }}</router-link>
		                		</div>
		                		<div class="col-md-9">
				                	<router-link :to="'u/' + email" href="#">{{ user['name'] }}</router-link>
				                	<br>
				                	{{ user['followers'].length }} follwers
				                	{{ user['posts'].length }} posts
		                		</div>
		                	</div>
		                </div>
		                <a href="#" slot="reference" class="top">
				        <router-link :to="''+ '/u/' + email" href="#">{{ user['name'] }}</router-link>
		                </a>  
	                </popper>
                {{ post.created_at}}
                <br>
                <router-link :to="'/p/' + post.slug">{{ post.title }}</router-link>
                </p>
                <div class="btn-group">
                    <router-link  v-for="tag in post.tags" :to="'/t/' + tag.slug" type="button" class="btn btn-primary btn-client" :key="tag.id">
                        {{ tag.name }}
                    </router-link>
                </div>
                <p>
                    <i class="fas fa-eye client"></i>&nbsp;{{ post.view }} &nbsp;&nbsp;&nbsp;
                    <i class="fa fa-comments client"></i>&nbsp;{{ post.comments.length }}
                </p>
                <hr>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				slug: this.$route.params.email,
				user: {},
				email: '',
			}
		},

		methods: {
			getPostsOfUser() {
				axios.get('' + '/api/u/' + this.slug + '/posts')
				.then(response => (this.user = response.data, this.email = this.$root.changeEmail(response.data['email'])));
			}
		},

		created() {
			this.getPostsOfUser();
		}
	}
</script>