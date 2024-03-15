import { Link } from "react-router-dom"

function Header(){
    return <div className="bg-blue-500 px-10 py-4 p-3 flex justify-between text-white ">
    <Link to="/"><h1 className="text-5xl font-bold">Note App</h1></Link>
    <Link to="/addnote" className="bg-white px-7 p-2 rounded text-black">Add Note</Link>
    </div>
    
}
export default  Header