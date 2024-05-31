import React, {useState} from 'react';

import PhotoAlbum from "react-photo-album";
import gallery from '../../data/photography/gallery'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const PhotographyGallery = () => {
    const [index, setIndex] = useState(-1);

    return (
        <div>
            <PhotoAlbum 
                layout="masonry"
                photos={gallery}
                onClick={({ index }) => setIndex(index)} 
            />
            <Lightbox
                slides={gallery}
                open={index >= 0}
                index={index}
                styles={{ root: { zIndex: '10000' }}}
                close={() => setIndex(-1)}
                plugins={[Slideshow, Thumbnails, Zoom]}
            />
        </div>
    )
};

export default PhotographyGallery;
