<template>
	<div  class="row">
	   <div class="col-md-1">
            <img v-if="data.user_avatar !=null" :src="'/images/profile/' + data.user_avatar" class="avatar-client">
            <img v-else src="/images/profile/profile.png" class="avatar-client">
        </div>
        <div class="col-md-11">
            <p>
                <router-link :to="'' + '/u/' + $root.changeEmail(data.user_email)" href="#">{{ data.user_name }}</router-link>
                {{ data.created_at}}
                <br>
                <router-link :to="'/p/' + data.slug">{{ data.title }}</router-link>
            </p>
            <div v-if="data.tags.length > 0" class="btn-group">
                <tag-of-new :tagData="data.tags"></tag-of-new>
            </div>
            <p>
                <i class="fas fa-eye client" title="view"></i>&nbsp;{{ data.view }} &nbsp;&nbsp;&nbsp;
                <i class="fa fa-comments client" title="comments"></i>&nbsp;{{ data.comment_length }}
            </p>
            <hr>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default {
		props: ['post_id'],
		data() {
			return {
				data: {
					user_email : '',
					tags: {},
					
				},
			}
		},

		methods: {
			getPostBaseId() {
				axios.post('p/getPostBaseId', {post_id: this.post_id})
				.then(response => {
					this.data = response.data;
				});
			}
		},

		created() {
			this.getPostBaseId();
		}
	}
</script>