import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";

const ChannelCard = (props) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "320px" },
      height: "320px",
      margin: "auto",
      marginTop: props.marginTop,
    }}
  >
    <Link to={`/channel/${props.channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          dixplay: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={
            props.channelDetail?.snippet?.thumbnail?.high?.url ||
            demoProfilePicture
          }
          alt={props.channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid",
          }}
        />
        <Typography varient="h6">
          {props.channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
        </Typography>
        {props.channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(props.channelDetail?.statistics?.subscriberCount).toLocaleString()}
             {" "}Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
