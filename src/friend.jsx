export default function Friend({friend}){

    const {name, address, company, email, phone, username,website} = friend;
    
    return (
        <div className="users">
            {/* <h2>Name:{address} </h2> */}
            {/* address r company agulir alada object set kora ase tai ase na */}
            {/* <h2>Name:{company} </h2> */}
            <h2>Email:{email} </h2>
            <h2>Name:{name} </h2>
            <h4>phone:{phone} </h4>
            <h4>Username:{username} </h4>
            <h4>website:{website} </h4>
        </div>
    )
}