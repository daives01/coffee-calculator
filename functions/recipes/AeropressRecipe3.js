export default function AeropressRecipe3(amtOfWater) {
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
      desc: `With the Aeropress upside down and plunger on, put ${amtOfCoffee.toFixed(1)} grams of fine ground coffee into the Aeropress.`,
    },
    {
      title: "Step 2",
      desc: `Pour in ${Number(amtOfWater).toFixed(1)} grams of water. (NOTE: The inverted method inherently decreases capacity)`,
    },
    {
      title: "Step 3",
      desc: `At the two minute mark, put on the cap (with a filter) and carefully flip over onto desired beverage vessel.`,
    },
    {
      title: "Step 4",
      desc: `Plunge slowly until you reach the bottom.`
    },
  ];

  return instructions;
}
