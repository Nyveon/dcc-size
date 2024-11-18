const ctx = document.getElementById("dcc-size");


const baseData = [
    { x: '2002-04', y: 341 },
    { x: '2002-11', y: 325 },
    { x: '2012-01', y: 304 },
    { x: '2012-11', y: 155 },
    { x: '2016-06', y: 235 },
    { x: '2016-12', y: 329 },
    { x: '2017-11', y: 370 },
    { x: '2018-11', y: 412 },
    { x: '2020-03', y: 506 },
    { x: '2021-04', y: 571 },
    { x: '2021-11', y: 526 },
    { x: '2022-11', y: 690 },
    { x: '2023-11', y: 823 },
    { x: '2024-11', y: 698 },
];

const chart = new Chart(ctx, {
	type: "line",
	data: {
		//labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "Claustro",
				data: baseData,
                backgroundColor: '#00ada0',
                borderColor: '#2c5aa0',
                borderWidth: 1
			},
		],
	},
    options: {
        scales: {
            x: {
                type: 'time',
                // time: {
                //     unit: 'month'
                // }
            },
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false,
    }
});

function updateChart() {
    const recentCheckbox = document.getElementById('recent');
    const recent = recentCheckbox.checked;
    const chartData = recent ? baseData.slice(-9) : baseData;

    chart.data.datasets[0].data = chartData;
    chart.update();
}

document.getElementById('recent').addEventListener('change', updateChart);
updateChart();


