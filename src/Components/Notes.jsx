function Notes(props){
    return <div className="w-[250px] h-[200px]  bg-white p-2 rounded  ">
         <h1>{props.title}</h1>
         <p>{props.description}</p>
         <i onClick={props.handleDelete} class="fa-solid fa-trash mt-20 ml-[200px] cursor-pointer"></i>
    </div>
}
export default Notes