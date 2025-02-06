
import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    id:{ 
        type: String,
        required: true 
    },
    roleName:{ 
        type: String, 
        required: true 
    },
    status:{ 
      type: String , 
      required: true 
    }
});

const Role = mongoose.model('Role', roleSchema);

export default Role;
