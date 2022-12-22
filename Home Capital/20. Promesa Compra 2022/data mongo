{
    _id: ObjectId('637508171197e8853195337b'),
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
            name: 'propiedad',
            type: 'name',
            description: 'Ingrese el nombre de la unidad donde se encuentra la propiedad, seguido del número'
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
            name: 'nombre_vendedor_1',
            type: 'name',
            description: 'Ingrese el nombre del primer vendedor'
        },
        {
            name: 'tipo_documento_vendedor_1',
            description: 'Seleccione el tipo de documento de identifiación del primer vendedor',
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
            name: 'numero_id_vendedor_1',
            type: 'text',
            description: 'Ingrese el número de identificación del primer vendedor'
        },
        {
            name: 'estado_vendedor_1',
            type: 'select',
            description: 'Seleccione el estado civil del primer vendedor',
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
            name: 'direccion_vendedor_1',
            type: 'text',
            description: 'Ingrese la dirección del primer vendedor'
        },
        {
            name: 'depart_vendedor_1',
            type: 'text',
            description: 'Ingrese el departamento del primer vendedor'
        },
        {
            name: 'municipio_vendedor_1',
            type: 'text',
            description: 'Ingrese el municipio del primer vendedor'
        },
        {
            name: 'correo_vendedor_1',
            type: 'email',
            description: 'Ingrese el correo electrónico del primer vendedor'
        },
        {
            name: 'telefono_vendedor_1',
            type: 'phone',
            description: 'Ingrese el número teléfonico del primer vendedor'
        },
        {
            name: 'vendedor_2',
            description: '¿Desea ingresar un segundo vendedor?',
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
            name: 'nombre_vendedor_2',
            type: 'name',
            description: 'Ingrese el nombre del segundo vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_documento_vendedor_2',
            description: 'Seleccione el tipo de documento de identifiación del segundo vendedor',
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
                    k: 'vendedor_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_id_vendedor_2',
            type: 'text',
            description: 'Ingrese el número de identificación del segundo vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'estado_vendedor_2',
            type: 'select',
            description: 'Seleccione el estado civil del segundo vendedor',
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
                    k: 'vendedor_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'direccion_vendedor_2',
            type: 'text',
            description: 'Ingrese la dirección del segundo vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'depart_vendedor_2',
            type: 'text',
            description: 'Ingrese el departamento del segundo vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'municipio_vendedor_2',
            type: 'text',
            description: 'Ingrese el municipio del segundo vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_vendedor_2',
            type: 'email',
            description: 'Ingrese el correo electrónico del segundo vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'telefono_vendedor_2',
            type: 'phone',
            description: 'Ingrese el número teléfonico del segundo vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'vendedor_3',
            description: '¿Desea ingresar un tercer vendedor?',
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
                    k: 'vendedor_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_vendedor_3',
            type: 'name',
            description: 'Ingrese el nombre del tercer vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_documento_vendedor_3',
            description: 'Seleccione el tipo de documento de identifiación del tercer vendedor',
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
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_id_vendedor_3',
            type: 'text',
            description: 'Ingrese el número de identificación del tercer vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'estado_vendedor_3',
            type: 'select',
            description: 'Seleccione el estado civil del tercer vendedor',
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
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'direccion_vendedor_3',
            type: 'text',
            description: 'Ingrese la dirección del tercer vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'depart_vendedor_3',
            type: 'text',
            description: 'Ingrese el departamento del tercer vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'municipio_vendedor_3',
            type: 'text',
            description: 'Ingrese el municipio del tercer vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_vendedor_3',
            type: 'email',
            description: 'Ingrese el correo electrónico del tercer vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'telefono_vendedor_3',
            type: 'phone',
            description: 'Ingrese el número teléfonico del tercer vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'vendedor_4',
            description: '¿Desea ingresar un cuarto vendedor?',
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
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_vendedor_4',
            type: 'name',
            description: 'Ingrese el nombre del cuarto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_documento_vendedor_4',
            description: 'Seleccione el tipo de documento de identifiación del cuarto vendedor',
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
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_id_vendedor_4',
            type: 'text',
            description: 'Ingrese el número de identificación del cuarto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'estado_vendedor_4',
            type: 'select',
            description: 'Seleccione el estado civil del cuarto vendedor',
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
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'direccion_vendedor_4',
            type: 'text',
            description: 'Ingrese la dirección del cuarto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'depart_vendedor_4',
            type: 'text',
            description: 'Ingrese el departamento del cuarto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'municipio_vendedor_4',
            type: 'text',
            description: 'Ingrese el municipio del cuarto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_vendedor_4',
            type: 'email',
            description: 'Ingrese el correo electrónico del cuarto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'telefono_vendedor_4',
            type: 'phone',
            description: 'Ingrese el número teléfonico del cuarto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'vendedor_5',
            description: '¿Desea ingresar un quinto vendedor?',
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
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_vendedor_5',
            type: 'name',
            description: 'Ingrese el nombre del quinto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_documento_vendedor_5',
            description: 'Seleccione el tipo de documento de identifiación del quinto vendedor',
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
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_id_vendedor_5',
            type: 'text',
            description: 'Ingrese el número de identificación del quinto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'estado_vendedor_5',
            type: 'select',
            description: 'Seleccione el estado civil del quinto vendedor',
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
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'direccion_vendedor_5',
            type: 'text',
            description: 'Ingrese la dirección del quinto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'depart_vendedor_5',
            type: 'text',
            description: 'Ingrese el departamento del quinto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'municipio_vendedor_5',
            type: 'text',
            description: 'Ingrese el municipio del quinto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_vendedor_5',
            type: 'email',
            description: 'Ingrese el correo electrónico del quinto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'telefono_vendedor_5',
            type: 'phone',
            description: 'Ingrese el número teléfonico del quinto vendedor',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
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
            name: 'fecha_firma_contrato',
            description: 'Seleccione la fecha de firma de la promesa',
            type: 'date'
        },
        {
            name: 'hora_contrato',
            description: 'Ingrese la hora de firma de la promesa',
            type: 'text'
        },
        {
            name: 'fecha_entrega_material',
            description: 'Seleccione la fecha de entrega del inmueble',
            type: 'date'
        },
        {
            name: 'ciudad_escritura',
            description: 'Seleccione la ciudad donde se hace la escritura',
            value: 'med',
            type: 'clausula',
            options: [
                {
                    name: 'Medellín',
                    value: 'med'
                },
                {
                    name: 'Bogotá',
                    value: 'bog'
                },
                {
                    name: 'Otra',
                    value: 'otra'
                }
            ]
        },
        {
            name: 'parrafo_escritura_otra',
            description: 'Redacte la clausula de gastos de escritura de venta',
            type: 'text',
            prereq: [
                {
                    k: 'ciudad_escritura',
                    v: 'otra'
                }
            ]
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
            description: 'Ingrese la ciudad donde se firma la promesa',
            type: 'text'
        }
    ],
    sign: [
        'nombre_vendedor_1',
        'correo_vendedor_1',
        'telefono_vendedor_1',
        'numero_id_vendedor_1',
        'nombre_vendedor_2',
        'correo_vendedor_2',
        'telefono_vendedor_2',
        'numero_id_vendedor_2',
        'nombre_vendedor_3',
        'correo_vendedor_3',
        'telefono_vendedor_3',
        'numero_id_vendedor_3',
        'nombre_vendedor_4',
        'correo_vendedor_4',
        'telefono_vendedor_4',
        'numero_id_vendedor_4',
        'nombre_vendedor_5',
        'correo_vendedor_5',
        'telefono_vendedor_5',
        'numero_id_vendedor_5',
        'email_fel',
        'cel_fel',
        'email_and',
        'cel_and',
        'email_stef',
        'cel_stef'
    ],
    signatureProfile: [
        {
            name: 'nombre_vendedor_1',
            email: 'correo_vendedor_1',
            phone: 'telefono_vendedor_1',
            type: 'firma_vendedor_1',
            identification: 'numero_id_vendedor_1'
        },
        {
            name: 'nombre_vendedor_2',
            email: 'correo_vendedor_2',
            phone: 'telefono_vendedor_2',
            type: 'firma_vendedor_2',
            identification: 'numero_id_vendedor_2'
        },
        {
            name: 'nombre_vendedor_3',
            email: 'correo_vendedor_3',
            phone: 'telefono_vendedor_3',
            type: 'firma_vendedor_3',
            identification: 'numero_id_vendedor_3'
        },
        {
            name: 'nombre_vendedor_4',
            email: 'correo_vendedor_4',
            phone: 'telefono_vendedor_4',
            type: 'firma_vendedor_4',
            identification: 'numero_id_vendedor_4'
        },
        {
            name: 'nombre_vendedor_5',
            email: 'correo_vendedor_5',
            phone: 'telefono_vendedor_5',
            type: 'firma_vendedor_5',
            identification: 'numero_id_vendedor_5'
        },
        {
            name: 'nombre_rep_hc',
            email: 'email_rep_hc',
            phone: 'cel_rep_hc',
            identification: 'cc_rep_hc',
            type: 'firma_rep_hc'
        }
    ],
    preBuild: true,
    preBuildData: [
        'document_code',
        'correo_enviar'
    ],
    name: 'Promesa compra 2022',
    company: ObjectId('614a3a750aebb000084cbac0'),
    username: '111cdc4d-4bcb-4dfc-85d5-94b8a86bb916',
    build: 0,
    price: 5000
}