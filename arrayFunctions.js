function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
function getOtoslottoSzamok() {
  let szamok = [];
  for (let i = 0; i < 5; i++) {
    szamok[i] = getRandomInt(1, 90);
  }
  return szamok;
}
console.log(getOtoslottoSzamok());
function getSortedArray(tomb) {
  return tomb.toSorted();
}
let szamok = [34, 12, 23, 67, 78];
let tippek = [34, 45, 67, 78, 10];

function getTalalatok(szamok, tippek) {
  let db = 0;
  szamok.toSorted();
  tippek.toSorted();
  for (let i = 0; i < szamok.length; i++) {
    if (szamok.includes(tippek[i])) {
      db += 1;
    }
  }
  return db;
}
console.log(getTalalatok(szamok, tippek));
function getHaviLottoszamok() {
  let havi = [];
  for (let i = 0; i < 4; i++) {
    havi[i] = getOtoslottoSzamok();
  }
  return havi;
}
console.log(getHaviLottoszamok());
let havi = getHaviLottoszamok();
function getHaviKihuzottSzamok(havi) {
  let szamok = [];
  for(let x of havi)
  {
   for(let arr of x)
   {
    if(!szamok.includes(arr))
    {
        szamok.push(arr);
    }
   }
  }
  return szamok;
}
function getiHaviStatisztika(szamok)
{
    szamok = [];
    getHaviLottoszamok().forEach( i => 
        {
        if(!szamok.includes(i))
        {
            szamok.push(i);
        }
    }
    );
    return szamok.sort();
}

