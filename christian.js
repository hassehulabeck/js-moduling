var miniArray2, miniArray1, fullArray ;

function createMiniArrays (amount) {
    var i = 1, a = 1;
    if (amount < 2 || amount == undefined) {
        return "Is not possible to create such a thing, what are you even thinking dummy?";
    } else {
        miniArray2 = [], miniArray1 = [];
        for (i, a; i < amount, a <= amount; i++, a++) {
            miniArray1.push(i);
            miniArray2.push(a);
        }
        shuffle(miniArray1);
        shuffle(miniArray2);
        console.log(miniArray1, miniArray2);
    }
    return "Success!";
}

function createFullArray () {
    if (miniArray1 && miniArray2 !== undefined ) {
        if (miniArray1[miniArray1.length-1] == miniArray2[0]) {
            shuffle(miniArray1);
            return createFullArray();
        } else {
            fullArray = miniArray1.concat(miniArray2);
            return fullArray;
        }
    } else {
        console.log("You can't create nothing from nothing");
    }
}

function shuffle(array) {
    var x, z, randomNum;
    for (x = array.length - 1; x > 0; x--) {
        randomNum = Math.floor(Math.random() * (x + 1));
        z = array[x];
        array[x] = array[randomNum];
        array[randomNum] = z;
    }
    return array;
}
