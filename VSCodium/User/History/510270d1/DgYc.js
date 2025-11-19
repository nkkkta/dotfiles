const svg = document.getElementById('cubes');

svg.onclick = (e) => {
    const colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue','purple']
    const random = () => colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.cssText = `
        --dark-pink: ${random()};
        --saturated-pink: ${random()};
        --light-pink: ${random()};
        }
    `
}