{
    _id: ObjectId('637fdfe3b82768c81dfdf7ba'),
    config: [
        {
            name: 'text_empresa_partner',
            type: 'text',
            description: 'Escribe por favor el nombre de la Empresa Partner'
        },
        {
            name: 'name_replegalpartner',
            type: 'name',
            description: 'Escribe por favor el nombre del Resentante Legal del Partner'
        },
        {
            description: 'Digite el número de identificación del Representante Legal del Partner',
            name: 'id_partner',
            type: 'number'
        },
        {
            name: 'email_replegalpartner',
            type: 'text',
            description: 'Escribe el Correo Electrónico del Representante Legal del Partner'
        },
        {
            name: 'text_comision',
            type: 'text',
            help: 'comision',
            description: 'Escribe en valor y letras el valor de comisión acordado'
        },
        {
            name: 'text_informacionnotificacionpartner',
            type: 'text',
            description: 'Ingresa dirección del partner para notificaciones físicas'
        },
        {
            name: 'text_correonotificacionpartner',
            type: 'text',
            help: 'correonotificacionpartner',
            description: 'Ingresa el correo electronico para notificaciones'
        },
        {
            name: 'text_nombrenotificacionpartner',
            type: 'text',
            help: 'nombrenotificacionpartner',
            description: 'Ingresa el nombre de la persona que recibirá las notificaciones'
        },
        {
            name: 'otra_clausula',
            type: 'clausula',
            description: '¿Desea ingresar un anexo extra?',
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
            description: 'Ingresa el texto del anexo extra',
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
            description: 'Ingresa fecha de firma del acuerdo'
        },
        {
            name: 'name_replegalmelonn',
            type: 'name',
            help: 'replegalmelonn',
            description: 'Andrés Felipe Archila Téllez'
        },
        {
            description: 'Digite el número identificación del Representante Legal Melonn',
            name: 'id_melon',
            type: 'number',
            help: 'replegalmelonn'
        },
        {
            name: 'email_replegalmelonn',
            type: 'text',
            help: 'replegalmelonn',
            description: 'archila@melonn.com'
        }
    ],
    help: {
        comision: 'Ejemplo: $5.5 MXP (Cinco punto cinco MXP)',
        correonotificacionpartner: 'Puede ser el mismo del representante legal',
        nombrenotificacionpartner: 'Puede ser el mismo representante legal',
        replegalmelonn: 'Andrés Felipe Archila Téllez'
    },
    username: '2163b9f5-4373-405e-b145-9f01649f3152',
    name: 'Acuerdo Partnership Mexico',
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
    build: 0,
    price: 5000,
    createdAt: ISODate('2022-11-24T21:00:00.000Z'),
    updatedAt: ISODate('2022-11-24T21:00:00.000Z')
}