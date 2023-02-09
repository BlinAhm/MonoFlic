import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Browse } from './components/Browse';
import { Home } from "./components/Home";
import { Stream } from "./components/Stream";

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
    {
        path: '/stream',
        requireAuth: true,
        element: <Stream />
    },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
