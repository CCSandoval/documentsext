{
    _id: ObjectId('637401eb1197e88531953377'),
    config: [
        {
            name: 'nombre_establecimiento',
            type: 'name',
            description: 'Ingrese el nombre del establecimiento donde se desarrollará el punto de servicio'
        },
        {
            name: 'package_name',
            type: 'text',
            description: 'Ingrese el nombre de la carpeta donde quedarán guardados el presente contrato y sus anexos'
        },
        {
            name: 'tipo_persona_corresponsal',
            type: 'clausula',
            description: 'Seleccione el tipo de la persona del operador corresponsal',
            value: 'n',
            options: [
                {
                    name: 'Persona Natural',
                    value: 'n'
                },
                {
                    name: 'Persona Jurídica',
                    value: 's'
                }
            ]
        },
        {
            name: 'fecha_suscripcion',
            type: 'date',
            description: 'Ingresa la fecha de suscripción del contrato'
        },
        {
            name: 'correo_enviar',
            type: 'email',
            description: 'Ingresa el correo de la persona que diligenciará éste documento'
        },
        {
            name: 'empresa_corresponsal',
            type: 'name',
            description: 'Ingrese el nombre de la persona juridica o sociedad',
            prereq: [
                {
                    k: 'tipo_persona_corresponsal',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_corresponsal',
            type: 'name',
            description: 'Ingrese el NIT del operador corresponsal',
            prereq: [
                {
                    k: 'tipo_persona_corresponsal',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_corresponsal',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_corresponsal',
                            v: 's'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal de la persona juridica o sociedad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_corresponsal',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del operador corresponsal'
                }
            ],
            type: 'name'
        },
        {
            name: 'cc_corresponsal',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_corresponsal',
                            v: 's'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal de la persona juridica o sociedad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_corresponsal',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del operador corresponsal'
                }
            ],
            type: 'number'
        },
        {
            name: 'dir_corresponsal',
            type: 'name',
            description: 'Ingrese el domicilio de la persona juridica o sociedad'
        },
        {
            name: 'email_corresponsal',
            type: 'email',
            description: 'Ingrese el correo electrónico donde llegará la invitación a firmar del operador corresponsal'
        },
        {
            name: 'tel_fijo_corresponsal',
            type: 'text',
            description: 'Ingrese el número de teléfono fijo del operador corresponsal'
        },
        {
            name: 'cel_corresponsal',
            type: 'phone',
            description: 'Ingrese el número de teléfono célular del operador corresponsal'
        },
        {
            name: 'nombre_operario_punto',
            type: 'name',
            description: 'Ingrese el nombre de la persona que operará el punto de servicio'
        },
        {
            name: 'direccion_establecimiento',
            type: 'name',
            description: 'Ingrese la dirección del establecimiento donde se desarrollará el punto de servicio'
        },
        {
            name: 'ciudad_establecimiento',
            type: 'name',
            description: 'Ingrese la ciudad del establecimiento donde se desarrollará el punto de servicio'
        },
        {
            name: 'departamento_establecimiento',
            type: 'name',
            description: 'Ingrese el departamento del establecimiento donde se desarrollará el punto de servicio'
        },
        {
            name: 'horario_lun_vier',
            type: 'name',
            description: 'Ingrese el horario de lunes a viernes'
        },
        {
            name: 'horario_sab',
            type: 'name',
            description: 'Ingrese el horario de sábados'
        },
        {
            name: 'horario_dom',
            type: 'name',
            description: 'Ingrese el horario de domingos'
        },
        {
            name: 'num_cuenta',
            type: 'text',
            description: 'Ingrese el número de cuenta bancaria bancolombia'
        },
        {
            name: 'tipo_cuenta',
            type: 'select',
            description: 'Seleccione el tipo cuenta bancaria bancolombia',
            value: 'n',
            options: [
                {
                    name: 'Ahorros',
                    label: 'Ahorros',
                    value: 'n'
                },
                {
                    name: 'Corriente',
                    label: 'Corriente',
                    value: 'j'
                }
            ]
        },
        {
            name: 'exp_cc_corresponsal',
            description: 'Ingrese el lugar de expedición de la cédula del representante legal de la persona juridica o sociedad',
            type: 'text',
            prereq: [
                {
                    k: 'tipo_persona_corresponsal',
                    v: 's'
                }
            ],
        },
        {
            name: 'dir_otorgante',
            description: 'Ingrese la dirección de residencia del representante legal de la persona juridica o sociedad',
            type: 'text',
            prereq: [
                {
                    k: 'tipo_persona_corresponsal',
                    v: 's'
                }
            ],
        },
        {
            name: 'ciudad_otorgante',
            description: 'Ingrese la ciudad de residencia del representante legal de la persona juridica o sociedad',
            type: 'text',
            prereq: [
                {
                    k: 'tipo_persona_corresponsal',
                    v: 's'
                }
            ],
        },
        {
            name: 'departamento_otorgante',
            description: 'Ingrese el departamento de residencia del representante legal de la persona juridica o sociedad',
            type: 'text',
            prereq: [
                {
                    k: 'tipo_persona_corresponsal',
                    v: 's'
                }
            ],
        },
        {
            name: 'ciudad_suscripcion',
            type: 'text',
            description: 'Ingrese la ciudad de suscripción'
        },
        {
            name: 'ciudad_firma',
            type: 'text',
            description: 'Ingrese la ciudad donde se firma el presente contrato'
        }
    ],
    preBuild: true,
    preBuildData: [
        'nombre_establecimiento',
        'package_name',
        'tipo_persona_corresponsal',
        'fecha_suscripcion',
        'correo_enviar'
    ],
    sign: [
        'tipo_persona_corresponsal',
        'empresa_corresponsal',
        'nit_corresponsal',
        'nombre_corresponsal',
        'cc_corresponsal',
        'dir_corresponsal',
        'email_corresponsal',
        'tel_fijo_corresponsal',
        'cel_corresponsal',
        'nombre_operario_punto',
        'nombre_establecimiento',
        'direccion_establecimiento',
        'ciudad_establecimiento',
        'departamento_establecimiento',
        'horario_lun_vier',
        'horario_sab',
        'horario_dom',
        'num_cuenta',
        'tipo_cuenta',
        'ciudad_suscripcion',
        'fecha_suscripcion',
        'ciudad_firma',
        'correo_enviar'
    ],
    signatureProfile: [
        {
            type: 'firma_corresponsal',
            email: 'email_corresponsal',
            name: 'nombre_corresponsal',
            identification: 'cc_corresponsal',
            phone: 'cel_corresponsal',
            'package': true
        },
    ],
    price: 5000,
    files: [
        {
            name: 'Copia cédula representante legal',
            approve: 'pending',
            required: false
        },
        {
            name: 'RUT representante legal',
            approve: 'pending',
            required: false
        },
        {
            name: 'RUT de la persona jurídica',
            approve: 'pending',
            required: false,
            preReq: 'tipo_persona_corresponsal'
        },
        {
            name: 'RUT de la sociedad',
            approve: 'pending',
            required: false,
            preReq: 'tipo_persona_corresponsal'
        },
        {
            name: 'Cámara de comercio',
            approve: 'pending',
            required: false
        },
    ],
    name: 'CONTRATO DE COLABORACIÓN MERCANTIL (PREPAGO)',
    company: ObjectId('6356ab6c1243c226bbd5615d'),
    username: '0f03fff6-2122-4373-bd12-69fa58592bc7',
    build: 7
}