import { createBrowserRouter } from "react-router-dom";
import { UserPanel } from "../../widgets/UserPanel";
import { Main } from "../../pages/Main"

export const rout = createBrowserRouter([
  {
    path: '/',
    element: <UserPanel/>,
    children: [
      {
        index: true,
        element: <Main/>
      }
    ]
  },
]);