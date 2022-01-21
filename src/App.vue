<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Exo 2', Arial, Helvetica, sans-serif;
  background-color: #c1c1c1;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.app-input {
  width: 100%;
  height: 40px;
  padding: 0 24px;
  font-size: 12px;
  line-height: 14px;
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 10px;
}

.app-textarea {
  width: 100%;
  height: 143px;
  padding: 16px 35px 16px 21px;
  font-family: 'Exo 2', Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 10px;

  &--small {
    height: 60px;
  }
}

.app-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  color: #232322;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
}
</style>
