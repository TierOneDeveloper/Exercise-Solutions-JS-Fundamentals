function cutAndReverse(str) {

    let halfIndex = str.length / 2;

    let firstHalf = str.substring(0, halfIndex);
    let secondHalf = str.substring(halfIndex);

    firstHalf = firstHalf.split("").reverse().join("");
    secondHalf = secondHalf.split("").reverse().join("");

    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')

