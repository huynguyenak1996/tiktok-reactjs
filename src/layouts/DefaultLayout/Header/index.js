import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo from "~/assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* {LOGO} */}
        <div className={cx("logo")}>
          <img src={logo} alt="tiktok"></img>
        </div>
        {/* {SEARCH} */}
        <div className={cx("search")}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx("clear-btn")}>
            {/* {CLEAR} */}
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* {LOADING} */}
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          <button className={cx("search-btn")}>
            {/* {SEARCH} */}
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className={cx("actions")}></div>
      </div>
    </header>
  );
};

export default Header;
