{
    _id: ObjectId('632b78f61197e8853195332b'),
    config: [
        {
            name: 'empresa',
            description: 'Ingrese la razón social de la empresa contratante',
            type: 'name'
        },
        {
            name: 'nit_empresa',
            description: 'Ingrese el NIT de la empresa contratante',
            type: 'name'
        },
        {
            name: 'direccion_empresa',
            description: 'Ingrese la dirección de la empresa contratante',
            type: 'name'
        },
        {
            name: 'telefono_empresa',
            description: 'Ingrese el número telefónico de la empresa contratante',
            type: 'phone'
        },
        {
            name: 'rep_legal_empresa',
            description: 'Ingrese el nombre del representante legal de la empresa contratante',
            type: 'name'
        },
        {
            name: 'cc_rep_legal',
            description: 'Ingrese el número de cédula del representante legal de la empresa contratante',
            type: 'number'
        },
        {
            name: 'nombre_trabajador',
            type: 'name',
            description: 'Ingrese el nombre del aprendiz'
        },
        {
            name: 'tipo_id_empleado',
            type: 'clausula',
            description: 'Seleccione el tipo de identificación del aprendiz',
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
            description: 'Ingrese el número de cédula de ciudadanía del aprendiz',
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
            description: 'Ingrese el número de cédula de extranjería del aprendiz',
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
            description: 'Ingrese el permiso especial de permanencia del aprendiz',
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
            description: 'Ingrese el permiso por protección temporal del aprendiz',
            prereq: [
                {
                    k: 'tipo_id_empleado',
                    v: 'ppt'
                }
            ]
        },
        {
            name: 'fecha_nacimiento_empleado',
            type: 'date',
            description: 'Seleccione la fecha de nacimiento del aprendiz'
        },
        {
            name: 'direccion_empleado',
            type: 'name',
            description: 'Ingrese la dirección del aprendiz'
        },
        {
            name: 'telefono_empleado',
            type: 'phone',
            description: 'Ingrese el número telefónico del aprendiz'
        },
        {
            name: 'correo_empleado',
            type: 'email',
            description: 'Ingrese el correo electrónico donde llegará la invitación a firmar del aprendiz'
        },
        {
            name: 'inicio_lectiva',
            type: 'date',
            description: 'Seleccione la fecha de inicio de la etapa lectiva'
        },
        {
            name: 'fin_lectiva',
            type: 'date',
            description: 'Seleccione la fecha de finalización de la etapa lectiva'
        },
        {
            name: 'inicio_productiva',
            type: 'date',
            description: 'Seleccione la fecha de inicio de la etapa productiva'
        },
        {
            name: 'fin_productiva',
            type: 'date',
            description: 'Seleccione la fecha de finalización de la etapa productiva'
        },
        {
            name: 'programa',
            type: 'name',
            description: 'Ingrese el programa de formación del aprendiz'
        },
        {
            name: 'institicion_formacion',
            type: 'name',
            description: 'Ingrese la institución de formación del aprendiz'
        },
        {
            name: 'nit_institucion',
            type: 'name',
            description: 'Ingrese el NIT de la institución de formación del aprendiz'
        },
        {
            name: 'cargo',
            type: 'name',
            description: 'Ingrese el cargo del aprendiz'
        },
        {
            name: 'meses_contrato',
            type: 'number',
            description: 'Ingrese término del contrato en meses'
        },
        {
            name: 'inicacion_contrato',
            type: 'date',
            description: 'Seleccione la fecha de iniciación del contrato'
        },
        {
            name: 'terminacion_contrato',
            type: 'date',
            description: 'Seleccione la fecha de terminación del contrato'
        },
        {
            name: 'ciudad_firma',
            type: 'name',
            description: 'Ingrese la ciudad donde se firma el presente documento'
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
        }
    ],
    sign: [
        'nombre_empleado',
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
            phone: 'telefono_empleado',
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
    name: 'Aprendices',
    price: 5000,
    username: '7eecb5fa-6e63-40e7-8723-d523afcd4f33',
    preBuild: false
}