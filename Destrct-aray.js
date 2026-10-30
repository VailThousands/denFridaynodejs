const province = ["bangkok", "ubon ratchathani", "phuket", "khon kaen", "nakhon ratchasima", "hat yai", "pattaya", "hua hin", "krabi", "koh samui"];
    // console.log(`I live in ${province[1]}`);
const [ubonratchathani, secondProvince, thirdProvince, ...otherProvinces] = province;
console.log(`I live in ${ubonratchathani}`);

