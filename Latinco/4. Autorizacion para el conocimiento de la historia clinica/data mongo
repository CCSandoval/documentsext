{
    _id: ObjectId('620841f0ed0a939e6136748e'),
    config:[
        {
            name: 'nombre',
            description: 'Ingrese el nombre del trabajador',
            type: 'name',
            help: 'nombre'
        },
        {
            name: 'cc_trabajador',
            description: 'Ingrese el número de cédula del trabajador',
            type: 'number'
        },
        {
            name: "municipio_expedicion",
            description: 'Ingrese el municipio de expedición de la cédula de ciudadania del trabajador',
            type: 'text'
        },
        {
            name: 'nombre_empresa',
            description: 'Ingrese el nombre de la empresa',
            type: 'name',
            help: 'nombre'
        },
        {
            name: 'autoriza',
            description: '¿Autoriza el acceso a su historia clinica ocupacional?',
            options:[
                {
                    name:'No',
                    value:'n'
                },
                {
                    name:'Si',
                    value:'s'
                }
            ],
            value:'n',
            type: 'clausula'
        },
        {
            name: 'cargo_trabajador',
            description: 'Ingrese el cargo del trabajador',
            type: 'text'
        },
        {
            name: 'correo_trabajador',
            description: 'Ingrese el correo del trabajador',
            type: 'text'
        }
    ],
    sign: [
        'nombre',
        'nombre_empresa',
        'autoriza',
        'cc_trabajador',
        'correo_trabajador',
        'cargo_trabajador'
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
    name:'AUTORIZACIÓN PARA EL CONOCIMIENTO DE LA HISTORIA CLÍNICA OCUPACIONAL',
    preBuildData: [],
    preBuild: false,
    price: 5000,
    build: 1
}