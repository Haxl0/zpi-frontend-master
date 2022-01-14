import DashboardLayout from '@/views/Layout/DashboardLayout.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Wykresy',

        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/predict',
        name: 'Predict',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Predict.vue')
      }
    ]
  }
];

export default routes;
