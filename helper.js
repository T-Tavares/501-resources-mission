import clipboardy from 'clipboardy';

/**
 *
 * @param {String} String - If not passed will copy whatever is on the clipboard
 * @param {Object} Options - If not passed will consider `'` as Curr and `"` as Final.
 *
 * A little setup to help me convert the old JS file to new JSON
 */

const stringFormatter = async (string, options = {curr: `'`, final: `"`}) => {
    if (!string) string = await clipboardy.read();

    const formatedString = string.replaceAll(options.curr, options.final);
    clipboardy.write(formatedString);
    console.log(formatedString);
};

stringFormatter();
