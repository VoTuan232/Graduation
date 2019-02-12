<style>
	.avatar-list {
		width: 50px;
		height: 50px;
	}
</style>
<template>
    <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="box-title"></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <div class="table-responsive">
                <table class="table no-margin">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Image</th>
                            <th>Follow at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users.data" :key="user.id">
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                            	<img v-if="user.avatar != null" :src="'/images/profile/' + user.avatar"  alt="user image" class="avatar-list">
                            	<img v-else src="/images/profile/profile.png"  alt="user image" class="avatar-list">
                            </td>
                            <td>{{ user.pivot.created_at }}</td>
                            <td>
                            	<button type="button" class="btn btn-danger">Prevent</button>
                            </td>
                        </tr>
                    </tbody>
                     <div class="">
                        <pagination  :data="users" @pagination-change-page="getResults"></pagination>
                    </div>
                </table>
            </div>
            <!-- /.table-responsive -->
        </div>
        <!-- /.box-body -->
        <div class="box-footer clearfix">
            <a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">List Follow</a>
            <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">Search User</a>
        </div>
        <!-- /.box-footer -->
    </div>
</template>
<script>
    export default {
    	data() {
    		return {
    			users : {},
    		}
    	},

    	methods: {
            getResults(page = 1) {
                axios.get(''+'/api/user/followers?page=' + page)
                    .then(response => {
                        this.users = response.data;
                });
            },

    		loadUsers() {
    			axios.get(''+'/api/user/followers').then(response => this.users = response.data);
    		},
    	},

    	created() {
             this.$Progress.start();
            this.loadUsers();
            this.$Progress.finish();
    	}
    }
</script>

