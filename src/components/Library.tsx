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
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StarIcon from "@mui/icons-material/Star";

interface Item {
  id: number;
  title: string;
  description: string;
  url: string;
}

interface LibraryProps {
  mode: "library" | "recommendation";
  items: Item[];
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
  const [formState, setFormState] = useState<Omit<Item, "id">>({
    title: "",
    description: "",
    url: ""
  });

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
    if (mode === "library") {
      if (isEditMode && editItemId !== null && onEditItem) {
        onEditItem(editItemId, formState);
      } else if (!isEditMode && onAddItem) {
        onAddItem(formState);
      }
    }
    handleCloseModal();
  };

  const IconForType = mode === "recommendation" ? StarIcon : LibraryBooksIcon;

  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 2,
        // Darker background with slight transparency
        bgcolor: "rgba(20,20,20,0.85)",
        backdropFilter: "blur(5px)",
        p: 1,
        boxSizing: "border-box"
      }}
    >
      {/* Header */}
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

      {/* Items List - Vertical scroll */}
      <Box sx={{ flexGrow: 1, overflowY: "auto", pr: 1 }}>
        <Stack spacing={1}>
          {items.map((item) => (
            <Paper
              key={item.id}
              elevation={3}
              sx={{
                "p": 2,
                "position": "relative",
                "bgcolor": theme.palette.grey[800],
                "color": theme.palette.grey[100],
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
                    sx={{ color: theme.palette.grey[50] }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    noWrap
                    sx={{ color: theme.palette.grey[300] }}
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
                  // Edit & Delete Buttons for Library Mode
                  <Stack
                    direction="row"
                    spacing={1}
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
                      onClick={() => onRemoveItem && onRemoveItem(item.id)}
                      sx={{
                        "color": theme.palette.grey[200],
                        "&:hover": { color: theme.palette.error.light }
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                ) : (
                  // Add to Library Button for Recommendation Mode
                  <IconButton
                    size="small"
                    onClick={() => onAddToLibrary && onAddToLibrary(item)}
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

      {/* Modal for Add/Edit (Library Mode Only) */}
      {mode === "library" && (
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
          <DialogTitle sx={{ bgcolor: theme.palette.grey[900] }}>
            {isEditMode ? "Edit Item" : "Add New Item"}
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Title"
              value={formState.title}
              onChange={(e) =>
                setFormState({ ...formState, title: e.target.value })
              }
              fullWidth
              margin="normal"
              sx={{
                "& .MuiInputBase-root": {
                  color: theme.palette.grey[100]
                },
                "& .MuiFormLabel-root": {
                  color: theme.palette.grey[400]
                }
              }}
            />
            <TextField
              label="Description"
              value={formState.description}
              onChange={(e) =>
                setFormState({ ...formState, description: e.target.value })
              }
              fullWidth
              margin="normal"
              sx={{
                "& .MuiInputBase-root": {
                  color: theme.palette.grey[100]
                },
                "& .MuiFormLabel-root": {
                  color: theme.palette.grey[400]
                }
              }}
            />
            <TextField
              label="URL"
              value={formState.url}
              onChange={(e) =>
                setFormState({ ...formState, url: e.target.value })
              }
              fullWidth
              margin="normal"
              sx={{
                "& .MuiInputBase-root": {
                  color: theme.palette.grey[100]
                },
                "& .MuiFormLabel-root": {
                  color: theme.palette.grey[400]
                }
              }}
            />
          </DialogContent>
          <DialogActions sx={{ bgcolor: theme.palette.grey[900] }}>
            <Button
              onClick={handleCloseModal}
              sx={{
                "color": theme.palette.grey[300],
                "&:hover": { color: theme.palette.grey[100] }
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              variant="contained"
              sx={{
                "bgcolor": theme.palette.primary.dark,
                "&:hover": { bgcolor: theme.palette.primary.main }
              }}
            >
              {isEditMode ? "Save Changes" : "Add Item"}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Stack>
  );
};

export default Library;
