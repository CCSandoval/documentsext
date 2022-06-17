{
    _id: ObjectId('62a8fe8d51fc27d23d92916b'),
    config: [
        {
            name: 'numero_pagare',
            type: 'number',
            description: 'Número de pagaré'
        },
        {
            name: 'nombre_papa',
            type: 'name',
            description: 'Ingrese el nombre del papa'
        },
        {
            name: 'cedula_papa',
            type: 'number',
            description: 'Ingrese la cédula de ciudadanía del papa'
        },
        {
            name: 'nombre_mama',
            type: 'name',
            description: 'Ingrese el nombre de la mama'
        },
        {
            name: 'cedula_mama',
            type: 'number',
            description: 'Ingrese la cédula de ciudadanía de la mama'
        },
        {
            name: 'suma',
            type: 'currency',
            description: 'Valor por el que se suscribe el pagaré'
        },
        {
            name: 'tasa_interes',
            type: 'number',
            description: 'Valor de tasa de interes'
        },
        {
            name: 'tasa_interes_mora',
            type: 'number',
            description: 'Valor de tasa de interes en mora'
        },
        {
            name: 'fecha_firma',
            type: 'date',
            description: 'Fecha de firma pagaré'
        },
        {
            name: 'ciudad_instrucciones',
            type: 'text',
            description: 'Cidad para la carta de instrucciones'
        },
        {
            name: 'nombre_estudiante',
            type: 'name',
            description: 'Ingrese el nombre del estudiante'
        },
        {
            name: 'ciudad_firma',
            type: 'text',
            description: 'Cidad de firma para la carta de instrucciones'
        },
        {
            name: 'fecha_firma_instrucciones',
            type: 'date',
            description: 'Fecha de firma carta de instrucciones'
        },
        {
            name: 'dir_acudiente',
            type: 'text',
            description: 'Ingrese la dirección de residencia de los acudientes'
        },
        {
            name: 'ciudad_acudiente',
            type: 'text',
            description: 'Ingrese la ciudad de residencia de los acudientes'
        },
        {
            name: 'tel_papa',
            type: 'phone',
            description: 'Ingrese el número de teléfono del papa'
        },
        {
            name: 'email_papa',
            type: 'email',
            description: 'Ingrese el correo electrónico del papa'
        },
        {
            name: 'tel_mama',
            type: 'phone',
            description: 'Ingrese el número de teléfono de la mama'
        },
        {
            name: 'email_mama',
            type: 'email',
            description: 'Ingrese el correo electrónico de la mama'
        },
    ],
    operation: [],
    sign: [
        'nombre_estudiante',
    ],
    preFill: [],
    signatureProfile: [
        {
            name: 'nombre_mama',
            identification: 'cedula_mama',
            phone: 'tel_mama',
            email: 'email_mama',
            type: 'firma_mama'
        },
        {
            name: 'nombre_papa',
            identification: 'cedula_papa',
            phone: 'tel_papa',
            email: 'email_papa',
            type: 'firma_papa'
        },
    ],
    preBuild: false,
    preBuildData: [],
    company: ObjectId('624b9d001e9c670009968025'),
    build: 2,
    name: 'PAGARÉ',
    price: 5000
}