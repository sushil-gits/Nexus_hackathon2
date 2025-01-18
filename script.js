// Elements
const dailyGoalInput = document.getElementById("daily-goal");
const setGoalBtn = document.getElementById("set-goal-btn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const wordCountInput = document.getElementById("word-count");
const logBtn = document.getElementById("log-btn");
const logTable = document.getElementById("log-table");
const quoteText = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote-btn");
const themeToggleBtn = document.getElementById("theme-toggle");

// Variables
let dailyGoal = 0;
let currentProgress = 0;
let quotes = [
  "Keep writing; the world needs your story.",
  "A writer is simply someone who writes.",
  "You can always edit a bad page, but you can’t edit a blank page.",
  "Write every day, even if it's just a few words."
];

// Set Goal
setGoalBtn.addEventListener("click", () => {
  dailyGoal = Number(dailyGoalInput.value);
  if (dailyGoal > 0) {
    alert(`Goal set to ${dailyGoal} words!`);
    updateProgress();
  }
});

// Log Progress
logBtn.addEventListener("click", () => {
  const words = Number(wordCountInput.value);
  if (words > 0) {
    currentProgress += words;

    const row = logTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = new Date().toLocaleString();
    cell2.textContent = words;

    updateProgress();
    wordCountInput.value = "";
  }
});
// Elements
const notesTextarea = document.getElementById("daily-notes");
const saveNotesBtn = document.getElementById("save-notes-btn");
const notesList = document.getElementById("notes-list");

// Save Notes
saveNotesBtn.addEventListener("click", () => {
  const note = notesTextarea.value.trim();
  if (note) {
    const li = document.createElement("li");
    li.textContent = note;
    notesList.appendChild(li);

    // Clear the textarea
    notesTextarea.value = "";

    // Animate the note
    li.classList.add("animated");
    setTimeout(() => li.classList.remove("animated"), 500);
  } else {
    alert("Please write something before saving.");
  }
});


// Update Progress
function updateProgress() {
  const percentage = dailyGoal ? Math.min((currentProgress / dailyGoal) * 100, 100) : 0;
  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `Progress: ${percentage.toFixed(2)}%`;

  // Animate the progress bar fill
  progressBar.classList.add("animated");
  setTimeout(() => progressBar.classList.remove("animated"), 500);
}

// Generate New Quote
newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];

  // Animate the quote change
  quoteText.classList.add("animated");
  setTimeout(() => quoteText.classList.remove("animated"), 1000);
});

// Theme Toggle
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Animate the theme toggle
  themeToggleBtn.classList.add("animated");
  setTimeout(() => themeToggleBtn.classList.remove("animated"), 500);
});
