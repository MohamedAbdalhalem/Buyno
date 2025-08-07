import { useEffect, useState } from "react";


export default function useDarkModd() {
    const [isDrak, setIsDark] = useState("Light-mode");
    const handleDarkLightMode = () => {
        if (localStorage.getItem("mode") === "Dark-mode") {
          localStorage.setItem("mode", "Light-mode");
          document.documentElement.classList.remove("dark");
          setIsDark("Light-mode");
        } else {
          localStorage.setItem("mode", "Dark-mode");
          document.documentElement.classList.add("dark");
          setIsDark("Dark-mode");
        }
      };
    
      useEffect(() => {
        if (localStorage.getItem("mode") === "Dark-mode") {
          document.documentElement.classList.add("dark");
          setIsDark("Dark-mode");
        } else {
          document.documentElement.classList.remove("dark");
          setIsDark("Light-mode");
        }
      }, []);
    return {isDrak,handleDarkLightMode}
}
