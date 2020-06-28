export function getMastered(tests) {
    let sumMastered= CountMastered(tests);
    let sumWords=Count(tests);
    return sumMastered+"/"+sumWords;

}

export function getPercent(tests) {
    let sumMastered= CountMastered(tests);
    let sumWords=Count(tests);
    return sumMastered*100/sumWords+"%"

}

 function Count(items) {
     let x=0;
    for(let i of items)
    {
        x++;
    }
    return x;
}

function CountMastered(tests) {
    let x=0;
    for(let i of tests)
    {
        if(i.mastered===1)
        x++;
    }
    return x;
}
