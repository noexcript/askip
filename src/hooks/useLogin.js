import { useState } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useToast } from "./use-toast";


const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signin, isAuthenticated } = useAuth();
  const { toast } = useToast()

  const navigation = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const formData = new FormData(event.currentTarget);
      const username = formData.get("email");
      const password = formData.get("password");

      await new Promise((resolve) => setTimeout(resolve, 1000));
      const ok = signin(username, password);

      if (ok) {
        toast({
            variant: "default",
            // title: "Uh oh! Something went wrong.",
            description: "Sucesso na autenticação.",
          })
        navigation("/");
       
      }else {
        toast({
            variant: "destructive",
            // title: "Uh oh! Something went wrong.",
            description: "Credenciais invalidas.",
          })
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return { onSubmit, isLoading, showPassword, togglePasswordVisibility, error };
};

export { useLogin };
