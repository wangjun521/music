import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import SingerDetail from 'components/singer-detail/singer-detail'
import Disc from 'components/disc/disc'
import TopList from 'components/top-list/top-list'
import UserCenter from 'components/user-center/user-center'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: 'recommend', name: '' },
    { path: '/recommend',
      name: '',
      component: Recommend,
      children: [
        {path: ':id', component: Disc}
      ]
    },
    { path: '/rank',
      name: '',
      component: Rank,
      children: [
        {path: ':id', component: TopList}
      ]
    },
    { path: '/singer',
      name: '',
      component: Singer,
      children: [
      { path: ':id', name: '', component: SingerDetail }
      ]
    },
    { path: '/search',
      name: '',
      component: Search,
      children: [
      { path: ':id', name: '', component: SingerDetail }
      ]
    },
    {path: '/user', component: UserCenter}
  ]
})
