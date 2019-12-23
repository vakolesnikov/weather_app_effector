const geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 7000
};

export default {
    getCurrentPosition: (successHandler, errorHandler = Function.prototype) =>
        navigator.geolocation.watchPosition(
            ({ coords }) => successHandler(coords.latitude, coords.longitude),
            errorHandler,
            geoOptions
        )
};
