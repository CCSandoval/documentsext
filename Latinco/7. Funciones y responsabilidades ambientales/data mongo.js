{
    _id: ObjectId('62092346ed0a939e61367494'),
    config: [
        {
            name: 'nombre_empresa',
            description: 'Ingrese el nombre de la empresa',
            type: 'name'
        },
        {
            name: 'nombre_trabajador',
            description: 'Ingrese el nombre del trabajador',
            type: 'name'
        },
        {
            name: 'cedula_trabajador',
            description: 'Ingrese el número de cédula del trabajador',
            type: 'number'
        },
        {
            name: 'cargo_trabajador',
            description: 'Ingrese el cargo del trabajador',
            type: 'text'
        },
        {
            name: 'fecha_firma',
            description: 'Seleccione la fecha en la que se firma el documento',
            type: 'date'
        },
        {
            name: 'correo_trabajador',
            description: 'Ingrese el correo del trabajador',
            type: 'text'
        }
    ],
    preFill: [],
    sign: [
        'nombre_empresa',
        'nombre_trabajador',
        'cedula_trabajador',
        'cargo_trabajador',
        'correo_trabajador'
    ],
    signatureProfile: [
        {
            type: 'firma',
            email: 'correo_trabajador',
            name: 'nombre_trabajador',
            identification: 'cedula_trabajador'
        }
    ],
    custom:{
        header:{
            contents: '<table><tr><td rowspan="2"><p><b>FUNCIONES Y RESPONSABILIDADES AMBIENTALES</b></p></td><td><p>CÓDIGO: DA-S-37-9</p></td></tr><tr><td><p>VERSIÓN: 01</p></td></tr><tr><td><p>AMBIENTE Y ENTORNO</p></td><td><p>VIGENCIA: 16-JUL-2018</p></td></tr></table>',
            height: '10mm'
        },
        footer:{
            contents: '<div><p style="text-align: center; font-family: serif">{{page}}</p></div>',
            height: '5mm'
        }
    },
    operation: [],
    name: 'FUNCIONES Y RESPONSABILIDADES AMBIENTALES',
    preBuildData: [],
    preBuild: false,
    price: 0,
    build: 1
}