import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Browse } from './components/Browse';
import { Home } from "./components/Home";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/my-list',
        requireAuth: true,
        element: <Browse />
    },
    {
        path: '/browse',
        requireAuth: true,
        element: <Browse />
    },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
