import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Climbing',
            category: 'hobbies',
            description:
                'A man looking at a wall full of problems'
        },
        {
            name: 'Custom PC',
            category: 'hobbies',
            description:
                'Full custom PC build'
        },
        {
            name: 'Custumized PC',
            category: 'hobbies',
            description:
                'Custumizing PC cases & compontents'
        },
        {
            name: 'Content Creation',
            category: 'hobbies',
            description:
                'Record, Edit, and Create videos for online entertainment'
        },
        {
            name: 'Mechanicals',
            category: 'hobbies',
            description:
                'Automotive mechanics by day, old school motorcycles by night'
        },
        {
            name: 'HTML & CSS',
            category: 'tech',
            description:
                'An introduction to coding',
        },
        {
            name: 'Portfolio - Basic',
            category: 'tech',
            description:
                'HTML & CSS based portfolio'
        },
        {
            name: 'JavaScript & API',
            category: 'tech',
            description:
                'An introduction to API calls'
        },
        {
            name: 'Node & MYSQL',
            category: 'tech',
            description:
                'An introduction to Node & MYSQL'
        },
        {
            name: 'React',
            category: 'tech',
            description:
                'An introduction to React'
        },
        {
            name: 'MERN',
            category: 'tech',
            description:
                'React based, Heroku deployed'
        },
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && (
                <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.png`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;