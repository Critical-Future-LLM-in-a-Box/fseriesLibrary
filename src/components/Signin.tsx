import React, { memo, useState } from "react";
import {
  Box,
  Paper,
  Link,
  IconButton,
  Typography,
  TextField,
  InputAdornment
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import { z } from "zod";
import { useForm } from "@tanstack/react-form";
import { useAuth } from "@/hooks/useAuth";

interface SignInFormProps {
  setIsSignup: (value: boolean) => void;
  setIsLogged: (value: boolean) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({
  setIsSignup,
  setIsLogged
}) => {
  const { signin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must be at most 20 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long")
  });

  const form = useForm({
    defaultValues: { username: "", password: "" },
    onSubmit: async ({ value }) => {
      setIsLoading(true);
      const { accessToken } = await signin(value).catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });

      if (accessToken) {
        setIsLoading(false);
        setIsLogged(true);
        toast.success("Sign in successful");
      }
    },
    validators: {
      onChange: formSchema
    }
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)" }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "rgba(255, 255, 255, 0.8)"
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void form.handleSubmit();
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ mb: 5 }}
          >
            <Typography variant="h5">Sign in</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Don’t have an account?{" "}
              <Link
                variant="subtitle2"
                sx={{ ml: 0.5, cursor: "pointer" }}
                onClick={() => setIsSignup(false)}
              >
                Get started
              </Link>
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
          >
            {/* Updated field name from 'email' to 'username' */}
            <form.Field name="username">
              {(field) => (
                <TextField
                  fullWidth
                  label="Username"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  error={!!field.state.meta.errors.length}
                  helperText={field.state.meta.errors.join(", ")}
                  sx={{ mb: 3 }}
                />
              )}
            </form.Field>

            <form.Field name="password">
              {(field) => (
                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  error={!!field.state.meta.errors.length}
                  helperText={field.state.meta.errors.join(", ")}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                  sx={{ mb: 3 }}
                />
              )}
            </form.Field>

            <LoadingButton
              loading={isLoading}
              fullWidth
              type="submit"
              variant="contained"
            >
              Sign in
            </LoadingButton>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default memo(SignInForm);
