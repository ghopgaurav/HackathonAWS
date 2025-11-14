// ------------------
// message box
// ------------------
function changeMessage() {
  const msg = document.getElementById("message");
  const messages = [
    "Welcome to the MCP demo!",
    "User 1 updated this text.",
    "This is a test for your MCP tool.",
    "Frontend interaction successful.",
    "Random message chosen."
  ];
  const random = Math.floor(Math.random() * messages.length);
  msg.textContent = messages[random];
}

// ------------------
// chart setup
// ------------------
let chart;

function createChart() {
  const ctx = document.getElementById("demoChart");

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [{
        label: "Daily Tasks Completed",
        data: [3, 5, 2, 6, 4],
        backgroundColor: "rgba(0, 0, 0, 0.6)"
      }]
    }
  });
}

function updateChart() {
  const newValues = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 7) + 1
  );
  chart.data.datasets[0].data = newValues;
  chart.update();
}

// ------------------
// questionnaire
// ------------------
function submitAnswers() {
  const a1 = document.getElementById("q1").value;
  const a2 = document.getElementById("q2").value;

  const result = document.getElementById("qResult");
  result.textContent =
    "Response saved: Q1 = " + a1 + ", Q2 = " + a2;
}

// initialize chart on page load
window.onload = () => {
  createChart();
};
