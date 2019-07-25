import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

// @see https://material-ui.com/components/links/#third-party-routing-library
export default props => {
  const url = process.env.PUBLIC_URL;
  const { to, style } = props;
  return (
    <Link component={RouterLink} to={url + to} style={style}>
      {props.children}
    </Link>
  );
};
