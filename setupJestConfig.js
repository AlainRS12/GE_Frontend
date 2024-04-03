import fs from 'fs';
import path from 'path';

const jestConfig = `
export default {
 testEnvironment: 'jsdom',
 moduleNameMapper: {
    '\\\\.(css|less|scss|sass)$': 'identity-obj-proxy',
 },
 setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
`;

const configPath = path.join(process.cwd(), 'jest.config.js');

fs.writeFile(configPath, jestConfig, (err) => {
 if (err) {
    console.error('Error al crear el archivo de configuración de Jest:', err);
    return;
 }
 console.log('Archivo de configuración de Jest creado exitosamente.');
});