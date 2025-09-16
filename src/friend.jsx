import Addres from "./addres";

export default function Friend({friend}){

    const {name: parentName, address: {street, suite, city, zipcode}, company: {name: childName, catchphrase, bs}, email, phone, username,website} = friend;
    
    return (
        <div className="users">
            {/* address r company agulir alada object set kora ase tai ase na normally..tai oder vitor alada kore nam set korte hoise . jehetu name 2 ta hoye jay tai 2 ta name k alada kore nam diye oi nam ta k calln korte hoise */}
            <h2>Company:{childName}, {catchphrase}, {bs}  </h2> 
            <h2>Email:{email} </h2>
            <h2>Name:{parentName} </h2>
            <h4>phone:{phone} </h4>
            <h4>Username:{username} </h4>
            <h4>website:{website} </h4>
                <p>Address:{street}, {suite}, {city}, {zipcode} </p>
        </div>
    )
}