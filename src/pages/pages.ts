import { ListMasterPage } from './list-master/list-master';

import { SignupPage } from './signup/signup';
import { TabsPage } from './tabs/tabs';
import { LoginPage } from './login/login';
import { SearchPage } from './search/search';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = LoginPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = ListMasterPage;
export const Tab2Root = SearchPage;
export const Tab3Root = SignupPage;
