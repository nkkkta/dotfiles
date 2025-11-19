const PI = 3.1415

const App = ()=>{
  return(
    <div>
        {/*КОММЕНТАРИЙ */}
      <p className="greeting" 
        style={{
            color: '#fff', 
            fontWeight: 700,
            background: 'blue',
            width: '200px',
            padding: '20px',
            borderRadius: '16px'}}>
        Hi, {PI}
      </p>
      <label htmlFor="email">Email: </label>
      <input id="email" type="email" required />
    </div> 
  )
}

export default App