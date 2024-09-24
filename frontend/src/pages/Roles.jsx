
import { useState, useEffect } from 'react';
import axios from 'axios';

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ id: '', roleName: '', status: 'Active' });
  const [editMode, setEditMode] = useState(null); // Track which role is in edit mode
  const [editRole, setEditRole] = useState({ id: '', roleName: '', status: '' }); // Store edit form values
  const predefinedRoles = ['Admin', 'SuperAdmin', 'Caller', 'Account']; // Define predefined roles

  useEffect(() => {
    const fetchRoles = async () => {
      const res = await axios.get('http://localhost:5000/api/roles');
      setRoles(res.data);
    };
    fetchRoles();
  }, []);

  // Add a new role
  const addRole = async () => {
    const res = await axios.post('http://localhost:5000/api/roles/addRole', newRole);
    setRoles([...roles, res.data]);
    setNewRole({ id: '', roleName: '', status: 'Active' });
  };

  // Update an existing role
  const updateRole = async (id) => {
    const res = await axios.put(`http://localhost:5000/api/roles/edit/${id}`, editRole);
    setRoles(roles.map((role) => (role.id === id ? res.data : role)));
    setEditMode(null); // Exit edit mode
  };

  // Delete a role
  const deleteRole = async (id) => {
    await axios.delete(`http://localhost:5000/api/roles/delete/${id}`);
    setRoles(roles.filter((role) => role.id !== id));
  };

  // Handle input changes for new role
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRole({ ...newRole, [name]: value });
  };

  // Handle input changes for editing role
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditRole({ ...editRole, [name]: value });
  };

  // Set role for editing
  const enableEdit = (role) => {
    setEditMode(role.id);
    setEditRole(role);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Roles</h1>
        <button onClick={addRole} className="bg-purple-600 text-white px-4 py-2 rounded-md">Add New</button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={newRole.id}
          onChange={handleChange}
          className="border rounded p-2 mr-2"
        />
     
        <select
          name="roleName"
          value={newRole.roleName}
          onChange={handleChange}
          className="border rounded p-2 mr-2"
        >
          <option value="">Select Role</option>
          {predefinedRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <select name="status" value={newRole.status} onChange={handleChange} className="border rounded p-2">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead className=' bg-yellow-200'>
          <tr>
            <th className="py-5 px-40 text-left">ID</th>
            <th className="py-5 px-40 text-left">Role Name</th>
            <th className="py-5 px-40 text-left">Status</th>
            <th className="py-5 px-40 text-left">Action</th>
          </tr>
        </thead>
        <tbody className=' bg-gray-100'>
          {roles.map((role) => (
            <tr key={role.id} className="border-b">
              {editMode === role.id ? (
             
                <>
                  <td className="py-3 px-6">
                    <input
                      type="text"
                      name="id"
                      value={editRole.id}
                      disabled
                      className="border rounded p-2"
                    />
                  </td>
                  <td className="py-3 px-6">
                 
                    <select
                      name="roleName"
                      value={editRole.roleName}
                      onChange={handleEditChange}
                      className="border rounded p-2"
                    >
                      {predefinedRoles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-3 px-6">
                    <select
                      name="status"
                      value={editRole.status}
                      onChange={handleEditChange}
                      className="border rounded p-2"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => updateRole(role.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditMode(null)}
                      className="bg-gray-500 text-white px-3 py-1 rounded-md"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
           
                <>
                  <td className="py-3 px-40">{role.id}</td>
                  <td className="py-3 px-40">{role.roleName}</td>
                  <td className={`py-3 px-40 ${role.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                    {role.status}
                  </td>
                  <td className="py-3 px-40">
                    <button
                      onClick={() => enableEdit(role)}
                      className="text-blue-500 mr-2"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => deleteRole(role.id)}
                      className="text-red-500"
                    >
                      🗑️
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roles;
