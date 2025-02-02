function submitFeelings() {
  const form = document.getElementById('feelingForm');
  const checkboxes = form.querySelectorAll('input[name="feeling"]:checked');
  const selectedFeelings = Array.from(checkboxes).map(checkbox => checkbox.value);

  if (selectedFeelings.length > 0) {
    // Store the selected feelings in localStorage
    localStorage.setItem('selectedFeelings', JSON.stringify(selectedFeelings));

    // Redirect to the next page
    window.location.href = 'second_page.html';
  } else {
    // Display a message asking the user to select at least one feeling
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Please select at least one feeling.";
    resultDiv.style.display = 'block';
  }
}
// General pool of random solutions
const solutionsData = [
  "Why not try a quick 10 minute walk? It can clear your head and boost your mood with some fresh air",
  "How about a few simple stretches or yoga? It'll help release some tension and get your blood flowing.",
  "A burst of activity - like dancing or jumping around - might be just what you need for a quick energy boost.",
  "Take a moment to practice the 4-7-8 breathing technique. It's a great way to calm your nerves and center yourself.",
  "Try a progressive muscle relaxation exercise. It can melt away built-up stress, one muscle at a time.",
  "Spend 5 minutes listening to guided meditation. It's a gentle way to quiet the mind and find a moment of peace.",
  "The 5-4-3-2-1 grounding technique (naming 5 things you see, 4 you feel, and so on) can gently pull you back to present.",
  "Grab an icecube or something textured. The sensory focus can help snap you out of a spiraling thought loop.",
  "Doodle, draw or journal for 10 minutes. It's a wonderful outlet to process your feelings or just have some creative fun!",
  "Play a quick online game, like Tetris. it can be suprisingly effective at distracting your mind and giving your hit of focus.",
  "Put on some calming or upbeat music. It's like a little musical hug that can instantly shift your mood.",
  "Why not reach out your friend or family member? A small connection can remind you that you're not alone.",
  "Write a letter to your future self. It's a gentle way to reflect on where you are now and where you want to go.",
  "Join a supportive online community or forum. It's always comforting to hear from others who truly understand.",
  "Put on some calming ASMR or white noise. It's soothing, and the gentle sounds can quiet a restless mind.",
  "Try a bedtime body scan meditation. It's a lovely way to let go of the day and prepare for restful sleep",
  "Write down everything on your mind for 5 minutes. Emptying it out on paper can create a suprising sense of relief.",
  "Jot down 3 things you did well today. It'll give you little boost of self-kindness and show you that you're making progress.",
  "Write a compassionate letter to yourself, as if you were speaking to a close friend. Sometimes self-kindness is the best balm",
  "Take 5 minutes of worry time - just scribble out every concern you have. Getting it out can make it feel a little less overwhelming.",
  "Watch a short calming video that makes you happy, like nature scenes or your favorite animal. It's an easy way to lift your spirits.",
  "Write down your strengths and achievements. Sometimes a little reminderof what you're capable of can do wonders for your confidence.",
  "Take a moment to think of 3 unique qualities you love about yourself. It's a gentle act self - appreciation",
  "Do one small task, like tidying up a drawer or watering a plant. That tiny sense of accomplishment can snowball into motivation.",
  "Create a mind map of what's on your mind and how to break it down. It's a simple way to find a little clarity."
];

function getRandomSolutions(numberOfSolutions) {
  const shuffled = solutions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfSolutions); // Pick the first numberOfSolutions items
}

// Format the random solutions into a string
function formatSolutionsText(selectedSolutions) {
  let text = "I see you are feeling overwhelmed.<br>Here are some suggestions:<br>";
  selectedSolutions.forEach((solution, index) => {
    text += `${index + 1}. ${solution} <br>`;
  });
  return text;
}

// Generate random solutions and format them
const randomSolutions = getRandomSolutions(3); // Change the number here if you want more or fewer solutions
const text = formatSolutionsText(randomSolutions);

// Function to type the text letter by letter
function typeText(elementId, text, index, displayedText = "") {
  const splitText = text.split(/(<br\s*\/?>)/i); // Capture <br> tags

  if (index < splitText.length) {
    const part = splitText[index];

    if (part.toLowerCase().includes('<br')) {
      displayedText += "<br>";
      document.getElementById(elementId).innerHTML = displayedText;
      setTimeout(() => typeText(elementId, text, index + 1, displayedText), 50);
    } else {
      let currentPartIndex = 0;
      const typeChars = () => {
        if (currentPartIndex < part.length) {
          displayedText += part.charAt(currentPartIndex);
          document.getElementById(elementId).innerHTML = displayedText;
          currentPartIndex++;
          setTimeout(typeChars, 50); // Adjust speed here
        } else {
          setTimeout(() => typeText(elementId, text, index + 1, displayedText), 50);
        }
      };
      typeChars();
      return;
    }
  }
}

// Use the text typing logic
typeText("yourElementId", text, 0);
