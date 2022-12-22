{
    _id: ObjectId('62ea8a7951fc27d23d9291a7'),
    config: [
        {
            name: 'nombre_asociado',
            type: 'name',
            description: 'Ingrese el nombre completo del asociado'
        },
        {
            name: 'tipo_id_asociado',
            type: 'clausula',
            description: 'Seleccion el tipo de documento de identificación del asociado',
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
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ]
        },
        {
            name: 'cedula_asociado',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del asociado',
            prereq: [
                {
                    k: 'tipo_id_asociado',
                    v: 'cc'
                }
            ]
        },
        {
            name: 'cedulae_asociado',
            type: 'number',
            description: 'Ingrese el número de cédula de extranjería del asociado',
            prereq: [
                {
                    k: 'tipo_id_asociado',
                    v: 'ce'
                }
            ]
        },
        {
            name: 'pasaporte_asociado',
            type: 'text',
            description: 'Ingrese el pasaporte del asociado',
            prereq: [
                {
                    k: 'tipo_id_asociado',
                    v: 'pa'
                }
            ]
        },
        {
            name: 'fecha_expedicion',
            type: 'date',
            description: 'Seleccione la fecha de expedicion del documento de identidad del asociado'
        },
        {
            name: 'ciudad_expedicion',
            type: 'text',
            description: 'Ingrese la ciudad de expedicion del documento de identidad del asociado'
        },
        {
            name: 'direccion_residencia',
            type: 'text',
            description: 'Ingrese la dirección de residencia del asociado'
        },
        {
            name: 'ciudad_residencia',
            type: 'text',
            description: 'Ingrese la ciudad de residencia del asociado'
        },
        {
            name: 'tel_asociado',
            type: 'phone',
            description: 'Ingrese el número de teléfono del asociado'
        },
        {
            name: 'correo_asociado',
            type: 'email',
            description: 'Ingrese el correo electrónico del asociado'
        },
        {
            name: 'genero_asociado',
            type: 'text',
            description: 'Ingrese el género del asociado'
        },
        {
            name: 'mujer_cab_fam',
            type: 'select',
            description: '¿Es mujer cabeza de familia?',
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
            name: 'nivel_escolar',
            type: 'text',
            description: 'Ingrese el nivel escolar del asociado'
        },
        {
            name: 'fecha_nacimiento',
            type: 'date',
            description: 'Seleccione la fecha de nacimiento del asociado'
        },
        {
            name: 'ciudad_nacimiento',
            type: 'text',
            description: 'Ingrese la ciudad de nacimiento del asociado'
        },
        {
            name: 'estrato',
            type: 'number',
            description: 'Ingrese el estrato del asociado'
        },
        {
            name: 'ocupacion',
            type: 'text',
            description: 'Ingrese la ocupación del asociado'
        },
        {
            name: 'empresa',
            type: 'text',
            description: 'Ingrese la empresa donde trabaja el asociado'
        },
        {
            name: 'personas_cargo',
            type: 'number',
            description: 'Ingrese el número de personas que tiene a cargo el asociado'
        },
        {
            name: 'tipo_vivienda',
            type: 'text',
            description: 'Ingrese el tipo de vivienda del asociado'
        },
        {
            name: 'ingresos',
            type: 'currency',
            description: 'Ingrese los ingresos del asociado'
        },
        {
            name: 'egresos',
            type: 'currency',
            description: 'Ingrese los egresos del asociado'
        },
        {
            name: 'plan_asociado',
            type: 'text',
            description: 'Ingrese el plan asociado'
        }
    ],
    sign: [
        'nombre_asociado',
        'correo_asociado',
        'tel_asociado',
        'cedula_asociado',
        'cedulae_asociado',
        'pasaporte_asociado'
    ],
    signatureProfile: [
        {
            name: 'nombre_asociado',
            email: 'correo_asociado',
            phone: 'tel_asociado',
            identification: 'cedula_asociado|cedulae_asociado|pasaporte_asociado',
            type: 'firma_asociado'
        }
    ],
    preBuild: false,
    preBuildData: [],
    name: 'VINCULACIÓN DE ASOCIADOS',
    price: 5000,
    build: 1
}