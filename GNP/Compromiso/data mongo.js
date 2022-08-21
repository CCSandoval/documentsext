{
    _id: ObjectId('6213dd41ed0a939e613674ac'),
    config: [
        {
            name: 'fecha_firma',
            description: 'Seleccione la fecha donde se firma el documento',
            type: 'date'
        },
        {
            name: 'nombre_trabajador',
            description: 'Ingrese el nombre del trabajador',
            type: 'name'
        },
        {
            name: 'ciudad_firma',
            description: 'Ingrese la ciudad donde se firma el documento',
            type: 'name'
        },
        {
            name: 'cedula_trabajador',
            description: 'Ingrese la cédula de ciudadanía del trabajador',
            type: 'number'
        },
        {
            name: 'cargo',
            description: 'Ingrese el cargo del trabajador',
            type: 'name'
        },
        {
            name: 'antiguedad',
            description: 'Ingrese la antigüedad del trabajador',
            type: 'name'
        },
        {
            name: 'tipo_examen',
            description: 'Ingrese el tipo de exámen que se le hizo al trabajador',
            type: 'text'
        },
        {
            name: 'fecha_examen',
            description: 'Seleccione la fecha en la que se le hizo el exámen al trabajador',
            type: 'date'
        },
        {
            name: 'recomendaciones_medicas',
            description: 'Ingrese las recomendaciones médicas',
            type: 'text'
        },
        {
            name: 'correo_trabajador',
            description: 'Ingrese el correo electrónico del trabajador',
            type: 'email'
        }
    ],
    preBuild: false,
    sign: [
        'cedula_trabajador',
        'nombre_trabajador',
        'correo_trabajador'
    ],
    preFill: [
        {
            name: 'correo_gnp',
            value: 'milena.castillo@gnpsa.com'
        },
        {
            name: 'nombre_gnp',
            value: 'MILENA CASTILLO'
        },
        {
            name: 'cc_gnp',
            value: '53159805'
        }
    ],
    signatureProfile: [
        {
            type: 'firma_trabajador',
            identification: 'cedula_trabajador',
            name: 'nombre_trabajador',
            email: 'correo_trabajador'
        },
        {
            type: 'firma_gnp',
            identification: 'cc_gnp',
            name: 'nombre_gnp',
            email: 'correo_gnp'
        }
    ],
    name: 'COMPROMISO DE CUMPLIMIENTO DE LAS RECOMENDACIONES MÉDICAS OCUPACIONALES',
    price: 5000,
    build: 2
}