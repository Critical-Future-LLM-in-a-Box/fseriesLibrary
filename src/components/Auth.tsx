import React from "react";
import { useStore } from "@/store";
import SigninForm from "@/components/Signin";
import SignupForm from "@/components/Signup";
import Background from "@/components/Background";

interface AuthWrapperProps {
  children: React.ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { user } = useStore();
  const [isSignup, setIsSignup] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);

  React.useEffect(() => {
    if (user) setIsLogged(true);
    if (!user) setIsLogged(false);
  }, [user]);

  const renderAuthContent = () => {
    if (isLogged || user) return children;

    return !isSignup ? (
      <SignupForm
        setIsLogged={setIsLogged}
        setIsSignup={setIsSignup}
      />
    ) : (
      <SigninForm
        setIsLogged={setIsLogged}
        setIsSignup={setIsSignup}
      />
    );
  };

  return <Background>{renderAuthContent()}</Background>;
};

export default React.memo(AuthWrapper);
