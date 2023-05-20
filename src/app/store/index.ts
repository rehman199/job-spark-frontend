import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistConfig, Persistor } from "redux-persist/es/types";
import { IUserState } from "../interfaces/user";

const persistConfig: PersistConfig<IUserState> = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, usersReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor: Persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
