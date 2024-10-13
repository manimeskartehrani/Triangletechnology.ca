import React from "react";
import Popular from "./Popular";

const SubMenu = ({
  title,
  text,
  styles,
}: {
  title: string;
  text: string;
  styles: string;
}) => {
  return (
    <div className="  flex flex-col gap-9 mt-12 sm:my-0 ">
      <h4 className="text-gray-400 text-sm font-normal mt-10 ">{text}</h4>
      <h3 className="text-2xl font-bold mt-[-30px] ">{title}</h3>
      <Popular
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        category="coffee"
        imageSrc="/assets/coffee.jpg"
        writer="Mani"
        date={new Date(Date.now())
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "-")}
        setting={styles}
      />
      <Popular
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        category="web development"
        imageSrc="/assets/coffee.jpg"
        writer="Mani"
        date={new Date(Date.now())
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "-")}
        setting={styles}
      />
      <Popular
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        category="data analysis"
        imageSrc="/assets/coffee.jpg"
        writer="Mani"
        date={new Date(Date.now())
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "-")}
        setting={styles}
      />
      <Popular
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        category="teaching"
        imageSrc="/assets/coffee.jpg"
        writer="Mani"
        date={new Date(Date.now())
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "-")}
        setting={styles}
      />
    </div>
  );
};

export default SubMenu;
