import React from 'react';
import { Card } from 'react-bootstrap';
import { Flex, Progress } from 'antd';
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {

    return (
        <div className='card-btn'>
            <Card style={{ width: "18rem" }}>
                <Link to={`/movie/${movie.id}`}>
                    <img style={{ width: "18rem" }} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />    </Link>             <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text className="test">{movie.overview}</Card.Text>
                    <Flex gap="small" wrap>
                        <Progress
                            percent={movie.vote_average.toFixed(1) * 10}
                            status="active"
                            strokeColor={{
                                from: '#108ee9',
                                to: '#87d068',
                            }}
                        />
                    </Flex>


                </Card.Body>
            </Card>
        </div>
    );
};

export default MovieCard;
