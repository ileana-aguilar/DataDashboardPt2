import React, { useState, useEffect } from 'react';
import BookInfo from './BookInfo';
import './List.css';

function List() {
    const [books, setBooks] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [authorFilter, setAuthorFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');

    useEffect(() => {
        async function fetchBooks() {
            const response = await fetch('https://openlibrary.org/trending/yearly.json');
            const data = await response.json();
            const booksWithRatings = await Promise.all(data.works.map(async (book) => {
                const ratingResponse = await fetch(`https://openlibrary.org${book.key}/ratings.json`);
                const ratingData = await ratingResponse.json();
                return { ...book, averageRating: ratingData.summary.average };
            }));
            setBooks(booksWithRatings);
            setFilteredResults(booksWithRatings);
        }

        fetchBooks();
    }, []);

    useEffect(() => {
        let results = books;
        
        if (authorFilter) {
            results = results.filter(book =>
                book.author_name.some(author =>
                    author.toLowerCase().includes(authorFilter.toLowerCase())));
        }

        if (ratingFilter) {
            results = results.filter(book =>
                book.averageRating && book.averageRating >= parseFloat(ratingFilter));
        }

        if (yearFilter) {
            results = results.filter(book =>
                book.first_publish_year === parseInt(yearFilter, 10));
        }

        setFilteredResults(results);
    }, [authorFilter, ratingFilter, yearFilter, books]);

    return (
        <div className='list-component'>
            <input
                type="text"
                placeholder="Enter Author"
                onChange={(e) => setAuthorFilter(e.target.value)}
            />
            <input
                type="number"
                placeholder="Minimum Rating"
                onChange={(e) => setRatingFilter(e.target.value)}
            />
            <input
                type="number"
                placeholder="Year Published"
                onChange={(e) => setYearFilter(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Year Published</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Number of Editions</th>
                        <th>Rating</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredResults.map((book) => (
                        <BookInfo key={book.key} book={book} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;
