<style>	
	.avatar-user {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}

	.username {
		font-size: 1.9rem;
	}

	.follow {
		margin-bottom: 13px;
		border: 1px solid #e6bdbd;
	}
</style>
<template>
	<div class="container">
		<div class="row">
			<div class="col-md-2">
				<img v-if="user.avatar != null" :src="'/images/profile/' + user.avatar" alt="User Avatar" class="avatar-user" />
				<img v-else src="/images/profile/profile.png" alt="User Avatar" class="avatar-user" />
			</div>
			<div class="col-md-10">
				<p>
				<span class="username">{{ user.name }}</span> &nbsp; 
				<button  v-if="$auth.user().id != user.id && !isFollowing" class="btn btn-light follow" type="button" @click="addFollow"><i class="fas fa-plus"></i>&nbsp;Follow</button>
				<button  v-if="$auth.user().id != user.id && isFollowing" class="btn btn-primary follow" type="button" @click="removeFollow"><i class="fas fa-check"></i>&nbsp;Following</button>
				<router-link  to="/profile/setting" v-if="$auth.user().id == user.id" class="btn btn-light follow" type="button">Edit</router-link>
				</p>
				<p>{{ user.email }}</p>
				<p>Report</p>
			</div>
		</div>
		<div class="row mt-5">
          <router-link :to="'/u/' + slug" href="#" class="list-function">Posts</router-link>
          <router-link :to="'/u/' + slug + '/questions'" class="list-function notfirst">Questions</router-link>
          <router-link v-if="$auth.user().id == user.id" :to="'/u/' + slug + '/drafts'" class="list-function notfirst">Drafts</router-link>
          <router-link :to="'/u/' + slug + '/followings'" class="list-function notfirst">Followings</router-link>
          <router-link :to="'/u/' + slug + '/followers'" class="list-function notfirst">Followers</router-link>
          <!-- check login == user detail => getUser(slug) => $auth -->
          <!-- <router-link to="/following" class="list-function notfirst">Drafts</router-link>  -->
        </div>
        <div class="row  mt-5">
        	<div class="col-md-9">
        		<router-view :userData="user"></router-view>
        	</div>
        	<div class="col-md-3">
        		<table class="table">
				  <tbody>
				    <tr>
				      <td>Posts</td>
				      <th scope="row">{{ user['posts'].length }}</th>
				    </tr>
				    <tr>
				      <td>Followers</td>
				      <th scope="row">{{ user['followers'].length }}</th>
				    </tr>
				    <tr>
				      <td>Followings user</td>
				      <th scope="row">{{ user['follows'].length }}</th>
				    </tr>
				    <tr>
				      <td>Totals questions</td>
				      <th scope="row">{{ user['questions'].length }}</th>
				    </tr>
				    <tr>
				      <td>Totals answers</td>
				      <th scope="row">No</th>
				    </tr>
				  </tbody>
				</table>
        	</div>
        </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				slug: this.$route.params.email,
				isFollowing: false,
				user: {
					posts: {},
					followers: {},
					follows: {},
					questions: {},
				},
			}
		},

		methods: {
			getUserSingle() {
				axios.get('u/' + this.slug)
				.then(response => 
					this.user = response.data,
				);
				this.$root.scrollToTop();
			}, 

			checkFollow() {
				axios.get('u/checkFollow/' + this.slug)
				.then(response => this.isFollowing = response.data.isFollowing);
			},

			removeFollow() {
				axios.post('u/removeFollow/' + this.slug)
				.then(() => {
					this.isFollowing = false;
				});
			},

			addFollow() {
				axios.post('u/addFollow/' + this.slug)
				.then(() => {
					this.isFollowing = true;
				});
			}
		},

		created() {
            this.$Progress.start();
			this.getUserSingle();
			this.checkFollow();
            this.$Progress.finish();
		}
	}
</script>