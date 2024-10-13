import React from "react";
import SubMenu from "./SubMenu";
import CategoryList from "./CategoryList";

const Menu = () => {
  return (
    <div className="flex-col flex-[2] lg:flex-1 sm:hidden">
      <SubMenu title="Most Popular" text="What's hot" styles="hidden " />
      <CategoryList
        titleText="Categories"
        setting="justify-start"
        width="w-1/3 text-sm"
      />
      <SubMenu title="Editors Pick" text="Top choosen" styles="visible" />
    </div>
  );
};

export default Menu;
