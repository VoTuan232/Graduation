<style>
/*.notification :hover {
	background-color: #5488c7;;
}*/

</style>
<template>
	<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle write" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding-top: 15px;">
        <i class="fas fa-exclamation"></i><span class="badge badge-pill badge-success">{{ notifications.length }}</span>
        </a>
        <div class="dropdown-menu client" aria-labelledby="navbarDropdown">
            <router-link v-for="notification in notifications" to="/publish/post" :key="notification.id" class="dropdown-item" onMouseOver="this.style.background='#0F0'" onMouseOut="this.style.background='#ebf5ff'" v-bind:style=" !notification.status_notification ? 'background-color: #ebf5ff;' : '' "><i class="fas fa-pencil-alt"></i>{{ notification.content }}</router-link>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </li>
</template>

<script>
	export default {
		data() {
			return {
				notifications: {},
				ex: 2,
			}
		},

		sockets: {
			message(data) {
				let message = JSON.parse(data);

				//check user login là người receiver => update
				// console.log(message.receiver_id);
				if (message.receiver_id == this.$auth.user().id) {
					// this.ex = 2;
					this.getNotifications();
				}
				// this.comments.push(message);
				// console.log('message', message);
			}
		},

		methods: {
			getNotifications() {
	            axios.get('/u/' + this.$auth.user().id + '/getNotifications')
	            .then((response) => {
	                this.notifications = response.data;
            	})
			},
		},

		created() {
			this.getNotifications();
		}
	}
</script>