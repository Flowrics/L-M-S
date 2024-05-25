import { useContext } from "react";
import {UsersContext} from "../../context/users.context";
const User = ({user_item}) => {
    const {getThisUser} = useContext(UsersContext);
    const { name, roll_no, course, year} = user_item;
    const handleClick = () => {
        getThisUser(user_item);
    }

    return(
        <>
            <div className="mt-14 flex-1">
                <div className="w-full" >
                    <img className="cursor-pointer w-72" onClick={handleClick} src="https://cdn.wallpapersafari.com/25/98/ZdwuVI.jpg" alt={name}></img>
                </div>
                <div className="my-4">
                    <div>
                        <h3>{name}</h3>
                    </div>
                    <div>
                        <h3>{roll_no}</h3>
                    </div> 
                    <div>
                        <h3>{course}</h3>
                    </div>
                    <div>
                        <h3>{year}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;