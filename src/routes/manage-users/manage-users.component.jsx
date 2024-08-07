import UserList from "../../components/Users/users-list/users-list.component";
import UpdateNewUser from "../../components/Users/user-update/update-user.component";
import { Outlet } from "react-router-dom";
const ManageUsers = () => {
    return(
        <>
            <div className="grid grid-cols-2 gap-0 w-full">
                <UpdateNewUser/>
                <div className="w-full"><UserList/></div>
            </div>
                <Outlet/>
        </>
    )
}

export default ManageUsers;