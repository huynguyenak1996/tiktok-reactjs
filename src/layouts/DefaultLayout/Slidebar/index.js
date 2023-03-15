import React from "react";

import styles from "./Slidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Slidebar = () => {
  return (
    <aside className={cx("wrapper")}>
      <h2>Slidebar</h2>
    </aside>
  );
};

export default Slidebar;
