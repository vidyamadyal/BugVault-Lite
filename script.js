document.addEventListener("DOMContentLoaded", () => {
  const bugForm = document.getElementById("bugForm");
  const bugList = document.getElementById("bugList");
  const successMessage = document.getElementById("successMessage");

  // Fetch existing bugs
  fetch("http://localhost:5000/api/bugs")
    .then((res) => res.json())
    .then((bugs) => {
      bugs.forEach((bug) => renderBug(bug));
    });

  // Submit new bug
  bugForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const severity = document.getElementById("severity").value;

    if (!title || !description) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/bugs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, severity }),
      });

      const data = await response.json();
      renderBug(data);
      bugForm.reset();

      successMessage.style.display = "block";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
    } catch (error) {
      console.error("Error submitting bug:", error);
      alert("Something went wrong. Please try again.");
    }
  });
});

function renderBug(bug) {
  const bugItem = document.createElement("li");
  bugItem.setAttribute("data-id", bug._id);
  bugItem.setAttribute("data-severity", bug.severity);

  bugItem.innerHTML = `
    <strong>${bug.title}</strong><br />
    <em>${bug.description}</em><br />
    <span>Severity: ${bug.severity}</span><br />
    <button onclick="deleteBug('${bug._id}')">🗑️ Delete</button>
    <button onclick="editBug('${bug._id}')">✏️ Edit</button>
  `;

  document.getElementById("bugList").appendChild(bugItem);
}

function deleteBug(id) {
  fetch(`http://localhost:5000/api/bugs/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      const bugItem = document.querySelector(`[data-id="${id}"]`);
      if (bugItem) bugItem.remove();
    })
    .catch((err) => {
      console.error("Error deleting bug:", err);
      alert("Failed to delete bug.");
    });
}

function editBug(id) {
  const bugItem = document.querySelector(`[data-id="${id}"]`);
  const currentTitle = bugItem.querySelector("strong").innerText;
  const currentDescription = bugItem.querySelector("em").innerText;
  const currentSeverity = bugItem.getAttribute("data-severity");

  const title = prompt("Edit title:", currentTitle);
  const description = prompt("Edit description:", currentDescription);
  const severity = prompt("Edit severity (Low, Medium, High):", currentSeverity);

  if (!title || !description || !severity) {
    alert("All fields are required.");
    return;
  }

  fetch(`http://localhost:5000/api/bugs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, severity }),
  })
    .then((res) => res.json())
    .then((updatedBug) => {
      bugItem.setAttribute("data-severity", updatedBug.severity);
      bugItem.innerHTML = `
        <strong>${updatedBug.title}</strong><br />
        <em>${updatedBug.description}</em><br />
        <span>Severity: ${updatedBug.severity}</span><br />
        <button onclick="deleteBug('${updatedBug._id}')">🗑️ Delete</button>
        <button onclick="editBug('${updatedBug._id}')">✏️ Edit</button>
      `;
    })
    .catch((err) => {
      console.error("Error editing bug:", err);
      alert("Failed to update bug.");
    });
}