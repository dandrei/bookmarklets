// Will open a new window and list all the links on a YouTube channel page
// Use on a channel's /videos page
// e.g. https://www.youtube.com/c/.../videos

javascript:{
    const isURL = s => {
        try {
            new URL(s);
        } catch {
            return false;
        }
        return true;
    };

    const newWin = window.open();

    Array.from(document.querySelectorAll("#video-title"))
        .map(({href}) => href)
        .filter(isURL)
        .forEach(href => newWin.document.write(`${href}<br/>`));

    newWin.document.close();
}
