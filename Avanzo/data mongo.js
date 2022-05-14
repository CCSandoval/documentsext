{
    _id: ObjectId('627c0ebb51fc27d23d929149'),
    config: [
        {
            name: 'nombre_cliente',
            type: 'name',
            description: 'Ingrese el nombre de la empresa cliente'
        },
        {
            name: 'nombre_rrhh',
            description: 'Ingrese el nombre del firmante por parte de RRHH',
            type: 'name'
        },
        {
            name: 'cc_rrhh',
            description: 'Ingrese el nombre del firmante por parte de RRHH',
            type: 'name'
        },
        {
            name: 'cargo',
            description: 'Ingrese el cargo del firmante por parte de RRHH',
            type: 'text'
        },
        {
            name: 'email_rrhh',
            description: 'Ingrese el email del firmante por parte de RRHH',
            type: 'text'
        },
        {
            name: 'fecha_firma',
            description: 'Seleccione la fecha de firma',
            type: 'date'
        },
        {
            name: 'nombre_rep_legal',
            type: 'name',
            description: 'Ingrese el nombre del representante legal de la empresa cliente'
        },
        {
            name: 'cc_rep_legal',
            description: 'Ingrese la cedula del representante legal de la empresa',
            type: 'number'
        },
        {
            name: 'exp_cc_rep_legal',
            description: 'Ingrese el lugar de expedición de la cedula del representante legal de la empresa',
            type: 'text'
        },
        {
            name: 'ciudad_cam_comercio',
            description: 'Ingrese la ciudad donde se registró la empresa en la cámara de comercio',
            type: 'text'
        },
        {
            name: 'nit_cliente',
            description: 'Ingrese el nit de la empresa',
            type: 'text'
        },
        {
            name: 'numero_cuenta',
            description: 'Ingrese el número de la cuenta',
            type: 'text'
        },
        {
            name: 'banco_cuenta',
            description: 'Ingrese el banco de la cuenta',
            type: 'text'
        },
        {
            name: 'dir_operadora',
            description: 'Ingrese la dirección de la operadora',
            type: 'text'
        },
        {
            name: 'tel_operadora',
            description: 'Ingrese la dirección de la operadora',
            type: 'text'
        },
        {
            name: 'email_operadora',
            description: 'Ingrese el correo de la operadora',
            type: 'text'
        },
        {
            name: 'dir_cliente',
            description: 'Ingrese la dirección del cliente',
            type: 'text'
        },
        {
            name: 'tel_cliente',
            description: 'Ingrese el telefono del cliente',
            type: 'text'
        },
        {
            name: 'email_cliente',
            description: 'Ingrese el correo de la operadora',
            type: 'text'
        },
        {
            name: 'ciudad_firma',
            description: 'Ingrese dónde se firma el presente documento',
            type: 'text'
        },
        {
            name: 'numero_usuarios',
            description: 'Ingrese el número de usuarios',
            type: 'number'
        },
        {
            name: 'sector',
            description: 'Ingrese el sector',
            type: 'text'
        },
        {
            name: 'ciclos_nomina',
            description: 'Seleccione el periodo de la nómina',
            type: 'select',
            options: [
                {
                    label: 'Mensual',
                    name: 'Mensual',
                    value: 'm'
                },
                {
                    label: 'Quincenal',
                    name: 'Quincenal',
                    value: 'q'
                }
            ],
            value: 'm'
        },
        {
            name: 'fechas_pago_nom',
            description: 'Ingrese las fechas en las que se pagará la nómina',
            type: 'text'
        },
        {
            name: 'fecha_rep_nov',
            type: 'text',
            description: 'Ingrese las fechas en las que se enviarán reportes de novedades'
        },
        {
            name: 'rep_grup_empresas',
            type: 'select',
            description: '¿Aplica para enviar reportes a grupo de empresas?',
            options: [
                {
                    label: 'Si',
                    name: 'Si',
                    value: 's'
                },
                {
                    label: 'No',
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 's'
        },
        {
            name: 'que_reporta',
            description: 'Seleccione qué se reporta a la empresa',
            type: 'select',
            options: [
                {
                    label: 'Créditos Nuevos',
                    name: 'Créditos Nuevos',
                    value: 'n'
                },
                {
                    label: 'Base Total',
                    name: 'Base Total',
                    value: 'b'
                }
            ],
            value: 'n'
        },
        {
            name: 'aplica_ent_bd',
            description: '¿Se harán entregas de bases de datos?',
            type: 'clausula',
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
            value: 's'
        },
        {
            name: 'fecha_ent_bd',
            type: 'text',
            description: 'Ingrese las fechas en las que se harán entregas de bases de datos'
        },
        {
            name: 'area_env_inf',
            type: 'text',
            description: 'Ingrese el area de Envío de informe de Novedades y Descuentos'
        },
        {
            name: 'nombre_env_inf',
            type: 'name',
            description: 'Ingrese el nombre del encargado'
        },
        {
            name: 'contacto_env_inf',
            type: 'text',
            description: 'Ingrese la información de contacto del encargado'
        },
        {
            name: 'area_bienestar',
            type: 'text',
            description: 'Ingrese el area de Bienestar y Comunicaciones'
        },
        {
            name: 'nombre_bienestar',
            type: 'name',
            description: 'Ingrese el nombre del encargado'
        },
        {
            name: 'contacto_bienestar',
            type: 'text',
            description: 'Ingrese la información de contacto del encargado'
        },
        {
            name: 'area_contacto',
            type: 'text',
            description: 'Ingrese el area de Contacto de Mercadeo'
        },
        {
            name: 'nombre_contacto',
            type: 'name',
            description: 'Ingrese el nombre del encargado'
        },
        {
            name: 'contacto_contacto',
            type: 'text',
            description: 'Ingrese la información de contacto del encargado'
        }
    ],
    operation: [],
    sign: [
        'nombre_cliente',
        'nombre_rrhh',
        'cc_rrhh',
        'email_rrhh',
        'nombre_rep_legal',
        'cc_rep_legal',
        'email_cliente'
    ],
    signatureProfile: [
        {
            name: 'nombre_rrhh',
            type: 'rrhh',
            identification: 'cc_rrhh',
            email: 'email_rrhh'
        },
        {
            name: 'nombre_avanzo',
            type: 'firma_avanzo',
            identification: 'cc_avanzo',
            email: 'email_operadora'
        },
        {
            name: 'nombre_rep_legal',
            type: 'firma_empleador',
            identification: 'cc_rep_legal',
            email: 'email_cliente'
        }
    ],
    preFill: [
        {
            name: 'nombre_avanzo',
            value: 'GASTON VEGA VALLEJO'
        },
        {
            name: 'cc_avanzo',
            value: '71788861'
        }
    ],
    preBuildData: [],
    preBuild: false,
    name: 'AVANZO',
    price: 5000,
    build: 2
}