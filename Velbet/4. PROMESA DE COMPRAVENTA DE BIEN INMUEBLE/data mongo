{
    _id: ObjectId('6328e5ac1197e8853195331f'),
    config: [
        {
            description: 'El comprador es',
            help: 'comprador',
            name: 'tipo_comprador',
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
                            k: 'tipo_comprador',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la empresa que comprará el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona que comprará el bien inmueble'
                }
            ],
            help: 'comprador',
            name: 'nombre_comprador',
            type: 'name'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_comprador',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la empresa que comprará el bien inmueble es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la parte que comprará el bien inmueble es:'
                }
            ],
            help: 'comprador',
            name: 'genero_comprador',
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
                            k: 'tipo_comprador',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la empresa que comprará el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona que comprará el bien inmueble'
                }
            ],
            help: 'comprador',
            name: 'tipo_documento_comprador',
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
                            k: 'tipo_comprador',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'cedula_comprador',
            prereq: [
                {
                    k: 'tipo_documento_comprador',
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
                            k: 'tipo_comprador',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'cedulae_comprador',
            prereq: [
                {
                    k: 'tipo_documento_comprador',
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
                            k: 'tipo_comprador',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'pasaporte_comprador',
            prereq: [
                {
                    k: 'tipo_documento_comprador',
                    v: 'pa'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione el estado civil del comprador',
            help: 'comprador',
            name: 'estado_civil_comprador',
            options: [
                {
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cc'
                },
                {
                    name: 'Casado sin sociedad conyugal vigente',
                    value: 'cs'
                },
                {
                    name: 'Soltero',
                    value: 'so'
                },
                {
                    name: 'Viudo',
                    value: 'vi'
                },
                {
                    name: 'Soltero con unión marital de hecho',
                    value: 'su'
                }
            ],
            prereq: [
                {
                    k: 'tipo_comprador',
                    v: 'n'
                }
            ],
            type: 'clausula',
            value: 'so'
        },
        {
            description: 'Digite el municipio de domicilio de la parte compradora',
            help: 'comprador',
            name: 'ciudad_comprador',
            prereq: [
                {
                    k: 'tipo_comprador',
                    v: 'n'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la empresa o persona jurídica que actúa como compradora',
            help: 'comprador',
            name: 'nombre_empresa_comprador',
            prereq: [
                {
                    k: 'tipo_comprador',
                    v: 'j'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre de la ciudad donde está domiciliada la empresa compradora',
            help: 'comprador',
            name: 'ciudad_empresa_comprador',
            prereq: [
                {
                    k: 'tipo_comprador',
                    v: 'j'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el NIT de la empresa compradora, sin dígito de verificación',
            help: 'comprador',
            name: 'identificacion_empresa_comprador',
            prereq: [
                {
                    k: 'tipo_comprador',
                    v: 'j'
                }
            ],
            type: 'number'
        },
        {
            description: 'Desea agregar un segundo comprador',
            help: 'comprador',
            name: 'compradores_2',
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
            description: 'El segundo comprador es',
            help: 'comprador',
            name: 'tipo_comprador_2',
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
                    k: 'compradores_2',
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
                            k: 'tipo_comprador_2',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la segunda empresa que comprará el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la segunda persona que comprará el bien inmueble'
                }
            ],
            help: 'comprador',
            name: 'nombre_comprador_2',
            prereq: [
                {
                    k: 'compradores_2',
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
                            k: 'tipo_comprador_2',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la segunda empresa que comprará el bien inmueble es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_2',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la segunda parte que comprará el bien inmueble es:'
                }
            ],
            help: 'comprador',
            name: 'genero_comprador_2',
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
                    k: 'compradores_2',
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
                            k: 'tipo_comprador_2',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la segunda empresa que comprará el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_2',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la segunda persona que comprará el bien inmueble'
                }
            ],
            help: 'comprador',
            name: 'tipo_documento_comprador_2',
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
                    k: 'compradores_2',
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
                            k: 'tipo_comprador_2',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la segunda empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la segunda parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'cedula_comprador_2',
            prereq: [
                {
                    k: 'tipo_documento_comprador_2',
                    v: 'cc'
                },
                {
                    k: 'compradores_2',
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
                            k: 'tipo_comprador_2',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la segunda empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la segunda parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'cedulae_comprador_2',
            prereq: [
                {
                    k: 'tipo_documento_comprador_2',
                    v: 'ce'
                },
                {
                    k: 'compradores_2',
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
                            k: 'tipo_comprador_2',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la segunda empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la segunda parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'pasaporte_comprador_2',
            prereq: [
                {
                    k: 'tipo_documento_comprador_2',
                    v: 'pa'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione el estado civil del segundo comprador',
            help: 'comprador',
            name: 'estado_civil_comprador_2',
            options: [
                {
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cc'
                },
                {
                    name: 'Casado sin sociedad conyugal vigente',
                    value: 'cs'
                },
                {
                    name: 'Soltero',
                    value: 'so'
                },
                {
                    name: 'Viudo',
                    value: 'vi'
                },
                {
                    name: 'Soltero con unión marital de hecho',
                    value: 'su'
                }
            ],
            prereq: [
                {
                    k: 'tipo_comprador_2',
                    v: 'n'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'so'
        },
        {
            description: 'Digite el municipio de domicilio de la segunda parte compradora',
            help: 'comprador',
            name: 'ciudad_comprador_2',
            prereq: [
                {
                    k: 'tipo_comprador_2',
                    v: 'n'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la segunda empresa o persona jurídica que actúa como compradora',
            help: 'comprador',
            name: 'nombre_empresa_comprador_2',
            prereq: [
                {
                    k: 'tipo_comprador_2',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre de la ciudad donde está domiciliada la segunda empresa compradora',
            help: 'comprador',
            name: 'ciudad_empresa_comprador_2',
            prereq: [
                {
                    k: 'tipo_comprador_2',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el NIT de la segunda empresa compradora, sin dígito de verificación',
            help: 'comprador',
            name: 'identificacion_empresa_comprador_2',
            prereq: [
                {
                    k: 'tipo_comprador_2',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: 'Desea agregar un tercer comprador',
            help: 'comprador',
            name: 'compradores_3',
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
                    k: 'compradores_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'El tercer comprador es',
            help: 'comprador',
            name: 'tipo_comprador_3',
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
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
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
                            k: 'tipo_comprador_3',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la tercera empresa que comprará el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_3',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la tercera persona que comprará el bien inmueble'
                }
            ],
            help: 'comprador',
            name: 'nombre_comprador_3',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
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
                            k: 'tipo_comprador_3',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la tercera empresa que comprará el bien inmueble es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_3',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la tercera parte que comprará el bien inmueble es:'
                }
            ],
            help: 'comprador',
            name: 'genero_comprador_3',
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
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
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
                            k: 'tipo_comprador_3',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la tercera empresa que comprará el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_3',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la tercera persona que comprará el bien inmueble'
                }
            ],
            help: 'comprador',
            name: 'tipo_documento_comprador_3',
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
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
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
                            k: 'tipo_comprador_3',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la tercera empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_3',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la tercera parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'cedula_comprador_3',
            prereq: [
                {
                    k: 'tipo_documento_comprador_3',
                    v: 'cc'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
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
                            k: 'tipo_comprador_3',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la tercera empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_3',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la tercera parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'cedulae_comprador_3',
            prereq: [
                {
                    k: 'tipo_documento_comprador_3',
                    v: 'ce'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
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
                            k: 'tipo_comprador_3',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la tercera empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_3',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la tercera parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'pasaporte_comprador_3',
            prereq: [
                {
                    k: 'tipo_documento_comprador_3',
                    v: 'pa'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione el estado civil del tercer comprador',
            help: 'comprador',
            name: 'estado_civil_comprador_3',
            options: [
                {
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cc'
                },
                {
                    name: 'Casado sin sociedad conyugal vigente',
                    value: 'cs'
                },
                {
                    name: 'Soltero',
                    value: 'so'
                },
                {
                    name: 'Viudo',
                    value: 'vi'
                },
                {
                    name: 'Soltero con unión marital de hecho',
                    value: 'su'
                }
            ],
            prereq: [
                {
                    k: 'tipo_comprador_3',
                    v: 'n'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'so'
        },
        {
            description: 'Digite el municipio de domicilio de la tercera parte compradora',
            help: 'comprador',
            name: 'ciudad_comprador_3',
            prereq: [
                {
                    k: 'tipo_comprador_3',
                    v: 'n'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la tercera empresa o persona jurídica que actúa como compradora',
            help: 'comprador',
            name: 'nombre_empresa_comprador_3',
            prereq: [
                {
                    k: 'tipo_comprador_3',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre de la ciudad donde está domiciliada la tercera empresa compradora',
            help: 'comprador',
            name: 'ciudad_empresa_comprador_3',
            prereq: [
                {
                    k: 'tipo_comprador_3',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el NIT de la tercera empresa compradora, sin dígito de verificación',
            help: 'comprador',
            name: 'identificacion_empresa_comprador_3',
            prereq: [
                {
                    k: 'tipo_comprador_3',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: 'Desea agregar un cuarto comprador',
            help: 'comprador',
            name: 'compradores_4',
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
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'El cuarto comprador es',
            help: 'comprador',
            name: 'tipo_comprador_4',
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
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
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
                            k: 'tipo_comprador_4',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la cuarta empresa que comprará el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_4',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la cuarta persona que comprará el bien inmueble'
                }
            ],
            help: 'comprador',
            name: 'nombre_comprador_4',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
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
                            k: 'tipo_comprador_4',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la cuarta empresa que comprará el bien inmueble es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_4',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la cuarta parte que comprará el bien inmueble es:'
                }
            ],
            help: 'comprador',
            name: 'genero_comprador_4',
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
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
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
                            k: 'tipo_comprador_4',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la cuarta empresa que comprará el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_4',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la cuarta persona que comprará el bien inmueble'
                }
            ],
            help: 'comprador',
            name: 'tipo_documento_comprador_4',
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
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
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
                            k: 'tipo_comprador_4',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la cuarta empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_4',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la cuarta parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'cedula_comprador_4',
            prereq: [
                {
                    k: 'tipo_documento_comprador_4',
                    v: 'cc'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
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
                            k: 'tipo_comprador_4',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la cuarta empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_4',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la cuarta parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'cedulae_comprador_4',
            prereq: [
                {
                    k: 'tipo_documento_comprador_4',
                    v: 'ce'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
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
                            k: 'tipo_comprador_4',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la cuarta empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_4',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la cuarta parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'pasaporte_comprador_4',
            prereq: [
                {
                    k: 'tipo_documento_comprador_4',
                    v: 'pa'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione el estado civil del cuarto comprador',
            help: 'comprador',
            name: 'estado_civil_comprador_4',
            options: [
                {
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cc'
                },
                {
                    name: 'Casado sin sociedad conyugal vigente',
                    value: 'cs'
                },
                {
                    name: 'Soltero',
                    value: 'so'
                },
                {
                    name: 'Viudo',
                    value: 'vi'
                },
                {
                    name: 'Soltero con unión marital de hecho',
                    value: 'su'
                }
            ],
            prereq: [
                {
                    k: 'tipo_comprador_4',
                    v: 'n'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'so'
        },
        {
            description: 'Digite el municipio de domicilio de la cuarta parte compradora',
            help: 'comprador',
            name: 'ciudad_comprador_4',
            prereq: [
                {
                    k: 'tipo_comprador_4',
                    v: 'n'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la cuarta empresa o persona jurídica que actúa como compradora',
            help: 'comprador',
            name: 'nombre_empresa_comprador_4',
            prereq: [
                {
                    k: 'tipo_comprador_4',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre de la ciudad donde está domiciliada la cuarta empresa compradora',
            help: 'comprador',
            name: 'ciudad_empresa_comprador_4',
            prereq: [
                {
                    k: 'tipo_comprador_4',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el NIT de la cuarta empresa compradora, sin dígito de verificación',
            help: 'comprador',
            name: 'identificacion_empresa_comprador_4',
            prereq: [
                {
                    k: 'tipo_comprador_4',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: 'Desea agregar un quinto comprador',
            help: 'comprador',
            name: 'compradores_5',
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
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'El quinto comprador es',
            help: 'comprador',
            name: 'tipo_comprador_5',
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
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
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
                            k: 'tipo_comprador_5',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la quinta empresa que comprará el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_5',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la quinta persona que comprará el bien inmueble'
                }
            ],
            help: 'comprador',
            name: 'nombre_comprador_5',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
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
                            k: 'tipo_comprador_5',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la quinta empresa que comprará el bien inmueble es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_5',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la quinta parte que comprará el bien inmueble es:'
                }
            ],
            help: 'comprador',
            name: 'genero_comprador_5',
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
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
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
                            k: 'tipo_comprador_5',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la quinta empresa que comprará el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_5',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la quinta persona que comprará el bien inmueble'
                }
            ],
            help: 'comprador',
            name: 'tipo_documento_comprador_5',
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
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
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
                            k: 'tipo_comprador_5',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la quinta empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_5',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la quinta parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'cedula_comprador_5',
            prereq: [
                {
                    k: 'tipo_documento_comprador_5',
                    v: 'cc'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
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
                            k: 'tipo_comprador_5',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la quinta empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_5',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la quinta parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'cedulae_comprador_5',
            prereq: [
                {
                    k: 'tipo_documento_comprador_5',
                    v: 'ce'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
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
                            k: 'tipo_comprador_5',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la quinta empresa que comprará el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_5',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la quinta parte que comprará el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'comprador',
            name: 'pasaporte_comprador_5',
            prereq: [
                {
                    k: 'tipo_documento_comprador_5',
                    v: 'pa'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione el estado civil del quinto comprador',
            help: 'comprador',
            name: 'estado_civil_comprador_5',
            options: [
                {
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cc'
                },
                {
                    name: 'Casado sin sociedad conyugal vigente',
                    value: 'cs'
                },
                {
                    name: 'Soltero',
                    value: 'so'
                },
                {
                    name: 'Viudo',
                    value: 'vi'
                },
                {
                    name: 'Soltero con unión marital de hecho',
                    value: 'su'
                }
            ],
            prereq: [
                {
                    k: 'tipo_comprador_5',
                    v: 'n'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'so'
        },
        {
            description: 'Digite el municipio de domicilio de la quinta parte compradora',
            help: 'comprador',
            name: 'ciudad_comprador_5',
            prereq: [
                {
                    k: 'tipo_comprador_5',
                    v: 'n'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la quinta empresa o persona jurídica que actúa como compradora',
            help: 'comprador',
            name: 'nombre_empresa_comprador_5',
            prereq: [
                {
                    k: 'tipo_comprador_5',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre de la ciudad donde está domiciliada la quinta empresa compradora',
            help: 'comprador',
            name: 'ciudad_empresa_comprador_5',
            prereq: [
                {
                    k: 'tipo_comprador_5',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el NIT de la quinta empresa compradora, sin dígito de verificación',
            help: 'comprador',
            name: 'identificacion_empresa_comprador_5',
            prereq: [
                {
                    k: 'tipo_comprador_5',
                    v: 'j'
                },
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: 'El vendedor es',
            help: 'vendedor',
            name: 'tipo_vendedor',
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
                            k: 'tipo_vendedor',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la empresa que venderá el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona que venderá el bien inmueble'
                }
            ],
            help: 'vendedor',
            name: 'nombre_vendedor',
            type: 'name'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la empresa que venderá el bien inmueble es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la parte que venderá el bien inmueble es:'
                }
            ],
            help: 'vendedor',
            name: 'genero_vendedor',
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
                            k: 'tipo_vendedor',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la empresa que venderá el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona que venderá el bien inmueble'
                }
            ],
            help: 'vendedor',
            name: 'tipo_documento_vendedor',
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
                            k: 'tipo_vendedor',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'cedula_vendedor',
            prereq: [
                {
                    k: 'tipo_documento_vendedor',
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
                            k: 'tipo_vendedor',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'cedulae_vendedor',
            prereq: [
                {
                    k: 'tipo_documento_vendedor',
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
                            k: 'tipo_vendedor',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'pasaporte_vendedor',
            prereq: [
                {
                    k: 'tipo_documento_vendedor',
                    v: 'pa'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione el estado civil del vendedor',
            help: 'vendedor',
            name: 'estado_civil_vendedor',
            options: [
                {
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cc'
                },
                {
                    name: 'Casado sin sociedad conyugal vigente',
                    value: 'cs'
                },
                {
                    name: 'Soltero',
                    value: 'so'
                },
                {
                    name: 'Viudo',
                    value: 'vi'
                },
                {
                    name: 'Soltero con unión marital de hecho',
                    value: 'su'
                }
            ],
            prereq: [
                {
                    k: 'tipo_vendedor',
                    v: 'n'
                }
            ],
            type: 'clausula',
            value: 'so'
        },
        {
            description: 'Digite el municipio de domicilio de la parte vendedora',
            help: 'vendedor',
            name: 'ciudad_vendedor',
            prereq: [
                {
                    k: 'tipo_vendedor',
                    v: 'n'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la empresa o persona jurídica que actúa como vendedora',
            help: 'vendedor',
            name: 'nombre_empresa_vendedor',
            prereq: [
                {
                    k: 'tipo_vendedor',
                    v: 'j'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre de la ciudad donde está domiciliada la empresa vendedora',
            help: 'vendedor',
            name: 'ciudad_empresa_vendedor',
            prereq: [
                {
                    k: 'tipo_vendedor',
                    v: 'j'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el NIT de la empresa vendedora, sin dígito de verificación',
            help: 'vendedor',
            name: 'identificacion_empresa_vendedor',
            prereq: [
                {
                    k: 'tipo_vendedor',
                    v: 'j'
                }
            ],
            type: 'number'
        },
        {
            description: 'Desea agregar un segundo vendedor',
            help: 'vendedor',
            name: 'vendedores_2',
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
            description: 'El segundo vendedor es',
            help: 'vendedor',
            name: 'tipo_vendedor_2',
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
                    k: 'vendedores_2',
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
                            k: 'tipo_vendedor_2',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la segunda empresa que venderá el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la segunda persona que venderá el bien inmueble'
                }
            ],
            help: 'vendedor',
            name: 'nombre_vendedor_2',
            prereq: [
                {
                    k: 'vendedores_2',
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
                            k: 'tipo_vendedor_2',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la segunda empresa que venderá el bien inmueble es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_2',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la segunda parte que venderá el bien inmueble es:'
                }
            ],
            help: 'vendedor',
            name: 'genero_vendedor_2',
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
                    k: 'vendedores_2',
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
                            k: 'tipo_vendedor_2',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la segunda empresa que venderá el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_2',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la segunda persona que venderá el bien inmueble'
                }
            ],
            help: 'vendedor',
            name: 'tipo_documento_vendedor_2',
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
                    k: 'vendedores_2',
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
                            k: 'tipo_vendedor_2',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la segunda empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la segunda parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'cedula_vendedor_2',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_2',
                    v: 'cc'
                },
                {
                    k: 'vendedores_2',
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
                            k: 'tipo_vendedor_2',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la segunda empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la segunda parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'cedulae_vendedor_2',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_2',
                    v: 'ce'
                },
                {
                    k: 'vendedores_2',
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
                            k: 'tipo_vendedor_2',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la segunda empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la segunda parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'pasaporte_vendedor_2',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_2',
                    v: 'pa'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione el estado civil del segundo vendedor',
            help: 'vendedor',
            name: 'estado_civil_vendedor_2',
            options: [
                {
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cc'
                },
                {
                    name: 'Casado sin sociedad conyugal vigente',
                    value: 'cs'
                },
                {
                    name: 'Soltero',
                    value: 'so'
                },
                {
                    name: 'Viudo',
                    value: 'vi'
                },
                {
                    name: 'Soltero con unión marital de hecho',
                    value: 'su'
                }
            ],
            prereq: [
                {
                    k: 'tipo_vendedor_2',
                    v: 'n'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'so'
        },
        {
            description: 'Digite el municipio de domicilio de la segunda parte vendedora',
            help: 'vendedor',
            name: 'ciudad_vendedor_2',
            prereq: [
                {
                    k: 'tipo_vendedor_2',
                    v: 'n'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la segunda empresa o persona jurídica que actúa como vendedora',
            help: 'vendedor',
            name: 'nombre_empresa_vendedor_2',
            prereq: [
                {
                    k: 'tipo_vendedor_2',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre de la ciudad donde está domiciliada la segunda empresa vendedora',
            help: 'vendedor',
            name: 'ciudad_empresa_vendedor_2',
            prereq: [
                {
                    k: 'tipo_vendedor_2',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el NIT de la segunda empresa vendedora, sin dígito de verificación',
            help: 'vendedor',
            name: 'identificacion_empresa_vendedor_2',
            prereq: [
                {
                    k: 'tipo_vendedor_2',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: 'Desea agregar un tercer vendedor',
            help: 'vendedor',
            name: 'vendedores_3',
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
                    k: 'vendedores_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'El tercer vendedor es',
            help: 'vendedor',
            name: 'tipo_vendedor_3',
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
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
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
                            k: 'tipo_vendedor_3',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la tercera empresa que venderá el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_3',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la tercera persona que venderá el bien inmueble'
                }
            ],
            help: 'vendedor',
            name: 'nombre_vendedor_3',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
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
                            k: 'tipo_vendedor_3',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la tercera empresa que venderá el bien inmueble es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_3',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la tercera parte que venderá el bien inmueble es:'
                }
            ],
            help: 'vendedor',
            name: 'genero_vendedor_3',
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
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
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
                            k: 'tipo_vendedor_3',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la tercera empresa que venderá el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_3',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la tercera persona que venderá el bien inmueble'
                }
            ],
            help: 'vendedor',
            name: 'tipo_documento_vendedor_3',
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
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
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
                            k: 'tipo_vendedor_3',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la tercera empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_3',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la tercera parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'cedula_vendedor_3',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_3',
                    v: 'cc'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
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
                            k: 'tipo_vendedor_3',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la tercera empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_3',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la tercera parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'cedulae_vendedor_3',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_3',
                    v: 'ce'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
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
                            k: 'tipo_vendedor_3',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la tercera empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_3',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la tercera parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'pasaporte_vendedor_3',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_3',
                    v: 'pa'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione el estado civil del tercer vendedor',
            help: 'vendedor',
            name: 'estado_civil_vendedor_3',
            options: [
                {
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cc'
                },
                {
                    name: 'Casado sin sociedad conyugal vigente',
                    value: 'cs'
                },
                {
                    name: 'Soltero',
                    value: 'so'
                },
                {
                    name: 'Viudo',
                    value: 'vi'
                },
                {
                    name: 'Soltero con unión marital de hecho',
                    value: 'su'
                }
            ],
            prereq: [
                {
                    k: 'tipo_vendedor_3',
                    v: 'n'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'so'
        },
        {
            description: 'Digite el municipio de domicilio de la tercera parte vendedora',
            help: 'vendedor',
            name: 'ciudad_vendedor_3',
            prereq: [
                {
                    k: 'tipo_vendedor_3',
                    v: 'n'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la tercera empresa o persona jurídica que actúa como vendedora',
            help: 'vendedor',
            name: 'nombre_empresa_vendedor_3',
            prereq: [
                {
                    k: 'tipo_vendedor_3',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre de la ciudad donde está domiciliada la tercera empresa vendedora',
            help: 'vendedor',
            name: 'ciudad_empresa_vendedor_3',
            prereq: [
                {
                    k: 'tipo_vendedor_3',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el NIT de la tercera empresa vendedora, sin dígito de verificación',
            help: 'vendedor',
            name: 'identificacion_empresa_vendedor_3',
            prereq: [
                {
                    k: 'tipo_vendedor_3',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: 'Desea agregar un cuarto vendedor',
            help: 'vendedor',
            name: 'vendedores_4',
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
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'El cuarto vendedor es',
            help: 'vendedor',
            name: 'tipo_vendedor_4',
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
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
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
                            k: 'tipo_vendedor_4',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la cuarta empresa que venderá el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_4',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la cuarta persona que venderá el bien inmueble'
                }
            ],
            help: 'vendedor',
            name: 'nombre_vendedor_4',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
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
                            k: 'tipo_vendedor_4',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la cuarta empresa que venderá el bien inmueble es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_4',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la cuarta parte que venderá el bien inmueble es:'
                }
            ],
            help: 'vendedor',
            name: 'genero_vendedor_4',
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
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
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
                            k: 'tipo_vendedor_4',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la cuarta empresa que venderá el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_4',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la cuarta persona que venderá el bien inmueble'
                }
            ],
            help: 'vendedor',
            name: 'tipo_documento_vendedor_4',
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
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
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
                            k: 'tipo_vendedor_4',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la cuarta empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_4',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la cuarta parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'cedula_vendedor_4',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_4',
                    v: 'cc'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
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
                            k: 'tipo_vendedor_4',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la cuarta empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_4',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la cuarta parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'cedulae_vendedor_4',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_4',
                    v: 'ce'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
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
                            k: 'tipo_vendedor_4',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la cuarta empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_4',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la cuarta parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'pasaporte_vendedor_4',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_4',
                    v: 'pa'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione el estado civil del cuarto vendedor',
            help: 'vendedor',
            name: 'estado_civil_vendedor_4',
            options: [
                {
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cc'
                },
                {
                    name: 'Casado sin sociedad conyugal vigente',
                    value: 'cs'
                },
                {
                    name: 'Soltero',
                    value: 'so'
                },
                {
                    name: 'Viudo',
                    value: 'vi'
                },
                {
                    name: 'Soltero con unión marital de hecho',
                    value: 'su'
                }
            ],
            prereq: [
                {
                    k: 'tipo_vendedor_4',
                    v: 'n'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'so'
        },
        {
            description: 'Digite el municipio de domicilio de la cuarta parte vendedora',
            help: 'vendedor',
            name: 'ciudad_vendedor_4',
            prereq: [
                {
                    k: 'tipo_vendedor_4',
                    v: 'n'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la cuarta empresa o persona jurídica que actúa como vendedora',
            help: 'vendedor',
            name: 'nombre_empresa_vendedor_4',
            prereq: [
                {
                    k: 'tipo_vendedor_4',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre de la ciudad donde está domiciliada la cuarta empresa vendedora',
            help: 'vendedor',
            name: 'ciudad_empresa_vendedor_4',
            prereq: [
                {
                    k: 'tipo_vendedor_4',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el NIT de la cuarta empresa vendedora, sin dígito de verificación',
            help: 'vendedor',
            name: 'identificacion_empresa_vendedor_4',
            prereq: [
                {
                    k: 'tipo_vendedor_4',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: 'Desea agregar un quinto vendedor',
            help: 'vendedor',
            name: 'vendedores_5',
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
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'El quinto vendedor es',
            help: 'vendedor',
            name: 'tipo_vendedor_5',
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
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
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
                            k: 'tipo_vendedor_5',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el nombre completo del representante legal de la quinta empresa que venderá el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_5',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el nombre completo de la quinta persona que venderá el bien inmueble'
                }
            ],
            help: 'vendedor',
            name: 'nombre_vendedor_5',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
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
                            k: 'tipo_vendedor_5',
                            v: 'j'
                        }
                    ],
                    text: 'El sexo del representante legal de la quinta empresa que venderá el bien inmueble es:'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_5',
                            v: 'n'
                        }
                    ],
                    text: 'El sexo de la quinta parte que venderá el bien inmueble es:'
                }
            ],
            help: 'vendedor',
            name: 'genero_vendedor_5',
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
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
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
                            k: 'tipo_vendedor_5',
                            v: 'j'
                        }
                    ],
                    text: 'Seleccione el tipo de documento del representante legal de la quinta empresa que venderá el bien inmueble'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_5',
                            v: 'n'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la quinta persona que venderá el bien inmueble'
                }
            ],
            help: 'vendedor',
            name: 'tipo_documento_vendedor_5',
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
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
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
                            k: 'tipo_vendedor_5',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía del representante legal de la quinta empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_5',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la quinta parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'cedula_vendedor_5',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_5',
                    v: 'cc'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
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
                            k: 'tipo_vendedor_5',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería del representante legal de la quinta empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_5',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la quinta parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'cedulae_vendedor_5',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_5',
                    v: 'ce'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
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
                            k: 'tipo_vendedor_5',
                            v: 'j'
                        }
                    ],
                    text: 'Digite el número del pasaporte del representante legal de la quinta empresa que venderá el bien inmueble, sin comas, puntos, ni guiones'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_5',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la quinta parte que venderá el bien inmueble, sin comas, puntos, ni guiones'
                }
            ],
            help: 'vendedor',
            name: 'pasaporte_vendedor_5',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_5',
                    v: 'pa'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione el estado civil del quinto vendedor',
            help: 'vendedor',
            name: 'estado_civil_vendedor_5',
            options: [
                {
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cc'
                },
                {
                    name: 'Casado sin sociedad conyugal vigente',
                    value: 'cs'
                },
                {
                    name: 'Soltero',
                    value: 'so'
                },
                {
                    name: 'Viudo',
                    value: 'vi'
                },
                {
                    name: 'Soltero con unión marital de hecho',
                    value: 'su'
                }
            ],
            prereq: [
                {
                    k: 'tipo_vendedor_5',
                    v: 'n'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'so'
        },
        {
            description: 'Digite el municipio de domicilio de la quinta parte vendedora',
            help: 'vendedor',
            name: 'ciudad_vendedor_5',
            prereq: [
                {
                    k: 'tipo_vendedor_5',
                    v: 'n'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la quinta empresa o persona jurídica que actúa como vendedora',
            help: 'vendedor',
            name: 'nombre_empresa_vendedor_5',
            prereq: [
                {
                    k: 'tipo_vendedor_5',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre de la ciudad donde está domiciliada la quinta empresa vendedora',
            help: 'vendedor',
            name: 'ciudad_empresa_vendedor_5',
            prereq: [
                {
                    k: 'tipo_vendedor_5',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el NIT de la quinta empresa vendedora, sin dígito de verificación',
            help: 'vendedor',
            name: 'identificacion_empresa_vendedor_5',
            prereq: [
                {
                    k: 'tipo_vendedor_5',
                    v: 'j'
                },
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: 'Digite la dirección completa del inmueble, tal como aparecen en la escritura pública o en certificado de libertad y tradición',
            name: 'descripcion_inmueble',
            type: 'text'
        },
        {
            description: '¿Desea añadir información acerca de los linderos?',
            help: 'lindero',
            name: 'linderos',
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
            description: 'Describa los linderos del predio, como conste en la escritura pública, en el folio de matrícula o certificado de tradición',
            help: 'lindero',
            name: 'descripcion_linderos',
            prereq: [
                {
                    k: 'linderos',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número de matrícula inmobiliaria del inmueble',
            help: 'numero_matricula_inmobiliaria',
            name: 'numero_matricula_inmobiliaria',
            type: 'text'
        },
        {
            description: 'Digite la ciudad donde se ubica la oficina de instrumentos públicos donde el inmueble está matriculado',
            name: 'ciudad_matricula_inmobiliaria',
            type: 'text'
        },
        {
            description: '¿Se cuenta con la dirección catastral del inmueble?',
            help: 'direccion_catastral',
            name: 'direccion_catastral',
            options: [
                {
                    name: 'No',
                    value: 'no'
                },
                {
                    name: 'Sí',
                    value: 'si'
                }
            ],
            type: 'clausula',
            value: 'no'
        },
        {
            description: 'Digite la dirección del inmueble',
            name: 'direccion_inmueble',
            prereq: [
                {
                    k: 'direccion_catastral',
                    v: 'si'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Se cuenta con el código catastral del inmueble?',
            help: 'codigo_catastral',
            name: 'codigo_catastral',
            options: [
                {
                    name: 'No',
                    value: 'no'
                },
                {
                    name: 'Sí',
                    value: 'si'
                }
            ],
            type: 'clausula',
            value: 'no'
        },
        {
            description: 'Digite el número de código catastral o de ficha catastral del inmueble',
            name: 'codigo_inmueble',
            prereq: [
                {
                    k: 'codigo_catastral',
                    v: 'si'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione la forma en la que la parte vendedora adquirió el inmueble que hoy vende',
            help: 'modo_adquisicion',
            name: 'modo_adquisicion',
            options: [
                {
                    label: ' compraventa',
                    name: 'Compraventa',
                    value: 'co'
                },
                {
                    label: ' donación',
                    name: 'Donación',
                    value: 'do'
                },
                {
                    label: ' prescripción adquisitiva',
                    name: 'Prescripción adquisitiva',
                    value: 'pa'
                },
                {
                    label: ' sucesión por causa de muerte',
                    name: 'Sucesión por causa de muerte',
                    value: 'sm'
                },
                {
                    label: ' adjudicación por gananciales en liquidación de sociedad conyugal',
                    name: 'Adjudicación por gananciales en liquidación de sociedad conyugal',
                    value: 'sc'
                }
            ],
            type: 'select',
            value: 'co'
        },
        {
            description: 'Digite el nombre de la persona natural o jurídica que le vendió el inmueble a quien es hoy el propietario',
            name: 'nombre_compraventa',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'co'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número de escritura pública por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'numero_escritura_co',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'co'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione la fecha en que se celebró la escritura de compraventa por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'dia_escritura_co',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'co'
                }
            ],
            type: 'date'
        },
        {
            description: 'Digite el número de la notaría en la cual se celebró la escritura de compraventa por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'nombre_notaria_co',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'co'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la ciudad donde está ubicada la notaría en la cual se celebró la escritura de compraventa por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'ciudad_notaria_co',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'co'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la persona natural o jurídica que le donó el inmueble a quien es hoy el propietario',
            name: 'nombre_donador',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'do'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número de escritura pública por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'numero_escritura_do',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'do'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione la fecha en que se celebró la escritura de donación por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'dia_escritura_do',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'do'
                }
            ],
            type: 'date'
        },
        {
            description: 'Digite el número de la notaría en la cual se celebró la escritura de donación por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'nombre_notaria_do',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'do'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la ciudad donde está ubicada la notaría en la cual se celebró la escritura de donación por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'ciudad_notaria_do',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'do'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número, la fecha y el juez que profirió la sentencia, por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'numero_sentencia_pa',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'pa'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la persona de la cual recibió el inmueble en herencia el hoy propietario',
            name: 'nombre_fallecido',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sm'
                }
            ],
            type: 'text'
        },
        {
            description: 'La sucesión se adelantó ante:',
            name: 'tipo_sucesion',
            options: [
                {
                    name: 'Juez',
                    value: 'j'
                },
                {
                    name: 'Notario',
                    value: 'n'
                }
            ],
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sm'
                }
            ],
            type: 'clausula',
            value: 'j'
        },
        {
            description: 'Digite el número, la fecha y el juez que profirió la sentencia, por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'numero_sentencia_sm',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sm'
                },
                {
                    k: 'tipo_sucesion',
                    v: 'j'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número de escritura pública por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'numero_escritura_n',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sm'
                },
                {
                    k: 'tipo_sucesion',
                    v: 'n'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione la fecha en que se celebró la escritura pública de sucesión por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'dia_escritura_n',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sm'
                },
                {
                    k: 'tipo_sucesion',
                    v: 'n'
                }
            ],
            type: 'date'
        },
        {
            description: 'Digite el número de la notaría en la cual se celebró la escritura pública de sucesión por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'nombre_notaria_n',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sm'
                },
                {
                    k: 'tipo_sucesion',
                    v: 'n'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la ciudad donde está ubicada la notaría en la cual se celebró la escritura pública de sucesión por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'ciudad_notaria_n',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sm'
                },
                {
                    k: 'tipo_sucesion',
                    v: 'n'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la persona de la cual se divorció el hoy propietario',
            name: 'nombre_conyugue',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sc'
                }
            ],
            type: 'text'
        },
        {
            description: 'La liquidación de la sociedad conyugal se adelantó ante:',
            name: 'tipo_liquidacion',
            options: [
                {
                    name: 'Juez',
                    value: 'j'
                },
                {
                    name: 'Notario',
                    value: 'n'
                }
            ],
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sc'
                }
            ],
            type: 'clausula',
            value: 'j'
        },
        {
            description: 'Digite el número, la fecha y el juez que profirió la sentencia, por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'numero_sentencia_sc',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sc'
                },
                {
                    k: 'tipo_liquidacion',
                    v: 'j'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número de escritura pública por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'numero_escritura_sc',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sc'
                },
                {
                    k: 'tipo_liquidacion',
                    v: 'n'
                }
            ],
            type: 'text'
        },
        {
            description: 'Seleccione la fecha en que se celebró la escritura pública de liquidación de sociedad conyugal por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'dia_escritura_sc',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sc'
                },
                {
                    k: 'tipo_liquidacion',
                    v: 'n'
                }
            ],
            type: 'date'
        },
        {
            description: 'Digite el número de la notaría en la cual se celebró la escritura pública de liquidación de sociedad conyugal por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'nombre_notaria_sc',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sc'
                },
                {
                    k: 'tipo_liquidacion',
                    v: 'n'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el nombre de la ciudad donde está ubicada la notaría en la cual se celebró la escritura pública de liquidación de sociedad conyugal por medio de la cual adquirió el inmueble el hoy propietario',
            name: 'ciudad_notaria_sc',
            prereq: [
                {
                    k: 'modo_adquisicion',
                    v: 'sc'
                },
                {
                    k: 'tipo_liquidacion',
                    v: 'n'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el precio de venta del inmueble en números, sin puntos y sin comas',
            name: 'precio_inmueble',
            type: 'currency'
        },
        {
            description: 'Seleccione la forma en la que se va a pagar el precio de venta del inmueble',
            name: 'tipo_pago',
            options: [
                {
                    name: 'Se paga la totalidad del precio con la firma de la promesa de compraventa',
                    value: 'tp'
                },
                {
                    name: 'Se paga una parte del precio con la promesa y otra con la escritura de compraventa',
                    value: 'pe'
                },
                {
                    name: 'Se paga la totalidad del precio con la firma de la escritura de compraventa',
                    value: 'te'
                },
                {
                    name: 'Se paga el precio de otra manera pactada por las partes',
                    value: 'ot'
                }
            ],
            type: 'clausula',
            value: 'tp'
        },
        {
            description: 'Digite la suma de dinero que se paga como adelanto en la firma de la promesa de compraventa, sin puntos y sin comas',
            name: 'precio_pc',
            prereq: [
                {
                    k: 'tipo_pago',
                    v: 'pe'
                }
            ],
            type: 'currency'
        },
        {
            description: 'Digite la forma en la que el promitente comprador va a pagar el precio de compraventa del inmueble',
            name: 'otro_pago',
            prereq: [
                {
                    k: 'tipo_pago',
                    v: 'ot'
                }
            ],
            type: 'text'
        },
        {
            description: 'La forma de pago se realizará de la siguiente manera:',
            name: 'metodo_pago',
            options: [
                {
                    name: 'Mediante depósito en cuenta bancaria',
                    value: 'c'
                },
                {
                    name: 'Mediante pago en efectivo',
                    value: 'e'
                },
                {
                    name: 'Otra forma de pago',
                    value: 'o'
                }
            ],
            type: 'clausula',
            value: 'c'
        },
        {
            description: 'La cuenta bancaria es de tipo:',
            name: 'cuenta_tipo',
            options: [
                {
                    name: 'Corriente',
                    value: 'c'
                },
                {
                    name: 'Ahorros',
                    value: 'a'
                }
            ],
            prereq: [
                {
                    k: 'metodo_pago',
                    v: 'c'
                }
            ],
            type: 'clausula',
            value: 'a'
        },
        {
            description: 'Digite el número de la cuenta bancaria donde se hará el pago del inmueble',
            name: 'numero_cuenta_vendedor',
            prereq: [
                {
                    k: 'metodo_pago',
                    v: 'c'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el banco al que pertenece la cuenta bancaria',
            name: 'banco_vendedor',
            prereq: [
                {
                    k: 'metodo_pago',
                    v: 'c'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre del titular de la cuenta bancaria en la cual se realizan los pagos de los valores pactados',
            name: 'nombre_cuenta_vendedor',
            prereq: [
                {
                    k: 'metodo_pago',
                    v: 'c'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el nombre del municipio y dirección donde se realizará el pago',
            name: 'lugar_pago',
            prereq: [
                {
                    k: 'metodo_pago',
                    v: 'e'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite de manera clara y precisa cuál será la manera de pago. Recuerde que el contenido y la eficacia que sea por usted redactado, son de su exclusiva responsabilidad y no de micontrato.co',
            help: 'otro_tipo_pago',
            name: 'otro_tipo_pago',
            prereq: [
                {
                    k: 'metodo_pago',
                    v: 'o'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Desea agregar una cláusula penal?',
            name: 'clausula_penal',
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
            description: 'Digite el valor de la multa de incumplimiento de la cláusula penal en números',
            name: 'multa_incumplimiento',
            prereq: [
                {
                    k: 'clausula_penal',
                    v: 's'
                }
            ],
            type: 'currency'
        },
        {
            description: 'Digite el número de la notaría en la cual se otorgará la escritura pública de compraventa',
            name: 'nombre_notaria_oep',
            type: 'text'
        },
        {
            description: 'Digite el nombre de la ciudad en la cual se otorgará la escritura pública de compraventa',
            name: 'ciudad_notaria_oep',
            type: 'text'
        },
        {
            description: 'Seleccione la fecha en la cual se otorgará la escritura pública de compraventa',
            name: 'dia_escritura_oep',
            type: 'date'
        },
        {
            description: 'Digite la hora en la cual se otorgará la escritura pública de compraventa',
            name: 'hora_escritura_oep',
            type: 'text'
        },
        {
            description: 'La entrega del inmueble se realizará',
            name: 'entrega_inmueble',
            options: [
                {
                    name: 'Con la promesa de compraventa',
                    value: 'pc'
                },
                {
                    name: 'En una fecha posterior',
                    value: 'fp'
                }
            ],
            type: 'clausula',
            value: 'pc'
        },
        {
            description: 'Seleccione la fecha en la cual se hará entrega del inmueble al prometente comprador',
            name: 'fecha_entrega',
            prereq: [
                {
                    k: 'entrega_inmueble',
                    v: 'fp'
                }
            ],
            type: 'date'
        },
        {
            description: '¿Quién deberá pagar los gastos derivados del presente contrato de promesa de compraventa?',
            name: 'gastos_parte',
            options: [
                {
                    name: 'Ambas partes conforme con la usanza notarial.',
                    value: 'a'
                },
                {
                    name: 'La parte promitente compradora',
                    value: 'c'
                },
                {
                    name: 'La parte promitente vendedora',
                    value: 'v'
                }
            ],
            type: 'clausula',
            value: 'a'
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
                            k: 'tipo_comprador',
                            v: 'j'
                        },
                        {
                            k: 'compradores_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la empresa compradora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador',
                            v: 'j'
                        },
                        {
                            k: 'compradores_2',
                            v: 's'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la primera empresa compradora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador',
                            v: 'n'
                        },
                        {
                            k: 'compradores_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la parte compradora se notificará, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador',
                            v: 'n'
                        },
                        {
                            k: 'compradores_2',
                            v: 's'
                        }
                    ],
                    text: 'Digite la dirección completa donde la primera parte compradora se notificará, indicando la ciudad'
                }
            ],
            help: 'comprador',
            name: 'direccion_comprador',
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'compradores_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el teléfono de la parte compradora'
                },
                {
                    prereq: [
                        {
                            k: 'compradores_2',
                            v: 's'
                        }
                    ],
                    text: 'Digite el teléfono de la primera parte compradora'
                }
            ],
            help: 'comprador',
            name: 'telefono_comprador',
            type: 'phone'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'compradores_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte compradora'
                },
                {
                    prereq: [
                        {
                            k: 'compradores_2',
                            v: 's'
                        }
                    ],
                    text: 'Digite el correo electrónico de la primera parte compradora'
                }
            ],
            help: 'comprador',
            name: 'correo_comprador',
            type: 'email'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_2',
                            v: 'j'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la segunda empresa compradora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la segunda parte compradora se notificará, indicando la ciudad'
                }
            ],
            help: 'comprador',
            name: 'direccion_comprador_2',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el teléfono de la segunda parte compradora',
            help: 'comprador',
            name: 'telefono_comprador_2',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el correo electrónico de la segunda parte compradora',
            help: 'comprador',
            name: 'correo_comprador_2',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                }
            ],
            type: 'phone'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_3',
                            v: 'j'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la tercera empresa compradora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_3',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la tercera parte compradora se notificará, indicando la ciudad'
                }
            ],
            help: 'comprador',
            name: 'direccion_comprador_3',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el teléfono de la tercera parte compradora',
            help: 'comprador',
            name: 'telefono_comprador_3',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                }
            ],
            type: 'phone'
        },
        {
            description: 'Digite el correo electrónico de la tercera parte compradora',
            help: 'comprador',
            name: 'correo_comprador_3',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_4',
                            v: 'j'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la cuarta empresa compradora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_4',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la cuarta parte compradora se notificará, indicando la ciudad'
                }
            ],
            help: 'comprador',
            name: 'direccion_comprador_4',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el teléfono de la cuarta parte compradora',
            help: 'comprador',
            name: 'telefono_comprador_4',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                }
            ],
            type: 'phone'
        },
        {
            description: 'Digite el correo electrónico de la cuarta parte compradora',
            help: 'comprador',
            name: 'correo_comprador_4',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_5',
                            v: 'j'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la quinta empresa compradora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_comprador_5',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la quinta parte compradora se notificará, indicando la ciudad'
                }
            ],
            help: 'comprador',
            name: 'direccion_comprador_5',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el teléfono de la quinta parte compradora',
            help: 'comprador',
            name: 'telefono_comprador_5',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
                    v: 's'
                }
            ],
            type: 'phone'
        },
        {
            description: 'Digite el correo electrónico de la quinta parte compradora',
            help: 'comprador',
            name: 'correo_comprador_5',
            prereq: [
                {
                    k: 'compradores_2',
                    v: 's'
                },
                {
                    k: 'compradores_3',
                    v: 's'
                },
                {
                    k: 'compradores_4',
                    v: 's'
                },
                {
                    k: 'compradores_5',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor',
                            v: 'j'
                        },
                        {
                            k: 'vendedores_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la empresa vendedora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor',
                            v: 'j'
                        },
                        {
                            k: 'vendedores_2',
                            v: 's'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la primera empresa vendedora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor',
                            v: 'n'
                        },
                        {
                            k: 'vendedores_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la parte vendedora se notificará, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor',
                            v: 'n'
                        },
                        {
                            k: 'vendedores_2',
                            v: 's'
                        }
                    ],
                    text: 'Digite la dirección completa donde la primera parte vendedora se notificará, indicando la ciudad'
                }
            ],
            help: 'vendedor',
            name: 'direccion_vendedor',
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'vendedores_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el teléfono de la parte vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'vendedores_2',
                            v: 's'
                        }
                    ],
                    text: 'Digite el teléfono de la primera parte vendedora'
                }
            ],
            help: 'vendedor',
            name: 'telefono_vendedor',
            type: 'phone'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'vendedores_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'vendedores_2',
                            v: 's'
                        }
                    ],
                    text: 'Digite el correo electrónico de la primera parte vendedora'
                }
            ],
            help: 'vendedor',
            name: 'correo_vendedor',
            type: 'email'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_2',
                            v: 'j'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la segunda empresa vendedora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_2',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la segunda parte vendedora se notificará, indicando la ciudad'
                }
            ],
            help: 'vendedor',
            name: 'direccion_vendedor_2',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el teléfono de la segunda parte vendedora',
            help: 'vendedor',
            name: 'telefono_vendedor_2',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                }
            ],
            type: 'phone'
        },
        {
            description: 'Digite el correo electrónico de la segunda parte vendedora',
            help: 'vendedor',
            name: 'correo_vendedor_2',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_3',
                            v: 'j'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la tercera empresa vendedora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_3',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la tercera parte vendedora se notificará, indicando la ciudad'
                }
            ],
            help: 'vendedor',
            name: 'direccion_vendedor_3',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el teléfono de la tercera parte vendedora',
            help: 'vendedor',
            name: 'telefono_vendedor_3',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                }
            ],
            type: 'phone'
        },
        {
            description: 'Digite el correo electrónico de la tercera parte vendedora',
            help: 'vendedor',
            name: 'correo_vendedor_3',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_4',
                            v: 'j'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la cuarta empresa vendedora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_4',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la cuarta parte vendedora se notificará, indicando la ciudad'
                }
            ],
            help: 'vendedor',
            name: 'direccion_vendedor_4',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el teléfono de la cuarta parte vendedora',
            help: 'vendedor',
            name: 'telefono_vendedor_4',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                }
            ],
            type: 'phone'
        },
        {
            description: 'Digite el correo electrónico de la cuarta parte vendedora',
            help: 'vendedor',
            name: 'correo_vendedor_4',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_5',
                            v: 'j'
                        }
                    ],
                    text: 'Digite la dirección completa donde se notificará a la quinta empresa vendedora, indicando la ciudad'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_vendedor_5',
                            v: 'n'
                        }
                    ],
                    text: 'Digite la dirección completa donde la quinta parte vendedora se notificará, indicando la ciudad'
                }
            ],
            help: 'vendedor',
            name: 'direccion_vendedor_5',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el teléfono de la quinta parte vendedora',
            help: 'vendedor',
            name: 'telefono_vendedor_5',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
                    v: 's'
                }
            ],
            type: 'phone'
        },
        {
            description: 'Digite el correo electrónico de la quinta parte vendedora',
            help: 'vendedor',
            name: 'correo_vendedor_5',
            prereq: [
                {
                    k: 'vendedores_2',
                    v: 's'
                },
                {
                    k: 'vendedores_3',
                    v: 's'
                },
                {
                    k: 'vendedores_4',
                    v: 's'
                },
                {
                    k: 'vendedores_5',
                    v: 's'
                }
            ],
            type: 'email'
        }
    ],
    help: {
        codigo_catastral: 'Es un código de 30 digitos que corresponde con lo que anteriormente se denominaba "ficha catastral", y puede ser encontrado en el certificado de tradición del inmueble o en la respectiva factura del impuesto predial.',
        comprador: 'Comprador: Quien paga el precio por el inmueble en venta.',
        direccion_catastral: 'La dirección catastral corresponde a la dirección del inmueble que aparece en el certificado de tradición y libertad del mismo.',
        lindero: 'Lindero: Límites del inmueble a vender',
        modo_adquisicion: 'La prescripción adquisitiva es un modo de adquirir cosas comerciables ajenas, por haberlas poseído durante un tiempo y con arreglo a las condiciones definidas en la ley.',
        numero_matricula_inmobiliaria: 'El número de matrícula inmobiliaria corresponde al número del certificado de tradición, en el cual se identifica la oficina de registro en la cual está matriculado el inmueble, y el número de matrícula propiamente dicho. \nEjemplo: 001-99999 para un bien inmueble registrado en la oficina de registros públicos de medellín zona sur.',
        otro_tipo_pago: 'Ejemplo: un 50% del precio en efectivo, y de manera directa a LA PARTE VENDEDORA en la calle 1 #70-70 de Medellín; el 50% restante se dividirá en dos (2) pagamentos del 25% cada uno, donde el primero, irá a la cuenta de ahorros bancolombia número 12345678901 a nombre de Eliana Ortiz , y el segundo 25% a la cuenta corriente Davivienda número 03135112233 a nombre de Leonardo Botero',
        vendedor: 'Vendedor: Quien da el inmueble en venta.'
    },
    name: 'PROMESA DE COMPRAVENTA DE BIEN INMUEBLE',
    price: 5000,
    sign: [
        'nombre_comprador',
        'cedula_comprador',
        'cedulae_comprador',
        'pasaporte_comprador',
        'correo_comprador',
        'telefono_comprador',
        'nombre_empresa_comprador',
        'identificacion_empresa_comprador',
        'nombre_vendedor',
        'cedula_vendedor',
        'cedulae_vendedor',
        'pasaporte_vendedor',
        'correo_vendedor',
        'telefono_vendedor',
        'nombre_empresa_vendedor',
        'identificacion_empresa_vendedor',
        'nombre_comprador_2',
        'cedula_comprador_2',
        'cedulae_comprador_2',
        'pasaporte_comprador_2',
        'correo_comprador_2',
        'telefono_comprador_2',
        'nombre_empresa_comprador_2',
        'identificacion_empresa_comprador_2',
        'nombre_vendedor_2',
        'cedula_vendedor_2',
        'cedulae_vendedor_2',
        'pasaporte_vendedor_2',
        'correo_vendedor_2',
        'telefono_vendedor_2',
        'nombre_empresa_vendedor_2',
        'identificacion_empresa_vendedor_2',
        'nombre_comprador_3',
        'cedula_comprador_3',
        'cedulae_comprador_3',
        'pasaporte_comprador_3',
        'correo_comprador_3',
        'telefono_comprador_3',
        'nombre_empresa_comprador_3',
        'identificacion_empresa_comprador_3',
        'nombre_vendedor_3',
        'cedula_vendedor_3',
        'cedulae_vendedor_3',
        'pasaporte_vendedor_3',
        'correo_vendedor_3',
        'telefono_vendedor_3',
        'nombre_empresa_vendedor_3',
        'identificacion_empresa_vendedor_3',
        'nombre_comprador_4',
        'cedula_comprador_4',
        'cedulae_comprador_4',
        'pasaporte_comprador_4',
        'correo_comprador_4',
        'telefono_comprador_4',
        'nombre_empresa_comprador_4',
        'identificacion_empresa_comprador_4',
        'nombre_vendedor_4',
        'cedula_vendedor_4',
        'cedulae_vendedor_4',
        'pasaporte_vendedor_4',
        'correo_vendedor_4',
        'telefono_vendedor_4',
        'nombre_empresa_vendedor_4',
        'identificacion_empresa_vendedor_4',
        'nombre_comprador_5',
        'cedula_comprador_5',
        'cedulae_comprador_5',
        'pasaporte_comprador_5',
        'correo_comprador_5',
        'telefono_comprador_5',
        'nombre_empresa_comprador_5',
        'identificacion_empresa_comprador_5',
        'nombre_vendedor_5',
        'cedula_vendedor_5',
        'cedulae_vendedor_5',
        'pasaporte_vendedor_5',
        'correo_vendedor_5',
        'telefono_vendedor_5',
        'nombre_empresa_vendedor_5',
        'identificacion_empresa_vendedor_5'
    ],
    signatureProfile: [
        {
            email: 'correo_comprador',
            identification: 'cedula_comprador|cedulae_comprador|pasaporte_comprador',
            name: 'nombre_comprador',
            type: 'comprador'
        },
        {
            email: 'correo_vendedor',
            identification: 'cedula_vendedor|cedulae_vendedor|pasaporte_vendedor',
            name: 'nombre_vendedor',
            type: 'vendedor'
        },
        {
            email: 'correo_comprador_2',
            identification: 'cedula_comprador_2|cedulae_comprador_2|pasaporte_comprador_2',
            name: 'nombre_comprador_2',
            type: 'comprador_2'
        },
        {
            email: 'correo_vendedor_2',
            identification: 'cedula_vendedor_2|cedulae_vendedor_2|pasaporte_vendedor_2',
            name: 'nombre_vendedor_2',
            type: 'vendedor_2'
        },
        {
            email: 'correo_comprador_3',
            identification: 'cedula_comprador_3|cedulae_comprador_3|pasaporte_comprador_3',
            name: 'nombre_comprador_3',
            type: 'comprador_3'
        },
        {
            email: 'correo_vendedor_3',
            identification: 'cedula_vendedor_3|cedulae_vendedor_3|pasaporte_vendedor_3',
            name: 'nombre_vendedor_3',
            type: 'vendedor_3'
        },
        {
            email: 'correo_comprador_4',
            identification: 'cedula_comprador_4|cedulae_comprador_4|pasaporte_comprador_4',
            name: 'nombre_comprador_4',
            type: 'comprador_4'
        },
        {
            email: 'correo_vendedor_4',
            identification: 'cedula_vendedor_4|cedulae_vendedor_4|pasaporte_vendedor_4',
            name: 'nombre_vendedor_4',
            type: 'vendedor_4'
        },
        {
            email: 'correo_comprador_5',
            identification: 'cedula_comprador_5|cedulae_comprador_5|pasaporte_comprador_5',
            name: 'nombre_comprador_5',
            type: 'comprador_5'
        },
        {
            email: 'correo_vendedor_5',
            identification: 'cedula_vendedor_5|cedulae_vendedor_5|pasaporte_vendedor_5',
            name: 'nombre_vendedor_5',
            type: 'vendedor_5'
        }
    ],
    build: 1,
    company: ObjectId('62fc063367cfc581d0086c40')
}