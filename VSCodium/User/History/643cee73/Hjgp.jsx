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
        <p>{isLoggedIn ? 'Hi, ${username}!' : ''}</p>
    </div> 
  )
}

export default App