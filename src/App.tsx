import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/details/DetailsPage";
import { searchLoader } from "./pages/search/searchLoader";
import { detailsLoader } from "./pages/details/detailsLoader";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "/search",
                    element: <SearchPage />,
                    loader: searchLoader,
                },
                {
                    path: "/packages/:name",
                    element: <DetailsPage />,
                    loader: detailsLoader,
                },
            ],
        },
    ],
    {
        // future: {
        //     v7_relativeSplatPath: true,
        //     v7_fetcherPersist: true,
        //     v7_normalizeFormMethod: true,
        //     v7_partialHydration: true,
        // },
    }
);

function App() {
    return (
        <RouterProvider
            // future={{
            //     v7_startTransition: true,
            //     // v7_skipActionStatusRevalidation: true,
            // }}
            router={router}
        />
    );
}

export default App;
