const login_dialog = document.querySelector(".login")
const open_button = document.querySelector(".open-login-button")
const close_button = document.querySelector(".close")

open_button.addEventListener("click", (event) => {
    login_dialog.showModal();
    document.body.style.overflow = "hidden"
})

close_button.addEventListener("click", (event) => {
    login_dialog.close();
    document.body.style.overflow = ""
})

// For chart.js

const ctx = document.getElementById('myChart');

new Chart(ctx, {
type: 'bar',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1
    }]
},
options: {
    scales: {
    y: {
        beginAtZero: true
    }
    }
}
});
 

