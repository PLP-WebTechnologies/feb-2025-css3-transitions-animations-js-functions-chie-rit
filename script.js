const moods = {
  happy: {
    title: "You're Feeling Happy!",
    quote: "Happiness is not by chance, but by choice.",
    image: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "#ffe57f"
  },
  focused: {
    title: "Stay Focused!",
    quote: "Focus is the key to success.",
    image: "https://images.pexels.com/photos/3563697/pexels-photo-3563697.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "#b2ebf2"
  },
  calm: {
    title: "Peaceful and Calm",
    quote: "Keep calm and carry on.",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "#c8e6c9"
  }
};

function setMood(moodKey) {
  const mood = moods[moodKey];
  document.body.style.backgroundColor = mood.bgColor;
  document.getElementById("mood-title").textContent = mood.title;
  document.getElementById("mood-quote").textContent = mood.quote;
  const img = document.getElementById("mood-image");
  img.src = mood.image;
  img.classList.add("animate");

  setTimeout(() => img.classList.remove("animate"), 700);

  document.getElementById("dashboard").classList.remove("hidden");

  localStorage.setItem("userMood", moodKey);
}

window.onload = () => {
  const savedMood = localStorage.getItem("userMood");
  if (savedMood) {
    setMood(savedMood);
  }
};