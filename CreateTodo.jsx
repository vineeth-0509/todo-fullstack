//Genreal Thumbrule of the react is minimize the amount of rerenders

export function CreateTodo(){
    //react-query
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    return <div>
        <input id="title" style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(e.target.value);
        }}></input><br></br>
        <input id="desc" style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description" onChange={function(e){
            const value=e.target.value;
            setDescription(e.target.value);
        }}></input><br></br>
        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            //axios
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers:{
                    "content-type":"application/json"
                }
            })
            .then( async function (res){
                const json=await res.json();
                alert("To added");
            })
        }}>Add a Todo</button>
    </div>
}
