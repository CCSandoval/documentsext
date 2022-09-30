{
    _id: ObjectId('632907d51197e88531953323'),
    config: [
        {
            name: 'empresa',
            description: 'Seleccione la empresa',
            value: 'reval',
            type: 'clausula',
            options: [
                {
                    name: 'REVAL S.A.S.',
                    value: 'reval'
                },
                {
                    name: 'MULTIPAGAS S.A.S.',
                    value: 'multi'
                }
            ]
        },
        {
            name: 'direccion_reval',
            description: 'Ingrese la dirección de la empresa',
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
        },
        {
            name: 'num_pagare',
            type: 'number',
            description: 'Ingrese el número del pagaré'
        },
        {
            name: 'fecha_firma',
            type: 'date',
            description: 'Seleccione la fecha de firma'
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
            phone: 'celular_empleado',
        }
    ],
    preBuild: false,
    build: 1,
    price: 5000,
    name: 'FOR-GJ-008-01 INDEFINIDO CONTRATO DE TRABAJO A TERMINO'
}