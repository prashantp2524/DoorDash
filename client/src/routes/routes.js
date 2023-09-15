import HomePage from "../pages/HomePage";
import PasswordUpdate from "../pages/PasswordUpdate";
import ProtectedPage from "../components/common/ProtectedPage";

export const routesGen = {
  home: "/",
  passwordUpdate: "password-update",
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/password-update",
    element: (
      <ProtectedPage>
        <PasswordUpdate />
      </ProtectedPage>
    ),
    state: "password.update",
  },
];

export default routes;
