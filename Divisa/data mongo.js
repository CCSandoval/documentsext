{
    _id: ObjectId('62fc188e51fc27d23d9291c3'),
    config: [
        {
            name: 'num_pagare',
            type: 'number',
            description: 'Ingrese el número del pagaré'
        },
        {
            name: 'tipo_persona',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del deudor',
            value: 'n',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Jurídica',
                    value: 'j'
                }
            ]
        },
        {
            name: 'nombre_deudor',
            type: 'name',
            description: 'Ingrese el nombre del deudor'
        },
        {
            name: 'domicilio_deudor',
            type: 'text',
            description: 'Ingrese el lugar de domicilio del deudor',
            prereq: [
                {
                    k: 'tipo_persona',
                    v: 'n'
                }
            ]
        },
        {
            name: 'cc_deudor',
            type: 'number',
            description: 'Ingrese el número de cédula del deudor'
        },
        {
            name: 'establecimiento',
            type: 'clausula',
            description: 'Seleccione si el deudor tiene establecimiento de comercio',
            value: 'n',
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
            prereq: [
                {
                    k: 'tipo_persona',
                    v: 'n'
                }
            ]
        },
        {
            name: 'nombre_establecimiento',
            type: 'text',
            description: 'Ingrese el nombre del establecimiento',
            prereq: [
                {
                    k: 'tipo_persona',
                    v: 'n'
                },
                {
                    k: 'establecimiento',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_empresa',
            type: 'text',
            description: 'Ingrese el nombre de la empresa',
            prereq: [
                {
                    k: 'tipo_persona',
                    v: 'j'
                }
            ]
        },
        {
            name: 'nit_empresa',
            type: 'text',
            description: 'Ingrese el NIT de la empresa',
            prereq: [
                {
                    k: 'tipo_persona',
                    v: 'j'
                }
            ]
        },
        //////////////////
        {
            name: 'tipo_persona_avalista_1',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del primer avalista',
            value: 'n',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Jurídica',
                    value: 'j'
                }
            ]
        },
        {
            name: 'nombre_empresa_av_1',
            type: 'text',
            description: 'Ingrese el nombre de la empresa del primer avalista',
            prereq: [
                {
                    k: 'tipo_persona_avalista_1',
                    v: 'j'
                }
            ]
        },
        {
            name: 'nit_empresa_av_1',
            type: 'text',
            description: 'Ingrese el NIT de la empresa del primer avalista',
            prereq: [
                {
                    k: 'tipo_persona_avalista_1',
                    v: 'j'
                }
            ]
        },
        {
            name: 'nombre_avalista_1',
            type: 'name',
            description: 'Ingrese el nombre del primer avalista'
        },
        {
            name: 'cc_avalista_1',
            type: 'number',
            description: 'Ingrese el número de cédula del primer avalista'
        },
        {
            name: 'correo_avalista_1',
            type: 'email',
            description: 'Ingrese el correo electrónico del primer avalista'
        },
        {
            name: 'avalista_2',
            type: 'clausula',
            description: '¿Desea ingresar un segundo avalista?',
            value: 'n',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_avalista_2',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del segundo avalista',
            value: 'n',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Jurídica',
                    value: 'j'
                }
            ],
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_empresa_av_2',
            type: 'text',
            description: 'Ingrese el nombre de la empresa del segundo avalista',
            prereq: [
                {
                    k: 'tipo_persona_avalista_2',
                    v: 'j'
                },
                {
                    k: 'avalista_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_empresa_av_2',
            type: 'text',
            description: 'Ingrese el NIT de la empresa del segundo avalista',
            prereq: [
                {
                    k: 'tipo_persona_avalista_2',
                    v: 'j'
                },
                {
                    k: 'avalista_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_avalista_2',
            type: 'name',
            description: 'Ingrese el nombre del segundo avalista',
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_avalista_2',
            type: 'number',
            description: 'Ingrese el número de cédula del segundo avalista',
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_avalista_2',
            type: 'email',
            description: 'Ingrese el correo electrónico del segundo avalista',
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'avalista_3',
            type: 'clausula',
            description: '¿Desea ingresar un tercer avalista?',
            value: 'n',
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
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_avalista_3',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del tercer avalista',
            value: 'n',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Jurídica',
                    value: 'j'
                }
            ],
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_empresa_av_3',
            type: 'text',
            description: 'Ingrese el nombre de la empresa del tercer avalista',
            prereq: [
                {
                    k: 'tipo_persona_avalista_2',
                    v: 'j'
                },
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_empresa_av_3',
            type: 'text',
            description: 'Ingrese el NIT de la empresa del tercer avalista',
            prereq: [
                {
                    k: 'tipo_persona_avalista_2',
                    v: 'j'
                },
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_avalista_3',
            type: 'name',
            description: 'Ingrese el nombre del tercer avalista',
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_avalista_3',
            type: 'number',
            description: 'Ingrese el número de cédula del tercer avalista',
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_avalista_3',
            type: 'email',
            description: 'Ingrese el correo electrónico del tercer avalista',
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'avalista_4',
            type: 'clausula',
            description: '¿Desea ingresar un cuarto avalista?',
            value: 'n',
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
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_avalista_4',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del cuarto avalista',
            value: 'n',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Jurídica',
                    value: 'j'
                }
            ],
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                },
                {
                    k: 'avalista_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_empresa_av_4',
            type: 'text',
            description: 'Ingrese el nombre de la empresa del cuarto avalista',
            prereq: [
                {
                    k: 'tipo_persona_avalista_2',
                    v: 'j'
                },
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                },
                {
                    k: 'avalista_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_empresa_av_4',
            type: 'text',
            description: 'Ingrese el NIT de la empresa del cuarto avalista',
            prereq: [
                {
                    k: 'tipo_persona_avalista_2',
                    v: 'j'
                },
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                },
                {
                    k: 'avalista_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_avalista_4',
            type: 'name',
            description: 'Ingrese el nombre del cuarto avalista',
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                },
                {
                    k: 'avalista_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_avalista_4',
            type: 'number',
            description: 'Ingrese el número de cédula del cuarto avalista',
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                },
                {
                    k: 'avalista_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_avalista_4',
            type: 'email',
            description: 'Ingrese el correo electrónico del cuarto avalista',
            prereq: [
                {
                    k: 'avalista_2',
                    v: 's'
                },
                {
                    k: 'avalista_3',
                    v: 's'
                },
                {
                    k: 'avalista_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_enviar',
            type: 'email',
            description: 'Ingresa el correo de la persona que diligenciará éste documento'
        },
        {
            name: 'ciudad_firma',
            type: 'text',
            description: 'Ingrese la ciudad donde se firma el pagaré'
        },
        {
            name: 'correo_deudor',
            type: 'email',
            description: 'Ingrese el correo electrónico donde le llegará la invitación a fimar al deudor'
        },
    ],
    sign: [
        'nombre_deudor',
        'cc_deudor',
        'correo_deudor',
        'nombre_avalista_1',
        'cc_avalista_1',
        'correo_avalista_1',
        'nombre_avalista_2',
        'cc_avalista_2',
        'correo_avalista_2',
        'nombre_avalista_3',
        'cc_avalista_3',
        'correo_avalista_3',
        'nombre_avalista_4',
        'cc_avalista_4',
        'correo_avalista_4'
    ],
    signatureProfile: [
        {
            name: 'nombre_deudor',
            identification: 'cc_deudor',
            email: 'correo_deudor',
            type: 'firma_deudor'
        },
        {
            name: 'nombre_avalista_1',
            identification: 'cc_avalista_1',
            email: 'correo_avalista_1',
            type: 'firma_avalista_1'
        },
        {
            name: 'nombre_avalista_2',
            identification: 'cc_avalista_2',
            email: 'correo_avalista_2',
            type: 'firma_avalista_2'
        },
        {
            name: 'nombre_avalista_3',
            identification: 'cc_avalista_3',
            email: 'correo_avalista_3',
            type: 'firma_avalista_3'
        },
        {
            name: 'nombre_avalista_4',
            identification: 'cc_avalista_4',
            email: 'correo_avalista_4',
            type: 'firma_avalista_4'
        }
    ],
    preBuild: true,
    preBuildData: [
        'num_pagare',
        'tipo_persona',
        'nombre_deudor',
        'domicilio_deudor',
        'cc_deudor',
        'establecimiento',
        'nombre_establecimiento',
        'nombre_empresa',
        'nit_empresa',
        'tipo_persona_avalista_1',
        'nombre_empresa_av_1',
        'nit_empresa_av_1',
        'nombre_avalista_1',
        'cc_avalista_1',
        'correo_avalista_1',
        'avalista_2',
        'tipo_persona_avalista_2',
        'nombre_empresa_av_2',
        'nit_empresa_av_2',
        'nombre_avalista_2',
        'cc_avalista_2',
        'correo_avalista_2',
        'avalista_3',
        'tipo_persona_avalista_3',
        'nombre_empresa_av_3',
        'nit_empresa_av_3',
        'nombre_avalista_3',
        'cc_avalista_3',
        'correo_avalista_3',
        'avalista_4',
        'tipo_persona_avalista_4',
        'nombre_empresa_av_4',
        'nit_empresa_av_4',
        'nombre_avalista_4',
        'cc_avalista_4',
        'correo_avalista_4',
        'correo_enviar'
    ],
    name: 'PAGARÉ FACTORING DIVISA',
    username: '037e0578-8052-4efd-9662-0bcc6077c897',
    company: ObjectId('61942036889b8f0009db9812'),
    price: 5000,
    build: 2
}