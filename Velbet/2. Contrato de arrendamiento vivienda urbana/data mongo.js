{
    _id: ObjectId('6328ce361197e8853195331b'),
    config: [
        {
            description: 'El arrendatario es',
            help: 'arrendatario',
            name: 'tipo_arrendatario',
            options: [
                {
                    name: 'Persona Natural',
                    value: 'n'
                },
                {
                    name: 'Persona Jurídica',
                    value: 'j'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la empresa que recibe el inmueble en arrendamiento'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona que recibe el inmueble en arrendamiento'
                }
            ],
            help: 'arrendatario',
            name: 'nombre_arrendatario',
            type: 'name'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la empresa que recibe el inmueble en arrendamiento es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la parte que recibe el inmueble en arrendamiento es:'
                }
            ],
            help: 'arrendatario',
            name: 'genero_arrendatario',
            options: [
                {
                    name: 'Femenino',
                    value: 'm'
                },
                {
                    name: 'Masculino',
                    value: 'h'
                }
            ],
            type: 'clausula',
            value: 'm'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la empresa que recibe el inmueble en arrendamiento'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona que recibe el inmueble en arrendamiento'
                }
            ],
            help: 'arrendatario',
            name: 'tipo_documento_arrendatario',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            type: 'clausula',
            value: 'cc'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la empresa que recibe el inmueble en arrendamiento, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte que recibe el inmueble en arrendamiento, sin comas, puntos, ni guiones'
                }
            ],
            help: 'arrendatario',
            name: 'cedula_arrendatario',
            prereq: [
                {
                    k: 'tipo_documento_arrendatario',
                    v: 'cc'
                }
            ],
            type: 'number'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la empresa que recibe el inmueble en arrendamiento, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte que recibe el inmueble en arrendamiento, sin comas, puntos, ni guiones'
                }
            ],
            help: 'arrendatario',
            name: 'cedulae_arrendatario',
            prereq: [
                {
                    k: 'tipo_documento_arrendatario',
                    v: 'ce'
                }
            ],
            type: 'number'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la empresa que recibe el inmueble en arrendamiento, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte que recibe el inmueble en arrendamiento, sin comas, puntos, ni guiones'
                }
            ],
            help: 'arrendatario',
            name: 'pasaporte_arrendatario',
            prereq: [
                {
                    k: 'tipo_documento_arrendatario',
                    v: 'pa'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre del municipio de domicilio del arrendatario',
            help: 'arrendatario',
            name: 'ciudad_arrendatario',
            prereq: [
                {
                    k: 'tipo_arrendatario',
                    v: 'n'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la empresa que recibe el inmueble en arrendaminto',
            help: 'arrendatario',
            name: 'nombre_empresa_arrendatario',
            prereq: [
                {
                    k: 'tipo_arrendatario',
                    v: 'j'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el NIT de la empresa que recibe el inmueble en arrendamiento, sin dígito de verificación',
            help: 'arrendatario',
            name: 'identificacion_empresa_arrendatario',
            prereq: [
                {
                    k: 'tipo_arrendatario',
                    v: 'j'
                }
            ],
            type: 'number'
        },
        {
            description: 'Digite el nombre del municipio donde está domiciliada la empresa que recibe el inmueble en arrendamiento',
            help: 'arrendatario',
            name: 'ciudad_empresa_arrendatario',
            prereq: [
                {
                    k: 'tipo_arrendatario',
                    v: 'j'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la dirección completa del inmueble que se está dando en arrendamiento',
            name: 'direccion_inmueble',
            type: 'text'
        },
        {
            description: 'Digite el nombre del municipio donde está ubicado el inmueble que se da en arrendamiento',
            name: 'ciudad_inmueble',
            type: 'text'
        },
        {
            description: 'Digite el valor del arrendamiento en números',
            name: 'precio_inmueble',
            type: 'currency'
        },
        {
            description: 'El pago se hará de manera:',
            name: 'periodicidad_pago',
            options: [
                {
                    name: 'Anticipada',
                    value: 'a'
                },
                {
                    name: 'Mes vencido',
                    value: 'v'
                }
            ],
            type: 'clausula',
            value: 'a'
        },
        {
            description: 'Ingrese la forma de pago del arrendamiento:',
            name: 'metodo_pago',
            type: 'text'
        },
        {
            description: 'Los intereses por la mora en el pago del arrendamiento se cobraran según:',
            name: 'interes_mora',
            options: [
                {
                    name: 'Lo establecido por la Superintendencia Financiera de Colombia',
                    value: 's'
                },
                {
                    name: 'Un valor definido por las partes',
                    value: 'c'
                }
            ],
            type: 'clausula',
            value: 's'
        },
        {
            description: 'Seleccione el porcentaje de los intereses en mora',
            name: 'intereses_pago',
            options: [
                {
                    label: '0.5% (CERO PUNTO CINCO PORCIENTO)',
                    name: '0.5%',
                    value: '05'
                },
                {
                    label: '1.0% (UNO PORCIENTO)',
                    name: '1.0%',
                    value: '10'
                },
                {
                    label: '1.5% (UNO PUNTO CINCO PORCIENTO)',
                    name: '1.5%',
                    value: '15'
                },
                {
                    label: '2.0% (DOS PORCIENTO)',
                    name: '2.0%',
                    value: '20'
                }
            ],
            prereq: [
                {
                    k: 'interes_mora',
                    v: 'c'
                }
            ],
            type: 'select',
            value: '05'
        },
        {
            description: '¿Cuál es el término de duración del contrato? Digítelo en número de meses',
            name: 'duracion_contrato',
            type: 'number'
        },
        {
            description: 'Seleccione la fecha de inicio del contrato',
            name: 'fecha_inicio_contrato',
            type: 'date'
        },
        {
            description: 'Seleccione la fecha de terminación del contrato',
            name: 'fecha_terminacion_contrato',
            type: 'date'
        },
        {
            description: '¿Con cuántos días de anticipación se debe avisar a la otra parte la intención de no renovar el contrato para que este no se renueve de forma automática?',
            name: 'preaviso',
            type: 'text'
        },
        {
            description: '¿Quiere realizar un aumento del precio del arrendamiento por debajo del IPC?',
            help: 'ipc',
            name: 'aumento_reajuste_precio',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Seleccione el porcentaje en que se incrementa el precio del arriendo',
            help: 'ipc',
            name: 'puntos_reajuste_precio',
            options: [
                {
                    label: '0.5% (CERO PUNTO CINCO PORCIENTO).',
                    name: '0.5%',
                    value: '05'
                },
                {
                    label: '1.0% (UNO PORCIENTO).',
                    name: '1.0%',
                    value: '10'
                },
                {
                    label: '1.5% (UNO PUNTO CINCO PORCIENTO).',
                    name: '1.5%',
                    value: '15'
                },
                {
                    label: '2.0% (DOS PORCIENTO).',
                    name: '2.0%',
                    value: '20'
                }
            ],
            prereq: [
                {
                    k: 'aumento_reajuste_precio',
                    v: 's'
                }
            ],
            type: 'select',
            value: '05'
        },
        {
            description: '¿Desea agregar obligaciones a la parte arrendataria?',
            help: 'arrendatario',
            name: 'arrendatario_obligaciones_1',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite la obligación de la parte arrendataria que desea agregar',
            help: 'arrendatario',
            name: 'obligaciones_arrendatario_1',
            prereq: [
                {
                    k: 'arrendatario_obligaciones_1',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una segunda obligación a la parte arrendataria?',
            help: 'arrendatario',
            name: 'arrendatario_obligaciones_2',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'arrendatario_obligaciones_1',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite la segunda obligación de la parte arrendataria que desea agregar',
            help: 'arrendatario',
            name: 'obligaciones_arrendatario_2',
            prereq: [
                {
                    k: 'arrendatario_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una tercera obligación a la parte arrendataria?',
            help: 'arrendatario',
            name: 'arrendatario_obligaciones_3',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'arrendatario_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite la tercera obligación de la parte arrendataria que desea agregar',
            help: 'arrendatario',
            name: 'obligaciones_arrendatario_3',
            prereq: [
                {
                    k: 'arrendatario_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_2',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una cuarta obligación a la parte arrendataria?',
            help: 'arrendatario',
            name: 'arrendatario_obligaciones_4',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'arrendatario_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_2',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite la cuarta obligación de la parte arrendataria que desea agregar',
            help: 'arrendatario',
            name: 'obligaciones_arrendatario_4',
            prereq: [
                {
                    k: 'arrendatario_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_2',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_3',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una quinta obligación a la parte arrendataria?',
            help: 'arrendatario',
            name: 'arrendatario_obligaciones_5',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'arrendatario_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_2',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_3',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite la quinta obligación de la parte arrendataria que desea agregar',
            help: 'arrendatario',
            name: 'obligaciones_arrendatario_5',
            prereq: [
                {
                    k: 'arrendatario_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_2',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_3',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_4',
                    v: 's'
                },
                {
                    k: 'arrendatario_obligaciones_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar obligaciones a la parte arrendadora?',
            help: 'arrendador',
            name: 'arrendador_obligaciones_1',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite la obligación de la parte arrendadora que desea agregar',
            help: 'arrendador',
            name: 'obligaciones_arrendador_1',
            prereq: [
                {
                    k: 'arrendador_obligaciones_1',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una segunda obligación a la parte arrendadora?',
            help: 'arrendador',
            name: 'arrendador_obligaciones_2',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'arrendador_obligaciones_1',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite la segunda obligación de la parte arrendadora que desea agregar',
            help: 'arrendador',
            name: 'obligaciones_arrendador_2',
            prereq: [
                {
                    k: 'arrendador_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una tercera obligación a la parte arrendadora?',
            help: 'arrendador',
            name: 'arrendador_obligaciones_3',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'arrendador_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite la tercera obligación de la parte arrendadora que desea agregar',
            help: 'arrendador',
            name: 'obligaciones_arrendador_3',
            prereq: [
                {
                    k: 'arrendador_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_2',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una cuarta obligación a la parte arrendadora?',
            help: 'arrendador',
            name: 'arrendador_obligaciones_4',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'arrendador_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_2',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite la cuarta obligación de la parte arrendadora que desea agregar',
            help: 'arrendador',
            name: 'obligaciones_arrendador_4',
            prereq: [
                {
                    k: 'arrendador_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_2',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_3',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una quinta obligación a la parte arrendadora?',
            help: 'arrendador',
            name: 'arrendador_obligaciones_5',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'arrendador_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_2',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_3',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite la quinta obligación de la parte arrendadora que desea agregar',
            help: 'arrendador',
            name: 'obligaciones_arrendador_5',
            prereq: [
                {
                    k: 'arrendador_obligaciones_1',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_2',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_3',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_4',
                    v: 's'
                },
                {
                    k: 'arrendador_obligaciones_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Con qué servicios públicos esenciales cuenta el inmueble que se da en arrendamiento?',
            name: 'servicios_publicos',
            select: [],
            type: 'check',
            values: [
                'acueducto',
                'energía eléctrica',
                'gas natural'
            ]
        },
        {
            description: '¿Quién deberá pagar dichos servicios?',
            help: 'arrendador_arrendatario',
            name: 'encargado_pago',
            options: [
                {
                    name: 'La parte arrendadora',
                    value: 'a'
                },
                {
                    name: 'La parte arrendataria',
                    value: 'ar'
                }
            ],
            type: 'clausula',
            value: 'ar'
        },
        {
            description: 'El inmueble cuenta con usos conexos',
            help: 'usos_conexos',
            name: 'usos_conexos',
            options: [
                {
                    name: 'Sí',
                    value: 'si'
                },
                {
                    name: 'No',
                    value: 'no'
                }
            ],
            type: 'clausula',
            value: 'no'
        },
        {
            description: '¿Con cuales usos conexos cuenta el inmueble que se da en arrendamiento?',
            help: 'usos_conexos',
            name: 'usos_conexos_servicios',
            prereq: [
                {
                    k: 'usos_conexos',
                    v: 'si'
                }
            ],
            select: [],
            type: 'check',
            values: [
                'televisión',
                'internet',
                'telefonía'
            ]
        },
        {
            description: '¿Quién deberá pagar dichos usos conexos?',
            name: 'encargado_pago_conexos',
            options: [
                {
                    name: 'La parte arrendadora',
                    value: 'a'
                },
                {
                    name: 'La parte arrendataria',
                    value: 'ar'
                }
            ],
            prereq: [
                {
                    k: 'usos_conexos',
                    v: 'si'
                }
            ],
            type: 'clausula',
            value: 'ar'
        },
        {
            description: '¿La parte arrendataria va a ofrecer garantías para el cumplimiento de sus obligaciones?',
            help: 'fiador_codeudor',
            name: 'uso_respaldo',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: '¿El arrendatario va a respaldar sus obligaciones con?',
            help: 'fiador_codeudor',
            name: 'respaldo',
            options: [
                {
                    name: 'Fiador',
                    value: 'f'
                },
                {
                    name: 'Codeudor o coarrendatario',
                    value: 'c'
                }
            ],
            prereq: [
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'f'
        },
        {
            description: 'El fiador o codeudor es',
            help: 'fiador_codeudor',
            name: 'tipo_respaldo',
            options: [
                {
                    name: 'Persona Natural',
                    value: 'n'
                },
                {
                    name: 'Persona Jurídica',
                    value: 'j'
                }
            ],
            prereq: [
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la empresa que actúa como codeudor o fiador es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo del codeudor o fiador es:'
                }
            ],
            help: 'fiador_codeudor',
            name: 'genero_respaldo',
            options: [
                {
                    name: 'Femenino',
                    value: 'm'
                },
                {
                    name: 'Masculino',
                    value: 'h'
                }
            ],
            prereq: [
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'm'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la empresa que actúa como codeudor o fiador'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo del codeudor o fiador'
                }
            ],
            help: 'fiador_codeudor',
            name: 'nombre_respaldo',
            prereq: [
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la empresa codeudora o fiadora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona codeudora o fiadora'
                }
            ],
            help: 'fiador_codeudor',
            name: 'tipo_documento_respaldo',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'cc'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de Ciudadanía del representante legal de la empresa que actúa como codeudor o fiador, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de Ciudadanía de la parte codeudora o fiadora, sin comas, puntos, ni guiones'
                }
            ],
            help: 'fiador_codeudor',
            name: 'cedula_respaldo',
            prereq: [
                {
                    k: 'tipo_documento_respaldo',
                    v: 'cc'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la empresa que actúa como codeudor o fiador, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte codeudora o fiadora, sin comas, puntos, ni guiones'
                }
            ],
            help: 'fiador_codeudor',
            name: 'cedulae_respaldo',
            prereq: [
                {
                    k: 'tipo_documento_respaldo',
                    v: 'ce'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la empresa que actúa como codeudor o fiador, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_respaldo',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte codeudora o fiadora, sin comas, puntos, ni guiones'
                }
            ],
            help: 'fiador_codeudor',
            name: 'pasaporte_respaldo',
            prereq: [
                {
                    k: 'tipo_documento_respaldo',
                    v: 'pa'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre del municipio de domicilio del fiador o codeudor',
            help: 'fiador_codeudor',
            name: 'ciudad_respaldo',
            prereq: [
                {
                    k: 'tipo_respaldo',
                    v: 'n'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la empresa que actúa como codeudor o fiador',
            help: 'fiador_codeudor',
            name: 'nombre_empresa_respaldo',
            prereq: [
                {
                    k: 'tipo_respaldo',
                    v: 'j'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el NIT de la empresa que actúa como codeudor o fiador, sin dígito de verificación',
            help: 'fiador_codeudor',
            name: 'identificacion_empresa_respaldo',
            prereq: [
                {
                    k: 'tipo_respaldo',
                    v: 'j'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: 'Digite el nombre del municipio donde está domiciliada la empresa que actúa como codeudor o fiador',
            help: 'fiador_codeudor',
            name: 'ciudad_empresa_respaldo',
            prereq: [
                {
                    k: 'tipo_respaldo',
                    v: 'j'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar cláusula penal?',
            name: 'clausulas_penal',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite el valor de dicha multa en números',
            name: 'multa_incumplimiento',
            prereq: [
                {
                    k: 'clausulas_penal',
                    v: 's'
                }
            ],
            type: 'currency'
        },
        {
            description: '¿Desea agregar una cláusula adicional al presente contrato?',
            name: 'clausulas_adicional_1',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite a continuación, cualquier aclaración, modificación o disposición especial acordada por las partes. Recuerde que el contenido y la eficacia de las cláusulas por ustedes redactadas, son de su exclusiva responsabilidad y no de micontrato.co',
            name: 'adicional_clausulas_1',
            prereq: [
                {
                    k: 'clausulas_adicional_1',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una segunda cláusula adicional al presente contrato?',
            name: 'clausulas_adicional_2',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'clausulas_adicional_1',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite a continuación, la segunda aclaración, modificación o disposición especial acordada por las partes. Recuerde que el contenido y la eficacia de las cláusulas por ustedes redactadas, son de su exclusiva responsabilidad y no de micontrato.co',
            name: 'adicional_clausulas_2',
            prereq: [
                {
                    k: 'clausulas_adicional_1',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una tercera cláusula adicional al presente contrato?',
            name: 'clausulas_adicional_3',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'clausulas_adicional_1',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite a continuación, la tercera aclaración, modificación o disposición especial acordada por las partes. Recuerde que el contenido y la eficacia de las cláusulas por ustedes redactadas, son de su exclusiva responsabilidad y no de micontrato.co',
            name: 'adicional_clausulas_3',
            prereq: [
                {
                    k: 'clausulas_adicional_1',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_2',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una cuarta cláusula adicional al presente contrato?',
            name: 'clausulas_adicional_4',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'clausulas_adicional_1',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_2',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite a continuación, la cuarta aclaración, modificación o disposición especial acordada por las partes. Recuerde que el contenido y la eficacia de las cláusulas por ustedes redactadas, son de su exclusiva responsabilidad y no de micontrato.co',
            name: 'adicional_clausulas_4',
            prereq: [
                {
                    k: 'clausulas_adicional_1',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_2',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_3',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una quinta cláusula adicional al presente contrato?',
            name: 'clausulas_adicional_5',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            prereq: [
                {
                    k: 'clausulas_adicional_1',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_2',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_3',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite a continuación, la quinta aclaración, modificación o disposición especial acordada por las partes. Recuerde que el contenido y la eficacia de las cláusulas por ustedes redactadas, son de su exclusiva responsabilidad y no de micontrato.co',
            name: 'adicional_clausulas_5',
            prereq: [
                {
                    k: 'clausulas_adicional_1',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_2',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_3',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_4',
                    v: 's'
                },
                {
                    k: 'clausulas_adicional_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre del municipio donde se firma el presente contrato',
            name: 'ciudad_firma',
            type: 'text'
        },
        {
            description: 'Seleccione la fecha en la cual se firma el presente contrato',
            name: 'fecha_firma',
            type: 'date'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'j'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la empresa que recibe el bien en arrendamiento, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la parte que recibe el bien en arrendamiento se notificará, indicando la ciudad'
                }
            ],
            help: 'arrendatario',
            name: 'direccion_arrendatario',
            type: 'text'
        },
        {
            description: 'Digite el número de teléfono de la pare arrendataria',
            help: 'arrendatario',
            name: 'telefono_arrendatario',
            type: 'text'
        },
        {
            description: 'Digite el correo electrónico de la parte arrendataria',
            help: 'arrendatario',
            name: 'correo_arrendatario',
            type: 'email'
        },
        {
            description: 'Digite la dirección donde la parte coarrendataria o fiadora se notificará, indicando la ciudad',
            name: 'direccion_respaldo',
            prereq: [
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número de teléfono de la pare coarrendataria o fiadora',
            name: 'telefono_respaldo',
            prereq: [
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el correo electrónico de la parte coarrendataria o fiadora',
            name: 'correo_respaldo',
            prereq: [
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: '¿Desea incluir un segundo codeudor?',
            name: 'firma_codeudor',
            options: [
                {
                    name: 'No',
                    value: 'n'
                },
                {
                    name: 'Sí',
                    value: 's'
                }
            ],
            type: 'clausula',
            value: 'n',
            prereq: [
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ]
        },
        {
            description: 'Digite el nombre del codeudor',
            name: 'nombre_codeudor',
            prereq: [
                {
                    k: 'firma_codeudor',
                    v: 's'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Seleccione el tipo de documento de la parte codeudor',
            name: 'tipo_documento_codeudor',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'firma_codeudor',
                    v: 's'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'cc'
        },
        {
            description: 'Digite el número de cédula de ciudadanía de la parte codeudor, sin comas, puntos, ni guiones',
            name: 'cedula_codeudor',
            prereq: [
                {
                    k: 'firma_codeudor',
                    v: 's'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                },
                {
                    k: 'tipo_documento_codeudor',
                    v: 'cc'
                }
            ],
            type: 'number'
        },
        {
            description: 'Digite el número de cédula de extranjería de la parte codeudor, sin comas, puntos, ni guiones',
            name: 'cedulae_codeudor',
            prereq: [
                {
                    k: 'firma_codeudor',
                    v: 's'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                },
                {
                    k: 'tipo_documento_codeudor',
                    v: 'ce'
                }
            ],
            type: 'number'
        },
        {
            description: 'Digite el número del pasaporte de la parte codeudor, sin comas, puntos, ni guiones',
            name: 'pasaporte_codeudor',
            prereq: [
                {
                    k: 'firma_codeudor',
                    v: 's'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                },
                {
                    k: 'tipo_documento_codeudor',
                    v: 'pa'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la dirección del codeudor',
            name: 'direccion_codeudor',
            prereq: [
                {
                    k: 'firma_codeudor',
                    v: 's'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el teléfono del codeudor',
            name: 'telefono_codeudor',
            prereq: [
                {
                    k: 'firma_codeudor',
                    v: 's'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el correo electrónico del codeudor',
            name: 'correo_codeudor',
            prereq: [
                {
                    k: 'firma_codeudor',
                    v: 's'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'text'
        }
    ],
    help: {
        arrendador: 'Arrendador: Quien entrega el inmueble en arrendamiento.',
        arrendador_arrendatario: 'Arrendador: Quien entrega el inmueble en arrendamiento. \nArrendatario: Quien recibe el inmueble en arrendamiento.',
        arrendatario: 'Arrendatario: Quien recibe el inmueble en arrendamiento.',
        fiador_codeudor: 'El fiador es un garante de las obligaciones del arrendatario (deudor), pero con algunas diferencias respecto al codeudor: 1. Beneficio de excusión: el fiador puede exigir que se le cobre primero al deudor, y que para ello primero se embarguen y secuestren bienes del deudor, y solo en caso de que este no tenga bienes o estos sean insuficientes para pagar las obligaciones, se le podrá hacer el cobro al fiador. 2. Beneficio de división: es un derecho del fiador, de solicitar que, toda vez que la obligación no es solidaria, se divida entre él y el deudor principal. 3. Solidaridad: el fiador NO ES solidario; el codeudor SÍ LO ES, y por ello, el fiador goza de los dos anteriores derechos. 4. Renovación: cuando se es codeudor, y el contrato se renueva automáticamente al final del término de vigencia, se renueva automáticamente también la obligación del codeudor, pero cuando se es fiador, no se renueva.',
        ipc: 'IPC: El Indice de Precios al Consumidor es un indice que mide porcentualmente la variación de los precios de los bienes y servicios durante un año determinado, porcentaje que es certificado anualmente por el DANE.',
        usos_conexos: 'Usos conexos: Son aquellos servicios públicos no esenciales, como internet, telefonía y televisión'
    },
    name: 'CONTRATO DE ARRENDAMIENTO DE INMUEBLE PARA VIVIENDA URBANA',
    price: 5000,
    sign: [
        'nombre_arrendatario',
        'cedula_arrendatario',
        'cedulae_arrendatario',
        'pasaporte_arrendatario',
        'correo_arrendatario',
        'telefono_arrendatario',
        'nombre_empresa_arrendatario',
        'identificacion_empresa_arrendatario',
        'nombre_respaldo',
        'cedula_respaldo',
        'cedulae_respaldo',
        'pasaporte_respaldo',
        'correo_respaldo',
        'telefono_respaldo',
        'nombre_empresa_respaldo',
        'identificacion_empresa_respaldo',
        'nombre_codeudor',
        'cedula_codeudor',
        'cedulae_codeudor',
        'pasaporte_codeudor',
        'correo_codeudor',
        'telefono_codeudor'
    ],
    signatureProfile: [
        {
            email: 'correo_arrendatario',
            identification: 'cedula_arrendatario|cedulae_arrendatario|pasaporte_arrendatario',
            name: 'nombre_arrendatario',
            type: 'arrendatario'
        },
        {
            email: 'correo_respaldo',
            identification: 'cedula_respaldo|cedulae_respaldo|pasaporte_respaldo',
            name: 'nombre_respaldo',
            type: 'respaldo'
        },
        {
            email: 'correo_codeudor',
            identification: 'cedula_codeudor|cedulae_codeudor|pasaporte_codeudor',
            name: 'nombre_codeudor',
            type: 'codeudor'
        }
    ],
    build: 2,
    preBuild: false
}