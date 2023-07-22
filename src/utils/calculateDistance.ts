function calculateDistance(coord1, coord2) {
    const latDiff = coord1.lat - coord2.latitude;
    const lonDiff = coord1.lon - coord2.longitude;
    return Math.sqrt(latDiff * latDiff + lonDiff * lonDiff);
}

export default calculateDistance