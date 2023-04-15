
export function getPercents(percent, number) {
    const errorMsg = "Error: wrong arguments!";

    let checkArgument = (arg, min, max) => {
        if (typeof arg !== "number"
            || isNaN(arg)
            || arg < min
            || arg > max)
            return false;
        return true;
    };

    if (!checkArgument(percent, 0, 100)
        || !checkArgument(number, 
                Number.MIN_SAFE_INTEGER, 
                Number.MAX_SAFE_INTEGER))
        return errorMsg;
    return number * (percent / 100);
}

export function reverseString(string) {
    if (typeof string !== "string" 
        || string === "")
        return "Error: incorrect argument!";
    return string.split('')
                .reverse()
                .join('');
}