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
        gt: ">",//
        quot: '"',
        amp: "&",
    }

    return str.replace(/\&([^;]+);/g, function(match, key) {
        // 如果有分组引用，则key为分组匹配的字符， 否则第二个参数是匹配的串的第一个字符出现的索引
        // update: 如果一个正则既有分组引用又有非分组模式，当match的是一个非分组的字符时，第一个参数值是匹配的字符，没有第二个参数
        console.log(match, key); 
        return htmlEntity[key] || match;
    })
}

unEscapeHTML('&lt;p&gt;This A Normal paragraph&lt;/p&gt;');
