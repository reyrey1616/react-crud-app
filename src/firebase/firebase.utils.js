// import { auth, firestore } from "./firebase.config";

// export const createUser = async (email, password, additionalData) => {
//   try {
//     const { user } = await auth.createUserWithEmailAndPassword(email, password);
//     createUserProfileDocument(user, additionalData);
//     console.log(user);
//     console.log(additionalData);
//   } catch (error) {
//     console.log(error);
//   }
// };

// //
// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   let userRef = await firestore.doc(`users/${additionalData.email}`);
//   let snapShot = await userRef.get();

//   const createdAt = new Date();
//   const { email, displayName } = userAuth;
//   if (!snapShot.exists) {
//     try {
//       await userRef.set({
//         email,
//         displayName,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log("error creating user", error);
//     }
//   }
// };
