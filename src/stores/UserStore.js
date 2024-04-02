//Our store is called userStore and is created using
//function create imported from zustand.
//The store has one state variable called username and a function called updateName
// to receive new value for the state variable and update it.
//In this code, we also use persist to persistently save our store's data.
//Persist is imported from zustand/middleware.
//In this example, we selected sessionStorage as the place to persist the store.

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

//define the store
export const userStore = create(
  persist(
    (set) => ({
      username: "", //state variable
      updateName: (username) => set({ username }), //action
      mediatype: {
        isDesktopOrLaptop: false,
        isBigScreen: false,
        isTabletOrMobile: false,
        isPortrate: false,
        isRetina: false,

      },
      notifications: [], // state variable to keep all notifications
      updateNotifications: (notifications) => set({ notifications }), // a function to update the list of notifications
      addNotification: (newNotification) => set((state) => ({notifications: [...state.notifications, newNotification]})), // a function to add a new notification to the list of notifications
      updateMediatype: (mediatype) => set({ mediatype }),


    }),
    {
      name: "mystore", //name of the storage
      storage: createJSONStorage(() => sessionStorage), //storage type
    }
  )
);
