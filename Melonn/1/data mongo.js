{
    _id: ObjectId('637d1d72e453ae83378ff9a9'),
    config: [
        {
            name: 'name_replegalpartner',
            type: 'name',
            description: 'Escribe por favor el nombre del Resentante Legal del Partner'
        },
        {
            description: 'Seleccione el tipo de documento del Representante Legal del Partner',
            name: 'document_type_replegalpartner',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            type: 'clausula',
            value: 'cc'
        },
        {
            description: 'Digite el número de cédula de ciudadanía del Representante Legal del Partner',
            name: 'cedula_replegalpartner',
            prereq: [
                {
                    k: 'document_type_replegalpartner',
                    v: 'cc'
                }
            ],
            type: 'number'
        },
        {
            description: 'Digite el número de cédula de extranjería del Representante Legal del Partner',
            name: 'cedulae_replegalpartner',
            prereq: [
                {
                    k: 'document_type_replegalpartner',
                    v: 'ce'
                }
            ],
            type: 'number'
        },
        {
            description: 'Digite el número del pasaporte del Representante Legal del Partner',
            name: 'pasaporte_replegalpartner',
            prereq: [
                {
                    k: 'document_type_replegalpartner',
                    v: 'pa'
                }
            ],
            type: 'text'
        },
        {
            name: 'email_replegalpartner',
            type: 'text',
            description: 'Escribe el Correo Electrónico del Representante Legal del Partner'
        },
        {
            name: 'text_empresa_partner',
            type: 'text',
            description: 'Escribe por favor el nombre de la Empresa Partner'
        },
        {
            name: 'text_nit_partner',
            type: 'text',
            description: 'Digita el número del NIT del Partner'
        },
        {
            name: 'text_comision',
            type: 'text',
            help: 'comision',
            description: 'Escribe en valor y letras el valor de comisión acordado'
        },
        {
            name: 'otra_clausula',
            type: 'clausula',
            description: '¿Desea ingresar una cláusula extra?',
            value:'n',
            options:[
                {
                    name:'No',
                    value:'n'
                },
                {
                    name:'Si',
                    value:'s'
                },
            ]
        },
        {
            name: 'otra_clausula_texto',
            type: 'text',
            description: 'Ingresa el texto de la clausula extra',
            prereq:[
                {
                    k:'otra_clausula',
                    v:'s'
                }
            ]
        },
        {
            name: 'date_fecha',
            type: 'date',
            help: 'fecha',
            description: 'Ingresa fecha de firma del contrato'
        },
        {
            name: 'name_replegalmelonn',
            type: 'name',
            help: 'replegalmelonn',
            description: 'Nombre Representante Legal Melonn'
        },
        {
            description: 'Seleccione el tipo de documento del Representante Legal Colombia',
            name: 'document_type_replegalmelonn',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            type: 'clausula',
            value: 'cc',
            help: 'replegalmelonn'
        },
        {
            description: 'Digite el número de cédula de ciudadanía del Representante Legal Colombia',
            name: 'cedula_replegalmelonn',
            prereq: [
                {
                    k: 'document_type_replegalmelonn',
                    v: 'cc'
                }
            ],
            type: 'number',
            help: 'replegalmelonn'
        },
        {
            description: 'Digite el número de cédula de extranjería del Representante Legal Colombia',
            name: 'cedulae_replegalmelonn',
            prereq: [
                {
                    k: 'document_type_replegalmelonn',
                    v: 'ce'
                }
            ],
            type: 'number',
            help: 'replegalmelonn'
        },
        {
            description: 'Digite el número del pasaporte del Representante Legal Colombia',
            name: 'pasaporte_replegalmelonn',
            prereq: [
                {
                    k: 'document_type_replegalmelonn',
                    v: 'pa'
                }
            ],
            type: 'text',
            help: 'replegalmelonn'
        },
        {
            name: 'email_replegalmelonn',
            type: 'text',
            help: 'replegalmelonn',
            description: 'Correo Representante Legal Melonn COL'
        }
    ],
    help: {
        comision: 'Ejemplo: $500 COP (Quinientos COP)',
        fecha: 'Ingresa fecha de firma del contrato',
        replegalmelonn: 'Rep. Legal COL: JUAN LUIS TOBAR OSPINA C.C 1.037.578.360 CORREO: juancho@melonn.com'
    },
    username: '2163b9f5-4373-405e-b145-9f01649f3152',
    name: 'Acuerdo Partnership Colombia',
    sign: [
        'name_replegalpartner',
        'cedula_replegalpartner',
        'cedulae_replegalpartner',
        'pasaporte_replegalpartner',
        'email_replegalpartner',
        'name_replegalmelonn',
        'cedula_replegalmelonn',
        'cedulae_replegalmelonn',
        'pasaporte_replegalmelonn',
        'email_replegalmelonn'
    ],
    signatureProfile: [
        {
            email: 'email_replegalpartner',
            identification: 'cedula_replegalpartner|cedulae_replegalpartner|pasaporte_replegalpartner',
            name: 'name_replegalpartner',
            type: 'replegalpartner'
        },
        {
            email: 'email_replegalmelonn',
            identification: 'cedula_replegalmelonn|cedulae_replegalmelonn|pasaporte_replegalmelonn',
            name: 'name_replegalmelonn',
            type: 'replegalmelonn'
        }
    ],
    build: 1,
    price: 5000,
    createdAt: ISODate('2022-11-22T19:00:00.000Z'),
    updatedAt: ISODate('2022-11-22T19:00:00.000Z')
}