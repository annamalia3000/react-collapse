import { useState } from "react";
import classes from "./collapse.module.css";

type CollapseProps = {
  collapsedLabel?: string;
  expandedLabel?: string;
  children: React.ReactNode;
};

export const Collapse: React.FC<CollapseProps> = ({
  collapsedLabel = "Развернуть",
  expandedLabel = "Свернуть",
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggeleCollapse: () => void = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes["collapse-container"]}>
      <button className={classes["collapse-button"]} onClick={toggeleCollapse}>
        {isOpen ? expandedLabel : collapsedLabel}
      </button>
      <div
        className={`${classes["collapse-content"]} ${
          isOpen ? classes["open"] : classes["closed"]
        }`}
      >
        {children}
      </div>
    </div>
  );
};
