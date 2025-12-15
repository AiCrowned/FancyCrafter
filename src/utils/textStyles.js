// Unicode character mappings for 100+ fancy text styles
// Uses spread operator [...string] for proper Unicode handling

// Helper to properly split Unicode strings (handles surrogate pairs)
const unicodeSplit = (str) => [...str];

const createCharMap = (lowercase, uppercase, digits = null) => {
    const map = {};
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

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

// Combining character decorators
const addCombining = (text, combiningChar) => {
    return [...text].map(char => char === ' ' ? char : char + combiningChar).join('');
};

// Style definitions - 100+ styles
export const textStyles = [
    // === MATHEMATICAL STYLES (1-20) ===
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
        id: 'italic-serif',
        name: 'Italic Serif',
        preview: '𝐼𝑡𝑎𝑙𝑖𝑐',
        map: createCharMap(
            '𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧',
            '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍'
        )
    },
    {
        id: 'bold-italic-serif',
        name: 'Bold Italic',
        preview: '𝑩𝒐𝒍𝒅',
        map: createCharMap(
            '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛',
            '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁'
        )
    },
    {
        id: 'sans-serif',
        name: 'Sans Serif',
        preview: '𝖲𝖺𝗇𝗌',
        map: createCharMap(
            '𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓',
            '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹',
            '𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫'
        )
    },
    {
        id: 'bold-sans',
        name: 'Bold Sans',
        preview: '𝗕𝗼𝗹𝗱',
        map: createCharMap(
            '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇',
            '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭',
            '𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵'
        )
    },
    {
        id: 'italic-sans',
        name: 'Italic Sans',
        preview: '𝘐𝘵𝘢𝘭𝘪𝘤',
        map: createCharMap(
            '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻',
            '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡'
        )
    },
    {
        id: 'bold-italic-sans',
        name: 'Bold Italic Sans',
        preview: '𝙎𝙩𝙮𝙡𝙚',
        map: createCharMap(
            '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯',
            '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕'
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
        id: 'script',
        name: 'Script',
        preview: '𝒮𝒸𝓇𝒾𝓅𝓉',
        map: createCharMap(
            '𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏',
            '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵'
        )
    },
    {
        id: 'bold-script',
        name: 'Bold Script',
        preview: '𝓑𝓸𝓵𝓭',
        map: createCharMap(
            '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃',
            '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩'
        )
    },
    {
        id: 'fraktur',
        name: 'Gothic Fraktur',
        preview: '𝔉𝔯𝔞𝔨𝔱𝔲𝔯',
        map: createCharMap(
            '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷',
            '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ'
        )
    },
    {
        id: 'bold-fraktur',
        name: 'Bold Gothic',
        preview: '𝕭𝖔𝖑𝖉',
        map: createCharMap(
            '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟',
            '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅'
        )
    },

    // === CIRCLED STYLES (14-20) ===
    {
        id: 'circled',
        name: 'Circled',
        preview: 'Ⓒⓘⓡⓒⓛⓔ',
        map: createCharMap(
            'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ',
            'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ',
            '⓪①②③④⑤⑥⑦⑧⑨'
        )
    },
    {
        id: 'negative-circled',
        name: 'Negative Circle',
        preview: '🅐🅑🅒',
        map: createCharMap(
            '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩',
            '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩',
            '⓿❶❷❸❹❺❻❼❽❾'
        )
    },
    {
        id: 'squared',
        name: 'Squared',
        preview: '🄰🄱🄲',
        map: createCharMap(
            '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉',
            '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'
        )
    },
    {
        id: 'negative-squared',
        name: 'Negative Square',
        preview: '🅰🅱🅲',
        map: createCharMap(
            '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉',
            '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉'
        )
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
    },

    // === FULLWIDTH & SPECIAL (18-25) ===
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
        id: 'superscript',
        name: 'Superscript',
        preview: 'ˢᵘᵖᵉʳ',
        map: createCharMap(
            'ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ',
            'ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ',
            '⁰¹²³⁴⁵⁶⁷⁸⁹'
        )
    },
    {
        id: 'subscript',
        name: 'Subscript',
        preview: 'ₛᵤᵦ',
        map: createCharMap(
            'ₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz',
            'ₐBCDₑFGₕᵢⱼₖₗₘₙₒₚQᵣₛₜᵤᵥWₓYZ',
            '₀₁₂₃₄₅₆₇₈₉'
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
        id: 'mirrored',
        name: 'Mirrored',
        preview: 'ɿoɿɿiM',
        map: createCharMap(
            'ɒdɔbɘʇǫʜiįʞlmnoqpɿƨƚυvwxγz',
            'AᙠƆᗡƎꟻGHIᒐʞ⅃MИOꟼỌЯƧTUVWXYZ'
        )
    },

    // === COMBINING DIACRITICS STYLES (26-50) ===
    {
        id: 'strikethrough',
        name: 'Strikethrough',
        preview: 'S̶t̶r̶i̶k̶e̶',
        transform: (text) => addCombining(text, '\u0336')
    },
    {
        id: 'strikethrough-short',
        name: 'Short Strike',
        preview: 'S̷t̷r̷i̷k̷e̷',
        transform: (text) => addCombining(text, '\u0337')
    },
    {
        id: 'underline',
        name: 'Underline',
        preview: 'U̲n̲d̲e̲r̲',
        transform: (text) => addCombining(text, '\u0332')
    },
    {
        id: 'double-underline',
        name: 'Double Underline',
        preview: 'U̳n̳d̳e̳r̳',
        transform: (text) => addCombining(text, '\u0333')
    },
    {
        id: 'overline',
        name: 'Overline',
        preview: 'O̅v̅e̅r̅',
        transform: (text) => addCombining(text, '\u0305')
    },
    {
        id: 'double-overline',
        name: 'Double Overline',
        preview: 'O̿v̿e̿r̿',
        transform: (text) => addCombining(text, '\u033F')
    },
    {
        id: 'tilde-above',
        name: 'Tilde Above',
        preview: 'T̃ĩl̃d̃ẽ',
        transform: (text) => addCombining(text, '\u0303')
    },
    {
        id: 'tilde-below',
        name: 'Tilde Below',
        preview: 'T̰ḭl̰d̰ḛ',
        transform: (text) => addCombining(text, '\u0330')
    },
    {
        id: 'dot-above',
        name: 'Dot Above',
        preview: 'Ḋȯṫṡ',
        transform: (text) => addCombining(text, '\u0307')
    },
    {
        id: 'dot-below',
        name: 'Dot Below',
        preview: 'Ḍọṭṣ',
        transform: (text) => addCombining(text, '\u0323')
    },
    {
        id: 'diaeresis',
        name: 'Diaeresis',
        preview: 'Ṳm̈l̈ä̈ü̈ẗ',
        transform: (text) => addCombining(text, '\u0308')
    },
    {
        id: 'ring-above',
        name: 'Ring Above',
        preview: 'R̊i̊n̊g̊',
        transform: (text) => addCombining(text, '\u030A')
    },
    {
        id: 'ring-below',
        name: 'Ring Below',
        preview: 'R̥i̥n̥g̥',
        transform: (text) => addCombining(text, '\u0325')
    },
    {
        id: 'acute',
        name: 'Acute Accent',
        preview: 'Áćúté',
        transform: (text) => addCombining(text, '\u0301')
    },
    {
        id: 'grave',
        name: 'Grave Accent',
        preview: 'Gràvè',
        transform: (text) => addCombining(text, '\u0300')
    },
    {
        id: 'circumflex',
        name: 'Circumflex',
        preview: 'Ĉîrĉ',
        transform: (text) => addCombining(text, '\u0302')
    },
    {
        id: 'caron',
        name: 'Caron/Háček',
        preview: 'Čǎřǒň',
        transform: (text) => addCombining(text, '\u030C')
    },
    {
        id: 'breve',
        name: 'Breve',
        preview: 'B̆r̆ĕv̆ĕ',
        transform: (text) => addCombining(text, '\u0306')
    },
    {
        id: 'macron',
        name: 'Macron',
        preview: 'M̄āc̄r̄ōn̄',
        transform: (text) => addCombining(text, '\u0304')
    },
    {
        id: 'cedilla',
        name: 'Cedilla',
        preview: 'Ç̧ȩ̧ḑ',
        transform: (text) => addCombining(text, '\u0327')
    },
    {
        id: 'ogonek',
        name: 'Ogonek',
        preview: 'Ǫg̨ǫn̨ę̨k̨',
        transform: (text) => addCombining(text, '\u0328')
    },
    {
        id: 'horn',
        name: 'Horn',
        preview: 'H̛ơr̛n̛',
        transform: (text) => addCombining(text, '\u031B')
    },
    {
        id: 'hook-above',
        name: 'Hook Above',
        preview: 'H̉ỏỏk̉',
        transform: (text) => addCombining(text, '\u0309')
    },
    {
        id: 'x-above',
        name: 'X Above',
        preview: 'T̽e̽x̽t̽',
        transform: (text) => addCombining(text, '\u033D')
    },
    {
        id: 'bridge-below',
        name: 'Bridge Below',
        preview: 'B̪r̪i̪d̪g̪e̪',
        transform: (text) => addCombining(text, '\u032A')
    },

    // === SPECIAL DECORATIONS (51-70) ===
    {
        id: 'slash',
        name: 'Slashed',
        preview: 'S̸l̸a̸s̸h̸',
        transform: (text) => addCombining(text, '\u0338')
    },
    {
        id: 'cross-above',
        name: 'Cross Above',
        preview: 'C͓r͓o͓s͓s͓',
        transform: (text) => addCombining(text, '\u0353')
    },
    {
        id: 'arrow-below',
        name: 'Arrow Below',
        preview: 'A͎r͎r͎o͎w͎',
        transform: (text) => addCombining(text, '\u034E')
    },
    {
        id: 'double-acute',
        name: 'Double Acute',
        preview: 'D̋őű̋b̋l̋e̋',
        transform: (text) => addCombining(text, '\u030B')
    },
    {
        id: 'double-grave',
        name: 'Double Grave',
        preview: 'D̏ȍȕ̏b̏l̏ȅ',
        transform: (text) => addCombining(text, '\u030F')
    },
    {
        id: 'inverted-breve',
        name: 'Inverted Breve',
        preview: 'Ȋn̑v̑ȇȓt̑',
        transform: (text) => addCombining(text, '\u0311')
    },
    {
        id: 'comma-above',
        name: 'Comma Above',
        preview: 'C̓o̓m̓m̓a̓',
        transform: (text) => addCombining(text, '\u0313')
    },
    {
        id: 'reversed-comma',
        name: 'Reversed Comma',
        preview: 'R̔e̔v̔e̔r̔s̔e̔d̔',
        transform: (text) => addCombining(text, '\u0314')
    },
    {
        id: 'vertical-line-above',
        name: 'Vertical Line',
        preview: 'V̍e̍r̍t̍',
        transform: (text) => addCombining(text, '\u030D')
    },
    {
        id: 'double-vertical',
        name: 'Double Vertical',
        preview: 'D̎o̎u̎b̎l̎e̎',
        transform: (text) => addCombining(text, '\u030E')
    },
    {
        id: 'candrabindu',
        name: 'Candrabindu',
        preview: 'C̐a̐n̐d̐r̐a̐',
        transform: (text) => addCombining(text, '\u0310')
    },
    {
        id: 'fermata',
        name: 'Fermata',
        preview: 'F͒e͒r͒m͒a͒t͒a͒',
        transform: (text) => addCombining(text, '\u0352')
    },
    {
        id: 'not-tilde',
        name: 'Not Tilde',
        preview: 'N͊o͊t͊',
        transform: (text) => addCombining(text, '\u034A')
    },
    {
        id: 'homothetic',
        name: 'Homothetic',
        preview: 'H͋o͋m͋o͋',
        transform: (text) => addCombining(text, '\u034B')
    },
    {
        id: 'almost-equal',
        name: 'Almost Equal',
        preview: 'A͌l͌m͌o͌s͌t͌',
        transform: (text) => addCombining(text, '\u034C')
    },
    {
        id: 'left-angle',
        name: 'Left Angle',
        preview: 'L͍e͍f͍t͍',
        transform: (text) => addCombining(text, '\u034D')
    },
    {
        id: 'seagull',
        name: 'Seagull Below',
        preview: 'S̼e̼a̼g̼u̼l̼l̼',
        transform: (text) => addCombining(text, '\u033C')
    },
    {
        id: 'equals-below',
        name: 'Equals Below',
        preview: 'E͇q͇u͇a͇l͇s͇',
        transform: (text) => addCombining(text, '\u0347')
    },
    {
        id: 'asterisk-below',
        name: 'Asterisk Below',
        preview: 'A̯s̯t̯e̯r̯',
        transform: (text) => addCombining(text, '\u0359')
    },
    {
        id: 'double-ring',
        name: 'Double Ring',
        preview: 'D͚o͚u͚b͚l͚e͚',
        transform: (text) => addCombining(text, '\u035A')
    },

    // === ZALGO STYLES (71-75) ===
    {
        id: 'zalgo-light',
        name: 'Zalgo Light',
        preview: 'Z̈́a̋l̆g̊o̓',
        transform: (text) => {
            const marks = ['\u0300', '\u0301', '\u0302', '\u0303', '\u0306', '\u0307', '\u0308', '\u030A', '\u030B', '\u030C'];
            return [...text].map(char => {
                if (char === ' ') return char;
                return char + marks[Math.floor(Math.random() * marks.length)];
            }).join('');
        }
    },
    {
        id: 'zalgo-medium',
        name: 'Zalgo Medium',
        preview: 'Z̷̈́ä̴l̵̆g̸̊ö̷',
        transform: (text) => {
            const aboveMarks = ['\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307', '\u0308', '\u030A'];
            const belowMarks = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031C', '\u031D', '\u031E', '\u031F', '\u0320', '\u0324'];
            return [...text].map(char => {
                if (char === ' ') return char;
                const above = aboveMarks[Math.floor(Math.random() * aboveMarks.length)];
                const below = belowMarks[Math.floor(Math.random() * belowMarks.length)];
                return char + above + below;
            }).join('');
        }
    },
    {
        id: 'zalgo-heavy',
        name: 'Zalgo Heavy',
        preview: 'Z̸̢̛̈́ạ̴̛l̵̨̆g̸̡̊ọ̷',
        transform: (text) => {
            const aboveMarks = ['\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307', '\u0308', '\u030A', '\u030B', '\u030C', '\u030D', '\u030E', '\u030F'];
            const belowMarks = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031C', '\u031D', '\u031E', '\u031F', '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032A', '\u032B'];
            return [...text].map(char => {
                if (char === ' ') return char;
                let result = char;
                for (let i = 0; i < 2; i++) {
                    result += aboveMarks[Math.floor(Math.random() * aboveMarks.length)];
                    result += belowMarks[Math.floor(Math.random() * belowMarks.length)];
                }
                return result;
            }).join('');
        }
    },
    {
        id: 'wavy',
        name: 'Wavy Text',
        preview: 'W͠a͠v͠y͠',
        transform: (text) => addCombining(text, '\u0360')
    },
    {
        id: 'double-tilde',
        name: 'Double Tilde',
        preview: 'D͠o͠u͠b͠l͠e͠',
        transform: (text) => {
            return [...text].map((char, i) => {
                if (char === ' ') return char;
                return char + '\u0360';
            }).join('');
        }
    },

    // === AESTHETIC STYLES (76-90) ===
    {
        id: 'aesthetic',
        name: 'Ａｅｓｔｈｅｔｉｃ',
        preview: 'Ａｅｓｔｈｅｔｉｃ',
        transform: (text) => {
            return [...text].map(char => {
                const code = char.charCodeAt(0);
                if (code >= 33 && code <= 126) {
                    return String.fromCharCode(code + 65248);
                }
                return char;
            }).join('');
        }
    },
    {
        id: 'spaced',
        name: 'S p a c e d',
        preview: 'S p a c e d',
        transform: (text) => [...text].join(' ')
    },
    {
        id: 'double-spaced',
        name: 'D  o  u  b  l  e',
        preview: 'D  o  u  b  l  e',
        transform: (text) => [...text].join('  ')
    },
    {
        id: 'morse-dots',
        name: '·M·o·r·s·e·',
        preview: '·M·o·r·s·e·',
        transform: (text) => [...text].join('·')
    },
    {
        id: 'star-spaced',
        name: '★S★t★a★r★',
        preview: '★S★t★a★r★',
        transform: (text) => [...text].join('★')
    },
    {
        id: 'heart-spaced',
        name: '♡H♡e♡a♡r♡t♡',
        preview: '♡H♡e♡a♡r♡t♡',
        transform: (text) => [...text].join('♡')
    },
    {
        id: 'diamond-spaced',
        name: '◇D◇i◇a◇m◇o◇n◇d◇',
        preview: '◇D◇i◇a◇m◇o◇n◇d◇',
        transform: (text) => [...text].join('◇')
    },
    {
        id: 'arrow-spaced',
        name: '→A→r→r→o→w→',
        preview: '→A→r→r→o→w→',
        transform: (text) => [...text].join('→')
    },
    {
        id: 'sparkle-spaced',
        name: '✦S✦p✦a✦r✦k✦l✦e✦',
        preview: '✦S✦p✦a✦r✦k✦l✦e✦',
        transform: (text) => [...text].join('✦')
    },
    {
        id: 'flower-spaced',
        name: '❀F❀l❀o❀w❀e❀r❀',
        preview: '❀F❀l❀o❀w❀e❀r❀',
        transform: (text) => [...text].join('❀')
    },
    {
        id: 'music-spaced',
        name: '♪M♪u♪s♪i♪c♪',
        preview: '♪M♪u♪s♪i♪c♪',
        transform: (text) => [...text].join('♪')
    },
    {
        id: 'cross-spaced',
        name: '†C†r†o†s†s†',
        preview: '†C†r†o†s†s†',
        transform: (text) => [...text].join('†')
    },
    {
        id: 'lightning-spaced',
        name: '⚡Z⚡a⚡p⚡',
        preview: '⚡Z⚡a⚡p⚡',
        transform: (text) => [...text].join('⚡')
    },
    {
        id: 'fire-spaced',
        name: '🔥F🔥i🔥r🔥e🔥',
        preview: '🔥F🔥i🔥r🔥e🔥',
        transform: (text) => [...text].join('🔥')
    },
    {
        id: 'snow-spaced',
        name: '❄S❄n❄o❄w❄',
        preview: '❄S❄n❄o❄w❄',
        transform: (text) => [...text].join('❄')
    },

    // === BRACKET STYLES (91-100) ===
    {
        id: 'brackets',
        name: '【B】【r】【a】【c】【k】【e】【t】',
        preview: '【B】【r】【a】',
        transform: (text) => [...text].map(c => c === ' ' ? ' ' : `【${c}】`).join('')
    },
    {
        id: 'fancy-brackets',
        name: '『F』『a』『n』『c』『y』',
        preview: '『F』『a』『n』',
        transform: (text) => [...text].map(c => c === ' ' ? ' ' : `『${c}』`).join('')
    },
    {
        id: 'corner-brackets',
        name: '「C」「o」「r」「n」「e」「r」',
        preview: '「C」「o」「r」',
        transform: (text) => [...text].map(c => c === ' ' ? ' ' : `「${c}」`).join('')
    },
    {
        id: 'angle-brackets',
        name: '〈A〉〈n〉〈g〉〈l〉〈e〉',
        preview: '〈A〉〈n〉〈g〉',
        transform: (text) => [...text].map(c => c === ' ' ? ' ' : `〈${c}〉`).join('')
    },
    {
        id: 'double-angle',
        name: '《D》《o》《u》《b》《l》《e》',
        preview: '《D》《o》《u》',
        transform: (text) => [...text].map(c => c === ' ' ? ' ' : `《${c}》`).join('')
    },
    {
        id: 'tortoise-shell',
        name: '〔T〕〔o〕〔r〕〔t〕',
        preview: '〔T〕〔o〕〔r〕',
        transform: (text) => [...text].map(c => c === ' ' ? ' ' : `〔${c}〕`).join('')
    },
    {
        id: 'white-brackets',
        name: '〖W〗〖h〗〖i〗〖t〗〖e〗',
        preview: '〖W〗〖h〗〖i〗',
        transform: (text) => [...text].map(c => c === ' ' ? ' ' : `〖${c}〗`).join('')
    },
    {
        id: 'double-parenthesis',
        name: '⸨D⸩⸨o⸩⸨u⸩⸨b⸩⸨l⸩⸨e⸩',
        preview: '⸨D⸩⸨o⸩⸨u⸩',
        transform: (text) => [...text].map(c => c === ' ' ? ' ' : `⸨${c}⸩`).join('')
    },
    {
        id: 'ornate-brackets',
        name: '❮O❯❮r❯❮n❯❮a❯❮t❯❮e❯',
        preview: '❮O❯❮r❯❮n❯',
        transform: (text) => [...text].map(c => c === ' ' ? ' ' : `❮${c}❯`).join('')
    },
    {
        id: 'heavy-brackets',
        name: '❰H❱❰e❱❰a❱❰v❱❰y❱',
        preview: '❰H❱❰e❱❰a❱',
        transform: (text) => [...text].map(c => c === ' ' ? ' ' : `❰${c}❱`).join('')
    }
];

// Transform text using a specific style
export const transformText = (text, style) => {
    if (!text) return '';

    if (style.transform) {
        return style.transform(text);
    }

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
