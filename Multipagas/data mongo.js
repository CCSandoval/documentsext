{
    _id: ObjectId('627d7a1e51fc27d23d92914b'),
    config: [
        {
            name:'departamento',
            description:'Ingrese el departamento',
            type:'text'
        },
        {
            name:'ciudad',
            description:'Ingrese la ciudad',
            type:'text'
        },
        {
            name:'nombre_punto',
            description:'Ingrese el nombre del punto',
            type:'text'
        },
        {
            name:'codigo',
            description:'Ingrese el código',
            type:'text'
        },
        {
            name:'nit',
            description:'¿Desea ingresar el nit?',
            type:'clausula',
            value:'n',
            options:[
                {
                    name:'No',
                    value:'n'
                },
                {
                    name:'Si',
                    value:'s'
                }
            ]
        },
        {
            name:'nit_text',
            description:'Ingrese el nit',
            type:'text',
            prereq:[
                {
                    k:'nit',
                    v:'s'
                }
            ]
        },
        {
            name:'arquetipo',
            description:'Ingrese el arquetipo',
            type:'text'
        },
        {
            name:'correo_continuar',
            description:'Ingrese el correo del prospecto',
            type:'text'
        },
        {
            name:'nombres',
            description:'Ingrese los nombres y apellidos del prospecto',
            type:'name'
        },
        {
            name:'cel_contacto',
            description:'Ingrese el celular de contacto del prospecto',
            type:'text'
        },
        {
            name:'otro_cel',
            description:'¿Desea ingresar otro celular de contacto?',
            type:'clausula',
            value:'n',
            options:[
                {
                    name:'No',
                    value:'n'
                },
                {
                    name:'Si',
                    value:'s'
                }
            ]
        },
        {
            name:'otro_cel_text',
            description:'Ingrese el otro celular de contacto del prospecto',
            type:'text',
            prereq:[
                {
                    k:'otro_cel',
                    v:'s'
                }
            ]
        },
        {
            name:'email',
            description:'Ingrese el email del prospecto',
            type:'text'
        },
        {
            name:'nombre_establecimiento',
            description:'Ingrese el nombre del establecimiento',
            type:'text'
        },
        {
            name:'cedula_prospecto',
            description:'Ingrese la cedula de ciudadanía del prospecto',
            type:'number'
        },
        {
            name:'horario_servicio',
            description:'Ingrese el horario de servicio',
            type:'text'
        },
        {
            name:'direccion',
            description:'Ingrese la dirección',
            type:'text'
        }
    ],
    operation:[],
    signatureProfile:[
        {
            name:'nombres',
            identification:'cedula_prospecto',
            email:'email',
            type:'firma_prospecto'
        }
    ],
    sign:[
        'departamento',
        'ciudad',
        'nit_text',
        'nombres',
        'cel_contacto',
        'email',
        'cedula_prospecto',
        'horario_servicio',
        'direccion',
    ],
    preBuild:true,
    preBuildData: [
        'nombre_punto',
        'codigo',
        'arquetipo',
        'correo_continuar',
    ],
    name:'FORMULARIO DE REGISTRO MULTIPAGAS',
    build:0,
    price:5000,
    username:'0f03fff6-2122-4373-bd12-69fa58592bc7'
}