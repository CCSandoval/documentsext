{
    _id: ObjectId('615335995cb99d00096a9b87'),
    config: [
        {
            description: 'Seleccione el sexo del trabajador',
            name: 'sexo_trabajador',
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
            description: 'Digite el nombre completo del trabajador',
            help: 'nombre',
            name: 'nombre_trabajador',
            type: 'name'
        },
        {
            description: 'Seleccione el tipo de documento del trabajador',
            name: 'tipo_documento_trabajador',
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
                },
                {
                    name: 'PPT',
                    value: 'ppt'
                }
            ],
            type: 'clausula',
            value: 'cc'
        },
        {
            description: 'Digite el número de cédula de ciudadanía del trabajador',
            help: 'cedula',
            name: 'cedula_trabajador',
            prereq: [
                {
                    k: 'tipo_documento_trabajador',
                    v: 'cc'
                }
            ],
            type: 'number'
        },
        {
            description: 'Digite el número de cédula de extranjería del trabajador',
            help: 'cedula',
            name: 'cedulae_trabajador',
            prereq: [
                {
                    k: 'tipo_documento_trabajador',
                    v: 'ce'
                }
            ],
            type: 'number'
        },
        {
            description: 'Digite el número de pasaporte del trabajador',
            help: 'cedula',
            name: 'pasaporte_trabajador',
            prereq: [
                {
                    k: 'tipo_documento_trabajador',
                    v: 'pa'
                }
            ],
            type: 'name'
        },
        {
            description: 'Digite el número de permiso de protección temporal',
            help: 'cedula',
            name: 'ppt_trabajador',
            prereq: [
                {
                    k: 'tipo_documento_trabajador',
                    v: 'ppt'
                }
            ],
            type: 'number'
        },
        {
            description: 'Digite el municipio donde fue expedido el documento de identificación del trabajador',
            help: 'lugar_expedicion_trabajador',
            name: 'lugar_expe_cedula_trabajador',
            type: 'text'
        },
        {
            description: 'Digite el municipio y barrio donde se encuentra el trabajador',
            help: 'lugar',
            name: 'domicilio_trabajador',
            type: 'text'
        },
        {
            description: 'Digite la dirección donde se encuentra el trabajador',
            help: 'direccion',
            name: 'direccion_trabajador',
            type: 'text'
        },
        {
            description: 'Digite el número de teléfono del trabajador',
            help: 'telefono',
            name: 'telefono_trabajador',
            type: 'text'
        },
        {
            description: 'seleccione la fecha de nacimiento del trabajador',
            help: 'fecha',
            name: 'fecha_n_trabajador',
            type: 'date'
        },
        {
            description: 'Digite el lugar de nacimiento del trabajador',
            help: 'lugar',
            name: 'lugar_n_trabajador',
            type: 'text'
        },
        {
            description: 'Digite el cargo que desempeñará el trabajador',
            help: 'cargo',
            name: 'cargo_d_trabajador',
            type: 'text'
        },
        {
            description: 'Digite el salario que recibirá el trabajador',
            help: 'salario',
            name: 'salario_trabajador',
            type: 'currency'
        },
        {
            description: 'seleccione la fecha en la que iniciará a laborar el trabajador',
            help: 'fecha',
            name: 'f_i_l_trabajador',
            type: 'date'
        },
        {
            description: 'Digite el municipio donde ha sido contratado el trabajador',
            help: 'lugar',
            name: 'c_c_trabajador',
            type: 'text'
        },
        {
            description: 'Digite el municipio donde empezará a laborar el trabajador',
            help: 'lugar',
            name: 'l_d_l_trabajador',
            type: 'text'
        },
        {
            description: 'Digite el nombre de la linea',
            help: 'nombre_linea',
            name: 'nombre_linea',
            type: 'text'
        },
        {
            description: 'Contrato',
            name: 'contrato',
            type: 'text'
        },
        {
            description: 'Digite la cantidad de meses de prueba que tendra el trabajador',
            help: 'meses_prueba',
            name: 'meses_prueba',
            type: 'number'
        },
        {
            description: 'Digite la cantidad de horas diarias que laborará el trabajador',
            help: 'hora',
            name: 'horas_diarias',
            type: 'number'
        },
        {
            description: 'Digite la cantidad de horas semanales que laborará el trabajador',
            help: 'hora',
            name: 'horas_semanales',
            type: 'number'
        },
        {
            description: 'Digite los días de la semana que laborará el trabajador',
            help: 'dia',
            name: 'dias_trabajo',
            type: 'text'
        },
        {
            description: 'Digite la hora de inicio de la jornada laboral del trabajador',
            help: 'hora_use',
            name: 'hora_i_trabajo',
            type: 'text'
        },
        {
            description: 'Digite la hora de salida de la jornada laboral del trabajador',
            help: 'hora_use',
            name: 'hora_f_trabajo',
            type: 'text'
        },
        {
            description: 'Digite el municipio donde se firmara el presente contrato',
            help: 'lugar',
            name: 'lugar_firma',
            type: 'text'
        },
        {
            description: 'seleccione la fecha en la que se firmara el presente contrato',
            help: 'fecha',
            name: 'fecha_firma',
            type: 'date'
        },
        {
            description: 'Digite el correo de la parte trabajadora',
            help: 'correo',
            name: 'correo_trabajador',
            type: 'text'
        }
    ],
    operation: [],
    sign: [
        'nombre_trabajador',
        'cedula_trabajador',
        'cedulae_trabajador',
        'pasaporte_trabajador',
        'domicilio_trabajador',
        'direccion_trabajador',
        'telefono_trabajador',
        'fecha_n_trabajador',
        'lugar_n_trabajador',
        'cargo_d_trabajador',
        'salario_trabajador',
        'p_p_trabajador',
        't_c_trabajador',
        'fecha_i_l_trabajador',
        'c_c_trabajador',
        'meses_prueba',
        'horas_diarias',
        'horas_semanales',
        'dias_trabajo',
        'horas_i_trabajo',
        'horas_f_trabajo',
        'lugar_firma',
        'fecha_firma',
        'correo_trabajador'
    ],
    preFill: [
        {
            name: 'nombre_empleador',
            value: 'FEDERICO VALENCIA PATIÑO'
        },
        {
            name: 'cedula_empleador',
            value: '10.027.254'
        },
        {
            name: 'correo_empleador',
            value: 'federico.valencia@solucionesbpo.com'
        }
    ],
    signatureProfile: [
        {
            name: 'nombre_empleador',
            identification: 'cedula_empleador',
            email: 'correo_empleador',
            type: 'empleador'
        },
        {
            name: 'nombre_trabajador',
            identification: 'cedula_trabajador|cedulae_trabajador|pasaporte_trabajador|ppt_trabajador',
            email: 'correo_trabajador',
            type: 'trabajador'
        }
    ],
    preBuildData: [],
    username: '5f73ead4-e96c-4440-b110-3c33e4b59403',
    name: 'CONTRATO INDIVIDUAL DE TRABAJO POR OBRA O LABOR',
    price: 0,
    help: {
        nombre: 'Ejemplo: Andrea Estefanía Soto Ramos',
        cedula: 'Ejemplo: 123456789',
        lugar: 'Ejemplo: Medellín',
        direccion: 'Ejemplo: Carrera 52 #26-11',
        telefono: 'Ejemplo: 3214567890',
        fecha: 'Ejemplo: 24/09/1997',
        cargo: 'Ejemplo: Asesor Call Center',
        salario: 'Ejemplo: 908.526',
        periodo: 'Ejemplo: quincenal',
        termino: 'Ejemplo: Obra o Labor',
        sexo: 'Ejemplo: femenino',
        meses: 'Ejemplo: 06',
        horas: 'Ejemplo: 08',
        hora_use: 'Ejemplo: 08:00 AM',
        dia: 'Ejemplo: Lunes a sábado',
        meses_prueba: 'Ejemplo: 2, Recuerda que máximo son 2 meses de periodo de prueba',
        correo: 'Ejemplo: correo@solucionesbpo.com.co',
        nombre_linea: 'Ejemplo: Big Pass'
    },
    build: 13,
    createdAt: ISODate('2021-09-28T15:32:41.370Z'),
    updatedAt: ISODate('2022-03-09T17:36:13.091Z')
}