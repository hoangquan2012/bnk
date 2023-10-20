import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSkills } from "../services/apis/skill";
import { message } from "antd";

const initialState = {
  skill: [],
};

const skillSlice = createSlice({
  name: "skill",
  initialState,
  extraReducers: (builder) => {
    builder
      //fetchOverView
      .addCase(fetchSkills.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.isLoading = false;
        state.skill = action.payload;
        message.success("Cập nhật thẻ thành công!");
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        message.error("Cập nhật thẻ thất bại!");
      });
  },
});
export const fetchSkills = createAsyncThunk(
  "skill/fetchSkills",
  async ({ rejectWithValue }) => {
    try {
      const response = await getSkills();
      return response;
    } catch (error) {
      // debugger;
      return rejectWithValue(error);
    }
  }
);

export default skillSlice.reducer;
