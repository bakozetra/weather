// import React, { createContext, useReducer, useEffect, useState } from 'react'
// const GlobalContext = createContext();
// function GlobalContextProvider({ children }) {
//   let [state, dispatch] = useReducer((state, action) => {
//     switch (action.type) {
//       case "LOADING": {
//         return { ...state, loading: true }
//       }
//       case "RESOLVED": {
//         return {
//           ...state,
//           loading: false,
//           response: action.response,
//         }
//       }
//       case 'ERROR': {
//         return {
//           ...state,
//           loading: false,
//           response: action.response,
//           error: action.error
//         }
//       }
//     }
//   }, {
//     loading: false,
//     response: [],
//     error: null
//   })
//   useEffect(() => {
//     let isCurrent = true
//     dispatch({ type: "LOADING" })
//     const URL = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=london`;
//     fetch(URL)
//       .then(response => response.json())
//       .then(json => {
//         if (isCurrent) {
//           dispatch({ type: "RESOLVED", response: json })
//         }
//       }).catch(error => {
//         dispatch({ type: "ERROR", error })
//       })
//     return () => {
//       isCurrent = false
//     }
//   }, [])

//   useEffect(() => {
//     let isCurrent = true
//     dispatch({ type: "LOADING" })
//     const url = ` https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/`
//     console.log(url);
//     fetch(url)
//       .then(response => response.json())
//       .then(json => {
//         if (isCurrent) {
//           dispatch({ type: "RESOLVED", response: json })
//         }
//       }).catch(error => {
//         dispatch({ type: "ERROR", error })
//       })
//     return () => {
//       isCurrent = false
//     }
//   }, [])

//   console.log(state.response);
//   return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>
// }

// export { GlobalContext, GlobalContextProvider }