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
      desc: `After pre-wetting the filter with hot water, fill the v60 with ${amtOfCoffee.toFixed(1)} grams of medium ground coffee.`,
    },
    {
      title: "Step 2",
      desc: `Bloom the coffee using at most ${(amtOfCoffee * 2).toFixed(1)} grams of water`,
    },
    {
      title: "Step 3",
      desc: `Evenly pour ${(amtOfWater * 0.6).toFixed(1)} grams of water in 30 seconds`,
    },
    {
      title: "Step 4",
      desc: `Evenly pour ${(amtOfWater * 0.4).toFixed(1)} grams of water in the next 30 seconds`
    },
    {
      title: "Step 5",
      desc: `Using a spoon, stir gently once clockwise and once counterclockwise`
    },
    {
      title: "Step 6",
      desc: `Once the V60 has drained slightly and you feel comfortable doing so, gently swirl the V60`
    }
  ];

  return instructions;
}
