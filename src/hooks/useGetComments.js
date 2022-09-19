import { useCollection } from "./useCollection";

export const useGetComments = (salonId) => {
    const { documents } = useCollection("comments", ["salonId", "==", salonId]);

    const getComments = () => {
		let comments = []
		let get = () => {
			return new Promise(function (resolve, reject) {
                resolve(documents)
            });
		}

		return get()
    };

    return {getComments};
};
