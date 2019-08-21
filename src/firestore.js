export const readData = (string, property, callbackTemplate ) => {
    return firebase.firestore().collection(string).orderBy(property).onSnapshot(callbackTemplate);
}
export const databaseRegister = (objOrder) => {
    return firebase.firestore().collection("users").add(objOrder);
}

