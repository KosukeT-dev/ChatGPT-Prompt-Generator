const promptForm = document.getElementById('promptForm');
const promptOutput = document.getElementById('promptOutput');
const copyButton = document.getElementById('copyButton');

promptForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const role = document.getElementById('roleInput').value;
  const task = document.getElementById('taskInput').value;
  const format = document.getElementById('formatInput').value;

  const prompt = `Acting as a ${role} perform ${task} in ${format}.`;
  promptOutput.textContent = prompt;

  copyButton.disabled = false;
});

copyButton.addEventListener('click', function() {
  const promptText = promptOutput.textContent;
  navigator.clipboard.writeText(promptText).then(function() {
    alert('Prompt copied to clipboard!');
  });
});