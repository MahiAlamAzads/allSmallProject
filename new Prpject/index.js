let xValues= [33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22];
let yValues= [33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22,33,54,65,78,55,44,33,22,65,12,18,44,3,34,55,44,3,34,9,8,66,54,3,23,24,54,43,22];
let barColors= ["#470099",
"#79db47",
"#dbbb0a",
"#ef1519",
"#4e0faa",
"#9f5fbf",
"#b4553a",
"#f46796",
"#b477ab",
"#a34a2b",
"#e497b9",
"#0440be",
"#52511f",
"#9cfb70",
"#c8dc13",
"#af4105",
"#3b4852",
"#ce01fb",
"#82b25c",
"#00246c",
"#0f9851",
"#a645ac",
"#7b9889",
"#b0ccac",
"#966cec",
"#941ac0",
"#4f11fa",
"#695236",
"#21659d",
"#db2600",
"#570ee1",
"#9f6129",
"#c3e25d",
"#16663c",
"#40ebc8",
"#559b39",
"#88d19a",
"#ded593",
"#aa2c6d",
"#792735",
"#a88676",
"#e94851",
"#4c6425",
"#5140c1",
"#af9168",
"#d3bc2d",
"#694dc1",
"#1298cf",
"#fbc048",
"#bd6f0b",
"#0ec734",
"#ffc7cf",
"#ce9667",
"#c7bb77",
"#f2ba5b",
"#a93a42",
"#f50a80",
"#907aed",
"#7653df",
"#933090",
"#f17795",
"#43d9c7",
"#cb33de",
"#c0cdf1",
"#ace43f",
"#6f82d0",
"#9caa82",
"#f790b7",
"#fc307c",
"#acfd9c",
"#e36fde",
"#315d22",
"#752142",
"#d0d5de",
"#9b15d3",
"#3be836",
"#5d740d",
"#69353d",
"#4c1b30",
"#dbb48f",
"#d08413",
"#37cf18",
"#51ab6d",
"#ad35f2",
"#aaecde",
"#d5fec0",
"#127284",
"#cf1d51",
"#4508d0",
"#24970f",
"#aec6c4",
"#029945",
"#52d437",
"#5500ff",
"#cd4fac",
"#51bcb5",
"#507297",
"#cccb1a",
"#c0cf01",
"#6f7bc2",
"#2df39c",
"#c48ef8",
"#422e63",
"#5f2be7",
"#f5ea66",
"#2759c4",
"#d762a7",
"#2e70fd",
"#852730",
"#a8247b",
"#e0643c",
"#5008bf",
"#4b365d",
"#70b0d4",
"#a1750c",
"#32a387",
"#6b4099",
"#38297a",
"#cce514",
"#900cca",
"#8484c1",
"#b5b7f0",
"#e9ef06",
"#3b5a1e",
"#bfcc50",
"#dc1e3b",
"#d351a6",
"#338db2",
"#5a025c",
"#c983e3",
"#67214d",
"#a3003b",
"#9bf618",
"#08904c",
"#dd576f",
"#77c06a",
"#d18ff0",
"#44cfdd",
"#407dd7",
"#07595e",
"#796068",
"#44c94e",
"#831166",
"#02fccf",
"#28672b",
"#896af4",
"#6597bb",
"#d50253",
"#6ef985",
"#aeec27",
"#7141f2",
"#821930",
"#071233",
"#61343f",
"#a96704",
"#4f1cee",
"#fc105f",
"#fd8171",
"#0995b6",
"#5a8de9",
"#927f4c",
"#570d64",
"#d0c37b",
"#150fd7",
"#15e233",
"#5c8d28",
"#1b6b02",
"#128922",
"#1dcf68",
"#0ce14d",
"#32e4a6",
"#c09bfb",
"#931232",
"#8826cb",
"#f7eaa2",
"#00dcd2",
"#3cd6ed",
"#1c1346",
"#dcde3f",
"#48b386",
"#5934eb",
"#a60028",
"#35bcfd",
"#086245",
"#d37ea5",
"#e47e55",
"#5e5d7c",
"#1b197d",
"#98499f",
"#3563bb",
"#b556f1",
"#4d0d15",
"#dbeeca",
"#0732f7",
"#b83854",
"#7009af",
"#4b5a6a",
"#bfb07a",
"#e85da5",
"#e18512",
"#31351a",
"#cd9d5d",
"#d7a5cd",
"#65843e",
"#776c51",
"#4d78f0",
"#f45686",
"#b919b3",
"#3fd582",
"#c08f6d",
"#0ed9cf",
"#7291a9",
"#6e5975",
"#7996b6",
"#a45b90",
"#f2055d",
"#69b908",
"#dd4f37",
"#34416c",
"#003329",
"#2f53ce",
"#153086",
"#5d21fe",
"#87b097",
"#eb2e77",
"#ad8982",
"#219768",
"#e4d677",
"#224db9",
"#47149c",
"#8caa2d",
"#6ae3de",
"#c7ae9f",
"#6266f3",
"#deed2c",
"#5d9215",
"#82b463",
"#c54b85",
"#8b5a8b",
"#5d10c7",
"#d13039",
"#a79c3f",
"#458da6",
"#8faf7a",
"#08833f",
"#a54bb7",
"#7b101d",
"#35b40d",
"#7406b4",
"#419111",
"#8ea93c",
"#152897",
"#cd3a69"];
let total = 0;
let elementTotal = 0;
for(let i = 0;i<yValues.length;i++){
   total+=yValues[i];
   elementTotal++;
}
document.getElementById('totalValue').innerText = total;
document.getElementById('elementTotal').innerText = elementTotal;
//* Chart of Pie and Bar
const myChart = new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "My Expense",
    },
  },
});

