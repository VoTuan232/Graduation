<style>
	.media-object {
		width: 38px;
		border-radius: 50%;
	}
</style>
<template>
	<div>
		<h4>Comments</h4>
		<div class="hello">
		    <!-- <read-more more-str="read more" :text="msg" link="#" less-str="read less" :max-chars="50"></read-more>
		    <read-more more-str="read more" less-str="read less" :text="msg2" link="#"></read-more> -->
		  </div>
		<div v-if="!$auth.check()" class="row">
			<div class="col-md-12">
				<div class="card" style="width: 100%">
				  <div class="card-body" style="text-align: center;">
				    <router-link to="/login" class="card-title"><i class="fa fa-comments"></i>Login to comment</router-link>
				  </div>
				</div>
			</div>
		</div>
		<div v-else class="row">
			<div class="col-md-12">
	            <form @submit.prevent="createComment()">
                    <div class="form-group">
                        <input v-model="form.body" type="text" name="slug"
                            placeholder="Write a comment..." 
                            class="form-control" :class="{ 'is-invalid': form.errors.has('body') }">
                        <has-error :form="form" field="body"></has-error>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-warning" value="Nhận xét" />
                    </div>
                </form>
			</div>
		</div>
		<br>
		<div v-for="commentIndex in commentsToShow" v-if="commentIndex <= comments.length"  class="row mt-1">
		<!-- <div v-for="comment in comments" class="row mt-1"> -->
			<div :id="'comment-' + comments[commentIndex-1].id">
		        <div class="media" >
		            <a class="pull-left" href="#">
		                <img v-if="comments[commentIndex-1].user.avatar == null" class="media-object"  src="/images/profile/profile.png" alt="">
		                <img v-else class="media-object" :src="'/images/profile/' + comments[commentIndex-1].user.avatar" alt="">
	                </a>
	            	<div class="media-body" style="margin-left: 20px;">
		                <h4 class="media-heading">{{ comments[commentIndex-1].user.name }}
	                    	<small>August 25, 2014 at 9:30 PM</small>
	                    </h4>
		                    {{ comments[commentIndex-1].body }} 
		                    <br>
		                    <a href="#">Like</a> 
		                    &nbsp; 
		                    <a href="#" @click="clickReplyComment(comments[commentIndex-1].id)" v-scroll-to="'#comment-' + comments[commentIndex-1].id">Reply</a>
		            </div>
	            </div>
	            <comment-replies :comments="comments[commentIndex-1]" @clickReply="clickReplyComment"></comment-replies>
	            <br>
	            <div class="media ml-5"  :id="'reply-' + comments[commentIndex-1].id" v-show="false" style="margin-left: 35px !important;">
		            <a class="pull-left" href="#">
		                <img v-if="comments[commentIndex-1].user.avatar == null" class="media-object"  src="/images/profile/profile.png" alt="">
		                <img v-else class="media-object" :src="'/images/profile/' + comments[commentIndex-1].user.avatar" alt="">
	                </a>
	            	<div class="media-body" style="margin-left: 20px;">
		               
		                    <comment-form :id="'form-reply-' + comments[commentIndex-1].id" v-show="false" :comment="comments[commentIndex-1]" :slug="slug"></comment-form>
		                
		            </div>
	            </div>
			</div>
		</div>
		<button v-show="commentsToShow < comments.length" type="button" class="btn btn-link" @click="commentsToShow += 2"><i class="fas fa-chevron-circle-down"></i>View more comments</button>
		<br>
	</div>
</template>

<script>
	import CommentReplies from './CommentReplies.vue';
	import CommentForm from './CommentForm.vue';

	export default {
		props: ['slug'],
		components: {CommentForm, CommentReplies},
		data() {
			return {
				// msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    //   			msg2: 'Lorem ipsum dolor sit amet',
				comments: {

				},
				form: new Form({
					body: '',
					user_id: this.$auth.user().id,
					parent_id: null,
				}),
				commentsToShow: 2,
			}
		},

		watch: {
			// commentsToShow: function(val) {
			// 	if(val >= this.comments.length) {
			// 		this.showReadMore = false;
			// 	}
			// }
		},

		methods: {
			getComment() {
				axios.get('p/' + this.slug + '/comments')
				.then(response => this.comments = response.data)
			},

			createComment() {
				this.form.post('p/' + this.slug + '/comment')
				.then(() => {
                    this.$Progress.start();
                    Fire.$emit('AfterCrudComment');
                    this.$Progress.finish();

                })
                .catch(() => {
                    this.$Progress.fail();
                });
			},

			clickReplyComment(id) {
				$('#reply-' + id).toggle();
				$('#form-reply-' + id).toggle();
				// this.$refs["body_reply-" + id][0].focus();
				// var x=window.scrollX;
				//    var y=window.scrollY;
				//    window.onscroll=function(){window.scrollTo(x, y);};
			},
		},

		created() {
			this.getComment();
			Fire.$on('AfterCrudComment', () => {
				this.getComment();
				this.form.body = '';
			});
		}
	}
</script>