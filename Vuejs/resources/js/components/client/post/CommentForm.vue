<template>
	<div class="form-group">
        <input v-model="form.body" type="text" name="body" :ref="'body_reply-' + comment.id" @keyup.enter="CreateCommentReply()"
            placeholder="Write a reply..." 
            class="form-control" :class="{ 'is-invalid': form.errors.has('body') }">
        <has-error :form="form" field="body"></has-error>
    </div>
</template>

<script>
	export default {
		props: ['comment', 'slug', 'parent_id'],
		data() {
			return {
				form: new Form({
					body: '',
					user_id: this.$auth.user().id,
					parent_id: this.parent_id,
				})
			}
		},

		methods: {
			CreateCommentReply() {
				this.form.post('p/' + this.slug + '/comment')
				.then(() => {
                    this.$Progress.start();
                    Fire.$emit('AfterCrudComment');
                    this.form.body = '';
                    this.$Progress.finish();

                })
                .catch(() => {
                    this.$Progress.fail();
                });
			}
		},
	}
</script>