/** Feed is going to be consisted of two primary parts the sidebar on the left side 
& video Feed on the right side **/

// we are Importing these useing effect Hooks from react
import { useState, useEffect } from "react";
// And here we are importing couple of component from @mui
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  /** we want to call fetchFromAPI as soon as our 
 feed loads because we want to immediately fetch the data **/

  /** useEffect is a life cycle hook which get called when the component initially loads
  and we are also profiding dependancy arry below on other word the code inside this
  function only run when we reload the page**/
  useEffect(() => {
    /** here we are calling fetch api we created & we want pass remainder of the url that we want to call **/
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    // This Stack is going to be our primary weappwe and it's going to wrap sidebar and main part
    /** sx:means useally and md:medium and larger size screen **/
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh " },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright {new Date().getFullYear()} By Ankit
        </Typography>
      </Box>
      {/* This box is going to be for the left side in other words for all of our Videos content */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "gray" }}>videos</span>
        </Typography>
        {/* Here we are making new component for our all Videos */}
        {/* our next task to fatch our all videos data */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;
