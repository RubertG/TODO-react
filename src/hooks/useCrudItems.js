import { useEffect, useReducer } from "react"
import { ItemsReducer } from "../reducer/ItemsReducer"

function init() {
   return JSON.parse(localStorage.getItem("items")) || []
}

export function useCrudItems() {
   const [items, dispatch] = useReducer(ItemsReducer, [], init)

   useEffect(() => {
      localStorage.setItem("items", JSON.stringify(items))
   }, [items])

   const addItem = (e) => {
      e.preventDefault()
      const item = {
         id: new Date().getTime(),
         content: e.target.contenido.value
      }
      e.target.contenido.value = ""
      const action = {
         type: "add",
         payload: item
      }
      dispatch(action)
   }

   const deleteItem = (id) => {
      const action = {
         type: "delete",
         payload: id
      }
      dispatch(action)
   }

   const deleteAll = () => {
      const action = {
         type: "deleteAll",
      }
      dispatch(action)
   }


   return {
      items,
      addItem,
      deleteAll,
      deleteItem
   }
}