import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
function Github() {

/* This is one method of calling api and getting github profile data
    const [data, setData] = useState([])
    const user = "prasad0275"
    useEffect(()=>{
        fetch(`https://api.github.com/users/${user}`)
        .then(response => response.json())
        .then(data => {
            console.table(data)
            setData(data)
        })
    },[])
*/

// This is another method 
    const data = useLoaderData()
    return (
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl "> 
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="Git profile picture" width={300}/>
      </div>


    )
}

export default Github

export const githubIntoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/prasad0275')
    return response.json()
}