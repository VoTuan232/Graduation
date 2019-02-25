<style>
	.media-object {
		width: 38px;
		border-radius: 50%;
	}
</style>
<template>
	<div>
		<h4>Comments</h4>
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
		<div v-for="comment in comments" class="row mt-1">
			<div :id="'comment-' + comment.id">
		        <div class="media" >
		            <a class="pull-left" href="#">
		                <img v-if="comment.user.avatar == null" class="media-object"  src="/images/profile/profile.png" alt="">
		                <img v-else class="media-object" :src="'/images/profile/' + comment.user.avatar" alt="">
	                </a>
	            	<div class="media-body" style="margin-left: 20px;">
		                <h4 class="media-heading">{{ comment.user.name }}
	                    	<small>August 25, 2014 at 9:30 PM</small>
	                    </h4>
		                    {{ comment.body }} 
		                    <br>
		                    <a href="#">Like</a> 
		                    &nbsp; 
		                    <a href="#" @click="clickReplyComment(comment.id)" v-scroll-to="'#comment-' + comment.id">Reply</a>
		            </div>
	            </div>
	            <div v-if="comment.replies.length > 0">
		            <!-- <comment-replies :comments="comment.replies" :parent:"comment"></comment-replies> -->
		            <div v-for="commentReply in comment.replies" class="row" :key="commentReply.id">
						<div class="media mt-2 ml-5" >
					        <a class="pull-left" href="#">
					            <img v-if="commentReply.user.avatar == null" class="media-object" src="/images/profile/profile.png" alt="">
					            <img v-else class="media-object" :src="'/images/profile/' + commentReply.user.avatar" alt="">
					        </a>
					    	<div class="media-body" style="margin-left: 20px;">
					        <h4 class="media-heading">{{ commentReply.user.name }}
				            	<small>August 25, 2014 at 9:30 PM</small>
				            </h4>
					            {{ commentReply.body }}
					            <br>
			                	<a href="#">Like</a> 
			                	&nbsp; 
			                	<a href="#" @click="clickReplyComment(comment.id)" v-scroll-to="'#comment-' + comment.id">Reply</a>
					        </div>
					    </div>
				    </div>
	            </div>
	            <br>
	            <div class="media ml-5"  :id="'reply-' + comment.id" v-show="false">
		            <a class="pull-left" href="#">
		                <img v-if="comment.user.avatar == null" class="media-object"  src="/images/profile/profile.png" alt="">
		                <img v-else class="media-object" :src="'/images/profile/' + comment.user.avatar" alt="">
	                </a>
	            	<div class="media-body" style="margin-left: 20px;">
		               
		                    <div class="form-group">
		                        <input v-model="formReply.body" type="text" name="slug" @keyup.enter="CreateCommentReply()"
		                            placeholder="Write a reply..." 
		                            class="form-control" :class="{ 'is-invalid': formReply.errors.has('body') }">
		                        <has-error :form="formReply" field="body"></has-error>
		                    </div>
		                
		            </div>
	            </div>
			</div>
		</div>
		<br>
	</div>
</template>

<script>
	// import CommentReplies from './CommentReplies.vue';

	export default {
		props: ['slug'],
		// components: {CommentReplies},
		data() {
			return {
				comments: {

				},
				form: new Form({
					body: '',
					user_id: this.$auth.user().id,
					parent_id: null,
				}),
				formReply: new Form({
					body: '',
					user_id: this.$auth.user().id,
					parent_id: null,
				}),
			}
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
				// var x=window.scrollX;
			 //    var y=window.scrollY;
			 //    window.onscroll=function(){window.scrollTo(x, y);};
			},

			CreateCommentReply() {
				alert('hihi');
			}
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