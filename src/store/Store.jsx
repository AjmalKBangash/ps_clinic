import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const FirstAction = createAction("First_action");
// export const favoritesRefreshState = createAction(
//   "props_from_favouroites_refresh"
// );
// export const showNav = createAction("show_navigation");
export const activeNavLink = createAction("active_navlink");

const initialState = {
  FirstAction: false,
  // favoritesRefreshState: 0,
  // showNav: false,
  activeNavLink: "home",
};

const sliceReducer = createReducer(initialState, (builder) => {
  builder.addCase(FirstAction, (state, action) => {
    state.FirstAction = action.payload;
  });
  // builder.addCase(favoritesRefreshState, (state, action) => {
  //   state.favoritesRefreshState = action.payload;
  // });
  // builder.addCase(showNav, (state, action) => {
  //   state.showNav = action.payload;
  // });
  builder.addCase(activeNavLink, (state, action) => {
    state.activeNavLink = action.payload;
  });
});

export const Store = configureStore({ reducer: sliceReducer });

export default Store;
