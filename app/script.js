function generateGrayButton() {
    const container = document.getElementById('container');
    const grayButton = document.createElement('button');
    grayButton.innerHTML = 'Gray Button';
    grayButton.style.backgroundColor = '#888';
    grayButton.style.color = '#fff';
    grayButton.style.padding = '15px 30px';
    grayButton.style.border = 'none';
    grayButton.style.cursor = 'pointer';
    grayButton.style.marginTop = '20px';
    grayButton.addEventListener('click', generateGrayButton);

    container.appendChild(grayButton);
}

document.getElementById('generate-button').addEventListener('click', generateGrayButton);
