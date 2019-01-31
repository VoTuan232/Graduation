import VueRouter from 'vue-router';

let routes = [
    { path: '/admin', component: require('./components/admin/Index.vue').default },
    { path: '/m/users', component: require('./components/admin/User.vue').default },
    { path: '/m/tags', component: require('./components/admin/Tag.vue').default },
    { path: '/m/categories', component: require('./components/admin/Category.vue').default },
    { path: '/m/roles', component: require('./components/admin/Role.vue').default },
    { path: '/m/posts', component: require('./components/admin/Post.vue').default },
    { path: '/m/comments', component: require('./components/admin/Comment.vue').default },
    {
        path: '/profile',
        component: require('./components/admin/Profile.vue').default,
        children: [
            {
                path: '/profile/setting',
                component: require('./components/admin/SettingProfile.vue').default,
            },
            {
                path: '/profile/activities',
                component: require('./components/admin/Activities.vue').default,
            },
            {
                path: '/profile/follows',
                component: require('./components/admin/FollowProfile.vue').default,
            },
            {
                path: '/profile/followers',
                component: require('./components/admin/FollowerProfile.vue').default,
            },
            {
                path: '/profile/posts',
                component: require('./components/admin/PostProfile.vue').default,
            },
        ]
    },
];

export default new VueRouter({
	mode: 'history', //remove url old
    routes,
    // linkActiveClass: 'is-active'
});