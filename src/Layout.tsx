import { Outlet } from "react-router";
import Menu from "./Menu";
import CurrentAddress from "./CurrentAddress";
import PageTitle from "./PageTitle";

type LayoutProps = {
  favoriteCount: number;
};

export default function Layout({ favoriteCount }: LayoutProps) {
  return (
    <>
      <Menu favoriteCount={favoriteCount} />
      <CurrentAddress />
      <hr />
      <main>
        <Outlet />
      </main>
      <hr />
      <PageTitle />
      <footer>Учебная библиотека</footer>
    </>
  );
}