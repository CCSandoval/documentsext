{
    _id: ObjectId('633347021197e88531953337'),
    config: [
        {
            name: 'nombre_empleador',
            type: 'name',
            description: 'Digite el nombre del empleador',
            help: 'nombre'
        },
        {
            name: 'genero_empleador',
            type: 'clausula',
            description: 'Seleccione el genero del empleador',
            help: 'genero',
            value: 'm',
            options: [
                {
                    name: 'Masculino',
                    value: 'm'
                },
                {
                    name: 'Femenino',
                    value: 'f'
                }
            ],
        },
        {
            name: 'nombre_empleado',
            type: 'name',
            description: 'Digite el nombre del empleado',
            help: 'nombre'
        },
        {
            name: 'genero_empleado',
            type: 'clausula',
            description: 'Seleccione el genero del empleado',
            value: 'm',
            help: 'genero',
            options: [
                {
                    name: 'Masculino',
                    value: 'm'
                },
                {
                    name: 'Femenino',
                    value: 'f'
                }
            ],
        },
        {
            name: 'bonificacion',
            type: 'currency',
            description: 'Digite el valor de la bonificación',
            help: 'valor'
        },
        {
            name: 'fecha',
            type: 'date',
            description: 'Seleccione la fecha de firma',
            help: 'fecha'
        },
        {
            name: 'tipo_documento_empleador',
            type: 'clausula',
            value: 'cc',
            description: 'Seleccione el tipo de documento del empleador',
            help: 'tipo_documento',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
        },
        {
            name: 'cedula_empleador',
            type: 'number',
            description: 'Digite el número de cédula de ciudadanía del empleador',
            help: 'cedula',
            prereq: [
                {
                    k: 'tipo_documento_empleador',
                    v: 'cc'
                }
            ],
        },
        {
            name: 'cedulae_empleador',
            type: 'number',
            description: 'Digite el número de cédula de extranjería del empleador',
            help: 'cedula',
            prereq: [
                {
                    k: 'tipo_documento_empleador',
                    v: 'ce'
                }
            ],
        },
        {
            name: 'pasaporte_empleador',
            type: 'name',
            description: 'Digite el número de pasaporte del empleador',
            help: 'pasaporte',
            prereq: [
                {
                    k: 'tipo_documento_empleador',
                    v: 'pa'
                }
            ],
        },
        {
            name: 'tipo_documento_empleado',
            type: 'clausula',
            value: 'cc',
            description: 'Seleccione el tipo de documento del empleado',
            help: 'tipo_documento',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
        },
        {
            name: 'cedula_empleado',
            type: 'number',
            description: 'Digite el número de cédula de ciudadanía del empleado',
            help: 'cedula',
            prereq: [
                {
                    k: 'tipo_documento_empleado',
                    v: 'cc'
                }
            ],
        },
        {
            name: 'cedulae_empleado',
            type: 'number',
            description: 'Digite el número de cédula de extranjería del empleado',
            help: 'cedula',
            prereq: [
                {
                    k: 'tipo_documento_empleado',
                    v: 'ce'
                }
            ],
        },
        {
            name: 'pasaporte_empleado',
            type: 'name',
            description: 'Digite el número de pasaporte del empleado',
            help: 'pasaporte',
            prereq: [
                {
                    k: 'tipo_documento_empleado',
                    v: 'pa'
                }
            ],
        },
        {
            name: 'correo_empleador',
            type: 'email',
            description: 'Digite el correo electrónico del empleador',
            help: 'correo'
        },
        {
            name: 'correo_empleado',
            type: 'email',
            description: 'Digite el correo electrónico del empleado',
            help: 'correo'
        },
    ],
    sign: [
        'nombre_empleador',
        'genero_empleador',
        'nombre_empleado',
        'genero_empleado',
        'correo_empleador',
        'correo_empleado',
        'bonificacion',
        'fecha',
        'tipo_documento_empleador',
        'cedula_empleador',
        'cedulae_empleador',
        'pasaporte_empleador',
        'tipo_documento_empleado',
        'cedula_empleado',
        'cedulae_empleado',
        'pasaporte_empleado',
    ],
    signatureProfile: [
        {
            name: 'nombre_empleador',
            identification: 'cedula_empleador|cedulae_empleador|pasaporte_empleador',
            type: 'empleador',
            email: 'correo_empleador'
        },
        {
            name: 'nombre_empleado',
            identification: 'cedula_empleado|cedulae_empleado|pasaporte_empleado',
            type: 'empleado',
            email: 'correo_empleado'
        },
    ],
    preBuildData: [],
    name: 'BONIFICACIÓN O BENEFICIO NO CONSTITUTIVA DE SALARIO NI FACTOR  PRESTACIONAL',    
    help: [
        nombre: 'Ejemplo: Andrea Sofia Diaz Diaz',
        valor: 'Ejemplo: 1000000',
        fecha: 'Ejemplo: 12 de Noviembre del 2021',
        sexo: 'Ejemplo: Femenino',
        tipo_documento: 'Ejemplo: Cédula de Ciudadanía',
        cedula: 'Ejemplo: 1234567890',
        pasaporte: 'Ejemplo: AAA1234567',
    ],
    build: 0,
    price: 5000,
}