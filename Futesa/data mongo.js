{
    _id: ObjectId('62a7c76651fc27d23d929163'),
    config: [
        {
            name: 'fecha_nacimiento',
            type: 'date',
            description: 'Seleccione la fecha de nacimiento del candidato'
        },
        {
            name: 'ciudad_nacimiento',
            type: 'text',
            description: 'Ingrese la ciudad de nacimiento del candidato'
        },
        {
            name: 'rh',
            type: 'text',
            description: 'Ingrese el grupo sanguineo del candidato'
        },
        {
            name: 'direccion',
            type: 'text',
            description: 'Ingrese la dirección del candidato'
        },
        {
            name: 'barrio',
            type: 'text',
            description: 'Ingrese el barrio del candidato'
        },
        {
            name: 'ciudad',
            type: 'text',
            description: 'Ingrese la ciudad de residencia del candidato'
        },
        {
            name: 'estrato',
            type: 'text',
            description: 'Ingrese el estrato socioeconomico del candidato'
        },
        {
            name: 'tel_fijo',
            type: 'text',
            description: 'Ingrese el teléfono fijo del candidato'
        },
        {
            name: 'tel_cel_1',
            type: 'phone',
            description: 'Ingrese el teléfono célular del candidato'
        },
        {
            name: 'cel_2',
            type: 'clausula',
            description: '¿Desea ingresar un segundo teléfono célular?',
            value: 'n',
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
            name: 'tel_cel_2',
            type: 'phone',
            description: 'Ingrese el segundo teléfono célular del candidato',
            prereq: [
                {
                    k: 'cel_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'estado_civil',
            type: 'text',
            description: 'Ingrese el estado civil del candidato'
        },
        {
            name: 'num_hijos',
            type: 'number',
            description: 'Ingrese el número de hijos que tiene el candidato'
        },
        {
            name: 'num_personas_cargo',
            type: 'number',
            description: 'Ingrese el número de personas que tiene a cargo el candidato'
        },
        {
            name: 'estatura',
            type: 'text',
            description: 'Ingrese la estatura del candidato'
        },
        {
            name: 'peso',
            type: 'text',
            description: 'Ingrese el peso del candidato'
        },
        {
            name: 'fondo_pensiones',
            type: 'text',
            description: 'Ingrese el fondo de pensiones del candidato'
        },
        {
            name: 'correo_empleado',
            type: 'email',
            description: 'Ingrese el correo del candidato'
        },
        {
            name: 'enfermedades_pad',
            type: 'text',
            description: 'Ingrese las enfermedades padecidas por el candidato'
        },
        {
            name: 'num_libreta_militar',
            type: 'text',
            description: 'Ingrese el número de libreta militar del candidato'
        },
        {
            name: 'distrito',
            type: 'text',
            description: 'Ingrese el distrito del candidato'
        },
        {
            name: 'clase',
            type: 'text',
            description: 'Ingrese la clase del candidato'
        },
        {
            name: 'talla_camisa',
            type: 'text',
            description: 'Ingrese la talla de camisa del candidato'
        },
        {
            name: 'talla_pantalon',
            type: 'text',
            description: 'Ingrese la talla de pantalon del candidato'
        },
        {
            name: 'talla_zapato',
            type: 'text',
            description: 'Ingrese la talla de zapatos'
        },
        {
            name: 'licencia_moto',
            type: 'clausula',
            description: '¿El candidato tiene licencia de moto?',
            value: 'n',
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
            name: 'categoria_moto',
            type: 'text',
            description: 'Ingrese la categoría de moto que puede conducir el candidato',
            prereq: [
                {
                    k: 'licencia_moto',
                    v: 's'
                }
            ]
        },
        {
            name: 'posee_moto',
            type: 'select',
            description: '¿El candidato posee moto?',
            options: [
                {
                    label: 'No',
                    name: 'No',
                    value: 'n'
                },
                {
                    label: 'Si',
                    name: 'Si',
                    value: 's'
                }
            ],
            value: 'n'
        },
        {
            name: 'licencia_carro',
            type: 'clausula',
            description: '¿El candidato tiene licencia de carro?',
            value: 'n',
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
            name: 'categoria_carro',
            type: 'text',
            description: 'Ingrese la categoría de carro que puede conducir el candidato',
            prereq: [
                {
                    k: 'licencia_carro',
                    v: 's'
                }
            ]
        },
        {
            name: 'posee_carro',
            type: 'select',
            description: '¿El candidato posee carro?',
            options: [
                {
                    label: 'No',
                    name: 'No',
                    value: 'n'
                },
                {
                    label: 'Si',
                    name: 'Si',
                    value: 's'
                }
            ],
            value: 'n'
        },
        {
            name: 'nombres_fam_1',
            type: 'name',
            description: 'Ingrese los nombres y apellidos del primer familiar'
        },
        {
            name: 'parentesco_fam_1',
            type: 'text',
            description: 'Ingrese el parentesco del primer familiar'
        },
        {
            name: 'edad_fam_1',
            type: 'number',
            description: 'Ingrese la edad del primer familiar'
        },
        {
            name: 'escolar_fam_1',
            type: 'text',
            description: 'Ingrese el nivel de escolaridad del primer familiar'
        },
        {
            name: 'ocupac_fam_1',
            type: 'text',
            description: 'Ingrese la ocupación del primer familiar'
        },
        {
            name: 'tel_fam_1',
            type: 'phone',
            description: 'Ingrese el número de teléfono del primer familiar'
        },
        {
            name: 'convive_fam_1',
            type: 'select',
            description: '¿El candidato convive con el primer familiar?',
            options: [
                {
                    label: 'Si',
                    name: 'Si',
                    value: 's'
                },
                {
                    label: 'No',
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 's'
        },
        {
            name: 'fam_2',
            type: 'clausula',
            description: '¿Desea ingresar un segundo familiar?',
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
            name: 'nombres_fam_2',
            type: 'name',
            description: 'Ingrese los nombres y apellidos del segundo familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'parentesco_fam_2',
            type: 'text',
            description: 'Ingrese el parentesco del segundo familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'edad_fam_2',
            type: 'number',
            description: 'Ingrese la edad del segundo familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'escolar_fam_2',
            type: 'text',
            description: 'Ingrese el nivel de escolaridad del segundo familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'ocupac_fam_2',
            type: 'text',
            description: 'Ingrese la ocupación del segundo familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'tel_fam_2',
            type: 'phone',
            description: 'Ingrese el número de teléfono del segundo familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'convive_fam_2',
            type: 'select',
            description: '¿El candidato convive con el segundo familiar?',
            options: [
                {
                    label: 'Si',
                    name: 'Si',
                    value: 's'
                },
                {
                    label: 'No',
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 's',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'fam_3',
            type: 'clausula',
            description: '¿Desea ingresar un tercer familiar?',
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
            name: 'nombres_fam_3',
            type: 'name',
            description: 'Ingrese los nombres y apellidos del tercer familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'parentesco_fam_3',
            type: 'text',
            description: 'Ingrese el parentesco del tercer familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'edad_fam_3',
            type: 'number',
            description: 'Ingrese la edad del tercer familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'escolar_fam_3',
            type: 'text',
            description: 'Ingrese el nivel de escolaridad del tercer familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'ocupac_fam_3',
            type: 'text',
            description: 'Ingrese la ocupación del tercer familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'tel_fam_3',
            type: 'phone',
            description: 'Ingrese el número de teléfono del tercer familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'convive_fam_3',
            type: 'select',
            description: '¿El candidato convive con el tercer familiar?',
            options: [
                {
                    label: 'Si',
                    name: 'Si',
                    value: 's'
                },
                {
                    label: 'No',
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 's',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'fam_4',
            type: 'clausula',
            description: '¿Desea ingresar un cuarto familiar?',
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
            ],
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombres_fam_4',
            type: 'name',
            description: 'Ingrese los nombres y apellidos del cuarto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'parentesco_fam_4',
            type: 'text',
            description: 'Ingrese el parentesco del cuarto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'edad_fam_4',
            type: 'number',
            description: 'Ingrese la edad del cuarto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'escolar_fam_4',
            type: 'text',
            description: 'Ingrese el nivel de escolaridad del cuarto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'ocupac_fam_4',
            type: 'text',
            description: 'Ingrese la ocupación del cuarto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'tel_fam_4',
            type: 'phone',
            description: 'Ingrese el número de teléfono del cuarto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'convive_fam_4',
            type: 'select',
            description: '¿El candidato convive con el cuarto familiar?',
            options: [
                {
                    label: 'Si',
                    name: 'Si',
                    value: 's'
                },
                {
                    label: 'No',
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 's',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'fam_5',
            type: 'clausula',
            description: '¿Desea ingresar un quinto familiar?',
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
            ],
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombres_fam_5',
            type: 'name',
            description: 'Ingrese los nombres y apellidos del quinto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                },
                {
                    k: 'fam_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'parentesco_fam_5',
            type: 'text',
            description: 'Ingrese el parentesco del quinto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                },
                {
                    k: 'fam_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'edad_fam_5',
            type: 'number',
            description: 'Ingrese la edad del quinto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                },
                {
                    k: 'fam_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'escolar_fam_5',
            type: 'text',
            description: 'Ingrese el nivel de escolaridad del quinto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                },
                {
                    k: 'fam_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'ocupac_fam_5',
            type: 'text',
            description: 'Ingrese la ocupación del quinto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                },
                {
                    k: 'fam_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'tel_fam_5',
            type: 'phone',
            description: 'Ingrese el número de teléfono del quinto familiar',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                },
                {
                    k: 'fam_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'convive_fam_5',
            type: 'select',
            description: '¿El candidato convive con el quinto familiar?',
            options: [
                {
                    label: 'Si',
                    name: 'Si',
                    value: 's'
                },
                {
                    label: 'No',
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 's',
            prereq: [
                {
                    k: 'fam_2',
                    v: 's'
                },
                {
                    k: 'fam_3',
                    v: 's'
                },
                {
                    k: 'fam_4',
                    v: 's'
                },
                {
                    k: 'fam_5',
                    v: 's'
                }
            ]
        },
        {
            name: 'cargo_emp_1',
            type: 'text',
            description: 'Ingrese el cargo que desempeñó en la empresa 1'
        },
        {
            name: 'salario_emp_1',
            type: 'currency',
            description: 'Ingrese el salarió que recibía en la empresa 1'
        },
        {
            name: 'funciones_emp_1',
            type: 'text',
            description: 'Ingrese las funciones que desempeñaba en la empresa 1'
        },
        {
            name: 'programas_emp_1',
            type: 'text',
            description: 'Ingrese los programas que manejaba en la empresa 1'
        },
        {
            name: 'fecha_ing_emp_1',
            type: 'date',
            description: 'Seleccione la fecha de ingreso a la empresa 1'
        },
        {
            name: 'fecha_ret_emp_1',
            type: 'date',
            description: 'Seleccione la fecha de retiro de la empresa 1'
        },
        {
            name: 'motivo_ret_emp_1',
            type: 'text',
            description: 'Ingrese el motivo de retiro de la empresa 1'
        },
        {
            name: 'jefe_inmediato_emp_1',
            type: 'name',
            description: 'Ingrese el nombre del jefe inmediato de la empresa 1'
        },
        {
            name: 'tel_emp_1',
            type: 'text',
            description: 'Ingrese el teléfono fijo de la empresa 1'
        },
        {
            name: 'cel_emp_1',
            type: 'phone',
            description: 'Ingrese el teléfono célular de la empresa 1'
        },
        {
            name: 'cargo_emp_2',
            type: 'text',
            description: 'Ingrese el cargo que desempeñó en la empresa 2'
        },
        {
            name: 'salario_emp_2',
            type: 'currency',
            description: 'Ingrese el salarió que recibía en la empresa 2'
        },
        {
            name: 'funciones_emp_2',
            type: 'text',
            description: 'Ingrese las funciones que desempeñaba en la empresa 2'
        },
        {
            name: 'programas_emp_2',
            type: 'text',
            description: 'Ingrese los programas que manejaba en la empresa 2'
        },
        {
            name: 'fecha_ing_emp_2',
            type: 'date',
            description: 'Seleccione la fecha de ingreso a la empresa 2'
        },
        {
            name: 'fecha_ret_emp_2',
            type: 'date',
            description: 'Seleccione la fecha de retiro de la empresa 2'
        },
        {
            name: 'motivo_ret_emp_2',
            type: 'text',
            description: 'Ingrese el motivo de retiro de la empresa 2'
        },
        {
            name: 'jefe_inmediato_emp_2',
            type: 'name',
            description: 'Ingrese el nombre del jefe inmediato de la empresa 2'
        },
        {
            name: 'tel_emp_2',
            type: 'text',
            description: 'Ingrese el teléfono fijo de la empresa 2'
        },
        {
            name: 'cel_emp_2',
            type: 'phone',
            description: 'Ingrese el teléfono célular de la empresa 2'
        },
        {
            name: 'nombre_ref_1',
            type: 'name',
            description: 'Ingrese el nombre de la primera referencia personal'
        },
        {
            name: 'parentesco_ref_1',
            type: 'text',
            description: 'Ingrese el parentesco de la primera referencia personal'
        },
        {
            name: 'ocupacion_ref_1',
            type: 'text',
            description: 'Ingrese la ocupación de la primera referencia personal'
        },
        {
            name: 'tel_ref_1',
            type: 'text',
            description: 'Ingrese el teléfono fijo de la primera referencia personal'
        },
        {
            name: 'correo_ref_1',
            type: 'email',
            description: 'Ingrese el correo electrónico de la primera referencia personal'
        },
        {
            name: 'cel_ref_1',
            type: 'phone',
            description: 'Ingrese el teléfono célular de la primera referencia personal'
        },
        {
            name: 'nombre_ref_2',
            type: 'name',
            description: 'Ingrese el nombre de la segunda referencia personal'
        },
        {
            name: 'parentesco_ref_2',
            type: 'text',
            description: 'Ingrese el parentesco de la segunda referencia personal'
        },
        {
            name: 'ocupacion_ref_2',
            type: 'text',
            description: 'Ingrese la ocupación de la segunda referencia personal'
        },
        {
            name: 'tel_ref_2',
            type: 'text',
            description: 'Ingrese el teléfono fijo de la segunda referencia personal'
        },
        {
            name: 'correo_ref_2',
            type: 'email',
            description: 'Ingrese el correo electrónico de la segunda referencia personal'
        },
        {
            name: 'cel_ref_2',
            type: 'phone',
            description: 'Ingrese el teléfono célular de la segunda referencia personal'
        },
        {
            name: 'nombre_ref_3',
            type: 'name',
            description: 'Ingrese el nombre de la tercer referencia personal'
        },
        {
            name: 'parentesco_ref_3',
            type: 'text',
            description: 'Ingrese el parentesco de la tercer referencia personal'
        },
        {
            name: 'ocupacion_ref_3',
            type: 'text',
            description: 'Ingrese la ocupación de la tercer referencia personal'
        },
        {
            name: 'tel_ref_3',
            type: 'text',
            description: 'Ingrese el teléfono fijo de la tercer referencia personal'
        },
        {
            name: 'correo_ref_3',
            type: 'email',
            description: 'Ingrese el correo electrónico de la tercer referencia personal'
        },
        {
            name: 'cel_ref_3',
            type: 'phone',
            description: 'Ingrese el teléfono célular de la tercer referencia personal'
        },
        {
            name: 'recomendaciones_gen',
            type: 'text',
            description: 'Ingrese las recomendaciones generales'
        },
        {
            name: 'recomendaciones_esp',
            type: 'text',
            description: 'Ingrese las recomendaciones específicas'
        },
        {
            name: 'solicitud_documentacion',
            type: 'select',
            description: 'Me han solicitado la documentación requerida para mi afiliación, mis beneficiarios a la EPS y caja de compensación (CCF)?',
            options: [
                {
                    name: 'Si',
                    label: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    label: 'No',
                    value: 'n'
                }
            ],
            value: 's'
        },
        {
            name: 'info_arl',
            type: 'select',
            description: 'Recibí información sobre la administradora de riesgos laborales, (ARL, sura)?',
            options: [
                {
                    name: 'Si',
                    label: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    label: 'No',
                    value: 'n'
                }
            ],
            value: 's'
        },
        {
            name: 'vio_video',
            type: 'select',
            description: 'Recibí y visualice el video de induccion corporativo de Futesa S.A.S.?',
            options: [
                {
                    name: 'Si',
                    label: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    label: 'No',
                    value: 'n'
                }
            ],
            value: 's'
        },
        {
            name: 'info_rit',
            type: 'select',
            description: 'Recibí socialización sodel reglamento interno de trabajo?',
            options: [
                {
                    name: 'Si',
                    label: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    label: 'No',
                    value: 'n'
                }
            ],
            value: 's'
        },
        {
            name: 'info_acoso',
            type: 'select',
            description: 'Recibí socialización de la ley 1010 de 2006 sobre acoso laboral?',
            options: [
                {
                    name: 'Si',
                    label: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    label: 'No',
                    value: 'n'
                }
            ],
            value: 's'
        },
        {
            name: 'reglamento_unico',
            type: 'select',
            description: 'Recibí inducción sobre el reglamento único sector trabajo decreto 1072 de 2015?',
            options: [
                {
                    name: 'Si',
                    label: 'Si',
                    value: 's'
                },
                {
                    name: 'No',
                    label: 'No',
                    value: 'n'
                }
            ],
            value: 's'
        },
        {
            name: 'observaciones',
            type: 'text',
            description: 'Ingrese sus observaciones'
        },
        {
            name: 'fecha_entrega_faltante',
            type: 'date',
            description: 'Seleccione la fecha en la que se compromete a entregar los documentos faltantes'
        },
        {
            name: 'docs_faltantes',
            type: 'text',
            description: 'Ingrese los documentos faltantes que se compromete a entregar'
        },
        {
            name: 'perfil_edad',
            type: 'select',
            description: 'Seleccione el rango de edad en el que se encuentra',
            options: [
                {
                    label: 'Menor de 18 años.',
                    name: 'Menor de 18 años.',
                    value: '18'
                },
                {
                    label: '18-27 años',
                    name: '18-27 años',
                    value: '27'
                },
                {
                    label: '38-47 años',
                    name: '38-47 años',
                    value: '47'
                },
                {
                    label: '48 años o más',
                    name: '48 años o más',
                    value: '48_mas'
                }
            ],
            value: '18'
        },
        {
            name: 'perfil_estado_civil',
            type: 'select',
            description: 'Seleccione el estado civil',
            options: [
                {
                    label: 'Soltero (a)',
                    name: 'Soltero (a)',
                    value: 'solt'
                },
                {
                    label: 'Casado (a)/Unión libre',
                    name: 'Casado (a)/Unión libre',
                    value: 'libre'
                },
                {
                    label: 'Separado (a)/Divorciado',
                    name: 'Separado (a)/Divorciado',
                    value: 'divorc'
                },
                {
                    label: 'Viudo(a)',
                    name: 'Viudo(a)',
                    value: 'viudo'
                }
            ],
            value: 'solt'
        },
        {
            name: 'perfil_sexo',
            type: 'select',
            description: 'Seleccione el sexo',
            options: [
                {
                    label: 'Hombre',
                    name: 'Hombre',
                    value: 'h'
                },
                {
                    label: 'Mujer',
                    name: 'Mujer',
                    value: 'm'
                }
            ],
            value: 'h'
        },
        {
            name: 'perfil_num_per_cargo',
            type: 'select',
            description: 'Seleccione el número de personas que tiene a cargo',
            options: [
                {
                    label: '1 - 3 personas',
                    name: '1 - 3 personas',
                    value: '3'
                },
                {
                    label: '4 - 6 personas',
                    name: '4 - 6 personas',
                    value: '6'
                },
                {
                    label: 'Más de 6 personas',
                    name: 'Más de 6 personas',
                    value: 'mas_6'
                },
                {
                    label: 'Ninguna',
                    name: 'Ninguna',
                    value: 'ninguna'
                }
            ],
            value: '3'
        },
        {
            name: 'perfil_escolaridad',
            type: 'select',
            description: 'Seleccione el nivel de escolaridad',
            options: [
                {
                    label: 'Primaria',
                    name: 'Primaria',
                    value: 'prim'
                },
                {
                    label: 'Secundaria',
                    name: 'Secundaria',
                    value: 'secund'
                },
                {
                    label: 'Técnico / Tecnólogo',
                    name: 'Técnico / Tecnólogo',
                    value: 'tecnico'
                },
                {
                    label: 'Universitario',
                    name: 'Universitario',
                    value: 'uni'
                },
                {
                    label: 'Especialista / Maestro',
                    name: 'Especialista / Maestro',
                    value: 'esp'
                }
            ],
            value: 'prim'
        },
        {
            name: 'perfil_tenencia_viv',
            type: 'select',
            description: 'Seleccione la tenencia de vivienda',
            options: [
                {
                    label: 'Propia',
                    name: 'Propia',
                    value: 'propia'
                },
                {
                    label: 'Arrendada',
                    name: 'Arrendada',
                    value: 'arrend'
                },
                {
                    label: 'Familiar',
                    name: 'Familiar',
                    value: 'fam'
                },
                {
                    label: 'Compartida con otra(s) familia(s)',
                    name: 'Compartida con otra(s) familia(s)',
                    value: 'comp'
                }
            ],
            value: 'propia'
        },
        {
            name: 'perfil_tiempo_libre',
            type: 'select',
            description: 'Seleccione la opcion que corresponda al uso de su tiempo libre',
            options: [
                {
                    label: 'Otro trabajo',
                    name: 'Otro trabajo',
                    value: 'otro'
                },
                {
                    label: 'Labores domésticas',
                    name: 'Labores domésticas',
                    value: 'dom'
                },
                {
                    label: 'Recreación y Deporte',
                    name: 'Recreación y Deporte',
                    value: 'deporte'
                },
                {
                    label: 'Ninguno',
                    name: 'Ninguno',
                    value: 'ninguno'
                }
            ],
            value: 'otro'
        },
        {
            name: 'perfil_ingresos',
            type: 'select',
            description: 'Seleccione el promedio de ingresos',
            options: [
                {
                    label: 'Mínimo Legal (S.M.L)',
                    name: 'Mínimo Legal (S.M.L)',
                    value: 'sml'
                },
                {
                    label: 'Entre 1 a 3 S.M.L',
                    name: 'Entre 1 a 3 S.M.L',
                    value: '3_sml'
                },
                {
                    label: 'Entre 4 a 5 S.M.L',
                    name: 'Entre 4 a 5 S.M.L',
                    value: '5_sml'
                },
                {
                    label: 'Entre 5 y 6 S.M.L',
                    name: 'Entre 5 y 6 S.M.L',
                    value: '6_sml'
                },
                {
                    label: 'Más de 7 S.M.L',
                    name: 'Más de 7 S.M.L',
                    value: '7_sml'
                }
            ],
            value: 'sml'
        },
        {
            name: 'perfil_antiguedad',
            type: 'select',
            description: 'Seleccione la antigüedad en la empresa',
            options: [
                {
                    label: 'Menos de 1 año',
                    name: 'Menos de 1 año',
                    value: '1_ano'
                },
                {
                    label: 'De 1 a 5 años',
                    name: 'De 1 a 5 años',
                    value: '5_ano'
                },
                {
                    label: 'De 5 a 10 años',
                    name: 'De 5 a 10 años',
                    value: '10_ano'
                },
                {
                    label: 'De 10 a 15 años',
                    name: 'De 10 a 15 años',
                    value: '15_ano'
                },
                {
                    label: 'Más de 15 años',
                    name: 'Más de 15 años',
                    value: '15_ano'
                }
            ],
            value: '1_ano'
        },
        {
            name: 'perfil_antiguedad_cargo',
            type: 'select',
            description: 'Seleccione la antigüedad en el cargo',
            options: [
                {
                    label: 'Menos de 1 año',
                    name: 'Menos de 1 año',
                    value: '1_ano'
                },
                {
                    label: 'De 1 a 5 años',
                    name: 'De 1 a 5 años',
                    value: '5_ano'
                },
                {
                    label: 'De 5 a 10 años',
                    name: 'De 5 a 10 años',
                    value: '10_ano'
                },
                {
                    label: 'De 10 a 15 años',
                    name: 'De 10 a 15 años',
                    value: '15_ano'
                },
                {
                    label: 'Más de 15 años',
                    name: 'Más de 15 años',
                    value: '15_ano'
                }
            ],
            value: '1_ano'
        },
        {
            name: 'perfil_tipo_cont',
            type: 'select',
            description: 'Seleccione el tipo de contratación',
            options: [
                {
                    label: 'Termino fijo',
                    name: 'Termino fijo',
                    value: 'fijo'
                },
                {
                    label: 'Indefinido',
                    name: 'Indefinido',
                    value: 'indefinido'
                },
                {
                    label: 'Obra o labor',
                    name: 'Obra o labor',
                    value: 'obra_labor'
                },
                {
                    label: 'Prestación de servicios',
                    name: 'Prestación de servicios',
                    value: 'servicios'
                }
            ],
            value: 'fijo'
        },
        {
            name: 'perfil_act_salud',
            type: 'select',
            description: 'Seleccione en qué actividad de salud realizada por la empresa ha participado',
            options: [
                {
                    label: 'Vacunación',
                    name: 'Vacunación',
                    value: 'vac'
                },
                {
                    label: 'Salud oral',
                    name: 'Salud oral',
                    value: 'oral'
                },
                {
                    label: 'Exámenes de laboratorios y otros',
                    name: 'Exámenes de laboratorios y otros',
                    value: 'exam'
                },
                {
                    label: 'Exámenes médicos anuales',
                    name: 'Exámenes médicos anuales',
                    value: 'exam_med'
                },
                {
                    label: 'Ninguna',
                    name: 'Ninguna',
                    value: 'ninguna'
                }
            ],
            value: 'vac'
        },
        {
            name: 'perfil_diagnostico',
            type: 'clausula',
            description: '¿Le han diagnosticado alguna enfermedad?',
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
            name: 'diagnostico_cual',
            type: 'text',
            description: 'Ingrese qué enfermedad le diagnosticaron',
            prereq: [
                {
                    k: 'perfil_diagnostico',
                    v: 's'
                }
            ]
        },
        {
            name: 'perfil_fuma',
            type: 'clausula',
            description: '¿Fuma?',
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
            name: 'fuma_cuanto',
            type: 'text',
            description: 'Ingrese el promedio diario de lo que fuma',
            prereq: [
                {
                    k: 'perfil_fuma',
                    v: 's'
                }
            ]
        },
        {
            name: 'perfil_alcohol',
            type: 'clausula',
            description: '¿Consume bebidas alcoholicas?',
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
            name: 'alcohol_frecuencia',
            type: 'select',
            description: 'Seleccione la frecuencia con la que consume bebidas alcoholicas',
            value: 'semana',
            options: [
                {
                    name: 'Semanal',
                    label: 'Semanal',
                    value: 'semana'
                },
                {
                    name: 'Quincenal',
                    label: 'Quincenal',
                    value: 'quincena'
                },
                {
                    name: 'Mensual',
                    label: 'Mensual',
                    value: 'mes'
                },
                {
                    name: 'Ocasional',
                    label: 'Ocasional',
                    value: 'ocasion'
                }
            ],
            prereq: [
                {
                    k: 'perfil_alcohol',
                    v: 's'
                }
            ]
        },
        {
            name: 'perfil_deporte',
            type: 'clausula',
            description: '¿Práctica algún deporte?',
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
            name: 'deporte_cual',
            type: 'text',
            description: 'Ingrese qué deporte práctica',
            prereq: [
                {
                    k: 'perfil_deporte',
                    v: 's'
                }
            ]
        },
        {
            name: 'deporte_frecuencia',
            type: 'text',
            description: 'Ingrese con qué frecuencia práctica este deporte',
            prereq: [
                {
                    k: 'perfil_deporte',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_cont_emerg',
            type: 'name',
            description: 'Ingrese el nombre de su contacto de emergencia'
        },
        {
            name: 'cel_cont_emerg',
            type: 'phone',
            description: 'Ingrese el celular de su contacto de emergencia'
        },
        {
            name: 'parentesco_cont_emerg',
            type: 'text',
            description: 'Ingrese el parentesco de su contacto de emergencia'
        },
        {
            name: 'perfil_afp',
            type: 'text',
            description: 'Ingrese su AFP'
        },
        {
            name: 'molestia_cabeza',
            type: 'clausula',
            description: '¿Ha experimentado dolor de cabeza frecuente en los ultimos 6 meses?',
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
            name: 'dolor_cabeza_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_cabeza',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_cuello',
            type: 'clausula',
            description: '¿Ha experimentado dolor de cuello, espalda y/o cintura frecuente en los ultimos 6 meses?',
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
            name: 'cuello_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_cuello',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_muscular',
            type: 'clausula',
            description: '¿Ha experimentado dolores musculares frecuentes en los ultimos 6 meses?',
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
            name: 'muscular_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_muscular',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_movimiento',
            type: 'clausula',
            description: '¿Ha experimentado dificultad para algún movimiento en los ultimos 6 meses?',
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
            name: 'movimiento_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_movimiento',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_tos',
            type: 'clausula',
            description: '¿Ha experimentado tos frecuente en los ultimos 6 meses?',
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
            name: 'tos_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_tos',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_dif_resp',
            type: 'clausula',
            description: '¿Ha experimentado dificultad respiratoria frecuente en los ultimos 6 meses?',
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
            name: 'dif_resp_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_dif_resp',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_gastritis',
            type: 'clausula',
            description: '¿Ha experimentado gastritis o ulceras frecuentes en los ultimos 6 meses?',
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
            name: 'gastritis_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_gastritis',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_digestivo',
            type: 'clausula',
            description: '¿Ha experimentado otras alteraciones del funcionamiento digestivo frecuente en los ultimos 6 meses?',
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
            name: 'digestivo_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_digestivo',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_sueno',
            type: 'clausula',
            description: '¿Ha experimentado alteraciones del sueño (insomnio, somnolencia) frecuente en los ultimos 6 meses?',
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
            name: 'sueno_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_sueno',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_concentracion',
            type: 'clausula',
            description: '¿Ha experimentado dificultad para concentrarse en los ultimos 6 meses?',
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
            name: 'concentracion_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_concentracion',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_mal_genio',
            type: 'clausula',
            description: '¿Ha experimentado mal genio y/o cambios abruptos emocionales en los ultimos 6 meses?',
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
            name: 'mal_genio_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_mal_genio',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_nervios',
            type: 'clausula',
            description: '¿Ha experimentado nerviosismo frecuente en los ultimos 6 meses?',
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
            name: 'nervios_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_nervios',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_cans_mental',
            type: 'clausula',
            description: '¿Ha experimentado cansancio mental frecuente en los ultimos 6 meses?',
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
            name: 'cans_mental_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_cans_mental',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_palpitaciones',
            type: 'clausula',
            description: '¿Ha experimentado palpitaciones frecuentes en los ultimos 6 meses?',
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
            name: 'palpitaciones_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_palpitaciones',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_dolor_pecho',
            type: 'clausula',
            description: '¿Ha experimentado dolores en el pecho frecuentes en los ultimos 6 meses?',
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
            name: 'dolor_pecho_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_dolor_pecho',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_camb_visual',
            type: 'clausula',
            description: '¿Ha experimentado cambios visuales frecuentes en los ultimos 6 meses?',
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
            name: 'camb_visual_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_camb_visual',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_cansancio',
            type: 'clausula',
            description: '¿Ha experimentado cansancio, fatiga, ardor o dis confort visual frecuente en los ultimos 6 meses?',
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
            name: 'cansancio_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_cansancio',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_ruido',
            type: 'clausula',
            description: '¿Ha experimentado pitos o ridos continuos o intermitentes en los oidos frecuente en los ultimos 6 meses?',
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
            name: 'ruido_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_ruido',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_oido',
            type: 'clausula',
            description: '¿Ha experimentado dificultad para oír frecuente en los ultimos 6 meses?',
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
            name: 'oido_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_oido',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_cansancio_perm',
            type: 'clausula',
            description: '¿Ha experimentado sensación de permanente cansancio frecuente en los ultimos 6 meses?',
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
            name: 'cansancio_perm_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_cansancio_perm',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_piel',
            type: 'clausula',
            description: '¿Ha experimentado alteraciones en la piel frecuentes en los ultimos 6 meses?',
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
            name: 'piel_exp',
            type: 'text',
            description: 'Ingrese la explicación sobre la molestia que ha presentado',
            prereq: [
                {
                    k: 'molestia_piel',
                    v: 's'
                }
            ]
        },
        {
            name: 'molestia_otras',
            type: 'clausula',
            description: '¿Ha experimentado otras alteraciones no anotadas?',
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
            name: 'otras_exp',
            type: 'text',
            description: 'Ingrese que alteraciones ha presentado y una explicación sobre la molestia',
            prereq: [
                {
                    k: 'molestia_otras',
                    v: 's'
                }
            ]
        },
        {
            name: 'pregunta_1',
            type: 'clausula',
            description: 'El Reglamento de Higiene, Seguridad Industrial y el Comité de Convivencia Laboral de la Empresa es solo para conocimiento de la Gerencia?',
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
            name: 'pregunta_2',
            type: 'clausula',
            description: 'La política de Seguridad y Salud en el Trabajo, refleja el Compromiso, Mejoramiento Continuo y Cumplimiento de la ley buscando mantener la salud de sus trabajadores?',
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
            name: 'pregunta_3',
            type: 'clausula',
            description: 'La Política de prevención de consumo de alcohol, drogas y tabaquismo, busca mejorar la calidad de vida del trabajador por medio de su autocuidado?',
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
            name: 'pregunta_4',
            type: 'clausula',
            description: 'El Sistema de Gestión de la Seguridad y Salud en el trabajo se compone de tres programas: Higiente Industrial, Seguridad Industrial y Medicina preventiva y del Trabajo?',
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
            name: 'pregunta_5',
            type: 'clausula',
            description: 'Un acto inseguro es la violación por parte del trabajador de las normas que han sido establecidas y dadas a conocer como seguras para la realización de cualquier actividad laboral?',
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
            name: 'pregunta_6',
            type: 'clausula',
            description: 'Los elementos de protección personal son barreras que ayudan a proteger y disminuir las consecuencias de un accidente de trabajo y la enfermedad laboral si hago un buen uso de ellos?',
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
            name: 'pregunta_7',
            type: 'clausula',
            description: 'El Copasst está compuesto únicamente por el personal administrativo y de oficinas?',
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
            name: 'pregunta_8',
            type: 'clausula',
            description: 'Uno de los objetivos SST de FUTESA S.A.S. es "Conservar y proteger la salud de los trabajadores"',
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
            name: 'pregunta_9',
            type: 'clausula',
            description: 'Según el programa de disposición final de residuos sólidos establecidos por la empresa, Como trabajador puedo botar cualquier tipo de residuo en una misma caneca?',
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
            name: 'pregunta_10',
            type: 'clausula',
            description: 'El documento donde se analizan y valoran los riesgos a los que están expuestos los trabajadores se llama matriz de Identificación de Peligros, Evaluación, y Valoración de los Riesgos?',
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
            name: 'pregunta_11',
            type: 'clausula',
            description: 'Es un accidente de trabajo cuando un señor contratado como conductor, se encuentra apoyando por voluntad propia activdades en instalación de redes y repentinamente se hace una cortada en la mano derecha?',
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
            name: 'pregunta_12',
            type: 'clausula',
            description: 'Como trabajdor es mi obligación reportar al responsable SST, al jefe inmediato y a la Gerencia todas las condiciones inseguras que estén presentes en mi puesto de trabajo?',
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
            name: 'pregunta_13',
            type: 'clausula',
            description: 'Cuando se presenta un incidente o accidente de Trabajo, debo reportarlo inmediatamente al responsable SST y a mi jefe inmediato y ser parte de la investigación si es necesario?',
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
            name: 'pregunta_14',
            type: 'clausula',
            description: 'El cumplimiento en el diligenciamiento y entrega de los permisos de trabajo para actividades de Alto Riesgo (alturas, confinados y temperaturas extremas) es responsabilidad del trabajador que va a desempeñar a actividad antes del inicio de la labor?',
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
            name: 'pregunta_15',
            type: 'clausula',
            description: 'Una de las actividades del programa de Medicina preventiva y del trabajo es la realización de exámenes médicos los cuales pueden ser de ingreso,periódico, retiro y con énfasis en alturas.',
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
            name: 'pregunta_16',
            type: 'clausula',
            description: 'Cualquier trabajador puede operar los equipos y maquinaria sin tener capacitación o formación para el manejo de los mismos?',
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
            name: 'pregunta_17',
            type: 'clausula',
            description: 'En caso de presentarse una emergencia y evacuación, el sitio o sitios específicos y seguros donde se reúnen los trabajadores para tener control del personal se llama punto de encuentro?',
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
            name: 'pregunta_18',
            type: 'clausula',
            description: 'Los sonidos de alarma que me indican que hay una emergencia son los pitos y sirenas?',
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
            name: 'pregunta_19',
            type: 'clausula',
            description: 'Mi puesto de trabajo debe encontrarse en buenas condiciones de orden y aseo a diario?',
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
            name: 'pregunta_20',
            type: 'clausula',
            description: 'Una de las sanciones a las que puede estar expuesta la Empresa por el incumplimiento de la legislación vigente en matera de Seguridad y Salud en el trabajo es de tipo pedagógico?',
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
            name: 'encuesta_1',
            type: 'clausula',
            description: 'Autorizo a FUTESA S.A.S para el manejo de la información aquí aportada en esta encuesta de patrones de movilidad que le permita desarrollar acciones de promoción y prevención frente al desarrollo e implementación del plan estratégico de seguridad vial. AUTORIZO:',
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
            name: 'grupo_trabajo',
            type: 'select',
            description: 'Grupo de trabajo al que pertenece',
            options: [
                {
                    name: 'Administrativo',
                    label: 'Administrativo',
                    value: 'admin'
                },
                {
                    name: 'Operativo',
                    label: 'Operativo',
                    value: 'op'
                }
            ],
            value: 'admin'
        },
        {
            name: 'vehiculos_conduce',
            type: 'check',
            description: 'Seleccione los tipos de vehículos que conduce',
            select: [],
            values: [
                'Automóvil',
                'Moto',
                'Bicicleta',
                'Patinetas'
            ]
        },
        {
            name: 'licencia',
            type: 'clausula',
            description: 'Cuenta con licencia de conducción',
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
            value: 's'
        },
        {
            name: 'tipo_licencia',
            type: 'check',
            description: 'Indique el tipo de licencia',
            select: [],
            values: [
                'A1',
                'A2',
                'B1',
                'B2',
                'B3',
                'C1',
                'C2',
                'C3'
            ],
            prereq: [
                {
                    k: 'licencia',
                    v: 's'
                }
            ]
        },
        {
            name: 'tipo_jornada',
            type: 'select',
            description: 'Tipo de jornada laboral',
            options: [
                {
                    name: 'Diurna',
                    label: 'Diurna',
                    value: 'diurna'
                },
                {
                    name: 'Nocturna',
                    label: 'Nocturna',
                    value: 'noc'
                },
                {
                    name: 'Mixta',
                    label: 'Mixta',
                    value: 'mix'
                },
                {
                    name: 'Turno rotativo (6-2; 2-10; 10-6)',
                    label: 'Turno rotativo (6-2; 2-10; 10-6)',
                    value: 'rot'
                }
            ],
            value: 'diurna'
        },
        {
            name: 'lista_accidentes',
            type: 'check',
            description: '¿En los últimos cinco años se ha visto involucrado en alguno o varios de los siguientes eventos?, sin importar si es conductor o no.',
            select: [],
            values: [
                'Accidente solo daños',
                'Accidente con muertos',
                'Accidente con heridos',
                'Le han impuesto comparendos',
                'Ninguno'
            ]
        },
        {
            name: 'medio_transporte_preferido',
            type: 'select',
            description: 'Para desplazarse hacia y desde su lugar de trabajo el medio de transporte que más frecuenta es:',
            options: [
                {
                    name: 'A pie',
                    label: 'A pie',
                    value: 'pie'
                },
                {
                    name: 'Vehículo Particular',
                    label: 'Vehículo Particular',
                    value: 'vehiculo'
                },
                {
                    name: 'Bicicleta',
                    label: 'Bicicleta',
                    value: 'bicicleta'
                },
                {
                    name: 'Patineta',
                    label: 'Patineta',
                    value: 'patineta'
                },
                {
                    name: 'Transporte público',
                    label: 'Transporte público',
                    value: 'transporte'
                },
                {
                    name: 'Motocicleta o ciclo motor',
                    label: 'Motocicleta o ciclo motor',
                    value: 'moto'
                },
                {
                    name: 'Transporte suministrado por la empresa',
                    label: 'Transporte suministrado por la empresa',
                    value: 'transporte_empresa'
                }
            ],
            value: 'pie'
        },
        {
            name: 'tiempo_transporte',
            type: 'select',
            description: 'El tiempo promedio diario para realizar estos desplazamientos (ida y vuelta) es:',
            options: [
                {
                    name: 'Entre 1 y 20 minutos',
                    label: 'Entre 1 y 20 minutos',
                    value: '20_min'
                },
                {
                    name: 'Entre 21 y 40 minutos',
                    label: 'Entre 21 y 40 minutos',
                    value: '40_min'
                },
                {
                    name: 'Entre 41 y 60 minutos',
                    label: 'Entre 41 y 60 minutos',
                    value: '60_min'
                },
                {
                    name: 'Entre 61 y 90 minutos',
                    label: 'Entre 61 y 90 minutos',
                    value: '90_min'
                },
                {
                    name: 'Entre 91 y 120 minutos',
                    label: 'Entre 91 y 120 minutos',
                    value: '120_min'
                },
                {
                    name: 'Mas de 120 minutos',
                    label: 'Mas de 120 minutos',
                    value: 'mas_120_min'
                }
            ],
            value: '20_min'
        },
        {
            name: 'desp_en_jornada',
            type: 'clausula',
            description: 'Realiza desplazamientos dentro de su jornada laboral?',
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
            value: 's'
        },
        {
            name: 'frecuencia_desp',
            type: 'select',
            description: 'Con que frecuencia realiza los desplazamientos relacionados con su actividad laboral:',
            options: [
                {
                    name: '6 a 7 días en la semana',
                    label: '6 a 7 días en la semana',
                    value: '7_dias'
                },
                {
                    name: '3 a 5 días en la semana',
                    label: '3 a 5 días en la semana',
                    value: '5_dias'
                },
                {
                    name: '1 a 2 días en la semana',
                    label: '1 a 2 días en la semana',
                    value: '2_dias'
                },
                {
                    name: '1 a 3 veces al mes',
                    label: '1 a 3 veces al mes',
                    value: '3_mes'
                },
                {
                    name: 'Algunas veces al año',
                    label: 'Algunas veces al año',
                    value: 'algunas_ano'
                }
            ],
            value: '7_dias',
            prereq: [
                {
                    k: 'desp_en_jornada',
                    v: 's'
                }
            ]
        },
        {
            name: 'tiempo_toma_desp',
            type: 'select',
            description: 'Que tiempo de su jornada laboral le toma estos desplazamientos:',
            options: [
                {
                    name: '2 horas de su jornada laboral',
                    label: '2 horas de su jornada laboral',
                    value: '2_horas'
                },
                {
                    name: '4 horas de su jornada laboral',
                    label: '4 horas de su jornada laboral',
                    value: '4_horas'
                },
                {
                    name: '6 horas de su jornada laboral',
                    label: '6 horas de su jornada laboral',
                    value: '6_horas'
                },
                {
                    name: '8 o más horas de su jornada laboral',
                    label: '8 o más horas de su jornada laboral',
                    value: '8_horas'
                }
            ],
            value: '2_horas',
            prereq: [
                {
                    k: 'desp_en_jornada',
                    v: 's'
                }
            ]
        },
        {
            name: 'quien_plan_desp',
            type: 'select',
            description: 'Si realiza desplazamientos estos son planificados por:',
            options: [
                {
                    name: 'La empresa usuaria',
                    label: 'La empresa usuaria',
                    value: 'emp_usuaria'
                },
                {
                    name: 'Futesa',
                    label: 'Futesa',
                    value: 'futesa'
                },
                {
                    name: 'Usted mismo',
                    label: 'Usted mismo',
                    value: 'usted'
                }
            ],
            value: 'emp_usuaria'
        },
        {
            name: 'plan_desp_tiempo',
            type: 'select',
            description: 'La planificación de estos desplazamientos laborales, se realiza:',
            options: [
                {
                    name: 'Diario',
                    label: 'Diario',
                    value: 'diario'
                },
                {
                    name: 'Semanal',
                    label: 'Semanal',
                    value: 'semanal'
                },
                {
                    name: 'Quincenal',
                    label: 'Quincenal',
                    value: 'quincenal'
                },
                {
                    name: 'Mensual',
                    label: 'Mensual',
                    value: 'mensual'
                },
                {
                    name: 'No se planifican, salen imprevistos',
                    label: 'No se planifican, salen imprevistos',
                    value: 'no_plan'
                },
                {
                    name: 'Ninguna',
                    label: 'Ninguna',
                    value: 'ninguna'
                }
            ],
            value: 'diario'
        },
        {
            name: 'desp_medio',
            type: 'select',
            description: 'Si realiza desplazamientos, durante la jornada laboral la mayoría de estos los realiza en:',
            options: [
                {
                    name: 'A pie',
                    label: 'A pie',
                    value: 'pie'
                },
                {
                    name: 'Vehículo Particular',
                    label: 'Vehículo Particular',
                    value: 'vehiculo'
                },
                {
                    name: 'Bicicleta',
                    label: 'Bicicleta',
                    value: 'bicicleta'
                },
                {
                    name: 'Transporte público',
                    label: 'Transporte público',
                    value: 'transporte'
                },
                {
                    name: 'Motocicleta o ciclo motor',
                    label: 'Motocicleta o ciclo motor',
                    value: 'moto'
                },
                {
                    name: 'Transporte suministrado por la empresa',
                    label: 'Transporte suministrado por la empresa',
                    value: 'transporte_empresa'
                }
            ],
            value: 'pie'
        },
        {
            name: 'vehiculo_propio',
            type: 'clausula',
            description: 'Conduce su propio vehículo para realizar los desplazamientos laborales:',
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
            value: 's'
        },
        {
            name: 'riesgo_hum_conduc_propia',
            type: 'select',
            description: 'Selecciona el nivel de riesgo de: "Mi propia conducción"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_hum_sueno',
            type: 'select',
            description: 'Selecciona el nivel de riesgo de: "Sueño / Fatiga"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_hum_veloc',
            type: 'select',
            description: 'Selecciona el nivel de riesgo de: "Velocidad"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_hum_senales',
            type: 'select',
            description: 'Selecciona el nivel de riesgo de: "No respetar señales"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_hum_distraccion',
            type: 'select',
            description: 'Selecciona el nivel de riesgo de: "Distracción"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_hum_intolerancia',
            type: 'select',
            description: 'Selecciona el nivel de riesgo de: "Intolerancia"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_hum_conduc_demas',
            type: 'select',
            description: 'Selecciona el nivel de riesgo de: "Conducción de los demás"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_via_mal_estado',
            type: 'select',
            description: 'Selecciona el nivel de riesgo de: "Mal estado de la vía"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_via_senales',
            type: 'select',
            description: 'Selecciona el nivel de riesgo de: "Ausencia de señales"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_via_clima',
            type: 'select',
            description: 'Selecciona el nivel de riesgo de: "Clima"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_via_cond_advers',
            type: 'select',
            description: 'Selecciona el nivel de riesgo de: "Condiciones adversas"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_vehic_malo',
            type: 'select',
            description: 'Selecciona el nivel de riesgo: "Mal estado del vehículo"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_vehic_manten',
            type: 'select',
            description: 'Selecciona el nivel de riesgo: "Falta de mantenimiento al vehículo"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_vehic_seguridad',
            type: 'select',
            description: 'Selecciona el nivel de riesgo: "Deficiencia sistemas de seguridad del vehículo"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'riesgo_vehic_modelo',
            type: 'select',
            description: 'Selecciona el nivel de riesgo: "Modelo del vehículo"',
            options: [
                {
                    name: 'Alto',
                    label: 'Alto',
                    value: 'alto'
                },
                {
                    name: 'Medio',
                    label: 'Medio',
                    value: 'medio'
                },
                {
                    name: 'Bajo',
                    label: 'Bajo',
                    value: 'bajo'
                }
            ],
            value: 'alto'
        },
        {
            name: 'propuestas_riesgo_acc',
            type: 'check',
            description: 'Marque sus propuestas para reducir el riesgo de accidente',
            select: [],
            values: [
                'Implementar leyes más severas para los ciudadanos infractores',
                'Mayor control en las vías por parte de las autoridades',
                'Mayor educación e información vial para todos los ciudadanos por parte del Estado',
                'Mayor control de las autoridades en la expedición de licencias de conducción',
                'Construir más vías',
                'Imponer restricciones a la venta de motos y automóviles',
                'Educación víal para los empleados',
                'Establecer estándares de seguridad víal',
                'Procesos disciplinarios por incumplimiento de normas de seguridad vial',
                'Seguimiento interno a la siniestralidad',
                'Seguimiento programas de mantenimiento vehicular',
                'Campañas de seguridad vial',
                'Ninguna'
            ]
        },
        {
            name: 'fecha_diligenciamiento',
            type: 'date',
            description: 'Seleccione la fecha de diligenciamiento de este documento'
        },
        {
            name: 'nombres_apellidos',
            type: 'name',
            description: 'Ingese los nombres y apellidos del candidato'
        },
        {
            name: 'tipo_doc_trabajador',
            type: 'clausula',
            description: 'Seleccione el tipo de documento de identidad del candidato',
            options: [
                {
                    name: 'Cédula de ciudadanía',
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
            value: 'cc'
        },
        {
            name: 'num_id_trabajador',
            type: 'text',
            description: 'Ingese el número de identificación del candidato'
        },
        {
            name: 'cargo',
            type: 'text',
            description: 'Ingese el cargo del candidato'
        },
        {
            name: 'empresa_usuaria',
            type: 'name',
            description: 'Ingese la empresa usuaria'
        },
        {
            name: 'eps',
            type: 'text',
            description: 'Ingese la eps del candiato'
        },
        {
            name: 'ciudad_firma',
            type: 'text',
            description: 'Ingese la ciudad donde se firma el documento'
        },
        {
            name: 'salario_mensual',
            type: 'currency',
            description: 'Ingese el salario del candidato'
        },
        {
            name: 'fecha_inicio',
            type: 'date',
            description: 'Seleccione la fecha de inicio de las labores del candidato'
        },
        {
            name: 'aux_transporte',
            type: 'select',
            description: '¿El candidato recibirá auxilio de transporte?',
            options: [
                {
                    label: 'Si',
                    name: 'Si',
                    value: 's'
                },
                {
                    label: 'No',
                    name: 'No',
                    value: 'n'
                }
            ],
            value: 's'
        },
        {
            name: 'email_enviar',
            type: 'email',
            description: 'Ingrese el correo del candidato'
        }
    ],
    operation: [],
    sign: [
        'fecha_diligenciamiento',
        'nombres_apellidos',
        'tipo_doc_trabajador',
        'num_id_trabajador',
        'cargo',
        'empresa_usuaria',
        'eps',
        'ciudad_firma',
        'salario_mensual',
        'fecha_inicio',
        'aux_transporte',
        'email_enviar',
        'correo_empleado',
        'tel_cel_1'
    ],
    preFill: [
        {
            name: 'nombre_dir_sst',
            value: 'Yiwer Africano Torres'
        },
        {
            name: 'id_dir_sst',
            value: '1123513576'
        },
        {
            name: 'email_dir_sst',
            value: 'ccsandovalt@gmail.com'
        },
        {
            name: 'nombre_cont_fut',
            value: 'Analista de contratación futesa'
        },
        {
            name: 'id_cont_fut',
            value: '1123512133'
        },
        {
            name: 'email_cont_fut',
            value: 'krcamilo0417@gmail.com'
        },
        {
            name: 'nombre_rep_futesa',
            value: 'SERGIO ALONSO ARANGO TOBON'
        },
        {
            name: 'id_rep_futesa',
            value: '1123513087'
        },
        {
            name: 'email_rep_futesa',
            value: 'cristian.sandoval@auco.ai'
        }
    ],
    signatureProfile: [
        {
            name: 'nombres_apellidos',
            identification: 'num_id_trabajador',
            email: 'correo_empleado',
            phone: 'tel_cel_1',
            type: 'trabajador'
        },
        {
            name: 'nombre_dir_sst',
            identification: 'id_dir_sst',
            email: 'email_dir_sst',
            type: 'dir_sst_fut'
        },
        {
            name: 'nombre_cont_fut',
            identification: 'id_cont_fut',
            email: 'email_cont_fut',
            type: 'analista_cont_fut'
        },
        {
            name: 'nombre_rep_futesa',
            identification: 'id_rep_futesa',
            email: 'email_rep_futesa',
            type: 'rep_futesa'
        }
    ],
    preBuild: true,
    preBuildData: [
        'fecha_diligenciamiento',
        'nombres_apellidos',
        'tipo_doc_trabajador',
        'num_id_trabajador',
        'cargo',
        'empresa_usuaria',
        'eps',
        'ciudad_firma',
        'salario_mensual',
        'fecha_inicio',
        'aux_transporte',
        'email_enviar'
    ],
    name: 'Futesa',
    price: 5000,
    build: 4,
    username: '111cdc4d-4bcb-4dfc-85d5-94b8a86bb916'
}