import { useEffect } from "react";
import Header from "../Components/Header";
import Notes from "../Components/Notes";
import { useState } from "react";
import axios from "axios";

function Home(){


    const [notes,setnotes] = useState([])

    const getallNotes = () => {
        axios.get("http://localhost:5000/notes").then((response) => {
            setnotes(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const DeleteNote = (id) => {
        axios.delete(`http://localhost:5000/note/delete/${id}`).then(() => {
            alert("Note has been deleted successfuly!")
            getallNotes()
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(()=> {
        getallNotes()
        document.body.style.backgroundColor ="FFA447"
    })


    return <div className="bg-orange-500">
        <Header />
        <div className="grid grid-cols-[300px_300px_300px_300px]  gap-3 justify-around mt-10  ">
          {
            notes.map((data) => {
                return <Notes handleDelete={() =>{ DeleteNote(data._id)}} title={data.title} description={data.description} />
            })
          }

        </div>
    </div>
}
export default Home