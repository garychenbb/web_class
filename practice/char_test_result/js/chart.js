const ctx = document.getElementById("chart");

Chart.defaults.font.family = "MaokenAssortedSans";

const data = {
    labels: ["忠誠度", "粘人度", "撈叨度", "活動度", "聰明度"],
    datasets: [
        {
            data: [65, 59, 90, 81, 56],
            fill: true,
            backgroundColor: "rgba(236, 227, 209, 0.8)",
            borderColor: "transparent",
            // pointBackgroundColor: "rgb(255, 99, 132)",
            // pointBorderColor: "#fff",
            // pointHoverBackgroundColor: "#fff",
            // pointHoverBorderColor: "rgb(255, 99, 132)",
        },
    ],
};

const config = {
    type: "radar",
    data: data,

    options: {
        scales: {
            r: {
                grid: {
                    circular: true,
                    color: "black",
                    lineWidth: (ctx) =>
                        ctx.index == data.datasets[0].data.length ? 3 : 0,
                },

                beginAtZero: true,

                // 對角線
                angleLines: {
                    borderDash: [10, 10],
                    lineWidth: 1,
                    color: "black",
                },

                pointLabels: {
                    font: {
                        size: 12,
                    },
                },

                // 標籤
                ticks: {
                    display: false, // 隱藏標籤
                    stepSize: 20,
                },
            },
        },

        plugins: {
            legend: {
                display: false, // label 隱藏
            },
        },

        elements: {
            point: {
                radius: 0, // 結果的角度圓點大小
            },

            line: {
                borderWidth: 5,
            },
        },
    },
};

const chart = new Chart(ctx, config);
