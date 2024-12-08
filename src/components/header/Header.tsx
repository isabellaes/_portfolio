import "./header.scss";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { projects } from "../../data";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigation = useNavigate();
  return (
    <header>
      <nav>
        <Button
          id="basic-button"
          onClick={() => {
            navigation("/");
          }}
        >
          Home
        </Button>
        <Button
          id="basic-button"
          onClick={() => {
            navigation("about");
          }}
        >
          About
        </Button>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Projects
        </Button>
        <Button
          id="basic-button"
          onClick={() => {
            navigation("contact");
          }}
        >
          Contact
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {projects.map((p) => (
            <MenuItem
              onClick={() => {
                navigation(`project/${p.id}`);
                handleClose();
              }}
            >
              {p.title}
            </MenuItem>
          ))}
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
