import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h1 className="text-3xl">Profile(Hidden Route)</h1>
            <p>{user.email}</p>
        </div>
    );
};

export default Profile;