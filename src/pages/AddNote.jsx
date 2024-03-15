import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../Components/Header"
import { useNavigate } from "react-router-dom"
function AddNote(){
    const [title, settitle] = useState("")
    const [description, setdiscription] = useState("")
    const Navigate = useNavigate()
    const handleRegister =(e) =>{
        e.preventDefault()
        axios.post("http://localhost:5000/note/create",{
            "title": title,
            "description": description
        } ).then((response) => {
            alert("Note Has been sacussefully")
            Navigate("/")
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(()=> {
        document.body.style.backgroundColor= "gray"
    },[])
    return <div>
        <Header />
        <h1>this note app</h1>
        <div class="flex justify-center items-center h-screen w-full">
    <div class="w-1/2 bg-blue-500 rounded shadow-2xl p-8 m-4">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Note</h1>
        <form >
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">Title</label>
                <input value={title} onChange={(event) => settitle(event.target.value) } class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" />
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="last_name">Description</label>
                <textarea value={description} onChange={(event) => setdiscription(event.target.value)}  class="border py-2 px-3 text-grey-800" type="text"  id="last_name" > </textarea>
            </div>
          
            
            <button onClick={handleRegister} class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Note</button>
        </form>
    </div>
</div>
    </div>
}
export default AddNote