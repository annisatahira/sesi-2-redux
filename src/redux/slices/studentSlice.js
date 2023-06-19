import { createSlice } from "@reduxjs/toolkit";

const studentInitialState = {
  currentId: 2,
  students: [
    {
      id: 1,
      nama: "Budi",
      jurusan: "IT",
    },
    {
      id: 2,
      nama: "Lala",
      jurusan: "Manajemen",
    },
  ],
};

const studentSlice = createSlice({
  name: "students",
  initialState: studentInitialState,
  reducers: {
    addStudent: (state, action) => {},
    deleteStudent: () => {},
    updateStudent: () => {},
  },
});

export const { addStudent } = studentSlice.actions;

export default studentSlice.reducer;
