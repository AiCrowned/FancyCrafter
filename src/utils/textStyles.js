// Unicode character mappings for fancy text styles
// Each style maps lowercase a-z, uppercase A-Z, and numbers 0-9

// Helper to properly split Unicode strings (handles surrogate pairs)
const unicodeSplit = (str) => [...str];

const createCharMap = (lowercase, uppercase, digits = null) => {
    const map = {};
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    // Use spread operator to correctly split Unicode characters
    const lowerChars = unicodeSplit(lowercase);
    const upperChars = unicodeSplit(uppercase);

    for (let i = 0; i < 26; i++) {
        map[lowerAlphabet[i]] = lowerChars[i] || lowerAlphabet[i];
        map[upperAlphabet[i]] = upperChars[i] || upperAlphabet[i];
    }

    if (digits) {
        const digitChars = unicodeSplit(digits);
        for (let i = 0; i < 10; i++) {
            map[numbers[i]] = digitChars[i] || numbers[i];
        }
    }

    return map;
};

// Style definitions with their character mappings
export const textStyles = [
    {
        id: 'gothic',
        name: 'Gothic',
        preview: '𝔉𝔯𝔞𝔨𝔱𝔲𝔯',
        map: createCharMap(
            '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷',
            '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ'
        )
    },
    {
        id: 'bold-gothic',
        name: 'Bold Gothic',
        preview: '𝕭𝖔𝖑𝖉',
        map: createCharMap(
            '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟',
            '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅'
        )
    },
    {
        id: 'double-struck',
        name: 'Double Struck',
        preview: '𝔹𝕠𝕝𝕕',
        map: createCharMap(
            '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫',
            '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ',
            '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'
        )
    },
    {
        id: 'cursive',
        name: 'Cursive',
        preview: '𝒞𝓊𝓇𝓈𝒾𝓋𝑒',
        map: createCharMap(
            '𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏',
            '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵'
        )
    },
    {
        id: 'bold-cursive',
        name: 'Bold Cursive',
        preview: '𝓑𝓸𝓵𝓭',
        map: createCharMap(
            '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃',
            '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩'
        )
    },
    {
        id: 'bold-serif',
        name: 'Bold Serif',
        preview: '𝐁𝐨𝐥𝐝',
        map: createCharMap(
            '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳',
            '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙',
            '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
        )
    },
    {
        id: 'italic',
        name: 'Italic',
        preview: '𝐼𝑡𝑎𝑙𝑖𝑐',
        map: createCharMap(
            '𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧',
            '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍'
        )
    },
    {
        id: 'bold-italic',
        name: 'Bold Italic',
        preview: '𝑩𝒐𝒍𝒅',
        map: createCharMap(
            '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛',
            '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁'
        )
    },
    {
        id: 'monospace',
        name: 'Monospace',
        preview: '𝙼𝚘𝚗𝚘',
        map: createCharMap(
            '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣',
            '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉',
            '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿'
        )
    },
    {
        id: 'bubble',
        name: 'Bubble',
        preview: 'Ⓑⓤⓑⓑⓛⓔ',
        map: createCharMap(
            'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ',
            'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ',
            '⓪①②③④⑤⑥⑦⑧⑨'
        )
    },
    {
        id: 'bubble-filled',
        name: 'Bubble Filled',
        preview: '🅑🅤🅑🅑🅛🅔',
        map: createCharMap(
            '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩',
            '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩',
            '⓿❶❷❸❹❺❻❼❽❾'
        )
    },
    {
        id: 'square',
        name: 'Square',
        preview: '🅂🅀🅄🄰🅁🄴',
        map: createCharMap(
            '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉',
            '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'
        )
    },
    {
        id: 'fullwidth',
        name: 'Fullwidth',
        preview: 'Ｆｕｌｌ',
        map: createCharMap(
            'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ',
            'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ',
            '０１２３４５６７８９'
        )
    },
    {
        id: 'small-caps',
        name: 'Small Caps',
        preview: 'ꜱᴍᴀʟʟ ᴄᴀᴘꜱ',
        map: createCharMap(
            'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ',
            'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ'
        )
    },
    {
        id: 'upside-down',
        name: 'Upside Down',
        preview: 'uʍop ǝpᴉsd∩',
        map: createCharMap(
            'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz',
            '∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z',
            '0ƖᄅƐㄣϛ9ㄥ86'
        )
    },
    {
        id: 'strikethrough',
        name: 'Strikethrough',
        preview: 'S̷t̷r̷i̷k̷e̷',
        transform: (text) => [...text].map(char => char + '\u0337').join('')
    },
    {
        id: 'underline',
        name: 'Underline',
        preview: 'U̲n̲d̲e̲r̲',
        transform: (text) => [...text].map(char => char + '\u0332').join('')
    },
    {
        id: 'zalgo-light',
        name: 'Zalgo Light',
        preview: 'Z̈́a̋l̆g̊o̓',
        transform: (text) => {
            const zalgoMarks = ['\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0306', '\u0307', '\u0308', '\u030A', '\u030B', '\u030C', '\u0313'];
            return [...text].map(char => {
                if (char === ' ') return char;
                const mark = zalgoMarks[Math.floor(Math.random() * zalgoMarks.length)];
                return char + mark;
            }).join('');
        }
    },
    {
        id: 'parenthesized',
        name: 'Parenthesized',
        preview: '⒯⒠⒳⒯',
        map: createCharMap(
            '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵',
            '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵',
            '0⑴⑵⑶⑷⑸⑹⑺⑻⑼'
        )
    }
];

// Transform text using a specific style
export const transformText = (text, style) => {
    if (!text) return '';

    // If style has a custom transform function, use it
    if (style.transform) {
        return style.transform(text);
    }

    // Otherwise use character mapping
    if (style.map) {
        return [...text].map(char => style.map[char] || char).join('');
    }

    return text;
};

// Transform text to all styles at once
export const transformToAllStyles = (text) => {
    return textStyles.map(style => ({
        ...style,
        result: transformText(text, style)
    }));
};
