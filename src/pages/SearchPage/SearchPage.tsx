import React from "react";
import style from "./SearchPage.module.css";
import TicketsList from "../../components/TicketsList/TicketsList";

const SearchPage: React.FC = () => {
  return (
    <main className={style.container}>
      <TicketsList />
    </main>
  );
};

export default SearchPage;
