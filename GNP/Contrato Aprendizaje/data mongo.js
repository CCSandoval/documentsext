{
    _id: ObjectId('639b391d165176e16b0cca62'),
    config: [
        {
            name: 'num_contrato',
            description: 'Ingrese el número del contrato',
            type: 'name'
        },
        {
            name: 'objeto_contrato',
            description: 'Ingrese el objeto del contrato',
            type: 'name'
        },
        {
            name: 'nombre_trabajador',
            help: 'nombre',
            description: 'Ingrese el nombre del trabajador',
            type: 'name'
        },
        {
            name: 'dir_dom_trabajador',
            description: 'Digite la ciudad, seguido de la dirección de residencia del trabajador',
            type: 'text'
        },
        {
            name: 'campania',
            description: 'Ingrese la campaña de contratación',
            type: 'text'
        },
        {
            name: 'cargo',
            description: 'Seleccione el cargo del trabajador',
            type: 'clausula',
            value: 'call_c_cnd',
            options: [
                {
                    name: 'Analista BI',
                    value: 'anal_bi'
                },
                {
                    name: 'Analista Operativo.',
                    value: 'anal_op'
                },
                {
                    name: 'Analista De Contratación.',
                    value: 'anal_cont'
                },
                {
                    name: 'Analista Información Financiera',
                    value: 'anal_inf_fin'
                },
                {
                    name: 'Administrador de sede',
                    value: 'admin_sede'
                },
                {
                    name: 'Agente Call Center CND',
                    value: 'call_c_cnd'
                },
                {
                    name: 'Agente Call Center',
                    value: 'call_c'
                },
                {
                    name: 'Analista Digital',
                    value: 'dig_analist'
                },
                {
                    name: 'Auxiliar Servicio al Cliente',
                    value: 'aux_serv_client'
                },
                {
                    name: 'Auxiliares de soporte Nivel I',
                    value: 'aux_soporte'
                },
                {
                    name: 'Analista de pruebas y automatización',
                    value: 'test_analist'
                },
                {
                    name: 'Asesor Servicio al Cliente',
                    value: 'asesor_cliente'
                },
                {
                    name: 'Analista de Legalización',
                    value: 'analista_legal'
                },
                {
                    name: 'Analista Nomina',
                    value: 'analista_nomina'
                },
                {
                    name: 'Auxiliar contable',
                    value: 'auxiliar_contable'
                },
                {
                    name: 'Auxiliar Enfermeria',
                    value: 'auxiliar_enfermeria'
                },
                {
                    name: 'Auxiliar de compras',
                    value: 'auxiliar_compras'
                },
                {
                    name: 'Auxiliar HSEQ',
                    value: 'auxiliar_hseq'
                },
                {
                    name: 'Auxiliar Archivo',
                    value: 'auxiliar_g_documental'
                },
                {
                    name: 'Auxiliar Servicios Generales',
                    value: 'aux_serv_gen'
                },
                {
                    name: 'Analista de Selección',
                    value: 'analista_selec'
                },
                {
                    name: 'Auxiliar de selección',
                    value: 'aux_selec'
                },
                {
                    name: 'Analista workforce',
                    value: 'anal_work'
                },
                {
                    name: 'Analista de gestión documental',
                    value: 'anal_g_doc'
                },
                {
                    name: 'Backoffice CND',
                    value: 'backoffice_cnd'
                },
                {
                    name: 'Backoffice',
                    value: 'backoffice'
                },
                {
                    name: 'Coordinador Junior',
                    value: 'coord_jr'
                },
                {
                    name: 'Coordinador de Gestión Documental',
                    value: 'coord_g_doc'
                },
                {
                    name: 'Coordinador Backoffice',
                    value: 'coord_backoffice'
                },
                {
                    name: 'Coordinador de soporte Help desk',
                    value: 'coord_hd'
                },
                {
                    name: 'Coordinador Data Marshall CND',
                    value: 'data_marshall_coord_cnd'
                },
                {
                    name: 'Coordinador Call Center',
                    value: 'coord_c_center'
                },
                {
                    name: 'Coordinador de Formación',
                    value: 'coord_form'
                },
                {
                    name: 'Coordinador Servicio al Cliente y Calidad',
                    value: 'coord_serv_cliente'
                },
                {
                    name: 'Coordinador Data Marshall',
                    value: 'coord_data_marshall'
                },
                {
                    name: 'Coordinador Técnico',
                    value: 'coordinador_tecnico'
                },
                {
                    name: 'Controller Financiero',
                    value: 'controller_financiero'
                },
                {
                    name: 'Contador Junior',
                    value: 'contador_junior'
                },
                {
                    name: 'Coordinador Nomina',
                    value: 'coordinador_nomina'
                },
                {
                    name: 'Coordinador de selección',
                    value: 'coord_selec'
                },
                {
                    name: 'Diseñador Digital y Audiovisual',
                    value: 'dig_design'
                },
                {
                    name: 'Data Marshall CND',
                    value: 'data_marshall_cnd'
                },
                {
                    name: 'Data Marshall Junior',
                    value: 'junior_data_marshall'
                },
                {
                    name: 'Data Marshall',
                    value: 'data_marshall'
                },
                {
                    name: 'Desarrollador Senior',
                    value: 'senior_dev'
                },
                {
                    name: 'Diseñador Web',
                    value: 'web_design'
                },
                {
                    name: 'Ejecutiva de Datos y Recursos Comerciales',
                    value: 'ejec_datos'
                },
                {
                    name: 'Formador CND',
                    value: 'formador_cnd'
                },
                {
                    name: 'Formador',
                    value: 'formador'
                },
                {
                    name: 'Gestor de Aprendizaje',
                    value: 'gestor_aprendizaje'
                },
                {
                    name: 'Gestor Nacional de Operaciones',
                    value: 'gestor_nal_op'
                },
                {
                    name: 'Gerente Comercial',
                    value: 'gerente_comer'
                },
                {
                    name: 'Gerente de Talento Humano',
                    value: 'gerente_th'
                },
                {
                    name: 'Gerente de Tecnología de la información',
                    value: 'ger_tic'
                },
                {
                    name: 'Gestor Operativo',
                    value: 'gest_oper'
                },
                {
                    name: 'Ingeniero Nacional de Telefonía',
                    value: 'ing_nal_tel'
                },
                {
                    name: 'Ingeniero Nacional de Redes y Comunicaciones',
                    value: 'ing_nal_redes'
                },
                {
                    name: 'Ingeniero Nacional de Servidores y Almacenamiento',
                    value: 'ing_nal_servidores'
                },
                {
                    name: 'Jefe de Formación',
                    value: 'jefe_formacion'
                },
                {
                    name: 'Jefe Nacional de Redes y Soporte',
                    value: 'jefe_nal'
                },
                {
                    name: 'Jefe Nacional de Infraestructura',
                    value: 'jefe_nal_inf'
                },
                {
                    name: 'Jefe Nacional de Mesa de Ayuda',
                    value: 'jefe_nal_mesa'
                },
                {
                    name: 'Jefe de Seguridad de la Información',
                    value: 'jefe_seg_inf'
                },
                {
                    name: 'Jefe de Calidad y Procesos',
                    value: 'jefe_procesos'
                },
                {
                    name: 'Jefe Digital',
                    value: 'jefe_dig'
                },
                {
                    name: 'Jefe de diseño',
                    value: 'jefe_design'
                },
                {
                    name: 'Jefe de Cuenta CND',
                    value: 'jefe_cuenta_cnd'
                },
                {
                    name: 'Jefe de formación en calidad',
                    value: 'jefe_calidad'
                },
                {
                    name: 'Jefe de Operaciones',
                    value: 'jefe_operaciones'
                },
                {
                    name: 'Jefe de Cuenta',
                    value: 'jefe_cuenta'
                },
                {
                    name: 'Jefe Regional',
                    value: 'jefe_regional'
                },
                {
                    name: 'Jefe de Nómina',
                    value: 'jefe_nomina'
                },
                {
                    name: 'Jefe Administrativo Nacional',
                    value: 'jefe_admin_nal'
                },
                {
                    name: 'Jefe Administrativo',
                    value: 'jefe_admin'
                },
                {
                    name: 'Lider de Formación',
                    value: 'lider_form'
                },
                {
                    name: 'Lider de Calidad',
                    value: 'lider_calidad'
                },
                {
                    name: 'Lider de Gestión Documental',
                    value: 'lider_g_documental'
                },
                {
                    name: 'Lider de Compras',
                    value: 'lider_compras'
                },
                {
                    name: 'Pusher',
                    value: 'pusher'
                },
                {
                    name: 'Productor Audiovisual',
                    value: 'prod_auv'
                },
                {
                    name: 'Quality',
                    value: 'quality'
                },
                {
                    name: 'Quality CND',
                    value: 'quality_cnd'
                },
                {
                    name: 'Soporte Redes',
                    value: 'sop_redes'
                },
                {
                    name: 'Supervisor Call Center',
                    value: 'call_c_sup_cnd'
                },
                {
                    name: 'Team Leader',
                    value: 'team_leader'
                },
                {
                    name: 'Supervisor Técnico',
                    value: 'supervisor_tecnico'
                },
                {
                    name: 'Soporte de Usuarios',
                    value: 'sop_usuarios'
                },
                {
                    name: 'Tesorero',
                    value: 'tesorero'
                },
                {
                    name: 'Torre de control',
                    value: 'torre_ctrl'
                },
                {
                    name: 'Torre de control Junior',
                    value: 'torre_ctrl_jr'
                }
            ]
        },
        {
            name: 'ccf',
            description: 'Ingrese el CCF',
            type: 'text'
        },
        {
            name: 'salario',
            description: 'Ingrese el salario del trabajador',
            type: 'currency'
        },
        {
            name: 'fecha_inicio_labores',
            description: 'Seleccione la fecha de inicio de las labores del trabajador',
            type: 'date',
            help: 'fecha'
        },
        {
            name: 'lugar_labores',
            description: 'Ingrese el lugar donde en trabajador ejecutará sus labores',
            type: 'text'
        },
        {
            name: 'tel_celular_trabajador',
            description: 'Ingrese el celular de contacto del Trabajador',
            type: 'phone',
            help: 'celular'
        },
        {
            name: 'ciudad_firma',
            description: 'Ingrese la ciudad en la que se firma el presente documento',
            type: 'name'
        },
        {
            name: 'fecha_firma',
            description: 'Seleccione la fecha en la que se firma el presente documento',
            type: 'date',
            help: 'fecha'
        },
        {
            name: 'cedula_trabajador',
            description: 'Ingrese el número de cédula del trabajador',
            type: 'number'
        },
        {
            name: 'expedicion_cedula_trabajador',
            description: 'Ingrese el lugar de expedición del documento del trabajador',
            type: 'text'
        },
        {
            name: 'jerarquia_superior',
            description: 'Describa la jerarquía superior del trabajador',
            type: 'text'
        },
        {
            name: 'jerarquia_inferior',
            description: 'Describa la jerarquía inferior del trabajador',
            type: 'name'
        },
        {
            name: 'niveles_cord_int',
            description: '¿Desea ingresar niveles de coordinación internos?',
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
            name: 'niveles_cord_int_text',
            description: 'Ingrese los niveles de coordinación internos',
            type: 'text',
            prereq: [
                {
                    k: 'niveles_cord_int',
                    v: 's'
                }
            ]
        },
        {
            name: 'niveles_cord_ext',
            description: '¿Desea ingresar niveles de coordinación externos?',
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
            name: 'niveles_cord_ext_text',
            description: 'Ingrese los niveles de coordinación externos',
            type: 'text',
            prereq: [
                {
                    k: 'niveles_cord_ext',
                    v: 's'
                }
            ]
        },
        {
            name: 'package_name',
            description: 'Digita el nombre con que deseas que esta carpeta aprezca en tus archivos',
            type: 'text'
        },
        {
            name: 'antiguedad',
            description: 'Ingrese la antigüedad del trabajador',
            type: 'name'
        },
        {
            name: 'tipo_examen',
            description: 'Ingrese el tipo de exámen que se le hizo al trabajador',
            type: 'text'
        },
        {
            name: 'fecha_examen',
            description: 'Seleccione la fecha en la que se le hizo el exámen al trabajador',
            type: 'date'
        },
        {
            name: 'recomendaciones_medicas',
            description: 'Ingrese las recomendaciones médicas',
            type: 'text'
        },
        {
            name: 'correo_continuar_trabajador',
            description: 'Ingrese el correo del trabajador',
            type: 'email'
        },
        {
            name: 'barrio_trabajador',
            description: 'Ingrese el nombre del barrio donde reside',
            type: 'text'
        },
        {
            name: 'estrato_trabajador',
            description: 'Ingrese su estrato socioeconomico',
            type: 'number'
        },
        {
            name: 'tipo_vivienda',
            description: 'Seleccione el tipo de vivienda',
            type: 'clausula',
            options: [
                {
                    name: 'Propia',
                    value: 'propia'
                },
                {
                    name: 'Familiar',
                    value: 'familiar'
                },
                {
                    name: 'Arrendada',
                    value: 'arrendada'
                }
            ],
            value: 'propia'
        },
        {
            name: 'tel_fijo_trabajador',
            description: 'Ingrese su teléfono fijo',
            type: 'text'
        },
        {
            name: 'fecha_nacimiento_trab',
            description: 'Seleccione su fecha de nacimiento',
            type: 'date',
            help: 'fecha'
        },
        {
            name: 'lugar_nacimiento_trab',
            description: 'Digite su ciudad de nacimiento',
            type: 'text'
        },
        {
            name: 'estado_civil_trab',
            description: 'Ingrese su estado civil',
            type: 'text'
        },
        {
            name: 'rh_trab',
            description: 'Ingrese su RH',
            type: 'text'
        },
        {
            name: 'raza',
            description: 'Seleccione su raza',
            type: 'clausula',
            options: [
                {
                    name: 'Mestizo',
                    value: 'mestizo'
                },
                {
                    name: 'Blanco',
                    value: 'blanco'
                },
                {
                    name: 'Indio',
                    value: 'indio'
                },
                {
                    name: 'Mulato',
                    value: 'mulato'
                },
                {
                    name: 'Negro',
                    value: 'negro'
                },
                {
                    name: 'otra',
                    value: 'otra'
                }
            ],
            value: 'mestizo'
        },
        {
            name: 'cual_raza',
            description: 'Ingrese su raza',
            type: 'text',
            prereq: [
                {
                    k: 'raza',
                    v: 'otra'
                }
            ]
        },
        {
            name: 'genero',
            description: 'Seleccione su genero',
            type: 'clausula',
            options: [
                {
                    name: 'Femenino',
                    value: 'f'
                },
                {
                    name: 'Masculino',
                    value: 'm'
                },
                {
                    name: 'Otro',
                    value: 'otro'
                }
            ],
            value: 'f'
        },
        {
            name: 'cual_genero',
            description: 'Ingrese su genero',
            type: 'text',
            prereq: [
                {
                    k: 'genero',
                    v: 'otro'
                }
            ]
        },
        {
            name: 'enf_meds',
            description: '¿Tiene alguna enfermedad que requiera medicamentos?',
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
            name: 'cual_enfermedad',
            description: 'Ingrese la enfermedad',
            type: 'text',
            prereq: [
                {
                    k: 'enf_meds',
                    v: 's'
                }
            ]
        },
        {
            name: 'alergias',
            description: '¿Tiene alguna alergia?',
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
            name: 'cual_alergias',
            description: 'Ingrese qué alergia tiene',
            type: 'text',
            prereq: [
                {
                    k: 'alergias',
                    v: 's'
                }
            ]
        },
        {
            name: 'fecha_inicio_capacitacion',
            description: 'Seleccione la fecha de inicio de la capacitación',
            type: 'date',
            help: 'fecha'
        },
        {
            name: 'fecha_vinculacion',
            description: 'Seleccione la fecha de vinculación',
            type: 'date',
            help: 'fecha'
        },
        {
            name: 'eps',
            description: 'Ingrese la eps a la que pertenece',
            type: 'text'
        },
        {
            name: 'fondo_pensiones',
            description: 'Ingrese el fondo de pensiones al que pertenece',
            type: 'text'
        },
        {
            name: 'beneficiarios',
            description: '¿Desea ingresar beneficiarios?',
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
            name: 'nombres_beneficiario_1',
            description: 'Ingrese el nombre del primer beneficiario',
            type: 'name',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                }
            ]
        },
        {
            name: 'edad_beneficiario_1',
            description: 'Ingrese la edad del primer beneficiario',
            type: 'number',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                }
            ]
        },
        {
            name: 'identidad_beneficiario_1',
            description: 'Ingrese el documento de identidad del primer beneficiario',
            type: 'number',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                }
            ]
        },
        {
            name: 'nacimiento_beneficiario_1',
            description: 'Seleccione la fecha de nacimiento del primer beneficiario',
            type: 'date',
            help: 'fecha',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                }
            ]
        },
        {
            name: 'parentesco_beneficiario_1',
            description: 'Ingrese el parentesco del primer beneficiario',
            type: 'text',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                }
            ]
        },
        {
            name: 'afiliacion_beneficiario_1',
            description: 'Seleccione el tipo de afiliación del primer beneficiario',
            type: 'clausula',
            options: [
                {
                    name: 'EPS',
                    value: 'eps'
                },
                {
                    name: 'CCF',
                    value: 'ccf'
                },
                {
                    name: 'EPS y CCF',
                    value: 'ambas'
                }
            ],
            value: 'eps',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                }
            ]
        },
        {
            name: 'beneficiario_2',
            description: '¿Desea ingresar un segundo beneficiario?',
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
                    k: 'beneficiarios',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombres_beneficiario_2',
            description: 'Ingrese el nombre del segundo beneficiario',
            type: 'name',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'edad_beneficiario_2',
            description: 'Ingrese la edad del segundo beneficiario',
            type: 'number',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'identidad_beneficiario_2',
            description: 'Ingrese el documento de identidad del segundo beneficiario',
            type: 'number',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'nacimiento_beneficiario_2',
            description: 'Seleccione la fecha de nacimiento del segundo beneficiario',
            type: 'date',
            help: 'fecha',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'parentesco_beneficiario_2',
            description: 'Ingrese el parentesco del segundo beneficiario',
            type: 'text',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'afiliacion_beneficiario_2',
            description: 'Seleccione el tipo de afiliación del segundo beneficiario',
            type: 'clausula',
            options: [
                {
                    name: 'EPS',
                    value: 'eps'
                },
                {
                    name: 'CCF',
                    value: 'ccf'
                },
                {
                    name: 'EPS y CCF',
                    value: 'ambas'
                }
            ],
            value: 'eps',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'beneficiario_3',
            description: '¿Desea ingresar un tercer beneficiario?',
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
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombres_beneficiario_3',
            description: 'Ingrese el nombre del tercer beneficiario',
            type: 'name',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                },
                {
                    k: 'beneficiario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'edad_beneficiario_3',
            description: 'Ingrese la edad del tercer beneficiario',
            type: 'number',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                },
                {
                    k: 'beneficiario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'identidad_beneficiario_3',
            description: 'Ingrese el documento de identidad del tercer beneficiario',
            type: 'number',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                },
                {
                    k: 'beneficiario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'nacimiento_beneficiario_3',
            description: 'Seleccione la fecha de nacimiento del tercer beneficiario',
            type: 'date',
            help: 'fecha',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                },
                {
                    k: 'beneficiario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'parentesco_beneficiario_3',
            description: 'Ingrese el parentesco del tercer beneficiario',
            type: 'text',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                },
                {
                    k: 'beneficiario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'afiliacion_beneficiario_3',
            description: 'Seleccione el tipo de afiliación del tercer beneficiario',
            type: 'clausula',
            options: [
                {
                    name: 'EPS',
                    value: 'eps'
                },
                {
                    name: 'CCF',
                    value: 'ccf'
                },
                {
                    name: 'EPS y CCF',
                    value: 'ambas'
                }
            ],
            value: 'eps',
            prereq: [
                {
                    k: 'beneficiarios',
                    v: 's'
                },
                {
                    k: 'beneficiario_2',
                    v: 's'
                },
                {
                    k: 'beneficiario_3',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_mama',
            help: 'nombre',
            description: 'Ingrese el nombre de la mamá',
            type: 'name'
        },
        {
            name: 'fijo_mama',
            description: 'Ingrese el número de telefono fijo de la mamá',
            type: 'text'
        },
        {
            name: 'celular_mama',
            description: 'Ingrese el número de telefono celular de la mamá',
            type: 'phone'
        },
        {
            name: 'nombre_papa',
            help: 'nombre',
            description: 'Ingrese el nombre del papá',
            type: 'name'
        },
        {
            name: 'fijo_papa',
            description: 'Ingrese el número de telefono fijo del papá',
            type: 'text'
        },
        {
            name: 'celular_papa',
            description: 'Ingrese el número de telefono celular del papá',
            type: 'phone'
        },
        {
            name: 'hermanos',
            description: '¿Desea ingresar información de hermanos?',
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
            name: 'nombre_hermanos',
            help: 'nombre',
            description: 'Ingrese el nombre del/la hermano/a',
            type: 'name',
            prereq: [
                {
                    k: 'hermanos',
                    v: 's'
                }
            ]
        },
        {
            name: 'fijo_hermanos',
            description: 'Ingrese el número de telefono fijo del/la hermano/a',
            type: 'text',
            prereq: [
                {
                    k: 'hermanos',
                    v: 's'
                }
            ]
        },
        {
            name: 'celular_hermanos',
            description: 'Ingrese el número de telefono celular del/la hermano/a',
            type: 'phone',
            prereq: [
                {
                    k: 'hermanos',
                    v: 's'
                }
            ]
        },
        {
            name: 'otros_familiares',
            description: '¿Desea ingresar información de otro familiar?',
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
            name: 'nombre_otro',
            help: 'nombre',
            description: 'Ingrese el nombre del otro familiar',
            type: 'name',
            prereq: [
                {
                    k: 'otros_familiares',
                    v: 's'
                }
            ]
        },
        {
            name: 'fijo_otro',
            description: 'Ingrese el número de telefono fijo del otro familiar',
            type: 'text',
            prereq: [
                {
                    k: 'otros_familiares',
                    v: 's'
                }
            ]
        },
        {
            name: 'celular_otro',
            description: 'Ingrese el número de telefono celular del otro familiar',
            type: 'phone',
            prereq: [
                {
                    k: 'otros_familiares',
                    v: 's'
                }
            ]
        },
        {
            name: 'emergencia_1_nombre',
            description: 'Ingrese el nombre del primer contacto de emergencia',
            type: 'name'
        },
        {
            name: 'emergencia_1_telefono',
            description: 'Ingrese el número de teléfono del primer contacto de emergencia',
            type: 'text'
        },
        {
            name: 'emergencia_1_celular',
            description: 'Ingrese el número de celular del primer contacto de emergencia',
            type: 'phone'
        },
        {
            name: 'emergencia_1_parentesco',
            description: 'Ingrese el parentesco del primer contacto de emergencia',
            type: 'text'
        },
        {
            name: 'emergencia_2_nombre',
            description: 'Ingrese el nombre del segundo contacto de emergencia',
            type: 'name'
        },
        {
            name: 'emergencia_2_telefono',
            description: 'Ingrese el número de teléfono del segundo contacto de emergencia',
            type: 'text'
        },
        {
            name: 'emergencia_2_celular',
            description: 'Ingrese el número de celular del segundo contacto de emergencia',
            type: 'phone'
        },
        {
            name: 'emergencia_2_parentesco',
            description: 'Ingrese el parentesco del segundo contacto de emergencia',
            type: 'text'
        },
        {
            name: 'institucion_primaria',
            description: 'Ingrese el nombre de la institución donde cursó primaria',
            type: 'name'
        },
        {
            name: 'inicio_primaria',
            description: 'Seleccione la fecha en la que inició primaria',
            type: 'date',
            help: 'fecha'
        },
        {
            name: 'fin_primaria',
            description: 'Seleccione la fecha en la que finalizó primaria',
            type: 'date',
            help: 'fecha'
        },
        {
            name: 'titulo_primaria',
            description: 'Ingrese el último grado que cursó en primaria',
            type: 'name'
        },
        {
            name: 'institucion_secundaria',
            description: 'Ingrese el nombre de la institución donde cursó secundaria',
            type: 'name'
        },
        {
            name: 'inicio_secundaria',
            description: 'Seleccione la fecha en la que inició secundaria',
            type: 'date',
            help: 'fecha'
        },
        {
            name: 'fin_secundaria',
            description: 'Seleccione la fecha en la que finalizó secundaria',
            type: 'date',
            help: 'fecha'
        },
        {
            name: 'titulo_secundaria',
            description: 'Ingrese el último grado que cursó en secundaria',
            type: 'name'
        },
        {
            name: 'tecnico',
            description: '¿Desea ingresar información académica de técnico o tecnólogo?',
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
            name: 'institucion_tecnico',
            description: 'Ingrese el nombre de la institución donde cursó el técnico/tecnologo',
            type: 'name',
            prereq: [
                {
                    k: 'tecnico',
                    v: 's'
                }
            ]
        },
        {
            name: 'inicio_tecnico',
            description: 'Seleccione la fecha en la que inició el técnico/tecnologo',
            type: 'date',
            help: 'fecha',
            prereq: [
                {
                    k: 'tecnico',
                    v: 's'
                }
            ]
        },
        {
            name: 'fin_tecnico',
            description: 'Seleccione la fecha en la que finalizó el técnico/tecnologo',
            type: 'date',
            help: 'fecha',
            prereq: [
                {
                    k: 'tecnico',
                    v: 's'
                }
            ]
        },
        {
            name: 'titulo_tecnico',
            description: 'Ingrese el titulo que consiguió en el técnico/tecnologo',
            type: 'name',
            prereq: [
                {
                    k: 'tecnico',
                    v: 's'
                }
            ]
        },
        {
            name: 'universidad',
            description: '¿Desea ingresar información académica de carrera universitaria?',
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
            name: 'institucion_universidad',
            description: 'Ingrese el nombre de la institución donde hizo la carrera universitaria',
            type: 'name',
            prereq: [
                {
                    k: 'universidad',
                    v: 's'
                }
            ]
        },
        {
            name: 'inicio_universidad',
            description: 'Seleccione la fecha en la que inició la carrera universitaria',
            type: 'date',
            help: 'fecha',
            prereq: [
                {
                    k: 'universidad',
                    v: 's'
                }
            ]
        },
        {
            name: 'fin_universidad',
            description: 'Seleccione la fecha en la que finalizó la carrera universitaria',
            type: 'date',
            help: 'fecha',
            prereq: [
                {
                    k: 'universidad',
                    v: 's'
                }
            ]
        },
        {
            name: 'titulo_universidad',
            description: 'Ingrese el titulo que consiguió en la carrera universitaria',
            type: 'name',
            prereq: [
                {
                    k: 'universidad',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_laboral',
            description: '¿Desea ingresar información de historia laboral?',
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
            name: 'info_laboral_empresa_1',
            description: 'Ingrese el nombre de la empresa donde trabajó',
            type: 'name',
            prereq: [
                {
                    k: 'info_laboral',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_laboral_cargo_1',
            description: 'Ingrese el cargo que desarrolló',
            type: 'text',
            prereq: [
                {
                    k: 'info_laboral',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_laboral_inicio_1',
            description: 'Seleccione la fecha en la que ingresó a la empresa previamente ingresada',
            type: 'date',
            help: 'fecha',
            prereq: [
                {
                    k: 'info_laboral',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_laboral_fin_1',
            description: 'Seleccione la fecha en la que salió de la empresa previamente ingresada',
            type: 'date',
            help: 'fecha',
            prereq: [
                {
                    k: 'info_laboral',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_laboral_funciones_1',
            description: 'Ingrese las principales funciones que desarrolló en su tiempo en la empresa previamente ingresada',
            type: 'text',
            prereq: [
                {
                    k: 'info_laboral',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_laboral_2',
            description: '¿Desea ingresar una segunda entrada en la información de historia laboral?',
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
                    k: 'info_laboral',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_laboral_empresa_2',
            description: 'Ingrese el nombre de la empresa donde trabajó',
            type: 'name',
            prereq: [
                {
                    k: 'info_laboral',
                    v: 's'
                },
                {
                    k: 'info_laboral_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_laboral_cargo_2',
            description: 'Ingrese el cargo que desarrolló',
            type: 'text',
            prereq: [
                {
                    k: 'info_laboral',
                    v: 's'
                },
                {
                    k: 'info_laboral_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_laboral_inicio_2',
            description: 'Seleccione la fecha en la que ingresó a la empresa previamente ingresada',
            type: 'date',
            help: 'fecha',
            prereq: [
                {
                    k: 'info_laboral',
                    v: 's'
                },
                {
                    k: 'info_laboral_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_laboral_fin_2',
            description: 'Seleccione la fecha en la que salió de la empresa previamente ingresada',
            type: 'date',
            help: 'fecha',
            prereq: [
                {
                    k: 'info_laboral',
                    v: 's'
                },
                {
                    k: 'info_laboral_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'info_laboral_funciones_2',
            description: 'Ingrese las principales funciones que desarrolló en su tiempo en la empresa previamente ingresada',
            type: 'text',
            prereq: [
                {
                    k: 'info_laboral',
                    v: 's'
                },
                {
                    k: 'info_laboral_2',
                    v: 's'
                }
            ]
        },
        {
            name: 'fechanaci_trabajador',
            description: 'Ingrese la fecha de nacimiento del trabajador',
            type: 'date',
            help: 'fecha'
        },
        {
            name: 'dir_dom_trabajador',
            description: 'Ingrese la dirección de domicilio del trabajador',
            type: 'text'
        },
        {
            name: 'tel_celular_trabajador',
            description: 'Ingrese el número de celular del trabajador',
            type: 'phone'
        },
        {
            name: 'correo_trabajador',
            description: 'Ingrese el correo electrónico del trabajador',
            type: 'email'
        },
        {
            name: 'estrato_trabajador',
            description: 'Ingrese el estrato del trabajador',
            type: 'number'
        },
        {
            name: 'fecha_terminacion_trabajador',
            description: 'Ingrese la fecha de inicio de labores del trabajador',
            type: 'date',
            help: 'fecha'
        },
        {
            name: 'especialidad_trabajador',
            description: 'Ingrese la especialidad del trabajador',
            type: 'text'
        },
        {
            name: 'numero_grupo_trabajador',
            description: 'Ingrese el número de grupo del trabajador',
            type: 'number'
        },
        {
            name: 'arl_trabajador',
            description: 'Ingrese la ARL del trabajador',
            type: 'text'
        },
        {
            name: 'institucion_trabajador',
            description: 'Ingrese la institución educativa del trabajador',
            type: 'text'
        },
        {
            name: 'nit_trabajador',
            description: 'Ingrese el NIT de la institución educativa del trabajador',
            type: 'number'
        },
        { 
            name: 'sena_centro_trabajador',
            description: 'Ingrese el centro de formación del SENA del trabajador',
            type: 'text'
        },
        {
            name: 'confirm_reg_interno',
            description: '¿Confirma haber leido el reglamento interno de trabajo?',
            type: 'clausula',
            options: [
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            value: 's'
        },
        {
            name: 'confirm_pol_int',
            description: '¿Confirma haber leido las politicas internas de gnp?',
            type: 'clausula',
            options: [
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            value: 's'
        },
        {
            name: 'confirm_carnet',
            description: '¿Confirma haber recibido el carnet de identificación institucional?',
            type: 'clausula',
            options: [
                {
                    name: 'Si',
                    value: 's'
                }
            ],
            value: 's'
        },
        {
            name: 'autoriza_gestiones',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza efectuar las gestiones pertinentes para el desarrollo del objeto social de la compañía en lo que tiene que ver con el cumplimiento del objeto del contrato celebrado con el Titular de la información.?',
            type: 'clausula',
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
            name: 'autoriza_contactar_correo',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza contactar al Titular a través de correo electrónico para el envío de extractos, estados de cuenta o facturas en relación con las obligaciones derivadas del contrato celebrado entre las partes.?',
            type: 'clausula',
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
            name: 'autoriza_suministrar',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza suministrar información de contacto a la fuerza comercial y/o red de distribución, telemercadeo, investigación de mercados, etc.?',
            type: 'clausula',
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
            name: 'autoriza_dar_cumplimiento',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza dar cumplimiento a las obligaciones contraídas por GNP con el Titular de la Información, con relación al pago de salarios, prestaciones sociales y demás retribuciones consagradas en el contrato de trabajo?',
            type: 'clausula',
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
            name: 'autoriza_contactar_sms',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza contactar al Titular a través de medios electrónicos - SMS o chat para el envío de noticias relacionadas con campañas de fidelización o mejora de servicio.?',
            type: 'clausula',
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
            name: 'autoriza_ofrecer',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza ofrecer programas de bienestar corporativo y planificar actividades empresariales, para el titular y sus beneficiarios (hijos, cónyuge, compañero permanente).?',
            type: 'clausula',
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
            name: 'autoriza_encuestas',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza efectuar encuestas de satisfacción respecto de los bienes y servicios ofrecidos por GNP?',
            type: 'clausula',
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
            name: 'autoriza_trans_datos',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza transferir datos personales fuera del país a la compañía matriz de GNP?',
            type: 'clausula',
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
            name: 'autoriza_contactar_tel',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza contactar al Titular a través de medios telefónicos para realizar encuestas, estudios y/o confirmación de datos personales necesarios para la ejecución de una relación contractual.?',
            type: 'clausula',
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
            name: 'autoriza_trans_datos_terceros',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza transmitir los datos personales fuera del país a terceros con los cuales GNP haya suscrito un contrato de procesamiento de datos?',
            type: 'clausula',
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
            name: 'autoriza_sum_info',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza suministrar la información a terceros con los cuales GNP tenga relación contractual y que sea necesario entregársela para el cumplimiento del objeto contratado.?',
            type: 'clausula',
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
            name: 'autoriza_prestar_servicios',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza prestar los servicios ofrecidos por GNP y aceptados en el contrato suscrito.?',
            type: 'clausula',
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
            name: 'autoriza_invitaciones',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza realizar invitaciones a eventos y ofrecer nuevos productos y servicios.?',
            type: 'clausula',
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
            name: 'autoriza_gest_tramites',
            description: 'Política de Tratamiento de Datos Personales: ¿Autoriza gestionar trámites (solicitudes, quejas, reclamos).?',
            type: 'clausula',
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
            name: 'correo_trabajador',
            description: 'Digite el correo electrónico que usará para firmar',
            type: 'email'
        }
    ],
    operation: [],
    sign: [
        'nombre_trabajador',
        'dir_dom_trabajador',
        'campania',
        'cargo',
        'ccf',
        'salario',
        'fecha_inicio_labores',
        'tel_celular_trabajador',
        'ciudad_firma',
        'fecha_firma',
        'cedula_trabajador',
        'expedicion_cedula_trabajador',
        'jerarquia_superior',
        'jerarquia_inferior',
        'niveles_cord_int',
        'niveles_cord_int_text',
        'niveles_cord_ext',
        'niveles_cord_ext_text',
        'package_name',
        'correo_continuar_trabajador',
        'correo_trabajador',
        'emergencia_1_nombre',
        'emergencia_1_telefono',
        'emergencia_1_celular',
        'emergencia_1_parentesco',
        'emergencia_2_nombre',
        'emergencia_2_telefono',
        'emergencia_2_celular',
        'emergencia_2_parentesco',
        'institucion_primaria',
        'inicio_primaria',
        'fin_primaria',
        'titulo_primaria',
        'institucion_secundaria',
        'inicio_secundaria',
        'fin_secundaria',
        'titulo_secundaria',
        'celular_mama',
        'celular_papa',
        'celular_hermanos',
        'celular_otro',
        'cedula_trabajador',
        'nombre_trabajador',
        'dir_dom_trabajador',
        'sena_centro_trabajador',
        'nit_trabajador',
        'institucion_trabajador',
        'arl_trabajador',
        'eps_trabajador',
        'numero_grupo_trabajador',
        'especialidad_trabajador',
        'fecha_terminacion_trabajador',
        'fecha_inicio_trabajador',
        'correo_trabajador',
        'tel_celular_trabajador',

    ],
    preFill: [
        {
            name: 'correo_gnp',
            value: 'milena.castillo@gnpsa.com'
        },
        {
            name: 'nombre_gnp',
            value: 'MILENA CASTILLO'
        },
        {
            name: 'cc_gnp',
            value: '53159805'
        }
    ],
    signatureProfile: [
        {
            type: 'firma_trabajador',
            identification: 'cedula_trabajador',
            name: 'nombre_trabajador',
            email: 'correo_trabajador',
            'package': true,
            order: 0
        },
        {
            type: 'firma_gnp',
            identification: 'cc_gnp',
            name: 'nombre_gnp',
            email: 'correo_gnp',
            order: 1
        }
    ],
    preBuildData: [
        'num_contrato',
        'objeto_contrato',
        'nombre_trabajador',
        'dir_dom_trabajador',
        'campania',
        'cargo',
        'ccf',
        'salario',
        'fecha_inicio_labores',
        'lugar_labores',
        'tel_celular_trabajador',
        'ciudad_firma',
        'fecha_firma',
        'cedula_trabajador',
        'expedicion_cedula_trabajador',
        'jerarquia_superior',
        'jerarquia_inferior',
        'niveles_cord_int',
        'niveles_cord_int_text',
        'niveles_cord_ext',
        'niveles_cord_ext_text',
        'package_name',
        'antiguedad',
        'tipo_examen',
        'fecha_examen',
        'recomendaciones_medicas',
        'correo_continuar_trabajador'
    ],
    name: 'Contratación GNP V5 (Contrato aprendizaje)',
    files: [
        {
            name: 'Hoja de Vida',
            approve: 'pending'
        },
        {
            name: 'Antecedente Procuraduría',
            approve: 'pending'
        },
        {
            name: 'Antecedente Policía',
            approve: 'pending'
        },
        {
            name: 'Antecedente contraloría',
            approve: 'pending'
        },
        {
            name: 'Antecedente Registro Nacional de Medidas Correctivas',
            approve: 'pending'
        },
        {
            name: 'Certificados de estudio',
            approve: 'pending'
        },
        {
            name: 'Certificados laborales',
            approve: 'pending'
        },
        {
            name: 'Fotocopia de la cedula',
            approve: 'pending'
        },
        {
            name: 'Certificado de cuenta bancaria',
            approve: 'pending'
        },
        {
            name: 'Certificado de EPS (no mayor a 30 días)(No Ruaf-Fosyga)',
            approve: 'pending'
        },
        {
            name: 'Certificado de Fondo de pensión(No mayor a 30 Días)',
            approve: 'pending'
        },
        {
            name: 'FOTO 3x4',
            approve: 'pending'
        },
        {
            name: 'Copia carnet de vacunación',
            approve: 'pending'
        },
        {
            name: 'Documentos de beneficiarios',
            approve: 'pending'
        }
    ],
    username: '0f03fff6-2122-4373-bd12-69fa58592bc7',
    company: ObjectId('623099c6d9a7ac3bbc96b943'),
    preBuild: true,
    price: 5000,
    help: {
        cel: 'Ejemplo: 3156466183',
        fijo: 'Ejemplo: 2672921',
        fecha: 'Ejemplo: 23 de febrero de 2022',
        nombre: 'Ejemplo: Juan David Saenz Lopez',
        celular: 'Ejemplo: 3027091713'
    },
    build: 3
}