import mongoose from "mongoose";

const connectDataBase = async (mongoUrl) => {
  mongoose.set("strictQuery", false);
  mongoose.set("toJSON", {
    virtuals: true,
    transform(doc, ret) {
      delete ret._id;
      delete ret.__v;
    },
  });

  try {
    await mongoose.connect(mongoUrl);
    debug("Connected to database");
  } catch (error) {
    debug("Impossible to connect to database", error.message);
  }
};

export default connectDataBase;
