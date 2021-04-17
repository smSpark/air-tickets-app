import React from "react";
import style from "./SearchPage.module.css";
import Filter from "../../components/Filter/Filter";
import TicketsList from "../../components/TicketsList/TicketsList";

const SearchPage: React.FC = () => {
  return (
    <main className={style.container}>
      <Filter />
      <TicketsList />
    </main>
  );
};

export default SearchPage;
