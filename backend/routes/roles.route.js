import express from 'express';
import Role from '../models/role.model.js';
 
const router = express.Router();

// POST route to add a new role
router.post('/addRole', async (req, res) => {
  try {
    const { id, roleName, status } = req.body;
    const newRole = new Role({ id, roleName, status });
    await newRole.save();
    res.json(newRole);
  } catch (error) {
    res.status(500).json({ message: 'Error adding role', error });
  }
});

// GET route to fetch all roles
router.get('/', async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching roles', error });
  }
});

// PUT route to edit an existing role by ID
router.put('/edit/:id', async (req, res) =>
  {const { id } = req.params;
  const { roleName, status } = req.body;

  try {
    
    const updatedRole = await Role.findOneAndUpdate(
      { id: id },  
      { $set: { roleName, status } },  
      { new: true } 
    );
      res.json(updatedRole); 
  } catch (error) {
    res.status(500).json({ message: 'Error updating role', error });
  }
});

// DELETE route to delete a role by ID
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRole = await Role.findOneAndDelete({ id });
   
    res.json({ message: 'Role deleted', deletedRole });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting role', error });
  }
});

export default router;
