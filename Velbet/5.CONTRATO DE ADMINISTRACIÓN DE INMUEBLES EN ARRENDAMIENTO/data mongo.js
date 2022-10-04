{
    _id: ObjectId('633b35f01197e8853195333d'),
    config: [
        {
            name: 'nombre_consignante',
            type: 'name',
            description: 'Digite el nombre del consignante',
            help: 'nombre'
        },
        {
            name: 'cedula_consignante',
            type: 'clausula',
            value: 'cc',
            description: 'Seleccione el tipo de documento del consignante',
            help: 'tipo de documento',
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
            ]
        },
        {
            name: 'direccion_consignante',
            type: 'text',
            description: 'Digite la dirección del consignante',
            help: 'direccion'
        },
        {
            name: 'telefono_consignante',
            type: 'phone',
            description: 'Digite el teléfono del consignante',
            help: 'telefono'
        },
        {
            name: 'clase_inmueble',
            type: 'text',
            description: 'Digite la clase del inmueble',
            help: 'clase'
        },
        {
            name: 'direccion_inmueble',
            type: 'text',
            description: 'Digite la dirección del inmueble',
            help: 'direccion'
        },
        {
            name: 'estrato_inmueble',
            type: 'number',
            description: 'Digite el estrato del inmueble',
            help: 'estrato'
        },
        {
            name: 'matricula_inmobiliaria',
            type: 'text',
            description: 'Digite la matrícula inmobiliaria del inmueble',
            help: 'matricula'
        },
        {
            name: 'ficha_catastral',
            type: 'text',
            description: 'Digite la ficha catastral del inmueble',
            help: 'ficha'
        },
        {
            name: 'avaluo_inmueble',
            type: 'currency',
            description: 'Digite el avalúo del inmueble',
            help: 'avaluo'
        },
        {
            name: 'precio_arriendo',
            type: 'currency',
            description: 'Digite el precio de arriendo del inmueble',
            help: 'precio'
        },
        {
            name: 'nombre_propietario',
            type: 'name',
            description: 'Digite el nombre del propietario',
            help: 'nombre'
        },
        {
            name: 'cedula_propietario',
            type: 'clausula',
            value: 'cc',
            description: 'Seleccione el tipo de documento del propietario',
            help: 'tipo de documento',
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
            ]
        },
        {
            name: 'ciudad_propietario',
            type: 'text',
            description: 'Digite la ciudad del propietario',
            help: 'ciudad'
        },
        {
            name: 'telefono_inmueble',
            type: 'text',
            description: 'Digite el telefono del inmueble',
            help: 'direccion'
        },
        {
            name: 'acueducto',
            type: 'clausula',
            value: 's',
            description: 'Seleccione si el inmueble cuenta con acueducto',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                },
            ]
        },
        {
            name: 'energia',
            type: 'clausula',
            value: 's',
            description: 'Seleccione si el inmueble cuenta con energia',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                },
            ]
        },
        {
            name: 'gas',
            type: 'clausula',
            value: 's',
            description: 'Seleccione si el inmueble cuenta con gas',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                },
            ]
        },
        {
            name: 'linea',
            type: 'clausula',
            value: 's',
            description: 'Seleccione si el inmueble cuenta con línea',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                },
            ]
        },
        {
            name: 'tv',
            type: 'clausula',
            value: 's',
            description: 'Seleccione si el inmueble cuenta con tv',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                },
            ]
        },
        {
            name: 'administracion',
            type: 'clausula',
            value: 's',
            description: 'Seleccione si el inmueble cuenta con administración',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                },
            ]
        },
        {
            name: 'otros',
            type: 'text',
            description: 'Digite si el inmueble cuenta con otros servicios'
        },
        {
            name: 'fecha_termino',
            type: 'date',
            description: 'Digite la fecha de termino del contrato'
        },
        {
            name: 'numero_cuenta',
            type: 'number',
            description: 'Digite el numero de cuenta'
        },
        {
            name: 'nombre_banco',
            type: 'text',
            description: 'Digite el nombre del banco'
        },
        {
            name: 'porcentaje',
            type: 'text',
            description: 'Digite el porcentaje de valor póliza o fianza'
        },
        {
            name: 'porcentaje_num',
            type: 'number',
            description: 'Digite el porcentaje de valor póliza o fianza en numero'
        },
        {
            name: 'direccion_notificacion',
            type: 'text',
            description: 'Digite la direccion de notificacion'
        },
        {
            name: 'ciudad_firma',
            type: 'text',
            description: 'Digite la ciudad de firma'
        },
        {
            name: 'fecha_firma',
            type: 'date',
            description: 'Digite la fecha de firma'
        },
        {
            name: 'nombre_administrador',
            type: 'name',
            description: 'Digite el nombre del administrador'
        },
        {
            name: 'correo_administrador',
            type: 'email',
            description: 'Digite el correo del administrador'
        },
        {
            name: 'correo_propietario',
            type: 'email',
            description: 'Digite el correo del propietario'
        }
    ],
    price: '5000',
    prebuildData: [],
    name: 'CONTRATO DE ADMINISTRACIÓN DE INMUEBLES EN ARRENDAMIENTO',
    build: 0,
    sign: [
        'nombre_consignante',
        'cedula_consignante',
        'ciudad_consignante',
        'direccion_consignante',
        'telefono_consignante',
        'nombre_inmueble',
        'direccion_inmueble',
        'estrato_inmueble',
        'matricula_inmobiliaria',
        'ficha_catastral',
        'avaluo_inmueble',
        'precio_arriendo',
        'nombre_propietario',
        'cedula_propietario',
        'ciudad_propietario',
        'telefono_inmueble',
        'acueducto',
        'energia',
        'gas',
        'linea',
        'tv',
        'administracion',
        'otros',
        'fecha_termino',
        'numero_cuenta',
        'nombre_banco',
        'porcentaje',
        'porcentaje_num',
        'direccion_notificacion',
        'ciudad_firma',
        'fecha_firma',
        'nombre_administrador',
        'correo_administrador',
        'correo_propietario'
    ],
    signatureProfile: [
        {
            name: 'nombre_administrador',
            type: 'administrador',
            email: 'correo_administrador'
        },
        {
            name: 'nombre_propietario',
            identification: 'cedula_propietario|cedulae_propietario|pasaporte_propietario',
            type: 'propietario',
            email: 'correo_propietario'
        }
    ]
}