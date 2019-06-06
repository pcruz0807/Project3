import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/contactBcg.jpeg";
import Register from "../components/RegisterPage/Register";
export default function RegisterPage() {
    return (
        <>
        <Hero img={contactImg} />
        <Register />
        </>
    );
}