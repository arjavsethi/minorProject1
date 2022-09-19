import { useFirestore } from "./useFirestore"


export const useComment = () => {

	const {addDocument} = useFirestore("comments")

	const addComment = (commentinput) => {

		let date = new Date()
		let hrs = date.getHours()
		let mins = date.getMinutes()

		let comment = {
			...commentinput,
			commentedAt: {
				hrs: hrs,
				mins: mins
			} 
		}

		addDocument(comment);

	}
  return {addComment}
}
