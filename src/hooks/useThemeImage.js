import { useEffect, useState } from "react"

export const useThemeImage = () => {
   const [theme, setTheme] = useState()
   const [images, setImages] = useState(["icon-moon", "bg-desktop-light"])
   const body = document.querySelector("body")

   const handleImage = () => {
      if (theme === "dark") {
         setImages(["icon-sun", "bg-desktop-dark"])
      } else {
         setImages(["icon-moon", "bg-desktop-light"])
      }
   }

   const handleTheme = () => {
      if (theme === "light") {
         updateTheme("dark")
      } else {
         updateTheme("light")
      }
   }

   const updateTheme = (themeAux) => {
      localStorage.setItem("theme", themeAux)
      body.setAttribute("data-theme", themeAux)
      setTheme(themeAux)
   }

   useEffect(() => {
      handleImage()
   }, [theme])

   useEffect(() => {
      const themeAux = localStorage.getItem("theme")
      if (!themeAux) {
         updateTheme("light")
      } else {
         updateTheme(themeAux)
      }
   }, [])

   return {
      handleTheme,
      images
   }
}