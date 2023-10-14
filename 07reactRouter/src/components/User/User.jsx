import { useParams } from "react-router-dom"
function User(){
    const {id} = useParams()
    return (
        <>
        <div className="bg-gray-600 text-3xl text-white my-2 py-2">User : {id}</div>
        </>
    )
}
export default User