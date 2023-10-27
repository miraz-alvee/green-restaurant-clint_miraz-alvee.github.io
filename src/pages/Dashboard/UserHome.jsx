import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div className="user-home-container p-4 bg-gray-100">
      <div className="user-profile bg-white p-4 rounded-md shadow-md">
        {/* <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full mx-auto" /> */}
        <h2 className="text-2xl font-bold text-center mt-2">{user.name}</h2>
        <p className="text-gray-500 text-center">{user.email}</p>
      </div>
      <div className="user-activity bg-white p-4 mt-4 rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-2">Your Activity</h3>
        <ul className="list-disc list-inside">
          <li>Posted a review on our latest dish.</li>
          <li>Ordered a salad for lunch.</li>
          {/* Add more activity items here */}
        </ul>
      </div>
    </div>
    );
};

export default UserHome;