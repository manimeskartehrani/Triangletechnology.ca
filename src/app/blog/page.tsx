import React from "react";
import CardList from "../../components/CardList";
import CategoryList from "../../components/CategoryList";
import Featured from "../../components/Featured";
import Menu from "../../components/Menu";

export default function blog() {
  return (
    <div className="ml-auto mr-auto pl-20 pr-20">
      <Featured />
      <CategoryList
        titleText="Business Categories"
        setting="justify-between "
        width="w-1/5"
      />
      <div className="flex gap-12 sm:flex-col ">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
