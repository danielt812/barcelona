import { Box, Card, CardContent, CardHeader, CardMedia, Divider, List, ListItem, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import exploreData from "../data/explore.json";

interface ExploreItem {
  location: string;
  description: string;
  hours: string;
  duration: string;
  cost: string;
  notes: string[];
  photos: string[];
}

export default function Explore() {
  const data = exploreData as ExploreItem[];

  return (
    <Box
      maxWidth="md"
      mx="auto"
      display="flex"
      flexDirection="column"
      gap={4}
      py={4}
    >
      {data.map((item, index) => (
        <Card
          key={index}
          elevation={3}
        >
          <CardHeader title={item.location} />

          <Carousel
            showThumbs={true}
            showStatus={true}
            infiniteLoop
            emulateTouch
            autoPlay={false}
          >
            {item.photos.map((photo, idx) => (
              <div key={idx}>
                <CardMedia
                  component="img"
                  image={photo}
                  alt={`${item.location} photo ${idx + 1}`}
                  sx={{
                    height: 500,
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </Carousel>

          <CardContent>
            <Typography
              variant="subtitle2"
              gutterBottom
            >
              Hours: {item.hours}
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
            >
              Duration: {item.duration}
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
            >
              Price: {item.cost}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography
              variant="body1"
              gutterBottom
            >
              {item.description}
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
            >
              <div className="text-xl underline">Notes:</div>
            </Typography>
            <List dense>
              {item.notes.map((note, i) => (
                <ListItem
                  key={i}
                  sx={{ display: "list-item", pl: 2 }}
                >
                  - {note}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
