{
    _id: ObjectId('6266d07851fc27d23d92912f'),
    config: [
        {
            name: "tipo_tarjeta",
            description: "Qué tipo de tarjeta se le entregó al cliente",
            type: "clausula",
            value: "cred",
            options: [
                {
                    name: "Crédito",
                    value: "cred"
                },
                {
                    name: "Débito",
                    value: "deb"
                }
            ]
        },
        {
            name: "credito",
            description: "Seleccione qué tarjeta de crédito se le entregó al cliente",
            type: "clausula",
            value: "visa",
            options: [
                {
                    name: "Visa",
                    value: "visa"
                },
                {
                    name: "Master Card",
                    value: "mc"
                }
            ],
            prereq: [
                {
                    k: "tipo_tarjeta",
                    v: "cred"
                }
            ]
        },
        {
            name: "debito",
            description: "Seleccione qué tarjeta de débito se le entregó al cliente",
            type: "clausula",
            value: "ahorro",
            options: [
                {
                    name: "Cuenta de Ahorros",
                    value: "ahorro"
                },
                {
                    name: "Cuenta Corriente",
                    value: "corriente"
                }
            ],
            prereq: [
                {
                    k: "tipo_tarjeta",
                    v: "deb"
                }
            ]
        },
        {
            name: "oficina",
            description: "Ingrese la oficina",
            type: "text"
        },
        {
            name: "entrega",
            description: "¿Se entregó el producto satisfactoriamente?",
            type: "clausula",
            value: "n",
            options: [
                {
                    name: "No",
                    value: "n"
                },
                {
                    name: "Si",
                    value: "s"
                }
            ]
        },
        {
            name: "cambio_clave",
            description: "¿Es cambio de clave?",
            type: "clausula",
            value: "n",
            options: [
                {
                    name: "No",
                    value: "n"
                },
                {
                    name: "Si",
                    value: "s"
                }
            ]
        },
        {
            name: "devolucion",
            description: "¿Es devolución?",
            type: "clausula",
            value: "n",
            options: [
                {
                    name: "No",
                    value: "n"
                },
                {
                    name: "Si",
                    value: "s"
                }
            ]
        },
        {
            name: "retiro_db",
            description: "¿Es retiro efectivo con nota db?",
            type: "clausula",
            value: "n",
            options: [
                {
                    name: "No",
                    value: "n"
                },
                {
                    name: "Si",
                    value: "s"
                }
            ]
        },
        {
            name: "reexpedicion",
            description: "¿Es reexpedición?",
            type: "clausula",
            value: "n",
            options: [
                {
                    name: "No",
                    value: "n"
                },
                {
                    name: "Si",
                    value: "s"
                }
            ]
        },
        {
            name: "carton_alo",
            description: "¿Es Carton Alo?",
            type: "clausula",
            value: "n",
            options: [
                {
                    name: "No",
                    value: "n"
                },
                {
                    name: "Si",
                    value: "s"
                }
            ]
        },
        {
            name: "entrego_anterior",
            description: "¿Entregó la tarjeta anterior?",
            type: "clausula",
            value: "n",
            options: [
                {
                    name: "No",
                    value: "n"
                },
                {
                    name: "Si",
                    value: "s"
                }
            ]
        },
        {
            name: "recibido_nip",
            description: "Recibió NIP (Clave Personal)?",
            type: "clausula",
            value: "n",
            options: [
                {
                    name: "No",
                    value: "n"
                },
                {
                    name: "Si",
                    value: "s"
                }
            ]
        },
        {
            name: "nombre_cliente",
            description: "Ingrese el nombre del cliente",
            type: "name"
        },
        {
            name: "numero_prod_1",
            description: "Ingrese el número del primer producto",
            type: "number"
        },
        {
            name: "numero_prod_2",
            description: "Ingrese el número del segundo producto",
            type: "number"
        },
        {
            name: "observaciones",
            description: "Ingrese sus observaciones",
            type: "text"
        },
        {
            name: "fecha_entrega",
            description: "Seleccione la fecha de entrega",
            type: "date"
        },
        {
            name: "fecha_habilitacion",
            description: "Seleccione la fecha de habilitacion del producto",
            type: "date"
        },
        {
            name: "cc_cliente",
            description: "Ingrese el número de cédula del cliente",
            type: "number"
        },
        {
            name: "telefono_cliente",
            description: "Ingrese el teléfono del cliente",
            type: "text"
        },
        {
            name: "correo_cliente",
            description: "Ingrese el correo del cliente",
            type: "text"
        }
    ],
    operation:[],
    preFill:[],
    signatureProfile:[
        {
            type:'firma_cliente',
            name:'nombre_cliente',
            identification:'cc_cliente',
            email:'correo_cliente'
        }
    ],
    sign:[
        'nombre_cliente',
        'cc_cliente',
        'correo_cliente'
    ],
    name:'Banco de Occidente',
    preBuildData:[],
    preBuild:false,
    price:5000,
    build:0
}