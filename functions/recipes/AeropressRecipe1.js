export default function AeropressRecipe1(amtOfWater) {
  return buildInstructions(amtOfWater);
}

// interface instructions:
// [
//     {
//         title: '',
//         desc: ''
//     }
// ]
function buildInstructions(amtOfWater = 0) {
  const amtOfCoffee = amtOfWater / 18;
  let instructions = [
    {
      title: "Step 1",
      desc: `Put ${amtOfCoffee.toFixed(1)} grams of fine ground coffee into the Aeropress.`,
    },
    {
      title: "Step 2",
      desc: `Start the timer and pour in ${Number(amtOfWater).toFixed(1)} grams of water.`,
    },
    {
      title: "Step 3",
      desc: `At the two minute mark, give the aeropress a gentle swirl.`,
    },
    {
      title: "Step 4",
      desc: `Wait 30 more seconds, then begin to plunge slowly until you reach the bottom.`
    },
  ];

  return instructions;
}
