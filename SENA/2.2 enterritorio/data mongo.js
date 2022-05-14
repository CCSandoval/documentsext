{
    _id: ObjectId('62683d3551fc27d23d929135'),
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
            name: 'cdp1_number',
            description: 'Ingrese el numero del Certificado de Disponibilidad Presupuestal',
            type: 'number'
        },
        {
            name: 'cdp2',
            description: '¿Desea ingresar un segundo número de Certificado de Disponibilidad Presupuestal?',
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
            value: 'n',
            type: 'clausula'
        },
        {
            name: 'cdp2_number',
            description: 'Ingrese el segundo numero del Certificado de Disponibilidad Presupuestal',
            type: 'number',
            prereq: [
                {
                    k: 'cdp2',
                    v: 's'
                }
            ]
        },
        {
            name: 'cdp_date',
            description: 'Selecciona la fecha del Certificado de Disponibilidad Presupuestal',
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
            description: 'Seleccione la fecha en la que se firma el contrato',
            name: 'fecha_firma',
            type: 'date'
        },
        {
            description: 'Ingrese el correo del primer beneficiario',
            name: 'correo_beneficiario_1',
            type: 'text'
        }
    ],
    operation: [],
    sign: [
        'correo_beneficiario_1',
        'numero_contrato',
        'nombre_primer_beneficiario',
        'tipo_id_ben_1',
        'cc_beneficiario_1',
        'ce_beneficiario_1',
        'pa_beneficiario_1',
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
            name: 'cc_sena',
            value: '3.349.902'
        },
        {
            name: 'nombre_reviso_sena',
            value: 'Luisa Fernanda Velásquez Giraldo'
        },
        {
            name: 'nombre_proyecto_sena',
            value: 'Mónica Alejandra Torres Rey'
        },
        {
            name: 'correo_sena',
            value: 'hernan.fuentes@sena.edu.co'
        },
        {
            name: 'nombre_enterritorio',
            value: 'CAROLINA OTILIA MONTEALEGRE CASTILLO'
        },
        {
            name: 'cc_enterritorio',
            value: '20.928.128'
        },
        {
            name: 'correo_enterritorio',
            value: 'cmonteal@enterritorio.gov.co'
        },
        {
            name: 'nombre_vobo_sena',
            value: 'Carlos Arturo Gamba Castillo'
        },
        {
            name: 'nombre_elaboro_enterritorio',
            value: 'Camilo Fernando Corena Gutiérrez'
        },
        {
            name: 'nombre_reviso_enterritorio',
            value: 'Mónica Duarte Ortiz'
        },
        {
            name: 'proyecto_sena_cc',
            value: '1.234.567'
        },
        {
            name: 'proyecto_sena_email',
            value: 'malejat@sena.edu.co'
        },
        {
            name: 'vobo_sena_cc',
            value: '1.234.567'
        },
        {
            name: 'vobo_sena_email',
            value: 'cgamba@sena.edu.co'
        },
        {
            name: 'reviso_sena_cc',
            value: '1.234.567'
        },
        {
            name: 'reviso_sena_email',
            value: 'lfvelazquezg@sena.edu.co'
        },
        {
            name: 'elaboro_enterritorio_cc',
            value: '1.234.567'
        },
        {
            name: 'elaboro_enterritorio_email',
            value: 'ccorena@enterritorio.gov.co'
        },
        {
            name: 'reviso_enterritorio_cc',
            value: '1.234.567'
        },
        {
            name: 'reviso_enterritorio_email',
            value: 'mduarte1@enterritorio.gov.co'
        }
    ],
    signatureProfile: [
        {
            name: 'nombre_primer_beneficiario',
            email: 'correo_beneficiario_1',
            identification: 'cc_beneficiario_1|ce_beneficiario_1|pa_beneficiario_1',
            type: 'firma_beneficiario_1',
            order: 0,
            role: 'SIGN'
        },
        {
            name: 'nombre_proyecto_sena',
            identification: 'proyecto_sena_cc',
            email: 'proyecto_sena_email',
            type: 'proyecto_sena',
            order: 1,
            role: 'SIGN'
        },
        {
            name: 'nombre_vobo_sena',
            identification: 'vobo_sena_cc',
            email: 'vobo_sena_email',
            type: 'vobo_sena',
            order: 2,
            role: 'SIGN'
        },
        {
            name: 'nombre_reviso_sena',
            identification: 'reviso_sena_cc',
            email: 'reviso_sena_email',
            type: 'reviso_sena',
            order: 3,
            role: 'SIGN'
        },
        {
            name: 'nombre_sena',
            identification: 'cc_sena',
            email: 'correo_sena',
            type: 'firma_sena',
            order: 4,
            role: 'SIGN'
        }
        {
            name: 'nombre_elaboro_enterritorio',
            identification: 'elaboro_enterritorio_cc',
            email: 'elaboro_enterritorio_email',
            type: 'elaboro_enterritorio',
            order: 5,
            role: 'SIGN'
        },
        {
            name: 'nombre_reviso_enterritorio',
            identification: 'reviso_enterritorio_cc',
            email: 'reviso_enterritorio_email',
            type: 'reviso_enterritorio',
            order: 6,
            role: 'SIGN'
        },
        {
            name: 'nombre_enterritorio',
            identification: 'cc_enterritorio',
            email: 'correo_enterritorio',
            type: 'firma_enterritorio',
            order: 7,
            role: 'SIGN'
        },
    ],
    company: ObjectId('61f08e3d69634500090350d4'),
    name: 'CONTRATO DE COOPERACIÓN EMPRESARIAL',
    price: 5000,
    build: 1,
    preBuild: false,
    custom: {
        footer: {
            contents: '<div class="document_footer">Página {{page}} de {{pages}}</div>',
            height: '5mm'
        },
        noShowHeader: true
    },
    preBuildData: []
}