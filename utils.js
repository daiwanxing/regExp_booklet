/**
 * @description 将HTML字符转换成等值的实体
 * @param { string } str
 */
function escapeHTML (str) {
    const escapeChars = {
        "<": "lt",
        ">": "gt",
        '"': "quot",
        "&": "amp",
        "\'": "#39" 
    }

    const computeReg = Object.keys(escapeChars).join("");

    return str.replace(
        new RegExp("[" + computeReg + "]", "g"),
        function (match) {
            return `&${escapeChars[match]};`
        }
    )
}

escapeHTML("<p>This A Normal paragraph</p>")


/**
 * @description 将等值的实体转换成HTML字符串
 * @param { string } str
 */
function unEscapeHTML (str) {
    const htmlEntity = {
        lt: "<",
        gt: ">",
        quot: '"',
        amp: "&",
    }

    return str.replace(/\&([^;]+);/g, function(match, key) {
        return htmlEntity[key] || match;
    })
}
