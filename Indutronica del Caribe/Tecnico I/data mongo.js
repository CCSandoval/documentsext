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
            name: "fecha_nacimiento_trabajador",
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
            name: "telefono_trabajador",
            type: "number",
            description: "Ingrese el número de teléfono del trabajador"
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
            type: "date",
            description: "Ingrese la duración del contrato del trabajador"
        },
        {
            name: "funcion_1",
            type: "text",
            description: "Ingrese la función 1 del trabajador"
        },
        {
            name: "funcion_2",
            type: "text",
            description: "Ingrese la función 2 del trabajador"
        },
        {
            name: "funcion_3",
            type: "text",
            description: "Ingrese la función 3 del trabajador"
        },
        {
            name: "funcion_4",
            type: "text",
            description: "Ingrese la función 4 del trabajador"
        },
        {
            name: "funcion_5",
            type: "text",
            description: "Ingrese la función 5 del trabajador"
        },
        {
            name: "funcion_6",
            type: "text",
            description: "Ingrese la función 6 del trabajador"
        },
        {
            name: "funcion_7",
            type: "text",
            description: "Ingrese la función 7 del trabajador"
        },
        {
            name: "funcion_8",
            type: "text",
            description: "Ingrese la función 8 del trabajador"
        },
        {
            name: "funcion_9",
            type: "text",
            description: "Ingrese la función 9 del trabajador"
        },
        {
            name: "funcion_10",
            type: "text",
            description: "Ingrese la función 10 del trabajador"
        },
        {
            name: "funcion_11",
            type: "text",
            description: "Ingrese la función 11 del trabajador"
        },
        {
            name: "funcion_12",
            type: "text",
            description: "Ingrese la función 12 del trabajador"
        },
        {
            name: "funcion_13",
            type: "text",
            description: "Ingrese la función 13 del trabajador"
        },
        {
            name: "funcion_14",
            type: "text",
            description: "Ingrese la función 14 del trabajador"
        },
        {
            name: "funcion_15",
            type: "text",
            description: "Ingrese la función 15 del trabajador"
        },
        {
            name: "funcion_16",
            type: "text",
            description: "Ingrese la función 16 del trabajador"
        },
        {
            name: "funcion_17",
            type: "text",
            description: "Ingrese la función 17 del trabajador"
        },
        {
            name: "funcion_18",
            type: "text",
            description: "Ingrese la función 18 del trabajador"
        },
        {
            name: "funcion_19",
            type: "text",
            description: "Ingrese la función 19 del trabajador"
        },
        {
            name: "funcion_20",
            type: "text",
            description: "Ingrese la función 20 del trabajador"
        },
        {
            name: "funcion_21",
            type: "text",
            description: "Ingrese la función 21 del trabajador"
        },
        {
            name: "funcion_22",
            type: "text",
            description: "Ingrese la función 22 del trabajador"
        },
        {
            name: "funcion_23",
            type: "text",
            description: "Ingrese la función 23 del trabajador"
        },
        {
            name: "funcion_24",
            type: "text",
            description: "Ingrese la función 24 del trabajador"
        },
        {
            name: "funcion_25",
            type: "text",
            description: "Ingrese la función 25 del trabajador"
        },
        {
            name: "funcion_26",
            type: "text",
            description: "Ingrese la función 26 del trabajador"
        },
        {
            name: "funcion_27",
            type: "text",
            description: "Ingrese la función 27 del trabajador"
        },
        {
            name: "funcion_28",
            type: "text",
            description: "Ingrese la función 28 del trabajador"
        },
        {
            name: "bonificacion_paragrafo",
            type: "text",
            description: "Ingrese la bonificación extralegal por paragrafo del trabajador"
        },
        {
            name: "bonificacion",
            type: "text",
            description: "Ingrese la bonificación extralegal del trabajador"
        },
        {
            name: "periodo_prueba",
            type: "text",
            description: "Ingrese el periodo de prueba del trabajador"
        },
        {
            name: "correo_empleador",
            type: "email",
            description: "Ingrese el correo del empleador"
        },
        {
            name: "correo_trabajador",
            type: "email",
            description: "Ingrese el correo del trabajador"
        },
        {
            name: "nombre_testigo",
            type: "name",
            description: "Ingrese el nombre del testigo"
        },
        {
            name: "tipo_id_testigo",
            type: "clausula",
            description: "Ingrese el tipo de identificación del testigo",
            value: 'cc',
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
            description: "Ingrese el número de identificación del testigo"

        },
        {
            name: "ce_testigo",
            type: "number",
            description: "Ingrese el número de cédula de extranjería del testigo",
        },
        {
            name: "pep_testigo",
            type: "name",
            description: "Ingrese el número de permiso especial de permanencia del testigo",
        },
        {
            name: "ppt_testigo",
            type: "name",
            description: "Ingrese el número de permiso por protección temporal del testigo",
        },
        {
            name: "cargo_testigo",
            type: "text",
            description: "Ingrese el cargo del testigo"
        },
        {
            name: "correo_testigo",
            type: "email",
            description: "Ingrese el correo del testigo"
        },         
    ],
    sign: [
      "nombre_trabajador",
      "tipo_id_trabajador",
      "cc_trabajador",
      "ce_trabajador",
      "pep_trabajador",
      "ppt_trabajador",
      "lugarexpe_trabajador",
      "nacimiento_trabajador",
      "ciudadania_trabajador",
      "direccion_trabajador",
      "telefono_trabajador",
      "fecha_nacimiento_trabajador",
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
    ],
    signatureProfile: [
        {
            type: 'firma_empleador',	
            name: 'firma_empleador',
            email: 'correo_empleador',
        },
        {
            type: 'firma_trabajador',
            name: 'firma_trabajador',
            email: 'correo_trabajador',
            identification: 'cc_trabajador|ce_trabajador|pep_trabajador|ppt_trabajador',
        },
        {
            type: 'firma_testigo',
            name: 'firma_testigo',
            email: 'correo_testigo',
            identification: 'cc_testigo|ce_testigo|pep_testigo|ppt_testigo',
        },
    ],
        prebuild: false,
        build: 0,
        price: 5000,
        name: "CONTRATO INDIVIDUAL DE TRABAJO A TÉRMINO FIJO",
}