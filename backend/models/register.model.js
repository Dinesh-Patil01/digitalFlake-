import mongoose from "mongoose";

const registeredUserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		}
	}
);

export const RegisteredUser = mongoose.model("RegisteredUser", registeredUserSchema);
