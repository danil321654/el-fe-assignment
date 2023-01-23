import { Todos } from "pages";

export const routes = [
  {
    path: "/todos",
    protected: true,
    Component: () => <Todos />,
  },
];
