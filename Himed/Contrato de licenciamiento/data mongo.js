{
    _id: ObjectId('630a98ae51fc27d23d9291d3'),
    config: [
        {
            name: 'nombre_cliente',
            type: 'name',
            description: 'Ingrese el nombre completo del cliente'
        },
        {
            name: 'cc_cliente',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del cliente'
        },
        {
            name: 'tipo_persona_cliente',
            type: 'clausula',
            description: 'Seleccione el tipo de persona del cliente',
            value: 'n',
            options: [
                {
                    name: 'Persona Natural',
                    value: 'n'
                },
                {
                    name: 'Persona Juridica',
                    value: 'j'
                }
            ]
        },
        {
            name: 'nombre_sociedad',
            type: 'name',
            description: 'Ingrese la razón social de la empresa cliente',
            prereq: [
                {
                    k: 'tipo_persona_cliente',
                    v: 'j'
                }
            ]
        },
        {
            name: 'domicilio_sociedad',
            type: 'name',
            description: 'Ingrese el lugar de domicilio de la empresa cliente',
            prereq: [
                {
                    k: 'tipo_persona_cliente',
                    v: 'j'
                }
            ]
        },
        {
            name: 'nit_sociedad',
            type: 'text',
            description: 'Ingrese el NIT de la empresa cliente',
            prereq: [
                {
                    k: 'tipo_persona_cliente',
                    v: 'j'
                }
            ]
        },
        {
            name: 'correo_cliente',
            type: 'email',
            description: 'Ingrese el correo electrónico del cliente'
        },
        {
            name: 'tel_cliente',
            type: 'phone',
            description: 'Ingrese el número telefónico del cliente'
        },
        {
            name: 'fecha_inicio_contrato',
            type: 'date',
            description: 'Seleccione la fecha de inicio del contrato'
        },
        {
            name: 'periodo_facturacion',
            type: 'text',
            description: 'Ingrese el periodo de facturación'
        },
        {
            name: 'medio_ingreso_plataforma',
            type: 'text',
            description: 'Ingrese la modalidad de ingreso a la plataforma'
        },
        {
            name: 'num_usuarios',
            type: 'number',
            description: 'Ingrese el número de usuarios'
        },
        {
            name: 'migracion_datos',
            type: 'text',
            description: 'Ingrese la información sobre migracion de datos'
        },
        {
            name: 'servicios_extra',
            type: 'text',
            description: 'Ingrese la información sobre servicios y funcionalidades extra adquiridos'
        },
        {
            name: 'incluye_fact_electr',
            type: 'select',
            description: 'Seleccione si se incluye el módulo de facturación electrónica',
            value: 'n',
            options: [
                {
                    name: 'No',
                    label: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    label: 'Si',
                    value: 's'
                }
            ]
        },
        {
            name: 'incluye_portal_pacientes',
            type: 'select',
            description: 'Seleccione si se incluye el módulo de portal de clientes',
            value: 'n',
            options: [
                {
                    name: 'No',
                    label: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    label: 'Si',
                    value: 's'
                }
            ]
        },
        {
            name: 'direccion_cliente',
            type: 'text',
            description: 'Ingrese la dirección de residencia del cliente',
            prereq: [
                {
                    k: 'tipo_persona_cliente',
                    v: 'n'
                }
            ]
        },
        {
            name: 'fecha_firma',
            type: 'date',
            description: 'Seleccione la fecha de firma del contrato'
        }
    ],
    preFill: [
        {
            name: 'nombre_himed',
            value: 'CARLOS EDUARDO MESA CANO'
        },
        {
            name: 'cc_himed',
            value: '71.657.211'
        },
        {
            name: 'correo_himed',
            value: 'ccsandovalt@gmail.com'
        }
    ],
    sign: [
        'nombre_cliente',
        'cc_cliente',
        'correo_cliente',
        'tel_cliente'
    ],
    signatureProfile: [
        {
            name: 'nombre_cliente',
            identification: 'cc_cliente',
            email: 'correo_cliente',
            phone: 'tel_cliente',
            type: 'firma_cliente'
        },
        {
            name: 'nombre_himed',
            identification: 'cc_himed',
            email: 'correo_himed',
            type: 'firma_himed'
        }
    ],
    preBuild: false,
    name: 'CONTRATO DE LICENCIAMIENTO PARA EL USO EXCLUSIVO DEL SOFTWARE HIMED',
    price: 5000,
    build: 1
}