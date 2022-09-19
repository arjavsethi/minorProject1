import React, { useEffect, useRef, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useUserType } from "../../hooks/useUserType";

export const ProtectedRoutes = ({
	userContext,
	type,
    upperRoleRequired,
    children,
    redirectPath = "/",
}) => {
    

    if (userContext) {
        if (upperRoleRequired) {
            if (type === "salonOwner") {
                return children ? children : <Outlet />;
            } else {
                return <Navigate to={redirectPath} replace />;
            }
        } else {
            return children ? children : <Outlet />;
        }
    } else {
        return <Navigate to={redirectPath} replace />;
    }
};
