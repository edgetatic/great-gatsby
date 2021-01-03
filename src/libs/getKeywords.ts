// shouldn't waste time
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
export default function getKeywords(string: string, amount?: number) {
   const makeArray = string.toLowerCase().match(/\w\w\w\w+/g);

   if (!makeArray) return;

   const wordsArray = makeArray.filter(
      w =>
         !w.match(
            /am|is|are|this|that|for|from|to|in|out|what|that|little|with|time|then|over|first|just|mostly|more|also|doing|year|found|there|count|because|sake|some|already|needs|like/i
         )
   );

   const wordOccurrences = {};

   for (let i = 0; i < wordsArray.length; i++) {
      wordOccurrences['_' + wordsArray[i]] =
         (wordOccurrences['_' + wordsArray[i]] || 0) + 1;
   }

   const result = Object.keys(wordOccurrences).reduce((acc, currentKey) => {
      for (let i = 0; i < amount; i++) {
         if (!acc[i]) {
            acc[i] = {
               word: currentKey.slice(1, currentKey.length),
               occurrences: wordOccurrences[currentKey],
            };

            break;
         } else if (acc[i].occurrences < wordOccurrences[currentKey]) {
            acc.splice(i, 0, {
               word: currentKey.slice(1, currentKey.length),
               occurrences: wordOccurrences[currentKey],
            });

            if (acc.length > amount) acc.pop();
            break;
         }
      }

      return acc;
   }, []);

   return result.map(o => o.word).join(', ');
}
