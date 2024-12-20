import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";

export const renderWithOutletContext = (Component) => {
  const context = { env: { STRAPI_URL: "http://localhost:1337" } };
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet context={context} />}>
          <Route index element={<Component />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};
