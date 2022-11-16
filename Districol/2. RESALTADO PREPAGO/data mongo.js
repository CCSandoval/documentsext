{
    _id: ObjectId('637401eb1197e88531953377'),
    config: [
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
                    value: 'j'
                }
            ]
        },
        {
            name: 'empresa_corresponsal',
            type: 'name',
            description: 'Ingrese el nombre del operador corresponsal',
            prereq: [
                {
                    k: 'tipo_persona_corresponsal',
                    v: 'j'
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
                    v: 'j'
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
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del operador corresponsal'
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
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del operador corresponsal'
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
            description: 'Ingrese el domicilio del operador corresponsal'
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
            name: 'nombre_establecimiento',
            type: 'name',
            description: 'Ingrese el nombre del establecimiento donde se desarrollará el punto de servicio'
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
            name: 'tipo_persona_otorgante',
            type: 'clausula',
            description: 'Seleccione el tipo de la persona del otorgante solidario',
            value: 'n',
            options: [
                {
                    name: 'Persona Natural',
                    value: 'n'
                },
                {
                    name: 'Persona Jurídica',
                    value: 'j'
                }
            ]
        },
        {
            name: 'nombre_otorgante',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_otorgante',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del otorgante solidario'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_otorgante',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del otorgante solidario'
                }
            ],
            type: 'name'
        },
        {
            name: 'cc_otorgante',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_otorgante',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del otorgante solidario'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_otorgante',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del otorgante solidario'
                }
            ],
            type: 'number'
        },
        {
            name: 'exp_cc_otorgante',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_otorgante',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el lugar de expedición de la cédula del representante legal del otorgante solidario'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_otorgante',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el lugar de expedición de la cédula del otorgante solidario'
                }
            ],
            type: 'text'
        },
        {
            name: 'empresa_otorgante',
            type: 'name',
            description: 'Ingrese el nombre del otorgante solidario',
            prereq: [
                {
                    k: 'tipo_persona_otorgante',
                    v: 'j'
                }
            ]
        },
        {
            name: 'nit_otorgante',
            type: 'name',
            description: 'Ingrese el NIT del otorgante solidario',
            prereq: [
                {
                    k: 'tipo_persona_otorgante',
                    v: 'j'
                }
            ]
        },
        {
            name: 'ciudad_emp_otorgante',
            type: 'name',
            description: 'Ingrese la ciudad de domicilio de la sociedad del otorgante solidario',
            prereq: [
                {
                    k: 'tipo_persona_otorgante',
                    v: 'j'
                }
            ]
        },
        {
            name: 'dir_otorgante',
            type: 'name',
            description: 'Ingrese la dirección del otorgante solidario'
        },
        {
            name: 'ciudad_otorgante',
            type: 'name',
            description: 'Ingrese la ciudad del otorgante solidario'
        },
        {
            name: 'departamento_otorgante',
            type: 'name',
            description: 'Ingrese el departamento del otorgante solidario'
        },
        {
            name: 'tel_fijo_otorgante',
            type: 'text',
            description: 'Ingrese el número de teléfono fijo del otorgante solidario'
        },
        {
            name: 'cel_otorgante',
            type: 'phone',
            description: 'Ingrese el número de teléfono célular del otorgante solidario'
        },
        {
            name: 'email_otorgante',
            type: 'email',
            description: 'Ingrese el correo electrónico donde llegará la invitación a firmar del otorgante solidario'
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
        },
        {
            name: 'package_name',
            type: 'text',
            description: 'Ingrese el nombre de la carpeta donde quedarán guardados el presente contrato y sus anexos'
        }
    ],
    preBuild: false,
    preBuildData: [],
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
        'tipo_persona_otorgante',
        'nombre_otorgante',
        'cc_otorgante',
        'exp_cc_otorgante',
        'empresa_otorgante',
        'nit_otorgante',
        'ciudad_emp_otorgante',
        'dir_otorgante',
        'ciudad_otorgante',
        'departamento_otorgante',
        'tel_fijo_otorgante',
        'cel_otorgante',
        'email_otorgante',
        'ciudad_suscripcion',
        'fecha_suscripcion',
        'ciudad_firma'
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
        {
            type: 'firma_otorgante',
            email: 'email_otorgante',
            name: 'nombre_otorgante',
            identification: 'cc_otorgante',
            phone: 'cel_otorgante'
        }
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
            name: 'Cámara de comercio',
            approve: 'pending',
            required: false
        }
    ],
    name: 'CONTRATO DE COLABORACIÓN MERCANTIL (PREPAGO)',
    build: 0
}