{
    _id: ObjectId('62cf0a3951fc27d23d929191'),
    config: [
        {
            name: 'bimestre_declarado',
            description: 'Seleccione el bimestre declarado',
            type: 'clausula',
            options: [
                {
                    name: 'Enero - Febrero',
                    value: 'ene-feb'
                },
                {
                    name: 'Marzo - Abril',
                    value: 'mar-abr'
                },
                {
                    name: 'Mayo - Junio',
                    value: 'may-jun'
                },
                {
                    name: 'Julio - Agosto',
                    value: 'jul-agos'
                },
                {
                    name: 'Septiembre - Octubre',
                    value: 'sept-oct'
                },
                {
                    name: 'Noviembre - Diciembre',
                    value: 'nov-dic'
                }
            ],
            value: 'ene-feb'
        },
        {
            name: 'dec_inic',
            description: '¿Es declaración inicial?',
            type: 'clausula',
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
            value: 'n'
        },
        {
            name: 'emplazamiento',
            description: 'Seleccione si se hace antes o después de emplazamiento',
            type: 'clausula',
            options: [
                {
                    name: 'Antes',
                    value: 'antes'
                },
                {
                    name: 'Después',
                    value: 'despues'
                }
            ],
            value: 'antes',
            prereq: [
                {
                    k: 'dec_inic',
                    v: 's'
                }
            ]
        },
        {
            name: 'año',
            description: 'Ingrese el año',
            type: 'text',
            prereq: [
                {
                    k: 'dec_inic',
                    v: 's'
                }
            ]
        },
        {
            name: 'correccion',
            description: '¿Es corrección a otra declaración?',
            type: 'clausula',
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
            prereq: [
                {
                    k: 'dec_inic',
                    v: 'n'
                }
            ]
        },
        {
            name: 'codigo',
            description: 'Ingrese el codigo de la declaración a corregir',
            type: 'text',
            prereq: [
                {
                    k: 'correccion',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombres_razon',
            type: 'name',
            description: 'Ingrese los Nombres y Apellidos o la Razón Social'
        },
        {
            name: 'tipo_id',
            description: 'Seleccione el tipo de documento de identidad',
            type: 'clausula',
            options: [
                {
                    name: 'Cédula de ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Tarjeta de identidad',
                    value: 'ti'
                },
                {
                    name: 'NIT',
                    value: 'nit'
                }
            ],
            value: 'cc'
        },
        {
            name: 'numero_cc',
            type: 'number',
            description: 'Ingrese el número de cédula de ciudadanía',
            prereq: [
                {
                    k: 'tipo_id',
                    v: 'cc'
                }
            ]
        },
        {
            name: 'numero_ti',
            type: 'number',
            description: 'Ingrese el número de tarjeta de identidad',
            prereq: [
                {
                    k: 'tipo_id',
                    v: 'ti'
                }
            ]
        },
        {
            name: 'numero_nit',
            type: 'text',
            description: 'Ingrese el NIT',
            prereq: [
                {
                    k: 'tipo_id',
                    v: 'nit'
                }
            ]
        },
        {
            name: 'telefono',
            type: 'phone',
            description: 'Ingrese el número de teléfono'
        },
        {
            name: 'email',
            type: 'email',
            description: 'Ingrese el correo electrónico'
        },
        {
            name: 'dir_retenedor',
            type: 'text',
            description: 'Ingrese la dirección del retenedor'
        },
        {
            name: 'tipo_actividad_1',
            type: 'clausula',
            description: '¿Retención o Autorretención?',
            value: 'rete',
            options: [
                {
                    name: 'Retención',
                    value: 'rete'
                },
                {
                    name: 'Autorretención',
                    value: 'auto'
                }
            ]
        },
        {
            name: 'auto_actividad_1',
            type: 'clausula',
            description: 'Seleccione la primer actividad',
            options: [
                {
                    name: '0520 - Extracción de carbón lignito.',
                    value: '7'
                },
                {
                    name: '0910 - Actividades de apoyo para la extracción de petróleo y de gas natural.',
                    value: '10'
                },
                {
                    name: '1011 - Procesamiento y conservación de carne y productos cárnicos.',
                    value: '6'
                },
                {
                    name: '1311 - Preparación e hilatura de fibras textiles.',
                    value: '3'
                },
                {
                    name: '1312 - Tejeduría de productos textiles.',
                    value: '5'
                },
                {
                    name: '4520 - Mantenimiento y reparación de vehículos automotores.',
                    value: '8'
                }
            ],
            value: '7',
            refer: [
                'valor_act_1_auto',
                'valor_autorretenciones'
            ],
            prereq: [
                {
                    k: 'tipo_actividad_1',
                    v: 'auto'
                }
            ]
        },
        {
            name: 'rete_actividad_1',
            type: 'clausula',
            description: 'Seleccione la primer actividad',
            options: [
                {
                    name: '0520 - Extracción de carbón lignito.',
                    value: '7'
                },
                {
                    name: '0910 - Actividades de apoyo para la extracción de petróleo y de gas natural.',
                    value: '10'
                },
                {
                    name: '1011 - Procesamiento y conservación de carne y productos cárnicos.',
                    value: '6'
                },
                {
                    name: '1311 - Preparación e hilatura de fibras textiles.',
                    value: '3'
                },
                {
                    name: '1312 - Tejeduría de productos textiles.',
                    value: '5'
                },
                {
                    name: '4520 - Mantenimiento y reparación de vehículos automotores.',
                    value: '8'
                }
            ],
            value: '7',
            refer: [
                'valor_act_1_rete',
                'valor_retenciones'
            ],
            prereq: [
                {
                    k: 'tipo_actividad_1',
                    v: 'rete'
                }
            ]
        },
        {
            name: 'rete_base_act_1',
            type: 'number',
            description: 'Ingrese el valor base de la primer actividad',
            refer: [
                'valor_act_1_rete',
                'base_retenciones'
            ],
            prereq: [
                {
                    k: 'tipo_actividad_1',
                    v: 'rete'
                }
            ]
        },
        {
            name: 'auto_base_act_1',
            type: 'number',
            description: 'Ingrese el valor base de la primer actividad',
            refer: [
                'valor_act_1_auto',
                'base_autorretenciones'
            ],
            prereq: [
                {
                    k: 'tipo_actividad_1',
                    v: 'auto'
                }
            ]
        },
        {
            name: 'segunda_actividad',
            type: 'clausula',
            description: '¿Desea ingresar una segunda actividad?',
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
            name: 'tipo_actividad_2',
            type: 'clausula',
            description: '¿Retención o Autorretención?',
            value: 'rete',
            options: [
                {
                    name: 'Retención',
                    value: 'rete'
                },
                {
                    name: 'Autorretención',
                    value: 'auto'
                }
            ],
            prereq: [
                {
                    k: 'segunda_actividad',
                    v: 's'
                }
            ]
        },
        {
            name: 'rete_actividad_2',
            type: 'clausula',
            description: 'Seleccione la primer actividad',
            options: [
                {
                    name: '0520 - Extracción de carbón lignito.',
                    value: '7'
                },
                {
                    name: '0910 - Actividades de apoyo para la extracción de petróleo y de gas natural.',
                    value: '10'
                },
                {
                    name: '1011 - Procesamiento y conservación de carne y productos cárnicos.',
                    value: '6'
                },
                {
                    name: '1311 - Preparación e hilatura de fibras textiles.',
                    value: '3'
                },
                {
                    name: '1312 - Tejeduría de productos textiles.',
                    value: '5'
                },
                {
                    name: '4520 - Mantenimiento y reparación de vehículos automotores.',
                    value: '8'
                }
            ],
            value: '7',
            refer: [
                'valor_act_2_rete',
                'valor_retenciones'
            ],
            prereq: [
                {
                    k: 'segunda_actividad',
                    v: 's'
                },
                {
                    k: 'tipo_actividad_2',
                    v: 'rete'
                }
            ]
        },
        {
            name: 'auto_actividad_2',
            type: 'clausula',
            description: 'Seleccione la primer actividad',
            options: [
                {
                    name: '0520 - Extracción de carbón lignito.',
                    value: '7'
                },
                {
                    name: '0910 - Actividades de apoyo para la extracción de petróleo y de gas natural.',
                    value: '10'
                },
                {
                    name: '1011 - Procesamiento y conservación de carne y productos cárnicos.',
                    value: '6'
                },
                {
                    name: '1311 - Preparación e hilatura de fibras textiles.',
                    value: '3'
                },
                {
                    name: '1312 - Tejeduría de productos textiles.',
                    value: '5'
                },
                {
                    name: '4520 - Mantenimiento y reparación de vehículos automotores.',
                    value: '8'
                }
            ],
            value: '7',
            refer: [
                'valor_act_2',
                'valor_autorretenciones'
            ],
            prereq: [
                {
                    k: 'segunda_actividad',
                    v: 's'
                },
                {
                    k: 'tipo_actividad_2',
                    v: 'auto'
                }
            ]
        },
        {
            name: 'rete_base_act_2',
            type: 'number',
            description: 'Ingrese el valor base de la primer actividad',
            refer: [
                'valor_act_2_rete',
                'base_retenciones'
            ],
            prereq: [
                {
                    k: 'segunda_actividad',
                    v: 's'
                },
                {
                    k: 'tipo_actividad_2',
                    v: 'rete'
                }
            ]
        },
        {
            name: 'auto_base_act_2',
            type: 'number',
            description: 'Ingrese el valor base de la primer actividad',
            refer: [
                'valor_act_2_auto',
                'base_autorretenciones'
            ],
            prereq: [
                {
                    k: 'segunda_actividad',
                    v: 's'
                },
                {
                    k: 'tipo_actividad_2',
                    v: 'auto'
                }
            ]
        },
        {
            name: 'tiene_avisos',
            type: 'clausula',
            description: '¿TIENE AVISOS?',
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
            value: 'n'
        },
        {
            name: 'fecha_presentacion',
            type: 'date',
            description: 'Seleccione la fecha de presentación'
        }
    ],
    operation: [
        {
            name: 'valor_act_1_rete',
            product: [
                {
                    name: 'rete_base_act_1',
                    fromOperation: false
                },
                {
                    name: 'rete_actividad_1',
                    fromOperation: false
                }
            ],
            scalar: 0.001,
            type: 'prod',
            refer: [
                'valor_retenciones'
            ]
        },
        {
            name: 'valor_act_1_auto',
            product: [
                {
                    name: 'auto_base_act_1',
                    fromOperation: false
                },
                {
                    name: 'auto_actividad_1',
                    fromOperation: false
                }
            ],
            scalar: 0.001,
            type: 'prod',
            refer: [
                'valor_autorretenciones'
            ]
        },
        {
            name: 'valor_act_2_rete',
            product: [
                {
                    name: 'rete_base_act_2',
                    fromOperation: false
                },
                {
                    name: 'rete_actividad_2',
                    fromOperation: false
                }
            ],
            scalar: 0.001,
            type: 'prod',
            refer: [
                'valor_retenciones'
            ]
        },
        {
            name: 'valor_act_2_auto',
            product: [
                {
                    name: 'auto_base_act_2',
                    fromOperation: false
                },
                {
                    name: 'auto_actividad_2',
                    fromOperation: false
                }
            ],
            scalar: 0.001,
            type: 'prod',
            refer: [
                'valor_autorretenciones'
            ]
        },
        {
            name: 'base_retenciones',
            adding: [
                {
                    name: 'rete_base_act_1',
                    fromOperation: false
                },
                {
                    name: 'rete_base_act_2',
                    fromOperation: false
                }
            ],
            type: 'sum'
        },
        {
            name: 'base_autorretenciones',
            adding: [
                {
                    name: 'auto_base_act_1',
                    fromOperation: false
                },
                {
                    name: 'auto_base_act_2',
                    fromOperation: false
                }
            ],
            type: 'sum'
        },
        {
            name: 'valor_retenciones',
            adding: [
                {
                    name: 'valor_act_1_rete',
                    fromOperation: true
                },
                {
                    name: 'valor_act_2_rete',
                    fromOperation: true
                }
            ],
            type: 'sum',
            refer: [
                'total_auto_rete_sin_avisos',
                'total_auto_rete_con_avisos'
            ]
        },
        {
            name: 'valor_autorretenciones',
            adding: [
                {
                    name: 'valor_act_1_auto',
                    fromOperation: true
                },
                {
                    name: 'valor_act_2_auto',
                    fromOperation: true
                }
            ],
            type: 'sum',
            refer: [
                'valor_avisos',
                'avisos_at',
                'sobretasa_sin_avisos',
                'total_auto_rete_sin_avisos',
                'total_auto_rete_con_avisos'
            ]
        },
        {
            name: 'valor_avisos',
            product: [
                {
                    name: 'valor_autorretenciones',
                    fromOperation: true
                }
            ],
            type: 'prod',
            scalar: 0.15,
            refer: [
                'avisos_at',
                'total_auto_rete_con_avisos'
            ]
        },
        {
            name: 'avisos_at',
            adding: [
                {
                    name: 'valor_autorretenciones',
                    fromOperation: true
                },
                {
                    name: 'valor_avisos',
                    fromOperation: true
                }
            ],
            type: 'sum',
            refer: [
                'sobretasa_con_avisos'
            ]
        },
        {
            name: 'sobretasa_sin_avisos',
            product: [
                {
                    name: 'valor_autorretenciones',
                    fromOperation: true
                }
            ],
            type: 'prod',
            scalar: 0.03,
            refer: [
                'total_auto_rete_sin_avisos'
            ]
        },
        {
            name: 'sobretasa_con_avisos',
            product: [
                {
                    name: 'avisos_at',
                    fromOperation: true
                }
            ],
            type: 'prod',
            scalar: 0.03,
            refer: [
                'total_auto_rete_con_avisos'
            ]
        },
        {
            name: 'total_auto_rete_sin_avisos',
            adding: [
                {
                    name: 'valor_retenciones',
                    fromOperation: true
                },
                {
                    name: 'valor_autorretenciones',
                    fromOperation: true
                },
                {
                    name: 'sobretasa_sin_avisos',
                    fromOperation: true
                }
            ],
            type: 'sum'
        },
        {
            name: 'total_auto_rete_con_avisos',
            adding: [
                {
                    name: 'valor_retenciones',
                    fromOperation: true
                },
                {
                    name: 'valor_autorretenciones',
                    fromOperation: true
                },
                {
                    name: 'valor_avisos',
                    fromOperation: true
                },
                {
                    name: 'sobretasa_con_avisos',
                    fromOperation: true
                }
            ],
            type: 'sum'
        }
    ],
    name: 'ALCALDIA DE BELLO',
    sign: [],
    signatureProfile: [
        {
            name: 'nombres_razon',
            identification: 'numero_cc|numero_nit|numero_ti',
            email: 'email',
            type: 'firma_rep'
        }
    ],
    build: 18,
    price: 5000,
    preFill: [],
    preBuild: false,
    preBuildData: []
}