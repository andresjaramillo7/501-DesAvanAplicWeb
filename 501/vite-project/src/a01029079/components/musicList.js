import { jsx as _jsx } from "react/jsx-runtime";
import MusicItem from './musicItem';
import { songs } from '../data';
const MusicList = ({ onSelectSong }) => {
    return (_jsx("ul", { children: songs.map(song => (_jsx(MusicItem, { song: song, onSelect: onSelectSong }, song.id))) }));
};
export default MusicList;
