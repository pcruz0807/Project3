import React from "react";
import Hero from "../components/Hero";
import contactImg from "../images/contactBcg.jpeg";
import Account from "../components/AccountPage/Account";
export default function AccountPage() {
    return (
        <>
        <Hero img={contactImg} />
        <Account />
        </>
    );
}