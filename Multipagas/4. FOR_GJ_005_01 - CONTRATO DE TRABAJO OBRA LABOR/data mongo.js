{
    _id: ObjectId('6324e96c1197e88531953319'),
    config: [
        {
            name: 'direccion_reval',
            description: 'Ingrese la dirección de RECAUDOS DE VALORES S.A.S.',
            type: 'name'
        },
        {
            name: 'nombre_empleado',
            description: 'Ingrese el nombre del trabajador',
            type: 'name'
        },
        {
            name: 'tipo_id_empleado',
            type: 'clausula',
            description: 'Seleccione el tipo de identificación del trabajador',
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
                    name: 'Permiso especial de permanencia',
                    value: 'pep'
                },
                {
                    name: 'Permiso por proteccion temporal',
                    value: 'ppt'
                }
            ]
        },
        {
            name: 'cc_empleado',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del trabajador',
            prereq: [
                {
                    k: 'tipo_id_empleado',
                    v: 'cc'
                }
            ]
        },
        {
            name: 'ce_empleado',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del trabajador',
            prereq: [
                {
                    k: 'tipo_id_empleado',
                    v: 'ce'
                }
            ]
        },
        {
            name: 'pep_empleado',
            type: 'name',
            description: 'Ingrese el permiso especial de permanencia del trabajador',
            prereq: [
                {
                    k: 'tipo_id_empleado',
                    v: 'pep'
                }
            ]
        },
        {
            name: 'ppt_empleado',
            type: 'name',
            description: 'Ingrese el permiso por protección temporal del trabajador',
            prereq: [
                {
                    k: 'tipo_id_empleado',
                    v: 'ppt'
                }
            ]
        },
        {
            name: 'lugar_exp_id_empleado',
            type: 'name',
            description: 'Ingrese el lugar de expedición del documento de identidad del trabajador'
        },
        {
            name: 'direccion_empleado',
            type: 'name',
            description: 'Ingrese la dirección del trabajador'
        },
        {
            name: 'celular_empleado',
            type: 'phone',
            description: 'Ingrese el número de celular del trabajador'
        },
        {
            name: 'lugar_nacimiento',
            type: 'name',
            description: 'Ingrese el lugar de nacimiento del trabajador'
        },
        {
            name: 'fecha_nacimiento',
            type: 'date',
            description: 'Seleccione la fecha de nacimiento del trabajador'
        },
        {
            name: 'cargo_empleado',
            type: 'name',
            description: 'Ingrese el cargo del trabajador'
        },
        {
            name: 'salario_empleado',
            type: 'currency',
            description: 'Ingrese el salario del trabajador'
        },
        {
            name: 'fecha_inicio_contrato',
            type: 'date',
            description: 'Seleccione la fecha de iniciación del contrato'
        },
        {
            name: 'ciudad_contrato',
            type: 'name',
            description: 'Ingrese la ciudad donde ha sido contratado el trabajador'
        },
        {
            name: 'termino_periodo_prueba',
            type: 'name',
            description: 'Ingrese el término del periodo de prueba del trabajador'
        },
        {
            name:'tipo_cubrimiento',
            type:'text',
            description:'Ingrese qué cubre el presente contrato',
        },
        {
            name: 'municipio_trabajo',
            type: 'name',
            description: 'Ingrese el municipio donde el trabajador desempeñará sus funciones'
        },
        {
            name: 'departamento_trabajo',
            type: 'name',
            description: 'Ingrese el departamento donde el trabajador desempeñará sus funciones'
        },
        {
            name: 'ciudad_firma',
            type: 'name',
            description: 'Ingrese la ciudad donde se firma el contrato'
        },
        {
            name: 'email_empleado',
            type: 'email',
            description: 'Ingrese el correo donde le llegará la invitación a firmar al empleado'
        }
    ],
    preFill: [
        {
            name: 'nombre_reval',
            value: 'ELBA LUCIA ESTEVEZ CONTRERAS'
        },
        {
            name: 'cc_reval',
            value: '63.318.551'
        },
        {
            name: 'email_reval',
            value: 'ccsandovalt@gmail.com'
        }
    ],
    sign: [
        'nombre_empleado',
        'cc_empleado',
        'ce_empleado',
        'ppt_empleado',
        'pep_empleado',
        'email_empleado',
        'celular_empleado',
    ],
    signatureProfile: [
        {
            type: 'firma_empleado',
            name: 'nombre_empleado',
            identification: 'cc_empleado|ce_empleado|ppt_empleado|pep_empleado',
            email: 'email_empleado',
            phone: 'celular_empleado'
        },
        {
            type: 'firma_reval',
            name: 'nombre_reval',
            identification: 'cc_reval',
            email: 'email_reval'
        }
    ],
    preBuild: false,
    build: 2,
    price: 5000,
    name: 'FOR_GJ_002_01 - CONTRATO DE TRABAJO A TERMINO INDEFINIDO REVAL'
}