// SO FAR, our server is only hosting that one static file, the index.html
// index.html is living on server
// client connects to server, requests web app
// with that request, index.html gets sent to the client
// then index.html is rendered on client
// js files referenced or w/ index.html; sent as raw text and executed on client side
// the index.js is never seen by client, it's just running backend program for us
// other things on server-side will be authentication
// also saving to database (server must take care of that)
// some api's could authenticate from here, as in on the client side BUT
// BUT
// we really only want to authenticate on server so that our js and what not isn't visible by client

// what we want to do right now is add functionality to client
// adding js to index.html

// something we can only do on client in geolocate
// client is somewhere in the world
// server and client is running locally on laptop so don't get confused boo

// at somepoint we'll deploy the server to the cloud (LATER)

// figure out how to geolocate, display that on their browser page, then send that info to server and have serve save it to database

// WEB API NAVIGATOR //
// GEO LOCATION API //

// only available for https context
// website must be hosted in secure context
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation


// boob is private key passphrase
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
// https://www.sitepoint.com/a-basic-html5-template/

// https://github.com/CodingTrain/Intro-to-Data-APIs-JS/tree/source/module2/data_selfie_app

// https://www.section.io/engineering-education/how-to-get-ssl-https-for-localhost/ SO FUCKING USEFUL
