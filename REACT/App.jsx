import React, {useState} from "react"; 

export default function App() {
 const [count, setCount ] = useState(0); 
 
 return (
    <div style = {{padding: "20px"}}>{/*Container com padding inline */}
    <h1>Projeto 1 </h1>
    <p>Você clicou {count} vezes</p>
    <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
 );

}