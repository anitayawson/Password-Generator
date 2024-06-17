# Password Generator App

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./src/assets/images/Screenshot%202024-06-16%20at%2011.29.24 PM.png)

### Links

- Solution URL: [https://github.com/anitayawson/Password-Generator](https://github.com/anitayawson/Password-Generator)
- Live Site URL: [https://password-generator-liart-one.vercel.app/](https://password-generator-liart-one.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Sass preprocessor
- BEM class naming
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Material UI Components](https://mui.com/material-ui/all-components/) - For styles

### What I learned

During this project, I enhanced my understanding of the Clipboard API, specifically the write() method, which allows copying text to the system's clipboard. Here’s the implementation:

```js
const handleCopyPassword = () => {
  navigator.clipboard.writeText(password).then(() => {
    setPasswordCopied(true);
    setTimeout(() => setPasswordCopied(false), 3000);
  });
};
```

Additionally, developing a logic to calculate password strength was a unique challenge. The logic assesses the password based on its length and the presence of various character types (uppercase, lowercase, numbers, and symbols):

```js
const calculateStrength = (password) => {
  let strengthLevel = 0;
  if (password.length > 7) strengthLevel++;
  if (/[A-Z]/.test(password)) strengthLevel++;
  if (/[a-z]/.test(password)) strengthLevel++;
  if (/[0-9]/.test(password)) strengthLevel++;
  if (/[^A-Za-z0-9]/.test(password)) strengthLevel++;

  if (strengthLevel === 1) setStrength("Too Weak!");
  else if (strengthLevel === 2) setStrength("Weak");
  else if (strengthLevel === 3) setStrength("Medium");
  else if (strengthLevel >= 4) setStrength("Strong");
  else setStrength("");
};
```
