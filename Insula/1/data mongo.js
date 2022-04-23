{
    _id: ObjectId('62549da9ed0a939e613674f8'),
    config: [
        {
            name: 'tipo_unidad',
            description: 'Ingrese el tipo de la unidad',
            type: 'text'
        },
        {
            name: 'nomenclatura_licencia',
            description: 'Ingrese la nomenclatura de la licencia',
            type: 'text'
        },
        {
            name: 'nombre_comprador_1',
            description: 'Ingrese el nombre del primer comprador',
            type: 'name'
        },
        {
            name:'vendedor_2',
            description:'Desea ingresar un segundo comprador',
            type:'clausula',
            options:[
                {
                    name:'No',
                    value:'n'
                },
                {
                    name:'Si',
                    value:'s'
                },
            ],
            value:'n'
        },
        {
            name: 'nombre_comprador_2',
            description: 'Ingrese el nombre del primer comprador',
            type: 'name',
            prereq:[
                {
                    k:'vendedor_2',
                    v:'s'
                }
            ]
        },
        {
            name: 'domicilio_comprador_1',
            description: 'Ingrese el municipio donde reside el primer comprador',
            type: 'text'
        },
        {
            name: 'domicilio_comprador_2',
            description: 'Ingrese el municipio donde reside el segundo comprador',
            type: 'text',
            prereq:[
                {
                    k:'vendedor_2',
                    v:'s'
                }
            ]
        },
        {
            name: 'doc_id_comprador_1',
            description: 'Ingrese el numero de documento de identidad del primer comprador',
            type: 'number'
        },
        {
            name: 'doc_id_comprador_2',
            description: 'Ingrese el numero de documento de identidad del segundo comprador',
            type: 'number',
            prereq:[
                {
                    k:'vendedor_2',
                    v:'s'
                }
            ]
        },
        {
            name: 'ciudad_exp_id_comprador_1',
            description: 'Ingrese el municipio donde se expidió el documento de identidad del primer comprador',
            type: 'text'
        },
        {
            name: 'ciudad_exp_id_comprador_2',
            description: 'Ingrese el municipio donde se expidió el documento de identidad del segundo comprador',
            type: 'text',
            prereq:[
                {
                    k:'vendedor_2',
                    v:'s'
                }
            ]
        },
        {
            name: 'est_civil_comprador_1',
            description: 'Ingrese el estado civil del primer comprador',
            type: 'text'
        },
        {
            name: 'est_civil_comprador_2',
            description: 'Ingrese el estado civil del segundo comprador',
            type: 'text',
            prereq:[
                {
                    k:'vendedor_2',
                    v:'s'
                }
            ]
        },
        {
            name: 'area_construida',
            description: 'Ingrese el area construida',
            type: 'number'
        },
        {
            name: 'valor_unidad',
            description: 'Ingrese el valor de la unidad',
            type: 'currency'
        },
        {
            name: 'valor_pagado',
            description: 'Ingrese el valor pagado a la fecha',
            type: 'currency'
        },
        {
            name: 'saldo_total',
            description: 'Ingrese el saldo total',
            type: 'currency'
        },
        {
            name: 'fecha_pago_1',
            description: 'Seleccione la fecha del primer pago',
            type: 'date'
        },
        {
            name: 'valor_pago_1',
            description: 'Ingrese el valor del primer pago',
            type: 'currency',
            removeText: true
        },
        {
            name: 'fecha_pago_2',
            description: 'Seleccione la fecha del segundo pago',
            type: 'date'
        },
        {
            name: 'valor_pago_2',
            description: 'Ingrese el valor del segundo pago',
            type: 'currency',
            removeText: true
        },
        {
            name: 'fecha_pago_3',
            description: 'Seleccione la fecha del tercer pago',
            type: 'date'
        },
        {
            name: 'valor_pago_3',
            description: 'Ingrese el valor del tercer pago',
            type: 'currency',
            removeText: true
        },
        {
            name: 'fecha_pago_4',
            description: 'Seleccione la fecha del cuarto pago',
            type: 'date'
        },
        {
            name: 'valor_pago_4',
            description: 'Ingrese el valor del cuarto pago',
            type: 'currency',
            removeText: true
        },
        {
            name: 'fecha_pago_5',
            description: 'Seleccione la fecha del quinto pago',
            type: 'date'
        },
        {
            name: 'valor_pago_5',
            description: 'Ingrese el valor del quinto pago',
            type: 'currency',
            removeText: true
        },
        {
            name: 'fecha_pago_6',
            description: 'Seleccione la fecha del sexto pago',
            type: 'date'
        },
        {
            name: 'valor_pago_6',
            description: 'Ingrese el valor del sexto pago',
            type: 'currency',
            removeText: true
        },
        {
            name: 'fecha_pago_7',
            description: 'Seleccione la fecha del septimo pago',
            type: 'date'
        },
        {
            name: 'valor_pago_7',
            description: 'Ingrese el valor del septimo pago',
            type: 'currency',
            removeText: true
        },
        {
            name: 'fecha_pago_8',
            description: 'Seleccione la fecha del octavo pago',
            type: 'date'
        },
        {
            name: 'valor_pago_8',
            description: 'Ingrese el valor del octavo pago',
            type: 'currency',
            removeText: true
        },
        {
            name: 'pago_sub_cred',
            description: '¿Tiene crédito o subsidio?',
            type: 'clausula',
            options: [
                {
                    name: 'Ninguno',
                    value: 'no'
                },
                {
                    name: 'Crédito',
                    value: 'cred'
                },
                {
                    name: 'Subsidio',
                    value: 'sub'
                }
            ],
            value: 'no'
        },
        {
            name: 'saldo_cuota_inicial_letra_sin_sub_s',
            description: 'Ingrese el valor de la cuota inicial',
            type: 'currency',
            prereq: [
                {
                    k: 'pago_sub_cred',
                    v: 'sub'
                }
            ]
        },
        {
            name: 'saldo_cuota_inicial_letra_sin_sub_c',
            description: 'Ingrese el valor de la cuota inicial',
            type: 'currency',
            prereq: [
                {
                    k: 'pago_sub_cred',
                    v: 'cred'
                }
            ]
        },
        {
            name: 'numero_encargo_fiduciario',
            description: 'Ingrese el numero de encargo fiduciario',
            type: 'number'
        },
        {
            name: 'valor_subsidio',
            description: 'Ingrese el valor del subsidio',
            type: 'currency',
            prereq: [
                {
                    k: 'pago_sub_cred',
                    v: 'sub'
                }
            ]
        },
        {
            name: 'caja_comp_fam',
            description: 'Ingrese la caja de compensacion familiar',
            type: 'text',
            prereq: [
                {
                    k: 'pago_sub_cred',
                    v: 'sub'
                }
            ]
        },
        {
            name: 'nit_caja_comp_fam',
            description: 'Ingrese el nit de la caja de compensacion familiar',
            type: 'text',
            prereq: [
                {
                    k: 'pago_sub_cred',
                    v: 'sub'
                }
            ]
        },
        {
            name: 'fecha_post_sub',
            description: 'Seleccione la fecha de postulación al subsidio',
            type: 'date',
            prereq: [
                {
                    k: 'pago_sub_cred',
                    v: 'sub'
                }
            ]
        },
        {
            name: 'personas_grupo_familiar',
            description: 'Ingrese la información del grupo familiar',
            type: 'text',
            prereq: [
                {
                    k: 'pago_sub_cred',
                    v: 'sub'
                }
            ]
        },
        {
            name: 'num_post_sub',
            description: 'Ingrese el numero de postulación al subsidio',
            type: 'number',
            prereq: [
                {
                    k: 'pago_sub_cred',
                    v: 'sub'
                }
            ]
        },
        {
            name: 'valor_credito',
            description: 'Ingrese el valor del credito',
            type: 'currency',
            prereq: [
                {
                    k: 'pago_sub_cred',
                    v: 'sub'
                }
            ]
        },
        {
            name: 'banco_credito',
            description: 'Ingrese el banco del credito',
            type: 'text'
        },
        {
            name: 'valor_pacto_arras',
            description: 'Ingrese el valor del pacto de arras',
            type: 'currency'
        },
        {
            name: 'fecha_firma_escritura',
            description: 'Seleccione la fecha de la firma de la escritura',
            type: 'date'
        },
        {
            name: 'correo_comprador_1',
            description: 'Ingrese el correo del primer comprador',
            type: 'text'
        },
        {
            name: 'correo_comprador_2',
            description: 'Ingrese el correo del segundo comprador',
            type: 'text'
        },
        {
            name: 'fecha_contrato_adhesion',
            description: 'Seleccione la fecha del contrato de adhesión',
            type: 'date'
        },
        {
            name: 'fecha_firma',
            description: 'Seleccione la fecha en la que se firma el presente documento',
            type: 'date'
        },
        {
            name: 'dir_comprador_1',
            description: 'Ingrese la dirección del primer comprador',
            type: 'text'
        },
        {
            name: 'dir_comprador_2',
            description: 'Ingrese la dirección del segundo comprador',
            type: 'text'
        },
        {
            name: 'tel_comprador_1',
            description: 'Ingrese el telefono del primer comprador',
            type: 'text'
        },
        {
            name: 'tel_comprador_2',
            description: 'Ingrese el telefono del segundo comprador',
            type: 'text'
        }
    ],
    operation: [],
    sign: [
        'correo_comprador_1',
        'nombre_comprador_1',
        'doc_id_comprador_1',
        'correo_comprador_2',
        'nombre_comprador_2',
        'doc_id_comprador_2'
    ],
    signatureProfile: [
        {
            type: 'firma_vendedor',
            email: 'correo_vendedor',
            name: 'nombre_vendedor',
            identification: 'cc_vendedor'
        },
        {
            type: 'firma_comprador_1',
            email: 'correo_comprador_1',
            name: 'nombre_comprador_1',
            identification: 'doc_id_comprador_1'
        },
        {
            type: 'firma_comprador_2',
            email: 'correo_comprador_2',
            name: 'nombre_comprador_2',
            identification: 'doc_id_comprador_2'
        }
    ],
    preFill: [
        {
            name: 'nombre_vendedor',
            value: 'SIMÓN SÁNCHEZ CORTÉS'
        },
        {
            name: 'cc_vendedor',
            value: '1.053.820.229'
        },
        {
            name: 'correo_vendedor',
            value: 'simon@grupoinsula.com'
        }
    ],
    username: 'fb7faa02-a6de-4097-a45f-c4fcff9577de',
    preBuild: false,
    preBuildData: [],
    price: 5000,
    build: 7,
    name: 'CONTRATO DE PROMESA DE COMPRAVENTA DE VIVIENDA DE INTERÉS SOCIAL'
}