import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";

export default function DemoUser() {
    const dispatch = useDispatch();

    const demoLogin = (e) => {
        e.preventDefault();
        dispatch(login("demo@aa.io", "password"));
    }
    return <button onClick={demoLogin}>Demo User</button>
}