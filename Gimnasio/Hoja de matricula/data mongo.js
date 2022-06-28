{
    _id: ObjectId("62a8ef4251fc27d23d929169"),
    config:[
        {
            name:'periodo',
            type:'text',
            description:'Ingrese el periodo escolar'
        },
        {
            name:'fecha_matricula',
            type:'date',
            description:'Seleccione la fecha de matricula'
        },
        {
            name:'grado_matricula',
            type:'text',
            description:'Ingrese el grado al que se matricula'
        },
        {
            name:'nombre_estudiante',
            type:'name',
            description:'Ingrese el nombre del estudiante'
        },
        {
            name:'fecha_nacimiento',
            type:'date',
            description:'Seleccione la fecha de nacimiento del estudiante'
        },
        {
            name:'nacionalidad',
            type:'text',
            description:'Ingrese la nacionalidad del estudiante'
        },
        {
            name:'departamento',
            type:'text',
            description:'Ingrese el departamento del estudiante'
        },
        {
            name:'municipio',
            type:'text',
            description:'Ingrese el municipio del estudiante'
        },
        {
            name:'tipo_id_estudiante',
            type:'clausula',
            description:'Seleccione el tipo de documento de identificación del estudiante',
            options:[
                {
                    name:'Tarjeta de identidad',
                    value:'ti'
                },
                {
                    name:'Cédula de ciudadanía',
                    value:'cc'
                },
                {
                    name:'Otro',
                    value:'otro'
                }
            ],
            value:'ti'
        },
        {
            name:'cedula_estudiante',
            type:'number',
            description:'Ingrese la cédula de ciudadanía del estudiante',
            prereq:[
                {
                    k:'tipo_id_estudiante',
                    v:'cc'
                }
            ]
        },
        {
            name:'tarjeta_estudiante',
            type:'number',
            description:'Ingrese la tarjeta de identidad del estudiante',
            prereq:[
                {
                    k:'tipo_id_estudiante',
                    v:'ti'
                }
            ]
        },
        {
            name:'otro_id_estudiante',
            type:'text',
            description:'Ingrese el número de identidad del estudiante',
            prereq:[
                {
                    k:'tipo_id_estudiante',
                    v:'otro'
                }
            ]
        },
        {
            name:'dir_residencia',
            type:'text',
            description:'Ingrese la dirección de residencia'
        },
        {
            name:'tel_residencia',
            type:'text',
            description:'Ingrese el número de teléfono fijo'
        },
        {
            name:'cel_estudiante',
            type:'phone',
            description:'Ingrese el número de teléfono celular del estudiante'
        },
        {
            name:'email_estudiante',
            type:'email',
            description:'Ingrese el correo electrónico del estudiante'
        },
        {
            name:'barrio_estudiante',
            type:'text',
            description:'Ingrese el barrio de residencia'
        },
        {
            name:'colegio_anterior',
            type:'text',
            description:'Ingrese el colegio anterior del estudiante'
        },
        {
            name:'nombre_papa',
            type:'name',
            description:'Ingrese el nombre del padre'
        },
        {
            name:'responsable_pago_papa',
            type:'select',
            description:'¿Es el padre el responsable del pago?',
            options:[
                {
                    name:'Si',
                    label:'si',
                    value:'s'
                },
                {
                    name:'No',
                    label:'no',
                    value:'n'
                },
            ],
            value:'s'
        },
        {
            name:'profesion_papa',
            type:'text',
            description:'Ingrese la profesión del padre'
        },
        {
            name:'cedula_papa',
            type:'text',
            description:'Ingrese la cédula de ciudadanía del padre'
        },
        {
            name:'exp_cedula_papa',
            type:'text',
            description:'Ingrese el lugar de expedición de la cédula del padre'
        },
        {
            name:'fax_papa',
            type:'text',
            description:'Ingrese el fax del padre'
        },
        {
            name:'cel_papa',
            type:'phone',
            description:'Ingrese el teléfono celular del padre'
        },
        {
            name:'email_papa',
            type:'email',
            description:'Ingrese el correo electrónico del padre'
        },
        {
            name:'nombre_mama',
            type:'name',
            description:'Ingrese el nombre del madre'
        },
        {
            name:'responsable_pago_mama',
            type:'select',
            description:'¿Es el madre el responsable del pago?',
            options:[
                {
                    name:'Si',
                    label:'si',
                    value:'s'
                },
                {
                    name:'No',
                    label:'no',
                    value:'n'
                },
            ],
            value:'s'
        },
        {
            name:'profesion_mama',
            type:'text',
            description:'Ingrese la profesión del madre'
        },
        {
            name:'cedula_mama',
            type:'text',
            description:'Ingrese la cédula de ciudadanía del madre'
        },
        {
            name:'exp_cedula_mama',
            type:'text',
            description:'Ingrese el lugar de expedición de la cédula del madre'
        },
        {
            name:'fax_mama',
            type:'text',
            description:'Ingrese el fax del madre'
        },
        {
            name:'cel_mama',
            type:'phone',
            description:'Ingrese el teléfono celular del madre'
        },
        {
            name:'email_mama',
            type:'email',
            description:'Ingrese el correo electrónico del madre'
        },
        {
            name:'nombre_otro_contacto',
            type:'name',
            description:'Ingrese el nombre del otro contacto'
        },
        {
            name:'parentesco_otro',
            type:'text',
            description:'Ingrese el parentesco del otro contacto'
        },
        {
            name:'profesion_otro',
            type:'text',
            description:'Ingrese la profesión del otro contacto'
        },
        {
            name:'cedula_otro',
            type:'text',
            description:'Ingrese la cédula de ciudadanía del otro contacto'
        },
        {
            name:'exp_cedula_otro',
            type:'text',
            description:'Ingrese el lugar de expedición de la cédula del otro contacto'
        },
        {
            name:'fax_otro',
            type:'text',
            description:'Ingrese el fax del otro contacto'
        },
        {
            name:'cel_otro',
            type:'phone',
            description:'Ingrese el teléfono celular del otro contacto'
        },
        {
            name:'email_otro',
            type:'email',
            description:'Ingrese el correo electrónico del otro contacto'
        },
    ],
    operation:[],
    sign:[
        'nombre_estudiante',
        'cedula_estudiante',
        'tarjeta_estudiante',
        'otro_id_estudiante',
        'cel_estudiante',
        'email_estudiante',
        'nombre_papa',
        'cedula_papa',
        'cel_papa',
        'email_papa',
        'nombre_mama',
        'cedula_mama',
        'cel_mama',
        'email_mama',
    ],
    signatureProfile:[
        {
            name:'nombre_estudiante',
            identification:'cedula_estudiante|tarjeta_estudiante|otro_id_estudiante',
            phone:'cel_estudiante',
            email:'email_estudiante',
            type:'firma_estudiante'
        },
        {
            name:'nombre_papa',
            identification:'cedula_papa',
            phone:'cel_papa',
            email:'email_papa',
            type:'firma_padre'
        },
        {
            name:'nombre_mama',
            identification:'cedula_mama',
            phone:'cel_mama',
            email:'email_mama',
            type:'firma_padre'
        },
    ],
    preBuild:false,
    preBuildData:[],
    name:'HOJA DE MATRICULA',
    price:5000,
    build:0
}