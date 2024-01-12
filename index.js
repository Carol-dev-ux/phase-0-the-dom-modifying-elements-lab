// Write your code here!
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

const championName = 'Carol';
newHeader.innerHTML = `Carol is the champion`;





