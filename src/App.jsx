import './App.css'
import { Header } from './components/Header'
import { Items } from './components/Items'
import { useCrudItems } from './hooks/useCrudItems'

function App() {
   const { items, deleteAll, deleteItem, addItem } = useCrudItems()

   return (
      <div className='app'>
         <Header addItem={addItem} />
         <Items items={items} deleteItem={deleteItem} deleteAll={deleteAll} />
      </div>
   )
}

export default App
