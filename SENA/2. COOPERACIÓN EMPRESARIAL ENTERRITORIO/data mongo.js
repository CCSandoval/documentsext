{
    _id: ObjectId('61ef21de116f24246c0ad8ef'),
    config: [
        {
            description: 'Ingrese el número del contrato',
            name: 'numero_contrato',
            type: 'text',
            help: 'number'
        },
        {
            description: 'Ingrese el nombre del primer beneficiario',
            name: 'nombre_primer_beneficiario',
            type: 'name',
            help: 'name'
        },
        {
            description: 'Seleccione el tipo de documento de identidad del primer beneficiario',
            name: 'tipo_id_ben_1',
            options: [
                {
                    name: 'Cédula de Ciudadnía',
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
            value: 'cc',
            type: 'clausula'
        },
        {
            description: 'Ingrese el número de cédula ciudadanía del primer beneficiario',
            name: 'cc_beneficiario_1',
            prereq: [
                {
                    k: 'tipo_id_ben_1',
                    v: 'cc'
                }
            ],
            type: 'number'
        },
        {
            description: 'Ingrese el número de cédula extranjería del primer beneficiario',
            name: 'ce_beneficiario_1',
            prereq: [
                {
                    k: 'tipo_id_ben_1',
                    v: 'ce'
                }
            ],
            type: 'number'
        },
        {
            description: 'Ingrese el pasaporte del primer beneficiario',
            name: 'pa_beneficiario_1',
            prereq: [
                {
                    k: 'tipo_id_ben_1',
                    v: 'pa'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea ingresar un segundo beneficiario?',
            name: 'segundo_beneficiario',
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
            type: 'clausula'
        },
        {
            description: 'Ingrese el nombre del segundo beneficiario',
            name: 'nombre_segundo_beneficiario',
            prereq: [
                {
                    k: 'segundo_beneficiario',
                    v: 's'
                }
            ],
            type: 'name',
            help: 'name'
        },
        {
            description: 'Seleccione el tipo de documento de identidad del segundo beneficiario',
            name: 'tipo_id_ben_2',
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
                    k: 'segundo_beneficiario',
                    v: 's'
                }
            ],
            value: 'cc',
            type: 'clausula'
        },
        {
            description: 'Ingrese el número de cédula de ciudadanía del segundo beneficiario',
            name: 'cc_beneficiario_2',
            prereq: [
                {
                    k: 'segundo_beneficiario',
                    v: 's'
                },
                {
                    k: 'tipo_id_ben_2',
                    v: 'cc'
                }
            ],
            type: 'number'
        },
        {
            description: 'Ingrese el número de cédula de extranjería del segundo beneficiario',
            name: 'ce_beneficiario_2',
            prereq: [
                {
                    k: 'segundo_beneficiario',
                    v: 's'
                },
                {
                    k: 'tipo_id_ben_2',
                    v: 'ce'
                }
            ],
            type: 'number'
        },
        {
            description: 'Ingrese el pasaporte del segundo beneficiario',
            name: 'pa_beneficiario_2',
            prereq: [
                {
                    k: 'segundo_beneficiario',
                    v: 's'
                },
                {
                    k: 'tipo_id_ben_2',
                    v: 'pa'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea ingresar un tercer beneficiario?',
            name: 'tercer_beneficiario',
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
                    k: 'segundo_beneficiario',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Ingrese el nombre del tercer beneficiario',
            name: 'nombre_tercer_beneficiario',
            type: 'name',
            help: 'name',
            prereq: [
                {
                    k: 'segundo_beneficiario',
                    v: 's'
                },
                {
                    k: 'tercer_beneficiario',
                    v: 's'
                }
            ]
        },
        {
            description: 'Seleccione el tipo de documento de identidad del tercer beneficiario',
            name: 'tipo_id_ben_3',
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
                    k: 'segundo_beneficiario',
                    v: 's'
                },
                {
                    k: 'tercer_beneficiario',
                    v: 's'
                }
            ],
            value: 'cc',
            type: 'clausula'
        },
        {
            description: 'Ingrese el número de cédula de ciudadanía del tercer beneficiario',
            name: 'cc_beneficiario_3',
            type: 'number',
            prereq: [
                {
                    k: 'segundo_beneficiario',
                    v: 's'
                },
                {
                    k: 'tercer_beneficiario',
                    v: 's'
                },
                {
                    k: 'tipo_id_ben_3',
                    v: 'cc'
                }
            ]
        },
        {
            description: 'Ingrese el número de cédula de extranjería del tercer beneficiario',
            name: 'ce_beneficiario_3',
            type: 'number',
            prereq: [
                {
                    k: 'segundo_beneficiario',
                    v: 's'
                },
                {
                    k: 'tercer_beneficiario',
                    v: 's'
                },
                {
                    k: 'tipo_id_ben_3',
                    v: 'ce'
                }
            ]
        },
        {
            description: 'Ingrese el pasaporte del tercer beneficiario',
            name: 'pa_beneficiario_3',
            type: 'text',
            prereq: [
                {
                    k: 'segundo_beneficiario',
                    v: 's'
                },
                {
                    k: 'tercer_beneficiario',
                    v: 's'
                },
                {
                    k: 'tipo_id_ben_3',
                    v: 'pa'
                }
            ]
        },
        {
            description: 'Ingrese el número de acta',
            name: 'numero_acta',
            type: 'text',
            help: 'number'
        },
        {
            description: 'Seleccione la fecha del acta',
            name: 'fecha_acta',
            type: 'date'
        },
        {
            description: 'Ingrese el numero del plan de negocios',
            name: 'id_plan',
            type: 'text',
            help: 'number'
        },
        {
            description: 'Ingrese el nombre del plan de negocios',
            name: 'nombre_plan',
            type: 'name'
        },
        {
            description: 'Ingrese el valor aprobado para el plan de negocios',
            name: 'valor_plan',
            type: 'currency',
            removeText: true
        },
        {
            description: 'Ingrese el dia del mes en que se firma el contrato',
            name: 'dias_firma',
            type: 'number'
        },
        {
            description: 'Ingrese el mes en que se firma el contrato',
            name: 'mes_firma',
            type: 'text'
        },
        {
            description: 'Ingrese el año en que se firma el contrato',
            name: 'anio_firma',
            type: 'text',
            help: 'anio'
        },
        {
            description: 'Ingrese el correo del primer beneficiario',
            name: 'correo_beneficiario_1',
            type: 'text'
        },
        {
            description: 'Ingrese el correo del segundo beneficiario',
            name: 'correo_beneficiario_2',
            type: 'text',
            prereq: [
                {
                    k: 'segundo_beneficiario',
                    v: 's'
                }
            ]
        },
        {
            description: 'Ingrese el correo del tercer beneficiario',
            name: 'correo_beneficiario_3',
            type: 'text',
            prereq: [
                {
                    k: 'segundo_beneficiario',
                    v: 's'
                },
                {
                    k: 'tercer_beneficiario',
                    v: 's'
                }
            ]
        }
    ],
    operation: [],
    sign: [
        'correo_beneficiario_1',
        'correo_beneficiario_2',
        'correo_beneficiario_3',
        'numero_contrato',
        'nombre_primer_beneficiario',
        'nombre_segundo_beneficiario',
        'nombre_tercer_beneficiario',
        'tipo_id_ben_1',
        'tipo_id_ben_2',
        'tipo_id_ben_3',
        'cc_beneficiario_1',
        'ce_beneficiario_1',
        'pa_beneficiario_1',
        'cc_beneficiario_2',
        'ce_beneficiario_2',
        'pa_beneficiario_2',
        'cc_beneficiario_3',
        'ce_beneficiario_3',
        'pa_beneficiario_3',
        'numero_acta',
        'fecha_acta',
        'id_plan',
        'nombre_plan',
        'valor_plan',
        'dias_firma',
        'mes_firma',
        'anio_firma'
    ],
    help: {
        name: 'Ejemplo: Sebastian José Saldarriaga Lopez',
        anio: 'Ejemplo: 2008',
        number: 'Ejemplo: 15487'
    },
    preFill: [
        {
            name: 'nombre_sena',
            value: 'HERNAN DARIO FUENTES SALDARRIAGA'
        },
        {
            name: 'cargo_sena',
            value: 'Director de Empleo y Trabajo SENA'
        },
        {
            name: 'cc_sena',
            value: '3.349.902'
        },
        {
            name: 'nombre_enterritorio',
            value: 'ANDREA CAROLINA ÁLVAREZ CASADIEGO'
        },
        {
            name: 'cc_enterritorio',
            value: '52.864.280'
        },
        {
            name: 'cargo_enterritorio',
            value: 'Subgerente de Operaciones (E)'
        },
        {
            name: 'cargo_beneficiario',
            value: 'EL (LOS) BENEFICIARIO(S)'
        }
    ],
    signatureProfile: [
        {
            name: 'nombre_sena',
            title: 'cargo_sena',
            identification: 'cc_sena',
            type: 'firma_sena'
        },
        {
            name: 'nombre_enterritorio',
            title: 'cargo_enterritorio',
            identification: 'cc_enterritorio',
            type: 'firma_enterritorio'
        },
        {
            name: 'nombre_primer_beneficiario',
            title: 'cargo_beneficiario',
            email: 'correo_beneficiario_1',
            identification: 'cc_beneficiario_1|ce_beneficiario_1|pa_beneficiario_1',
            type: 'firma_beneficiario_1'
        },
        {
            name: 'nombre_segundo_beneficiario',
            title: 'cargo_beneficiario',
            email: 'correo_beneficiario_2',
            identification: 'cc_beneficiario_2|ce_beneficiario_2|pa_beneficiario_2',
            type: 'firma_beneficiario_2'
        },
        {
            name: 'nombre_tercer_beneficiario',
            title: 'cargo_beneficiario',
            email: 'correo_beneficiario_3',
            identification: 'cc_beneficiario_3|ce_beneficiario_3|pa_beneficiario_3',
            type: 'firma_beneficiario_3'
        }
    ],
    name: 'CONTRATO DE COOPERACIÓN EMPRESARIAL',
    price: 0,
    build: 6,
    preBuild: false,
    preBuildData: []
}