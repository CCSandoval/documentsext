{
    _id: ObjectId('61f2d4dced0a939e61367486'),
    config: [
        {
            name: "nombre_empresa",
            description: "Ingrese el nombre de la empresa",
            type: 'name'
        },
        {
            name: "nit_empresa",
            description: "Ingrese el nit de la empresa",
            type: 'text'
        },
        {
            name: "nombre_rep",
            description: "Ingrese el nombre del representante legal de la empresa",
            type: 'name'
        },
        {
            name: "cedula_rep",
            description: "Ingrese el número de cédula de ciudadanía del representante legal de la empresa",
            type: 'number'
        },
        {
            name: "residencia_rep",
            description: "Ingrese la ciudad de residencia del representante legal de la empresa",
            type: 'name',
            help:'ciudad'
        },
        {
            name: "dias_firma",
            description: "Ingrese el dia del mes en el que se firma el contrato",
            type: 'number'
        },
        {
            name: "mes_firma",
            description: "Ingrese el mes en el que se firma el contrato",
            type: 'text',
            help: 'mes'
        },
        {
            name: "anio_firma",
            description: "Ingrese el año en el que se firma el contrato",
            type: 'text'
        },
        {
            name:"anexos",
            description: '¿Desea ingresar anexos para el valor de la comisión o beneficios?',
            type: 'clausula',
            options:[
                {
                    name:"No",
                    value:'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            value: 'n'
        },
        {
            name:"comisiones",
            description: "¿Desea añadir una clausula de comisiones?",
            prereq:[
                {
                    k: 'anexos',
                    v: 's'
                }
            ],
            options:[
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            type: 'clausula',
            value: 's'
        },
        {
            name:'com_partner_aliado',
            description: '¿Desea agregar comisión por la primer factura del cliente?',
            options:[
                {
                    name: "No",
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            prereq:[
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ],
            value: 'n',
            type: 'clausula'
        },
        {
            name: 'aliado_porcentaje_1',
            description: 'Ingrese el porcentaje correspondiente al partner aliado si el PARTNER hace contacto inicial y la COMPAÑIA cierra y ejecuta la negociación',
            type: 'number',
            help: 'porcentaje',
            prereq:[
                {
                    k: 'com_partner_aliado',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ]
        },
        {
            name: 'aliado_porcentaje_2',
            description: 'Ingrese el porcentaje correspondiente al partner aliado si el PARTNER y la COMPAÑIA cierran y ejecutan la negociación en conjunto',
            type: 'number',
            help: 'porcentaje',
            prereq:[
                {
                    k: 'com_partner_aliado',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ]
        },
        {
            name: 'aliado_porcentaje_3',
            description: 'Ingrese el porcentaje correspondiente al partner aliado si el PARTNER cierra y ejecuta la negociación',
            type: 'number',
            help: 'porcentaje',
            prereq:[
                {
                    k: 'com_partner_aliado',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ]
        },
        {
            name: 'facturacion_partner',
            description: "¿Desea ingresar una cláusula de facturación mensual para el PARTNER?",
            options:[
                {
                    name: "No",
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            prereq:[
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ],
            value: 'n',
            type: 'clausula'
        },
        {
            name: 'partner_porcentaje_fac_let',
            description: 'Ingrese el porcentaje del valor de facturación mensual correspondiente al PARTNER (EN LETRAS)',
            prereq:[
                {
                    k: 'facturacion_partner',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ],
            help: 'letras',
            type: 'text'
        },
        {
            name: 'partner_porcentaje_fac_num',
            description: 'Ingrese el porcentaje del valor de facturación mensual correspondiente al PARTNER (EN NÚMEROS)',
            prereq:[
                {
                    k: 'facturacion_partner',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ],
            help: 'porcentaje',
            type: 'number'
        },
        {
            name:'partner_pro',
            description: '¿Desea ingresar una clausula de partner pro?',
            options:[
                {
                    name: "No",
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            prereq:[
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ],
            value: 'n',
            type: 'clausula'
        },
        {
            name: 'partner_pro_porcentaje_fac_let',
            description: 'Ingrese el porcentaje del valor de facturación mensual correspondiente al Partner Pro (EN LETRAS)',
            prereq:[
                {
                    k: 'partner_pro',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ],
            help: 'letras',
            type: 'text'
        },
        {
            name: 'partner_pro_porcentaje_fac_num',
            description: 'Ingrese el porcentaje del valor de facturación mensual correspondiente al Partner Pro (EN NÚMEROS)',
            prereq:[
                {
                    k: 'partner_pro',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ],
            help: 'porcentaje',
            type: 'number'
        },
        {
            name: 'bono_let',
            description: "Ingrese el valor del bono (EN LETRAS)",
            prereq:[
                {
                    k: 'partner_pro',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ],
            help: 'valorLet',
            type: 'text'
        },
        {
            name: 'bono_num',
            description: "Ingrese el valor del bono (EN NÚMEROS)",
            prereq:[
                {
                    k: 'partner_pro',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ],
            help: 'valorNum',
            type: 'number'
        },
        {
            name: 'rango_bono_let',
            description: "Ingrese cada cuanto dinero se le dará al partner el bono (EN LETRAS)",
            prereq:[
                {
                    k: 'partner_pro',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ],
            help: 'valorLet',
            type: 'text'
        },
        {
            name: 'rango_bono_num',
            description: "Ingrese cada cuanto dinero se le dará al partner el bono (EN NÚMEROS)",
            prereq:[
                {
                    k: 'partner_pro',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'comisiones',
                    v: 's'
                }
            ],
            help: 'valorNum',
            type: 'number'
        },
        {
            name: 'beneficios',
            description: '¿Desea ingresar una cláusula de beneficios?',
            prereq: [
                {
                    k: 'anexos',
                    v: 's'
                }
            ],
            options:[
                {
                    name: 'Si',
                    value:'s'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            type: "clausula",
            value: 's'
        },
        {
            name:'ben_partner_aliado',
            description: '¿Desea agregar beneficios del partner aliado?',
            options:[
                {
                    name: "No",
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            prereq:[
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'beneficios',
                    v: 's'
                }
            ],
            value: 'n',
            type: 'clausula'
        },
        {
           name: 'num_licensias',
           description: 'Ingrese el número de licensias aprobadas para usar la plataforma',
           prereq:[
                {
                    k: 'ben_partner_aliado',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'beneficios',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            name: 'dolares_omnicanal',
            description: 'Escriba el valor equivalente al consumo omnicanal en dolares',
            prereq:[
                {
                    k: 'ben_partner_aliado',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'beneficios',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            name: 'cambio',
            description: 'Escriba el objeto o valor a cambio',
            prereq:[
                {
                    k: 'ben_partner_aliado',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'beneficios',
                    v: 's'
                }
            ],
            type: 'text',
        },
        {
            name:'otros_beneficios',
            description: '¿Desea ingresar otros beneficios?',
            options:[
                {
                    name: "No",
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            prereq:[
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'beneficios',
                    v: 's'
                }
            ],
            value: 'n',
            type: 'clausula'
        },
        {
            name:'otros_beneficios_texto',
            description: 'Escriba los otros beneficios',
            prereq:[
                {
                    k: 'otros_beneficios',
                    v: 's'
                },
                {
                    k: 'anexos',
                    v: 's'
                },
                {
                    k: 'beneficios',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            name: "correo_rep",
            description: "Ingrese el correo del representante legal de la empresa",
            type: 'text',
            help: 'email'
        }
    ],
    operation:[],
    sign:[
        "nombre_empresa",
        "nit_empresa",
        "nombre_rep",
        "cedula_rep",
        "residencia_rep",
        "dias_firma",
        "mes_firma",
        "anio_firma",
        "correo_rep"
    ],
    preFill:[
        {
            name:'keybe_name',
            value: 'Samuel Urquijo Murillo'
        },
        {
            name: 'title',
            value: 'REPRESENTANTE LEGAL'
        },
        {
            name: 'keybe_email',
            value: 'samuel@kbe.ai'
        },
        {
            name: 'keybe_cc',
            value: '1036930038'
        }
    ],
    signatureProfile:[
        {
            name: 'keybe_name',
            identification: 'keybe_id',
            title: 'keybe_title',
            email: 'keybe_email',
            type: 'firma_keybe'
        },
        {
            name: 'nombre_rep',
            identification: 'cedula_rep',
            title: 'title',
            email: 'correo_rep',
            type: 'firma_rep'
        }
    ],
    preBuildData:[],
    preBuild: false,
    price: 5000,
    help:{
        ciudad: "Ejemplo: Medellín",
        email: "Ejemplo: Correo@dominio.com",
        mes: 'Ejemplo: Abril',
        porcentaje: "Ejemplo: 25",
        letras: 'Ejemplo: Veinticinco',
        num: 'Ejemplo: 10',
        valorLet: 'Ejemplo: Diez mil',
        valorNum: 'Ejemplo: 10.000'
    },
    name: 'ACUERDO DE PARTNERS - KEYBE',
    build: 10,
}