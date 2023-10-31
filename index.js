function shout(string) {
    return string. toUpperCase();
}
"Hello!" .toUpperCase(); // 'HELLO!'
//

function whisper(string) {
    return string. toLowerCase();
}
"hello." .toLowerCase(); // 'hello';
//

function logShout(string) {
    console.log(string.toUpperCase());
}
"Hello Spy!" .toUpperCase(); // 'HELLO SPY!'
// 

function logWhisper(string) {
    console.log(string.toLowerCase());
}
"Hello Grandma" .toLowerCase(); // 'Hello Grandma.'
//

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    } if (string.toUpperCase() === string) {
        return "YES INDEED!"
    } if (string === 'Let\'s have dinner together!') {
        return "I would love to!"
    }
}
//



