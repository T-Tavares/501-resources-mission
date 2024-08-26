export const stringToCamelCase = (str: string) => {
    const splitString = str.split(/(?=[A-Z])/);
    return splitString.map((word: string) => word[0].toUpperCase() + word.slice(1)).join(' ');
};
