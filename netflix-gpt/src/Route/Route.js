import LogIn from "../Components/LogIn";

const { createBrowserRouter } = require("react-router-dom");
const { default: Browse } = require("../Components/Browse");

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <LogIn />
    },
    {
        path: "/browse",
        element: <Browse />
    }
])

export default appRouter;