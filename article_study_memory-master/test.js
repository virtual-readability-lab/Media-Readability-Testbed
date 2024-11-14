function balancedLatinSquare2(array, participantId) {
   var result = [];
   // Based on "Bradley, J. V. Complete counterbalancing of immediate sequential effects in a Latin square design. J. Amer. Statist. Ass.,.1958, 53, 525-528. "
   for (var i = 0, j = 0, h = 0; i < array.length; ++i) {
    var val = 0;
    if (i < 2 || i % 2 != 0) {
     val = j++;
    } else {
     val = array.length - h - 1;
     ++h;
    }
  
    var idx = (val + participantId) % array.length;
    result.push(array[idx]);
   }
  
   if (array.length % 2 != 0 && participantId % 2 != 0) {
    result = result.reverse();
   }
  
   return result;
  }

const fonts = ['Times New Roman', 'Roboto', 'Georgia']
const states = ['Link', 'No Link']
  
const output = []
for (let font of fonts) {
    for (const state of states) {
        output.push(`${font}_${state}`)
    }
}

console.log(output)

let i = 0
while (i < 6) {
    console.log(balancedLatinSquare2(output, i))
    i++
}