{
    _id: ObjectId("62b5cadf51fc27d23d929173"),
    config:[
        {
            name:'nombre_contratado',
            type:'name',
            description:'Ingrese el nombre del contratado'
        },
        {
            name:'num_cc_contratado',
            type:'number',
            description:'Ingrese el número de cédula del contratado'
        },
        {
            name:'cargo_contratado',
            type:'text',
            description:'Ingrese el cargo del contratado'
        },
        {
            name:'ciudad',
            type:'text',
            description:'Ingrese la ciudad de residencia del contratado'
        },
        {
            name:'fecha_fin_contrato',
            type:'date',
            description:'Ingrese la fecha de vencimiento del contrato'
        },
        {
            name:'email_contratado',
            type:'email',
            description:'Ingrese el correo electrónico del contratado'
        },
    ],
    operation:[],
    sign:[
        'nombre_contratado',
        'num_cc_contratado',
        'cargo_contratado',
        'ciudad',
        'fecha_fin_contrato',
        'email_contratado',
    ],
    signatureProfile:[
        {
            type:'firma_contratado',
            name:'nombre_contratado',
            identification:'num_cc_contratado',
            email:'email_contratado'
        }
    ],
    preBuild:false,
    preBuildData:[],
    name:'PREAVISO DE CONTRATO',
    price:5000,
    build:0
}