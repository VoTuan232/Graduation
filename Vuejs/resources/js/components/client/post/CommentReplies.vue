<template>
	<div>
		<div v-for="comment in comments" class="row" :key="comment.id">
			<div class="media mt-2 ml-5" >
		        <a class="pull-left" href="#">
		            <img v-if="comment.user.avatar == null" class="media-object" src="/images/profile/profile.png" alt="">
		            <img v-else class="media-object" :src="'/images/profile/' + comment.user.avatar" alt="">
		        </a>
		    	<div class="media-body" style="margin-left: 20px;">
		        <h4 class="media-heading">{{ comment.user.name }}
	            	<small>August 25, 2014 at 9:30 PM</small>
	            </h4>
		            {{ comment.body }}
		            <br>
                	Like &nbsp; Reply
		        </div>
		    </div>
		    <!-- <div v-if="comment.replies.length > 0" >
		        <comment-replies :comment="comment.replies"></comment-replies>
		    </div> -->
	    </div>
	</div>
</template>

<script>
	export default {
		props: ['comments', 'parent'],
		data() {
			return {

			}
		}
	}
</script>