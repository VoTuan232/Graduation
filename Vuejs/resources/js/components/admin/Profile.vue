<style>
.widget-user-header{
    background-position: center center;
    background-size: cover;
    height: 250px !important;
}
.widget-user .card-footer{
    padding: 0;
}

.img-circle {
    height: 70px !important;
}
</style>


<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-3">
                <div class="card card-widget widget-user">
                <!-- Add the bg color to the header using any of the bg-* classes -->
                <div class="widget-user-header text-white" style="background-image:url('/images/profile-cover.jpg')">
                    <h3 class="widget-user-username">{{ this.$root.username }}</h3>
                    <h5 class="widget-user-desc"></h5>
                </div>
                <div class="widget-user-image">
                    <img class="img-circle" :src="getProfilePhoto()" alt="User Avatar">
                </div>
                <div class="card-footer">
                    <div class="row">
                    <div class="col-sm-4 border-right">
                        <div class="description-block">
                        <h5 class="description-header">3,200</h5>
                        <span class="description-text">FOLLOWS</span>
                        </div>
                        <!-- /.description-block -->
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-4 border-right">
                        <div class="description-block">
                        <h5 class="description-header">13,000</h5>
                        <span class="description-text">FOLLOWERS</span>
                        </div>
                        <!-- /.description-block -->
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-4">
                        <div class="description-block">
                        <h5 class="description-header">35</h5>
                        <span class="description-text">POSTS</span>
                        </div>
                        <!-- /.description-block -->
                    </div>
                    <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </div>
                </div>
            </div>

            <!-- tab -->

            <div class="col-md-12">
                <div class="card">
                    <div class="card-header p-2">
                        <ul class="nav nav-pills">
                            <li class="nav-item">
                                <router-link to="/profile/activities" class="nav-link">
                                    <p>
                                        Activities
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/profile/setting" class="nav-link">
                                    <p>
                                        Setting
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/profile/follows" class="nav-link">
                                    <p>
                                        Follows
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/profile/followers" class="nav-link">
                                    <p>
                                        Followers
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/profile/posts" class="nav-link">
                                    <p>
                                        Post
                                    </p>
                                </router-link>
                            </li>
                        </ul>
                    </div><!-- /.card-header -->
                    <div class="card-body">
                            <router-view></router-view>
                    </div><!-- /.card-body -->
                </div>
                <!-- /.nav-tabs-custom -->
          </div>
          <!-- end tabs -->
        </div>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                user : user,
            }
        },

        mounted() {
            console.log('Component mounted.')
        },

        methods:{
            getProfilePhoto() {
                let avatar = "/images/profile/"+ this.user.avatar ;
                return avatar;
            },

            getUser() {
                axios.get('' + '/api/user/current')
                .then(({data}) => {
                    this.user =data;
                })
                .catch(() => {})
            },
        },
        
        created() {
            Fire.$on('afterUpdateProfile', () => {
                this.getUser();
                // this.$root.username = this.user.name; //update root username for view
                // this.$root.avatar = this.user.avatar; //update root avatar for view
            });
        }
    }
</script>