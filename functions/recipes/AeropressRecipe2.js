export default function AeropressRecipe2(amtOfWater) {
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
      desc: `Pour in ${(amtOfWater / 2).toFixed(1)} grams of water.`,
    },
    {
      title: "Step 3",
      desc: `Using the stir stick, gently stir for around 10 seconds.`,
    },
    {
      title: "Step 4",
      desc: `Plunge slowly until you reach the bottom.`
    },
    {
      title: "Step 5",
      desc: `You now have ${(amtOfWater / 2).toFixed(1)} grams of concentrated coffee. You can dilute it with equal parts water or steamed milk.` 
    }
  ];

  return instructions;
}
