const PI = 3.1415;
const isLoggedIn = true;
const userName = 'Nikita';

const App = ()=>{
  return(
    <div>
        {/*КОММЕНТАРИЙ */}
        <h1 className="title">
            TODO LIST
            {isLoggedIn && <p></p>}
        </h1>
    </div> 
  )
}

export default App