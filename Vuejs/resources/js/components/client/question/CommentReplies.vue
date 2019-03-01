<template>
	<div v-if="comments.replies.length > 0">
	    <div class="row"  v-for="commentIndex in commentsToShow" v-if="commentIndex <= comments.replies.length" :key="comments.replies[commentIndex-1].id" :id="'comment-' + comments.replies[commentIndex-1].id">
			<div class="media ml-5" >
		        <a class="pull-left" href="#">
		            <img v-if="comments.replies[commentIndex-1].user.avatar == null" class="media-object" src="/images/profile/profile.png" alt="">
		            <img v-else class="media-object" :src="'/images/profile/' + comments.replies[commentIndex-1].user.avatar" alt="">
		        </a>
		    	<div class="media-body" style="margin-left: 20px;">
		        <h4 class="media-heading">{{ comments.replies[commentIndex-1].user.name }}
	            	<small>August 25, 2014 at 9:30 PM</small>
	            </h4>
		            {{ comments.replies[commentIndex-1].body }}
		            <br>
	            	<a href="#">Like</a> 
	            	&nbsp; 
	            	<a href="#" @click="clickReplyComment(comments.id)" v-scroll-to="'#comment-' + comments.replies[commentIndex-1].id">Reply</a>
		        </div>
		    </div>
	    </div>

	    <button v-show="commentsToShow < comments.replies.length" type="button" class="btn btn-link ml-5" @click="commentsToShow += 2"><i class="fas fa-chevron-circle-down"></i>View more replies</button>
	</div>
	<!-- <div v-if="comments[commentIndex-1].replies.length > 0">
	    <div v-for="commentReply in comments[commentIndex-1].replies" class="row" :key="commentReply.id">
			<div class="media ml-5" >
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
	            	<a href="#" @click="clickReplyComment(comments[commentIndex-1].id)" v-scroll-to="'#comment-' + comments[commentIndex-1].id">Reply</a>
		        </div>
		    </div>
	    </div>
	</div> -->
</template>

<script>
	export default {
		props: ['comments'],
		data() {
			return {
				commentsToShow: 2,
				showReadMore: true,
			}
		},

		methods: {
			clickReplyComment(id) {
				this.$emit('clickReply', id);
			}
		},

		watch: {
			
		},
	}
</script>