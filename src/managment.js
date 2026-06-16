let volume = document.getElementById('volume-icon');
let volumeSlider = document.getElementById('volume-slider');
let audio = document.getElementById('audio');

export function manageVolume() {
    volume.addEventListener('click', () => {
        if(volumeSlider.style.display === 'block') {
            volumeSlider.style.display = 'none';
        } else {
            volumeSlider.style.display = 'block';
        }
    });
    volumeSlider.addEventListener('input', () => {
        let audio = document.getElementById('audio');
        audio.volume = volumeSlider.value / 100;
    });
}


// Это мелочь, но предпочтительнее вызывать такие функции одном файле,
// где происходит запуск приложения - в index.js было самое правильное место, а здесь оставить exported function
// Либо не экспортировать функцию если этого не требуется
manageVolume();