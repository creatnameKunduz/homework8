unction isPalindrome(str) {
    str = str.replace(/\s/g, '').toLowerCase();
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('Рвал дед лавр'))
console.log(isPalindrome('Лапоть топал'))
console.log(isPalindrome('Я ем змея'))