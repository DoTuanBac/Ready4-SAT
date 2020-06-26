

export function getMastered(tests)
{
    var sumMastered= CountMastered(tests);
    var sumWords=Count(tests);
    return sumMastered+"/"+sumWords;
  
}
export function getPercent(tests)
{
    var sumMastered= CountMastered(tests);
    var sumWords=Count(tests);
    return sumMastered*100/sumWords+"%"
  
}
 function Count(items)
{
    var x=0;
    for(let i of items)
    {
        x++;
    }
    return x;
}
 function CountMastered(tests)
{
    var x=0;
    for(let i of tests)
    {
        if(i.mastered==1)
        x++;
    }
    return x;
}
