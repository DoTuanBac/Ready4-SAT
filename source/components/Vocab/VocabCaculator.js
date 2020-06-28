export function getMasteredCategories(categories)
{
    let sumMastered=countMasteredCategory(categories);
    let sumCategories=Count(categories);

    return sumMastered+"/"+sumCategories;

}
export function getPercentCategories(categories)
{
    let sumMastered=countMasteredCategory(categories);
    let sumCategories=Count(categories);

    return sumMastered*100/sumCategories+"%";
}

export function getMasteredWords(words)
{
    let sumMastered= CountMasteredWord(words);
    let sumWords=Count(words);
    return sumMastered+"/"+sumWords;

}
export function getPercentWords(words)
{
    let sumMastered= CountMasteredWord(words);
    let sumWords=Count(words);
    return sumMastered*100/sumWords+"%"

}
 function Count(items)
{
    let x=0;
    for(let i of items)
    {
        x++;
    }
    return x;
}
 function CountMasteredWord(words)
{
    let x=0;
    for(let i of words)
    {
        if(i.mastered===1)
        x++;
    }
    return x;
}
function countMasteredCategory(categories)
{
    let x=0;
    for(let i of categories)
    {
        if(Count(i.words)===CountMasteredWord(i.words))
        x++;
    }
    return x;
}
