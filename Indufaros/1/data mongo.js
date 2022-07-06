{
    _id:ObjectId("62bcb9b451fc27d23d929175"),
    config:[
        {
            name:"nombre",
            description:'Ingrese el nombre',
            type:'name'
        },
        {
            name:"email",
            description:'Ingrese el correo',
            type:'email'
        },
        {
            name:"cel",
            description:'Ingrese el número de teléfono',
            type:'phone'
        },
        {
            name:"cedula",
            description:'Ingrese el número de cédula',
            type:'number'
        },
        {
            name:'asesor',
            description:'Ingrese el nombre del asesor',
            type:'name'
        },
    ],
    operation:[],
    preBuildData:[],
    preBuild:false,
    name:'AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS PERSONALES',
    price:5000,
    sign:[
        "nombre",
        "email",
        "cel",
        "cedula",
    ],
    signatureProfile:[
        {
            name:"nombre",
            email:"email",
            phone:"cel",
            identification:"cedula",
            type:'firma'
        }
    ],
    build:0,
    username:'0f03fff6-2122-4373-bd12-69fa58592bc7'
}