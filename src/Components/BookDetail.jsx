import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './BookDetail.css';



function BookDetail() {
   // const bookKey = '/works/OL35351151W';
    let params  = useParams();
    const [bookDetails, setBookDetails] = useState(null);
    const [rating, setRating] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            const detailsResponse = await fetch(`https://openlibrary.org/works/${params.bookKey}.json`);
            const detailsData = await detailsResponse.json();
            setBookDetails(detailsData);

            const ratingsResponse = await fetch(`https://openlibrary.org/works/${params.bookKey}/ratings.json`);
            const ratingsData = await ratingsResponse.json();
            setRating(ratingsData);
        };

        fetchBookDetails();
    }, [params.bookKey]);

    if (!bookDetails || rating === null) return <div className="book-detail-loading">Loading...</div>;

  return(
    <div className="book-detail">
        <h2>{bookDetails.title}</h2>
        <p>Rating: {rating.summary.average }</p>
        <p>Description: {bookDetails.description}</p>
    </div>
  );
  }
  export default BookDetail;