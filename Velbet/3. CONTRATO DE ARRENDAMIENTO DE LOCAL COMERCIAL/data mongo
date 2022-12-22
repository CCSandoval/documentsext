{
    _id: ObjectId('6328dfa41197e8853195331d'),
    config: [
        {
            description: 'La parte arrendataria es',
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
                    text: 'Digite el nombre completo del representante legal de la empresa arrendataria'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona arrendataria'
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
                    text: 'El sexo del representante legal de la empresa arrendataria es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la parte arrendataria es:'
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
                    text: 'Seleccione el tipo de documento del representante legal de la empresa arrendataria'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona arrendataria'
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
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la empresa arrendataria, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte arrendataria, sin comas, puntos, ni guiones'
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
                    text: 'Digite el número de cédula de extranjería del representante legal de la empresa arrendataria, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte arrendataria, sin comas, puntos, ni guiones'
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
                    text: 'Digite el número del pasaporte del representante legal de la empresa arrendataria, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte arrendataria, sin comas, puntos, ni guiones'
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
            description: 'Digite el nombre de la empresa que recibe el local comercial en arrendamiento',
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
            description: 'Digite el NIT de la empresa que recibe el local comercial en arrendamiento, sin dígito de verificación',
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
            description: 'Digite el nombre del municipio donde está domiciliada la empresa que recibe el local comercial en arrendamiento',
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
            description: 'Digite la dirección completa del local comercial que se está dando en arrendamiento',
            name: 'direccion_inmueble_1',
            type: 'text'
        },
        {
            description: 'Digite el nombre del municipio donde está ubicado el local comercial que se da en arrendamiento',
            name: 'ciudad_inmueble_1',
            type: 'text'
        },
        {
            description: '¿Desea pactar un segundo local comercial en arrendamiento?',
            name: 'tot_local_2',
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
            description: 'Digite la dirección completa del segundo local comercial que se está dando en arrendamiento',
            name: 'direccion_inmueble_2',
            prereq: [
                {
                    k: 'tot_local_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre del municipio donde está ubicado el segundo local comercial que se da en arrendamiento',
            name: 'ciudad_inmueble_2',
            prereq: [
                {
                    k: 'tot_local_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea pactar un tercer local comercial en arrendamiento?',
            name: 'tot_local_3',
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
                    k: 'tot_local_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite la dirección completa del tercer local comercial que se está dando en arrendamiento',
            name: 'direccion_inmueble_3',
            prereq: [
                {
                    k: 'tot_local_2',
                    v: 's'
                },
                {
                    k: 'tot_local_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre del municipio donde está ubicado el tercer local comercial que se da en arrendamiento',
            name: 'ciudad_inmueble_3',
            prereq: [
                {
                    k: 'tot_local_2',
                    v: 's'
                },
                {
                    k: 'tot_local_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tot_local_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el valor del arrendamiento en números del local comercial a arrendar'
                },
                {
                    prereq: [
                        {
                            k: 'tot_local_2',
                            v: 's'
                        }
                    ],
                    text: 'Digite el valor del arrendamiento en números del primer local comercial a arrendar'
                }
            ],
            name: 'precio_inmueble_1',
            type: 'currency'
        },
        {
            description: 'Digite el valor del arrendamiento en números del segundo local comercial a arrendar',
            name: 'precio_inmueble_2',
            prereq: [
                {
                    k: 'tot_local_2',
                    v: 's'
                }
            ],
            type: 'currency'
        },
        {
            description: 'Digite el valor del arrendamiento en números del tercer local comercial a arrendar',
            name: 'precio_inmueble_3',
            prereq: [
                {
                    k: 'tot_local_2',
                    v: 's'
                },
                {
                    k: 'tot_local_3',
                    v: 's'
                }
            ],
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
            description: 'Seleccione como quiere realizar el aumento del precio del arrendamiento',
            help: 'ipc',
            name: 'valor_incremento',
            options: [
                {
                    name: 'Valor fijo',
                    value: 'f'
                },
                {
                    name: 'Con base en el IPC',
                    value: 'i'
                }
            ],
            type: 'clausula',
            value: 'f'
        },
        {
            description: 'Digite el porcentaje en que se incrementa el precio del arriendo',
            name: 'incremento_fijo',
            prereq: [
                {
                    k: 'valor_incremento',
                    v: 'f'
                }
            ],
            type: 'number'
        },
        {
            description: '¿Quiere realizar un aumento del precio del arrendamiento por encima del IPC?',
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
            prereq: [
                {
                    k: 'valor_incremento',
                    v: 'i'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite el porcentaje adicional al IPC en que se incrementa el precio del arriendo',
            help: 'ipc',
            name: 'puntos_reajuste_precio',
            prereq: [
                {
                    k: 'aumento_reajuste_precio',
                    v: 's'
                },
                {
                    k: 'valor_incremento',
                    v: 'i'
                }
            ],
            type: 'number'
        },
        {
            description: 'Describa detalladamente las actividades que la parte arrendataria podrá realizar en el local comercial',
            help: 'uso',
            name: 'uso_inmueble',
            type: 'text'
        },
        {
            description: '¿Cuál es el término de duración del contrato? Digitelo en número de meses',
            name: 'duracion_contrato',
            type: 'number'
        },
        {
            description: 'seleccione la fecha de inicio del contrato',
            name: 'fecha_inicio_contrato',
            type: 'date'
        },
        {
            description: 'seleccione la fecha de terminación del contrato',
            name: 'fecha_terminacion_contrato',
            type: 'date'
        },
        {
            description: '¿Con cuántos días de anticipación se debe avisar a la otra parte la intención de no renovar el contrato para que este no se renueve de forma automática?',
            name: 'dias_renovacion_auto',
            type: 'number'
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
                    value: 's'
                },
                {
                    name: 'No',
                    value: 'n'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: '¿Con cuáles usos conexos cuenta el inmueble que se da en arrendamiento?',
            help: 'usos_conexos',
            name: 'usos_conexos_servicios',
            prereq: [
                {
                    k: 'usos_conexos',
                    v: 's'
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
            description: '¿Quién deberá pagar dichos servicios?',
            help: 'arrendador_arrendatario',
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
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'ar'
        },
        {
            description: '¿Desea agregar otras prohíbiciones a la persona que recibe el local comercial en arrendamiento?',
            name: 'otras_prohibiciones',
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
            description: 'Digite otras prohibiciones a la persona que recibe el local comercial en arrendamiento',
            name: 'prohibiciones_extras',
            prereq: [
                {
                    k: 'otras_prohibiciones',
                    v: 's'
                }
            ],
            type: 'text'
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
            description: 'El arrendatario constituirá un codeudor o fiador y',
            help: 'arrendatario_codeudor',
            name: 'garantias_clausula',
            options: [
                {
                    name: 'Pagará depósito en efectivo',
                    value: 'cd'
                },
                {
                    name: 'No pagará depósito',
                    value: 'sd'
                }
            ],
            prereq: [
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'sd'
        },
        {
            description: 'Digite el valor adicional al pago del primer mes, que dejará en depósito la persona que recibe el local comercial en arrendamiento',
            name: 'valor_deposito',
            prereq: [
                {
                    k: 'garantias_clausula',
                    v: 'cd'
                },
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'currency'
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
            description: 'La cláusula penal es aplicable a',
            help: 'arrendador_arrendatario',
            name: 'penal_clausula',
            options: [
                {
                    name: 'La parte arrendataria',
                    value: 'a'
                },
                {
                    name: 'Ambas partes',
                    value: 't'
                }
            ],
            prereq: [
                {
                    k: 'clausulas_penal',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'a'
        },
        {
            description: 'La cláusula penal por incuplimiento se pagará',
            help: 'canon',
            name: 'clausula_penal',
            options: [
                {
                    name: 'un valor fijo',
                    value: 'f'
                },
                {
                    name: 'Número de canones mensuales',
                    value: 'c'
                }
            ],
            prereq: [
                {
                    k: 'clausulas_penal',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'f'
        },
        {
            description: '¿cuál es el valor de la multa de incumplimiento?',
            name: 'multa_incumplimiento_f',
            prereq: [
                {
                    k: 'clausula_penal',
                    v: 'f'
                },
                {
                    k: 'clausulas_penal',
                    v: 's'
                }
            ],
            type: 'currency'
        },
        {
            description: 'Seleccione el valor de la multa de incumplimiento en canones mensuales',
            name: 'multa_incumplimiento_c',
            options: [
                {
                    label: '0.5 (CERO PUNTO CINCO) cánones mensuales de arrendamiento,',
                    name: '0.5',
                    value: '05'
                },
                {
                    label: '1.0 (UN) cánon mensuales de arrendamiento,',
                    name: '1.0',
                    value: '10'
                },
                {
                    label: '1.5 (UNO PUNTO CINCO) cánones mensuales de arrendamiento,',
                    name: '1.5',
                    value: '15'
                },
                {
                    label: '2.0 (DOS) cánones mensuales de arrendamiento,',
                    name: '2.0',
                    value: '20'
                },
                {
                    label: '2.5 (DOS PUNTO CINCO) cánones mensuales de arrendamiento,',
                    name: '2.5',
                    value: '25'
                },
                {
                    label: '3.0 (TRES) cánones mensuales de arrendamiento,',
                    name: '3.0',
                    value: '30'
                },
                {
                    label: '3.5 (TRES PUNTO CINCO) cánones mensuales de arrendamiento,',
                    name: '3.5',
                    value: '35'
                },
                {
                    label: '4.0 (CUATRO) cánones mensuales de arrendamiento,',
                    name: '4.0',
                    value: '40'
                }
            ],
            prereq: [
                {
                    k: 'clausula_penal',
                    v: 'c'
                },
                {
                    k: 'clausulas_penal',
                    v: 's'
                }
            ],
            type: 'select',
            value: '05'
        },
        {
            description: '¿Se quiere renunciar a la prima comercial?',
            name: 'prima_comercial',
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
            description: 'Digite la ciudad de firma',
            name: 'ciudad_firma',
            type: 'text'
        },
        {
            description: 'Seleccione la fecha de firma',
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
                    text: 'Digite la dirección completa donde se notificará a la empresa que recibe el local comercial en arrendamiento, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_arrendatario',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la parte arrendataria se notificará, indicando la ciudad'
                }
            ],
            help: 'arrendatario',
            name: 'direccion_arrendatario',
            type: 'text'
        },
        {
            description: 'Digite el teléfono de la parte arrendataria',
            help: 'arrendatario',
            name: 'telefono_arrendatario',
            type: 'phone'
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
            description: 'Digite el número de teléfono de la parte coarrendataria o fiadora',
            name: 'telefono_respaldo',
            prereq: [
                {
                    k: 'uso_respaldo',
                    v: 's'
                }
            ],
            type: 'phone'
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
            description: 'Digite el número de documento de la parte codeudor, sin comas, puntos, ni guiones',
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
            description: 'Digite el número de documento de la parte codeudor, sin comas, puntos, ni guiones',
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
            type: 'phone'
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
            type: 'email'
        }
    ],
    help: {
        arrendador: 'Arrendador: Quien proporciona el local comercial en arrendamiento.',
        arrendador_arrendatario: 'La parte arrendadora: Quien proporciona el local comercial en arrendamiento.\nLa parte arrendataria: Quien recibe el local comercial en arrendamiento.',
        arrendatario: 'Arrendatario: Quien recibe el local comercial en arrendamiento.',
        arrendatario_codeudor: 'Arrendatario: Quien recibe el local comercial en arrendamiento. \nCodeudor o coarrendatario: aquella persona que garantiza el cumplimiento de la obligación siendo solidario con el deudor principal, sin tener la posibilidad que se le cobre al otro deudor antes, o que se divida la obligación entre él y otro deudor, de manera que se le podrá cobrar a cualquiera de los deudores.',
        canon: 'Canon: Valor a pagar mensualmente por el inmueble arrendado.',
        fiador_codeudor: 'El fiador es un garante de las obligaciones del arrendatario (deudor), pero con algunas diferencias respecto al codeudor: 1. Beneficio de excusión: el fiador puede exigir que se le cobre primero al deudor, y que para ello primero se embarguen y secuestren bienes del deudor, y solo en caso de que este no tenga bienes o estos sean insuficientes para pagar las obligaciones, se le podrá hacer el cobro al fiador. 2. Beneficio de división: es un derecho del fiador, de solicitar que, toda vez que la obligación no es solidaria, se divida entre él y el deudor principal. 3. Solidaridad: el fiador NO ES solidario; el codeudor SÍ LO ES, y por ello, el fiador goza de los dos anteriores derechos. 4. Renovación: cuando se es codeudor, y el contrato se renueva automáticamente al final del término de vigencia, se renueva automáticamente también la obligación del codeudor, pero cuando se es fiador, no se renueva.',
        ipc: 'IPC: El Indice de Precios al Consumidor es un indice que mide porcentualmente la variación de los precios de los bienes y servicios durante un año determinado, porcentaje que es certificado anualmente por el DANE. \nDado que en el año 2019 el aumento del IPC fue de 3.18%, este porcentaje servira de base para el incremento de los canones de arrendamiento, siendo posible en el caso de los contratos de arrendamiento de local comercial, que el incremento sea superior al mismo IPC.',
        uso: 'Ejemplo: Actividades de panadería, comercio al detal de productos de belleza, comercialización de piezas para automotores.',
        usos_conexos: 'Usos conexos: Son aquellos servicios públicos no esenciales, como internet, telefonía y televisión.'
    },
    name: 'CONTRATO DE ARRENDAMIENTO DE LOCAL COMERCIAL',
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
    company: ObjectId('62fc063367cfc581d0086c40')
}