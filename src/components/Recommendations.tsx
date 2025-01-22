import React, { memo, useRef } from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  IconButton,
  useTheme,
  DialogContent,
  Grid2 as Grid
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import { Item } from "@/store";

interface RecommendationsProps {
  items: Item[] | null;
  title: string;
  onAddToLibrary: (item: Item) => void;
}

const getYoutubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const Recommendations: React.FC<RecommendationsProps> = ({
  items,
  title,
  onAddToLibrary
}) => {
  const theme = useTheme();
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const toggleFullscreen = () => setIsFullscreen((prev) => !prev);

  const dialogContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ height: "100%" }}>
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 3,
          bgcolor: "rgba(15,15,15,0.6)",
          backdropFilter: "blur(8px)",
          p: 2,
          boxSizing: "border-box"
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "rgba(30,30,30,0.6)",
            borderRadius: 2,
            color: theme.palette.grey[100]
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ ml: 1 }}
          >
            {title}
          </Typography>
          <Box>
            {/* Fullscreen Toggle Button */}
            <IconButton
              size="small"
              onClick={toggleFullscreen}
              sx={{
                "color": theme.palette.grey[300],
                "&:hover": {
                  color: theme.palette.primary.main,
                  transform: "scale(1.1)",
                  transition: "all 0.2s ease-in-out"
                }
              }}
            >
              {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Box>
        </Paper>

        <Box
          sx={{
            "flexGrow": 1,
            "overflowY": "auto",
            "pr": 1,
            "position": "relative",
            "&::-webkit-scrollbar": {
              width: "8px"
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(0,0,0,0.1)",
              borderRadius: "4px"
            },
            "&::-webkit-scrollbar-thumb": {
              "background": "rgba(255,255,255,0.1)",
              "borderRadius": "4px",
              "&:hover": {
                background: "rgba(255,255,255,0.2)"
              }
            }
          }}
        >
          {
            <Stack spacing={1.5}>
              {items?.slice(0, 5).map((item) => (
                <Paper
                  key={item.id}
                  elevation={3}
                  sx={{
                    "p": 2,
                    "bgcolor": "rgba(30,30,30,0.8)",
                    "color": theme.palette.grey[100],
                    "display": "flex",
                    "gap": 2,
                    "cursor": "pointer",
                    "borderRadius": 2,
                    "transition": "all 0.2s ease-in-out",
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
                  <IconButton
                    size="small"
                    onClick={() => onAddToLibrary(item)}
                    sx={{
                      "alignSelf": "center",
                      "color": theme.palette.grey[300],
                      "transition": "all 0.2s ease-in-out",
                      "&:hover": {
                        color: theme.palette.success.main,
                        transform: "scale(1.1)"
                      }
                    }}
                  >
                    <AddCircleIcon />
                  </IconButton>
                </Paper>
              ))}
            </Stack>
          }
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
            bgcolor: "rgba(15,15,15)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            maxHeight: "75vh",
            zIndex: 9999
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
          <IconButton
            onClick={() => setIsFullscreen(false)}
            sx={{
              "color": theme.palette.grey[300],
              "&:hover": {
                color: theme.palette.error.main
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Stack
            spacing={3}
            sx={{ mt: 2 }}
          >
            {items?.map((item) => {
              const youtubeId = item.url ? getYoutubeVideoId(item.url) : null;

              return (
                <Paper
                  key={item.id}
                  elevation={3}
                  sx={{
                    "p": 3,
                    "bgcolor": "rgba(30,30,30,0.8)",
                    "color": theme.palette.grey[100],
                    "borderRadius": 2,
                    "transition": "all 0.2s ease-in-out",
                    "&:hover": {
                      bgcolor: "rgba(40,40,40,0.9)"
                    }
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
                          )}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mt: 2
                          }}
                        >
                          <IconButton
                            onClick={() => onAddToLibrary(item)}
                            sx={{
                              "color": theme.palette.grey[300],
                              "transition": "all 0.2s ease-in-out",
                              "&:hover": {
                                color: theme.palette.success.main,
                                transform: "scale(1.1)"
                              }
                            }}
                          >
                            <AddCircleIcon sx={{ fontSize: 28 }} />
                          </IconButton>
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
    </div>
  );
};

export default memo(Recommendations);
