document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const yourName = document.querySelector("#yourName").value;
  const crushName = document.querySelector("#crushName").value;
  const percentage = Math.floor(Math.random() * 100) + 1;

  const log = {
    yourName,
    crushName,
    percentage,
    time: new Date().toLocaleString()
  };

  // Load existing logs
  const existingLogs = JSON.parse(localStorage.getItem("loveLogs")) || [];

  // Add new log
  existingLogs.push(log);

  // Save back to localStorage
  localStorage.setItem("loveLogs", JSON.stringify(existingLogs));

  // Show result to user (optional)
  alert(`${yourName} ❤️ ${crushName} = ${percentage}%`);
});
