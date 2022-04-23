{
    _id: ObjectId('624de6afed0a939e613674e8'),
    config: [
        {
            name: 'tipo_per_receptor',
            description: 'Seleccione el tipo de persona de la parte receptora',
            type: 'clausula',
            options: [
                {
                    name: 'Juridica',
                    value: 'jur'
                },
                {
                    name: 'Natural',
                    value: 'nat'
                }
            ],
            value: 'jur'
        },
        {
            name: 'empresa',
            description: 'Ingrese el nombre de la empresa receptora',
            type: 'name',
            prereq: [
                {
                    k: 'tipo_per_receptor',
                    v: 'jur'
                }
            ]
        },
        {
            name: 'nombre_firmate_receptor',
            description: 'Ingrese el nombre de la persona firmante por la parte receptora',
            type: 'name'
        },
        {
            name: 'cedula_firmante_receptor',
            description: 'Ingrese el numero de cedula de la persona firmante por la parte receptora',
            type: 'number'
        },
        {
            name: 'municipio_res_receptor',
            description: 'Ingrese el municipio de residencia de la persona firmante por la parte receptora',
            type: 'name'
        },
        {
            name: 'nit_receptor',
            description: 'Ingrese el nit de la empresa receptora',
            type: 'text',
            prereq: [
                {
                    k: 'tipo_per_receptor',
                    v: 'jur'
                }
            ]
        },
        {
            name: 'cant_smlmv',
            description: 'Digite el valor de la cláusula penal',
            type: 'number',
            addText: true
        },
        {
            name: 'dir_receptor',
            description: 'Digite la dirección de residencia de la parte receptora',
            type: 'text'
        },
        {
            name: 'tel_receptor',
            description: 'Digite el número de telefono de la parte receptora',
            type: 'text'
        },
        {
            name: 'correo_receptor',
            description: 'Digite el correo de la parte receptora',
            type: 'text'
        },
        {
            name: 'fecha_firma',
            description: 'Seleccione la fecha de firma del presente documento',
            type: 'date'
        }
    ],
    preFill: [
        {
            name: 'nombre_mico',
            value: 'JUAN JOSÉ RINCÓN ESCOBAR'
        },
        {
            name: 'cc_mico',
            value: '1.017.243.101'
        },
        {
            name: 'correo_mico',
            value: 'cristian.sandoval@micontrato.co'
        }
    ],
    signatureProfile: [
        {
            type: 'firma_rec',
            email: 'correo_receptor',
            name: 'nombre_firmate_receptor',
            identification: 'cedula_firmante_receptor',
        },
        {
            type: 'firma_mico',
            email: 'correo_mico',
            name: 'nombre_mico',
            identification: 'cc_mico',
        }
    ],
    preBuildData:[],
    operation:[],
    preBuild: false,
    price: 5000,
    name: 'ACUERDO DE CONFIDENCIALIDAD - MICONTRATO',
    build: 5
}