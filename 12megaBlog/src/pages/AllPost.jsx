import {useState, useEffect} from "react"
import { Container, PostCard } from "../components"
import appwriteservie from "../appwrite/config"

function AllPost(){
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        //we can Queries in this [] in below line
        appwriteservie.getPosts([]).then((posts)=> {
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                {
                    posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post}></PostCard>
                        </div>
                        
                    ))
                }
                </div>
            </Container>
        </div>
    )
}
export default AllPost