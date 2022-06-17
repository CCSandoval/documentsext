{
    _id: ObjectId('62a7e77951fc27d23d929165'),
    config: [
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
            name: 'nombre_estudiante',
            type: 'name',
            description: 'Ingrese el nombre del estudiante'
        },
        {
            name: 'suma_anual_comp',
            type: 'currency',
            description: 'Ingrese el valor de la suma anual por el servicio de ruta completa'
        },
        {
            name: 'suma_anual_media',
            type: 'currency',
            description: 'Ingrese el valor de la suma anual por el servicio de media ruta'
        },
        {
            name: 'valor_cuota',
            type: 'currency',
            description: 'Ingrese el valor de la cuota mensual'
        },
        {
            name: 'dir_acudiente',
            type: 'text',
            description: 'Ingrese la dirección de residencia del acudiente'
        },
        {
            name: 'ciudad_acudiente',
            type: 'text',
            description: 'Ingrese la ciudad de residencia del acudiente'
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
    sign: [],
    preFill: [],
    signatureProfile: [
        {
            name: 'nombre_papa',
            identification: 'cedula_papa',
            phone: 'tel_papa',
            email: 'email_papa',
            type: 'firma_papa'
        },
        {
            name: 'nombre_mama',
            identification: 'cedula_mama',
            phone: 'tel_mama',
            email: 'email_mama',
            type: 'firma_mama'
        }
    ],
    preBuild: false,
    preBuildData: [],
    company: ObjectId('624b9d001e9c670009968025'),
    build: 2,
    name: 'CONTRATO DE PRESTACIÓN DE SERVICIOS DE TRANSPORTE ESCOLAR',
    price: 5000
}