# Configurando JEST

### Configurado o node
> npm init -y

### instalando o jest
> npm install --save-dev jest

### Package JSON
{
  "type": "module",
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  },
  "devDependencies": {
    "jest": "^29.7.0"
  }
}
