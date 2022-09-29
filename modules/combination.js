const loadColor = () => {
  const changeColors = document.getElementsByClassName('book');
  for (let l = 0; l < changeColors.length; l++) {
    if (l % 2 === 0) {
      changeColors[l].style.backgroundColor = 'rgba(221, 221 ,221)';
    } else {
      changeColors[l].style.backgroundColor = 'rgba(255, 255 ,255)';
    }
  }
}

export default loadColor;
