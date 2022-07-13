{
    _id: ObjectId('62c8705151fc27d23d929185'),
    config: [
        {
            name: 'empresa_agente_inmo',
            type: 'name',
            description: 'Ingrese el nombre de la empresa'
        },
        {
            name: 'nit_agente_inmo',
            type: 'text',
            description: 'Ingrese el NIT de la empresa'
        },
        {
            name: 'dir_agente_inmo',
            type: 'text',
            description: 'Ingrese la dirección de domicilio principal de la empresa'
        },
        {
            name: 'nombre_agente_inmo',
            type: 'name',
            description: 'Ingrese el nombre del representante legal de la empresa'
        },
        {
            name: 'cc_agente_inmo',
            type: 'number',
            description: 'Ingrese el número de cédula del representante legal'
        },
        {
            name: 'tipo_rep_legal',
            type: 'select',
            description: 'Seleccione qué tipo de representante legal',
            options:[
                {
                    name:'Representante Legal',
                    label:'Representante Legal',
                    value:'rl',
                },
                {
                    name:'Apoderado',
                    label:'Apoderado',
                    value:'apo',
                },
            ],
            value:'rl'
        },
        {
            name: 'tel_agente_inmo',
            type: 'phone',
            description: 'Ingrese el número teléfonico del representante legal'
        },
        {
            name: 'correo_agente_inmo',
            type: 'email',
            description: 'Ingrese el correo electrónico del representante legal'
        },
        {
            name: 'fecha_firma',
            type: 'date',
            description: 'Seleccione la fecha de firma'
        },
        {
            name: 'correo_enviar',
            type: 'email',
            description: 'Ingrese el correo electrónico del representante legal'
        },
    ],
    operation:[],
    sign:[
        'nombre_agente_inmo',
        'cc_agente_inmo',
        'correo_agente_inmo',
        'tel_agente_inmo'
    ],
    signatureProfile: [
        {
            name: 'nombre_agente_inmo',
            identification: 'cc_agente_inmo',
            email: 'correo_agente_inmo',
            phone: 'tel_agente_inmo',
            type: 'firma_inmo'
        }
    ],
    preFill: [],
    preBuildData: [
        'correo_enviar'
    ],
    preBuild: true,
    name: 'CONTRATO DE CORRETAJE PARA PERSONA JURIDICA',
    company: ObjectId('614a3a750aebb000084cbac0'),
    username: '111cdc4d-4bcb-4dfc-85d5-94b8a86bb916',
    price: 5000,
    build: 3
}