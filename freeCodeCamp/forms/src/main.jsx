import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


function FormsAppearance(){
  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <input type='text' />
      </form>
    </section>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormsAppearance />
  </StrictMode>,
)
