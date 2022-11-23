import "./App.css";

let name = "<b>Kumar Gaurav</b>";
function App() {
    return (
        <>
            <nav>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </nav>
            <div className="container">
                <h2>{name}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Labore, praesentium temporibus fugit iste incidunt quasi.
                    Officia, consectetur fugiat! Quibusdam optio, harum et
                    accusantium eius, libero eaque earum placeat voluptatem
                    doloribus modi quia.
                </p>
            </div>
        </>
    );
}

export default App;
