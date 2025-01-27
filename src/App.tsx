import React, { useState, memo } from "react";
import {
  Paper,
  Stack,
  Box,
  Grid2 as Grid,
  IconButton,
  TextField,
  Typography
} from "@mui/material";
import { Edit, Save, Logout } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useLibrary, useAuth } from "@/hooks";
import { useStore, Item } from "@/store";
import Library from "@/components/Library";
import Chatbot from "@/components/Chatbot";
import Recommendations from "@/components/Recommendations";

const App = () => {
  const { garageName, setGarageName } = useStore();
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(garageName || "");

  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const {
    mediaLibrary,
    partsLibrary,
    mediaRecommendations,
    partsRecommendations,
    addMediaItem,
    addPartsItem,
    addMediaRecommendation,
    addPartsRecommendation,
    updateMediaItem,
    updatePartsItem,
    deleteMediaItem,
    deletePartsItem
  } = useLibrary();

  const handleAddMediaItem = React.useCallback(
    async (newItem: Item) => {
      try {
        await addMediaItem(newItem);
        toast.success("Media item added successfully");
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    [addMediaItem]
  );

  const handleUpdateMediaItem = React.useCallback(
    async (item: Item) => {
      try {
        await updateMediaItem(item);
        toast.success("Media item updated successfully");
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    [updateMediaItem]
  );

  const handleDeleteMediaItem = React.useCallback(
    async (id: number) => {
      try {
        await deleteMediaItem(id);
        toast.success("Media item deleted successfully");
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    [deleteMediaItem]
  );

  const handleAddPartsItem = React.useCallback(
    async (newItem: Item) => {
      try {
        await addPartsItem(newItem);
        toast.success("Parts item added successfully");
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    [addPartsItem]
  );

  const handleUpdatePartsItem = React.useCallback(
    async (item: Item) => {
      try {
        await updatePartsItem(item);
        toast.success("Parts item updated successfully");
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    [updatePartsItem]
  );

  const handleDeletePartsItem = React.useCallback(
    async (id: number) => {
      try {
        await deletePartsItem(id);
        toast.success("Parts item deleted successfully");
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    [deletePartsItem]
  );

  const handleAddMediaRecommendation = React.useCallback(
    async (item: Item) => {
      try {
        await addMediaRecommendation(item);
        toast.success("Media recommendation added to library");
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    [addMediaRecommendation]
  );

  const handleAddPartsRecommendation = React.useCallback(
    async (item: Item) => {
      try {
        await addPartsRecommendation(item);
        toast.success("Parts recommendation added to library");
      } catch (error) {
        toast.error((error as Error).message);
      }
    },
    [addPartsRecommendation]
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{ p: 2 }}
      >
        {/* Header Row */}
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 1,
              borderRadius: 2,
              bgcolor: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)"
            }}
          >
            {isEditingName ? (
              <TextField
                variant="standard"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                sx={{ input: { color: "#fff" } }}
              />
            ) : (
              <Typography
                variant="h6"
                color="#fff"
              >
                {garageName ?? ""} Garage
              </Typography>
            )}
            <IconButton
              onClick={() => {
                if (isEditingName) {
                  setGarageName(tempName);
                  setIsEditingName(false);
                } else {
                  setIsEditingName(true);
                  setTempName(garageName ?? "");
                }
              }}
              sx={{ color: "#fff" }}
            >
              {isEditingName ? <Save /> : <Edit />}
            </IconButton>
          </Box>
          <IconButton
            onClick={handleLogout}
            sx={{
              "backgroundColor": "rgba(0,0,0,0.5)",
              "color": "white",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "rgba(255,255,255,0.7)"
              }
            }}
          >
            <Logout />
          </IconButton>
        </Grid>

        {/* Libraries Container */}
        <Grid
          size={{ xs: 12, md: 6, lg: 8 }}
          container
          sx={{ overflow: "auto", maxHeight: "80vh" }}
        >
          {/* Media Column */}
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{ display: "flex" }}
          >
            <Stack
              direction="column"
              spacing={3}
            >
              <Paper
                variant="elevation"
                elevation={2}
                sx={{
                  flexGrow: 1,
                  borderRadius: 8,
                  minWidth: "200px",
                  maxHeight: "38vh",
                  overflow: "hidden",
                  bgcolor: "transparent"
                }}
              >
                <Library
                  title="Media Library"
                  items={mediaLibrary}
                  onAddItem={handleAddMediaItem}
                  onEditItem={handleUpdateMediaItem}
                  onRemoveItem={handleDeleteMediaItem}
                />
              </Paper>
              <Paper
                variant="elevation"
                elevation={2}
                sx={{
                  flexGrow: 1,
                  borderRadius: 8,
                  minWidth: "200px",
                  maxHeight: "38vh",
                  overflow: "hidden",
                  bgcolor: "transparent"
                }}
              >
                <Recommendations
                  title="Media Recommendations"
                  items={mediaRecommendations}
                  onAddToLibrary={handleAddMediaItem}
                />
              </Paper>
            </Stack>
          </Grid>

          {/* Parts Column */}
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{ display: "flex" }}
          >
            <Stack
              direction="column"
              spacing={3}
            >
              <Paper
                variant="elevation"
                elevation={2}
                sx={{
                  flexGrow: 1,
                  borderRadius: 8,
                  minWidth: "200px",
                  maxHeight: "38vh",
                  overflow: "hidden",
                  bgcolor: "transparent"
                }}
              >
                <Library
                  title="Parts Library"
                  items={partsLibrary}
                  onAddItem={handleAddPartsItem}
                  onEditItem={handleUpdatePartsItem}
                  onRemoveItem={handleDeletePartsItem}
                />
              </Paper>
              <Paper
                variant="elevation"
                elevation={2}
                sx={{
                  flexGrow: 1,
                  borderRadius: 8,
                  minWidth: "200px",
                  maxHeight: "38vh",
                  overflow: "hidden",
                  bgcolor: "transparent"
                }}
              >
                <Recommendations
                  title="Parts Recommendations"
                  items={partsRecommendations}
                  onAddToLibrary={handleAddPartsItem}
                />
              </Paper>
            </Stack>
          </Grid>
        </Grid>

        {/* Chatbot Column */}
        <Grid
          size={{ xs: 0, md: 6, lg: 4 }}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Paper
            variant="elevation"
            elevation={2}
            sx={{
              flexGrow: 1,
              borderRadius: 8,
              height: "80vh",
              overflow: "hidden",
              bgcolor: "transparent"
            }}
          >
            <Chatbot
              onMediaRecommendationAdd={handleAddMediaRecommendation}
              onPartsRecommendationAdd={handleAddPartsRecommendation}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(App);
