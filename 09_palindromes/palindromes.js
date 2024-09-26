const palindromes = function (string) {
    str=string.replace("/.,!\s/g","").toLowerCase()
    ans=""
    for (let i = str.length-1; i >=0; i--) {
       ans+=str.charAt(i)
    }
    if (str==ans) {
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
