import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import Button from "@material-ui/core/Button";
import { EventNote } from "@material-ui/icons";
import { BrowserRouter as Router, Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import InfoIcon from '@material-ui/icons/Info';
import FavoriteIcon from '@material-ui/icons/Favorite';


const StyledListItem = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      paddingInline: window.innerWidth/2 - 72, // centering tab
    },
    [theme.breakpoints.up("md")]: {
      paddingInline: 20,
    },
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      width: window.innerWidth, 
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    },
    closedMainItems: {
      color: 20,
    }
  },
}))(ListItem);

export const mainListItems = (

  <div>
    <StyledListItem button to="/" component={Link}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </StyledListItem>
    <StyledListItem button to="/yourEvents" component={Link}>
      <ListItemIcon>
        <EventNote />
      </ListItemIcon>
      <ListItemText primary="Your Events" />
    </StyledListItem>
    <StyledListItem button to="/sponsors" component={Link}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Sponsors" />
    </StyledListItem>
  </div>
);

export const closedMainItems = (
  <div>
    <ListItem button to="/" component={Link}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button to="/yourEvents" component={Link}>
      <ListItemIcon>
        <EventNote />
      </ListItemIcon>
      <ListItemText primary="Your Events" />
    </ListItem>
    <ListItem button to="/sponsors" component={Link}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Sponsors" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem alignItems="flex-start">
      <ListItemText
        secondary={
          <div>
            <div>Become a member to join events</div>
            <div>and enjoy discounts</div>
          </div>
        }
      />
    </ListItem>
    <ListItem>
      <Button variant="outlined" color="secondary">
        Upgrade
      </Button>
    </ListItem>
  </div>
);

export const bottomListItems = (
  <div>
      <StyledListItem button to="/about" component={Link}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </StyledListItem>
  </div>
);
