{
    _id: ObjectId('62e82d4f51fc27d23d9291a1'),
    config: [
        {
            name: 'ciudad',
            description: 'Ingrese la ciudad en la que se entrega el documento',
            type: 'text'
        },
        {
            name: 'nombres_presentante',
            description: 'Ingrese los nombres y apellidos de quien presenta la lista',
            type: 'name'
        },
        {
            name: 'cc_presentante',
            description: 'Ingrese el número de cédula de quien presenta la lista',
            type: 'number'
        },
        {
            name: 'tipo_persona_principal_1',
            description: 'Seleccione el tipo de persona del primer candidato principal',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n'
        },
        {
            name: 'razon_principal_1',
            type: 'name',
            description: 'Ingrese la razón social del primer candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_1',
                    v: 'j'
                }
            ]
        },
        {
            name: 'nit_principal_1',
            type: 'text',
            description: 'Ingrese el NIT del primer candidato principal (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_principal_1',
                    v: 'j'
                }
            ]
        },
        {
            name: 'nombre_principal_1',
            type: 'name',
            description: 'Ingrese el nombre del primer candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_1',
                    v: 'n'
                }
            ]
        },
        {
            name: 'cc_principal_1',
            type: 'number',
            description: 'Ingrese el número de cédula del primer candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_1',
                    v: 'n'
                }
            ]
        },
        {
            name: 'tipo_persona_suplente_1',
            description: 'Seleccione el tipo de persona del primer candidato suplente',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n'
        },
        {
            name: 'razon_suplente_1',
            type: 'name',
            description: 'Ingrese la razón social del primer candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_1',
                    v: 'j'
                }
            ]
        },
        {
            name: 'nit_suplente_1',
            type: 'text',
            description: 'Ingrese el NIT del primer candidato suplente (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_suplente_1',
                    v: 'j'
                }
            ]
        },
        {
            name: 'nombre_suplente_1',
            type: 'name',
            description: 'Ingrese el nombre del primer candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_1',
                    v: 'n'
                }
            ]
        },
        {
            name: 'cc_suplente_1',
            type: 'number',
            description: 'Ingrese el número de cédula del primer candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_1',
                    v: 'n'
                }
            ]
        },
        {
            name: 'segundo_candidato',
            description: '¿Desea ingresar un segundo candidato?',
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
            value: 'n'
        },
        {
            name: 'tipo_persona_principal_2',
            description: 'Seleccione el tipo de persona del segundo candidato principal',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_principal_2',
            type: 'name',
            description: 'Ingrese la razón social del segundo candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_2',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_principal_2',
            type: 'text',
            description: 'Ingrese el NIT del segundo candidato principal (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_principal_2',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_principal_2',
            type: 'name',
            description: 'Ingrese el nombre del segundo candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_2',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_principal_2',
            type: 'number',
            description: 'Ingrese el número de cédula del segundo candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_2',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_suplente_2',
            description: 'Seleccione el tipo de persona del segundo candidato suplente',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_suplente_2',
            type: 'name',
            description: 'Ingrese la razón social del segundo candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_2',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_suplente_2',
            type: 'text',
            description: 'Ingrese el NIT del segundo candidato suplente (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_suplente_2',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_suplente_2',
            type: 'name',
            description: 'Ingrese el nombre del segundo candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_2',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_suplente_2',
            type: 'number',
            description: 'Ingrese el número de cédula del segundo candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_2',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tercer_candidato',
            description: '¿Desea ingresar un tercer candidato?',
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
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_principal_3',
            description: 'Seleccione el tipo de persona del tercer candidato principal',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_principal_3',
            type: 'name',
            description: 'Ingrese la razón social del tercer candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_3',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_principal_3',
            type: 'text',
            description: 'Ingrese el NIT del tercer candidato principal (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_principal_3',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_principal_3',
            type: 'name',
            description: 'Ingrese el nombre del tercer candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_3',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_principal_3',
            type: 'number',
            description: 'Ingrese el número de cédula del tercer candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_3',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_suplente_3',
            description: 'Seleccione el tipo de persona del tercer candidato suplente',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_suplente_3',
            type: 'name',
            description: 'Ingrese la razón social del tercer candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_3',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_suplente_3',
            type: 'text',
            description: 'Ingrese el NIT del tercer candidato suplente (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_suplente_3',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_suplente_3',
            type: 'name',
            description: 'Ingrese el nombre del tercer candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_3',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_suplente_3',
            type: 'number',
            description: 'Ingrese el número de cédula del tercer candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_3',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cuarto_candidato',
            description: '¿Desea ingresar un cuarto candidato?',
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
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_principal_4',
            description: 'Seleccione el tipo de persona del cuarto candidato principal',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_principal_4',
            type: 'name',
            description: 'Ingrese la razón social del cuarto candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_4',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_principal_4',
            type: 'text',
            description: 'Ingrese el NIT del cuarto candidato principal (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_principal_4',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_principal_4',
            type: 'name',
            description: 'Ingrese el nombre del cuarto candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_4',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_principal_4',
            type: 'number',
            description: 'Ingrese el número de cédula del cuarto candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_4',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_suplente_4',
            description: 'Seleccione el tipo de persona del cuarto candidato suplente',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_suplente_4',
            type: 'name',
            description: 'Ingrese la razón social del cuarto candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_4',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_suplente_4',
            type: 'text',
            description: 'Ingrese el NIT del cuarto candidato suplente (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_suplente_4',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_suplente_4',
            type: 'name',
            description: 'Ingrese el nombre del cuarto candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_4',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_suplente_4',
            type: 'number',
            description: 'Ingrese el número de cédula del cuarto candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_4',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'quinto_candidato',
            description: '¿Desea ingresar un quinto candidato?',
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
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_principal_5',
            description: 'Seleccione el tipo de persona del quinto candidato principal',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_principal_5',
            type: 'name',
            description: 'Ingrese la razón social del quinto candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_5',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_principal_5',
            type: 'text',
            description: 'Ingrese el NIT del quinto candidato principal (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_principal_5',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_principal_5',
            type: 'name',
            description: 'Ingrese el nombre del quinto candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_5',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_principal_5',
            type: 'number',
            description: 'Ingrese el número de cédula del quinto candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_5',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_suplente_5',
            description: 'Seleccione el tipo de persona del quinto candidato suplente',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_suplente_5',
            type: 'name',
            description: 'Ingrese la razón social del quinto candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_5',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_suplente_5',
            type: 'text',
            description: 'Ingrese el NIT del quinto candidato suplente (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_suplente_5',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_suplente_5',
            type: 'name',
            description: 'Ingrese el nombre del quinto candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_5',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_suplente_5',
            type: 'number',
            description: 'Ingrese el número de cédula del quinto candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_5',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'sexto_candidato',
            description: '¿Desea ingresar un sexto candidato?',
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
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_principal_6',
            description: 'Seleccione el tipo de persona del sexto candidato principal',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_principal_6',
            type: 'name',
            description: 'Ingrese la razón social del sexto candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_6',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_principal_6',
            type: 'text',
            description: 'Ingrese el NIT del sexto candidato principal (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_principal_6',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_principal_6',
            type: 'name',
            description: 'Ingrese el nombre del sexto candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_6',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_principal_6',
            type: 'number',
            description: 'Ingrese el número de cédula del sexto candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_6',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_suplente_6',
            description: 'Seleccione el tipo de persona del sexto candidato suplente',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_suplente_6',
            type: 'name',
            description: 'Ingrese la razón social del sexto candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_6',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_suplente_6',
            type: 'text',
            description: 'Ingrese el NIT del sexto candidato suplente (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_suplente_6',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_suplente_6',
            type: 'name',
            description: 'Ingrese el nombre del sexto candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_6',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_suplente_6',
            type: 'number',
            description: 'Ingrese el número de cédula del sexto candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_6',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'septimo_candidato',
            description: '¿Desea ingresar un septimo candidato?',
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
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_principal_7',
            description: 'Seleccione el tipo de persona del séptimo candidato principal',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_principal_7',
            type: 'name',
            description: 'Ingrese la razón social del séptimo candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_7',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_principal_7',
            type: 'text',
            description: 'Ingrese el NIT del séptimo candidato principal (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_principal_7',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_principal_7',
            type: 'name',
            description: 'Ingrese el nombre del séptimo candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_7',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_principal_7',
            type: 'number',
            description: 'Ingrese el número de cédula del séptimo candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_7',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_suplente_7',
            description: 'Seleccione el tipo de persona del séptimo candidato suplente',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_suplente_7',
            type: 'name',
            description: 'Ingrese la razón social del séptimo candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_7',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_suplente_7',
            type: 'text',
            description: 'Ingrese el NIT del séptimo candidato suplente (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_suplente_7',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_suplente_7',
            type: 'name',
            description: 'Ingrese el nombre del séptimo candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_7',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_suplente_7',
            type: 'number',
            description: 'Ingrese el número de cédula del séptimo candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_7',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'octavo_candidato',
            description: '¿Desea ingresar un octavo candidato?',
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
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_principal_8',
            description: 'Seleccione el tipo de persona del octavo candidato principal',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                },
                {
                    k: 'octavo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_principal_8',
            type: 'name',
            description: 'Ingrese la razón social del octavo candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_8',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                },
                {
                    k: 'octavo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_principal_8',
            type: 'text',
            description: 'Ingrese el NIT del octavo candidato principal (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_principal_8',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                },
                {
                    k: 'octavo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_principal_8',
            type: 'name',
            description: 'Ingrese el nombre del octavo candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_8',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                },
                {
                    k: 'octavo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_principal_8',
            type: 'number',
            description: 'Ingrese el número de cédula del octavo candidato principal',
            prereq: [
                {
                    k: 'tipo_persona_principal_8',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                },
                {
                    k: 'octavo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_suplente_8',
            description: 'Seleccione el tipo de persona del octavo candidato suplente',
            type: 'clausula',
            options: [
                {
                    name: 'Natural',
                    value: 'n'
                },
                {
                    name: 'Juridica',
                    value: 'j'
                }
            ],
            value: 'n',
            prereq: [
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                },
                {
                    k: 'octavo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'razon_suplente_8',
            type: 'name',
            description: 'Ingrese la razón social del octavo candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_8',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                },
                {
                    k: 'octavo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_suplente_8',
            type: 'text',
            description: 'Ingrese el NIT del octavo candidato suplente (indique el número de verificación)',
            prereq: [
                {
                    k: 'tipo_persona_suplente_8',
                    v: 'j'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                },
                {
                    k: 'octavo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_suplente_8',
            type: 'name',
            description: 'Ingrese el nombre del octavo candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_8',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                },
                {
                    k: 'octavo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_suplente_8',
            type: 'number',
            description: 'Ingrese el número de cédula del octavo candidato suplente',
            prereq: [
                {
                    k: 'tipo_persona_suplente_8',
                    v: 'n'
                },
                {
                    k: 'segundo_candidato',
                    v: 's'
                },
                {
                    k: 'tercer_candidato',
                    v: 's'
                },
                {
                    k: 'cuarto_candidato',
                    v: 's'
                },
                {
                    k: 'quinto_candidato',
                    v: 's'
                },
                {
                    k: 'sexto_candidato',
                    v: 's'
                },
                {
                    k: 'septimo_candidato',
                    v: 's'
                },
                {
                    k: 'octavo_candidato',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_presentante',
            description: 'Ingrese el correo electrónico donde llegará la invitación a añadir adjuntos',
            type: 'email'
        },
        {
            name: 'cell_presentante',
            description: 'Ingrese el número de teléfono de contacto de quien presenta la lista',
            type: 'phone'
        },
    ],
    operation: [],
    name: 'Solicitud de inscripción de lista Junta Directiva',
    preFill: [],
    sign: [
        'nombres_presentante',
        'cc_presentante',
        'correo_presentante',
        'cell_presentante',
        'nombre_principal_1',
        'cc_principal_1',
        'nit_principal_1',
        'razon_principal_1',
        'nombre_suplente_1',
        'cc_suplente_1',
        'nit_suplente_1',
        'razon_suplente_1',
        'nombre_principal_2',
        'cc_principal_2',
        'nit_principal_2',
        'razon_principal_2',
        'nombre_suplente_2',
        'cc_suplente_2',
        'nit_suplente_2',
        'razon_suplente_2',
        'nombre_principal_3',
        'cc_principal_3',
        'nit_principal_3',
        'razon_principal_3',
        'nombre_suplente_3',
        'cc_suplente_3',
        'nit_suplente_3',
        'razon_suplente_3',
        'nombre_principal_4',
        'cc_principal_4',
        'nit_principal_4',
        'razon_principal_4',
        'nombre_suplente_4',
        'cc_suplente_4',
        'nit_suplente_4',
        'razon_suplente_4',
        'nombre_principal_5',
        'cc_principal_5',
        'nit_principal_5',
        'razon_principal_5',
        'nombre_suplente_5',
        'cc_suplente_5',
        'nit_suplente_5',
        'razon_suplente_5',
        'nombre_principal_6',
        'cc_principal_6',
        'nit_principal_6',
        'razon_principal_6',
        'nombre_suplente_6',
        'cc_suplente_6',
        'nit_suplente_6',
        'razon_suplente_6',
        'nombre_principal_7',
        'cc_principal_7',
        'nit_principal_7',
        'razon_principal_7',
        'nombre_suplente_7',
        'cc_suplente_7',
        'nit_suplente_7',
        'razon_suplente_7',
        'nombre_principal_8',
        'cc_principal_8',
        'nit_principal_8',
        'razon_principal_8',
        'nombre_suplente_8',
        'cc_suplente_8',
        'nit_suplente_8',
        'razon_suplente_8'
    ],
    signatureProfile: [
        {
            name: 'nombres_presentante',
            identification: 'cc_presentante',
            email: 'correo_presentante',
            phone: 'cell_presentante',
            type: 'firma_presentante',
            'package': true
        }
    ],
    files: [
        {
            name: 'Constancia de Aceptación Principal 1',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 1',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 2',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 2',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 3',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 3',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 4',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 4',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 5',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 5',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 6',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 6',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 7',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 7',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 8',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 8',
            approve: 'pending',
            required: false
        }
    ],
    price: 5000,
    build: 7
}