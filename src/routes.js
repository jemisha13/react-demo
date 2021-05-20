import Dashboard from './components/Dashboard';
import News from './components/News';


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/news', name: 'Theme', component: News, exact: true },
];

export default routes;