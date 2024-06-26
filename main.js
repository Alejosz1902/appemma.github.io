import './styles.css';

document.querySelector('#app').innerHTML = `
  <div class="max-w-max mx-auto bg-white p-6 rounded-lg shadow-md max-h-screen">
    <h1 class="text-2xl font-bold mb-4">Selecciona tu personaje favorito</h1>
    <div class="mb-4">
      <label for="childName" class="block text-sm font-medium text-gray-700">¿Como te llamas?</label>
      <input type="text" id="childName" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" placeholder="Ingresa el nombre" />
    </div>
    <div class="mb-4">
      <label for="gender" class="block text-sm font-medium text-gray-700">Género:</label>
      <select id="gender" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm">
        <option value="boy">Niño</option>
        <option value="girl">Niña</option>
      </select>
    </div>
    <div class="mb-4">
      <label for="textColor" class="block text-sm font-medium text-gray-700">Color del nombre:</label>
      <input type="color" id="textColor" class="mt-1 block w-full h-10" />
    </div>
    <div class="mt-8 text-center">
      <button id="prev" class="px-4 py-2 bg-sky-400 text-white rounded-md">Anterior</button>
      <img id="characterImage" class="inline-block mx-4 max-w-2xl max-h-96" src="assets/boy1.png" alt="Personaje" />
      <button id="next" class="px-4 py-2 bg-sky-400 text-white rounded-md">Siguiente</button>
    </div>
    
    <div class="p-4 bg-white bg-opacity-75 rounded-md text-center mx-auto -translate-y-20 font-sans">
      <span id="childLabel" class="text-4xl font-semibold">Nombre del niño/niña</span>
    </div>
  </div>
`;

const characters = {
  boy: ['src/assets/boy1.png', 'src/assets/boy2.png', 'src/assets/boy3.png', 'src/assets/boy4.png'],
  girl: ['src/assets/girl1.png', 'src/assets/girl2.png', 'src/assets/girl3.png', 'src/assets/girl4.png']
};

let currentCharacterIndex = 0;
let currentGender = 'boy';

const updateCharacter = () => {
  const characterImage = document.getElementById('characterImage');
  characterImage.src = characters[currentGender][currentCharacterIndex];
};

document.getElementById('prev').addEventListener('click', () => {
  currentCharacterIndex = (currentCharacterIndex - 1 + characters[currentGender].length) % characters[currentGender].length;
  updateCharacter();
});

document.getElementById('next').addEventListener('click', () => {
  currentCharacterIndex = (currentCharacterIndex + 1) % characters[currentGender].length;
  updateCharacter();
});

document.getElementById('gender').addEventListener('change', (event) => {
  currentGender = event.target.value;
  currentCharacterIndex = 0;
  updateCharacter();
});

document.getElementById('childName').addEventListener('input', (event) => {
  document.getElementById('childLabel').textContent = event.target.value || 'Nombre del niño/niña';
});

document.getElementById('textColor').addEventListener('input', (event) => {
  document.getElementById('childLabel').style.color = event.target.value;
});

updateCharacter();
