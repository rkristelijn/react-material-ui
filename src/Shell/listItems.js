import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import AccountIcon from "@material-ui/icons/Business";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import LogOutIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

const noDecoration = { "text-decoration": "none", color: "inherit" };

export const mainListItems = (
  <div>
    <Link to="/dashboard" style={noDecoration}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/orders" style={noDecoration}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
    </Link>
    <Link to="/accounts" style={noDecoration}>
      <ListItem button>
        <ListItemIcon>
          <AccountIcon />
        </ListItemIcon>
        <ListItemText primary="Accounts" />
      </ListItem>
    </Link>
    <Link to="/contacts" style={noDecoration}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
    </Link>
    <Link to="/reports" style={noDecoration}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </Link>
    <Link to="/integrations" style={noDecoration}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Others</ListSubheader>
    <Link to="/login" style={noDecoration}>
      <ListItem button>
        <ListItemIcon>
          <LogOutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </Link>
  </div>
);
