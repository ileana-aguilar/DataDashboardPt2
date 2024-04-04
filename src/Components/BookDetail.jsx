import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function BookDetail() {
    const bookKey = '/works/OL35351151W';
    let params  = useParams();
    const [bookDetails, setBookDetails] = useState(null);
    const [rating, setRating] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            const detailsResponse = await fetch(`https://openlibrary.org${bookKey}.json`);
            const detailsData = await detailsResponse.json();
            setBookDetails(detailsData);

           /* const ratingsResponse = await fetch(`https://openlibrary.org${params.bookKey}/ratings.json`);
            const ratingsData = await ratingsResponse.json();
            setRating(ratingsData.summary.average);*/
        };

        fetchBookDetails();
    }, [bookKey]);

    //if (!bookDetails || rating === null) return <div>Loading...</div>;

  return(
    <div>
        <h2>{bookDetails.title}</h2>
        <p>{bookDetails.description}</p>
        <p>Rating: {rating.summary.average}</p>
    </div>
  );
  }
  export default BookDetail;