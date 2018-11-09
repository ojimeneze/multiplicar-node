'use strict'

// Requires
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida ${base} no es número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite introducida ${limite} no es número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data.trim(), (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida ${base} no es número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite introducida ${limite} no es número`);
            return;
        }

        let data = '==============\n';
        data += `==tabla de ${base}==\n`;
        data += '==============\n';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data)
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};