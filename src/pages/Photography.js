import React, { useState } from 'react';
import PhotographyGallery from '../components/Photography/PhotographyGallery';

import Main from '../layouts/Main';

const Photography = () => {  
  return (
    <Main
      title="Photography"
      description="Nikhar Arora photography"
      fullPage={true}
    >
      <PhotographyGallery/>
    </Main>
  )
};

export default Photography;
