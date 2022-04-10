const {fetchJson} = require("./fetcher");
let templates = {}
templates.menuTemplate = (prefix) => [
    {
        "title": "GROUP MENU",
        "description": `Display A List Of Group Features`,
        "rowId": `${prefix}groupmenu`
    },
    {
        "title": "DOWNLOAD MENU",
        "description": `Display A List Of Features To Download`,
        "rowId": `${prefix}downloadmenu`
    },
    {
        "title": "MAKER MENU",
        "description": `Display A List Of Features To Create Logo`,
        "rowId": `${prefix}makermenu`
    },
    {
        "title": "ANIME MENU",
        "description": `Display A List Of Anime Features`,
        "rowId": `${prefix}animemenu`
    },
    {
        "title": "STICKER MENU",
        "description": `Display A List Of Sticker Features`,
        "rowId": `${prefix}stickermenu`
    },
    {
        "title": "FUN MENU",
        "description": `Display A List Of Fun Features`,
        "rowId": `${prefix}funmenu`
    },
    {
        "title": "SOUND MENU",
        "description": `Display A List Of Sounds`,
        "rowId": `${prefix}soundmenu`
    },
    {
        "title": "CONVERTER MENU",
        "description": `Display A List Of Convert Features`,
        "rowId": `${prefix}convertmenu`
    },
    {
        "title": "SEARCH MENU",
        "description": `Display A List Of Searching Features`,
        "rowId": `${prefix}searchmenu`
    },
    {
        "title": "OTHER MENU",
        "description": `Display A List Of Other Features`,
        "rowId": `${prefix}othermenu`
    },
    {
        "title": "OWNER MENU",
        "description": `Display A List Of Owner Features`,
        "rowId": `${prefix}ownermenu`
    }
];

templates.groupMenuTemplate = (prefix, icon) =>
    `*「 GROUP MENU 」*
    
${icon} ${prefix}antilink _on / off_
${icon} ${prefix}antivirtex _on / off_
${icon} ${prefix}welcome _on / off_
${icon} ${prefix}group _open / closed_
${icon} ${prefix}promote _@tag / reply_
${icon} ${prefix}demote _@tag / reply_
${icon} ${prefix}add _916xx_
${icon} ${prefix}kick _@tag / reply_
${icon} ${prefix}getdesc
${icon} ${prefix}setpp _reply_
${icon} ${prefix}setdesc _text_
${icon} ${prefix}setname _text_
${icon} ${prefix}getbio _reply target_
${icon} ${prefix}getdp _tag_
${icon} ${prefix}getname _reply target_
${icon} ${prefix}tagall
${icon} ${prefix}hidetag _text_
${icon} ${prefix}contact _916x|Name_
${icon} ${prefix}contag _@tag|Name_
${icon} ${prefix}sticktag _Reply Sticker_
${icon} ${prefix}totag _Reply Image_
${icon} ${prefix}creategroup _Name|tag_
${icon} ${prefix}promoteall
${icon} ${prefix}demoteall
${icon} ${prefix}listadmin
${icon} ${prefix}leave
${icon} ${prefix}grupowner
${icon} ${prefix}groupinfo
${icon} ${prefix}grouplink
${icon} ${prefix}onlinelist
${icon} ${prefix}resetgrouplink`;

templates.funMenuTemplate = (prefix, icon) =>
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

templates.downloadMenuTemplate = (prefix, icon) =>
    `*「 DOWNLOAD MENU 」*


${icon} ${prefix}telegramsticker _Link_
${icon} ${prefix}ytmp3 _Link_
${icon} ${prefix}ytmp4 _Link_
${icon} ${prefix}play _song name_
${icon} ${prefix}mp3 _song name_
${icon} ${prefix}mp4 _song name_
${icon} ${prefix}lyrics _song name_`;

templates.makerMenuTemplate = (prefix,icon) =>
    `*「 MAKER MENU 」*

${icon} ${prefix}maker _text1_ | _text2_`;;

