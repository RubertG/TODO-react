import { Item } from "./Item";


export function Items({ items, deleteAll, deleteItem }) {

   return (
      <main>
         <div className="container-items">
            {
               items.map((i) => {
                  return (
                     <Item
                        item={i}
                        deleteItem={deleteItem}
                        key={i.id} />
                  )
               })
            }
            <div className="constainer-items__footer">
               <p>{items.length} tareas</p>
               <p
                  className="cursor-pointer color-hover"
                  onClick={deleteAll}>
                  Limpiar completamente
               </p>
            </div>
         </div>
      </main>
   )
}