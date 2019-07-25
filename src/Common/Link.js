import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const parseTo = to => {
  const parser = document.createElement("a");
  parser.href = to;
  return parser;
};
const isInternal = to => {
  if (to.indexOf("://") === -1) return true;
  const toLocation = parseTo(to);
  return window.location.hostname === toLocation.hostname;
};

// @see https://material-ui.com/components/links/#third-party-routing-library
export default props => {
  const url = process.env.PUBLIC_URL;
  const { to, style } = props;

  if (isInternal(to)) {
    return (
      <Link component={RouterLink} to={url + to} style={style}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <Link target="_blank" href={to} style={style}>
        {props.children}
      </Link>
    );
  }
};
