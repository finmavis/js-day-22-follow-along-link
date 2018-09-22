// Get all element that want to highlight
const triggers = document.querySelectorAll('a');
// Highlight element
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  // Get position of link element
  const linkCoords = this.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    left: linkCoords.left,
    // Handle when page is scrolled
    top: linkCoords.top + window.scrollY
  }

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
};

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

