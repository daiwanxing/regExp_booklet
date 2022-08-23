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