// Last Updated Time
document.getElementById("lastUpdated").innerText =
    "Last Updated: " + new Date().toLocaleString();


// Apple Line Chart
new Chart(document.getElementById("appleChart"), {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Price ($)',
            data: [185, 190, 188, 192, 195],
            borderColor: 'blue',
            backgroundColor: 'rgba(0,0,255,0.1)',
            fill: true,
            tension: 0.4
        }]
    }
});


// Tesla Volume Chart
new Chart(document.getElementById("teslaChart"), {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Volume (Millions)',
            data: [20, 25, 18, 30, 28],
            backgroundColor: '#ff4b2b'
        }]
    }
});


// Portfolio Chart
new Chart(document.getElementById("portfolioChart"), {
    type: 'doughnut',
    data: {
        labels: ['Apple', 'Tesla', 'Amazon'],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
        }]
    }
});