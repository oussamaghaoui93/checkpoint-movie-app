import React, { useState } from 'react';
import { Slider } from 'antd';

const Filter = ({ onFilter }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        onFilter({ title: e.target.value, rating });
    };

    const handleRatingChange = (value) => {

        setRating(value);
        onFilter({ title, rating: value });
    };

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search by title"
                value={title}
                onChange={handleTitleChange}
            />
            {/* <input
                type="number"
                placeholder="Rating"
                value={rating}
                onChange={handleRatingChange}
                min="0"
                max="5"
            /> */}
            <Slider min={0} max={10} value={rating} onChange={handleRatingChange} />

        </div>
    );
};

export default Filter;
