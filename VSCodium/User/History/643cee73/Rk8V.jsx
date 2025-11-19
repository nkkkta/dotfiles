const PI = 3.1415;
const isLoggedIn = false;
const userName = 'Nikita';

const App = ()=>{

    const tasks = [
        'Java',
        'JSX',
        'JS',
    ]

    return(
        <>
            <h1 className="title">To Do List</h1>
            <ul>
                {tasks.map(()=><li>tasks.</li>)}
            </ul>
        </> 
    )
}

export default App