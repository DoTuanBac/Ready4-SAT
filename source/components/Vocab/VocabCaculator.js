export function getMastered(item)
{
    var sumMastered=0;
    var sumAllMaster=0;
    for(let i of item)
    {
        sumMastered=sumMastered+i.mastered;
        sumAllMaster=sumAllMaster+i.allMaster;
    }
    return sumMastered+"/"+sumAllMaster;
  
}
export function getPercent(item)
{
    var sumMastered=0;
    var sumAllMaster=0;
    for(let i of item)
    {
        sumMastered=sumMastered+i.mastered;
        sumAllMaster=sumAllMaster+i.allMaster;
    }
    return sumMastered*100/sumAllMaster+"%";
}

export function getMasterediTem(item)
{
   
    return item.mastered+"/"+item.allMaster;
  
}
export function getPercentiTem(item)
{
   
    return item.mastered*100/item.allMaster+"%"
  
}