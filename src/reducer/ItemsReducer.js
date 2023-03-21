export function ItemsReducer(state = [], action) {
   switch (action.type) {
      case "add":
         return [...state, action.payload]
      case "delete":
         return state.filter(item => item.id !== action.payload)
      case "deleteAll":
         return []
      default:
         return false
   }
}