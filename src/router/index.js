import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from 'components/recommend/recommend'
// import Rank from 'components/rank/rank'
// import Singer from 'components/singer/singer'
// import Search from 'components/search/search'
// import SingerDetail from 'components/singer-detail/singer-detail'
// import Disc from 'components/disc/disc'
// import TopList from 'components/top-list/top-list'
// import UserCenter from 'components/user-center/user-center'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: 'recommend', name: '' },
    { path: '/recommend',
      name: '',
      component: (resolve) => {
        import('components/recommend/recommend').then((module) => {
          resolve(module)
        })
      },
      children: [
        {path: ':id',
          component: (resolve) => {
            import('components/disc/disc').then((module) => {
              resolve(module)
            })
          }}
      ]
    },
    { path: '/rank',
      name: '',
      component: (resolve) => {
        import('components/rank/rank').then((module) => {
          resolve(module)
        })
      },
      children: [
        {path: ':id',
          component: (resolve) => {
            import('components/top-list/top-list').then((module) => {
              resolve(module)
            })
          }
        }
      ]
    },
    { path: '/singer',
      name: '',
      component: (resolve) => {
        import('components/singer/singer').then((module) => {
          resolve(module)
        })
      },
      children: [
        { path: ':id',
          name: '',
          component: (resolve) => {
            import('components/singer-detail/singer-detail').then((module) => {
              resolve(module)
            })
          } }
      ]
    },
    { path: '/search',
      name: '',
      component: (resolve) => {
        import('components/search/search').then((module) => {
          resolve(module)
        })
      },
      children: [
        { path: ':id',
          name: '',
          component: (resolve) => {
            import('components/singer-detail/singer-detail').then((module) => {
              resolve(module)
            })
          } }
      ]
    },
    {path: '/user',
      component: (resolve) => {
        import('components/user-center/user-center').then((module) => {
          resolve(module)
        })
      }}
  ]
})
