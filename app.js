function encryptText(text) {
    if (!text) return '';  // Return an empty string if the text is undefined or empty
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decryptText(text) {
    if (!text) return '';  // Return an empty string if the text is undefined or empty
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function displayText(text) {
    const beforeTextDecoded = document.getElementById('beforeTextDecoded');
    const noTextFound = document.getElementById('noTextFound');
    const encryptedTextContainer = document.getElementById('encryptedTextContainer');
    const copyButton = document.getElementById('copyButton');

    if (beforeTextDecoded) beforeTextDecoded.style.display = 'none';  // Hide the image
    if (noTextFound) noTextFound.style.display = 'none';  // Hide "No text found" and the instructions
    if (encryptedTextContainer) {
        encryptedTextContainer.style.display = 'block';  // Show the text container
        encryptedTextContainer.textContent = text;
    }
    if (copyButton) copyButton.style.display = 'block';  // Show the copy button
}

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);

        // Show the snackbar
        const snackbar = document.getElementById('snackbar');
        snackbar.className = 'show';
        setTimeout(function () {
            snackbar.className = snackbar.className.replace('show', '');
        }, 3000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

function resetState() {
    const beforeTextDecoded = document.getElementById('beforeTextDecoded');
    const noTextFound = document.getElementById('noTextFound');
    const encryptedTextContainer = document.getElementById('encryptedTextContainer');
    const copyButton = document.getElementById('copyButton');

    if (beforeTextDecoded) beforeTextDecoded.style.display = 'block';  // Show the image
    if (noTextFound) noTextFound.style.display = 'block';  // Show "No text found" and the instructions
    if (encryptedTextContainer) encryptedTextContainer.style.display = 'none';  // Hide the text container
    if (copyButton) copyButton.style.display = 'none';  // Hide the copy button
}

document.addEventListener('DOMContentLoaded', function () {
    const textToDecode = document.getElementById('textToDecode');
    const copyButton = document.getElementById('copyButton');
    const encryptedTextContainer = document.getElementById('encryptedTextContainer');

    document.querySelector('.encrypt__style').addEventListener('click', function () {
        const inputText = textToDecode.value;
        const encryptedText = encryptText(inputText);
        console.log("Encrypted Text: ", encryptedText);
        displayText(encryptedText);
    });

    document.querySelector('.decrypt__style').addEventListener('click', function () {
        const inputText = textToDecode.value;
        const decryptedText = decryptText(inputText);
        console.log("Decrypted Text: ", decryptedText);
        displayText(decryptedText);
    });

    copyButton.addEventListener('click', function () {
        copyToClipboard(encryptedTextContainer.textContent);
    });

    textToDecode.addEventListener('input', function () {
        if (textToDecode.value === '') {
            resetState();
        }
    });
});
