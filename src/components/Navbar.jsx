/** The Stack component manages layout of immediate children along the vertical or 
horizontal axis with optional spacing and/or dividers between each child. **/

import { Stack } from "@mui/material";

import { Link } from "react-router-dom";

import { logo } from "../utils/constants";

import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    /** we are providing this component some kind of properties, direction, align item etc **/
    /** If you are confused that, does Stack accept this properties or not then Hove over that Stack and chech Stack API */
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    {/* From here we are Starting our Navbar */}
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      {/* And these part is for Logo */}
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
