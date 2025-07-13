import { Box, Card, CardContent, CardHeader, CardMedia, Divider, List, ListItem, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tripData from "../data/trips.json";

interface TripItem {
  destination: string;
  description: string;
  distanceFromBarcelona: string;
  recommendedDuration: string;
  travelOptions: string[];
  highlights: string[];
  notes: string[];
  photos: string[];
}

export default function Trips() {
  const data = tripData as TripItem[];

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
          <CardHeader title={item.destination} />

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
                  alt={`${item.destination} photo ${idx + 1}`}
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
              Distance from Barcelona: {item.distanceFromBarcelona}
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
            >
              Recommended Duration: {item.recommendedDuration}
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
            >
              Travel Options: {item.travelOptions.join(", ")}
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
              <div className="text-xl underline">Highlights:</div>
            </Typography>
            <List dense>
              {item.highlights.map((highlight, i) => (
                <ListItem
                  key={i}
                  sx={{ display: "list-item", pl: 2 }}
                >
                  - {highlight}
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

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
