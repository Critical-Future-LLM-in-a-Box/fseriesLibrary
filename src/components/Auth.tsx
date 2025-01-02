import React, { ReactNode, memo } from "react";
import { useStore } from "@/store";
import SigninForm from "@/components/Signin";
import SignupForm from "@/components/Signup";
// @ts-expect-error: TypeScript cannot find the module for the gif file
import overlayGif from "@/assets/fseriesh.gif";

interface AuthWrapperProps {
  children: ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { user } = useStore();

  const [isSignup, setIsSignup] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);
  const [showOverlay, setShowOverlay] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (user) setIsLogged(true);
    if (!user) setIsLogged(false);
  }, [user]);

  if (showOverlay) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          overflow: "hidden"
        }}
      >
        <img
          src={overlayGif}
          alt="Loading Ford Trucks"
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        />
      </div>
    );
  }

  if (isLogged) return children;

  if (isSignup)
    return (
      <SigninForm
        setIsSignup={setIsSignup}
        setIsLogged={setIsLogged}
      />
    );

  return (
    <SignupForm
      setIsSignup={setIsSignup}
      setIsLogged={setIsLogged}
    />
  );
};

export default memo(AuthWrapper);
