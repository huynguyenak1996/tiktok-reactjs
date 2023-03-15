import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import Header from "~/layouts/DefaultLayout/Header";
import Slidebar from "~/layouts/DefaultLayout/Slidebar";

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Slidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
