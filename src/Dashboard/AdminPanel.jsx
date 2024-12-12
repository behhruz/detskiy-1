  import React, { useEffect, useState } from 'react';

  const AdminPanel = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      setUsers(storedUsers);
    }, []);

    const handleApprove = (email) => {
      const updatedUsers = users.map((user) =>
        user.email === email ? { ...user, approved: true } : user
      );
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    const handleDeny = (email) => {
      const updatedUsers = users.filter((user) => user.email !== email);
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <div className="flex justify-between items-center w-full max-w-4xl mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
        <table className="bg-white w-full max-w-4xl shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  {user.approved ? (
                    <span className="text-green-500 font-bold">Approved</span>
                  ) : (
                    <span className="text-red-500 font-bold">Not Approved</span>
                  )}
                </td>
                <td className="border px-4 py-2">
                  {user.approved ? (
                    <span>Already Approved</span>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleApprove(user.email)}
                        className="bg-teal-500 text-white px-4 py-2 rounded-lg"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDeny(user.email)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                      >
                        Deny
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default AdminPanel;
