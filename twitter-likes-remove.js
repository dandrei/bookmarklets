// Will remove a Twitter like every 2 seconds
// Use on a logged-in profile's /likes page
// e.g. https://twitter.com/.../likes

javascript:{
    const getNode = (e, f, n) => n > 0 ? getNode(f(e), f, n - 1) : e;
    const sleep = t => new Promise(r => setTimeout(r, t));
    const remove = e => e.parentNode.removeChild(e);

    const unlike = async (e, i, a) => {
        console.log(`${i + 1} / ${a.length}`);

        e.click();
        await sleep(2000);

        remove(getNode(e, e => e.parentNode, 12));
    };

    const asyncForEach = async (array, callback) => {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    };

    const hearts = Array.from(document.querySelectorAll("div[data-testid=unlike]"))
    console.log(`Hearts loaded in the DOM: ${hearts.length}`);

    asyncForEach(hearts, unlike).then();
}
