const COLORS: readonly string[] = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white'
];

export function decodedValue(arrayOfColors:readonly string[]):number {
  if(arrayOfColors.length >= 2 ){
  const colorOne:number = COLORS.indexOf(arrayOfColors[0])
  const colorTwo:number = COLORS.indexOf(arrayOfColors[1])
  const numberArray: [number, number] = [colorOne, colorTwo]
  return Number(numberArray.join(""));
  }else {
  throw new Error('At least two colors are required')
    }
}


// readonly string[] qilganim sababi keladigan ranglarni ham ichkarida o'zgarib ketishini oldini olaman
// [number, number]  qilib tuple qilib qo'ydim, shunda faqat 1 chi va 2 chi element ko'rsatildi 



