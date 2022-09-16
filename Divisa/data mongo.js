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
            name: 'tipo_id_deudor',
            description: 'Seleccione el tipo de documento de identidad del deudor',
            type: 'clausula',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ]
        },
        {
            name: 'cc_deudor',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del deudor',
            prereq: [
                {
                    k: 'tipo_id_deudor',
                    v: 'cc'
                }
            ]
        },
        {
            name: 'ce_deudor',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del deudor',
            prereq: [
                {
                    k: 'tipo_id_deudor',
                    v: 'ce'
                }
            ]
        },
        {
            name: 'pa_deudor',
            type: 'text',
            description: 'Ingrese el pasaporte del deudor',
            prereq: [
                {
                    k: 'tipo_id_deudor',
                    v: 'pa'
                }
            ]
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
            name: 'tipo_rep_deudor',
            type: 'select',
            description: 'Seleccione el tipo de representante legal del deudor',
            value: 'rep',
            options: [
                {
                    name: 'Representante Legal',
                    label: 'Representante Legal',
                    value: 'rep'
                },
                {
                    name: 'Representante Legal Suplente',
                    label: 'Representante Legal Suplente',
                    value: 'sup'
                },
                {
                    name: 'Apoderado del Representante Legal',
                    label: 'Apoderado del Representante Legal',
                    value: 'apoderado'
                }
            ],
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
            ],
            prereq: [
                {
                    k: 'establecimiento',
                    v: 'n'
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
                },
                {
                    k: 'establecimiento',
                    v: 'n'
                }
            ]
        },
        {
            name: 'tipo_rep_avalista_1',
            type: 'select',
            description: 'Seleccione el tipo de representante legal del primer avalista',
            value: 'rep',
            options: [
                {
                    name: 'Representante Legal',
                    label: 'Representante Legal',
                    value: 'rep'
                },
                {
                    name: 'Representante Legal Suplente',
                    label: 'Representante Legal Suplente',
                    value: 'sup'
                },
                {
                    name: 'Apoderado del Representante Legal',
                    label: 'Apoderado del Representante Legal',
                    value: 'apoderado'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_avalista_1',
                    v: 'j'
                },
                {
                    k: 'establecimiento',
                    v: 'n'
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
                },
                {
                    k: 'establecimiento',
                    v: 'n'
                }
            ]
        },
        {
            name: 'nombre_avalista_1',
            type: 'name',
            description: 'Ingrese el nombre del primer avalista',
            prereq: [
                {
                    k: 'establecimiento',
                    v: 'n'
                }
            ]
        },
        {
            name: 'tipo_id_avalista_1',
            description: 'Seleccione el tipo de documento de identidad del primer avalista',
            type: 'clausula',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'establecimiento',
                    v: 'n'
                }
            ]
        },
        {
            name: 'cc_avalista_1',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del primer avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_1',
                    v: 'cc'
                },
                {
                    k: 'establecimiento',
                    v: 'n'
                }
            ]
        },
        {
            name: 'ce_avalista_1',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del primer avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_1',
                    v: 'ce'
                },
                {
                    k: 'establecimiento',
                    v: 'n'
                }
            ]
        },
        {
            name: 'pa_avalista_1',
            type: 'text',
            description: 'Ingrese el pasaporte del primer avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_1',
                    v: 'pa'
                },
                {
                    k: 'establecimiento',
                    v: 'n'
                }
            ]
        },
        {
            name: 'correo_avalista_1',
            type: 'email',
            description: 'Ingrese el correo electrónico del primer avalista',
            prereq: [
                {
                    k: 'establecimiento',
                    v: 'n'
                }
            ]
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
            ],
            prereq: [
                {
                    k: 'establecimiento',
                    v: 'n'
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
            name: 'tipo_rep_avalista_2',
            type: 'select',
            description: 'Seleccione el tipo de representante legal del segundo avalista',
            value: 'rep',
            options: [
                {
                    name: 'Representante Legal',
                    label: 'Representante Legal',
                    value: 'rep'
                },
                {
                    name: 'Representante Legal Suplente',
                    label: 'Representante Legal Suplente',
                    value: 'sup'
                },
                {
                    name: 'Apoderado del Representante Legal',
                    label: 'Apoderado del Representante Legal',
                    value: 'apoderado'
                }
            ],
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
            name: 'tipo_id_avalista_2',
            description: 'Seleccione el tipo de documento de identidad del segundo avalista',
            type: 'clausula',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
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
            name: 'cc_avalista_2',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del segundo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_2',
                    v: 'cc'
                },
                {
                    k: 'avalista_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'ce_avalista_2',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del segundo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_2',
                    v: 'ce'
                },
                {
                    k: 'avalista_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'pa_avalista_2',
            type: 'text',
            description: 'Ingrese el pasaporte del segundo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_2',
                    v: 'pa'
                },
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
            name: 'tipo_rep_avalista_3',
            type: 'select',
            description: 'Seleccione el tipo de representante legal del tercer avalista',
            value: 'rep',
            options: [
                {
                    name: 'Representante Legal',
                    label: 'Representante Legal',
                    value: 'rep'
                },
                {
                    name: 'Representante Legal Suplente',
                    label: 'Representante Legal Suplente',
                    value: 'sup'
                },
                {
                    name: 'Apoderado del Representante Legal',
                    label: 'Apoderado del Representante Legal',
                    value: 'apoderado'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_avalista_3',
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
            name: 'tipo_id_avalista_3',
            description: 'Seleccione el tipo de documento de identidad del tercer avalista',
            type: 'clausula',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'avalista_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_avalista_3',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del tercer avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_3',
                    v: 'cc'
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
            name: 'ce_avalista_3',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del tercer avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_3',
                    v: 'ce'
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
            name: 'pa_avalista_3',
            type: 'text',
            description: 'Ingrese el pasaporte del tercer avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_3',
                    v: 'pa'
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
            name: 'tipo_rep_avalista_4',
            type: 'select',
            description: 'Seleccione el tipo de representante legal del cuarto avalista',
            value: 'rep',
            options: [
                {
                    name: 'Representante Legal',
                    label: 'Representante Legal',
                    value: 'rep'
                },
                {
                    name: 'Representante Legal Suplente',
                    label: 'Representante Legal Suplente',
                    value: 'sup'
                },
                {
                    name: 'Apoderado del Representante Legal',
                    label: 'Apoderado del Representante Legal',
                    value: 'apoderado'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_avalista_4',
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
            name: 'tipo_id_avalista_4',
            description: 'Seleccione el tipo de documento de identidad del cuarto avalista',
            type: 'clausula',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
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
            name: 'cc_avalista_4',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del cuarto avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_4',
                    v: 'cc'
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
            name: 'ce_avalista_4',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del cuarto avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_4',
                    v: 'ce'
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
            name: 'pa_avalista_4',
            type: 'text',
            description: 'Ingrese el pasaporte del cuarto avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_4',
                    v: 'pa'
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
            name: 'avalista_5',
            type: 'clausula',
            description: '¿Desea ingresar un quinto avalista?',
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
                },
                {
                    k: 'avalista_4',
                    v: 's'
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_avalista_5',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del quinto avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_empresa_av_5',
            type: 'text',
            description: 'Ingrese el nombre de la empresa del quinto avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_rep_avalista_5',
            type: 'select',
            description: 'Seleccione el tipo de representante legal del quinto avalista',
            value: 'rep',
            options: [
                {
                    name: 'Representante Legal',
                    label: 'Representante Legal',
                    value: 'rep'
                },
                {
                    name: 'Representante Legal Suplente',
                    label: 'Representante Legal Suplente',
                    value: 'sup'
                },
                {
                    name: 'Apoderado del Representante Legal',
                    label: 'Apoderado del Representante Legal',
                    value: 'apoderado'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_avalista_5',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_empresa_av_5',
            type: 'text',
            description: 'Ingrese el NIT de la empresa del quinto avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_avalista_5',
            type: 'name',
            description: 'Ingrese el nombre del quinto avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_id_avalista_5',
            description: 'Seleccione el tipo de documento de identidad del quinto avalista',
            type: 'clausula',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_avalista_5',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del quinto avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_5',
                    v: 'cc'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'ce_avalista_5',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del quinto avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_5',
                    v: 'ce'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'pa_avalista_5',
            type: 'text',
            description: 'Ingrese el pasaporte del quinto avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_5',
                    v: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_avalista_5',
            type: 'email',
            description: 'Ingrese el correo electrónico del quinto avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'avalista_6',
            type: 'clausula',
            description: '¿Desea ingresar un sexto avalista?',
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
                },
                {
                    k: 'avalista_4',
                    v: 's'
                },
                {
                    k: 'avalista_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_avalista_6',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del sexto avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_empresa_av_6',
            type: 'text',
            description: 'Ingrese el nombre de la empresa del sexto avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_rep_avalista_6',
            type: 'select',
            description: 'Seleccione el tipo de representante legal del sexto avalista',
            value: 'rep',
            options: [
                {
                    name: 'Representante Legal',
                    label: 'Representante Legal',
                    value: 'rep'
                },
                {
                    name: 'Representante Legal Suplente',
                    label: 'Representante Legal Suplente',
                    value: 'sup'
                },
                {
                    name: 'Apoderado del Representante Legal',
                    label: 'Apoderado del Representante Legal',
                    value: 'apoderado'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_avalista_6',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_empresa_av_6',
            type: 'text',
            description: 'Ingrese el NIT de la empresa del sexto avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_avalista_6',
            type: 'name',
            description: 'Ingrese el nombre del sexto avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_id_avalista_6',
            description: 'Seleccione el tipo de documento de identidad del sexto avalista',
            type: 'clausula',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_avalista_6',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del sexto avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_6',
                    v: 'cc'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'ce_avalista_6',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del sexto avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_6',
                    v: 'ce'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'pa_avalista_6',
            type: 'text',
            description: 'Ingrese el pasaporte del sexto avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_6',
                    v: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_avalista_6',
            type: 'email',
            description: 'Ingrese el correo electrónico del sexto avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'avalista_7',
            type: 'clausula',
            description: '¿Desea ingresar un septimo avalista?',
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
                },
                {
                    k: 'avalista_4',
                    v: 's'
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_avalista_7',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del septimo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_empresa_av_7',
            type: 'text',
            description: 'Ingrese el nombre de la empresa del septimo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_rep_avalista_7',
            type: 'select',
            description: 'Seleccione el tipo de representante legal del septimo avalista',
            value: 'rep',
            options: [
                {
                    name: 'Representante Legal',
                    label: 'Representante Legal',
                    value: 'rep'
                },
                {
                    name: 'Representante Legal Suplente',
                    label: 'Representante Legal Suplente',
                    value: 'sup'
                },
                {
                    name: 'Apoderado del Representante Legal',
                    label: 'Apoderado del Representante Legal',
                    value: 'apoderado'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_avalista_7',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_empresa_av_7',
            type: 'text',
            description: 'Ingrese el NIT de la empresa del septimo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_avalista_7',
            type: 'name',
            description: 'Ingrese el nombre del septimo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_id_avalista_7',
            description: 'Seleccione el tipo de documento de identidad del septimo avalista',
            type: 'clausula',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_avalista_7',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del septimo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_7',
                    v: 'cc'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'ce_avalista_7',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del septimo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_7',
                    v: 'ce'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'pa_avalista_7',
            type: 'text',
            description: 'Ingrese el pasaporte del septimo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_7',
                    v: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_avalista_7',
            type: 'email',
            description: 'Ingrese el correo electrónico del septimo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'avalista_8',
            type: 'clausula',
            description: '¿Desea ingresar un octavo avalista?',
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
                },
                {
                    k: 'avalista_4',
                    v: 's'
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_avalista_8',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del octavo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_empresa_av_8',
            type: 'text',
            description: 'Ingrese el nombre de la empresa del octavo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_rep_avalista_8',
            type: 'select',
            description: 'Seleccione el tipo de representante legal del octavo avalista',
            value: 'rep',
            options: [
                {
                    name: 'Representante Legal',
                    label: 'Representante Legal',
                    value: 'rep'
                },
                {
                    name: 'Representante Legal Suplente',
                    label: 'Representante Legal Suplente',
                    value: 'sup'
                },
                {
                    name: 'Apoderado del Representante Legal',
                    label: 'Apoderado del Representante Legal',
                    value: 'apoderado'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_avalista_8',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_empresa_av_8',
            type: 'text',
            description: 'Ingrese el NIT de la empresa del octavo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_avalista_8',
            type: 'name',
            description: 'Ingrese el nombre del octavo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_id_avalista_8',
            description: 'Seleccione el tipo de documento de identidad del octavo avalista',
            type: 'clausula',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_avalista_8',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del octavo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_8',
                    v: 'cc'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'ce_avalista_8',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del octavo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_8',
                    v: 'ce'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'pa_avalista_8',
            type: 'text',
            description: 'Ingrese el pasaporte del octavo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_8',
                    v: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_avalista_8',
            type: 'email',
            description: 'Ingrese el correo electrónico del octavo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'avalista_9',
            type: 'clausula',
            description: '¿Desea ingresar un noveno avalista?',
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
                },
                {
                    k: 'avalista_4',
                    v: 's'
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_avalista_9',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del noveno avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_empresa_av_9',
            type: 'text',
            description: 'Ingrese el nombre de la empresa del noveno avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_rep_avalista_9',
            type: 'select',
            description: 'Seleccione el tipo de representante legal del noveno avalista',
            value: 'rep',
            options: [
                {
                    name: 'Representante Legal',
                    label: 'Representante Legal',
                    value: 'rep'
                },
                {
                    name: 'Representante Legal Suplente',
                    label: 'Representante Legal Suplente',
                    value: 'sup'
                },
                {
                    name: 'Apoderado del Representante Legal',
                    label: 'Apoderado del Representante Legal',
                    value: 'apoderado'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_avalista_9',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_empresa_av_9',
            type: 'text',
            description: 'Ingrese el NIT de la empresa del noveno avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_avalista_9',
            type: 'name',
            description: 'Ingrese el nombre del noveno avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_id_avalista_9',
            description: 'Seleccione el tipo de documento de identidad del noveno avalista',
            type: 'clausula',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_avalista_9',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del noveno avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_9',
                    v: 'cc'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'ce_avalista_9',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del noveno avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_9',
                    v: 'ce'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'pa_avalista_9',
            type: 'text',
            description: 'Ingrese el pasaporte del noveno avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_9',
                    v: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_avalista_9',
            type: 'email',
            description: 'Ingrese el correo electrónico del noveno avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'avalista_10',
            type: 'clausula',
            description: '¿Desea ingresar un decimo avalista?',
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
                },
                {
                    k: 'avalista_4',
                    v: 's'
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_persona_avalista_10',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del decimo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                },
                {
                    k: 'avalista_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_empresa_av_10',
            type: 'text',
            description: 'Ingrese el nombre de la empresa del decimo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                },
                {
                    k: 'avalista_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_rep_avalista_10',
            type: 'select',
            description: 'Seleccione el tipo de representante legal del decimo avalista',
            value: 'rep',
            options: [
                {
                    name: 'Representante Legal',
                    label: 'Representante Legal',
                    value: 'rep'
                },
                {
                    name: 'Representante Legal Suplente',
                    label: 'Representante Legal Suplente',
                    value: 'sup'
                },
                {
                    name: 'Apoderado del Representante Legal',
                    label: 'Apoderado del Representante Legal',
                    value: 'apoderado'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_avalista_10',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                },
                {
                    k: 'avalista_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'nit_empresa_av_10',
            type: 'text',
            description: 'Ingrese el NIT de la empresa del decimo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                },
                {
                    k: 'avalista_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_avalista_10',
            type: 'name',
            description: 'Ingrese el nombre del decimo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                },
                {
                    k: 'avalista_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_id_avalista_10',
            description: 'Seleccione el tipo de documento de identidad del decimo avalista',
            type: 'clausula',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                },
                {
                    k: 'avalista_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_avalista_10',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del decimo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_10',
                    v: 'cc'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                },
                {
                    k: 'avalista_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'ce_avalista_10',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del decimo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_10',
                    v: 'ce'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                },
                {
                    k: 'avalista_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'pa_avalista_10',
            type: 'text',
            description: 'Ingrese el pasaporte del decimo avalista',
            prereq: [
                {
                    k: 'tipo_id_avalista_10',
                    v: 'pa'
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                },
                {
                    k: 'avalista_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_avalista_10',
            type: 'email',
            description: 'Ingrese el correo electrónico del decimo avalista',
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
                },
                {
                    k: 'avalista_5',
                    v: 's'
                },
                {
                    k: 'avalista_6',
                    v: 's'
                },
                {
                    k: 'avalista_7',
                    v: 's'
                },
                {
                    k: 'avalista_8',
                    v: 's'
                },
                {
                    k: 'avalista_9',
                    v: 's'
                },
                {
                    k: 'avalista_10',
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
            description: 'Indique su correo electrónico'
        }
    ],
    sign: [
        'num_pagare',
        'tipo_persona',
        'nombre_deudor',
        'domicilio_deudor',
        'tipo_id_deudor',
        'cc_deudor',
        'ce_deudor',
        'pa_deudor',
        'establecimiento',
        'nombre_establecimiento',
        'nombre_empresa',
        'tipo_rep_deudor',
        'nit_empresa',
        'tipo_persona_avalista_1',
        'nombre_empresa_av_1',
        'tipo_rep_avalista_1',
        'nit_empresa_av_1',
        'nombre_avalista_1',
        'tipo_id_avalista_1',
        'cc_avalista_1',
        'ce_avalista_1',
        'pa_avalista_1',
        'correo_avalista_1',
        'avalista_2',
        'tipo_persona_avalista_2',
        'nombre_empresa_av_2',
        'tipo_rep_avalista_2',
        'nit_empresa_av_2',
        'nombre_avalista_2',
        'tipo_id_avalista_2',
        'cc_avalista_2',
        'ce_avalista_2',
        'pa_avalista_2',
        'correo_avalista_2',
        'avalista_3',
        'tipo_persona_avalista_3',
        'nombre_empresa_av_3',
        'tipo_rep_avalista_3',
        'nit_empresa_av_3',
        'nombre_avalista_3',
        'tipo_id_avalista_3',
        'cc_avalista_3',
        'ce_avalista_3',
        'pa_avalista_3',
        'correo_avalista_3',
        'avalista_4',
        'tipo_persona_avalista_4',
        'nombre_empresa_av_4',
        'tipo_rep_avalista_4',
        'nit_empresa_av_4',
        'nombre_avalista_4',
        'tipo_id_avalista_4',
        'cc_avalista_4',
        'ce_avalista_4',
        'pa_avalista_4',
        'correo_avalista_4',
        'avalista_5',
        'tipo_persona_avalista_5',
        'nombre_empresa_av_5',
        'tipo_rep_avalista_5',
        'nit_empresa_av_5',
        'nombre_avalista_5',
        'tipo_id_avalista_5',
        'cc_avalista_5',
        'ce_avalista_5',
        'pa_avalista_5',
        'correo_avalista_5',
        'avalista_6',
        'tipo_persona_avalista_6',
        'nombre_empresa_av_6',
        'tipo_rep_avalista_6',
        'nit_empresa_av_6',
        'nombre_avalista_6',
        'tipo_id_avalista_6',
        'cc_avalista_6',
        'ce_avalista_6',
        'pa_avalista_6',
        'correo_avalista_6',
        'avalista_7',
        'tipo_persona_avalista_7',
        'nombre_empresa_av_7',
        'tipo_rep_avalista_7',
        'nit_empresa_av_7',
        'nombre_avalista_7',
        'tipo_id_avalista_7',
        'cc_avalista_7',
        'ce_avalista_7',
        'pa_avalista_7',
        'correo_avalista_7',
        'avalista_8',
        'tipo_persona_avalista_8',
        'nombre_empresa_av_8',
        'tipo_rep_avalista_8',
        'nit_empresa_av_8',
        'nombre_avalista_8',
        'tipo_id_avalista_8',
        'cc_avalista_8',
        'ce_avalista_8',
        'pa_avalista_8',
        'correo_avalista_8',
        'avalista_9',
        'tipo_persona_avalista_9',
        'nombre_empresa_av_9',
        'tipo_rep_avalista_9',
        'nit_empresa_av_9',
        'nombre_avalista_9',
        'tipo_id_avalista_9',
        'cc_avalista_9',
        'ce_avalista_9',
        'pa_avalista_9',
        'correo_avalista_9',
        'avalista_10',
        'tipo_persona_avalista_10',
        'nombre_empresa_av_10',
        'tipo_rep_avalista_10',
        'nit_empresa_av_10',
        'nombre_avalista_10',
        'tipo_id_avalista_10',
        'cc_avalista_10',
        'ce_avalista_10',
        'pa_avalista_10',
        'correo_avalista_10',
        'correo_enviar',
        'correo_deudor',
        'ciudad_firma'
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
        },
        {
            name: 'nombre_avalista_5',
            identification: 'cc_avalista_5',
            email: 'correo_avalista_5',
            type: 'firma_avalista_5'
        },
        {
            name: 'nombre_avalista_6',
            identification: 'cc_avalista_6',
            email: 'correo_avalista_6',
            type: 'firma_avalista_6'
        },
        {
            name: 'nombre_avalista_7',
            identification: 'cc_avalista_7',
            email: 'correo_avalista_7',
            type: 'firma_avalista_7'
        },
        {
            name: 'nombre_avalista_8',
            identification: 'cc_avalista_8',
            email: 'correo_avalista_8',
            type: 'firma_avalista_8'
        },
        {
            name: 'nombre_avalista_9',
            identification: 'cc_avalista_9',
            email: 'correo_avalista_9',
            type: 'firma_avalista_9'
        },
        {
            name: 'nombre_avalista_10',
            identification: 'cc_avalista_10',
            email: 'correo_avalista_10',
            type: 'firma_avalista_10'
        }
    ],
    preBuild: true,
    preBuildData: [
        'num_pagare',
        'tipo_persona',
        'nombre_deudor',
        'domicilio_deudor',
        'tipo_id_deudor',
        'cc_deudor',
        'ce_deudor',
        'pa_deudor',
        'establecimiento',
        'nombre_establecimiento',
        'nombre_empresa',
        'tipo_rep_deudor',
        'nit_empresa',
        'tipo_persona_avalista_1',
        'nombre_empresa_av_1',
        'tipo_rep_avalista_1',
        'nit_empresa_av_1',
        'nombre_avalista_1',
        'tipo_id_avalista_1',
        'cc_avalista_1',
        'ce_avalista_1',
        'pa_avalista_1',
        'correo_avalista_1',
        'avalista_2',
        'tipo_persona_avalista_2',
        'nombre_empresa_av_2',
        'tipo_rep_avalista_2',
        'nit_empresa_av_2',
        'nombre_avalista_2',
        'tipo_id_avalista_2',
        'cc_avalista_2',
        'ce_avalista_2',
        'pa_avalista_2',
        'correo_avalista_2',
        'avalista_3',
        'tipo_persona_avalista_3',
        'nombre_empresa_av_3',
        'tipo_rep_avalista_3',
        'nit_empresa_av_3',
        'nombre_avalista_3',
        'tipo_id_avalista_3',
        'cc_avalista_3',
        'ce_avalista_3',
        'pa_avalista_3',
        'correo_avalista_3',
        'avalista_4',
        'tipo_persona_avalista_4',
        'nombre_empresa_av_4',
        'tipo_rep_avalista_4',
        'nit_empresa_av_4',
        'nombre_avalista_4',
        'tipo_id_avalista_4',
        'cc_avalista_4',
        'ce_avalista_4',
        'pa_avalista_4',
        'correo_avalista_4',
        'avalista_5',
        'tipo_persona_avalista_5',
        'nombre_empresa_av_5',
        'tipo_rep_avalista_5',
        'nit_empresa_av_5',
        'nombre_avalista_5',
        'tipo_id_avalista_5',
        'cc_avalista_5',
        'ce_avalista_5',
        'pa_avalista_5',
        'correo_avalista_5',
        'avalista_6',
        'tipo_persona_avalista_6',
        'nombre_empresa_av_6',
        'tipo_rep_avalista_6',
        'nit_empresa_av_6',
        'nombre_avalista_6',
        'tipo_id_avalista_6',
        'cc_avalista_6',
        'ce_avalista_6',
        'pa_avalista_6',
        'correo_avalista_6',
        'avalista_7',
        'tipo_persona_avalista_7',
        'nombre_empresa_av_7',
        'tipo_rep_avalista_7',
        'nit_empresa_av_7',
        'nombre_avalista_7',
        'tipo_id_avalista_7',
        'cc_avalista_7',
        'ce_avalista_7',
        'pa_avalista_7',
        'correo_avalista_7',
        'avalista_8',
        'tipo_persona_avalista_8',
        'nombre_empresa_av_8',
        'tipo_rep_avalista_8',
        'nit_empresa_av_8',
        'nombre_avalista_8',
        'tipo_id_avalista_8',
        'cc_avalista_8',
        'ce_avalista_8',
        'pa_avalista_8',
        'correo_avalista_8',
        'avalista_9',
        'tipo_persona_avalista_9',
        'nombre_empresa_av_9',
        'tipo_rep_avalista_9',
        'nit_empresa_av_9',
        'nombre_avalista_9',
        'tipo_id_avalista_9',
        'cc_avalista_9',
        'ce_avalista_9',
        'pa_avalista_9',
        'correo_avalista_9',
        'avalista_10',
        'tipo_persona_avalista_10',
        'nombre_empresa_av_10',
        'tipo_rep_avalista_10',
        'nit_empresa_av_10',
        'nombre_avalista_10',
        'tipo_id_avalista_10',
        'cc_avalista_10',
        'ce_avalista_10',
        'pa_avalista_10',
        'correo_avalista_10',
        'correo_enviar'
    ],
    name: 'PAGARÉ FACTORING DIVISA',
    username: '037e0578-8052-4efd-9662-0bcc6077c897',
    price: 5000,
    build: 4
}