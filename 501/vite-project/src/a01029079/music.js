import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MusicList from './components/musicList';
const Music = () => {
    const handleSelectSong = (song) => {
        alert(`Ahora reproduciendo: ${song.title} de ${song.artist}`);
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "M\u00FAsica Favorita de Andr\u00E9s" }), _jsx("a", { href: "../../../../../src/class3/a01029079/public/menu1.html", className: 'btn', children: " Return " }), _jsx(MusicList, { onSelectSong: handleSelectSong })] }));
};
export default Music;
