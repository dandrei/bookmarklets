javascript:{

    const sleep = t => new Promise(r => setTimeout(r, t));

    const asyncForEach = async (array, callback) => {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    };

    const querySelectorAll = s => Array.from(document.querySelectorAll(s));

    const getClickable = () => {
        return [].concat(
            querySelectorAll("span").filter(s => s.textContent.includes("replied")),
            querySelectorAll("a").filter(s => s.textContent.includes("more comments")),
            querySelectorAll("a").filter(s => s.textContent.includes("more replies")),
            querySelectorAll("a").filter(s => s.textContent.includes("See More")),
        )
    }

    const main = async () => {
        while (true) {
            const clickable = getClickable();
            console.log(`Links to click remaining: ${clickable.length}`);

            if (clickable.length === 0) {
                break;
            }

            await asyncForEach(clickable, async (e, i, a) => {
                console.log(`Clicking ${i}/${a.length}`);
                e.click();
                await sleep(500);
            });
        }

        console.log("Done!");
    }

    main().then();
}
