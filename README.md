# TextCoder

TextCoder is a web application that encrypts and decrypts text using custom rules. The application also features a "Copy to Clipboard" function with a snackbar notification to enhance user experience. This project was developed by Victor Costa.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Encryption Rules](#encryption-rules)
- [Technologies Used](#technologies-used)

## Features

- Encrypt text using custom rules
- Decrypt text back to its original form
- Copy the encrypted or decrypted text to the clipboard
- Snackbar notification when text is copied to the clipboard
- Responsive design

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You only need a web browser to run this application locally.

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/your-username/TextCoder.git
   ```
2. Open the `index.html` file in your web browser.

## Usage

1. Type the text you want to encrypt or decrypt in the textarea on the left side of the page.
2. Click the "Encrypt" button to encrypt the text.
3. Click the "Decrypt" button to decrypt the text.
4. Click the "Copy" button to copy the resulting text to the clipboard.
5. If you clear the textarea, the page will reset to its initial state.

## Encryption Rules

The custom encryption rules are as follows:

- The letter "e" is converted to "enter"
- The letter "i" is converted to "imes"
- The letter "a" is converted to "ai"
- The letter "o" is converted to "ober"
- The letter "u" is converted to "ufat"

These rules are applied to both encryption and decryption processes.

## Screenshots

### Initial State
![Initial State](https://github.com/user-attachments/assets/f5b6f720-f42f-403c-94d0-251ef524d714)

### Encrypted Text
![Encrypted Text](https://github.com/user-attachments/assets/c17ade94-62f7-45c9-a4d4-86030f20924b)

### Decrypted Text
![Decrypted Text](https://github.com/user-attachments/assets/f3ad2296-24ad-44bc-8750-73c84715972d)

## Technologies Used

- HTML
- CSS
- JavaScript
