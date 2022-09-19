import { useReducer, useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
    collection,
    addDoc,
    serverTimestamp,
    deleteDoc,
    doc,
    updateDoc,
} from "@firebase/firestore";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: false,
};

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case "IS_PENDING":
            return {
                document: null,
                isPending: true,
                error: null,
                success: false,
            };
        case "ADDED_DOCUMENT":
            return {
                document: action.payload,
                isPending: false,
                error: null,
                success: true,
            };
        case "UPDATED_DOCUMENT":
            return {
                document: action.payload,
                isPending: false,
                error: null,
                success: true,
            };
        case "DELETED_DOCUMENT":
            return {
                document: null,
                isPending: false,
                error: null,
                success: true,
            };
        case "ERROR":
            return {
                document: null,
                isPending: false,
                error: action.payload,
                success: false,
            };
        default:
            return state;
    }
};

export const useFirestore = (collectionName) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action);
        }
    };

    const collectionRef = collection(db, collectionName);

    const addDocument = async (doc) => {
        dispatchIfNotCancelled({ type: "IS_PENDING" });

        const createdAt = serverTimestamp();

        try {
            const addedDocument = await addDoc(collectionRef, {
                ...doc,
                createdAt,
            });
            dispatchIfNotCancelled({
                type: "ADDED_DOCUMENT",
                payload: addedDocument,
            });
            return { document: addedDocument, error : null,  success: true };
        } catch (err) {
            dispatchIfNotCancelled({
                type: "ERROR",
                payload: err.message,
            });
			return { document: null,error: err.message, success: false };
        }
    };

    const updateDocument = async (docData, docId) => {
        dispatchIfNotCancelled({ type: "IS_PENDING" });

        let docRef = doc(db, collectionName, docId);

        const createdAt = serverTimestamp();

        try {
            const updatedDocument = await updateDoc(docRef, {
                ...docData,
                createdAt,
            });
            dispatchIfNotCancelled({
                type: "UPDATED_DOCUMENT",
                payload: updatedDocument,
            });
        } catch (err) {
            dispatchIfNotCancelled({
                type: "ERROR",
                payload: err.message,
            });
        }
    };

    const deleteDocument = async (documentId) => {
        dispatch({ type: "IS_PENDING" });

        try {
            const docRef = doc(db, collectionName, documentId);
            await deleteDoc(docRef);
            dispatchIfNotCancelled({
                type: "DELETED_DOCUMENT",
                payload: docRef,
            });
        } catch (err) {
            console.log(err);
            dispatchIfNotCancelled({ type: "ERROR", payload: err });
        }
    };

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { response, addDocument, deleteDocument, updateDocument };
};
