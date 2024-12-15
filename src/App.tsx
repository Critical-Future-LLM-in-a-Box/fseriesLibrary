import React, { useState, useEffect } from "react";
import { Paper, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Library from "@/components/Library";
import Chatbot from "@/components/Chatbot";

interface Item {
  id: number;
  title: string;
  description: string;
  url: string;
}

export default function App(): JSX.Element {
  const [libraryItems, setLibraryItems] = useState<Item[]>([]);
  const [recommendationItems, setRecommendationItems] = useState<Item[]>([]);

  useEffect(() => {
    // More dummy data to allow scrolling
    const fetchedLibraryItems: Item[] = [
      {
        id: 1,
        title: "Landscape",
        description: "A scenic view of mountains.",
        url: "https://example.com/landscape"
      },
      {
        id: 2,
        title: "City Lights",
        description: "A bustling city at night.",
        url: "https://example.com/city"
      },
      {
        id: 3,
        title: "Forest",
        description: "A lush green forest.",
        url: "https://example.com/forest"
      },
      {
        id: 4,
        title: "Ocean Waves",
        description: "Waves crashing on the shore.",
        url: "https://example.com/ocean"
      },
      {
        id: 5,
        title: "Desert",
        description: "A vast expanse of sand.",
        url: "https://example.com/desert"
      },
      {
        id: 6,
        title: "Snowy Peaks",
        description: "Mountains covered in snow.",
        url: "https://example.com/snow"
      },
      {
        id: 7,
        title: "Valley",
        description: "A serene valley scene.",
        url: "https://example.com/valley"
      },
      {
        id: 8,
        title: "Waterfall",
        description: "A cascading waterfall.",
        url: "https://example.com/waterfall"
      }
    ];

    const fetchedRecommendations: Item[] = [
      {
        id: 101,
        title: "Recommended Book",
        description: "A must read.",
        url: "https://example.com/book"
      },
      {
        id: 102,
        title: "Recommended Movie",
        description: "A must watch.",
        url: "https://example.com/movie"
      },
      {
        id: 103,
        title: "Recommended Podcast",
        description: "Insightful talks.",
        url: "https://example.com/podcast"
      },
      {
        id: 104,
        title: "Recommended Music",
        description: "Soothing tunes.",
        url: "https://example.com/music"
      },
      {
        id: 105,
        title: "Recommended Series",
        description: "Binge-worthy show.",
        url: "https://example.com/series"
      },
      {
        id: 106,
        title: "Recommended Art",
        description: "A visual delight.",
        url: "https://example.com/art"
      }
    ];

    setLibraryItems(fetchedLibraryItems);
    setRecommendationItems(fetchedRecommendations);
  }, []);

  const handleAddLibraryItem = (newItem: Omit<Item, "id">) => {
    setLibraryItems((prev) => [...prev, { id: Date.now(), ...newItem }]);
  };

  const handleEditLibraryItem = (id: number, updatedItem: Omit<Item, "id">) => {
    setLibraryItems((prev) =>
      prev.map((item) => (item.id === id ? { id, ...updatedItem } : item))
    );
  };

  const handleRemoveLibraryItem = (id: number) => {
    setLibraryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddRecommendationToLibrary = (item: Item) => {
    setLibraryItems((prev) => [...prev, { ...item, id: Date.now() }]);
  };

  return (
    <Grid
      container
      spacing={8}
      sx={{
        padding: 8,
        minWidth: "400px",
        minHeight: "100vh",
        backgroundImage: "url(/garage.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Media Column */}
      <Grid
        size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
        sx={{ display: "flex" }}
      >
        <Stack
          useFlexGap
          direction="column"
          spacing={8}
          sx={{ flexGrow: 1, minWidth: "200px" }}
        >
          <Paper
            variant="elevation"
            elevation={2}
            sx={{
              flexGrow: 1,
              borderRadius: 4,
              overflow: "hidden",
              maxHeight: "38vh",
              bgcolor: "transparent"
            }}
          >
            <Library
              mode="library"
              title="Media Library"
              items={libraryItems}
              onAddItem={handleAddLibraryItem}
              onEditItem={handleEditLibraryItem}
              onRemoveItem={handleRemoveLibraryItem}
            />
          </Paper>
          <Paper
            variant="elevation"
            elevation={2}
            sx={{
              flexGrow: 1,
              borderRadius: 4,
              overflow: "hidden",
              maxHeight: "38vh",
              bgcolor: "transparent"
            }}
          >
            <Library
              mode="recommendation"
              title="Media Recommendations"
              items={recommendationItems}
              onAddToLibrary={handleAddRecommendationToLibrary}
            />
          </Paper>
        </Stack>
      </Grid>

      {/* Parts Column */}
      <Grid
        size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
        sx={{ display: "flex" }}
      >
        <Stack
          useFlexGap
          direction="column"
          spacing={8}
          sx={{ flexGrow: 1, minWidth: "200px" }}
        >
          <Paper
            variant="elevation"
            elevation={2}
            sx={{
              flexGrow: 1,
              borderRadius: 4,
              overflow: "hidden",
              maxHeight: "38vh",
              bgcolor: "transparent"
            }}
          >
            <Library
              mode="library"
              title="Parts Library"
              items={libraryItems}
              onAddItem={handleAddLibraryItem}
              onEditItem={handleEditLibraryItem}
              onRemoveItem={handleRemoveLibraryItem}
            />
          </Paper>
          <Paper
            variant="elevation"
            elevation={2}
            sx={{
              flexGrow: 1,
              borderRadius: 4,
              overflow: "hidden",
              maxHeight: "38vh",
              bgcolor: "transparent"
            }}
          >
            <Library
              mode="recommendation"
              title="Parts Recommendations"
              items={recommendationItems}
              onAddToLibrary={handleAddRecommendationToLibrary}
            />
          </Paper>
        </Stack>
      </Grid>

      {/* Chatbot Column */}
      <Grid
        size={{ xs: 0, lg: 4 }}
        sx={{ display: { xs: "none", lg: "flex" } }}
      >
        <Paper
          variant="elevation"
          elevation={2}
          sx={{
            flexGrow: 1,
            minWidth: "400px",
            borderRadius: 4,
            overflow: "hidden",
            bgcolor: "rgba(0,0,0,0.6)"
          }}
        >
          <Chatbot />
        </Paper>
      </Grid>
    </Grid>
  );
}
