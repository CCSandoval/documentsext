{
    _id: ObjectId('62083339ed0a939e6136748a'),
    config:[
        {
            name: 'nombre',
            description: 'Ingrese el nombre del trabajador',
            type: 'name',
            help: 'nombre'
        },
        {
            name: 'nombre_capacitador',
            description: 'Ingrese el nombre de la persona que hizo la capacitación',
            type: 'name',
            help: 'nombre'
        },
        {
            name: 'fecha_firma',
            description: 'Seleccione la fecha en la que se firma el documento',
            type: 'date'
        },
        {
            name: 'cc_trabajador',
            description: 'Ingrese el número de cédula del trabajador',
            type: 'number'
        },
        {
            name: 'correo_trabajador',
            description: 'Ingrese el correo del trabajador',
            type: 'text'
        }
    ],
    sign: [
        'nombre',
        'nombre_capacitador',
        'fecha_firma',
        'cc_trabajador',
        'correo_trabajador'
    ],
    preFill: [],
    signatureProfile: [
        {
            type: 'firma_trabajador',
            email: 'correo_trabajador',
            name: 'nombre',
            identification: 'cc_trabajador'
        }
    ],
    operation: [],
    name: 'ACTA DE ENTREGA - REGLAMENTO INTERNO DE TRABAJO Y CÓDIGO DE ÉTICA Y CONDUCTA EMPRESARIAL',
    preBuildData: [],
    preBuild: false,
    price: 5000,
    build: 1
}