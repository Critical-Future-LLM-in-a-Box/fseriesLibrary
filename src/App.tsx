import React, { useState, useEffect, memo } from "react";
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
import { useStore } from "@/store";
import { useLibrary } from "@/hooks";
import { useAuth } from "@/hooks/useAuth";
import { Item } from "@/store";
import Library from "@/components/Library";
import Chatbot from "@/components/Chatbot";
import { toast } from "react-toastify";

const App = () => {
  const { logout } = useAuth();
  const {
    setMediaLibrary,
    setPartsLibrary,
    deleteUser,
    garageName,
    setGarageName,
    mediaLibrary,
    partsLibrary,
    mediaRecommendations,
    partsRecommendations
  } = useStore();
  const {
    getMediaLibrary,
    getPartsLibrary,
    addMediaItem,
    addPartsItem,
    updateMediaItem,
    updatePartsItem,
    deleteMediaItem,
    deletePartsItem
  } = useLibrary();

  const [tempName, setTempName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);

  const handleLogout = async () => {
    const response = await logout().catch((error) =>
      toast.error(error.message)
    );
    if (response) toast.success("Logged out successfully");
    deleteUser();
  };

  // Query hooks
  const { data: mediaLibraryData } = getMediaLibrary();
  const { data: partsLibraryData } = getPartsLibrary();

  // Mutation hooks
  const addMediaMutation = addMediaItem();
  const addPartsMutation = addPartsItem();
  const updateMediaMutation = updateMediaItem();
  const updatePartsMutation = updatePartsItem();
  const deleteMediaMutation = deleteMediaItem();
  const deletePartsMutation = deletePartsItem();

  // Update local state when data changes
  useEffect(() => {
    if (mediaLibraryData) setMediaLibrary(mediaLibraryData);
    if (partsLibraryData) setPartsLibrary(partsLibraryData);
  }, [mediaLibraryData, partsLibraryData]);

  const handleAddMediaItem = async (newItem: Omit<Item, "id">) => {
    const itemWithId: Item = { id: Date.now(), ...newItem };
    await addMediaMutation
      .mutateAsync(itemWithId)
      .then(() => {
        toast.success("Media item added successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleAddPartsItem = async (newItem: Omit<Item, "id">) => {
    const itemWithId: Item = { id: Date.now(), ...newItem };
    await addPartsMutation
      .mutateAsync(itemWithId)
      .then(() => {
        toast.success("Parts item added successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleUpdateMediaItem = async (id: number, data: Partial<Item>) => {
    await updateMediaMutation
      .mutateAsync({ id, data })
      .then(() => {
        toast.success("Media item updated successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleUpdatePartsItem = async (id: number, data: Partial<Item>) => {
    await updatePartsMutation
      .mutateAsync({ id, data })
      .then(() => {
        toast.success("Parts item updated successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleDeleteMediaItem = async (id: number) => {
    await deleteMediaMutation
      .mutateAsync(id)
      .then(() => {
        toast.success("Media item deleted successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleDeletePartsItem = async (id: number) => {
    await deletePartsMutation
      .mutateAsync(id)
      .then(() => {
        toast.success("Parts item deleted successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleAddMediaToLibrary = async (item: Item) => {
    await addMediaMutation
      .mutateAsync(item)
      .then(() => {
        toast.success("Media item added to library successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleAddPartsToLibrary = async (item: Item) => {
    await addPartsMutation
      .mutateAsync(item)
      .then(() => {
        toast.success("Parts item added to library successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
        spacing={8}
        rowSpacing={2}
        sx={{ padding: { xs: 2, md: 6 } }}
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
                {garageName} Garage
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

        {/* Media Column */}
        <Grid
          size={{ xs: 12, md: 6, lg: 4 }}
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
                height: "35vh",
                overflow: "hidden",
                bgcolor: "transparent"
              }}
            >
              <Library
                mode="library"
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
                borderRadius: 4,
                height: "35vh",
                overflow: "hidden",
                bgcolor: "transparent"
              }}
            >
              <Library
                mode="recommendation"
                title="Media Recommendations"
                items={mediaRecommendations}
                onAddToLibrary={handleAddMediaToLibrary}
              />
            </Paper>
          </Stack>
        </Grid>

        {/* Parts Column */}
        <Grid
          size={{ xs: 12, md: 6, lg: 4 }}
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
                height: "35vh",
                overflow: "hidden",
                bgcolor: "transparent"
              }}
            >
              <Library
                mode="library"
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
                borderRadius: 4,
                height: "35vh",
                overflow: "hidden",
                bgcolor: "transparent"
              }}
            >
              <Library
                mode="recommendation"
                title="Parts Recommendations"
                items={partsRecommendations}
                onAddToLibrary={handleAddPartsToLibrary}
              />
            </Paper>
          </Stack>
        </Grid>

        {/* Chatbot Column */}
        <Grid
          size={{ xs: 0, lg: 4 }}
          sx={{ display: { xs: "none", lg: "flex" }, minWidth: "200px" }}
        >
          <Paper
            variant="elevation"
            elevation={2}
            sx={{
              flexGrow: 1,
              borderRadius: 4,
              height: "80vh",
              overflow: "hidden",
              bgcolor: "transparent"
            }}
          >
            <Chatbot />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(App);
