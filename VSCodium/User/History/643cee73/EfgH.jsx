const PI = 3.1415;
const isLoggedIn = true;
const userName = 'Nikita';

const App = ()=>{
  return(
    <div>
        {/*КОММЕНТАРИЙ */}
        <h1 className="title">
            TODO LIST
        </h1>
        <p>{isLoggedIn ? `Hi, ${userName}!` : 'Please log in'}</p>
        isLoggedIn
    </div> 
  )
}

export default App