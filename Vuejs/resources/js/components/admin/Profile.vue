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
                        <h5 class="description-header">{{ follows }}</h5>
                        <span class="description-text">FOLLOWS</span>
                        </div>
                        <!-- /.description-block -->
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-4 border-right">
                        <div class="description-block">
                        <h5 class="description-header">{{ followers }}</h5>
                        <span class="description-text">FOLLOWERS</span>
                        </div>
                        <!-- /.description-block -->
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-4">
                        <div class="description-block">
                        <h5 class="description-header">{{ posts }}</h5>
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
                user : this.$auth.user(),
                follows : 0,
                followers : 0,
                posts : 0,
                avatar: this.$auth.user().avatar,
            }
        },

        mounted() {
            console.log('Component mounted.')
        },

        methods:{
            getProfilePhoto() {
                let avatar = '';
                if(this.avatar != null) {
                    avatar = "/images/profile/"+ this.user.avatar ;
                }
                else {
                    avatar = "/images/profile/profile.png";
                }
                return avatar;
            },

            countFollows() {
                axios.get('user/countFollow')
                .then(resopnse => this.follows = resopnse.data);
            },

            countFollowers() {
                axios.get('user/countFollower')
                .then(resopnse => this.followers = resopnse.data);
            },

            countPosts() {
                axios.get('user/countPost')
                .then(resopnse => this.posts = resopnse.data);
            },

            getUser() {
                axios.get('user/current')
                .then(({data}) => {
                    this.user =data;
                })
                .catch(() => {})
            },
        },
        
        created() {
            this.$Progress.start();
            this.countFollows();
            this.countFollowers();
            this.countPosts();
            this.$Progress.finish();
            Fire.$on('afterUpdateProfile', () => {
                this.getUser();
            });
            Fire.$on('AfterUnfollow', () => {
                this.countFollows();
            });
        }
    }
</script>