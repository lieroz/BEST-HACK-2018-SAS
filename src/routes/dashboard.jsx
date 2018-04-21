import ProfilePage from 'views/Profile/Profile.jsx';
import FinancesPage from 'views/Finances/Finances.jsx';
import ServicesPage from 'views/Services/Services.jsx';
import BalancePage from 'views/Balance/Balance.jsx';

import {
  Person,
  AccountBalanceWallet,
  CreditCard,
  Settings
} from '@material-ui/icons';

const dashboardRoutes = [
  {
    path: '/profile',
    sidebarName: 'Профиль',
    navbarName: 'Профиль',
    icon: Person,
    component: ProfilePage
  },
  {
    path: '/balance',
    sidebarName: 'Баланс',
    navbarName: 'Баланс',
    icon: AccountBalanceWallet,
    component: BalancePage
  },
  {
    path: '/finances',
    sidebarName: 'Мои Финансы',
    navbarName: 'Мои Финансы',
    icon: CreditCard,
    component: FinancesPage
  },
  {
    path: '/services',
    sidebarName: 'Услуги',
    navbarName: 'Услуги',
    icon: Settings,
    component: ServicesPage
  },
  { redirect: true, path: '/', to: '/profile', navbarName: 'Redirect' }
];

export default dashboardRoutes;
