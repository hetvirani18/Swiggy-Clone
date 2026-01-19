# Swiggy Clone

A food delivery web application inspired by Swiggy, built with React.

## Features

- Browse restaurants and food options
- View restaurant menus
- Add items to cart
- Search for food
- Dine-in and grocery options

## Technologies Used

- **React** - Frontend library
- **React Router** - Client-side routing
- **React Redux** - State management with centralized store to cache API data and prevent redundant network requests
- **Swiggy API** - Dynamic live data fetching
 - **Parcel** - Bundler & dev server used for building and running the app

## How to Run

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server (uses local Parcel):
   ```bash
   npx parcel src/index.html 
   ```
4. The app will open at `http://localhost:1234` (or open it manually)

## Note

This project uses live Swiggy API to fetch real-time restaurant and menu data.

Swiggy's homepage data (banners, curated food sections and Instamart/grocery links) is delivered via server-side rendering (SSR). To avoid re-fetching these pre-rendered datasets at runtime, this project includes the extracted datasets in `src/Utils` (for example `FoodData.js`, `DineData.js`, and `Grocery.js`) and imports them where needed.

## APIs Used

| API | Endpoint | Description |
|-----|----------|-------------|
| Restaurant List | `https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0276&lng=72.5871&is-seo-homepage-enabled=true` | Fetches list of restaurants based on location |
| Restaurant Menu | `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${restaurantId}` | Fetches detailed menu for a specific restaurant |