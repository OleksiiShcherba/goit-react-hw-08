import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/slice";
import { filtersReduser } from "./filters/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReduser,
  },
});
