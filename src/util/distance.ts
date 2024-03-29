// 거리 계산
export const getDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
) => {
    function deg2rad(deg: number) {
        return deg * (Math.PI / 180);
    }
    var R = 6371;
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lng2 - lng1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    var distance = Math.round(d * 1000) / 1000;
    return distance.toFixed(1);
};

// 5키로 미터 반경 찾기
export const calculateRange = (center: number) => {
    const latOrLngPerKm = 0.00899320367746216;
    const range = {
        min: center - 5 * latOrLngPerKm,
        max: center + 5 * latOrLngPerKm,
    };
    return range;
};
