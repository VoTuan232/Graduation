<template>
	<div class="row">
		<div class="col-md-4">
			<img v-if="boxUserSingle.avatar == null" src="/images/profile/profile.png" class="user-avatar"/>
			<img v-else :src="'/images/profile/' + boxUserSingle.avatar" class="user-avatar"/>
		</div>
		<div class="col-md-8">
			{{ boxUserSingle.name }}
		</div>
	</div>
</template>

<script>
	export default {
		props: ['boxUserSingle'],
		data() {
			return {
				users: this.$auth.user(),
			}
		}
	}
</script>