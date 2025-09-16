import { use } from "react"

export default function Users({usersPromise}){
    const users = use(usersPromise);
    console.log(users);
    
    return(
        <div className="users">
            <h3>User: {users.length}</h3>
        </div>
    )
}