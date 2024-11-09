import React, { useState, useCallback, useMemo } from 'react';
import PhotoAlbum from "react-photo-album";
import gallery from '../../data/photography/gallery';

const PhotographyGallery = () => {
    const [currentGallery, setCurrentGallery] = useState('places');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    // Memoize the filtered galleries
    const { peopleGallery, placesGallery, palsGallery } = useMemo(() => ({
        peopleGallery: gallery.filter(item => item.category === 'people').map(photo => ({
            ...photo,
            loading: 'lazy',
            srcSet: [
                { src: photo.src, width: 320, height: Math.round(photo.height * (320 / photo.width)) },
                { src: photo.src, width: 640, height: Math.round(photo.height * (640 / photo.width)) },
                { src: photo.src, width: 1200, height: Math.round(photo.height * (1200 / photo.width)) }
            ]
        })),
        placesGallery: gallery.filter(item => item.category === 'places').map(photo => ({
            ...photo,
            loading: 'lazy',
            srcSet: [
                { src: photo.src, width: 320, height: Math.round(photo.height * (320 / photo.width)) },
                { src: photo.src, width: 640, height: Math.round(photo.height * (640 / photo.width)) },
                { src: photo.src, width: 1200, height: Math.round(photo.height * (1200 / photo.width)) }
            ]
        })),
        palsGallery: gallery.filter(item => item.category === 'pals').map(photo => ({
            ...photo,
            loading: 'lazy',
            srcSet: [
                { src: photo.src, width: 320, height: Math.round(photo.height * (320 / photo.width)) },
                { src: photo.src, width: 640, height: Math.round(photo.height * (640 / photo.width)) },
                { src: photo.src, width: 1200, height: Math.round(photo.height * (1200 / photo.width)) }
            ]
        }))
    }), []);

    const currentPhotos = useMemo(() => {
        switch(currentGallery) {
            case 'people': return peopleGallery;
            case 'places': return placesGallery;
            case 'pals': return palsGallery;
            default: return peopleGallery;
        }
    }, [currentGallery, peopleGallery, placesGallery, palsGallery]);

    const handleClick = (event) => {
        // Access event.photo to get the photo object directly
        if (event?.photo) {
            console.log(event.photo.src)
            setSelectedPhoto(event.photo.src);
            setIsModalOpen(true);
        }
    };
    console.log(selectedPhoto)

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPhoto(null);
    };

    return (
        <div>
            <div className="gallery-selector">
                <button 
                    className={currentGallery === 'places' ? 'active' : ''} 
                    onClick={() => setCurrentGallery('places')}
                >
                    Places
                </button>
                <button 
                    className={currentGallery === 'people' ? 'active' : ''} 
                    onClick={() => setCurrentGallery('people')}
                >
                    People
                </button>
                <button 
                    className={currentGallery === 'pals' ? 'active' : ''} 
                    onClick={() => setCurrentGallery('pals')}
                >
                    Pals
                </button>
            </div>

            <PhotoAlbum 
                layout="masonry"
                photos={currentPhotos}
                onClick={(e)=>handleClick(e)}
                columns={(containerWidth) => {
                    if (containerWidth < 600) return 2;
                    if (containerWidth < 900) return 3;
                    return 4;
                }}
                spacing={20}
            />

            {isModalOpen && selectedPhoto && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedPhoto} alt={selectedPhoto.alt || ''} style={{ width: '100%' }} />
                    </div>
                </div>
            )}

        <style jsx>{`
            .modal {
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                top: 2rem;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                z-index: 1000;
            }
            .modal-content {
                position: relative;
                width: 80%;
                max-width: 800px;
            }
            .close {
                position: absolute;
                top: 10px;
                right: 20px;
                color: white;
                font-size: 24px;
                font-weight: bold;
                cursor: pointer;
            }
            /* Adjust image styling to fit within the modal view */
            .modal-content img {
                width: 100%;
                max-height: 90vh; /* Ensures the image doesn’t take up more than 90% of viewport height */
                object-fit: contain; /* Scales the image to fit within max height/width without distortion */
            }
        `}</style>
        </div>
    );
};

export default PhotographyGallery;
