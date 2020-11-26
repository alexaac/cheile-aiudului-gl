import Procedural from './procedural-gl.js';

// Choose a DOM element into which the library should render
const container = document.getElementById( 'container' );

// Configure datasources (see documentation for details)
const datasource = {  };

// Initialize library and optionally add UI controls
Procedural.init( { container, datasource } );
Procedural.setRotationControlVisible( true );

// Load real-world location
const montBlanc = { latitude: 45.8326364, longitude: 6.8564201 };
Procedural.displayLocation( montBlanc );

