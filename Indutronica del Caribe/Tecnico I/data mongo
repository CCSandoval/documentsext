{
    _id: ObjectId("63442d321197e88531953341"),
    config: [
      {
            name: "nombre_trabajador",
            description: "Ingrese el nombre del trabajador",
            type: "name"
        },
        {
            name: "tipo_id_trabajador",
            type: "clausula",
            description: "Seleccione el tipo de identificación del trabajador",
            value: "cc",
            options: [
                {
                    name: "Cédula de ciudadanía",
                    value: "cc"
                },
                {
                    name: "Cédula de extranjería",
                    value: "ce"
                },
                {
                    name: "Permiso especial de permanencia",
                    value: "pep"
                },
                {
                    name: "Permiso por proteccion temporal",
                    value: "ppt"
                }
            ]
        },
        {
            name: "cc_trabajador",
            type: "number",
            description: "Ingrese el número de cédula de ciudadanía del trabajador",
            prereq: [
                {
                    k: "tipo_id_trabajador",
                    v: "cc"
                }
            ]
        },
        {
            name: "ce_trabajador",
            type: "number",
            description: "Ingrese el número de cédula de extranjería del trabajador",
            prereq: [
                {
                    k: "tipo_id_trabajador",
                    v: "ce"
                }
            ]
        },
        {
            name: "pep_trabajador",
            type: "name",
            description: "Ingrese el permiso especial de permanencia del trabajador",
            prereq: [
                {
                    k: "tipo_id_trabajador",
                    v: "pep"
                }
            ]
        },
        {
            name: "ppt_trabajador",
            type: "name",
            description: "Ingrese el permiso por protección temporal del trabajador",
            prereq: [
                {
                    k: "tipo_id_trabajador",
                    v: "ppt"
                }
            ]
        },
        {
            name: "lugarexpe_trabajador",
            type: "text",
            description: "Ingrese el lugar de expedición de la identificación del trabajador"
        },
        {
            name: "ciudadania_trabajador",
            type: "text",
            description: "Ingrese la ciudadanía del trabajador"
        },
        {
            name: "nacimiento_trabajador",
            type: "text",
            description: "Ingrese el lugar de nacimiento del trabajador"
        },
        {
            name: "fechanacimiento_trabajador",
            type: "date",
            description: "Ingrese la fecha de nacimiento del trabajador"
        },
        {
            name: "ciudadresidencia_trabajador",
            type: "text",
            description: "Ingrese la ciudad de residencia del trabajador"
        },
        {
            name: "direccion_trabajador",
            type: "text",
            description: "Ingrese la dirección de residencia del trabajador"
        },
        {
            name: "celular_trabajador",
            type: "phone",
            description: "Ingrese el celular del trabajador"
        },
        {
            name: "estadocivil_trabajador",
            type: "text",
            description: "Ingrese el estado civil del trabajador",           
        },
        {
            name: "salario_trabajador",
            type: "currency",
            description: "Ingrese el salario del trabajador"
        },
        {
            name: "fechaIngreso_trabajador",
            type: "date",
            description: "Ingrese la fecha de ingreso del trabajador"
        },
        {
            name: "idcargo_trabajador",
            type: "text",
            description: "Ingrese el cargo del trabajador"
        },
        {
            name: "lugartrabajo_trabajador",
            type: "text",
            description: "Ingrese el lugar de trabajo del trabajador"
        },
        {
            name: "duracion_trabajador",
            type: "text",
            description: "Ingrese la duración del contrato del trabajador"
        },
        {
            name: "funciones_trabajador",
            type: "text",
            description: "Ingrese las funciones del trabajador"
        },
        {
            name: "bonificacion_paragrafo",
            type: "text",
            description: "Ingrese la bonificación extralegal por paragrafo del trabajador"
        },
        {
            name: "bonificacion",
            type: "text",
            description: "Ingrese el nombre de la bonificación extralegal del trabajador"
        },
        {
            name: "bonificacion_monto",
            type: "currency",
            description: "Ingrese el valor de la bonificación del trabajador"
        },
        {
            name: "periodo_prueba",
            type: "text",
            description: "Ingrese el periodo de prueba del trabajador"
        },
        {
            name: "nombre_contrato",
            type: "text",
            description: "Ingrese el nombre del contrato",
        },
        {
            name: "nombre_cliente",
            type: "text",
            description: "Ingrese el nombre del cliente",
        },
        {
            name: "correo_trabajador",
            type: "email",
            description: "Ingrese el correo del trabajador"
        },
        {
            name: "ingresar_testigo",
            type: "clausula",
            description: "¿Desea ingresar un testigo?",
            value: "no",
            options: [
                {
                    name: "Si",
                    value: "si"
                },
                {
                    name: "No",
                    value: "no"
                }
            ]
        },
        {
            name: "nombre_testigo",
            type: "name",
            description: "Ingrese el nombre del testigo",
            prereq: [
                {
                    k: "ingresar_testigo",
                    v: "si"
                }
            ]
        },
        {
            name: "tipo_id_testigo",
            type: "clausula",
            description: "Ingrese el tipo de identificación del testigo",
            value: 'cc',
                 prereq: [
                {
                    k: "ingresar_testigo",
                    v: "si"
                }
            ],
            options: [
                {
                    name: "Cédula de ciudadanía",
                    value: "cc"
                },
                {
                    name: "Cédula de extranjería",
                    value: "ce"
                },
                {
                    name: "Permiso especial de permanencia",
                    value: "pep"
                },
                {
                    name: "Permiso por proteccion temporal",
                    value: "ppt"
                },
            ]
        },
        {
            name: "cc_testigo",
            type: "number",
            description: "Ingrese el número de identificación del testigo",

            prereq: [
                {
                    k: "ingresar_testigo",
                    v: "si"
                },
                {
                    k: "tipo_id_testigo",
                    v: "cc"
                }
            ],

        },
        {
            name: "ce_testigo",
            type: "number",
            description: "Ingrese el número de cédula de extranjería del testigo",
               prereq: [
                {
                    k: "ingresar_testigo",
                    v: "si"
                },
                {
                    k: "tipo_id_testigo",
                    v: "ce"
                }
            ],
        },
        {
            name: "pep_testigo",
            type: "name",
            description: "Ingrese el número de permiso especial de permanencia del testigo",
               prereq: [
                {
                    k: "ingresar_testigo",
                    v: "si"
                },
                {
                    k: "tipo_id_testigo",
                    v: "pep"
                }
            ],
        },
        {
            name: "ppt_testigo",
            type: "name",
            description: "Ingrese el número de permiso por protección temporal del testigo",
               prereq: [
                {
                    k: "ingresar_testigo",
                    v: "si"
                },
                {
                    k: "tipo_id_testigo",
                    v: "ppt"
                }
            ],
        },
        {
            name: "cargo_testigo",
            type: "text",
            description: "Ingrese el cargo del testigo",
             prereq: [
                {
                    k: "ingresar_testigo",
                    v: "si"
                },
            ],
        },
        {
            name: "correo_testigo",
            type: "email",
            description: "Ingrese el correo del testigo",
            prereq: [
                {
                    k: "ingresar_testigo",
                    v: "si"
                },
            ],
        },
        {
            name: "celular_testigo",
            type: "phone",
            description: "Ingrese el celular del testigo",
            prereq: [
                {
                    k: "ingresar_testigo",
                    v: "si"
                },
            ],
        },
    ],
    preFill: [
        {
            name: "nombre_empleador",
            value: "ALBERTO ENRIQUE MANOTAS VILLEGAS"
        },
        {
            name: "cc_empleador",
            value: "71.665.132"
        },
        {
            name: "correo_empleador",
            value: "amanotas@indutronica.com"
        },
        {
            name: "celular_empleador",
            value: "+573107076553"
        },
    ],
    sign: [
      "nombre_trabajador",
        "tipo_id_trabajador",
        "funciones_trabajador",
      "ingresar_testigo",
      "cc_trabajador",
      "ce_trabajador",
      "pep_trabajador",
      "ppt_trabajador",
      "lugarexpe_trabajador",
      "nacimiento_trabajador",
      "ciudadania_trabajador",
      "direccion_trabajador",
      "telefono_trabajador",
      "fechanacimiento_trabajador",
      "ciudad_residencia",
      "ciudadresidencia_trabajador",
      "correo_trabajador",
      "nombre_testigo",
      "tipo_id_testigo",
      "estadocivil_trabajador",
      "salario_trabajador",
      "fechaIngreso_trabajador",
      "duracion_trabajador",
      "lugartrabajo_trabajador",
      "idcargo_trabajador",
      "periodo_prueba",
        "correo_empleador",
        "celular_empleador",
        "celular_trabajador",
        "celular_testigo",
    ],
    signatureProfile: [
        {
            type: 'firma_empleador',	
            name: 'nombre_empleador',
            identification: 'cc_empleador',
            email: 'correo_empleador',
            phone: 'celular_empleador',
        },
        {
            type: 'firma_trabajador',
            name: 'nombre_trabajador',
            email: 'correo_trabajador',
            identification: 'cc_trabajador|ce_trabajador|pep_trabajador|ppt_trabajador',
            phone: 'celular_trabajador',
        },
        {
            type: 'firma_testigo',
            name: 'nombre_testigo',
            email: 'correo_testigo',
            identification: 'cc_testigo|ce_testigo|pep_testigo|ppt_testigo',
            phone: 'celular_testigo',
        },
    ],
        prebuild: false,
        build: 6,
        price: 5000,
        name: "CONTRATO INDIVIDUAL DE TRABAJO A TÉRMINO FIJO",
        company: ObjectId('61eae55829edb10009edd3de')

}