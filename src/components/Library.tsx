import React, { useState, useRef, memo } from "react";
import {
  Stack,
  Box,
  Paper,
  Typography,
  IconButton,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions,
  Grid2 as Grid,
  Tooltip
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { Item } from "@/store";

interface LibraryProps {
  title?: string;
  items: Item[] | null;
  onAddItem?: (itemData: Item) => void;
  onEditItem?: (itemData: Item) => void;
  onRemoveItem?: (id: number) => void;
}

const getYoutubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const Library: React.FC<LibraryProps> = ({
  title = "Library",
  items,
  onAddItem,
  onEditItem,
  onRemoveItem
}) => {
  const theme = useTheme();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState<Partial<Item>>({
    title: "",
    description: "",
    url: "",
    image: ""
  });
  const [detailsItem, setDetailsItem] = useState<Item | null>(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  const dialogContainerRef = useRef<HTMLDivElement>(null);
  const tooltipContainerRef = useRef<HTMLDivElement>(null);

  const handleAddItem = () => {
    if (onAddItem) {
      onAddItem({ ...newItem, id: Date.now() } as Item);
      setIsAddDialogOpen(false);
      setNewItem({ title: "", description: "", url: "", image: "" });
    }
  };

  const handleEditItem = () => {
    if (onEditItem && selectedItem) {
      onEditItem(selectedItem);
      setIsEditDialogOpen(false);
    }
  };

  const handleDeleteItem = (id: number) => {
    if (onRemoveItem) {
      onRemoveItem(id);
    }
  };

  const handleOpenEditDialog = (item: Item) => {
    setSelectedItem(item);
    setIsEditDialogOpen(true);
  };

  const handleOpenDetails = (item: Item) => {
    setDetailsItem(item);
    setIsDetailsDialogOpen(true);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div style={{ height: "100%" }}>
      <div ref={tooltipContainerRef} />
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 3,
          bgcolor: "rgba(15,15,15,0.7)",
          backdropFilter: "blur(10px)",
          p: 2,
          boxSizing: "border-box"
        }}
      >
        {/* Header */}
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            bgcolor: "rgba(30,30,30,0.8)",
            borderRadius: 2
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ ml: 1, color: "#efefef" }}
          >
            {title}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
          >
            {onAddItem && (
              <Tooltip
                title="Add new item"
                slotProps={{
                  popper: {
                    container: tooltipContainerRef.current,
                    disablePortal: true
                  }
                }}
              >
                <IconButton
                  size="small"
                  onClick={() => setIsAddDialogOpen(true)}
                  sx={{
                    "color": theme.palette.grey[300],
                    "&:hover": { color: theme.palette.primary.main }
                  }}
                >
                  <AddCircleIcon />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip
              title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              slotProps={{
                popper: {
                  container: tooltipContainerRef.current,
                  disablePortal: true
                }
              }}
            >
              <IconButton
                size="small"
                onClick={toggleFullscreen}
                sx={{
                  "color": theme.palette.grey[300],
                  "&:hover": { color: theme.palette.primary.main }
                }}
              >
                {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
              </IconButton>
            </Tooltip>
          </Stack>
        </Paper>

        {/* Items List */}
        <Box sx={{ flexGrow: 1, overflowY: "auto", pr: 1 }}>
          <Stack spacing={1.5}>
            {items?.map((item) => (
              <Paper
                key={item.id}
                elevation={3}
                onClick={() => handleOpenDetails(item)}
                sx={{
                  "p": 2,
                  "bgcolor": "rgba(30,30,30,0.8)",
                  "color": theme.palette.grey[100],
                  "display": "flex",
                  "gap": 2,
                  "borderRadius": 2,
                  "transition": "all 0.2s ease-in-out",
                  "cursor": "pointer",
                  "&:hover": {
                    bgcolor: "rgba(40,40,40,0.9)",
                    transform: "translateX(4px)"
                  }
                }}
              >
                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mb: 0.75 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.grey[300],
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Stack
                  direction="row"
                  spacing={1}
                  onClick={handleButtonClick}
                >
                  <Tooltip
                    title="Edit item"
                    slotProps={{
                      popper: {
                        container: tooltipContainerRef.current,
                        disablePortal: true
                      }
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenEditDialog(item);
                      }}
                      sx={{
                        "color": theme.palette.grey[300],
                        "&:hover": { color: theme.palette.primary.main }
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title="Delete item"
                    slotProps={{
                      popper: {
                        container: tooltipContainerRef.current,
                        disablePortal: true
                      }
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteItem(item.id);
                      }}
                      sx={{
                        "color": theme.palette.grey[300],
                        "&:hover": { color: theme.palette.error.main }
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Stack>

      <Box ref={dialogContainerRef} />

      {/* Fullscreen Dialog */}
      <Dialog
        open={isFullscreen}
        onClose={() => setIsFullscreen(false)}
        maxWidth="lg"
        fullWidth
        container={dialogContainerRef.current}
        PaperProps={{
          sx: {
            bgcolor: "rgba(15,15,15,0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            maxHeight: "90vh"
          }
        }}
      >
        <DialogTitle
          sx={{
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            p: 3,
            color: theme.palette.grey[100],
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Typography fontWeight="bold">{title}</Typography>
          <Tooltip
            title="Minimize"
            slotProps={{
              popper: {
                container: tooltipContainerRef.current,
                disablePortal: true
              }
            }}
          >
            <IconButton
              onClick={() => setIsFullscreen(false)}
              sx={{
                "color": theme.palette.grey[300],
                "&:hover": {
                  color: theme.palette.error.main
                }
              }}
            >
              <MinimizeIcon />
            </IconButton>
          </Tooltip>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Stack spacing={3}>
            {items?.map((item) => {
              const youtubeId = item.url ? getYoutubeVideoId(item.url) : null;

              return (
                <Paper
                  key={item.id}
                  elevation={3}
                  sx={{
                    p: 3,
                    bgcolor: "rgba(30,30,30,0.8)",
                    color: theme.palette.grey[100],
                    borderRadius: 2
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                  >
                    {youtubeId && (
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                          sx={{
                            position: "relative",
                            paddingTop: "56.25%",
                            width: "100%",
                            borderRadius: 2,
                            overflow: "hidden"
                          }}
                        >
                          <iframe
                            title={`YouTube video player - ${item.title}`}
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              border: "none"
                            }}
                            src={`https://www.youtube.com/embed/${youtubeId}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </Box>
                      </Grid>
                    )}
                    <Grid size={{ xs: 12, md: youtubeId ? 6 : 12 }}>
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column"
                        }}
                      >
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{ mb: 2 }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: theme.palette.grey[300],
                              lineHeight: 1.6,
                              mb: 2
                            }}
                          >
                            {item.description}
                          </Typography>
                          {item.url && !youtubeId && (
                            <Tooltip
                              title="Open resource in new tab"
                              slotProps={{
                                popper: {
                                  container: tooltipContainerRef.current,
                                  disablePortal: true
                                }
                              }}
                            >
                              <Typography
                                component="a"
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  "color": theme.palette.primary.main,
                                  "textDecoration": "none",
                                  "&:hover": {
                                    textDecoration: "underline"
                                  }
                                }}
                              >
                                Visit Resource
                              </Typography>
                            </Tooltip>
                          )}
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })}
          </Stack>
        </DialogContent>
      </Dialog>

      {/* Add Item Dialog */}
      <Dialog
        open={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        container={dialogContainerRef.current}
        sx={{ zIndex: 9999 }}
        PaperProps={{
          sx: {
            bgcolor: "rgba(15,15,15,0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            zIndex: 9999
          }
        }}
      >
        <DialogTitle sx={{ color: theme.palette.grey[100] }}>
          Add New Item
        </DialogTitle>
        <DialogContent>
          <Stack
            spacing={2}
            sx={{ mt: 2, zIndex: 9999 }}
          >
            <TextField
              label="Title"
              value={newItem.title}
              onChange={(e) =>
                setNewItem({ ...newItem, title: e.target.value })
              }
              fullWidth
              title="Enter the title for your item" // HTML native tooltip
              sx={{
                "input": { color: theme.palette.grey[100] },
                "& .MuiInputLabel-root": { color: theme.palette.grey[100] }
              }}
            />
            <TextField
              label="Description"
              value={newItem.description}
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
              fullWidth
              multiline
              rows={3}
              title="Enter a description for your item" // HTML native tooltip
              sx={{
                "textarea": { color: theme.palette.grey[100] },
                "& .MuiInputLabel-root": { color: theme.palette.grey[100] }
              }}
            />
            <TextField
              label="URL"
              value={newItem.url}
              onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
              fullWidth
              title="Enter a URL (YouTube links will be embedded)" // HTML native tooltip
              sx={{
                "input": { color: theme.palette.grey[100] },
                "& .MuiInputLabel-root": { color: theme.palette.grey[100] }
              }}
            />
            <TextField
              label="Image URL"
              value={newItem.image}
              onChange={(e) =>
                setNewItem({ ...newItem, image: e.target.value })
              }
              fullWidth
              title="Enter an image URL (optional)" // HTML native tooltip
              sx={{
                "input": { color: theme.palette.grey[100] },
                "& .MuiInputLabel-root": { color: theme.palette.grey[100] }
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Tooltip
            title="Discard changes"
            slotProps={{
              popper: {
                container: tooltipContainerRef.current,
                disablePortal: true
              }
            }}
          >
            <Button
              onClick={() => setIsAddDialogOpen(false)}
              sx={{ color: theme.palette.grey[300] }}
            >
              Cancel
            </Button>
          </Tooltip>
          <Tooltip
            title="Save new item"
            slotProps={{
              popper: {
                container: tooltipContainerRef.current,
                disablePortal: true
              }
            }}
          >
            <Button
              onClick={handleAddItem}
              variant="contained"
              sx={{ bgcolor: theme.palette.primary.main, color: "#fff" }}
            >
              Add
            </Button>
          </Tooltip>
        </DialogActions>
      </Dialog>

      {/* Edit Item Dialog */}
      <Dialog
        open={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        container={dialogContainerRef.current}
        sx={{ zIndex: 9999 }}
        PaperProps={{
          sx: {
            bgcolor: "rgba(15,15,15,0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            zIndex: 9999
          }
        }}
      >
        <DialogTitle sx={{ color: theme.palette.grey[100] }}>
          Edit Item
        </DialogTitle>
        <DialogContent>
          <Stack
            spacing={2}
            sx={{ mt: 2, zIndex: 9999 }}
          >
            <TextField
              label="Title"
              value={selectedItem?.title || ""}
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem!,
                  title: e.target.value
                })
              }
              fullWidth
              title="Enter the title for your item" // HTML native tooltip
              sx={{
                "input": { color: theme.palette.grey[100] },
                "& .MuiInputLabel-root": { color: theme.palette.grey[100] }
              }}
            />
            <TextField
              label="Description"
              value={selectedItem?.description || ""}
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem!,
                  description: e.target.value
                })
              }
              fullWidth
              multiline
              rows={3}
              title="Enter a description for your item" // HTML native tooltip
              sx={{
                "textarea": { color: theme.palette.grey[100] },
                "& .MuiInputLabel-root": { color: theme.palette.grey[100] }
              }}
            />
            <TextField
              label="URL"
              value={selectedItem?.url || ""}
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem!,
                  url: e.target.value
                })
              }
              fullWidth
              title="Enter a URL (YouTube links will be embedded)" // HTML native tooltip
              sx={{
                "input": { color: theme.palette.grey[100] },
                "& .MuiInputLabel-root": { color: theme.palette.grey[100] }
              }}
            />
            <TextField
              label="Image URL"
              value={selectedItem?.image || ""}
              onChange={(e) =>
                setSelectedItem({
                  ...selectedItem!,
                  image: e.target.value
                })
              }
              fullWidth
              title="Enter an image URL (optional)" // HTML native tooltip
              sx={{
                "input": { color: theme.palette.grey[100] },
                "& .MuiInputLabel-root": { color: theme.palette.grey[100] }
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Tooltip
            title="Discard changes"
            slotProps={{
              popper: {
                container: tooltipContainerRef.current,
                disablePortal: true
              }
            }}
          >
            <Button
              onClick={() => setIsEditDialogOpen(false)}
              sx={{ color: theme.palette.grey[300] }}
            >
              Cancel
            </Button>
          </Tooltip>
          <Tooltip
            title="Save changes"
            slotProps={{
              popper: {
                container: tooltipContainerRef.current,
                disablePortal: true
              }
            }}
          >
            <Button
              onClick={handleEditItem}
              variant="contained"
              sx={{ bgcolor: theme.palette.primary.main, color: "#fff" }}
            >
              Save
            </Button>
          </Tooltip>
        </DialogActions>
      </Dialog>

      {/* Details Dialog */}
      <Dialog
        open={isDetailsDialogOpen}
        onClose={() => setIsDetailsDialogOpen(false)}
        maxWidth="md"
        fullWidth
        container={dialogContainerRef.current}
        PaperProps={{
          sx: {
            bgcolor: "rgba(15,15,15,0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            maxHeight: "90vh"
          }
        }}
      >
        <DialogTitle
          sx={{
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            p: 3,
            color: theme.palette.grey[100],
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Typography fontWeight="bold">Item Details</Typography>
          <Tooltip
            title="Close details"
            slotProps={{
              popper: {
                container: tooltipContainerRef.current,
                disablePortal: true
              }
            }}
          >
            <IconButton
              onClick={() => setIsDetailsDialogOpen(false)}
              sx={{
                "color": theme.palette.grey[300],
                "&:hover": { color: theme.palette.error.main }
              }}
            >
              <MinimizeIcon />
            </IconButton>
          </Tooltip>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          {detailsItem && (
            <Grid
              container
              spacing={3}
            >
              {detailsItem.url && getYoutubeVideoId(detailsItem.url) && (
                <Grid size={{ xs: 12 }}>
                  <Box
                    sx={{
                      position: "relative",
                      paddingTop: "56.25%",
                      width: "100%",
                      borderRadius: 2,
                      overflow: "hidden",
                      mb: 3
                    }}
                  >
                    <iframe
                      title={`YouTube video player - ${detailsItem.title}`}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none"
                      }}
                      src={`https://www.youtube.com/embed/${getYoutubeVideoId(detailsItem.url)}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </Box>
                </Grid>
              )}
              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ mb: 2, color: theme.palette.grey[100] }}
                >
                  {detailsItem.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: theme.palette.grey[300],
                    whiteSpace: "pre-wrap"
                  }}
                >
                  {detailsItem.description}
                </Typography>
                {detailsItem.url && !getYoutubeVideoId(detailsItem.url) && (
                  <Tooltip
                    title="Open resource in new tab"
                    slotProps={{
                      popper: {
                        container: tooltipContainerRef.current,
                        disablePortal: true
                      }
                    }}
                  >
                    <Button
                      component="a"
                      href={detailsItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      Visit Resource
                    </Button>
                  </Tooltip>
                )}
              </Grid>
            </Grid>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default memo(Library);
