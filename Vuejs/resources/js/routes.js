import VueRouter from 'vue-router';

let routes = [
    { path: '/admin', component: require('./components/admin/Index.vue').default },
    { path: '/m/users', component: require('./components/admin/User.vue').default },
    { path: '/m/tags', component: require('./components/admin/Tag.vue').default },
    { path: '/m/categories', component: require('./components/admin/Category.vue').default },
    { path: '/m/roles', component: require('./components/admin/Role.vue').default },
    { path: '/m/posts', component: require('./components/admin/Post.vue').default },
    { path: '/m/questions', component: require('./components/admin/Question.vue').default },
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
    { 
        path: '/', 
        component: require('./components/client/post/Post.vue').default,
        children: [
            {
                path: '/',
                component: require('./components/client/post/NewList.vue').default,
            },
            {
                path: '/series',
                component: require('./components/client/post/Series.vue').default,
            },
            {
                path: '/following',
                component: require('./components/client/post/Following.vue').default,
            }, 
            {
                path: '/trending',
                component: require('./components/client/post/Trending.vue').default,
            },
        ]
    },
    { path: '/p/:slug', component: require('./components/client/post/SinglePost.vue').default  },
    { path: '/p/:slug/edit', component: require('./components/client/post/EditSinglePost.vue').default  },
    { path: '/publish/post', component: require('./components/client/post/Create.vue').default  },
    { 
        path: '/t/:slug', 
        component: require('./components/client/tag/Single.vue').default,
        children: [
            {
                path: '/t/:slug',
                component: require('./components/client/tag/PostBaseTag.vue').default,
            },
            {
                path: '/t/:slug/questions',
                component: require('./components/client/tag/QuestionBaseTag.vue').default,
            },
        ]    
    },
    { 
        path: '/u/:email', 
        component: require('./components/client/user/User.vue').default,
        children: [
            {
                path: '/u/:email',
                component: require('./components/client/user/Post.vue').default,
            },
            {
                path: '/u/:email/questions',
                component: require('./components/client/user/Question.vue').default,
            }, 
            {
                path: '/u/:email/followings',
                component: require('./components/client/user/Following.vue').default,
            },
            {
                path: '/u/:email/followers',
                component: require('./components/client/user/Follower.vue').default,
            }, 
            {
                path: '/u/:email/drafts',
                component: require('./components/client/user/Draft.vue').default,
            }, 
            {
                path: '/u/:email/save',
                component: require('./components/client/user/Save.vue').default,
            },
        ]  
    },
    { 
        path: '/questions', 
        component: require('./components/client/question/Question.vue').default,
        children: [
             {
                path: '/questions',
                component: require('./components/client/question/Newest.vue').default,
            },
        ]
    },
    { path: '/authors', component: require('./components/client/author/Author.vue').default  },
    { path: '/question/ask', component: require('./components/client/question/Create.vue').default  },
    { path: '/q/:slug', component: require('./components/client/question/Single.vue').default  },
    { path: '/q/:slug/edit', component: require('./components/client/question/EditQuestionSingle.vue').default  },
    { path: '/register', name: 'register', component: require('./components/client/auth/Register.vue').default, meta: {auth: false}  },
    { path: '/login', name: 'login', component: require('./components/client/auth/Login.vue').default, meta: {auth: false}  },
];

export default new VueRouter({
	mode: 'history', //remove url old
    routes,
    // linkActiveClass: 'is-active'
});