{
    _id: ObjectId('636ae78c1197e88531953371'),
    config: [
        {
            description: 'Ingresa el código del documento',
            type: 'text',
            name: 'document_code'
        },
        {
            description: 'Ingresa el correo de la persona que diligenciará éste documento',
            type: 'email',
            name: 'correo_enviar'
        },
        {
            name: 'tipo_contrato',
            description: 'Seleccione el tipo del contrato',
            value: 'leasing',
            type: 'clausula',
            options: [
                {
                    name: 'Leasing',
                    value: 'leasing'
                },
                {
                    name: 'Encargo Fiduciario',
                    value: 'fidu'
                }
            ]
        },
        {
            name: 'propiedad',
            type: 'name',
            description: 'Ingrese la propiedad'
        },
        {
            name: 'nombre_rep_hc',
            type: 'name',
            description: 'Ingrese el nombre del representante legal de Home Capital S.A.S.'
        },
        {
            name: 'cc_rep_hc',
            type: 'number',
            description: 'Ingrese el número de cédula del representante legal de Home Capital S.A.S.'
        },
        {
            name: 'estado_rep_hc',
            type: 'select',
            description: 'Seleccione el estado civil del representante legal de Home Capital S.A.S.',
            value: 'sol',
            options: [
                {
                    name: 'Soltero(a)',
                    label: 'soltero(a)',
                    value: 'sol'
                },
                {
                    name: 'Casado(a)',
                    label: 'casado(a)',
                    value: 'cas'
                },
                {
                    name: 'Unión libre',
                    label: 'union libre',
                    value: 'cas'
                },
                {
                    name: 'Viudo(a)',
                    label: 'viudo(a)',
                    value: 'viu'
                }
            ]
        },
        {
            name: 'dir_rep_hc',
            type: 'text',
            description: 'Ingrese la dirección del representante legal de Home Capital S.A.S.'
        },
        {
            name: 'dept_rep_hc',
            type: 'text',
            description: 'Ingrese el departamento del representante legal de Home Capital S.A.S.'
        },
        {
            name: 'ciud_rep_hc',
            type: 'text',
            description: 'Ingrese la ciudad del representante legal de Home Capital S.A.S.'
        },
        {
            name: 'email_rep_hc',
            type: 'email',
            description: 'Ingrese el correo electrónico del representante legal de Home Capital S.A.S.'
        },
        {
            name: 'cel_rep_hc',
            type: 'phone',
            description: 'Ingrese el número telefónico del representante legal de Home Capital S.A.S.'
        },
        {
            name: 'nombre_cesionario_1',
            type: 'name',
            description: 'Ingrese el nombre del primer cesionario'
        },
        {
            name: 'tipo_documento_cesionario_1',
            description: 'Seleccione el tipo de documento de identifiación del primer cesionario',
            value: 'cc',
            type: 'clausula',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ]
        },
        {
            name: 'numero_id_cesionario_1',
            type: 'text',
            description: 'Ingrese el número de identificación del primer cesionario'
        },
        {
            name: 'estado_cesionario_1',
            type: 'select',
            description: 'Seleccione el estado civil del primer cesionario',
            value: 'sol',
            options: [
                {
                    name: 'Soltero(a)',
                    label: 'soltero(a)',
                    value: 'sol'
                },
                {
                    name: 'Casado(a)',
                    label: 'casado(a)',
                    value: 'cas'
                },
                {
                    name: 'Unión libre',
                    label: 'union libre',
                    value: 'cas'
                },
                {
                    name: 'Viudo(a)',
                    label: 'viudo(a)',
                    value: 'viu'
                }
            ]
        },
        {
            name: 'direccion_cesionario_1',
            type: 'text',
            description: 'Ingrese la dirección del primer cesionario'
        },
        {
            name: 'depart_cesionario_1',
            type: 'text',
            description: 'Ingrese el departamento del primer cesionario'
        },
        {
            name: 'municipio_cesionario_1',
            type: 'text',
            description: 'Ingrese el municipio del primer cesionario'
        },
        {
            name: 'correo_cesionario_1',
            type: 'email',
            description: 'Ingrese el correo electrónico del primer cesionario'
        },
        {
            name: 'telefono_cesionario_1',
            type: 'phone',
            description: 'Ingrese el número teléfonico del primer cesionario'
        },
        {
            name: 'cesionario_2',
            description: '¿Desea ingresar un segundo cesionario?',
            value: 'n',
            type: 'clausula',
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
            name: 'nombre_cesionario_2',
            type: 'name',
            description: 'Ingrese el nombre del segundo cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_documento_cesionario_2',
            description: 'Seleccione el tipo de documento de identifiación del segundo cesionario',
            value: 'cc',
            type: 'clausula',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_id_cesionario_2',
            type: 'text',
            description: 'Ingrese el número de identificación del segundo cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'estado_cesionario_2',
            type: 'select',
            description: 'Seleccione el estado civil del segundo cesionario',
            value: 'sol',
            options: [
                {
                    name: 'Soltero(a)',
                    label: 'soltero(a)',
                    value: 'sol'
                },
                {
                    name: 'Casado(a)',
                    label: 'casado(a)',
                    value: 'cas'
                },
                {
                    name: 'Unión libre',
                    label: 'union libre',
                    value: 'cas'
                },
                {
                    name: 'Viudo(a)',
                    label: 'viudo(a)',
                    value: 'viu'
                }
            ],
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'direccion_cesionario_2',
            type: 'text',
            description: 'Ingrese la dirección del segundo cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'depart_cesionario_2',
            type: 'text',
            description: 'Ingrese el departamento del segundo cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'municipio_cesionario_2',
            type: 'text',
            description: 'Ingrese el municipio del segundo cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_cesionario_2',
            type: 'email',
            description: 'Ingrese el correo electrónico del segundo cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'telefono_cesionario_2',
            type: 'phone',
            description: 'Ingrese el número teléfonico del segundo cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'cesionario_3',
            description: '¿Desea ingresar un tercer cesionario?',
            value: 'n',
            type: 'clausula',
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
                    k: 'cesionario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_cesionario_3',
            type: 'name',
            description: 'Ingrese el nombre del tercer cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_documento_cesionario_3',
            description: 'Seleccione el tipo de documento de identifiación del tercer cesionario',
            value: 'cc',
            type: 'clausula',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_id_cesionario_3',
            type: 'text',
            description: 'Ingrese el número de identificación del tercer cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'estado_cesionario_3',
            type: 'select',
            description: 'Seleccione el estado civil del tercer cesionario',
            value: 'sol',
            options: [
                {
                    name: 'Soltero(a)',
                    label: 'soltero(a)',
                    value: 'sol'
                },
                {
                    name: 'Casado(a)',
                    label: 'casado(a)',
                    value: 'cas'
                },
                {
                    name: 'Unión libre',
                    label: 'union libre',
                    value: 'cas'
                },
                {
                    name: 'Viudo(a)',
                    label: 'viudo(a)',
                    value: 'viu'
                }
            ],
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'direccion_cesionario_3',
            type: 'text',
            description: 'Ingrese la dirección del tercer cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'depart_cesionario_3',
            type: 'text',
            description: 'Ingrese el departamento del tercer cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'municipio_cesionario_3',
            type: 'text',
            description: 'Ingrese el municipio del tercer cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_cesionario_3',
            type: 'email',
            description: 'Ingrese el correo electrónico del tercer cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'telefono_cesionario_3',
            type: 'phone',
            description: 'Ingrese el número teléfonico del tercer cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'cesionario_4',
            description: '¿Desea ingresar un cuarto cesionario?',
            value: 'n',
            type: 'clausula',
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
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_cesionario_4',
            type: 'name',
            description: 'Ingrese el nombre del cuarto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_documento_cesionario_4',
            description: 'Seleccione el tipo de documento de identifiación del cuarto cesionario',
            value: 'cc',
            type: 'clausula',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_id_cesionario_4',
            type: 'text',
            description: 'Ingrese el número de identificación del cuarto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'estado_cesionario_4',
            type: 'select',
            description: 'Seleccione el estado civil del cuarto cesionario',
            value: 'sol',
            options: [
                {
                    name: 'Soltero(a)',
                    label: 'soltero(a)',
                    value: 'sol'
                },
                {
                    name: 'Casado(a)',
                    label: 'casado(a)',
                    value: 'cas'
                },
                {
                    name: 'Unión libre',
                    label: 'union libre',
                    value: 'cas'
                },
                {
                    name: 'Viudo(a)',
                    label: 'viudo(a)',
                    value: 'viu'
                }
            ],
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'direccion_cesionario_4',
            type: 'text',
            description: 'Ingrese la dirección del cuarto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'depart_cesionario_4',
            type: 'text',
            description: 'Ingrese el departamento del cuarto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'municipio_cesionario_4',
            type: 'text',
            description: 'Ingrese el municipio del cuarto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_cesionario_4',
            type: 'email',
            description: 'Ingrese el correo electrónico del cuarto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'telefono_cesionario_4',
            type: 'phone',
            description: 'Ingrese el número teléfonico del cuarto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'cesionario_5',
            description: '¿Desea ingresar un quinto cesionario?',
            value: 'n',
            type: 'clausula',
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
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_cesionario_5',
            type: 'name',
            description: 'Ingrese el nombre del quinto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                },
                {
                    k: 'cesionario_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_documento_cesionario_5',
            description: 'Seleccione el tipo de documento de identifiación del quinto cesionario',
            value: 'cc',
            type: 'clausula',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                },
                {
                    k: 'cesionario_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_id_cesionario_5',
            type: 'text',
            description: 'Ingrese el número de identificación del quinto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                },
                {
                    k: 'cesionario_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'estado_cesionario_5',
            type: 'select',
            description: 'Seleccione el estado civil del quinto cesionario',
            value: 'sol',
            options: [
                {
                    name: 'Soltero(a)',
                    label: 'soltero(a)',
                    value: 'sol'
                },
                {
                    name: 'Casado(a)',
                    label: 'casado(a)',
                    value: 'cas'
                },
                {
                    name: 'Unión libre',
                    label: 'union libre',
                    value: 'cas'
                },
                {
                    name: 'Viudo(a)',
                    label: 'viudo(a)',
                    value: 'viu'
                }
            ],
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                },
                {
                    k: 'cesionario_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'direccion_cesionario_5',
            type: 'text',
            description: 'Ingrese la dirección del quinto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                },
                {
                    k: 'cesionario_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'depart_cesionario_5',
            type: 'text',
            description: 'Ingrese el departamento del quinto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                },
                {
                    k: 'cesionario_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'municipio_cesionario_5',
            type: 'text',
            description: 'Ingrese el municipio del quinto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                },
                {
                    k: 'cesionario_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_cesionario_5',
            type: 'email',
            description: 'Ingrese el correo electrónico del quinto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                },
                {
                    k: 'cesionario_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'telefono_cesionario_5',
            type: 'phone',
            description: 'Ingrese el número teléfonico del quinto cesionario',
            prereq: [
                {
                    k: 'cesionario_2',
                    v: 's'
                },
                {
                    k: 'cesionario_3',
                    v: 's'
                },
                {
                    k: 'cesionario_4',
                    v: 's'
                },
                {
                    k: 'cesionario_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'calidad_cedente',
            type: 'select',
            description: 'Seleccione la calidad del cedente',
            value: 'loc',
            options: [
                {
                    name: 'Locatario',
                    label: 'locatario',
                    value: 'loc'
                },
                {
                    name: 'Beneficiario de area',
                    label: 'beneficiario de area',
                    value: 'ben'
                }
            ]
        },
        {
            name: 'tipo_inmueble',
            type: 'select',
            description: 'Seleccione el tipo del inmueble',
            value: 'casa',
            options: [
                {
                    name: 'Casa',
                    label: 'casa',
                    value: 'casa'
                },
                {
                    name: 'Apartamento',
                    label: 'apartamento',
                    value: 'apt'
                }
            ]
        },
        {
            name: 'area_inmueble',
            type: 'number',
            addText: true,
            description: 'Ingrese el área del inmueble en metros cuadrados'
        },
        {
            name: 'numero_matricula_inmueble',
            type: 'text',
            description: 'Ingrese el número de matricula del inmueble'
        },
        {
            name: 'codigo_catastral_inmueble',
            type: 'text',
            description: 'Ingrese el código catastral del inmueble'
        },
        {
            name: 'parqueadero_1',
            description: '¿Desea ingresar un parqueadero?',
            value: 's',
            type: 'clausula',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ]
        },
        {
            name: 'area_parqueadero_1',
            type: 'number',
            addText: true,
            description: 'Ingrese el área del parqueadero en metros cuadrados',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_matricula_parqueadero_1',
            type: 'text',
            description: 'Ingrese el número de matricula del parqueadero',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                }
            ]
        },
        {
            name: 'codigo_catastral_parqueadero_1',
            type: 'text',
            description: 'Ingrese el código catastral del parqueadero',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                }
            ]
        },
        {
            name: 'parqueadero_2',
            description: '¿Desea ingresar un segundo parqueadero?',
            value: 's',
            type: 'clausula',
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
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                }
            ]
        },
        {
            name: 'area_parqueadero_2',
            type: 'number',
            addText: true,
            description: 'Ingrese el área del parqueadero en metros cuadrados',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_matricula_parqueadero_2',
            type: 'text',
            description: 'Ingrese el número de matricula del parqueadero',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'codigo_catastral_parqueadero_2',
            type: 'text',
            description: 'Ingrese el código catastral del parqueadero',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'parqueadero_3',
            description: '¿Desea ingresar un tercer parqueadero?',
            value: 's',
            type: 'clausula',
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
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'area_parqueadero_3',
            type: 'number',
            addText: true,
            description: 'Ingrese el área del parqueadero en metros cuadrados',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_matricula_parqueadero_3',
            type: 'text',
            description: 'Ingrese el número de matricula del parqueadero',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'codigo_catastral_parqueadero_3',
            type: 'text',
            description: 'Ingrese el código catastral del parqueadero',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'parqueadero_4',
            description: '¿Desea ingresar un cuarto parqueadero?',
            value: 's',
            type: 'clausula',
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
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'area_parqueadero_4',
            type: 'number',
            addText: true,
            description: 'Ingrese el área del parqueadero en metros cuadrados',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_matricula_parqueadero_4',
            type: 'text',
            description: 'Ingrese el número de matricula del parqueadero',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'codigo_catastral_parqueadero_4',
            type: 'text',
            description: 'Ingrese el código catastral del parqueadero',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'parqueadero_5',
            description: '¿Desea ingresar un quinto parqueadero?',
            value: 's',
            type: 'clausula',
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
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'area_parqueadero_5',
            type: 'number',
            addText: true,
            description: 'Ingrese el área del parqueadero en metros cuadrados',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                },
                {
                    k: 'parqueadero_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_matricula_parqueadero_5',
            type: 'text',
            description: 'Ingrese el número de matricula del parqueadero',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                },
                {
                    k: 'parqueadero_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'codigo_catastral_parqueadero_5',
            type: 'text',
            description: 'Ingrese el código catastral del parqueadero',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                },
                {
                    k: 'parqueadero_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'util_1',
            description: '¿Desea ingresar un cuarto útil?',
            value: 's',
            type: 'clausula',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ]
        },
        {
            name: 'area_util_1',
            type: 'number',
            addText: true,
            description: 'Ingrese el área del cuarto útil en metros cuadrados',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_matricula_util_1',
            type: 'text',
            description: 'Ingrese el número de matricula del cuarto útil',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                }
            ]
        },
        {
            name: 'codigo_catastral_util_1',
            type: 'text',
            description: 'Ingrese el código catastral del cuarto útil',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                }
            ]
        },
        {
            name: 'util_2',
            description: '¿Desea ingresar un segundo cuarto útil',
            value: 's',
            type: 'clausula',
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
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                }
            ]
        },
        {
            name: 'area_util_2',
            type: 'number',
            addText: true,
            description: 'Ingrese el área del cuarto útil en metros cuadrados',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_matricula_util_2',
            type: 'text',
            description: 'Ingrese el número de matricula del cuarto útil',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'codigo_catastral_util_2',
            type: 'text',
            description: 'Ingrese el código catastral del cuarto útil',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'util_3',
            description: '¿Desea ingresar un tercer cuarto útil',
            value: 's',
            type: 'clausula',
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
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'area_util_3',
            type: 'number',
            addText: true,
            description: 'Ingrese el área del cuarto útil en metros cuadrados',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                },
                {
                    k: 'util_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_matricula_util_3',
            type: 'text',
            description: 'Ingrese el número de matricula del cuarto útil',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                },
                {
                    k: 'util_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'codigo_catastral_util_3',
            type: 'text',
            description: 'Ingrese el código catastral del cuarto útil',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                },
                {
                    k: 'util_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'util_4',
            description: '¿Desea ingresar un cuarto cuarto útil',
            value: 's',
            type: 'clausula',
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
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                },
                {
                    k: 'util_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'area_util_4',
            type: 'number',
            addText: true,
            description: 'Ingrese el área del cuarto útil en metros cuadrados',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                },
                {
                    k: 'util_3',
                    v: 's'
                },
                {
                    k: 'util_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_matricula_util_4',
            type: 'text',
            description: 'Ingrese el número de matricula del cuarto útil',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                },
                {
                    k: 'util_3',
                    v: 's'
                },
                {
                    k: 'util_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'codigo_catastral_util_4',
            type: 'text',
            description: 'Ingrese el código catastral del cuarto útil',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                },
                {
                    k: 'util_3',
                    v: 's'
                },
                {
                    k: 'util_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'util_5',
            description: '¿Desea ingresar un quinto cuarto útil',
            value: 's',
            type: 'clausula',
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
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                },
                {
                    k: 'util_3',
                    v: 's'
                },
                {
                    k: 'util_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'area_util_5',
            type: 'number',
            addText: true,
            description: 'Ingrese el área del cuarto útil en metros cuadrados',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                },
                {
                    k: 'util_3',
                    v: 's'
                },
                {
                    k: 'util_4',
                    v: 's'
                },
                {
                    k: 'util_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_matricula_util_5',
            type: 'text',
            description: 'Ingrese el número de matricula del cuarto útil',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                },
                {
                    k: 'util_3',
                    v: 's'
                },
                {
                    k: 'util_4',
                    v: 's'
                },
                {
                    k: 'util_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'codigo_catastral_util_5',
            type: 'text',
            description: 'Ingrese el código catastral del cuarto útil',
            prereq: [
                {
                    k: 'util_1',
                    v: 's'
                },
                {
                    k: 'util_2',
                    v: 's'
                },
                {
                    k: 'util_3',
                    v: 's'
                },
                {
                    k: 'util_4',
                    v: 's'
                },
                {
                    k: 'util_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'num_escritura',
            type: 'text',
            description: 'Ingrese el número de la escritura donde están la cabida y los linderos'
        },
        {
            name: 'fecha_escritura',
            type: 'date',
            description: 'Seleccione la fecha de la escritura donde están la cabida y los linderos'
        },
        {
            name: 'num_notaria',
            type: 'number',
            description: 'Ingrese la notaria donde se diligenció la escritura'
        },
        {
            name: 'municipio_notaria',
            type: 'text',
            description: 'Ingrese el municipio de la notaria donde se diligenció la escritura'
        },
        {
            name: 'nombre_unidad',
            type: 'text',
            description: 'Ingrese el nombre de la unidad donde se encuentra el inmueble'
        },
        {
            name: 'dir_unidad',
            type: 'text',
            description: 'Ingrese la direccion de la unidad donde se encuentra el inmueble'
        },
        {
            name: 'municipio_unidad',
            type: 'text',
            description: 'Ingrese el municipio de la unidad donde se encuentra el inmueble'
        },
        {
            name: 'dept_unidad',
            type: 'text',
            description: 'Ingrese el departamento de la unidad donde se encuentra el inmueble'
        },
        {
            name: 'valor_total',
            type: 'currency',
            description: 'Ingrese la suma total del inmueble'
        },
        {
            name: 'valor_pago_1',
            type: 'currency',
            description: 'Ingrese el valor del primer pago'
        },
        {
            name: 'fecha_pago_1',
            type: 'date',
            description: 'Seleccione la fecha del primer pago'
        },
        {
            name: 'instruccion_pago_1',
            type: 'text',
            description: 'Ingrese la instruccion del primer pago'
        },
        {
            name: 'condicion_pago_1',
            type: 'text',
            description: 'Ingrese la condicion del primer pago'
        },
        {
            name: 'pago_2',
            description: '¿Desea ingresar otro pago?',
            value: 'n',
            type: 'clausula',
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
            name: 'valor_pago_2',
            type: 'currency',
            description: 'Ingrese el valor del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'fecha_pago_2',
            type: 'date',
            description: 'Seleccione la fecha del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'instruccion_pago_2',
            type: 'text',
            description: 'Ingrese la instruccion del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'condicion_pago_2',
            type: 'text',
            description: 'Ingrese la condicion del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'pago_3',
            description: '¿Desea ingresar otro pago?',
            value: 'n',
            type: 'clausula',
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
                    k: 'pago_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'valor_pago_3',
            type: 'currency',
            description: 'Ingrese el valor del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'fecha_pago_3',
            type: 'date',
            description: 'Seleccione la fecha del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'instruccion_pago_3',
            type: 'text',
            description: 'Ingrese la instruccion del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'condicion_pago_3',
            type: 'text',
            description: 'Ingrese la condicion del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'pago_4',
            description: '¿Desea ingresar otro pago?',
            value: 'n',
            type: 'clausula',
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
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'valor_pago_4',
            type: 'currency',
            description: 'Ingrese el valor del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                },
                {
                    k: 'pago_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'fecha_pago_4',
            type: 'date',
            description: 'Seleccione la fecha del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                },
                {
                    k: 'pago_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'condicion_pago_4',
            type: 'text',
            description: 'Ingrese la instruccion del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                },
                {
                    k: 'pago_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'instruccion_pago_4',
            type: 'text',
            description: 'Ingrese la condicion del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                },
                {
                    k: 'pago_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'pago_5',
            description: '¿Desea ingresar otro pago?',
            value: 'n',
            type: 'clausula',
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
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                },
                {
                    k: 'pago_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'valor_pago_5',
            type: 'currency',
            description: 'Ingrese el valor del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                },
                {
                    k: 'pago_4',
                    v: 's'
                },
                {
                    k: 'pago_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'fecha_pago_5',
            type: 'date',
            description: 'Seleccione la fecha del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                },
                {
                    k: 'pago_4',
                    v: 's'
                },
                {
                    k: 'pago_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'instruccion_pago_5',
            type: 'text',
            description: 'Ingrese la instruccion del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                },
                {
                    k: 'pago_4',
                    v: 's'
                },
                {
                    k: 'pago_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'condicion_pago_5',
            type: 'text',
            description: 'Ingrese la condicion del pago',
            prereq: [
                {
                    k: 'pago_2',
                    v: 's'
                },
                {
                    k: 'pago_3',
                    v: 's'
                },
                {
                    k: 'pago_4',
                    v: 's'
                },
                {
                    k: 'pago_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'fna',
            description: '¿El pago se hará con FNA?',
            value: 'n',
            type: 'clausula',
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
            name: 'fecha_firma_cesion',
            description: 'Seleccione la fecha de firma de la cesion',
            type: 'date'
        },
        {
            name: 'hora_contrato',
            description: 'Ingrese la hora de firma de la cesion',
            type: 'text'
        },
        {
            name: 'propietario_anterior',
            description: 'Ingrese propietario anterior del inmueble',
            type: 'name'
        },
        {
            name: 'fecha_entrega_material',
            description: 'Seleccione la fecha de entrega del inmueble',
            type: 'date'
        },
        {
            name: 'entrega_sujeta',
            description: '¿La entrega está sujeta a alguna condicion?',
            value: 'n',
            type: 'clausula',
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
            name: 'texto_entrega_sujeta',
            description: 'Ingrese la condicion a la cual está sujeta la entrega del inmueble',
            type: 'text',
            prereq: [
                {
                    k: 'entrega_sujeta',
                    v: 's'
                }
            ]
        },
        {
            name: 'entidad_financiera',
            description: 'Ingrese la entidad financera',
            type: 'text'
        },
        {
            name: 'autoriza_imagen',
            type: 'select',
            description: '¿Autoriza la el uso de imágen?',
            value: 's',
            options: [
                {
                    name: 'Si',
                    label: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    label: 'No',
                    value: 'n'
                }
            ]
        },
        {
            name: 'ciudad_firma',
            description: 'Ingrese la ciudad donde se firma la cesion',
            type: 'text'
        }
    ],
    sign: [
        'nombre_cesionario_1',
        'correo_cesionario_1',
        'telefono_cesionario_1',
        'numero_id_cesionario_1',
        'nombre_cesionario_2',
        'correo_cesionario_2',
        'telefono_cesionario_2',
        'numero_id_cesionario_2',
        'nombre_cesionario_3',
        'correo_cesionario_3',
        'telefono_cesionario_3',
        'numero_id_cesionario_3',
        'nombre_cesionario_4',
        'correo_cesionario_4',
        'telefono_cesionario_4',
        'numero_id_cesionario_4',
        'nombre_cesionario_5',
        'correo_cesionario_5',
        'telefono_cesionario_5',
        'numero_id_cesionario_5',
        'email_rep_legal_hc',
        'cel_rep_legal_hc'
    ],
    signatureProfile: [
        {
            name: 'nombre_cesionario_1',
            email: 'correo_cesionario_1',
            phone: 'telefono_cesionario_1',
            type: 'firma_cesionario_1',
            identification: 'numero_id_cesionario_1'
        },
        {
            name: 'nombre_cesionario_2',
            email: 'correo_cesionario_2',
            phone: 'telefono_cesionario_2',
            type: 'firma_cesionario_2',
            identification: 'numero_id_cesionario_2'
        },
        {
            name: 'nombre_cesionario_3',
            email: 'correo_cesionario_3',
            phone: 'telefono_cesionario_3',
            type: 'firma_cesionario_3',
            identification: 'numero_id_cesionario_3'
        },
        {
            name: 'nombre_cesionario_4',
            email: 'correo_cesionario_4',
            phone: 'telefono_cesionario_4',
            type: 'firma_cesionario_4',
            identification: 'numero_id_cesionario_4'
        },
        {
            name: 'nombre_cesionario_5',
            email: 'correo_cesionario_5',
            phone: 'telefono_cesionario_5',
            type: 'firma_cesionario_5',
            identification: 'numero_id_cesionario_5'
        },
        {
            name: 'nombre_rep_hc',
            email: 'email_rep_hc',
            phone: 'cel_rep_hc',
            identification: 'cc_rep_hc',
            type: 'firma_rep_hc'
        },
    ],
    preBuild: true,
    preBuildData: [
        'document_code',
        'correo_enviar'
    ],
    name: 'Promesa cesion venta 2022',
    build: 1,
    username: '0f03fff6-2122-4373-bd12-69fa58592bc7',
    company: ObjectId('618d299c3b775300099e6214'),
    price: 5000
}