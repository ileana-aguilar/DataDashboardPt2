import React, { useState, useEffect } from 'react';
import '../App.css'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer
} from 'recharts';

function BookChart2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/trending/yearly.json')
      .then(response => response.json())
      .then(json => {
        const bookCountsPerAuthor = {};
        json.works.forEach(work => {
          work.author_name.forEach(name => {
            bookCountsPerAuthor[name] = (bookCountsPerAuthor[name] || 0) + 1;
          });
        });
        const chartData = Object.entries(bookCountsPerAuthor).map(([author, count]) => ({
          author,
          books: count
        }));
        setData(chartData);
      });
  }, []);

  return (
    <div className='chart'>
        <h1>Total Books Published Per Author</h1>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart 
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="author">
          <Label value="Author Name" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'Number of Books', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Line type="monotone" dataKey="books" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

export default BookChart2;
