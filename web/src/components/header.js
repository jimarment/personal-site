import { Link } from "gatsby";
import React from "react";
import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">
          <div className={styles.name}>Jim Arment</div>
          <div className={styles.title}>Leadership + Engineering</div>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
