export function printTime(seconds: number, isFullTime: boolean = false) {
    let result = Math.floor(seconds / (365 * 24 * 3600));
    function makePlural(content: string) {
        return content + (result > 1 ? 's' : '');
    }
    function toString(fullNotation: string, abbreviation: string) {
        return result + (isFullTime ? ' ' + makePlural(fullNotation) : abbreviation);
    }
    if (result > 0) {
        return toString('year', 'y');
    }
    result = Math.floor(seconds / (7 * 24 * 3600));
    if (result > 0) {
        return toString('week', 'wk');
    }
    result = Math.floor(seconds / (24 * 3600));
    if (result > 0) {
        return toString('day', 'd');
    }
    result = Math.floor(seconds / 3600);
    if (result > 0) {
        return toString('hour', 'h');
    }
    result = Math.floor(seconds / 60);
    if (result > 0) {
        return toString('minute', 'min');
    }
    return toString('second', 's');
}