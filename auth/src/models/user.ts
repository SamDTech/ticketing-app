import mongoose from "mongoose";
import { Password } from "../utils/password";

// interface that describes the properties
// that are require to create a new user
interface UserAttrs {
  email: string;
  password: string;
}

// interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attr: UserAttrs): UserDoc;
}

// An interface that describe the properties
// that a singlr user has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return;
  }
  const hashed = await Password.toHash(this.get('password'))

  this.set('password', hashed)

  next()
})

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