templates.makerOptionsTemplate = function(optionList, prefix, text1, text2, sender2, botName, myTimezone, time) {
    console.log(`Text1 = ${text1}`)
    console.log(`Text2 = ${text2}`)
    let optionRows = []
    for (let i of optionList) {
        let thisOption = {}
        thisOption.title = i.title
        thisOption.description = i.name
        if (text2 !== "undefined") {
            thisOption.rowId = `${prefix}viomake ${i.name} ${text1}|${text2}`
        } else {
            thisOption.rowId = `${prefix}viomake ${i.name} ${text1}`
        }
        optionRows.push(thisOption)
    }
    // console.log(optionRows)
    return {
        buttonText: 'Options: 📃',
        footerText: `*${botName}*`,
        description: `@${sender2.split('@')[0]}, Select from the options below`,
        sections: [
            {
                "title": `${myTimezone} - ${time}`,
                rows: optionRows
            }
        ],
        listType: 1
    }
}

templates.animeMenuTemplate = (prefix, icon) =>
    `*「 ANIME 」*

${icon} ${prefix}anibatch _Text_
${icon} ${prefix}gogoanime _Text_
${icon} ${prefix}anime-planet _Text_`;

templates.stickerMenuTemplate = (prefix, icon) =>
    `*「 STICKER MENU 」*

${icon} ${prefix}attp _Text_
${icon} ${prefix}attp2 _Text_
${icon} ${prefix}ttp2 _Text_
${icon} ${prefix}ttp-gradeint _Text_
${icon} ${prefix}attp-gradeint _Text_
${icon} ${prefix}attp-gradeint2 _Text_
${icon} ${prefix}stickermeme _reply image_
${icon} ${prefix}stickerwm _reply sticker_
${icon} ${prefix}sticker _reply image_
${icon} ${prefix}memegen _reply sticker_`;

templates.soundMenuTemplate = function(prefix) {
    let rows = []
    for (let i = 1; i < 75; i++) {
        let sound = {}
        sound.title = `sound ${i}`
        sound.description = `play sound ${i}`
        sound.rowId = `${prefix}sound ${i}`
        rows.push(sound)
    }
    return rows
}

templates.ownerMenuTemplate = (prefix, icon) =>
    `*「 OWNER MENU 」*

${icon} ${prefix}tospam _reply with amount_
${icon} ${prefix}bc _text_
${icon} ${prefix}bc2 _text_
${icon} ${prefix}bcgc _text_
${icon} ${prefix}setbotname _text_
${icon} ${prefix}setbotbio _text_
${icon} ${prefix}setbotpp _Reply Image_
${icon} ${prefix}autoread _On / Off_
${icon} ${prefix}autotype _On / Off_
${icon} ${prefix}autorecord _On / Off_
${icon} ${prefix}clearall
${icon} ${prefix}leaveall
${icon} ${prefix}public
${icon} ${prefix}self`;

templates.converterMenuTemplate = (prefix, icon) =>
    `*「 CONVERT MENU 」*

${icon} ${prefix}cutesound _reply audio/vn_
${icon} ${prefix}blub _reply audio/vn_
${icon} ${prefix}ghost _reply audio/vn_
${icon} ${prefix}squirrel _reply audio/vn_
${icon} ${prefix}slow _reply audio/vn_
${icon} ${prefix}fast _reply audio/vn_
${icon} ${prefix}vibra _reply audio/vn_
${icon} ${prefix}nightcore _reply audio/vn_
${icon} ${prefix}bass _reply audio/vn_
${icon} ${prefix}robot _reply audio/vn_
${icon} ${prefix}reverse _reply audio/vn_
${icon} ${prefix}fat _reply audio/vn_
${icon} ${prefix}vnsec _reply audio with number_
${icon} ${prefix}vidsec _reply video with number_
${icon} ${prefix}tomp3 _reply video_
${icon} ${prefix}toimg _reply sticker_
${icon} ${prefix}tourl _reply image/vid_
${icon} ${prefix}tts _code text_`;

templates.searchMenuTemplates = (prefix, icon) =>
    `*「 SEARCH MENU 」*

${icon} ${prefix}playstore _Query_
${icon} ${prefix}ytsearch _Query_
${icon} ${prefix}pinterest _Query_
${icon} ${prefix}googleimg _Query_
${icon} ${prefix}google _Query_`;

templates.otherMenuTemplates = (prefix, icon) =>
    `*「 OTHER MENU 」*

${icon} ${prefix}runtime
${icon} ${prefix}speed
${icon} ${prefix}owner
${icon} ${prefix}developer
${icon} ${prefix}script
${icon} ${prefix}delete _Reply to bot messages_`;

templates.animeTemplate = function animeTemplate(animeList, botName, sender2, myTimezone, time) {
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
        footerText: `*${botName}*`,
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

module.exports = templates;
