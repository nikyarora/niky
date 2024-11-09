import React, { useState, useCallback, useMemo } from 'react';
import PhotoAlbum from "react-photo-album";
import gallery from '../../data/photography/gallery';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const PhotographyGallery = () => {
    const [index, setIndex] = useState(-1);
    const [currentGallery, setCurrentGallery] = useState('places');

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

    // Get current gallery based on selection
    const currentPhotos = useMemo(() => {
        switch(currentGallery) {
            case 'people': return peopleGallery;
            case 'places': return placesGallery;
            case 'pals': return palsGallery;
            default: return peopleGallery;
        }
    }, [currentGallery, peopleGallery, placesGallery, palsGallery]);

    // Memoize click handler
    const handleClick = useCallback(({ index }) => setIndex(index), []);

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
                onClick={handleClick}
                columns={(containerWidth) => {
                    if (containerWidth < 600) return 2;
                    if (containerWidth < 900) return 3;
                    return 4;
                }}
                spacing={20}
                renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                    <div style={wrapperStyle}>
                        <img
                            src={photo.src}
                            alt={photo.alt || ''}
                            loading="lazy"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block'
                            }}
                            srcSet={photo.srcSet?.map(s => `${s.src} ${s.width}w`).join(', ')}
                            sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                        />
                    </div>
                )}
            />

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={currentPhotos}
                styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' } }}
                plugins={[Slideshow, Thumbnails, Zoom]}
                carousel={{
                    preload: 1,
                }}
                render={{
                    buttonPrev: index === 0 ? () => null : undefined,
                    buttonNext: index === currentPhotos.length - 1 ? () => null : undefined,
                }}
            />
        </div>
    );
};

export default PhotographyGallery;