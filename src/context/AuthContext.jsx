import { createContext, useState, useEffect, useContext } from "react";
import { api as axios } from "../axios/axios.js";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/user/me");
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);
  const registration = async (name, email, password) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/user/registration", {
        name,
        email,
        password,
      });
      if (response.status === 201) {
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    error,
    isLoading,
    isAuthenticated,
    registration,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
