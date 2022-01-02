export default function FrenchPress(amtOfWater) {
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
      title: "Setup",
      desc: `Preheat your French Press with hot water (you can dump it into your mug to preheat that, too)`
    },
    {
      title: "Step 1",
      desc: `Put ${amtOfCoffee.toFixed(1)} grams of coarse ground coffee into the French Press.`,
    },
    {
      title: "Step 2",
      desc: `Start the timer and pour in ${amtOfWater} grams of water.`,
    },
    {
      title: "Step 3",
      desc: `At the four minute mark, use a spoon to stir the top, then remove the foam and fines off the top.`,
    },
    {
      title: "Step 4",
      desc: `Wait 5 or more minutes, careful not to disturb the French Press as all of the grounds sink to the bottom.`
    },
    {
      title: "Step 5",
      desc: `Press the filter just until the surface, not all the way down, and pour the coffee through it.`
    }
  ];

  return instructions;
}
