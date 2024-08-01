import React, { useContext } from 'react';
import UserInfoContext from '../contexts/UserInfoContext';

const UserInfoDisplay = () => {
    const userInfo = useContext(UserInfoContext);

    return (
        <div>
            <h2>User Info</h2>
            <p>Username: {userInfo.username}</p>
            <p>Is Admin: {userInfo.isAdmin ? "Yes" : "No"}</p>
        </div>
    );
};

export default UserInfoDisplay;
