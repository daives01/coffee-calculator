export default function V60(amtOfWater) {
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
      desc: `After pre-wetting the filter with hot water, fill the v60 with ${amtOfCoffee} grams of medium ground coffee.`,
    },
    {
      title: "Step 2",
      desc: `Bloom the coffee using at most ${amtOfCoffee * 2} grams of water`,
    },
  ];

  return instructions;
}
