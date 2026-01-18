import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchResturants = createAsyncThunk(
    "resturants/fetch",
    async (arg, thunkAPI) =>{
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0276&lng=72.5871&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        try{
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
        }
        catch(error){
            console.log("CORS issue - Using proxy server");
            return thunkAPI.rejectWithValue(error.message);
        }
        const data = await response.json();
        return data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    }
)

const RestaurantSlice = createSlice({
    name: "resturantSlice",
    initialState: {resturants: [], loading: false, error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchResturants.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchResturants.fulfilled, (state, action) => {
            state.resturants = action.payload;
            state.loading = false;
        })
        .addCase(fetchResturants.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
})

export default RestaurantSlice.reducer;
export {fetchResturants};