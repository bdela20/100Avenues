import Home from '../pages/Home';
import About from '../pages/About';

import Terms from '../pages/Terms';
import Services from '../pages/Services';
import Contact from '../pages/Contact';




interface RouteType {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}

const routes: RouteType[] = [
  { path: '/Home', component: Home, exact: true },
  { path: '/About', component: About },
  { path: '/Contact', component: Contact },

  { path: '/Services', component: Services },
  { path: '/terms', component: Terms },


];

export default routes;
