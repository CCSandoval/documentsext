{
    _id: ObjectId('62da09c451fc27d23d929197'),
    config: [
        {
            name: 'nombre_cliente',
            type: 'name',
            description: 'Ingrese el nombre del titular'
        },
        {
            name: 'id_cliente',
            type: 'number',
            description: 'Ingrese el documento de identidad del titular'
        },
        {
            name: 'acepta_1',
            type: 'clausula',
            description: '¿Ha leído el presente documento, es conocedor de la política de protección de datos de VERTICAL LABS S.A.S y autoriza de forma expresa el tratamiento de sus datos personales para los fines aquí descritos?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            value: 'n'
        },
        {
            name: 'stop_progress',
            type: 'name',
            description: 'para si escoje no',
            prereq: [
                {
                    k: 'acepta_1',
                    v: 'n'
                }
            ]
        },
        {
            name: 'acepta_2',
            type: 'clausula',
            description: '¿Autoriza el tratamiento de sus datos biométricos para fines de control de acceso al Coworking de VERTICAL LABS S.A.S a sabiendas de que no esta obligado a ello por existir otros métodos alternativos para controlar el acceso.?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            value: 'n'
        },
        {
            name: 'stop_progress',
            type: 'name',
            description: 'para si escoje no',
            prereq: [
                {
                    k: 'acepta_2',
                    v: 'n'
                }
            ]
        },
        {
            name: 'acepta_3',
            type: 'clausula',
            description: '¿Autoriza el tratamiento de sus datos para que le sean remitidas comunicaciones comerciales provenientes de VERTICAL LABS S.A.S o de terceros, cuando estas puedan ser potencialmente de su interés.?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            value: 'n'
        },
        {
            name: 'stop_progress',
            type: 'name',
            description: 'para si escoje no',
            prereq: [
                {
                    k: 'acepta_3',
                    v: 'n'
                }
            ]
        },
        {
            name: 'fecha_firma',
            type: 'date',
            description: 'Seleccione la fecha de firma'
        },
        {
            name: 'email_cliente',
            type: 'email',
            description: 'Ingrese el correo electrónico del titular'
        }
    ],
    operation: [],
    name: 'CONSENTIMIENTO EXPRESO PARA EL TRATAMIENTO DE DATOS DE CARÁCTER PERSONAL',
    price: 5000,
    build: 0,
    preBuild: false,
    preBuildData: [],
    sign: [
        'nombre_cliente',
        'id_cliente',
        'email_cliente'
    ],
    signatureProfile: [
        {
            name: 'nombre_cliente',
            identification: 'id_cliente',
            email: 'email_cliente',
            type: 'firma_cliente'
        }
    ]
}