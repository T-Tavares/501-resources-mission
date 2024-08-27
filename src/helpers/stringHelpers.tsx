export const stringToCamelCase = (str: string) => {
    const splitString = str.split(/(?=[A-Z])/);
    const formatedString = splitString.map((word: string) => word[0].toUpperCase() + word.slice(1)).join(' ');
    if (formatedString.length < 5) return formatedString.toUpperCase();
    return formatedString;
};
