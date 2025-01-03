import React, { memo, useState } from "react";
import {
  Box,
  Link,
  IconButton,
  Typography,
  InputAdornment,
  Paper,
  TextField
} from "@mui/material";
import { toast } from "react-toastify";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { z } from "zod";
import { useForm } from "@tanstack/react-form";
import { useAuth } from "@/hooks/useAuth";

import LoadingButton from "@mui/lab/LoadingButton";

interface SignUpFormProps {
  setIsSignup: (value: boolean) => void;
  setIsLogged: (value: boolean) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  setIsSignup,
  setIsLogged
}) => {
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z
    .object({
      email: z.string().email("Invalid email address"),
      username: z
        .string()
        .min(3, "Username must be at least 3 characters long"),
      password: z
        .string()
        .min(6, "Password must be at least 6 characters long"),
      confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords do not match"
    });

  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: async ({ value }) => {
      setIsLoading(true);
      const response = await signup(value).catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });

      toast.success("Sign up successful");
      toast.success(response.success.message);

      setIsLoading(false);
      setIsLogged(false);
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
            <Typography variant="h5">Sign up</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Already have an account?{" "}
              <Link
                variant="subtitle2"
                sx={{ ml: 0.5, cursor: "pointer" }}
                onClick={() => setIsSignup(true)}
              >
                Sign in
              </Link>
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
          >
            <form.Field name="email">
              {(field) => (
                <TextField
                  fullWidth
                  label="Email Address"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  error={!!field.state.meta.errors.length}
                  helperText={field.state.meta.errors.join(", ")}
                  sx={{ mb: 3 }}
                />
              )}
            </form.Field>

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
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{ mb: 3 }}
                />
              )}
            </form.Field>

            <form.Field name="confirmPassword">
              {(field) => (
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  error={!!field.state.meta.errors.length}
                  helperText={field.state.meta.errors.join(", ")}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
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
              Sign up
            </LoadingButton>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default memo(SignUpForm);
