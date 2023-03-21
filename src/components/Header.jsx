import { useThemeImage } from "../hooks/useThemeImage"

export function Header({ addItem }) {
   const { handleTheme, images } = useThemeImage()

   return (
      <header className='header'>
         <img
            className='header__bg'
            src={`./assets/${images[1]}.jpg`}
            alt='Header background image' />
         <div className='title-flex'>
            <h1>TODO</h1>
            <img
               src={`./assets/${images[0]}.svg`}
               alt='Icon moon'
               onClick={handleTheme}
               className='cursor-pointer' />
         </div>
         <form onSubmit={e => addItem(e)} className='item'>
            <button
               type="submit"
               className='cursor-pointer'>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" /></svg>
            </button>
            <input
               type='text'
               placeholder='Crea tu nueva tarea...'
               name="contenido"
               required
               autoComplete="off" />
         </form>
      </header>
   )
}