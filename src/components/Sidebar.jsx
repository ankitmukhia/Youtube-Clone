import { Stack } from "@mui/material";

/** Here we have Arrays with catagories and icons we gonna use on our sidebar **/
import { categories } from "../utils/constants";

const Sidebar = (props) => (
  <Stack
    direction="row"
    // Here we are spicifing the Responsiveness of rightside bar, in big screen
    // it will go varticl but in small screen it will go horizontal in the top
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {/* inside here we have map over our catogery to get that content and icons */}
    {categories.map((category) => (
      // And all of this are Button which we can click and get related Videos like youtube
      <button
        className="category-btn"
        onClick={() => props.setSelectedCategory(category.name)}
        // Here we are spicifing the toggle hover on buttn and making first button auto clicked
        style={{
          /* Here we are scecking the condition if button is clicked then make it red else
              it will be red after hover */
          background: category.name === props.selectedCategory && "gray",
          color: "white",
        }}
        key={category.name}
      >
        {/* Here we are styling our Span like, giving our icons red color, and 
            giving margin between icon and text */}
        <span
          style={{
            color: category.name === props.selectedCategory ? "white" : "gray",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === props.selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
