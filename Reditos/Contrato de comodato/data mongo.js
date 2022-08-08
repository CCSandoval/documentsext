{
    _id: ObjectId('62f036b651fc27d23d9291af'),
    config: [
        {
            name: 'num_contrato',
            type: 'number',
            description: 'Ingrese el número del contrato'
        },
        {
            name: 'nombre_rep_legal',
            type: 'name',
            description: 'Ingrese el nombre del representante legal de RÉDITOS EMPRESARIALES S.A.'
        },
        {
            name: 'cc_rep_legal',
            type: 'number',
            description: 'Ingrese el número de cédula del representante legal de RÉDITOS EMPRESARIALES S.A.'
        },
        {
            name: 'nombre_comercializador',
            type: 'name',
            description: 'Ingrese el nombre del comodatario'
        },
        {
            name: 'cc_comercializador',
            type: 'number',
            description: 'Ingrese el número de cédula del comodatario'
        },
        {
            name: 'marca_maquina',
            type: 'name',
            description: 'Ingrese la marca de la maquina de apuestas'
        },
        {
            name: 'num_maquina',
            type: 'number',
            description: 'Ingrese el número de la maquina de apuestas'
        },
        {
            name: 'otros_prestamos',
            type: 'text',
            description: 'Ingrese los otros préstamos/comodatos que se hicieron'
        },
        {
            name: 'dir_comodatario',
            type: 'text',
            description: 'Ingrese la dirección del comodatario'
        },
        {
            name: 'ciudad_firma',
            type: 'name',
            description: 'Ingrese la ciudad dónde se firma el documento'
        },
        {
            name: 'fecha_firma',
            type: 'date',
            description: 'Seleccione la fecha en la que se firma el documento'
        },
        {
            name: 'correo_rep_legal',
            type: 'email',
            description: 'Ingrese el correo electrónico del representante legal de RÉDITOS EMPRESARIALES S.A.'
        },
        {
            name: 'tel_rep_legal',
            type: 'phone',
            description: 'Ingrese el número de teléfono del representante legal de RÉDITOS EMPRESARIALES S.A.'
        },
        {
            name: 'correo_comercializador',
            type: 'email',
            description: 'Ingrese el correo electrónico del comodatario'
        },
        {
            name: 'tel_comercializador',
            type: 'phone',
            description: 'Ingrese el número de teléfono del comodatario'
        }
    ],
    operation: [],
    name: 'CONTRATO DE COMODATO',
    price: 5000,
    build: 0,
    sign: [
        'nombre_comercializador',
        'tel_comercializador',
        'correo_comercializador',
        'cc_comercializador',
        'nombre_rep_legal',
        'tel_rep_legal',
        'correo_rep_legal',
        'cc_rep_legal'
    ],
    signatureProfile: [
        {
            name: 'nombre_comercializador',
            phone: 'tel_comercializador',
            email: 'correo_comercializador',
            identification: 'cc_comercializador',
            type: 'firma_comercializador'
        },
        {
            name: 'nombre_rep_legal',
            phone: 'tel_rep_legal',
            email: 'correo_rep_legal',
            identification: 'cc_rep_legal',
            type: 'firma_rep_legal'
        }
    ],
    preBuild: false,
    preBuildData: []
}


let lista = [2,4,3,1]

let resultado = [],

