{
    _id: ObjectId('62327827ed0a939e613674d0'),
    config: [
        {
            name: 'nombre_trabajador',
            description: 'Ingrese el nombre del trabajador',
            type: 'name',
            help: 'nombre'
        },
        {
            name: 'cedula_trabajador',
            description: 'Ingrese el número de cédula del trabajador',
            type: 'number'
        },
        {
            name: 'correo_trabajador',
            description: 'Ingrese el correo del trabajador',
            type: 'text'
        },
        {
            name: 'nombre_capacitador',
            description: 'Ingrese el nombre de la persona que hizo la capacitación',
            type: 'name',
            help: 'nombre'
        },
        {
            name: 'cargo_trabajador',
            description: 'Ingrese el cargo',
            type: 'name'
        },
        {
            name: 'nombre_empresa',
            description: 'Ingrese el nombre de la empresa',
            type: 'name',
            help: 'nombre'
        },
        {
            name: 'municipio_expedicion',
            description: 'Ingrese el municipio de expedición de la cédula de ciudadania del trabajador',
            type: 'text'
        },
        {
            name: 'autoriza',
            description: '¿Autoriza el acceso a su historia clinica ocupacional?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            value: 'n',
            type: 'clausula'
        },
        {
            name: 'dotacion',
            description: '¿Desea ingresar información sobre entrega de dotación?',
            type: 'clausula',
            value: 'n',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ]
        },
        {
            name: 'nombre_entregante',
            description: 'Ingrese el nombre del entregante',
            type: 'name',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'numero_dotacion',
            description: 'Ingrese el número de la dotación',
            type: 'number',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'periodo',
            description: 'Escriba el periodo de la dotación',
            type: 'text',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'cantidad_1',
            description: 'Ingrese la cantidad del primer elemento de la dotación',
            type: 'number',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'descripcion_1',
            description: 'Ingrese la descripción del primer elemento de la dotación',
            type: 'text',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'talla_1',
            description: 'Ingrese la talla del primer elemento de la dotación',
            type: 'text',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'cantidad_2',
            description: 'Ingrese la cantidad del segundo elemento de la dotación',
            type: 'number',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'descripcion_2',
            description: 'Ingrese la descripción del segundo elemento de la dotación',
            type: 'text',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'talla_2',
            description: 'Ingrese la talla del segundo elemento de la dotación',
            type: 'text',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'cantidad_3',
            description: 'Ingrese la cantidad del tercer elemento de la dotación',
            type: 'number',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'descripcion_3',
            description: 'Ingrese la descripción del tercer elemento de la dotación',
            type: 'text',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'talla_3',
            description: 'Ingrese la talla del tercer elemento de la dotación',
            type: 'text',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_4',
            description: '¿Desea ingresar un cuarto elemento?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'cantidad_4',
            description: 'Ingrese la cantidad del cuarto elemento de la dotación',
            type: 'number',
            prereq: [
                {
                    k: 'elemento_4',
                    v: 's'
                },
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'descripcion_4',
            description: 'Ingrese la descripción del cuarto elemento de la dotación',
            type: 'text',
            prereq: [
                {
                    k: 'elemento_4',
                    v: 's'
                },
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'talla_4',
            description: 'Ingrese la talla del cuarto elemento de la dotación',
            type: 'text',
            prereq: [
                {
                    k: 'elemento_4',
                    v: 's'
                },
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_5',
            description: '¿Desea ingresar un quinto elemento?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'elemento_4',
                    v: 's'
                },
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'cantidad_5',
            description: 'Ingrese la cantidad del quinto elemento de la dotación',
            type: 'number',
            prereq: [
                {
                    k: 'elemento_4',
                    v: 's'
                },
                {
                    k: 'elemento_5',
                    v: 's'
                },
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'descripcion_5',
            description: 'Ingrese la descripción del quinto elemento de la dotación',
            type: 'text',
            prereq: [
                {
                    k: 'elemento_4',
                    v: 's'
                },
                {
                    k: 'elemento_5',
                    v: 's'
                },
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'talla_5',
            description: 'Ingrese la talla del quinto elemento de la dotación',
            type: 'text',
            prereq: [
                {
                    k: 'elemento_4',
                    v: 's'
                },
                {
                    k: 'elemento_5',
                    v: 's'
                },
                {
                    k: 'dotacion',
                    v: 's'
                }
            ]
        },
        {
            name: 'epp',
            description: '¿Desea ingresar información sobre entrega de elementos de protección personal?',
            type: 'clausula',
            value: 'n',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ]
        },
        {
            name: 'nombre_proyecto',
            description: 'Ingrese el nombre del proyecto',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'funcion',
            description: 'Ingrese la función que desarrollará el trabajador',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'fecha',
            description: 'Seleccione la fecha de entrega de los elementos de protección personal',
            type: 'date',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'entregante',
            description: 'Ingrese el nombre de la persona entregante',
            type: 'name',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_1',
            description: 'Ingrese la cantidad del primer elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_1',
            description: 'Ingrese la descripcion del primer elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_2',
            description: 'Ingrese la cantidad del segundo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_2',
            description: 'Ingrese la descripcion del segundo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_3',
            description: 'Ingrese la cantidad del tercer elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_3',
            description: 'Ingrese la descripcion del tercer elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_4',
            description: 'Ingrese la cantidad del cuarto elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_4',
            description: 'Ingrese la descripcion del cuarto elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_5',
            description: 'Ingrese la cantidad del quinto elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_5',
            description: 'Ingrese la descripcion del quinto elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_6',
            description: '¿Desea ingresar un sexto elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_6',
            description: 'Ingrese la cantidad del sexto elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_6',
            description: 'Ingrese la descripcion del sexto elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_7',
            description: '¿Desea ingresar un séptimo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_7',
            description: 'Ingrese la cantidad del séptimo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_7',
            description: 'Ingrese la descripcion del séptimo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_8',
            description: '¿Desea ingresar un octavo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_8',
            description: 'Ingrese la cantidad del octavo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_8',
            description: 'Ingrese la descripcion del octavo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_9',
            description: '¿Desea ingresar un noveno elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_9',
            description: 'Ingrese la cantidad del noveno elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_9',
            description: 'Ingrese la descripcion del noveno elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_10',
            description: '¿Desea ingresar un decimo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_10',
            description: 'Ingrese la cantidad del decimo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_10',
            description: 'Ingrese la descripcion del decimo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_11',
            description: '¿Desea ingresar un onceavo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_11',
            description: 'Ingrese la cantidad del onceavo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_11',
            description: 'Ingrese la descripcion del onceavo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_12',
            description: '¿Desea ingresar un doceavo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_12',
            description: 'Ingrese la cantidad del doceavo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_12',
            description: 'Ingrese la descripcion del doceavo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_13',
            description: '¿Desea ingresar un treceavo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_13',
            description: 'Ingrese la cantidad del treceavo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_13',
            description: 'Ingrese la descripcion del treceavo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_14',
            description: '¿Desea ingresar un catorceavo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_14',
            description: 'Ingrese la cantidad del catorceavo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_14',
            description: 'Ingrese la descripcion del catorceavo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_15',
            description: '¿Desea ingresar un quinceavo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_15',
            description: 'Ingrese la cantidad del quinceavo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_15',
            description: 'Ingrese la descripcion del quinceavo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_16',
            description: '¿Desea ingresar un dieciseisavo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_16',
            description: 'Ingrese la cantidad del dieciseisavo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_16',
            description: 'Ingrese la descripcion del dieciseisavo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_17',
            description: '¿Desea ingresar un diecisieteavo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_17',
            description: 'Ingrese la cantidad del diecisieteavo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                },
                {
                    k: 'elemento_17',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_17',
            description: 'Ingrese la descripcion del diecisieteavo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                },
                {
                    k: 'elemento_17',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_18',
            description: '¿Desea ingresar un dieciochoavo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                },
                {
                    k: 'elemento_17',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_18',
            description: 'Ingrese la cantidad del dieciochoavo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                },
                {
                    k: 'elemento_17',
                    v: 's'
                },
                {
                    k: 'elemento_18',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_18',
            description: 'Ingrese la descripcion del dieciochoavo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                },
                {
                    k: 'elemento_17',
                    v: 's'
                },
                {
                    k: 'elemento_18',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_19',
            description: '¿Desea ingresar un diecinueveavo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                },
                {
                    k: 'elemento_17',
                    v: 's'
                },
                {
                    k: 'elemento_18',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_19',
            description: 'Ingrese la cantidad del diecinueveavo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                },
                {
                    k: 'elemento_17',
                    v: 's'
                },
                {
                    k: 'elemento_18',
                    v: 's'
                },
                {
                    k: 'elemento_19',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_19',
            description: 'Ingrese la descripcion del diecinueveavo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                },
                {
                    k: 'elemento_17',
                    v: 's'
                },
                {
                    k: 'elemento_18',
                    v: 's'
                },
                {
                    k: 'elemento_19',
                    v: 's'
                }
            ]
        },
        {
            name: 'elemento_20',
            description: '¿Desea ingresar un vigesimo elemento de protección personal?',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                },
                {
                    k: 'elemento_17',
                    v: 's'
                },
                {
                    k: 'elemento_18',
                    v: 's'
                },
                {
                    k: 'elemento_19',
                    v: 's'
                }
            ]
        },
        {
            name: 'cant_20',
            description: 'Ingrese la cantidad del vigesimo elemento de protección personal',
            type: 'number',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                },
                {
                    k: 'elemento_17',
                    v: 's'
                },
                {
                    k: 'elemento_18',
                    v: 's'
                },
                {
                    k: 'elemento_19',
                    v: 's'
                },
                {
                    k: 'elemento_20',
                    v: 's'
                }
            ]
        },
        {
            name: 'desc_20',
            description: 'Ingrese la descripcion del vigesimo elemento de protección personal',
            type: 'text',
            prereq: [
                {
                    k: 'epp',
                    v: 's'
                },
                {
                    k: 'elemento_6',
                    v: 's'
                },
                {
                    k: 'elemento_7',
                    v: 's'
                },
                {
                    k: 'elemento_8',
                    v: 's'
                },
                {
                    k: 'elemento_9',
                    v: 's'
                },
                {
                    k: 'elemento_10',
                    v: 's'
                },
                {
                    k: 'elemento_11',
                    v: 's'
                },
                {
                    k: 'elemento_12',
                    v: 's'
                },
                {
                    k: 'elemento_13',
                    v: 's'
                },
                {
                    k: 'elemento_14',
                    v: 's'
                },
                {
                    k: 'elemento_15',
                    v: 's'
                },
                {
                    k: 'elemento_16',
                    v: 's'
                },
                {
                    k: 'elemento_17',
                    v: 's'
                },
                {
                    k: 'elemento_18',
                    v: 's'
                },
                {
                    k: 'elemento_19',
                    v: 's'
                },
                {
                    k: 'elemento_20',
                    v: 's'
                }
            ]
        },
        {
            name: 'fecha_firma',
            description: 'Seleccione la fecha en la que se firma el documento',
            type: 'date'
        }
    ],
    operation: [],
    preBuildData: [],
    preFill: [],
    signatureProfile: [
        {
            type: 'firma_trabajador',
            email: 'correo_trabajador',
            name: 'nombre_trabajador',
            identification: 'cedula_trabajador'
        }
    ],
    sign: [
        'nombre_trabajador',
        'cedula_trabajador',
        'correo_trabajador',
        'nombre_capacitador',
        'cargo_trabajador',
        'suscrito',
        'nombre_empresa',
        'autoriza',
        'nombre_proyecto',
        'funcion',
        'fecha',
        'entregante',
        'cant_6',
        'desc_6',
        'cant_7',
        'desc_7',
        'cant_8',
        'desc_8',
        'cant_9',
        'desc_9',
        'cant_10',
        'desc_10',
        'cant_11',
        'desc_11',
        'cant_12',
        'desc_12',
        'cant_13',
        'desc_13',
        'cant_14',
        'desc_14',
        'cant_15',
        'desc_15',
        'cant_16',
        'desc_16',
        'cant_17',
        'desc_17',
        'cant_18',
        'desc_18',
        'cant_19',
        'desc_19',
        'cant_20',
        'desc_20',
        'fecha_firma'
    ],
    preBuild: false,
    name: 'LATINCO S.A.',
    price: 5000,
    username: '950ea67c-e3ee-45fb-a01d-f39dee77f382',
    custom: {
        footer: {
            contents: '<div><p style="text-align: center; font-family: serif">{{page}}</p></div>',
            height: '5mm'
        }
    },
    build: 4
}