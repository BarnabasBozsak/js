function getRandomInt(min,max)
{
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * ( maxFloored-minCeiled) + minCeiled);
}
function getOtoslottoSzamok()
{
   let szamok = [];
   for(let i = 0; i < 5; i++)
    {
        szamok[i] = getRandomInt(1,90);
    }
    return szamok;
}
console.log(getOtoslottoSzamok())
