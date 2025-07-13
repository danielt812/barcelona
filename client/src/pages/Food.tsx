import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import foodData from "../data/food.json";

interface FoodItem {
  name: string;
  description: string;
  image: string;
  type: "food" | "drink" | "dessert";
  origin: string;
  whenToEat: string;
  servedAt: string[];
  notes: string[];
  vegetarian: boolean;
}

const allTypes: FoodItem["type"][] = ["food", "drink", "dessert"];

export default function Food() {
  const data = foodData as FoodItem[];

  const [selectedType, setSelectedType] = useState<FoodItem["type"] | "all">("all");

  const filteredData = selectedType === "all" ? data : data.filter((item) => item.type === selectedType);

  return (
    <Box
      maxWidth="md"
      mx="auto"
      display="flex"
      flexDirection="column"
      gap={4}
      py={4}
    >
      {/* Filter Chips */}
      <Box
        display="flex"
        gap={1}
        mb={2}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Chip
          label="All"
          onClick={() => setSelectedType("all")}
          color={selectedType === "all" ? "primary" : "default"}
          variant={selectedType === "all" ? "filled" : "outlined"}
        />
        {allTypes.map((type) => (
          <Chip
            key={type}
            label={type.charAt(0).toUpperCase() + type.slice(1)}
            onClick={() => setSelectedType(type)}
            color={selectedType === type ? "primary" : "default"}
            variant={selectedType === type ? "filled" : "outlined"}
          />
        ))}
      </Box>

      {/* Cards */}
      {filteredData.map((item, index) => (
        <Card
          key={index}
          elevation={3}
        >
          <CardHeader title={item.name} />

          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
            sx={{
              height: 500,
              width: "100%",
              objectFit: "cover",
            }}
          />

          <CardContent>
            <Box
              display="flex"
              gap={1}
              mb={2}
              flexWrap="wrap"
            >
              <Chip
                label={item.type.toUpperCase()}
                color="primary"
              />
              <Chip
                label={item.vegetarian ? "Vegetarian" : "Not Vegetarian"}
                color={item.vegetarian ? "success" : "default"}
              />
              <Chip
                label={`Origin: ${item.origin}`}
                variant="outlined"
              />
              <Chip
                label={`When to Eat: ${item.whenToEat}`}
                variant="outlined"
              />
            </Box>

            <Typography
              variant="body1"
              gutterBottom
            >
              {item.description}
            </Typography>

            <Typography
              variant="subtitle2"
              gutterBottom
            >
              <strong>Served At:</strong> {item.servedAt.join(", ")}
            </Typography>

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
