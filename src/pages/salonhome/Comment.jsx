import React from "react";
import profile from "../../assets/profile.png";
import { useUser } from "../../hooks/useUser";

export default function Comment({ userId, commentText , commentedAt}) {
    const { user } = useUser(userId);
    return (
        <>
            <div className="com">
                <section className="times">
                    {`${commentedAt.hrs}:${commentedAt.mins}`}
                </section>
                {user && (
                    <>
                        <img src={profile} alt="" />
                        <section className="name">{user.name}</section>
                        <span>{user.email}</span>
                    </>
                )}

                <p>{commentText}</p>
                <hr />
            </div>
        </>
    );
}
