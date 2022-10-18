{
    _id: ObjectId('634ec2221197e8853195334f'),
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
            name: 'fecha_firma',
            type: 'date',
            description: 'Seleccione la fecha de firma del contrato'
        },
        {
            name: 'ciudad_firma',
            type: 'name',
            description: 'Ingrese la ciudad donde se firma el presente documento'
        },
        {
            name: 'ciudad_trabajador',
            type: 'name',
            description: 'Ingrese la ciudad donde reside el trabajador'
        },
        {
            name: 'fecha_modificacion',
            type: 'date',
            description: 'Seleccione la fecha de modificación del contrato'
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
            name: 'nombre_titular',
            type: 'name',
            description: 'Ingrese el nombre del titular'
        },
            {
            name: 'tipo_id_titular',
            type: 'clausula',
            description: 'Seleccione el tipo de identificación del titular',
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
            name: 'cc_titular',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del titular',
            prereq: [
                {
                    k: 'tipo_id_titular',
                    v: 'cc'
                }
            ]
        },
        {
            name: 'ce_titular',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del titular',
            prereq: [
                {
                    k: 'tipo_id_titular',
                    v: 'ce'
                }
            ]
        },
        {
            name: 'pep_titular',
            type: 'name',
            description: 'Ingrese el permiso especial de permanencia del titular',
            prereq: [
                {
                    k: 'tipo_id_titular',
                    v: 'pep'
                }
            ]
        },
        {
            name: 'ppt_titular',
            type: 'name',
            description: 'Ingrese el permiso por protección temporal del titular',
            prereq: [
                {
                    k: 'tipo_id_titular',
                    v: 'ppt'
                }
            ]
        },
        {
            name: 'correo_titular',
            type: 'email',
            description: 'Ingrese el correo electrónico del titular'
        },
        {
            name: 'correo_empleado',
            type: 'email',
            description: 'Ingrese el correo electrónico donde llegará la invitación a firmar del trabajador'
        }
    ],
    sign: [
        'nombre_empleado',
        'cc_empleado',
        'ce_empleado',
        'ppt_empleado',
        'pep_empleado',
        'correo_empleado',
        'fecha_firma',
        'ciudad_firma',
        'ciudad_trabajador',
        'fecha_modificacion',
        'autoriza_huella',
        'autoriza_reconocimento',
        'nombre_titular',
        'cc_titular',
        'ce_titular',
        'ppt_titular',
        'pep_titular'
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
        },
        {
            name: 'nombre_titular',
            identification: 'cc_titular|ce_titular|ppt_titular|pep_titular',
            type: 'firma_titular',
            email: 'correo_titular'
        }
    ],
    build: 0,
    name: 'Mensajeros con Moto',
    price: 5000,
    preBuild: false
}