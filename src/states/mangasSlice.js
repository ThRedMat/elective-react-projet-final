import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchMangas = createAsyncThunk(
  'mangas/fetchMangas',
  async (test, { rejectWithValue }) => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/manga");

      if (!response.ok) {
        throw new Error('An error occurred while fetching mangas.');
      }

      const res = await response.json()

      return res.data;
    } catch (e) {
      return rejectWithValue(`Une erreur est survenue : ${e.message}`)
    }
  }
)


export const mangasSlice = createSlice({
  name: 'mangasSlices',
  initialState: {
    search: '',
    mangas: [],
    status: [],
    order: [],
    loading: true,
    error: null,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMangas.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMangas.fulfilled, (state, action) => {
        state.mangas = action.payload;
        state.loading = false;
      })
      .addCase(fetchMangas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export const { setSearch, setStatus, setOrder } = mangasSlice.actions;
export default mangasSlice.reducer;