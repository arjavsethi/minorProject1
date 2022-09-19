import { useCollection } from "./useCollection";

export const useUser = (userId) => {
    // console.log(userId);
    const { documents } = useCollection("users", ["uid", "==", `${userId}`]);

    const getUser = () => {
		
        if (userId && documents) {
			// console.log({...documents[0]}, documents)
			let userFromDB = documents[0];
            const get = () => {
                return new Promise((resolve, reject) => {
                    resolve({ ...userFromDB });
                });
            };
            return get();
		}
    };

    var user;
    if (documents) {
        // console.log(documents)
        user = {
            ...documents[0],
        };
    }

    return { user, getUser };
};
