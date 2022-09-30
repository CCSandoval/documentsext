{
    _id: ObjectId('632a3d7d1197e88531953325'),
    config: [
        {
            name: 'nombre_trabajador',
            type: 'name',
            description: 'Ingrese el nombre del trabajador'
        },
        {
            name: 'direccion_trabajador',
            type: 'name',
            description: 'Ingrese la dirección del trabajador'
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
            name: 'salario_trabajador',
            type: 'currency',
            description: 'Ingrese el salario del trabajador'
        },
        {
            name: 'fecha_iniciacion_labores',
            type: 'date',
            description: 'Seleccione la fecha de iniciación de las labores del trabajador'
        },
        {
            name: 'fecha_terminacion_labores',
            type: 'date',
            description: 'Seleccione la fecha de terminación de las labores del trabajador'
        },
        {
            name: 'lugar_labores',
            type: 'name',
            description: 'Ingrese el lugar donde desempeñará las labores el trabajador'
        },
        {
            name: 'ciudad_contratacion',
            type: 'name',
            description: 'Ingrese la ciudad donde ha sido contratado el trabajador'
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
            name: 'cargo',
            type: 'name',
            description: 'Ingrese el cargo del trabajador'
        },
        {
            name: 'ciudad_firma',
            type: 'name',
            description: 'Ingrese la ciudad donde se firma el presente documento'
        },
        {
            name: 'fecha_suscripcion_contrato',
            type: 'date',
            description: 'Seleccione la fecha de suscripción del contrato'
        },
        {
            name: 'ciudad_suscripcion_contrato',
            type: 'name',
            description: 'Seleccione la ciudad de suscripción del contrato'
        },
        {
            name: 'horario_trabajo',
            type: 'name',
            description: 'Ingrese el horario de trabajo'
        },
        {
            name: 'dias_teletrabajo_asignado',
            type: 'name',
            description: 'Ingrese los dias de teletrabajo asignados'
        },
        {
            name: 'lugar_teletrabajo',
            type: 'name',
            description: 'Ingrese la ubicación del lugar de teletrabajo'
        },
        {
            name: 'direccion_teletrabajo',
            type: 'name',
            description: 'Ingrese la dirección del lugar de teletrabajo'
        },
        {
            name: 'autoriza_huella',
            type: 'clausula',
            description: '¿Autoriza el uso de la información de su huella dactilar?',
            value: 's',
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
            name: 'autoriza_reconocimento',
            type: 'clausula',
            description: '¿Autoriza el uso de la información de su imágen para reconocimiento facial?',
            value: 's',
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
            name: 'correo_empleado',
            type: 'email',
            description: 'Ingrese el correo electrónico donde llegará la invitación a firmar del trabajador'
        }
    ],
    sign: [
        'nombre_trabajador',
        'cc_empleado',
        'ce_empleado',
        'ppt_empleado',
        'pep_empleado',
        'correo_empleado'
    ],
    preFill: [
        {
            name: 'nombre_domina',
            value: 'JUAN PABLO CHAVARRIAGA HOYOS'
        },
        {
            name: 'cc_domina',
            value: '1.039.446.361'
        },
        {
            name: 'correo_domina',
            value: 'ccsandovalt@gmail.com'
        }
    ],
    signatureProfile: [
        {
            name: 'nombre_trabajador',
            identification: 'cc_empleado|ce_empleado|ppt_empleado|pep_empleado',
            email: 'correo_empleado',
            type: 'firma_empleado'
        },
        {
            name: 'nombre_domina',
            identification: 'cc_domina',
            email: 'correo_domina',
            type: 'firma_domina'
        }
    ],
    build: 2,
    name: 'Agente Callcenter Teletrabajo',
    username: '7eecb5fa-6e63-40e7-8723-d523afcd4f33',
    price: 5000,
    preBuild: false
}