const randomGirlTemplate = (prefix) => 	[
        {
            "title": "Cecan",
            "description": `Get Cecan Girl Image`,
            "rowId": `${prefix}cecan`
        },
        {
            "title": "Chinese",
            "description": `Get Chinese Girl Image`,
            "rowId": `${prefix}chinese`
        },
        {
            "title": "Indonesia",
            "description": `Get Indonesian Girl Image`,
            "rowId": `${prefix}indonesia`
        },
        {
            "title": "Japan",
            "description": `Get Japanese Girl Image`,
            "rowId": `${prefix}japan`
        },
        {
            "title": "Malaysia",
            "description": `Get Malaysian Girl Image`,
            "rowId": `${prefix}malaysia`
        },
        {
            "title": "Thailand",
            "description": `Get Thailand Girl Image`,
            "rowId": `${prefix}thailand`
        },
        {
            "title": "Vietnam",
            "description": `Get Vietnam Girl Image`,
            "rowId": `${prefix}vietnam`
        },
];

const funMenuTemplate = (prefix, icon) =>
    `*「 FUN MENU 」*

${icon} ${prefix}ship _tag/tag_
${icon} ${prefix}rate _reply_
${icon} ${prefix}can _question_
${icon} ${prefix}is _question_
${icon} ${prefix}when _question_
${icon} ${prefix}stupid
${icon} ${prefix}foolish
${icon} ${prefix}smart
${icon} ${prefix}ape
${icon} ${prefix}noob
${icon} ${prefix}great
${icon} ${prefix}horny
${icon} ${prefix}asshole
${icon} ${prefix}beautiful
${icon} ${prefix}handsome
${icon} ${prefix}couple
${icon} ${prefix}girl
${icon} ${prefix}boy
${icon} ${prefix}handsomecheck [tag]
${icon} ${prefix}beautycheck [tag]
${icon} ${prefix}gaycheck [tag]
${icon} ${prefix}lesbiancheck [tag]
${icon} ${prefix}charactercheck [tag]`;

function animeTemplate(animeList, botname, sender2, myTimezone, time) {
    let animeRows = []

    for (let i of animeList) {
        let thisAnime = {}
        if (i.name) thisAnime[`description`] = `Title : ${i.name}\n`;
        if (i.title) thisAnime[`description`] = `Title : ${i.title}\n`;
        if (i.url) thisAnime[`title`] = `${i.url}\n`;
        if (i.rate) thisAnime[`description`] += `Rating : ${i.rate}\n`;
        if (i.released) thisAnime[`description`] += `Release Date : ${i.released}`;
        animeRows.push(thisAnime)
    }
    return {
        buttonText: 'Result: 📃',
        footerText: `*${botname}*`,
        description: `@${sender2.split('@')[0]}, Here is the search result`,
        sections: [
            {
                "title": `${myTimezone} - ${time}`,
                rows: animeRows
            }
        ],
        listType: 1
    }
}

module.exports = {randomGirlTemplate, animeTemplate, funMenuTemplate}
