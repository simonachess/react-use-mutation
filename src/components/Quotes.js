import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { quotesData } from "../data/quotes";

export default function Quotes() {

    const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)]

    return (
        <>
            <div className="quote">
                <p>{randomQuote.quote}</p>
                <p>-- {randomQuote.author} --</p>
            </div>
            <Button size="lg" type="submit" variant="info">
                <Link to="/" >Log out</Link>
            </Button>
        </>
    )
}