import { Schema, model } from 'mongoose';

interface IUser {
  userName: string;
  password: string;
}

//Model設定
const userSchema = new Schema<IUser>({
  userName: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = model<IUser>('User', userSchema);
