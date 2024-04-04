import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";


const BookInfo = ({ book }) => {
    const [averageRating, setAverageRating] = useState(null);

    useEffect(() => {
        async function fetchRating() {
            if (book && book.key) {
                try {
                    const response = await fetch(`https://openlibrary.org${book.key}/ratings.json`);
                    const data = await response.json();
                    setAverageRating(data.summary.average);
                } catch (error) {
                    console.error('Error fetching rating:', error);
                }
            }
        }

        fetchRating();
    }, [book]);

    if (!book) {
        return <tr><td colSpan="5">Loading book data...</td></tr>;
    }

    return (
        <tr>
            <td>{book.first_publish_year}</td>
            <td>{book.title}</td>
            <td>{book.author_name ? book.author_name.join(', ') : 'Unknown'}</td>
            <td>{book.edition_count}</td>
            <td>{averageRating !== null ? averageRating.toFixed(2) : 'Loading...'}</td>
            <td>
                
            <Link to={`/bookdetails${book.key}`} key={book.key}>              
            🔗
                </Link>
                </td>
        </tr>
    );
};

export default BookInfo;
