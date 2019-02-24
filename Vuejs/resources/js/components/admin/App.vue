 <template>
    <div>
            <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fa fa-bars"></i></a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
                    <div class="input-group input-group-sm">
                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                        <div class="input-group-append">
                            <button class="btn btn-navbar">
                            <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="fa fa-comments-o"></i>
                        <span class="badge badge-danger navbar-badge">3</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Brad Diesel
                                            <span class="float-right text-sm text-danger"><i class="fa fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">Call me whenever you can...</p>
                                        <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            John Pierce
                                            <span class="float-right text-sm text-muted"><i class="fa fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">I got your message bro</p>
                                        <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <!-- Message Start -->
                                <div class="media">
                                    <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Nora Silvester
                                            <span class="float-right text-sm text-warning"><i class="fa fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">The subject goes here</p>
                                        <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="fa fa-bell-o"></i>
                        <span class="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span class="dropdown-header">15 Notifications</span>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                            <i class="fa fa-envelope mr-2"></i> 4 new messages
                            <span class="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                            <i class="fa fa-users mr-2"></i> 8 friend requests
                            <span class="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                            <i class="fa fa-file mr-2"></i> 3 new reports
                            <span class="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i
                            class="fa fa-th-large"></i></a>
                    </li>
                </ul>
            </nav>
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <a href="/" class="brand-link">
                <img src="/images/logo.png" alt="" class="brand-image img-circle elevation-3"
                    style="opacity: .8">
                <span class="brand-text font-weight-light">Home</span>
                </a>
                <div class="sidebar">
                    <user-panel></user-panel>
                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <!-- Add icons to the links using the .nav-icon class
                                with font-awesome or any other icon font library -->
                            <li class="nav-item">
                                 <router-link to="/admin" class="nav-link">
                                    <i class="nav-icon fas fa-tachometer-alt red"></i>
                                    <p>
                                        Dashboard
                                    </p>
                                </router-link>
                            </li>
                             <li class="nav-item">
                                <router-link to="/developer" class="nav-link">
                                    <i class="nav-icon fas fa-cogs"></i>
                                    <p>
                                        Developer
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                               <!--  <router-link to="/profile/setting" class="nav-link" :class="{'router-link-exact-active': subIsActive('/profile')}">
                                    <i class="nav-icon fas fa-user orange"></i>
                                    <p>
                                        Profile
                                    </p>
                                </router-link> -->
                                <router-link to="/profile/setting" class="nav-link">
                                    <i class="nav-icon fas fa-user orange"></i>
                                    <p>
                                        Profile
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/m/users" class="nav-link">
                                    <i class="fas fa-users nav-icon"></i>
                                    <p>Users</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/m/posts" class="nav-link">
                                    <i class="nav-icon fas fa-newspaper blue"></i>
                                    <p>
                                        Posts
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/m/questions" class="nav-link">
                                    <i class="nav-icon fas fa-newspaper blue"></i>
                                    <p>
                                        Questions
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/m/tags" class="nav-link">
                                    <i class="nav-icon fas fa-tags orange"></i>
                                    <p>
                                        Tags
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/m/categories" class="nav-link">
                                    <i class="nav-icon fas fa-user blue"></i>
                                    <p>
                                        Categories
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/m/roles" class="nav-link">
                                    <i class="nav-icon fas fa-user blue"></i>
                                    <p>
                                        Roles
                                    </p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/m/comments" class="nav-link">
                                    <i class="fas fa-comments"></i>
                                    <p>
                                        Comments
                                    </p>
                                </router-link>
                            </li> 
                            <li class="nav-item">
                                <a href="/" @click="$auth.logout()" class="nav-link"><i class="nav-icon fa fa-power-off yellow"></i>Logout</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div class="content-wrapper">
                <div class="content">
                    <div class="container-fluid">
                        <router-view></router-view>

                        <vue-progress-bar></vue-progress-bar>
                    </div>
                </div>
            </div>
            <aside class="control-sidebar control-sidebar-dark">
                <div class="p-3">
                    <h5>Title</h5>
                    <p>Sidebar content</p>
                </div>
            </aside>
            <footer class="main-footer">
                <div class="float-right d-none d-sm-inline">
                    You can do it if you want!
                </div>
                <strong>Copyright &copy; 2019 <a href="https://adminlte.io">Vo Anh Tuan</a></strong> created by.
            </footer>
    </div>
 </template>

 <script>
    import UserPanel from '../asset/UserPanel.vue';
     export default {
        components: {UserPanel},
        data() {
            return {

            }
        }
     }
 </script>