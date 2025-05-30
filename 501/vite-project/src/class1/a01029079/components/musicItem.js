import { jsx as _jsx } from "react/jsx-runtime";
const MusicItem = ({ song, onSelect }) => {
    const { title, artist } = song;
    return (_jsx("li", { onClick: () => onSelect(song), children: `🎵 ${title} - ${artist}` }));
};
export default MusicItem;
