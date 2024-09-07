import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from '../app/App';
import { About } from '../app/routes/app/about';
import { LandingPage } from '../app/routes/landing';
import { CauseDetail } from '../features/cause/CauseDetail';
import CauseList from '../features/cause/CauseList';
import { OrgDetail } from '../features/organization/OrgDetail';
import { UserDetail } from '../features/user/UserDetail';
import UserList from '../features/user/UserList';
import OrgList from '../features/organization/OrgList';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <LandingPage />,
			},
			{
				path: '/org',
				element: <OrgList />,
			},
			{
				path: '/org/:orgId',
				element: <OrgDetail />,
			},
			{
				path: '/user',
				element: <UserList />,
			},
			{
				path: '/user/:userId',
				element: <UserDetail />,
			},
			{
				path: '/cause',
				element: <CauseList />,
			},
			{
				path: '/cause/:causeId',
				element: <CauseDetail />,
			},
			{
				path: '/about',
				element: <About />,
			},
			// {
			// 	path: '/userProfile',
			// 	element: <UserProfile />
			// }
		],
	},
];

export const router = createBrowserRouter(routes);
