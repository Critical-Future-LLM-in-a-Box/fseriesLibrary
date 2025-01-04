import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  useTheme
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StarIcon from "@mui/icons-material/Star";
import MovieIcon from "@mui/icons-material/Movie";
import BuildIcon from "@mui/icons-material/Build";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const isImageUrl = (url: string) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};

const isVideoUrl = (url: string) => {
  return /\.(mp4|webm|ogg)$/.test(url);
};

const getYoutubeVideoId = (url: string) => {
  const match = url.match(
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  );
  return match && match[2].length === 11 ? match[2] : null;
};

const ContentPreview: React.FC<{ url: string }> = ({ url }) => {
  const youtubeId = getYoutubeVideoId(url);

  if (youtubeId) {
    return (
      <Box sx={{ width: "100%", aspectRatio: "16/9", mt: 2 }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title="YouTube video player"
          allowFullScreen
        />
      </Box>
    );
  }

  if (isImageUrl(url)) {
    return (
      <Box
        component="img"
        src={url}
        alt="Content preview"
        sx={{
          mt: 2,
          maxWidth: "100%",
          maxHeight: "400px",
          objectFit: "contain",
          borderRadius: 1
        }}
      />
    );
  }

  if (isVideoUrl(url)) {
    return (
      <Box
        component="video"
        src={url}
        controls
        sx={{
          mt: 2,
          maxWidth: "100%",
          maxHeight: "400px",
          borderRadius: 1
        }}
      />
    );
  }

  return null;
};

interface Item {
  id: number;
  title: string;
  description: string;
  url: string;
}

interface LibraryProps {
  mode: "library" | "recommendation";
  items: Item[] | null;
  title?: string;
  onAddItem?: (newItem: Omit<Item, "id">) => void;
  onEditItem?: (id: number, updatedItem: Omit<Item, "id">) => void;
  onRemoveItem?: (id: number) => void;
  onAddToLibrary?: (item: Item) => void;
}

const Library: React.FC<LibraryProps> = ({
  mode,
  items,
  title = mode === "library" ? "My Library" : "Recommendations",
  onAddItem,
  onEditItem,
  onRemoveItem,
  onAddToLibrary
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [formState, setFormState] = useState<Omit<Item, "id">>({
    title: "",
    description: "",
    url: ""
  });
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    url: ""
  });

  const validateForm = () => {
    const newErrors = {
      title: "",
      description: "",
      url: ""
    };

    // Title validation: at least 3 characters
    if (!formState.title || formState.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters long";
    }

    // Description validation: at least 10 characters
    if (!formState.description || formState.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters long";
    }

    // URL validation with more robust regex
    if (formState.url) {
      const urlRegex = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$", // fragment locator
        "i"
      );

      if (!urlRegex.test(formState.url)) {
        newErrors.url = "Please enter a valid URL (e.g., https://example.com)";
      }
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleOpenAddModal = () => {
    setIsEditMode(false);
    setEditItemId(null);
    setFormState({ title: "", description: "", url: "" });
    setOpen(true);
  };

  const handleOpenEditModal = (item: Item) => {
    setIsEditMode(true);
    setEditItemId(item.id);
    setFormState({
      title: item.title,
      description: item.description,
      url: item.url
    });
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setIsEditMode(false);
    setEditItemId(null);
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    if (mode === "library") {
      if (isEditMode && editItemId !== null && onEditItem) {
        onEditItem(editItemId, formState);
      } else if (!isEditMode && onAddItem) {
        onAddItem(formState);
      }
    }
    handleCloseModal();
  };

  const IconForType =
    mode === "recommendation"
      ? StarIcon
      : title.toLowerCase().includes("media")
        ? MovieIcon
        : BuildIcon;

  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 2,
        bgcolor: "rgba(20,20,20,0.85)",
        backdropFilter: "blur(5px)",
        p: 1,
        boxSizing: "border-box"
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: theme.palette.grey[900],
          color: theme.palette.grey[100]
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
        >
          {title}
        </Typography>
        {mode === "library" && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenAddModal}
            sx={{
              "bgcolor": theme.palette.grey[800],
              "&:hover": { bgcolor: theme.palette.grey[700] }
            }}
          >
            Add New Item
          </Button>
        )}
      </Paper>

      <Box sx={{ flexGrow: 1, overflowY: "auto", pr: 1 }}>
        <Stack spacing={1}>
          {items?.map((item) => (
            <Paper
              key={`${mode}-${item.id}`}
              elevation={3}
              onClick={() => setSelectedItem(item)}
              sx={{
                "p": 2,
                "position": "relative",
                "bgcolor": theme.palette.grey[800],
                "color": theme.palette.grey[100],
                "cursor": "pointer",
                "transition": "transform 0.1s ease-in-out, box-shadow 0.1s",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: `0 4px 12px ${theme.palette.grey[900]}`
                }
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Avatar
                  sx={{
                    bgcolor: theme.palette.grey[700],
                    flexShrink: 0,
                    color: theme.palette.grey[50]
                  }}
                >
                  <IconForType />
                </Avatar>
                <Stack
                  spacing={0.5}
                  sx={{ flex: 1, minWidth: 0 }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    noWrap
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    noWrap
                  >
                    {item.description}
                  </Typography>
                  {item.url && (
                    <Typography
                      variant="caption"
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        "textDecoration": "none",
                        "color": theme.palette.primary.light,
                        "&:hover": { textDecoration: "underline" }
                      }}
                    >
                      Visit
                    </Typography>
                  )}
                </Stack>

                {mode === "library" ? (
                  <Stack
                    direction="row"
                    spacing={1}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconButton
                      size="small"
                      onClick={() => handleOpenEditModal(item)}
                      sx={{
                        "color": theme.palette.grey[200],
                        "&:hover": { color: theme.palette.info.main }
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => onRemoveItem?.(item.id)}
                      sx={{
                        "color": theme.palette.grey[200],
                        "&:hover": { color: theme.palette.error.light }
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                ) : (
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToLibrary?.(item);
                    }}
                    sx={{
                      "color": theme.palette.grey[200],
                      "&:hover": { color: theme.palette.success.light }
                    }}
                  >
                    <AddCircleIcon fontSize="small" />
                  </IconButton>
                )}
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Box>

      <Dialog
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: theme.palette.grey[900],
            color: theme.palette.grey[100]
          }
        }}
      >
        {selectedItem && (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `1px solid ${theme.palette.grey[800]}`
              }}
            >
              <Typography>{selectedItem.title}</Typography>
              <IconButton
                onClick={() => setSelectedItem(null)}
                sx={{ color: theme.palette.grey[300] }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ mt: 2 }}>
              <Stack spacing={3}>
                <Typography variant="body1">
                  {selectedItem.description}
                </Typography>
                {selectedItem.url && (
                  <>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography
                        variant="subtitle2"
                        color={theme.palette.grey[400]}
                      >
                        Source URL:
                      </Typography>
                      <Typography
                        component="a"
                        href={selectedItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          "display": "flex",
                          "alignItems": "center",
                          "gap": 0.5,
                          "color": theme.palette.primary.light,
                          "textDecoration": "none",
                          "&:hover": { textDecoration: "underline" }
                        }}
                      >
                        {selectedItem.url}
                        <OpenInNewIcon sx={{ fontSize: 16 }} />
                      </Typography>
                    </Box>
                    <ContentPreview url={selectedItem.url} />
                  </>
                )}
              </Stack>
            </DialogContent>
          </>
        )}
      </Dialog>

      <Dialog
        open={open}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            bgcolor: theme.palette.grey[900],
            color: theme.palette.grey[100]
          }
        }}
      >
        <DialogTitle>{isEditMode ? "Edit Item" : "Add New Item"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            value={formState.title}
            onChange={(e) =>
              setFormState({ ...formState, title: e.target.value })
            }
            error={!!errors.title}
            helperText={errors.title}
            fullWidth
            margin="normal"
            sx={{
              "& .MuiInputBase-root": { color: theme.palette.grey[100] },
              "& .MuiFormLabel-root": { color: theme.palette.grey[400] }
            }}
          />
          <TextField
            label="Description"
            value={formState.description}
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
            }
            error={!!errors.description}
            helperText={errors.description}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            sx={{
              "& .MuiInputBase-root": { color: theme.palette.grey[100] },
              "& .MuiFormLabel-root": { color: theme.palette.grey[400] }
            }}
          />
          <TextField
            label="URL"
            value={formState.url}
            onChange={(e) =>
              setFormState({ ...formState, url: e.target.value })
            }
            error={!!errors.url}
            helperText={errors.url}
            fullWidth
            margin="normal"
            sx={{
              "& .MuiInputBase-root": { color: theme.palette.grey[100] },
              "& .MuiFormLabel-root": { color: theme.palette.grey[400] }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button
            onClick={handleSave}
            variant="contained"
          >
            {isEditMode ? "Save Changes" : "Add Item"}
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default Library;
