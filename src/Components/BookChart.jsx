import React, { useState, useEffect } from 'react';
import '../App.css'
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer
} from 'recharts';

function BookChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/trending/yearly.json')
      .then(response => response.json())
      .then(data => {
        const bookCounts = {};
        data.works.forEach(work => {
          const year = work.first_publish_year;
          if (year) {
            bookCounts[year] = (bookCounts[year] || 0) + 1;
          }
        });
        const chartData = Object.keys(bookCounts).map(year => ({
          year: year,
          books: bookCounts[year]
        }));
        setData(chartData);
      });
  }, []);

  return (
    <div className='chart'>
      <h1>Total Books Published Per Year</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year">
            <Label value="Year" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: 'Number of Books', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="books" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BookChart;
