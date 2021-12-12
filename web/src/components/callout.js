import React from "react";

import * as styles from "./callout.module.css";

const Callout = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Callout;
