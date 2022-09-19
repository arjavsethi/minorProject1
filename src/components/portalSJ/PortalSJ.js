import { createPortal } from "react-dom";

export const PortalSJ = ({children}) => {
	return createPortal(children, document.body)
}