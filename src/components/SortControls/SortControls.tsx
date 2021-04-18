import React, { useCallback } from "react";
import style from "./SortControls.module.css";
import Button from "../../componentsHelper/Button/Button";
import { useQuery } from "../../hooks/useQuery";
import { SortQuery } from "../../types/sortfilter";

interface IButtonStatus {
  [key: string]: string | undefined;
}

const buttonStatus: IButtonStatus = {
  by_price: "by_price",
  by_time: "by_time",
};

const SortControls: React.FC = () => {
  const { setValue, defaultValue } = useQuery<SortQuery>("sort");

  const sortByDuration = () => {
    setValue("sort", "by_time");
  };

  const sortByPrice = () => {
    setValue("sort", "by_price");
  };

  const checkActiveButton = useCallback(
    (status: string, defActive = false): boolean => {
      const checkStatus = buttonStatus[defaultValue[0]];
      return checkStatus ? defaultValue[0] === status : defActive;
    },
    [defaultValue]
  );

  return (
    <div className={style.sort}>
      <Button
        text="Самый дешевый"
        active={checkActiveButton("by_price", true)}
        clickHandler={sortByPrice}
      />
      <Button
        text="Самый быстрый"
        active={checkActiveButton("by_time")}
        clickHandler={sortByDuration}
      />
    </div>
  );
};

export default SortControls;
