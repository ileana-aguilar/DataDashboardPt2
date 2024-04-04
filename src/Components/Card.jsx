import React, { useState, useEffect } from 'react';
import './Card.css'

function Card() {
    const [bookData, setBookData] = useState({ count: 0, avgEditions: 0, avgRating: 0 });
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://openlibrary.org/trending/yearly.json');
            const data = await response.json();
            const books = data.works;

            const count = books.length;
            const avgEditions = books.reduce((acc, book) => acc + book.edition_count, 0) / count;
            
            let totalRating = 0;
            let ratingCount = 0;
            await Promise.all(books.map(async (book) => {
                const ratingResponse = await fetch(`https://openlibrary.org${book.key}/ratings.json`);
                const ratingData = await ratingResponse.json();
                if (ratingData.summary && ratingData.summary.average) {
                    totalRating += ratingData.summary.average;
                    ratingCount++;
                }
            }));

            const avgRating = ratingCount > 0 ? totalRating / ratingCount : 0;

            setBookData({ count, avgEditions, avgRating });
        }

        fetchData();
    }, []);

    return(
        <div className='card-component'>
        <div className='card-div'>
            <h2>{bookData.count}</h2>
            <h3>Books</h3>
        </div>

        <div className='card-div'>
            <h2>{bookData.avgEditions.toFixed(2)}</h2>
            <h3>Average Number of Editions</h3>
        </div>

        <div className='card-div'>
            <h2>{bookData.avgRating.toFixed(2)}</h2>
            <h3>Average Overall Ratings</h3>
        </div>
        </div>
    )


}

export default Card;