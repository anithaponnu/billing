export function validateAZaz(x, lable,min,max){
    if (x != undefined) {
        const minLength = min;
        const maxLength = max;
        const hasreg = /^[A-Za-z]+$/.test(x);
        if (x.length < minLength) {
            return `${lable} must be at least ${minLength} characters long.`;
        }
        if (x.length > maxLength) {
            return `${lable} must be at least ${maxLength} characters long.`;
        }
        if (!hasreg) {
            return "only use uppercase and lowercase alpha character."
        }
    } else {
        return `${lable} must be contain only a-z & A-Z, min ${minLength} character max ${minLength} character only.`
    }
}