const myChart2 = new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    title: {
      display: true,
      text: "My Expense",
    },
  },
});

// * Submit name and value
function inputSubmit() {
  let inputName = document.querySelector("#inputName").value;
  let inputNumber = document.querySelector("#inputNumber").value;

  if (inputName && inputNumber) {
    xValues.push(inputName);
    yValues.push(Number(inputNumber));
    // Generate a random color
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    barColors.push(randomColor);

    // Update the charts
    myChart.update();
    myChart2.update();

    // Clear input fields
    document.querySelector("#inputName").value = "";
    document.querySelector("#inputNumber").value = "";
  }
}

//* for removing specific part in chart
function removeItem() {
  let inputs = document.getElementById("removeIndex");
  let userIn = parseInt(inputs.value); // Convert to 0-based index
  let userIndex = userIn-1;
  if (!isNaN(userIndex) && userIndex >= 0 && userIndex < xValues.length) {
    // Remove the item at the given index from each array
    yValues.splice(userIndex, 1); // Remove 1 item at the specified index
    barColors.splice(userIndex, 1); // Remove 1 item at the specified index
    xValues.splice(userIndex, 1); // Remove 1 item at the specified index

    // Update the charts after removal
    myChart.update();
    myChart2.update();
  } else {
    alert("Please enter a valid index.");
  }
}


//* for sorting the chart
function sortBars() {
    // Combine the arrays into an array of objects
    const combined = xValues.map((x, i) => ({
        x,
        y: yValues[i],
        color: barColors[i]
    }));

    // Sort the combined array by 'y' (descending order)
    combined.sort((a, b) => b.y - a.y);

    // Update the original arrays from the sorted combined array
    xValues = combined.map(({ x }) => x);
    yValues = combined.map(({ y }) => y);
    barColors = combined.map(({ color }) => color);

    // Log the arrays to check if they're being updated
    console.log("Sorted xValues:", xValues);
    console.log("Sorted yValues:", yValues);
    console.log("Sorted barColors:", barColors);

    // Update the chart data with the new sorted arrays
    myChart.data.labels = xValues;
    myChart.data.datasets[0].data = yValues;
    myChart.data.datasets[0].backgroundColor = barColors;

    myChart2.data.labels = xValues;
    myChart2.data.datasets[0].data = yValues;
    myChart2.data.datasets[0].backgroundColor = barColors;

    // Now update the charts
    myChart.update();
    myChart2.update();
}



