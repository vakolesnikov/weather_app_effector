const geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 7000
};

export const getCurrentPosition = (successHandler, errorHandler = Function.prototype) =>
    navigator.geolocation.watchPosition(
        ({ coords }) => successHandler(coords),
        errorHandler,
        geoOptions
    );
