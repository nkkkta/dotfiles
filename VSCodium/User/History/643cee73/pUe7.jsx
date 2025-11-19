const PI = 3.1415

const App = ()=>{
  return(
    <div>
        {/*КОММЕНТАРИЙ */}
      <p className="greeting">Hi, {PI}</p>
      <label htmlFor="email">Email: </label>
      <input id="email" type="email" required />
    </div> 
  )
}

export default App