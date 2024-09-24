
import { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ id: '', name: '', mobile: '', email: '', role: '', status: 'Active' });
  const [editMode, setEditMode] = useState(null);
  const [editUser, setEditUser] = useState({ id: '', name: '', mobile: '', email: '', role: '', status: '' });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  
  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users/getall');
    setUsers(res.data);
  };

  
  useEffect(() => {
    fetchUsers();
  }, []);

  
  const addUser = async () => {
    await axios.post('http://localhost:5000/api/users/create', newUser);
    setNewUser({ id: '', name: '', mobile: '', email: '', role: '', status: 'Active' });
    fetchUsers(); 
  };


  const updateUser = async (id) => {
    await axios.put(`http://localhost:5000/api/users/update/${id}`, editUser);
    setEditMode(null);
    fetchUsers(); 
  };

  // Delete a user and then fetch the updated user list
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/delete/${id}`);
    fetchUsers(); 
    setShowDeleteConfirm(null);
  };

  const enableEdit = (user) => {
    setEditMode(user.id);
    setEditUser(user);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button onClick={addUser} className="bg-purple-600 text-white px-5 py-3 rounded-md">Add New</button>
      </div>

     
      <div className="mb-8 ml-10">
        <input type="text" name="id" placeholder="ID" value={newUser.id} onChange={(e) => setNewUser({ ...newUser, id: e.target.value })} className="border rounded p-2 mr-2" />
        <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} className="border rounded p-2 mr-2" />
        <input type="text" name="mobile" placeholder="Mobile" value={newUser.mobile} onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })} className="border rounded p-2 mr-2" />
        <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} className="border rounded p-2 mr-2" />

       
        <select name="role" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} className="border rounded p-2 mr-2">
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="SuperAdmin">SuperAdmin</option>
          <option value="Caller">Caller</option>
          <option value="Account">Account</option>
        </select>

        <select name="status" value={newUser.status} onChange={(e) => setNewUser({ ...newUser, status: e.target.value })} className="border rounded p-2">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

     
      <table className="min-w-full bg-white  shadow-xl rounded-lg ml-8">
        <thead className=' bg-yellow-200'>
          <tr>
            <th className="py-5 px-20 text-left">ID</th>
            <th className="py-5 px-20 text-left">Name</th>
            <th className="py-5 px-20 text-left">Mobile</th>
            <th className="py-5 px-20 text-left">Email</th>
            <th className="py-5 px-20 text-left">Role</th>
            <th className="py-5 px-20 text-left">Status</th>
            <th className="py-5 px-20 text-left">Action</th>
          </tr>
        </thead>
        <tbody className=' bg-gray-100'>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              {editMode === user.id ? (
               
                <>
                  <td className="py-4 px-2"><input type="text" name="id" value={editUser.id} disabled className="border rounded p-2" /></td>
                  <td className="py-4 px-2"><input type="text" name="name" value={editUser.name} onChange={(e) => setEditUser({ ...editUser, name: e.target.value })} className="border rounded p-2" /></td>
                  <td className="py-4 px-2"><input type="text" name="mobile" value={editUser.mobile} onChange={(e) => setEditUser({ ...editUser, mobile: e.target.value })} className="border rounded p-2" /></td>
                  <td className="py-4 px-2"><input type="email" name="email" value={editUser.email} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} className="border rounded p-2" /></td>

                 
                  <td className="py-3 px-6">
                    <select name="role" value={editUser.role} onChange={(e) => setEditUser({ ...editUser, role: e.target.value })} className="border rounded p-2">
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="SuperAdmin">SuperAdmin</option>
                      <option value="Caller">Caller</option>
                      <option value="Account">Account</option>
                    </select>
                  </td>

                  <td className="py-3 px-6">
                    <select name="status" value={editUser.status} onChange={(e) => setEditUser({ ...editUser, status: e.target.value })} className="border rounded p-2">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>
                  <td className="py-3 px-6">
                    <button onClick={() => updateUser(user.id)} className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">Save</button>
                    <button onClick={() => setEditMode(null)} className="bg-gray-500 text-white px-3 py-1 rounded-md">Cancel</button>
                  </td>
                </>
              ) : (
             
                <>
                  <td className="py-4 px-10">{user.id}</td>
                  <td className="py-4 px-10">{user.name}</td>
                  <td className="py-4 px-10">{user.mobile}</td>
                  <td className="py-4 px-10">{user.email}</td>
                  <td className="py-4 px-10">{user.role}</td>
                  <td className={`py-3 px-10 ${user.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                    {user.status}
                  </td>
               
                 
                  <td className="py-4 px-10">
                    <button onClick={() => enableEdit(user)} className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2">Edit</button>
                    <button onClick={() => setShowDeleteConfirm(user.id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

    
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this user?</h2>
            <button onClick={() => deleteUser(showDeleteConfirm)} className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Delete</button>
            <button onClick={() => setShowDeleteConfirm(null)} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
