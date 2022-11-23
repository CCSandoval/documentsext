{
    _id: ObjectId('636a9b411197e8853195336d'),
    config: [
        {
            name: 'nombre_mandante',
            type: 'name',
            description: 'Ingrese el nombre del mandante'
        },
        {
            name: 'tipo_id_mandante',
            type: 'clausula',
            description: 'Seleccione el tipo de identificación del mandante',
            value: 'cc',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'NIT',
                    value: 'nit'
                },
            ]
        },
        {
            name: 'cc_mandante',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía del mandante',
            prereq: [
                {
                    k: 'tipo_id_mandante',
                    v: 'cc'
                }
            ]
        },
        {
            name: 'nit_mandante',
            type: 'number',
            description: 'Ingrese el número de NIT del mandante',
            prereq: [
                {
                    k: 'tipo_id_mandante',
                    v: 'nit'
                }
            ]
        },
        {
            name: 'direccion_mandante',
            type: 'text',
            description: 'Ingrese la dirección del mandante'
        },
        {
            name: "ingresar_representante",
            type: "clausula",
            description: "¿Desea ingresar un representante legal?",
            value: "no",
            options: [
                {
                    name: "Si",
                    value: "si"
                },
                {
                    name: "No",
                    value: "no"
                }
            ]
        },
        {
            name: "representante_nombre",
            type: "name",
            description: 'Ingrese el nombre del representante legal del mandante',
            prereq: [
                {
                    k: "ingresar_representante",
                    v: "si"
                }
            ]
        },
        {
            name: "cedula_representante",
            type: "number",
            description: 'Ingrese el número de cédula de ciudadanía del representante legal del mandante',
            prereq: [
                {
                    k: "ingresar_representante",
                    v: "si"
                },
            ],
        },
        {
            name: 'fecha_firma',
            type: 'date',
            description: 'Ingrese la fecha de firma del contrato'
        },
        {
            name: 'atencion_mandante',
            type: 'text',
            description: 'Ingrese la atención de la persona a quien se le debe atender'
        },
        {
            name: 'telefono_mandante',
            type: 'phone',
            description: 'Ingrese el número de teléfono del mandante'
        },
        {
            name: 'correo_mandante',
            type: 'email',
            description: 'Ingrese el correo electrónico del mandante'
        },
        {
            name: 'correo_mandatario',
            type: 'email',
            description: 'Ingrese el correo electrónico del mandatario'
        },
        {
            name: 'id_proyecto',
            type: 'text',
            description: 'Ingrese el ID del proyecto'
        },
        {
            name: 'valoracion_proyecto',
            type: 'text',
            description: 'Ingrese la valoración del proyecto'
        },
        {
            name: 'valor_proyecto',
            type: 'currency',
            description: 'Ingrese el valor del proyecto'
        },
        {
            name: 'porcentaje_fiducia',
            type: 'text',
            description: 'Ingrese el porcentaje de la fiduciaría'
        },
        {
            name: 'rentabilidad_estimada',
            type: 'text',
            description: 'Ingrese la rentabilidad estimada'
        }
    ],
    sign: [
        'nombre_mandante',
        'tipo_id_mandante',
        'cc_mandante',
        'nit_mandante',
        'direccion_mandante',
        'representante_nombre',
        'cedula_representante',
        'fecha_firma',
        'atencion_mandante',
        'telefono_mandante',
        'correo_mandante',
        'correo_mandatario',
        'id_proyecto',
        'valoracion_proyecto',
        'valor_proyecto',
        'porcentaje_fiducia',
        'rentabilidad_estimada'
    ],
    preFill: [
        {
            name: 'nombre_mandatario',
            value: 'Camilo Olarte Chaparro'
        },
        {
            name: 'cedula_mandatario',
            value: '1.036.781.840'
        },
    ],
    signatureProfile: [
        {
            email: 'correo_mandante',
            name: 'nombre_mandante',
            identification: 'cc_mandante',
            phone: 'telefono_mandante',
            type: 'firma_mandante'
        },
        {
            email: 'correo_mandatario',
            name: 'nombre_mandatario',
            identification: 'cedula_mandatario',
            type: 'firma_mandatario',
        }
    ],
    name: 'CONTRATO DE VINCULACIÓN A LA PLATAFORMA Y COMPRAVENTA DE LIVING SHARES - V3',
    build: 1,
    price: 5000,
    preBuildData: [],
    preBuild: false,
}