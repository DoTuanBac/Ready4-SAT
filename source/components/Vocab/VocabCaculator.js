export function getMasteredCategories(categories)
{
    var sumMastered=countMasteredCategory(categories);
    var sumCategories=Count(categories);
   
    return sumMastered+"/"+sumCategories;
  
}
export function getPercentCategories(categories)
{
    var sumMastered=countMasteredCategory(categories);
    var sumCategories=Count(categories);
 
    return sumMastered*100/sumCategories+"%";
}

export function getMasteredWords(words)
{
    var sumMastered= CountMasteredWord(words);
    var sumWords=Count(words);
    return sumMastered+"/"+sumWords;
  
}
export function getPercentWords(words)
{
    var sumMastered= CountMasteredWord(words);
    var sumWords=Count(words);
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
 function CountMasteredWord(words)
{
    var x=0;
    for(let i of words)
    {
        if(i.mastered==1)
        x++;
    }
    return x;
}
function countMasteredCategory(categories)
{
    var x=0;
    for(let i of categories)
    {
        if(Count(i.words)==CountMasteredWord(i.words))
        x++;
    }
    return x;
}