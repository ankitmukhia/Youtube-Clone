/*******  These all we are importing from react Router dom *******/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
console.log(Box);

const App = () => (
  <Router>
    {/* The sx prop lets you add any valid CSS to an element */}
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      {/* These Routes is built-in component by react router dom */}
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </Router>
);

export default App;
