"use strict";
// Нужно найти максимальное количество одновременных сеансов в компьютерном клубе (на 1 компе одновременно может быть только 1 сеанс)
const seances2 = [
    { start: '02:10:42', finish: '02:40:43' },
    { start: '02:25:45', finish: '02:40:48' },
    { start: '00:00:18', finish: '04:00:19' },
    { start: '08:15:16', finish: '18:00:10' },
    { start: '02:24:33', finish: '02:39:38' },
    { start: '02:24:45', finish: '02:39:48' },
    { start: '02:24:04', finish: '02:39:08' },
    { start: '02:24:18', finish: '02:39:23' },
    { start: '02:25:03', finish: '02:39:44' },
    { start: '00:00:09', finish: '04:00:14' },
    { start: '19:13:26', finish: '00:13:28' },
    { start: '10:04:10', finish: '11:04:12' },
    { start: '10:03:39', finish: '11:02:19' },
    { start: '10:03:40', finish: '11:02:52' },
    { start: '08:43:33', finish: '13:00:03' },
    { start: '10:04:04', finish: '12:34:08' },
    { start: '10:43:29', finish: '13:43:33' },
    { start: '13:04:59', finish: '18:00:10' },
    { start: '10:43:37', finish: '13:43:38' },
    { start: '13:03:29', finish: '18:00:10' },
    { start: '13:04:37', finish: '18:00:10' },
    { start: '02:39:24', finish: '21:30:25' },
    { start: '18:13:05', finish: '19:13:11' },
    { start: '18:00:59', finish: '18:06:00' },
    { start: '23:49:59', finish: '02:50:04' },
    { start: '07:36:04', finish: '17:34:37' },
    { start: '18:02:15', finish: '18:07:20' },
    { start: '16:17:40', finish: '19:17:41' },
    { start: '16:58:10', finish: '19:58:11' },
    { start: '19:16:03', finish: '20:16:11' },
    { start: '19:43:14', finish: '22:42:58' },
    { start: '19:42:05', finish: '22:42:13' },
    { start: '19:17:16', finish: '00:17:18' },
    { start: '20:48:14', finish: '21:05:12' },
    { start: '18:26:35', finish: '22:25:02' },
    { start: '18:25:51', finish: '22:29:48' },
    { start: '19:43:01', finish: '22:43:04' },
    { start: '23:05:46', finish: '04:05:49' },
    { start: '19:17:34', finish: '21:53:39' },
    { start: '20:31:25', finish: '23:51:28' },
    { start: '22:43:50', finish: '00:44:38' },
    { start: '20:15:10', finish: '22:22:32' },
    { start: '22:39:09', finish: '22:43:17' },
    { start: '20:31:13', finish: '23:51:18' },
    { start: '21:45:23', finish: '02:45:26' },
    { start: '20:48:18', finish: '23:48:24' },
    { start: '22:58:09', finish: '03:57:32' },
    { start: '23:48:32', finish: '00:39:00' },
    { start: '22:40:50', finish: '00:44:32' },
    { start: '22:40:35', finish: '00:44:24' },
    { start: '22:15:04', finish: '05:49:24' },
    { start: '19:32:47', finish: '19:32:49' },
    { start: '19:27:54', finish: '19:27:58' },
    { start: '19:44:11', finish: '19:44:17' },
    { start: '19:26:06', finish: '19:26:10' },
    { start: '19:45:38', finish: '19:45:49' },
    { start: '21:05:19', finish: '21:05:30' },
    { start: '19:32:28', finish: '19:32:28' },
    { start: '22:48:29', finish: '22:48:31' },
];
const parseInterval = (start, end) => {
    const [sh, sm, ss] = start.split(':').map(Number);
    const [eh, em, es] = end.split(':').map(Number);
    const startSeconds = sh * 60 * 60 + sm * 60 + ss;
    const endSeconds = eh * 60 * 60 + em * 60 + es;
    if (endSeconds < startSeconds) {
        const h24 = 60 * 60 * 24;
        return [startSeconds, endSeconds + h24];
    }
    return [startSeconds, endSeconds];
};
const calculateIntersections = () => {
    const valuableSeances = seances2.map((seance) => parseInterval(seance.start, seance.finish));
    const history = new Map();
    valuableSeances.forEach((seanceA, index, arr) => {
        arr.forEach((seanceB) => {
            if (Math.max(seanceA[0], seanceB[0]) < Math.min(seanceA[1], seanceB[1])) {
                history.get(index)?.push(seanceB) ?? history.set(index, [seanceB]);
            }
        });
    });
    const res = Array.from(history.values()).reduce((acc, item) => {
        if (acc < item.length)
            return item.length;
        return acc;
    }, 0);
    return res;
};
console.log(calculateIntersections()); // 45
