{
    _id: ObjectId('62e84fdc51fc27d23d9291a3'),
    config: [
        {
            name: 'ciudad',
            description: 'Ingrese la ciudad en la que se entrega el documento',
            type: 'text'
        },
        {
            name: 'fecha',
            description: 'Seleccione la fecha en la que se entrega el documento',
            type: 'date'
        },
        {
            name: 'nombres_presentante',
            description: 'Ingrese los nombres y apellidos de quien presenta la lista',
            type: 'name'
        },
        {
            name: 'cc_presentante',
            description: 'Ingrese el número de cédula de quien presenta la lista',
            type: 'number'
        },
        {
            name: 'renglon_modificado_1',
            description: 'Ingrese el primer renglón a modificar',
            type: 'number'
        },
        {
            name: 'info_principal_1',
            description: 'Ingrese la información del primer candidato principal',
            type: 'name'
        },
        {
            name: 'info_suplente_1',
            description: 'Ingrese la información del primer candidato suplente',
            type: 'name'
        },
        {
            name: 'renglon_modificado_2',
            description: 'Ingrese el segundo renglón a modificar',
            type: 'number'
        },
        {
            name: 'info_principal_2',
            description: 'Ingrese la información del segundo candidato principal',
            type: 'name'
        },
        {
            name: 'info_suplente_2',
            description: 'Ingrese la información del segundo candidato suplente',
            type: 'name'
        },
        {
            name: 'renglon_modificado_3',
            description: 'Ingrese el tercer renglón a modificar',
            type: 'number'
        },
        {
            name: 'info_principal_3',
            description: 'Ingrese la información del tercer candidato principal',
            type: 'name'
        },
        {
            name: 'info_suplente_3',
            description: 'Ingrese la información del tercer candidato suplente',
            type: 'name'
        },
        {
            name: 'info_4',
            description: '¿Desea ingresar un cuarto renglón?',
            type: 'clausula',
            value: 's',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ]
        },
        {
            name: 'renglon_modificado_4',
            description: 'Ingrese el cuarto renglón a modificar',
            type: 'number',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_principal_4',
            description: 'Ingrese la información del cuarto candidato principal',
            type: 'name',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_suplente_4',
            description: 'Ingrese la información del cuarto candidato suplente',
            type: 'name',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_5',
            description: '¿Desea ingresar un quinto renglón?',
            type: 'clausula',
            value: 's',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'renglon_modificado_5',
            description: 'Ingrese el quinto renglón a modificar',
            type: 'number',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_principal_5',
            description: 'Ingrese la información del quinto candidato principal',
            type: 'name',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_suplente_5',
            description: 'Ingrese la información del quinto candidato suplente',
            type: 'name',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_6',
            description: '¿Desea ingresar un sexto renglón?',
            type: 'clausula',
            value: 's',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'renglon_modificado_6',
            description: 'Ingrese el sexto renglón a modificar',
            type: 'number',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                },
                {
                    k: 'info_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_principal_6',
            description: 'Ingrese la información del sexto candidato principal',
            type: 'name',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                },
                {
                    k: 'info_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_suplente_6',
            description: 'Ingrese la información del sexto candidato suplente',
            type: 'name',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                },
                {
                    k: 'info_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_7',
            description: '¿Desea ingresar un séptimo renglón?',
            type: 'clausula',
            value: 's',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                },
                {
                    k: 'info_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'renglon_modificado_7',
            description: 'Ingrese el septimo renglón a modificar',
            type: 'number',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                },
                {
                    k: 'info_6',
                    v: 's'
                },
                {
                    k: 'info_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_principal_7',
            description: 'Ingrese la información del séptimo candidato principal',
            type: 'name',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                },
                {
                    k: 'info_6',
                    v: 's'
                },
                {
                    k: 'info_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_suplente_7',
            description: 'Ingrese la información del séptimo candidato suplente',
            type: 'name',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                },
                {
                    k: 'info_6',
                    v: 's'
                },
                {
                    k: 'info_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_8',
            description: '¿Desea ingresar un octavo renglón?',
            type: 'clausula',
            value: 's',
            options: [
                {
                    name: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                },
                {
                    k: 'info_6',
                    v: 's'
                },
                {
                    k: 'info_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'renglon_modificado_8',
            description: 'Ingrese el octavo renglón a modificar',
            type: 'number',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                },
                {
                    k: 'info_6',
                    v: 's'
                },
                {
                    k: 'info_7',
                    v: 's'
                },
                {
                    k: 'info_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_principal_8',
            description: 'Ingrese la información del octavo candidato principal',
            type: 'name',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                },
                {
                    k: 'info_6',
                    v: 's'
                },
                {
                    k: 'info_7',
                    v: 's'
                },
                {
                    k: 'info_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_suplente_8',
            description: 'Ingrese la información del octavo candidato suplente',
            type: 'name',
            prereq: [
                {
                    k: 'info_4',
                    v: 's'
                },
                {
                    k: 'info_5',
                    v: 's'
                },
                {
                    k: 'info_6',
                    v: 's'
                },
                {
                    k: 'info_7',
                    v: 's'
                },
                {
                    k: 'info_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_presentante',
            description: 'Ingrese el correo electrónico de quien presenta la lista',
            type: 'email'
        },
        {
            name: 'cell_presentante',
            description: 'Ingrese el número de teléfono de contacto de quien presenta la lista',
            type: 'phone'
        },
        {
            name: 'package_name',
            description: 'Ingrese el nombre que tendrá el paquete de anexos',
            type: 'text'
        }
    ],
    operation: [],
    name: 'Solicitud de inscripción de lista Junta Directiva',
    preFill: [],
    sign: [
        'info_principal_1',
        'info_suplente_1',
        'info_principal_4',
        'info_suplente_4',
        'info_principal_5',
        'info_suplente_5',
        'info_principal_6',
        'info_suplente_6',
        'info_principal_7',
        'info_suplente_7',
        'info_principal_8',
        'info_suplente_8',
        'nombres_presentante',
        'cc_presentante',
        'correo_presentante',
        'cell_presentante'
    ],
    signatureProfile: [
        {
            name: 'nombres_presentante',
            identification: 'cc_presentante',
            email: 'correo_presentante',
            phone: 'cell_presentante',
            type: 'firma_presentante',
            'package': true,
        }
    ],
    files: [
        {
            name: 'Constancia de Aceptación Principal 1',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Suplente 1',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Principal 2',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Suplente 2',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Principal 3',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Suplente 3',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Principal 4',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Suplente 4',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Principal 5',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Suplente 5',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Principal 6',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Suplente 6',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Principal 7',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Suplente 7',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Principal 8',
            approve: 'pending',
            required:false
        },
        {
            name: 'Constancia de Aceptación Suplente 8',
            approve: 'pending',
            required:false
        }
    ],
    price: 5000,
    build: 0
}

