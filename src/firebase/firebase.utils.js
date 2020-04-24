import { firestore } from "./firebase.config";

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

export const addNewUser = async (user) => {
  const userRef = await firestore.doc(`users/${user.email}`);
  const snapShot = await userRef.get();
  const createdAt = new Date();
  if (!snapShot.exists) {
    try {
      userRef.set({
        ...user,
        createdAt,
      });
      return { ...user, createdAt };
    } catch (error) {
      console.log("error creating user", error);
    }
  } else {
    alert("Email is already in used");
    return { exists: true };
  }
};

export const getUsers = async () => {
  const userRef = await firestore.collection("users");
  const snapShot = await userRef.get();
  const users = snapShot.docs.map((doc) => doc.data());

  return users;
};

export const editUser = async (user) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    newEmail,
    age,
    password,
  } = user;
  const newUserRef = await firestore.doc(`users/${newEmail}`);
  const newUserSnapShot = await newUserRef.get();
  const userRef = await firestore.doc(`users/${email}`);

  const updateUserData = (email) => {
    try {
      userRef.set({
        email,
        firstName,
        middleName,
        lastName,
        age,
        password,
      });
    } catch (error) {
      console.log("Error updating user", error);
    }
  };

  if (user.newEmail === user.email) {
    updateUserData(email);
    return { firstName, middleName, lastName, email, age, password };
  } else {
    if (newUserSnapShot.exists) {
      alert("Email is already in used!");
      return { exists: true };
    } else {
      updateUserData(newEmail);
      return {
        firstName,
        middleName,
        lastName,
        email: newEmail,
        age,
        password,
      };
    }
  }
};
