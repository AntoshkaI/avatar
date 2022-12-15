



const startPath = './assets'
const countBg = 4;
const countTop = 8;
const countMouthes = 6;
const countEyes = 5;
const countGlasses = 2;
const countEyebrows = 6;
const countBody = 6;
const countPets = 4;

const generateButton = document.getElementById('generate-button');
const avatar = document.getElementById('avatar');
const avatarTop = document.getElementById('avatar-top');
const avatarMouth = document.getElementById('avatar-mouth');
const avatarEye = document.getElementById('avatar-eyes');
const avatarGlasses = document.getElementById('avatar-glasses');
const avatarEyebrows = document.getElementById('avatar-eyebrows');
const avatarBody = document.getElementById('avatar-body');
const avatarPets = document.getElementById('avatar-pets');

const random = (count) => {
  return Math.floor(Math.random() * count) + 1
}

const setElementSrc = (nameFolder, count) => {
  return `${startPath}/${nameFolder}/${random(count)}.svg`
}
 
const generateAvatar = () => {
  avatar.style.backgroundImage = `url(${startPath}/bg/${random(countBg)}.jpeg)`
  avatarTop.src = setElementSrc('top', countTop)
  avatarMouth.src = setElementSrc('mouthes', countMouthes)
  avatarEye.src = setElementSrc('eyes', countEyes)
  avatarGlasses.src = setElementSrc('glasses', countGlasses)
  avatarEyebrows.src = setElementSrc('eyebrows', countEyebrows)
  avatarBody.src = setElementSrc('body', countBody)
  avatarPets.src = setElementSrc('pets', countPets)
}

addEventListener('load', () => generateAvatar())

generateButton.addEventListener('click', generateAvatar)
