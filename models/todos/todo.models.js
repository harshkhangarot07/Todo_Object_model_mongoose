import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    context: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      defualt: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],//array of subtodos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);