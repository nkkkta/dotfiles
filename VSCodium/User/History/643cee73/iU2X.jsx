const PI = 3.1415;
const isLoggedIn = false;
const userName = 'Nikita';

const App = ()=>{
  return(
    <div>
        {/*КОММЕНТАРИЙ */}
        <h1 className="title">
            TODO LIST
        </h1>
        {/*JS inside tag */}
        <p>{isLoggedIn ? `Hi, ${userName}!` : 'Please log in'}</p>
        {isLoggedIn ? <p>Hi, {userName}</p> :<button>Log In</button>}
    </div> 
  )
}

export default App