{
    _id: ObjectId('62c5fb1551fc27d23d929181'),
    config: [
        {
            description: 'Ingresa el código del documento',
            type: 'text',
            name: 'document_code'
        },
        {
            description: 'Ingresa el correo de la persona que diligenciará éste documento',
            type: 'text',
            name: 'correo_enviar'
        },
        {
            description: 'Seleccione el tipo de persona',
            name: 'tipo_persona_v_1',
            options: [
                {
                    name: 'Natural',
                    value: 'na'
                },
                {
                    name: 'Jurídica',
                    value: 'ju'
                }
            ],
            type: 'clausula',
            value: 'na'
        },
        {
            description: 'Digite el nombre de la empresa',
            help: 'nombre_empresa',
            name: 'nombre_empresa_vendedor_1',
            prereq: [
                {
                    k: 'tipo_persona_v_1',
                    v: 'ju'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número Nit de la empresa',
            help: 'nit_empresa',
            name: 'nit_empresa_vendedor_1',
            prereq: [
                {
                    k: 'tipo_persona_v_1',
                    v: 'ju'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la ciudad en la que está ubicada la cámara de comercio en la que está inscrita la empresa',
            help: 'municipio',
            name: 'camara_comercio_empresa_vendedor_1',
            prereq: [
                {
                    k: 'tipo_persona_v_1',
                    v: 'ju'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Cuál es el tipo de representante?',
            help: 'tipo_repre',
            name: 'tipo_representante_empresa_vendedor_1',
            options: [
                {
                    label: ' representante legal suplente',
                    name: 'Representante legal suplente',
                    value: 'rs'
                },
                {
                    label: ' representante legal',
                    name: 'Representante legal',
                    value: 'rl'
                },
                {
                    label: ' apoderado',
                    name: 'Apoderado',
                    value: 'a'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_v_1',
                    v: 'ju'
                }
            ],
            type: 'select',
            value: 'rs'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el nombre completo de la parte vendedora'
                }
            ],
            help: 'nombre',
            name: 'nombre_vendedor_1',
            type: 'name'
        },
        {
            description: 'Seleccione el sexo de la parte vendedora',
            name: 'sexo_vendedor_1',
            options: [
                {
                    name: 'Masculino',
                    value: 'h'
                },
                {
                    name: 'Femenino',
                    value: 'm'
                }
            ],
            type: 'clausula',
            value: 'h'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la parte vendedora'
                }
            ],
            help: 'tipo_documento',
            name: 'tipo_documento_vendedor_1',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
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
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte vendedora'
                }
            ],
            help: 'cedula',
            name: 'cedula_vendedor_1',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_1',
                    v: 'cc'
                }
            ],
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte vendedora'
                }
            ],
            help: 'cedula',
            name: 'cedulae_vendedor_1',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_1',
                    v: 'ce'
                }
            ],
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte vendedora'
                }
            ],
            help: 'pasaporte',
            name: 'pasaporte_vendedor_1',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_1',
                    v: 'pa'
                }
            ],
            type: 'name'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la parte vendedora'
                }
            ],
            help: 'municipio',
            name: 'municipio_expe_documento_vendedor_1',
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el estado civil de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el estado civil de la parte vendedora'
                }
            ],
            help: 'estado_civil',
            name: 'estado_vendedor_1',
            options: [
                {
                    label: ' Casado, con sociedad conyugal vigente',
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cv'
                },
                {
                    label: ' Casado, con sociedad conyugal disuelta y liquidada',
                    name: 'Casado con sociedad conyugal disuelta y liquidada',
                    value: 'cd'
                },
                {
                    label: ' Soltero, sin unión marital de hecho',
                    name: 'Soltero sin unión marital de hecho',
                    value: 'ss'
                },
                {
                    label: ' Soltero, con unión marital de hecho',
                    name: 'Soltero con unión marital de hecho',
                    value: 'sc'
                },
                {
                    label: ' Soltero, por efecto de viudez',
                    name: 'Soltero por efecto de viudez',
                    value: 'sv'
                }
            ],
            type: 'select',
            value: 'cv'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite la dirección de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite la dirección de la parte vendedora'
                }
            ],
            help: 'direccion',
            name: 'direccion_vendedor_1',
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la parte vendedora'
                }
            ],
            help: 'municipio',
            name: 'municipio_vendedor_1',
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la parte vendedora'
                }
            ],
            help: 'departamento',
            name: 'depart_vendedor_1',
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de teléfono de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de teléfono de la parte vendedora'
                }
            ],
            help: 'telefono',
            name: 'telefono_vendedor_1',
            type: 'phone'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el correo electrónico de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte vendedora'
                }
            ],
            help: 'correo',
            name: 'correo_vendedor_1',
            type: 'email'
        },
        {
            description: '¿Desea agregar otro vendedor?',
            name: 'vendedor_2',
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
            description: 'Seleccione el tipo de persona',
            name: 'tipo_persona_v_2',
            options: [
                {
                    name: 'Natural',
                    value: 'na'
                },
                {
                    name: 'Jurídica',
                    value: 'ju'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'na'
        },
        {
            description: 'Digite el nombre de la empresa',
            help: 'nombre_empresa',
            name: 'nombre_empresa_vendedor_2',
            prereq: [
                {
                    k: 'tipo_persona_v_2',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número Nit de la empresa',
            help: 'nit_empresa',
            name: 'nit_empresa_vendedor_2',
            prereq: [
                {
                    k: 'tipo_persona_v_2',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la ciudad en la que está ubicada la cámara de comercio en la que está inscrita la empresa',
            help: 'municipio',
            name: 'camara_comercio_empresa_vendedor_2',
            prereq: [
                {
                    k: 'tipo_persona_v_2',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Cuál es el tipo de representante?',
            help: 'tipo_repre',
            name: 'tipo_representante_empresa_vendedor_2',
            options: [
                {
                    label: ' representante legal suplente',
                    name: 'Representante legal suplente',
                    value: 'rs'
                },
                {
                    label: ' representante legal',
                    name: 'Representante legal',
                    value: 'rl'
                },
                {
                    label: ' apoderado',
                    name: 'Apoderado',
                    value: 'a'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_v_2',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'rs'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el nombre completo de la parte vendedora'
                }
            ],
            help: 'nombre',
            name: 'nombre_vendedor_2',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Seleccione el sexo de la parte vendedora',
            name: 'sexo_vendedor_2',
            options: [
                {
                    name: 'Masculino',
                    value: 'h'
                },
                {
                    name: 'Femenino',
                    value: 'm'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'h'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la parte vendedora'
                }
            ],
            help: 'tipo_documento',
            name: 'tipo_documento_vendedor_2',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
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
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte vendedora'
                }
            ],
            help: 'cedula',
            name: 'cedula_vendedor_2',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_2',
                    v: 'cc'
                },
                {
                    k: 'vendedor_2',
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
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte vendedora'
                }
            ],
            help: 'cedula',
            name: 'cedulae_vendedor_2',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_2',
                    v: 'ce'
                },
                {
                    k: 'vendedor_2',
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
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte vendedora'
                }
            ],
            help: 'pasaporte',
            name: 'pasaporte_vendedor_2',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_2',
                    v: 'pa'
                },
                {
                    k: 'vendedor_2',
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
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la parte vendedora'
                }
            ],
            help: 'municipio',
            name: 'municipio_expe_documento_vendedor_2',
            prereq: [
                {
                    k: 'vendedor_2',
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
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el estado civil de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el estado civil de la parte vendedora'
                }
            ],
            help: 'estado_civil',
            name: 'estado_vendedor_2',
            options: [
                {
                    label: ' Casado, con sociedad conyugal vigente',
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cv'
                },
                {
                    label: ' Casado, con sociedad conyugal disuelta y liquidada',
                    name: 'Casado con sociedad conyugal disuelta y liquidada',
                    value: 'cd'
                },
                {
                    label: ' Soltero, sin unión marital de hecho',
                    name: 'Soltero sin unión marital de hecho',
                    value: 'ss'
                },
                {
                    label: ' Soltero, con unión marital de hecho',
                    name: 'Soltero con unión marital de hecho',
                    value: 'sc'
                },
                {
                    label: ' Soltero, por efecto de viudez',
                    name: 'Soltero por efecto de viudez',
                    value: 'sv'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'cv'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite la dirección de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite la dirección de la parte vendedora'
                }
            ],
            help: 'direccion',
            name: 'direccion_vendedor_2',
            prereq: [
                {
                    k: 'vendedor_2',
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
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la parte vendedora'
                }
            ],
            help: 'municipio',
            name: 'municipio_vendedor_2',
            prereq: [
                {
                    k: 'vendedor_2',
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
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la parte vendedora'
                }
            ],
            help: 'departamento',
            name: 'depart_vendedor_2',
            prereq: [
                {
                    k: 'vendedor_2',
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
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de teléfono de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de teléfono de la parte vendedora'
                }
            ],
            help: 'telefono',
            name: 'telefono_vendedor_2',
            prereq: [
                {
                    k: 'vendedor_2',
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
                            k: 'tipo_persona_v_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el correo electrónico de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte vendedora'
                }
            ],
            help: 'correo',
            name: 'correo_vendedor_2',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: '¿Desea agregar otro vendedor?',
            name: 'vendedor_3',
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
                    k: 'vendedor_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Seleccione el tipo de persona',
            name: 'tipo_persona_v_3',
            options: [
                {
                    name: 'Natural',
                    value: 'na'
                },
                {
                    name: 'Jurídica',
                    value: 'ju'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'na'
        },
        {
            description: 'Digite el nombre de la empresa',
            help: 'nombre_empresa',
            name: 'nombre_empresa_vendedor_3',
            prereq: [
                {
                    k: 'tipo_persona_v_3',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número Nit de la empresa',
            help: 'nit_empresa',
            name: 'nit_empresa_vendedor_3',
            prereq: [
                {
                    k: 'tipo_persona_v_3',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la ciudad en la que está ubicada la cámara de comercio en la que está inscrita la empresa',
            help: 'municipio',
            name: 'camara_comercio_empresa_vendedor_3',
            prereq: [
                {
                    k: 'tipo_persona_v_3',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Cuál es el tipo de representante?',
            help: 'tipo_repre',
            name: 'tipo_representante_empresa_vendedor_3',
            options: [
                {
                    label: ' representante legal suplente',
                    name: 'Representante legal suplente',
                    value: 'rs'
                },
                {
                    label: ' representante legal',
                    name: 'Representante legal',
                    value: 'rl'
                },
                {
                    label: ' apoderado',
                    name: 'Apoderado',
                    value: 'a'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_v_3',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'rs'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el nombre completo de la parte vendedora'
                }
            ],
            help: 'nombre',
            name: 'nombre_vendedor_3',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Seleccione el sexo de la parte vendedora',
            name: 'sexo_vendedor_3',
            options: [
                {
                    name: 'Masculino',
                    value: 'h'
                },
                {
                    name: 'Femenino',
                    value: 'm'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'h'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la parte vendedora'
                }
            ],
            help: 'tipo_documento',
            name: 'tipo_documento_vendedor_3',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
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
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte vendedora'
                }
            ],
            help: 'cedula',
            name: 'cedula_vendedor_3',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_3',
                    v: 'cc'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
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
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte vendedora'
                }
            ],
            help: 'cedula',
            name: 'cedulae_vendedor_3',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_3',
                    v: 'ce'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
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
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte vendedora'
                }
            ],
            help: 'pasaporte',
            name: 'pasaporte_vendedor_3',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_3',
                    v: 'pa'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
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
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la parte vendedora'
                }
            ],
            help: 'municipio',
            name: 'municipio_expe_documento_vendedor_3',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
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
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el estado civil de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el estado civil de la parte vendedora'
                }
            ],
            help: 'estado_civil',
            name: 'estado_vendedor_3',
            options: [
                {
                    label: ' Casado, con sociedad conyugal vigente',
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cv'
                },
                {
                    label: ' Casado, con sociedad conyugal disuelta y liquidada',
                    name: 'Casado con sociedad conyugal disuelta y liquidada',
                    value: 'cd'
                },
                {
                    label: ' Soltero, sin unión marital de hecho',
                    name: 'Soltero sin unión marital de hecho',
                    value: 'ss'
                },
                {
                    label: ' Soltero, con unión marital de hecho',
                    name: 'Soltero con unión marital de hecho',
                    value: 'sc'
                },
                {
                    label: ' Soltero, por efecto de viudez',
                    name: 'Soltero por efecto de viudez',
                    value: 'sv'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'cv'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite la dirección de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite la dirección de la parte vendedora'
                }
            ],
            help: 'direccion',
            name: 'direccion_vendedor_3',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
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
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la parte vendedora'
                }
            ],
            help: 'municipio',
            name: 'municipio_vendedor_3',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
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
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la parte vendedora'
                }
            ],
            help: 'departamento',
            name: 'depart_vendedor_3',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
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
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de teléfono de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de teléfono de la parte vendedora'
                }
            ],
            help: 'telefono',
            name: 'telefono_vendedor_3',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
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
                            k: 'tipo_persona_v_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el correo electrónico de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte vendedora'
                }
            ],
            help: 'correo',
            name: 'correo_vendedor_3',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: '¿Desea agregar otro vendedor?',
            name: 'vendedor_4',
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
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Seleccione el tipo de persona',
            name: 'tipo_persona_v_4',
            options: [
                {
                    name: 'Natural',
                    value: 'na'
                },
                {
                    name: 'Jurídica',
                    value: 'ju'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'na'
        },
        {
            description: 'Digite el nombre de la empresa',
            help: 'nombre_empresa',
            name: 'nombre_empresa_vendedor_4',
            prereq: [
                {
                    k: 'tipo_persona_v_4',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número Nit de la empresa',
            help: 'nit_empresa',
            name: 'nit_empresa_vendedor_4',
            prereq: [
                {
                    k: 'tipo_persona_v_4',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la ciudad en la que está ubicada la cámara de comercio en la que está inscrita la empresa',
            help: 'municipio',
            name: 'camara_comercio_empresa_vendedor_4',
            prereq: [
                {
                    k: 'tipo_persona_v_4',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Cuál es el tipo de representante?',
            help: 'tipo_repre',
            name: 'tipo_representante_empresa_vendedor_4',
            options: [
                {
                    label: ' representante legal suplente',
                    name: 'Representante legal suplente',
                    value: 'rs'
                },
                {
                    label: ' representante legal',
                    name: 'Representante legal',
                    value: 'rl'
                },
                {
                    label: ' apoderado',
                    name: 'Apoderado',
                    value: 'a'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_v_4',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'rs'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el nombre completo de la parte vendedora'
                }
            ],
            help: 'nombre',
            name: 'nombre_vendedor_4',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Seleccione el sexo de la parte vendedora',
            name: 'sexo_vendedor_4',
            options: [
                {
                    name: 'Masculino',
                    value: 'h'
                },
                {
                    name: 'Femenino',
                    value: 'm'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'h'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la parte vendedora'
                }
            ],
            help: 'tipo_documento',
            name: 'tipo_documento_vendedor_4',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
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
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte vendedora'
                }
            ],
            help: 'cedula',
            name: 'cedula_vendedor_4',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_4',
                    v: 'cc'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
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
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte vendedora'
                }
            ],
            help: 'cedula',
            name: 'cedulae_vendedor_4',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_4',
                    v: 'ce'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
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
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte vendedora'
                }
            ],
            help: 'pasaporte',
            name: 'pasaporte_vendedor_4',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_4',
                    v: 'pa'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
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
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la parte vendedora'
                }
            ],
            help: 'municipio',
            name: 'municipio_expe_documento_vendedor_4',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
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
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el estado civil de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el estado civil de la parte vendedora'
                }
            ],
            help: 'estado_civil',
            name: 'estado_vendedor_4',
            options: [
                {
                    label: ' Casado, con sociedad conyugal vigente',
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cv'
                },
                {
                    label: ' Casado, con sociedad conyugal disuelta y liquidada',
                    name: 'Casado con sociedad conyugal disuelta y liquidada',
                    value: 'cd'
                },
                {
                    label: ' Soltero, sin unión marital de hecho',
                    name: 'Soltero sin unión marital de hecho',
                    value: 'ss'
                },
                {
                    label: ' Soltero, con unión marital de hecho',
                    name: 'Soltero con unión marital de hecho',
                    value: 'sc'
                },
                {
                    label: ' Soltero, por efecto de viudez',
                    name: 'Soltero por efecto de viudez',
                    value: 'sv'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'cv'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite la dirección de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite la dirección de la parte vendedora'
                }
            ],
            help: 'direccion',
            name: 'direccion_vendedor_4',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
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
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la parte vendedora'
                }
            ],
            help: 'municipio',
            name: 'municipio_vendedor_4',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
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
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la parte vendedora'
                }
            ],
            help: 'departamento',
            name: 'depart_vendedor_4',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
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
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de teléfono de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de teléfono de la parte vendedora'
                }
            ],
            help: 'telefono',
            name: 'telefono_vendedor_4',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
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
                            k: 'tipo_persona_v_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el correo electrónico de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte vendedora'
                }
            ],
            help: 'correo',
            name: 'correo_vendedor_4',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: '¿Desea agregar otro vendedor?',
            name: 'vendedor_5',
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
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Seleccione el tipo de persona',
            name: 'tipo_persona_v_5',
            options: [
                {
                    name: 'Natural',
                    value: 'na'
                },
                {
                    name: 'Jurídica',
                    value: 'ju'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'na'
        },
        {
            description: 'Digite el nombre de la empresa',
            help: 'nombre_empresa',
            name: 'nombre_empresa_vendedor_5',
            prereq: [
                {
                    k: 'tipo_persona_v_5',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número Nit de la empresa',
            help: 'nit_empresa',
            name: 'nit_empresa_vendedor_5',
            prereq: [
                {
                    k: 'tipo_persona_v_5',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la ciudad en la que está ubicada la cámara de comercio en la que está inscrita la empresa',
            help: 'municipio',
            name: 'camara_comercio_empresa_vendedor_5',
            prereq: [
                {
                    k: 'tipo_persona_v_5',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Cuál es el tipo de representante?',
            help: 'tipo_repre',
            name: 'tipo_representante_empresa_vendedor_5',
            options: [
                {
                    label: ' representante legal suplente',
                    name: 'Representante legal suplente',
                    value: 'rs'
                },
                {
                    label: ' representante legal',
                    name: 'Representante legal',
                    value: 'rl'
                },
                {
                    label: ' apoderado',
                    name: 'Apoderado',
                    value: 'a'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_v_5',
                    v: 'ju'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'rs'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el nombre completo de la parte vendedora'
                }
            ],
            help: 'nombre',
            name: 'nombre_vendedor_5',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Seleccione el sexo de la parte vendedora',
            name: 'sexo_vendedor_5',
            options: [
                {
                    name: 'Masculino',
                    value: 'h'
                },
                {
                    name: 'Femenino',
                    value: 'm'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'h'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la parte vendedora'
                }
            ],
            help: 'tipo_documento',
            name: 'tipo_documento_vendedor_5',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
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
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte vendedora'
                }
            ],
            help: 'cedula',
            name: 'cedula_vendedor_5',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_5',
                    v: 'cc'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
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
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte vendedora'
                }
            ],
            help: 'cedula',
            name: 'cedulae_vendedor_5',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_5',
                    v: 'ce'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
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
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte vendedora'
                }
            ],
            help: 'pasaporte',
            name: 'pasaporte_vendedor_5',
            prereq: [
                {
                    k: 'tipo_documento_vendedor_5',
                    v: 'pa'
                },
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
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
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la parte vendedora'
                }
            ],
            help: 'municipio',
            name: 'municipio_expe_documento_vendedor_5',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
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
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el estado civil de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el estado civil de la parte vendedora'
                }
            ],
            help: 'estado_civil',
            name: 'estado_vendedor_5',
            options: [
                {
                    label: ' Casado, con sociedad conyugal vigente',
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cv'
                },
                {
                    label: ' Casado, con sociedad conyugal disuelta y liquidada',
                    name: 'Casado con sociedad conyugal disuelta y liquidada',
                    value: 'cd'
                },
                {
                    label: ' Soltero, sin unión marital de hecho',
                    name: 'Soltero sin unión marital de hecho',
                    value: 'ss'
                },
                {
                    label: ' Soltero, con unión marital de hecho',
                    name: 'Soltero con unión marital de hecho',
                    value: 'sc'
                },
                {
                    label: ' Soltero, por efecto de viudez',
                    name: 'Soltero por efecto de viudez',
                    value: 'sv'
                }
            ],
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'cv'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite la dirección de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite la dirección de la parte vendedora'
                }
            ],
            help: 'direccion',
            name: 'direccion_vendedor_5',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
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
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la parte vendedora'
                }
            ],
            help: 'municipio',
            name: 'municipio_vendedor_5',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
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
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la parte vendedora'
                }
            ],
            help: 'departamento',
            name: 'depart_vendedor_5',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
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
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de teléfono de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de teléfono de la parte vendedora'
                }
            ],
            help: 'telefono',
            name: 'telefono_vendedor_5',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
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
                            k: 'tipo_persona_v_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el correo electrónico de la persona encargada como representante de la empresa vendedora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_v_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte vendedora'
                }
            ],
            help: 'correo',
            name: 'correo_vendedor_5',
            prereq: [
                {
                    k: 'vendedor_2',
                    v: 's'
                },
                {
                    k: 'vendedor_3',
                    v: 's'
                },
                {
                    k: 'vendedor_4',
                    v: 's'
                },
                {
                    k: 'vendedor_5',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: 'Seleccione el tipo de persona',
            name: 'tipo_persona_c_1',
            options: [
                {
                    name: 'Natural',
                    value: 'na'
                },
                {
                    name: 'Jurídica',
                    value: 'ju'
                }
            ],
            type: 'clausula',
            value: 'na'
        },
        {
            description: 'Digite el nombre de la empresa',
            help: 'nombre_empresa',
            name: 'nombre_empresa_comprador_1',
            prereq: [
                {
                    k: 'tipo_persona_c_1',
                    v: 'ju'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número Nit de la empresa',
            help: 'nit_empresa',
            name: 'nit_empresa_comprador_1',
            prereq: [
                {
                    k: 'tipo_persona_c_1',
                    v: 'ju'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la ciudad en la que está ubicada la cámara de comercio en la que está inscrita la empresa',
            help: 'municipio',
            name: 'camara_comercio_empresa_comprador_1',
            prereq: [
                {
                    k: 'tipo_persona_c_1',
                    v: 'ju'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Cuál es el tipo de representante?',
            help: 'tipo_repre',
            name: 'tipo_representante_empresa_comprador_1',
            options: [
                {
                    label: ' representante legal suplente',
                    name: 'Representante legal suplente',
                    value: 'rs'
                },
                {
                    label: ' representante legal',
                    name: 'Representante legal',
                    value: 'rl'
                },
                {
                    label: ' apoderado',
                    name: 'Apoderado',
                    value: 'a'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_c_1',
                    v: 'ju'
                }
            ],
            type: 'select',
            value: 'rs'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el nombre completo de la parte compradora'
                }
            ],
            help: 'nombre',
            name: 'nombre_comprador_1',
            type: 'name'
        },
        {
            description: 'Seleccione el sexo de la parte compradora',
            name: 'sexo_comprador_1',
            options: [
                {
                    name: 'Masculino',
                    value: 'h'
                },
                {
                    name: 'Femenino',
                    value: 'm'
                }
            ],
            type: 'clausula',
            value: 'h'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la parte compradora'
                }
            ],
            help: 'tipo_documento',
            name: 'tipo_documento_comprador_1',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
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
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte compradora'
                }
            ],
            help: 'cedula',
            name: 'cedula_comprador_1',
            prereq: [
                {
                    k: 'tipo_documento_comprador_1',
                    v: 'cc'
                }
            ],
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte compradora'
                }
            ],
            help: 'cedula',
            name: 'cedulae_comprador_1',
            prereq: [
                {
                    k: 'tipo_documento_comprador_1',
                    v: 'ce'
                }
            ],
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte compradora'
                }
            ],
            help: 'pasaporte',
            name: 'pasaporte_comprador_1',
            prereq: [
                {
                    k: 'tipo_documento_comprador_1',
                    v: 'pa'
                }
            ],
            type: 'name'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la parte compradora'
                }
            ],
            help: 'municipio',
            name: 'municipio_expe_documento_comprador_1',
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el estado civil de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el estado civil de la parte compradora'
                }
            ],
            help: 'estado_civil',
            name: 'estado_comprador_1',
            options: [
                {
                    label: ' Casado, con sociedad conyugal vigente',
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cv'
                },
                {
                    label: ' Casado, con sociedad conyugal disuelta y liquidada',
                    name: 'Casado con sociedad conyugal disuelta y liquidada',
                    value: 'cd'
                },
                {
                    label: ' Soltero, sin unión marital de hecho',
                    name: 'Soltero sin unión marital de hecho',
                    value: 'ss'
                },
                {
                    label: ' Soltero, con unión marital de hecho',
                    name: 'Soltero con unión marital de hecho',
                    value: 'sc'
                },
                {
                    label: ' Soltero, por efecto de viudez',
                    name: 'Soltero por efecto de viudez',
                    value: 'sv'
                }
            ],
            type: 'select',
            value: 'cv'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite la dirección de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite la dirección de la parte compradora'
                }
            ],
            help: 'direccion',
            name: 'direccion_comprador_1',
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la parte compradora'
                }
            ],
            help: 'municipio',
            name: 'municipio_comprador_1',
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la parte compradora'
                }
            ],
            help: 'departamento',
            name: 'depart_comprador_1',
            type: 'text'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de teléfono de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de teléfono de la parte compradora'
                }
            ],
            help: 'telefono',
            name: 'telefono_comprador_1',
            type: 'phone'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el correo electrónico de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_1',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte compradora'
                }
            ],
            help: 'correo',
            name: 'correo_comprador_1',
            type: 'email'
        },
        {
            description: '¿Desea agregar otro comprador?',
            name: 'comprador_2',
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
            description: 'Seleccione el tipo de persona',
            name: 'tipo_persona_c_2',
            options: [
                {
                    name: 'Natural',
                    value: 'na'
                },
                {
                    name: 'Jurídica',
                    value: 'ju'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'na'
        },
        {
            description: 'Digite el nombre de la empresa',
            help: 'nombre_empresa',
            name: 'nombre_empresa_comprador_2',
            prereq: [
                {
                    k: 'tipo_persona_c_2',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número Nit de la empresa',
            help: 'nit_empresa',
            name: 'nit_empresa_comprador_2',
            prereq: [
                {
                    k: 'tipo_persona_c_2',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la ciudad en la que está ubicada la cámara de comercio en la que está inscrita la empresa',
            help: 'municipio',
            name: 'camara_comercio_empresa_comprador_2',
            prereq: [
                {
                    k: 'tipo_persona_c_2',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Cuál es el tipo de representante?',
            help: 'tipo_repre',
            name: 'tipo_representante_empresa_comprador_2',
            options: [
                {
                    label: ' representante legal suplente',
                    name: 'Representante legal suplente',
                    value: 'rs'
                },
                {
                    label: ' representante legal',
                    name: 'Representante legal',
                    value: 'rl'
                },
                {
                    label: ' apoderado',
                    name: 'Apoderado',
                    value: 'a'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_c_2',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'rs'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el nombre completo de la parte compradora'
                }
            ],
            help: 'nombre',
            name: 'nombre_comprador_2',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Seleccione el sexo de la parte compradora',
            name: 'sexo_comprador_2',
            options: [
                {
                    name: 'Masculino',
                    value: 'h'
                },
                {
                    name: 'Femenino',
                    value: 'm'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'h'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la parte compradora'
                }
            ],
            help: 'tipo_documento',
            name: 'tipo_documento_comprador_2',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
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
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte compradora'
                }
            ],
            help: 'cedula',
            name: 'cedula_comprador_2',
            prereq: [
                {
                    k: 'tipo_documento_comprador_2',
                    v: 'cc'
                },
                {
                    k: 'comprador_2',
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
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte compradora'
                }
            ],
            help: 'cedula',
            name: 'cedulae_comprador_2',
            prereq: [
                {
                    k: 'tipo_documento_comprador_2',
                    v: 'ce'
                },
                {
                    k: 'comprador_2',
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
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte compradora'
                }
            ],
            help: 'pasaporte',
            name: 'pasaporte_comprador_2',
            prereq: [
                {
                    k: 'tipo_documento_comprador_2',
                    v: 'pa'
                },
                {
                    k: 'comprador_2',
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
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la parte compradora'
                }
            ],
            help: 'municipio',
            name: 'municipio_expe_documento_comprador_2',
            prereq: [
                {
                    k: 'comprador_2',
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
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el estado civil de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el estado civil de la parte compradora'
                }
            ],
            help: 'estado_civil',
            name: 'estado_comprador_2',
            options: [
                {
                    label: ' Casado, con sociedad conyugal vigente',
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cv'
                },
                {
                    label: ' Casado, con sociedad conyugal disuelta y liquidada',
                    name: 'Casado con sociedad conyugal disuelta y liquidada',
                    value: 'cd'
                },
                {
                    label: ' Soltero, sin unión marital de hecho',
                    name: 'Soltero sin unión marital de hecho',
                    value: 'ss'
                },
                {
                    label: ' Soltero, con unión marital de hecho',
                    name: 'Soltero con unión marital de hecho',
                    value: 'sc'
                },
                {
                    label: ' Soltero, por efecto de viudez',
                    name: 'Soltero por efecto de viudez',
                    value: 'sv'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'cv'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite la dirección de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite la dirección de la parte compradora'
                }
            ],
            help: 'direccion',
            name: 'direccion_comprador_2',
            prereq: [
                {
                    k: 'comprador_2',
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
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la parte compradora'
                }
            ],
            help: 'municipio',
            name: 'municipio_comprador_2',
            prereq: [
                {
                    k: 'comprador_2',
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
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la parte compradora'
                }
            ],
            help: 'departamento',
            name: 'depart_comprador_2',
            prereq: [
                {
                    k: 'comprador_2',
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
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de teléfono de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de teléfono de la parte compradora'
                }
            ],
            help: 'telefono',
            name: 'telefono_comprador_2',
            prereq: [
                {
                    k: 'comprador_2',
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
                            k: 'tipo_persona_c_2',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el correo electrónico de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_2',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte compradora'
                }
            ],
            help: 'correo',
            name: 'correo_comprador_2',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: '¿Desea agregar otro comprador?',
            name: 'comprador_3',
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
                    k: 'comprador_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Seleccione el tipo de persona',
            name: 'tipo_persona_c_3',
            options: [
                {
                    name: 'Natural',
                    value: 'na'
                },
                {
                    name: 'Jurídica',
                    value: 'ju'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'na'
        },
        {
            description: 'Digite el nombre de la empresa',
            help: 'nombre_empresa',
            name: 'nombre_empresa_comprador_3',
            prereq: [
                {
                    k: 'tipo_persona_c_3',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número Nit de la empresa',
            help: 'nit_empresa',
            name: 'nit_empresa_comprador_3',
            prereq: [
                {
                    k: 'tipo_persona_c_3',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la ciudad en la que está ubicada la cámara de comercio en la que está inscrita la empresa',
            help: 'municipio',
            name: 'camara_comercio_empresa_comprador_3',
            prereq: [
                {
                    k: 'tipo_persona_c_3',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Cuál es el tipo de representante?',
            help: 'tipo_repre',
            name: 'tipo_representante_empresa_comprador_3',
            options: [
                {
                    label: ' representante legal suplente',
                    name: 'Representante legal suplente',
                    value: 'rs'
                },
                {
                    label: ' representante legal',
                    name: 'Representante legal',
                    value: 'rl'
                },
                {
                    label: ' apoderado',
                    name: 'Apoderado',
                    value: 'a'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_c_3',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'rs'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el nombre completo de la parte compradora'
                }
            ],
            help: 'nombre',
            name: 'nombre_comprador_3',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Seleccione el sexo de la parte compradora',
            name: 'sexo_comprador_3',
            options: [
                {
                    name: 'Masculino',
                    value: 'h'
                },
                {
                    name: 'Femenino',
                    value: 'm'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'h'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la parte compradora'
                }
            ],
            help: 'tipo_documento',
            name: 'tipo_documento_comprador_3',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
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
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte compradora'
                }
            ],
            help: 'cedula',
            name: 'cedula_comprador_3',
            prereq: [
                {
                    k: 'tipo_documento_comprador_3',
                    v: 'cc'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
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
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte compradora'
                }
            ],
            help: 'cedula',
            name: 'cedulae_comprador_3',
            prereq: [
                {
                    k: 'tipo_documento_comprador_3',
                    v: 'ce'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
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
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte compradora'
                }
            ],
            help: 'pasaporte',
            name: 'pasaporte_comprador_3',
            prereq: [
                {
                    k: 'tipo_documento_comprador_3',
                    v: 'pa'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
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
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la parte compradora'
                }
            ],
            help: 'municipio',
            name: 'municipio_expe_documento_comprador_3',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
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
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el estado civil de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el estado civil de la parte compradora'
                }
            ],
            help: 'estado_civil',
            name: 'estado_comprador_3',
            options: [
                {
                    label: ' Casado, con sociedad conyugal vigente',
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cv'
                },
                {
                    label: ' Casado, con sociedad conyugal disuelta y liquidada',
                    name: 'Casado con sociedad conyugal disuelta y liquidada',
                    value: 'cd'
                },
                {
                    label: ' Soltero, sin unión marital de hecho',
                    name: 'Soltero sin unión marital de hecho',
                    value: 'ss'
                },
                {
                    label: ' Soltero, con unión marital de hecho',
                    name: 'Soltero con unión marital de hecho',
                    value: 'sc'
                },
                {
                    label: ' Soltero, por efecto de viudez',
                    name: 'Soltero por efecto de viudez',
                    value: 'sv'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'cv'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite la dirección de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite la dirección de la parte compradora'
                }
            ],
            help: 'direccion',
            name: 'direccion_comprador_3',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
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
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la parte compradora'
                }
            ],
            help: 'municipio',
            name: 'municipio_comprador_3',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
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
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la parte compradora'
                }
            ],
            help: 'departamento',
            name: 'depart_comprador_3',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
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
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de teléfono de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de teléfono de la parte compradora'
                }
            ],
            help: 'telefono',
            name: 'telefono_comprador_3',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
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
                            k: 'tipo_persona_c_3',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el correo electrónico de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_3',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte compradora'
                }
            ],
            help: 'correo',
            name: 'correo_comprador_3',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: '¿Desea agregar otro comprador?',
            name: 'comprador_4',
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
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Seleccione el tipo de persona',
            name: 'tipo_persona_c_4',
            options: [
                {
                    name: 'Natural',
                    value: 'na'
                },
                {
                    name: 'Jurídica',
                    value: 'ju'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'na'
        },
        {
            description: 'Digite el nombre de la empresa',
            help: 'nombre_empresa',
            name: 'nombre_empresa_comprador_4',
            prereq: [
                {
                    k: 'tipo_persona_c_4',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número Nit de la empresa',
            help: 'nit_empresa',
            name: 'nit_empresa_comprador_4',
            prereq: [
                {
                    k: 'tipo_persona_c_4',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la ciudad en la que está ubicada la cámara de comercio en la que está inscrita la empresa',
            help: 'municipio',
            name: 'camara_comercio_empresa_comprador_4',
            prereq: [
                {
                    k: 'tipo_persona_c_4',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Cuál es el tipo de representante?',
            help: 'tipo_repre',
            name: 'tipo_representante_empresa_comprador_4',
            options: [
                {
                    label: ' representante legal suplente',
                    name: 'Representante legal suplente',
                    value: 'rs'
                },
                {
                    label: ' representante legal',
                    name: 'Representante legal',
                    value: 'rl'
                },
                {
                    label: ' apoderado',
                    name: 'Apoderado',
                    value: 'a'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_c_4',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'rs'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el nombre completo de la parte compradora'
                }
            ],
            help: 'nombre',
            name: 'nombre_comprador_4',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Seleccione el sexo de la parte compradora',
            name: 'sexo_comprador_4',
            options: [
                {
                    name: 'Masculino',
                    value: 'h'
                },
                {
                    name: 'Femenino',
                    value: 'm'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'h'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la parte compradora'
                }
            ],
            help: 'tipo_documento',
            name: 'tipo_documento_comprador_4',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
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
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte compradora'
                }
            ],
            help: 'cedula',
            name: 'cedula_comprador_4',
            prereq: [
                {
                    k: 'tipo_documento_comprador_4',
                    v: 'cc'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
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
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte compradora'
                }
            ],
            help: 'cedula',
            name: 'cedulae_comprador_4',
            prereq: [
                {
                    k: 'tipo_documento_comprador_4',
                    v: 'ce'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
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
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte compradora'
                }
            ],
            help: 'pasaporte',
            name: 'pasaporte_comprador_4',
            prereq: [
                {
                    k: 'tipo_documento_comprador_4',
                    v: 'pa'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
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
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la parte compradora'
                }
            ],
            help: 'municipio',
            name: 'municipio_expe_documento_comprador_4',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
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
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el estado civil de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el estado civil de la parte compradora'
                }
            ],
            help: 'estado_civil',
            name: 'estado_comprador_4',
            options: [
                {
                    label: ' Casado, con sociedad conyugal vigente',
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cv'
                },
                {
                    label: ' Casado, con sociedad conyugal disuelta y liquidada',
                    name: 'Casado con sociedad conyugal disuelta y liquidada',
                    value: 'cd'
                },
                {
                    label: ' Soltero, sin unión marital de hecho',
                    name: 'Soltero sin unión marital de hecho',
                    value: 'ss'
                },
                {
                    label: ' Soltero, con unión marital de hecho',
                    name: 'Soltero con unión marital de hecho',
                    value: 'sc'
                },
                {
                    label: ' Soltero, por efecto de viudez',
                    name: 'Soltero por efecto de viudez',
                    value: 'sv'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'cv'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite la dirección de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite la dirección de la parte compradora'
                }
            ],
            help: 'direccion',
            name: 'direccion_comprador_4',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
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
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la parte compradora'
                }
            ],
            help: 'municipio',
            name: 'municipio_comprador_4',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
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
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la parte compradora'
                }
            ],
            help: 'departamento',
            name: 'depart_comprador_4',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
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
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de teléfono de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de teléfono de la parte compradora'
                }
            ],
            help: 'telefono',
            name: 'telefono_comprador_4',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
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
                            k: 'tipo_persona_c_4',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el correo electrónico de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_4',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte compradora'
                }
            ],
            help: 'correo',
            name: 'correo_comprador_4',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: '¿Desea agregar otro comprador?',
            name: 'comprador_5',
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
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Seleccione el tipo de persona',
            name: 'tipo_persona_c_5',
            options: [
                {
                    name: 'Natural',
                    value: 'na'
                },
                {
                    name: 'Jurídica',
                    value: 'ju'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'na'
        },
        {
            description: 'Digite el nombre de la empresa',
            help: 'nombre_empresa',
            name: 'nombre_empresa_comprador_5',
            prereq: [
                {
                    k: 'tipo_persona_c_5',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número Nit de la empresa',
            help: 'nit_empresa',
            name: 'nit_empresa_comprador_5',
            prereq: [
                {
                    k: 'tipo_persona_c_5',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite la ciudad en la que está ubicada la cámara de comercio en la que está inscrita la empresa',
            help: 'municipio',
            name: 'camara_comercio_empresa_comprador_5',
            prereq: [
                {
                    k: 'tipo_persona_c_5',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
                    v: 's'
                }
            ],
            type: 'text'
        },
        {
            description: '¿Cuál es el tipo de representante?',
            help: 'tipo_repre',
            name: 'tipo_representante_empresa_comprador_5',
            options: [
                {
                    label: ' representante legal suplente',
                    name: 'Representante legal suplente',
                    value: 'rs'
                },
                {
                    label: ' representante legal',
                    name: 'Representante legal',
                    value: 'rl'
                },
                {
                    label: ' apoderado',
                    name: 'Apoderado',
                    value: 'a'
                }
            ],
            prereq: [
                {
                    k: 'tipo_persona_c_5',
                    v: 'ju'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'rs'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el nombre completo de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el nombre completo de la parte compradora'
                }
            ],
            help: 'nombre',
            name: 'nombre_comprador_5',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Seleccione el sexo de la parte compradora',
            name: 'sexo_comprador_5',
            options: [
                {
                    name: 'Masculino',
                    value: 'h'
                },
                {
                    name: 'Femenino',
                    value: 'm'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'h'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el tipo de documento de la parte compradora'
                }
            ],
            help: 'tipo_documento',
            name: 'tipo_documento_comprador_5',
            options: [
                {
                    name: 'Cédula de Ciudadanía',
                    value: 'cc'
                },
                {
                    name: 'Cédula de Extranjería',
                    value: 'ce'
                },
                {
                    name: 'Pasaporte',
                    value: 'pa'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
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
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de ciudadanía de la parte compradora'
                }
            ],
            help: 'cedula',
            name: 'cedula_comprador_5',
            prereq: [
                {
                    k: 'tipo_documento_comprador_5',
                    v: 'cc'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
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
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de cédula de extranjería de la parte compradora'
                }
            ],
            help: 'cedula',
            name: 'cedulae_comprador_5',
            prereq: [
                {
                    k: 'tipo_documento_comprador_5',
                    v: 'ce'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
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
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número del pasaporte de la parte compradora'
                }
            ],
            help: 'pasaporte',
            name: 'pasaporte_comprador_5',
            prereq: [
                {
                    k: 'tipo_documento_comprador_5',
                    v: 'pa'
                },
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
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
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio donde fue expedido el documento de identificación de la parte compradora'
                }
            ],
            help: 'municipio',
            name: 'municipio_expe_documento_comprador_5',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
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
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Seleccione el estado civil de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Seleccione el estado civil de la parte compradora'
                }
            ],
            help: 'estado_civil',
            name: 'estado_comprador_5',
            options: [
                {
                    label: ' Casado, con sociedad conyugal vigente',
                    name: 'Casado con sociedad conyugal vigente',
                    value: 'cv'
                },
                {
                    label: ' Casado, con sociedad conyugal disuelta y liquidada',
                    name: 'Casado con sociedad conyugal disuelta y liquidada',
                    value: 'cd'
                },
                {
                    label: ' Soltero, sin unión marital de hecho',
                    name: 'Soltero sin unión marital de hecho',
                    value: 'ss'
                },
                {
                    label: ' Soltero, con unión marital de hecho',
                    name: 'Soltero con unión marital de hecho',
                    value: 'sc'
                },
                {
                    label: ' Soltero, por efecto de viudez',
                    name: 'Soltero por efecto de viudez',
                    value: 'sv'
                }
            ],
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
                    v: 's'
                }
            ],
            type: 'select',
            value: 'cv'
        },
        {
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite la dirección de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite la dirección de la parte compradora'
                }
            ],
            help: 'direccion',
            name: 'direccion_comprador_5',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
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
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el municipio de domicilio de la parte compradora'
                }
            ],
            help: 'municipio',
            name: 'municipio_comprador_5',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
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
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el departamento donde está ubicada la parte compradora'
                }
            ],
            help: 'departamento',
            name: 'depart_comprador_5',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
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
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el número de teléfono de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el número de teléfono de la parte compradora'
                }
            ],
            help: 'telefono',
            name: 'telefono_comprador_5',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
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
                            k: 'tipo_persona_c_5',
                            v: 'ju'
                        }
                    ],
                    text: 'Digite el correo electrónico de la persona encargada como representante de la empresa compradora'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_c_5',
                            v: 'na'
                        }
                    ],
                    text: 'Digite el correo electrónico de la parte compradora'
                }
            ],
            help: 'correo',
            name: 'correo_comprador_5',
            prereq: [
                {
                    k: 'comprador_2',
                    v: 's'
                },
                {
                    k: 'comprador_3',
                    v: 's'
                },
                {
                    k: 'comprador_4',
                    v: 's'
                },
                {
                    k: 'comprador_5',
                    v: 's'
                }
            ],
            type: 'email'
        },
        {
            description: 'Seleccione la fecha de firma de la promesa de compraventa',
            type: 'date',
            name: 'fecha_firma_compraventa'
        },
        {
            description: 'Seleccione el tipo de inmueble',
            name: 'tipo_inmueble',
            options: [
                {
                    label: 'Apartamento',
                    name: 'apartamento',
                    value: 'apa'
                },
                {
                    label: 'Casa',
                    name: 'casa',
                    value: 'cas'
                }
            ],
            type: 'clausula',
            value: 'apa'
        },
        {
            description: 'Digite el número del apartamento',
            help: 'numero_apart',
            name: 'apart_numero',
            prereq: [
                {
                    k: 'tipo_inmueble',
                    v: 'apa'
                }
            ],
            type: 'text'
        },
        {
            description: 'Digite el número de la casa',
            help: 'numero_casa',
            name: 'casa_numero',
            prereq: [
                {
                    k: 'tipo_inmueble',
                    v: 'cas'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el número de matrícula inmobiliaria del inmueble',
            help: 'matricula',
            name: 'numero_matricula_inmueble',
            type: 'name'
        },
        {
            description: 'Digite el nombre de la unidad donde está ubicado el inmuble',
            help: 'unidad_nombre',
            name: 'nombre_unidad',
            type: 'text'
        },
        {
            description: 'Digite la dirección de la unidad donde está ubicado el inmuble',
            help: 'direccion',
            name: 'direccion_unidad',
            type: 'text'
        },
        {
            description: 'Digite el municipio de la unidad donde está ubicado el inmuble',
            help: 'municipio',
            name: 'municipio_unidad',
            type: 'text'
        },
        {
            description: 'Digite el departamento de la unidad donde está ubicado el inmuble',
            help: 'departamento',
            name: 'departamento_unidad',
            type: 'text'
        },
        {
            description: '¿Desea agregar un parqueadero?',
            name: 'parqueadero_1',
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
            description: 'Digite el número del parqueadero',
            help: 'numero',
            name: 'numero_parq_1',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el número de la matrícula inmobiliaria del parqueadero',
            help: 'matricula',
            name: 'numero_matricula_parq_1',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: '¿Desea agregar otro parqueadero?',
            name: 'parqueadero_2',
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
                    k: 'parqueadero_1',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite el número del parqueadero',
            help: 'numero',
            name: 'numero_parq_2',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el número de la matrícula inmobiliaria del parqueadero',
            help: 'matricula',
            name: 'numero_matricula_parq_2',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: '¿Desea agregar otro parqueadero?',
            name: 'parqueadero_3',
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
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite el número del parqueadero',
            help: 'numero',
            name: 'numero_parq_3',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el número de la matrícula inmobiliaria del parqueadero',
            help: 'matricula',
            name: 'numero_matricula_parq_3',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: '¿Desea agregar otro parqueadero?',
            name: 'parqueadero_4',
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
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite el número del parqueadero',
            help: 'numero',
            name: 'numero_parq_4',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el número de la matrícula inmobiliaria del parqueadero',
            help: 'matricula',
            name: 'numero_matricula_parq_4',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: '¿Desea agregar otro parqueadero?',
            name: 'parqueadero_5',
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
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite el número del parqueadero',
            help: 'numero',
            name: 'numero_parq_5',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                },
                {
                    k: 'parqueadero_5',
                    v: 's'
                }
            ],
            type: 'number'
        },
        {
            description: 'Digite el número de la matrícula inmobiliaria del parqueadero',
            help: 'matricula',
            name: 'numero_matricula_parq_5',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                },
                {
                    k: 'parqueadero_5',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: '¿Desea agregar un cuarto útil/deposito?',
            name: 'cuarto_1',
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
            description: 'Digite el número del cuarto útil/deposito',
            help: 'numero',
            name: 'numero_cuarto_1',
            prereq: [
                {
                    k: 'cuarto_1',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el número de la matrícula inmobiliaria del cuarto útil/deposito',
            help: 'matricula',
            name: 'numero_matricula_cuarto_1',
            prereq: [
                {
                    k: 'cuarto_1',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: '¿Desea agregar otro cuarto útil/deposito?',
            name: 'cuarto_2',
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
                    k: 'cuarto_1',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite el número del cuarto útil/deposito',
            help: 'numero',
            name: 'numero_cuarto_2',
            prereq: [
                {
                    k: 'cuarto_1',
                    v: 's'
                },
                {
                    k: 'cuarto_2',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el número de la matrícula inmobiliaria del cuarto útil/deposito',
            help: 'matricula',
            name: 'numero_matricula_cuarto_2',
            prereq: [
                {
                    k: 'cuarto_1',
                    v: 's'
                },
                {
                    k: 'cuarto_2',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: '¿Desea agregar otro cuarto útil/deposito?',
            name: 'cuarto_3',
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
                    k: 'cuarto_1',
                    v: 's'
                },
                {
                    k: 'cuarto_2',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite el número del cuarto útil/deposito',
            help: 'numero',
            name: 'numero_cuarto_3',
            prereq: [
                {
                    k: 'cuarto_1',
                    v: 's'
                },
                {
                    k: 'cuarto_2',
                    v: 's'
                },
                {
                    k: 'cuarto_3',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el número de la matrícula inmobiliaria del cuarto útil/deposito',
            help: 'matricula',
            name: 'numero_matricula_cuarto_3',
            prereq: [
                {
                    k: 'cuarto_1',
                    v: 's'
                },
                {
                    k: 'cuarto_2',
                    v: 's'
                },
                {
                    k: 'cuarto_3',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: '¿Desea agregar otro cuarto útil/deposito?',
            name: 'cuarto_4',
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
                    k: 'cuarto_1',
                    v: 's'
                },
                {
                    k: 'cuarto_2',
                    v: 's'
                },
                {
                    k: 'cuarto_3',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite el número del cuarto útil/deposito',
            help: 'numero',
            name: 'numero_cuarto_4',
            prereq: [
                {
                    k: 'cuarto_1',
                    v: 's'
                },
                {
                    k: 'cuarto_2',
                    v: 's'
                },
                {
                    k: 'cuarto_3',
                    v: 's'
                },
                {
                    k: 'cuarto_4',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el número de la matrícula inmobiliaria del cuarto útil/deposito',
            help: 'matricula',
            name: 'numero_matricula_cuarto_4',
            prereq: [
                {
                    k: 'cuarto_1',
                    v: 's'
                },
                {
                    k: 'cuarto_2',
                    v: 's'
                },
                {
                    k: 'cuarto_3',
                    v: 's'
                },
                {
                    k: 'cuarto_4',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: '¿Desea agregar otro cuarto útil/deposito?',
            name: 'cuarto_5',
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
                    k: 'cuarto_1',
                    v: 's'
                },
                {
                    k: 'cuarto_2',
                    v: 's'
                },
                {
                    k: 'cuarto_3',
                    v: 's'
                },
                {
                    k: 'cuarto_4',
                    v: 's'
                }
            ],
            type: 'clausula',
            value: 'n'
        },
        {
            description: 'Digite el número del cuarto útil/deposito',
            help: 'numero',
            name: 'numero_cuarto_5',
            prereq: [
                {
                    k: 'cuarto_1',
                    v: 's'
                },
                {
                    k: 'cuarto_2',
                    v: 's'
                },
                {
                    k: 'cuarto_3',
                    v: 's'
                },
                {
                    k: 'cuarto_4',
                    v: 's'
                },
                {
                    k: 'cuarto_5',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el número de la matrícula inmobiliaria del cuarto útil/deposito',
            help: 'matricula',
            name: 'numero_matricula_cuarto_5',
            prereq: [
                {
                    k: 'parqueadero_1',
                    v: 's'
                },
                {
                    k: 'parqueadero_2',
                    v: 's'
                },
                {
                    k: 'parqueadero_3',
                    v: 's'
                },
                {
                    k: 'parqueadero_4',
                    v: 's'
                },
                {
                    k: 'parqueadero_5',
                    v: 's'
                }
            ],
            type: 'name'
        },
        {
            name: 'campo_texto',
            description: '¿Desea ingresar texto extra?',
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
            name: 'texto_extra',
            description: 'Ingrese el texto extra',
            type: 'text',
            prereq: [
                {
                    k: 'campo_texto',
                    v: 's'
                }
            ]
        },
        {
            description: 'Seleccione la fecha en la que se firma el presente contrato',
            help: 'fecha',
            name: 'fecha_firma',
            type: 'date'
        },
        {
            description: 'Digite el municipio donde se firma el presente contrato',
            help: 'municipio',
            name: 'municipio_firma',
            type: 'text'
        },
        {
            description: 'Digite el departamento donde se firma el presente contrato',
            help: 'municipio',
            name: 'departamento_firma',
            type: 'text'
        }
    ],
    operation: [],
    sign: [
        'tipo_persona_v_1',
        'nombre_empresa_vendedor_1',
        'nit_empresa_vendedor_1',
        'camara_comercio_empresa_vendedor_1',
        'tipo_representante_empresa_vendedor_1',
        'nombre_vendedor_1',
        'sexo_vendedor_1',
        'tipo_documento_vendedor_1',
        'cedula_vendedor_1',
        'cedulae_vendedor_1',
        'pasaporte_vendedor_1',
        'municipio_expe_documento_vendedor_1',
        'estado_vendedor_1',
        'direccion_vendedor_1',
        'municipio_vendedor_1',
        'depart_vendedor_1',
        'telefono_vendedor_1',
        'correo_vendedor_1',
        'vendedor_2',
        'tipo_persona_v_2',
        'nombre_empresa_vendedor_2',
        'nit_empresa_vendedor_2',
        'camara_comercio_empresa_vendedor_2',
        'tipo_representante_empresa_vendedor_2',
        'nombre_vendedor_2',
        'sexo_vendedor_2',
        'tipo_documento_vendedor_2',
        'cedula_vendedor_2',
        'cedulae_vendedor_2',
        'pasaporte_vendedor_2',
        'municipio_expe_documento_vendedor_2',
        'estado_vendedor_2',
        'direccion_vendedor_2',
        'municipio_vendedor_2',
        'depart_vendedor_2',
        'telefono_vendedor_2',
        'correo_vendedor_2',
        'vendedor_3',
        'tipo_persona_v_3',
        'nombre_empresa_vendedor_3',
        'nit_empresa_vendedor_3',
        'camara_comercio_empresa_vendedor_3',
        'tipo_representante_empresa_vendedor_3',
        'nombre_vendedor_3',
        'sexo_vendedor_3',
        'tipo_documento_vendedor_3',
        'cedula_vendedor_3',
        'cedulae_vendedor_3',
        'pasaporte_vendedor_3',
        'municipio_expe_documento_vendedor_3',
        'estado_vendedor_3',
        'direccion_vendedor_3',
        'municipio_vendedor_3',
        'depart_vendedor_3',
        'telefono_vendedor_3',
        'correo_vendedor_3',
        'vendedor_4',
        'tipo_persona_v_4',
        'nombre_empresa_vendedor_4',
        'nit_empresa_vendedor_4',
        'camara_comercio_empresa_vendedor_4',
        'tipo_representante_empresa_vendedor_4',
        'nombre_vendedor_4',
        'sexo_vendedor_4',
        'tipo_documento_vendedor_4',
        'cedula_vendedor_4',
        'cedulae_vendedor_4',
        'pasaporte_vendedor_4',
        'municipio_expe_documento_vendedor_4',
        'estado_vendedor_4',
        'direccion_vendedor_4',
        'municipio_vendedor_4',
        'depart_vendedor_4',
        'telefono_vendedor_4',
        'correo_vendedor_4',
        'vendedor_5',
        'tipo_persona_v_5',
        'nombre_empresa_vendedor_5',
        'nit_empresa_vendedor_5',
        'camara_comercio_empresa_vendedor_5',
        'tipo_representante_empresa_vendedor_5',
        'nombre_vendedor_5',
        'sexo_vendedor_5',
        'tipo_documento_vendedor_5',
        'cedula_vendedor_5',
        'cedulae_vendedor_5',
        'pasaporte_vendedor_5',
        'municipio_expe_documento_vendedor_5',
        'estado_vendedor_5',
        'direccion_vendedor_5',
        'municipio_vendedor_5',
        'depart_vendedor_5',
        'telefono_vendedor_5',
        'correo_vendedor_5',
        'tipo_persona_c_1',
        'nombre_empresa_comprador_1',
        'nit_empresa_comprador_1',
        'camara_comercio_empresa_comprador_1',
        'tipo_representante_empresa_comprador_1',
        'nombre_comprador_1',
        'sexo_comprador_1',
        'tipo_documento_comprador_1',
        'cedula_comprador_1',
        'cedulae_comprador_1',
        'pasaporte_comprador_1',
        'municipio_expe_documento_comprador_1',
        'estado_comprador_1',
        'direccion_comprador_1',
        'municipio_comprador_1',
        'depart_comprador_1',
        'telefono_comprador_1',
        'correo_comprador_1',
        'comprador_2',
        'tipo_persona_c_2',
        'nombre_empresa_comprador_2',
        'nit_empresa_comprador_2',
        'camara_comercio_empresa_comprador_2',
        'tipo_representante_empresa_comprador_2',
        'nombre_comprador_2',
        'sexo_comprador_2',
        'tipo_documento_comprador_2',
        'cedula_comprador_2',
        'cedulae_comprador_2',
        'pasaporte_comprador_2',
        'municipio_expe_documento_comprador_2',
        'estado_comprador_2',
        'direccion_comprador_2',
        'municipio_comprador_2',
        'depart_comprador_2',
        'telefono_comprador_2',
        'correo_comprador_2',
        'comprador_3',
        'tipo_persona_c_3',
        'nombre_empresa_comprador_3',
        'nit_empresa_comprador_3',
        'camara_comercio_empresa_comprador_3',
        'tipo_representante_empresa_comprador_3',
        'nombre_comprador_3',
        'sexo_comprador_3',
        'tipo_documento_comprador_3',
        'cedula_comprador_3',
        'cedulae_comprador_3',
        'pasaporte_comprador_3',
        'municipio_expe_documento_comprador_3',
        'estado_comprador_3',
        'direccion_comprador_3',
        'municipio_comprador_3',
        'depart_comprador_3',
        'telefono_comprador_3',
        'correo_comprador_3',
        'comprador_4',
        'tipo_persona_c_4',
        'nombre_empresa_comprador_4',
        'nit_empresa_comprador_4',
        'camara_comercio_empresa_comprador_4',
        'tipo_representante_empresa_comprador_4',
        'nombre_comprador_4',
        'sexo_comprador_4',
        'tipo_documento_comprador_4',
        'cedula_comprador_4',
        'cedulae_comprador_4',
        'pasaporte_comprador_4',
        'municipio_expe_documento_comprador_4',
        'estado_comprador_4',
        'direccion_comprador_4',
        'municipio_comprador_4',
        'depart_comprador_4',
        'telefono_comprador_4',
        'correo_comprador_4',
        'comprador_5',
        'tipo_persona_c_5',
        'nombre_empresa_comprador_5',
        'nit_empresa_comprador_5',
        'camara_comercio_empresa_comprador_5',
        'tipo_representante_empresa_comprador_5',
        'nombre_comprador_5',
        'sexo_comprador_5',
        'tipo_documento_comprador_5',
        'cedula_comprador_5',
        'cedulae_comprador_5',
        'pasaporte_comprador_5',
        'municipio_expe_documento_comprador_5',
        'estado_comprador_5',
        'direccion_comprador_5',
        'municipio_comprador_5',
        'depart_comprador_5',
        'telefono_comprador_5',
        'correo_comprador_5',
        'tipo_inmueble',
        'apart_numero',
        'casa_numero',
        'numero_matricula_inmueble',
        'nombre_unidad',
        'direccion_unidad',
        'municipio_unidad',
        'departamento_unidad',
        'parqueadero_1',
        'numero_parq_1',
        'numero_matricula_parq_1',
        'parqueadero_2',
        'numero_parq_2',
        'numero_matricula_parq_2',
        'parqueadero_3',
        'numero_parq_3',
        'numero_matricula_parq_3',
        'parqueadero_4',
        'numero_parq_4',
        'numero_matricula_parq_4',
        'parqueadero_5',
        'numero_parq_5',
        'numero_matricula_parq_5',
        'cuarto_1',
        'numero_cuarto_1',
        'numero_matricula_cuarto_1',
        'cuarto_2',
        'numero_cuarto_2',
        'numero_matricula_cuarto_2',
        'cuarto_3',
        'numero_cuarto_3',
        'numero_matricula_cuarto_3',
        'cuarto_4',
        'numero_cuarto_4',
        'numero_matricula_cuarto_4',
        'cuarto_5',
        'numero_cuarto_5',
        'numero_matricula_cuarto_5',
        'fecha_firma',
        'municipio_firma',
        'departamento_firma'
    ],
    signatureProfile: [
        {
            name: 'nombre_vendedor_1',
            phone: 'telefono_vendedor_1',
            identification: 'cedula_vendedor_1|cedulae_vendedor_1|pasaporte_vendedor_1',
            email: 'correo_vendedor_1',
            type: 'vendedor_1'
        },
        {
            name: 'nombre_vendedor_2',
            phone: 'telefono_vendedor_2',
            identification: 'cedula_vendedor_2|cedulae_vendedor_2|pasaporte_vendedor_2',
            email: 'correo_vendedor_2',
            type: 'vendedor_2'
        },
        {
            name: 'nombre_vendedor_3',
            phone: 'telefono_vendedor_3',
            identification: 'cedula_vendedor_3|cedulae_vendedor_3|pasaporte_vendedor_3',
            email: 'correo_vendedor_3',
            type: 'vendedor_3'
        },
        {
            name: 'nombre_vendedor_4',
            phone: 'telefono_vendedor_4',
            identification: 'cedula_vendedor_4|cedulae_vendedor_4|pasaporte_vendedor_4',
            email: 'correo_vendedor_4',
            type: 'vendedor_4'
        },
        {
            name: 'nombre_vendedor_5',
            phone: 'telefono_vendedor_5',
            identification: 'cedula_vendedor_5|cedulae_vendedor_5|pasaporte_vendedor_5',
            email: 'correo_vendedor_5',
            type: 'vendedor_5'
        },
        {
            name: 'nombre_comprador_1',
            phone: 'telefono_comprador_1',
            identification: 'cedula_comprador_1|cedulae_comprador_1|pasaporte_comprador_1',
            email: 'correo_comprador_1',
            type: 'comprador_1'
        },
        {
            name: 'nombre_comprador_2',
            phone: 'telefono_comprador_2',
            identification: 'cedula_comprador_2|cedulae_comprador_2|pasaporte_comprador_2',
            email: 'correo_comprador_2',
            type: 'comprador_2'
        },
        {
            name: 'nombre_comprador_3',
            phone: 'telefono_comprador_3',
            identification: 'cedula_comprador_3|cedulae_comprador_3|pasaporte_comprador_3',
            email: 'correo_comprador_3',
            type: 'comprador_3'
        },
        {
            name: 'nombre_comprador_4',
            phone: 'telefono_comprador_4',
            identification: 'cedula_comprador_4|cedulae_comprador_4|pasaporte_comprador_4',
            email: 'correo_comprador_4',
            type: 'comprador_4'
        },
        {
            name: 'nombre_comprador_5',
            phone: 'telefono_comprador_5',
            identification: 'cedula_comprador_5|cedulae_comprador_5|pasaporte_comprador_5',
            email: 'correo_comprador_5',
            type: 'comprador_5'
        }
    ],
    preFill: [],
    preBuildData: [
        'document_code',
        'correo_enviar'
    ],
    name: 'OTROSÍ PROMESA DE COMPRAVENTA',
    help: {
        nombre: 'Ejemplo: Paola Lucia Rueda Daza',
        tipo_documento: 'Ejemplo: Cédula de ciudadanía',
        cedula: 'Ejemplo: 1234567890',
        pasaporte: 'Ejemplo: AAA1234567',
        municipio: 'Ejemplo: Medellín',
        estado_civil: 'Ejemplo: Casado con sociedad conyugal vigente',
        nombre_empresa: 'Ejemplo: Home Capital S.A.S.',
        banco_nombre: 'Ejemplo: BANCOLOMBIA S.A.S.',
        tipo_repre: 'Ejemplo: Apoderado',
        nit_empresa: 'Ejemplo: 100.900.255-3',
        direccion: 'Ejemplo: Calle 15 #20-31',
        departamento: 'Ejemplo: Antioquia',
        telefono: 'Ejemplo: 3214567890',
        correo: 'Ejemplo: ejemplo@gmail.com',
        numero: 'Ejemplo: 10',
        numero_apart: 'Ejemplo: Torre 2 Piso 10',
        numero_casa: 'Ejemplo: 10G',
        matricula: 'Ejemplo: 50S23434 \n Este número se encuentra en el certificado de libertad y tradición del bien inmueble',
        unidad_nombre: 'Ejemplo: Bosque Verde',
        unidad_direccion: 'Ejemplo: Carrera 80 #20e',
        unidad_municipio: 'Ejemplo: Medellín',
        unidad_departamento: 'Ejemplo: Antioquia',
        fecha: 'Ejemplo: 27 de Noviembre 2021'
    },
    price: 5000,
    preBuild: true,
    company: ObjectId('618d299c3b775300099e6214'),
    build: 3
}