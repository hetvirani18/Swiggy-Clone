import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchMenu = createAsyncThunk(
  "menu/fetch",
  async (restaurantId, thunkAPI) => {
    const state = thunkAPI.getState();

    if (state.menuSlice.menus[restaurantId]){
        return {
          restaurantId,
          name: state.menuSlice.menus[restaurantId].name,
          data: state.menuSlice.menus[restaurantId].data 
        };

    } 

    const proxyServer = "https://cors-anywhere.herokuapp.com/";
    const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${restaurantId}`;

    const response = await fetch(proxyServer + swiggyAPI);
    const data = await response.json();
    const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filtered = tempData.filter((item) => "title" in item?.card?.card);
    const name = data?.data?.cards[0]?.card?.card?.text;

    return {
      restaurantId,
      name,
      data: filtered,
    };
  }
);

const menuSlice = createSlice({
  name: "menuSlice",
  initialState: {menus: {}, loading: false, error: null},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        const { restaurantId, name, data } = action.payload;
        state.menus[restaurantId] = {
          name,
          data
        }
        state.loading = false;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default menuSlice.reducer;
export {fetchMenu}
