{
    _id: ObjectId('6240bec1ed0a939e613674da'),
    config: [
        {
            name: 'nombre_emp_ordenante',
            description: 'Digite el nombre del ordenante',
            type: 'name',
            help: 'empresa'
        },
        {
            name: 'nit_ordenante',
            description: 'Digite el NIT del ordenante',
            type: 'text',
            help: 'nit'
        },
        {
            name: 'direccion_ordenante',
            description: 'Digite la dirección del ordenante',
            type: 'text',
            help: 'direccion'
        },
        {
            name: 'ciudad_ordenante',
            description: 'Digite la ciudad del ordenante',
            type: 'text',
            help: 'ciudad'
        },
        {
            name: 'pais_ordenante',
            description: 'Digite el pais del ordenante',
            type: 'text',
            help: 'pais'
        },
        {
            name: 'tel_ordenante',
            description: 'Digite el número de teléfono del ordenante',
            type: 'text',
            help: 'tel'
        },
        {
            name: 'email_ordenante',
            description: 'Digite el correo electronico del ordenante',
            type: 'text',
            help: 'email'
        },
        {
            name: 'cuenta_ordenante',
            description: 'Seleccione el tipo de cuenta del ordenante',
            type: 'clausula',
            options: [
                {
                    name: 'Cuenta de Ahorros',
                    value: 'aho'
                },
                {
                    name: 'Cuenta Corriente',
                    value: 'corr'
                }
            ],
            value: 'aho',
            help: 'tipo_cuenta'
        },
        {
            name: 'num_cuenta_ordenante',
            description: 'Digite el número de cuenta del ordenante',
            type: 'text'
        },
        {
            name: 'tipo_entidad_ordenante',
            description: 'Seleccione el tipo de entidad del ordenante',
            type: 'clausula',
            options: [
                {
                    name: 'Pública',
                    value: 'pub'
                },
                {
                    name: 'Privada',
                    value: 'priv'
                },
                {
                    name: 'Mixta',
                    value: 'mix'
                }
            ],
            value: 'pub',
        },
        {
            name: 'nombre_emp_beneficiario',
            description: 'Digite el nombre del beneficiario',
            type: 'name',
            help: 'empresa'
        },
        {
            name: 'id_beneficiario',
            description: 'Digite la identidad del beneficiario',
            type: 'name'
        },
        {
            name: 'direccion_beneficiario',
            description: 'Digite la dirección del beneficiario',
            type: 'name',
            help: 'direccion'
        },
        {
            name: 'ciudad_beneficiario',
            description: 'Digite la ciudad del beneficiario',
            type: 'name',
            help: 'ciudad'
        },
        {
            name: 'pais_beneficiario',
            description: 'Digite el pais del beneficiario',
            type: 'name',
            help: 'pais'
        },
        {
            name: 'tel_beneficiario',
            description: 'Digite el número de teléfono del beneficiario',
            type: 'name',
            help: 'tel'
        },
        {
            name: 'email_beneficiario',
            description: 'Digite el correo electronico del beneficiario',
            type: 'text',
            help: 'email'
        },
        {
            name: 'moneda',
            description: 'Seleccione el tipo de moneda que será usada en la operación',
            type: 'clausula',
            options: [
                {
                    name: 'USD',
                    value: 'usd'
                },
                {
                    name: 'GBP',
                    value: 'gbp'
                },
                {
                    name: 'JPY',
                    value: 'jpy'
                },
                {
                    name: 'CHF',
                    value: 'chf'
                },
                {
                    name: 'CAD',
                    value: 'cad'
                },
                {
                    name: 'MXN',
                    value: 'mxn'
                },
                {
                    name: 'PEN',
                    value: 'pen'
                }
            ],
            value: 'usd'
        },
        {
            name: 'valor',
            description: 'Digite el valor de la operación',
            type: 'number',
            help: 'valor'
        },
        {
            name: 'vigencia',
            description: 'Digite la vigencia (En días)',
            type: 'number'
        },
        {
            name: 'mas',
            description: 'Ingrese el porcentaje máximo',
            type: 'number',
            help: 'mas'
        },
        {
            name: 'menos',
            description: 'Ingrese el porcentaje mínimo',
            type: 'number',
            help: 'menos'
        },
        {
            name: 'encargado_comisiones_ext',
            description: 'Seleccione el encargado de las comisiones y gastos bancarios por fuera de colombia',
            type: 'clausula',
            options: [
                {
                    name: 'El Ordenante',
                    value: 'ord'
                },
                {
                    name: 'El Beneficiario',
                    value: 'ben'
                }
            ],
            value: 'ord'
        },
        {
            name: 'actuacion_corresponsal',
            description: 'Digite la actuación del corresponsal',
            type: 'text'
        },
        {
            name: 'forma_utilizacion',
            description: 'Seleccione la forma de utilización (Pago al beneficiario)',
            type: 'clausula',
            options: [
                {
                    name: 'A la vista',
                    value: 'vista'
                },
                {
                    name: 'Por negociación (Letras a la vista)',
                    value: 'neg_vista'
                },
                {
                    name: 'Por negociación (Letras a Plazos)',
                    value: 'neg_plazos'
                }
            ],
            value: 'vista'
        },
        {
            name: 'utilización_num_dias',
            description: 'Escriba la cantidad de dias',
            type: 'number',
            prereq: [
                {
                    k: 'forma_utilizacion',
                    v: 'neg_plazos'
                }
            ]
        },
        {
            name: 'utilizacion_inicio',
            description: 'Seleccione el tipo de documento',
            type: 'clausula',
            options: [
                {
                    name: 'Factura Comercial',
                    value: 'fac_comer'
                },
                {
                    name: 'Documento de Transporte',
                    value: 'doc_transp'
                }
            ],
            value: 'fac_comer',
            prereq: [
                {
                    k: 'forma_utilizacion',
                    v: 'neg_plazos'
                }
            ]
        },
        {
            name: 'embarques_parciales',
            description: '¿Están permitidos los embarques parciales?',
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
            name: 'transbordos',
            description: '¿Están permitidos los transbordos?',
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
            name: 'fecha_max',
            description: 'Seleccione la fecha maxima de embarque',
            type: 'clausula',
            options: [
                {
                    name: 'Fecha exacta',
                    value: 'exacta'
                },
                {
                    name: 'Dentro de la validez de la carta de crédito',
                    value: 'validez'
                }
            ],
            value: 'exacta'
        },
        {
            name: 'ciudad_embarque',
            description: 'Digite la ciudad de embarque',
            type: 'text',
            help: 'ciudad'
        },
        {
            name: 'pais_embarque',
            description: 'Digite el pais de embarque',
            type: 'text',
            help: 'pais'
        },
        {
            name: 'ciudad_destino',
            description: 'Digite la ciudad de destino',
            type: 'text',
            help: 'ciudad'
        },
        {
            name: 'pais_destino',
            description: 'Digite el pais de destino',
            type: 'text',
            help: 'pais'
        },
        {
            name: 'zona_franca',
            description: '¿Hay Zona Franca?',
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
            name: 'calidad_ord',
            description: 'Seleccione la calidad en la que firma el ordenante',
            type: 'clausula',
            options: [
                {
                    name: 'En nombre propio',
                    value: 'propio'
                },
                {
                    name: 'En representación de un tercero',
                    value: 'tercero'
                },
                {
                    name: 'Avalista',
                    value: 'avalista'
                }
            ],
            value: 'propio'
        },
        {
            name: 'nombre_ordenante',
            description: 'Digite el nombre de la persona que firma por la parte ordenante',
            type: 'name',
            help: 'nombre'
        },
        {
            name: 'cedula_ordenante',
            description: 'Digite el numero de cedula de la persona que firma por la parte ordenante',
            type: 'number',
            help: 'cc'
        },
        {
            name: 'calidad_ben',
            description: 'Seleccione la calidad en la que firma el beneficiario',
            type: 'clausula',
            options: [
                {
                    name: 'En nombre propio',
                    value: 'propio'
                },
                {
                    name: 'En representación de un tercero',
                    value: 'tercero'
                },
                {
                    name: 'Avalista',
                    value: 'avalista'
                }
            ],
            value: 'propio'
        },
        {
            name: 'nombre_beneficiario',
            description: 'Digite el nombre de la persona que firma por la parte beneficiaria',
            type: 'name',
            help: 'nombre'
        },
        {
            name: 'cedula_beneficiario',
            description: 'Digite el numero de cedula de la persona que firma por la parte beneficiaria',
            type: 'number',
            help: 'cc'
        },
        {
            name: 'nit_beneficiario',
            description: 'Digite el nit del beneficiario',
            type: 'text',
            help: 'nit'
        }
    ],
    operation: [],
    preFill: [],
    help: {
        empresa: 'Nombre de la empresa, ejemplo: MICONTRATO S.A.S',
        nit: 'Numero de Identificación Tributaria, Ejemplo: 800.197.268-4',
        direccion: 'Ejemplo: Calle 58 #2a74 S/N',
        ciudad: 'Ejemplo: Ibagué',
        pais: 'Ejemplo: Colombia',
        tel: 'Ejemplo: 3137461326',
        email: 'Ejemplo: cristian.sandoval@micontrato.co',
        tipo_cuenta: 'Cuenta de Ahorros o Cuenta Corriente',
        valor: 'Ejemplo: $4.510.200',
        mas: 'Ejemplo: 50%',
        menos: 'Ejemplo: 20%',
        nombre: 'Ejemplo: CRISTIAN CAMILO SANDOVAL TORRES',
        cc: 'Ejemplo: 1116559264'
    },
    signatureProfile: [
        {
            type: 'firma_ordenante',
            name: 'nombre_ordenante',
            identification: 'cedula_ordenante',
            email: 'email_ordenante'
        },
        {
            type: 'firma_beneficiario',
            name: 'nombre_beneficiario',
            identification: 'cedula_beneficiario',
            email: 'email_beneficiario'
        }
    ],
    sign: [
        'nombre_ordenante',
        'cedula_ordenante',
        'email_ordenante',
        'nombre_beneficiario',
        'cedula_beneficiario',
        'email_beneficiario'
    ],
    name: 'Bancolombia',
    preBuildData: [],
    preBuild: false,
    price: 5000,
    build: 6
}