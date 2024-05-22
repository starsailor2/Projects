import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const StudentPortal = () => {
    const { auth, fetchProfile, loading } = useContext(AuthContext);

    useEffect(() => {
        if (auth) {
            fetchProfile();
        }
    }, [auth]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Student Portal</h2>
            {auth ? (
                <div>
                    <h3>Welcome, {auth.profile?.username}</h3>
                    {/* Display other student-specific information */}
                </div>
            ) : (
                <p>Please log in to access the student portal.</p>
            )}
        </div>
    );
};

export default StudentPortal;
