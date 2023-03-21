import { useState } from "react"

export function Item({ item, deleteItem }) {

   const [classCheck, setClassCheck] = useState(["", ""])

   const handleClassCheck = () => {
      if (classCheck[0] === "") {
         setClassCheck(["border-circle-check", "text-check"])
      } else {
         setClassCheck(["", ""])
      }
   }

   return (
      <article className="item">
         <div className={`cursor-pointer border-circle ${classCheck[0]}`} onClick={handleClassCheck}>
            <img src="./assets/icon-check.svg" alt="Icon check" />
         </div>
         <p className={`${classCheck[1]}`}>
            {item.content}
         </p>
         <img src="./assets/icon-cross.svg" alt="Icon cross" className="cursor-pointer" onClick={() => deleteItem(item.id)} />

      </article>
   )
}