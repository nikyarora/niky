import React, { useState } from 'react';
import PhotoAlbum from "react-photo-album";
import gallery from '../../data/photography/gallery'; // Assuming gallery data is an array of objects

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const PhotographyGallery = () => {
    const [index, setIndex] = useState(-1);
    const [currentGallery, setCurrentGallery] = useState('places'); // Default gallery

    // Separate the gallery data into categories
    const peopleGallery = gallery.filter(item => item.category === 'people');
    const placesGallery = gallery.filter(item => item.category === 'places');
    const palsGallery = gallery.filter(item => item.category === 'pals');

    return (
        <div>
            {/* Gallery Selector */}
            <div className="gallery-selector">
                <button onClick={() => setCurrentGallery('places')}>Places</button>
                <button onClick={() => setCurrentGallery('people')}>People</button>
                <button onClick={() => setCurrentGallery('pals')}>Pals</button>
            </div>

            {/* Photo Album Rendering Based on Selected Category */}
            {currentGallery === 'people' && (
                <PhotoAlbum 
                    layout='masonry'
                    photos={peopleGallery} 
                    onClick={({ index }) => setIndex(index)} 
                />
            )}
            {currentGallery === 'places' && (
                <PhotoAlbum 
                    layout='masonry'
                    photos={placesGallery} 
                    onClick={({ index }) => setIndex(index)} 
                />
            )}
            {currentGallery === 'pals' && (
                <PhotoAlbum 
                    layout='masonry'
                    photos={palsGallery} 
                    onClick={({ index }) => setIndex(index)} 
                />
            )}

            {/* Lightbox for Image Zoom */}
            {index >= 0 && (
                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    photos={gallery} // Show all images in lightbox
                    styles={{ root: { zIndex: '10000' }}}
                    plugins={[Slideshow, Thumbnails, Zoom]}
                />
            )}
        </div>
    );
};

export default PhotographyGallery;
