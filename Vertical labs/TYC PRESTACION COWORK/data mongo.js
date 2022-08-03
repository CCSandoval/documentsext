{
    _id: ObjectId('62d9c9c651fc27d23d929195'),
    config: [
        {
            name: 'nombre_cliente',
            type: 'name',
            description: 'Ingrese el nombre del cliente'
        },
        {
            name: 'id_cliente',
            type: 'text',
            description: 'Ingrese el documento de identidad del cliente'
        },
        {
            name: 'email_cliente',
            type: 'email',
            description: 'Ingrese el correo electrónico del cliente'
        },
        {
            name: 'direccion_cliente',
            type: 'text',
            description: 'Ingrese la dirección del cliente'
        },
        {
            name: 'membresia',
            type: 'text',
            description: 'Ingrese la membresía'
        },
        {
            name: 'condiciones_membresia',
            type: 'text',
            description: 'Indicar condiciones de la membresía o plan'
        },
        {
            name: 'fecha_inicio',
            type: 'date',
            description: 'Seleccione la fecha de inicio del contrato'
        },
        {
            name: 'fecha_fin',
            type: 'date',
            description: 'Seleccione la fecha de fin del contrato'
        },
        {
            name: 'renovacion_auto',
            type: 'clausula',
            description: 'Seleccione si desea renovación automática',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 'n'
        },
        {
            name: 'deposito',
            type: 'clausula',
            description: 'Seleccione si tiene depósito',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 'n'
        },
        {
            name: 'importe_deposito',
            type: 'text',
            description: 'Ingrese el importe de depósito',
            prereq: [
                {
                    k: 'deposito',
                    v: 's'
                }
            ]
        },
        {
            name: 'subtotal',
            type: 'currency',
            description: 'Ingrese el valor subtotal'
        },
        {
            name: 'impuestos',
            type: 'currency',
            description: 'Ingrese el valor de los impuestos'
        },
        {
            name: 'total',
            type: 'currency',
            description: 'Ingrese el valor total'
        },
        {
            name: 'metodo_pago',
            type: 'text',
            description: 'Ingrese el método de pago'
        },
        {
            name: 'nombre_usuario_1',
            type: 'name',
            description: 'Ingrese el nombre del primer usuario autorizado por el cliente'
        },
        {
            name: 'id_usuario_1',
            type: 'name',
            description: 'Ingrese el nombre del primer usuario autorizado por el cliente'
        },
        {
            name: 'usuario_2',
            type: 'clausula',
            description: '¿Desea añadir un segundo usuario?',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 's'
        },
        {
            name: 'nombre_usuario_2',
            type: 'name',
            description: 'Ingrese el nombre del segundo usuario autorizado por el cliente',
            prereq: [
                {
                    k: 'usuario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'id_usuario_2',
            type: 'name',
            description: 'Ingrese el nombre del segundo usuario autorizado por el cliente',
            prereq: [
                {
                    k: 'usuario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'usuario_3',
            type: 'clausula',
            description: '¿Desea añadir un tercer usuario?',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 's',
            prereq: [
                {
                    k: 'usuario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_usuario_3',
            type: 'name',
            description: 'Ingrese el nombre del tercer usuario autorizado por el cliente',
            prereq: [
                {
                    k: 'usuario_2',
                    v: 's'
                },
                {
                    k: 'usuario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'id_usuario_3',
            type: 'name',
            description: 'Ingrese el nombre del tercer usuario autorizado por el cliente',
            prereq: [
                {
                    k: 'usuario_2',
                    v: 's'
                },
                {
                    k: 'usuario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'usuario_4',
            type: 'clausula',
            description: '¿Desea añadir un cuarto usuario?',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 's',
            prereq: [
                {
                    k: 'usuario_2',
                    v: 's'
                },
                {
                    k: 'usuario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_usuario_4',
            type: 'name',
            description: 'Ingrese el nombre del cuarto usuario autorizado por el cliente',
            prereq: [
                {
                    k: 'usuario_2',
                    v: 's'
                },
                {
                    k: 'usuario_3',
                    v: 's'
                },
                {
                    k: 'usuario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'id_usuario_4',
            type: 'name',
            description: 'Ingrese el nombre del cuarto usuario autorizado por el cliente',
            prereq: [
                {
                    k: 'usuario_2',
                    v: 's'
                },
                {
                    k: 'usuario_3',
                    v: 's'
                },
                {
                    k: 'usuario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_rl_cliente',
            type: 'name',
            description: 'Ingrese el nombre del representante legal del cliente'
        },
        {
            name: 'id_rl_cliente',
            type: 'text',
            description: 'Ingrese el documento de identidad del representante legal del cliente'
        },
        {
            name: 'observaciones',
            type: 'text',
            description: 'Ingrese sus observaciones'
        }
    ],
    operation: [],
    name: 'TÉRMINOS Y CONDICIONES GENERALES PARA LA PRESTACIÓN DE SERVICIOS DE COWORKING',
    sign: [
        'nombre_cliente',
        'email_cliente',
        'id_cliente',
        'id_rl_cliente',
        'nombre_rl_cliente'
    ],
    preFill: [
        {
            name: 'nombre_rl',
            value: 'JORGE DANIEL GOMEZ VASQUEZ'
        },
        {
            name: 'email_rl',
            value: 'juridico@fo-services.com'
        },
        {
            name: 'id_rl',
            value: '71769951'
        }
    ],
    username: 'c3c10bc8-92ec-4575-9763-d0cff2a81f1b',
    signatureProfile: [
        {
            name: 'nombre_rl_cliente',
            email: 'email_cliente',
            identification: 'id_rl_cliente',
            type: 'firma_cliente'
        },
        {
            name: 'nombre_rl',
            email: 'email_rl',
            identification: 'id_rl',
            type: 'firma_rl_vl'
        }
    ],
    preBuild: false,
    preBuildData: [],
    price: 5000,
    build: 2
}