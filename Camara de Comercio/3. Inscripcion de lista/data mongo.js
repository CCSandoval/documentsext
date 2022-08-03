{
    _id: ObjectId('62e82d4f51fc27d23d9291a1'),
    config: [
        {
            name: 'ciudad',
            description: 'Ingrese la ciudad en la que se entrega el documento',
            type: 'text'
        },
        {
            name: 'fecha',
            description: 'Seleccione la fecha en la que se entrega el documento',
            type: 'date'
        },
        {
            name: 'nombres_presentante',
            description: 'Ingrese los nombres y apellidos de quien presenta la lista',
            type: 'name'
        },
        {
            name: 'cc_presentante',
            description: 'Ingrese el número de cédula de quien presenta la lista',
            type: 'number'
        },
        {
            name:'tipo_persona_principal_1',
            description:'Seleccione el tipo de persona del primer candidato principal',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n'
        },
        {
            name:'razon_principal_1',
            type:'name',
            description:'Ingrese la razón social del primer candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_1',
                    v:'j'
                }
            ]
        },
        {
            name:'nit_principal_1',
            type:'text',
            description:'Ingrese el NIT del primer candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_1',
                    v:'j'
                }
            ]
        },
        {
            name: 'nombre_principal_1',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_1',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del primer candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_1',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del primer candidato principal'
                }
            ],
        },
        {
            name: 'cc_principal_1',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_1',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del primer candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_1',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del primer candidato principal'
                }
            ],
        },
        {
            name:'tipo_persona_suplente_1',
            description:'Seleccione el tipo de persona del primer candidato suplente',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n'
        },
        {
            name:'razon_suplente_1',
            type:'name',
            description:'Ingrese la razón social del primer candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_1',
                    v:'j'
                }
            ]
        },
        {
            name:'nit_suplente_1',
            type:'text',
            description:'Ingrese el NIT del primer candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_1',
                    v:'j'
                }
            ]
        },
        {
            name: 'nombre_suplente_1',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_1',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del primer candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_1',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del primer candidato suplente'
                }
            ],
        },
        {
            name: 'cc_suplente_1',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_1',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del primer candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_1',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del primer candidato suplente'
                }
            ],
        },
        {
            name:'tipo_persona_principal_2',
            description:'Seleccione el tipo de persona del segundo candidato principal',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n'
        },
        {
            name:'razon_principal_2',
            type:'name',
            description:'Ingrese la razón social del segundo candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_2',
                    v:'j'
                }
            ]
        },
        {
            name:'nit_principal_2',
            type:'text',
            description:'Ingrese el NIT del segundo candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_2',
                    v:'j'
                }
            ]
        },
        {
            name: 'nombre_principal_2',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_2',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del segundo candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_2',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del segundo candidato principal'
                }
            ],
        },
        {
            name: 'cc_principal_2',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_2',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del segundo candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_2',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del segundo candidato principal'
                }
            ],
        },
        {
            name:'tipo_persona_suplente_2',
            description:'Seleccione el tipo de persona del segundo candidato suplente',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n'
        },
        {
            name:'razon_suplente_2',
            type:'name',
            description:'Ingrese la razón social del segundo candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_2',
                    v:'j'
                }
            ]
        },
        {
            name:'nit_suplente_2',
            type:'text',
            description:'Ingrese el NIT del segundo candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_2',
                    v:'j'
                }
            ]
        },
        {
            name: 'nombre_suplente_2',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_2',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del segundo candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_2',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del segundo candidato suplente'
                }
            ],
        },
        {
            name: 'cc_suplente_2',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_2',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del segundo candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_2',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del segundo candidato suplente'
                }
            ],
        },
        {
            name:'tipo_persona_principal_3',
            description:'Seleccione el tipo de persona del tercer candidato principal',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n'
        },
        {
            name:'razon_principal_3',
            type:'name',
            description:'Ingrese la razón social del tercer candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_3',
                    v:'j'
                }
            ]
        },
        {
            name:'nit_principal_3',
            type:'text',
            description:'Ingrese el NIT del tercer candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_3',
                    v:'j'
                }
            ]
        },
        {
            name: 'nombre_principal_3',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_3',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del tercer candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_3',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del tercer candidato principal'
                }
            ],
        },
        {
            name: 'cc_principal_3',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_3',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del tercer candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_3',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del tercer candidato principal'
                }
            ],
        },
        {
            name:'tipo_persona_suplente_3',
            description:'Seleccione el tipo de persona del tercer candidato suplente',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n'
        },
        {
            name:'razon_suplente_3',
            type:'name',
            description:'Ingrese la razón social del tercer candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_3',
                    v:'j'
                }
            ]
        },
        {
            name:'nit_suplente_3',
            type:'text',
            description:'Ingrese el NIT del tercer candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_3',
                    v:'j'
                }
            ]
        },
        {
            name: 'nombre_suplente_3',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_3',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del tercer candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_3',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del tercer candidato suplente'
                }
            ],
        },
        {
            name: 'cc_suplente_3',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_3',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del tercer candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_3',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del tercer candidato suplente'
                }
            ],
        },
        {
            name:'tipo_persona_principal_4',
            description:'Seleccione el tipo de persona del cuarto candidato principal',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n'
        },
        {
            name:'razon_principal_4',
            type:'name',
            description:'Ingrese la razón social del cuarto candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_4',
                    v:'j'
                }
            ]
        },
        {
            name:'nit_principal_4',
            type:'text',
            description:'Ingrese el NIT del cuarto candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_4',
                    v:'j'
                }
            ]
        },
        {
            name: 'nombre_principal_4',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_4',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del cuarto candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_4',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del cuarto candidato principal'
                }
            ],
        },
        {
            name: 'cc_principal_4',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_4',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del cuarto candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_4',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del cuarto candidato principal'
                }
            ],
        },
        {
            name:'tipo_persona_suplente_4',
            description:'Seleccione el tipo de persona del cuarto candidato suplente',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n'
        },
        {
            name:'razon_suplente_4',
            type:'name',
            description:'Ingrese la razón social del cuarto candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_4',
                    v:'j'
                }
            ]
        },
        {
            name:'nit_suplente_4',
            type:'text',
            description:'Ingrese el NIT del cuarto candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_4',
                    v:'j'
                }
            ]
        },
        {
            name: 'nombre_suplente_4',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_4',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del cuarto candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_4',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del cuarto candidato suplente'
                }
            ],
        },
        {
            name: 'cc_suplente_4',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_4',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del cuarto candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_4',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del cuarto candidato suplente'
                }
            ],
        },
        {
            name: 'mas_candidatos',
            type: 'clausula',
            description: 'Desea ingresar más candidatos.?',
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
            name:'tipo_persona_principal_5',
            description:'Seleccione el tipo de persona del quinto candidato principal',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n',
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'razon_principal_5',
            type:'name',
            description:'Ingrese la razón social del quinto candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_5',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'nit_principal_5',
            type:'text',
            description:'Ingrese el NIT del quinto candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_5',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ],
        },
        {
            name: 'nombre_principal_5',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_5',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del quinto candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_5',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del quinto candidato principal'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ],
        },
        {
            name: 'cc_principal_5',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_5',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del quinto candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_5',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del quinto candidato principal'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'tipo_persona_suplente_5',
            description:'Seleccione el tipo de persona del quinto candidato suplente',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n',
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'razon_suplente_5',
            type:'name',
            description:'Ingrese la razón social del quinto candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_5',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'nit_suplente_5',
            type:'text',
            description:'Ingrese el NIT del quinto candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_5',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_suplente_5',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_5',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del quinto candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_5',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del quinto candidato suplente'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_suplente_5',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_5',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del quinto candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_5',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del quinto candidato suplente'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'tipo_persona_principal_6',
            description:'Seleccione el tipo de persona del sexto candidato principal',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n',
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'razon_principal_6',
            type:'name',
            description:'Ingrese la razón social del sexto candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_6',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'nit_principal_6',
            type:'text',
            description:'Ingrese el NIT del sexto candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_6',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ],
        },
        {
            name: 'nombre_principal_6',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_6',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del sexto candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_6',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del sexto candidato principal'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ],
        },
        {
            name: 'cc_principal_6',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_6',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del sexto candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_6',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del sexto candidato principal'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'tipo_persona_suplente_6',
            description:'Seleccione el tipo de persona del sexto candidato suplente',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n',
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'razon_suplente_6',
            type:'name',
            description:'Ingrese la razón social del sexto candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_6',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'nit_suplente_6',
            type:'text',
            description:'Ingrese el NIT del sexto candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_6',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_suplente_6',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_6',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del sexto candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_6',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del sexto candidato suplente'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_suplente_6',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_6',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del sexto candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_6',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del sexto candidato suplente'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'tipo_persona_principal_7',
            description:'Seleccione el tipo de persona del séptimo candidato principal',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n',
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'razon_principal_7',
            type:'name',
            description:'Ingrese la razón social del séptimo candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_7',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'nit_principal_7',
            type:'text',
            description:'Ingrese el NIT del séptimo candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_7',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ],
        },
        {
            name: 'nombre_principal_7',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_7',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del séptimo candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_7',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del séptimo candidato principal'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ],
        },
        {
            name: 'cc_principal_7',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_7',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del séptimo candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_7',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del séptimo candidato principal'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'tipo_persona_suplente_7',
            description:'Seleccione el tipo de persona del séptimo candidato suplente',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n',
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'razon_suplente_7',
            type:'name',
            description:'Ingrese la razón social del séptimo candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_7',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'nit_suplente_7',
            type:'text',
            description:'Ingrese el NIT del séptimo candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_7',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_suplente_7',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_7',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del séptimo candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_7',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del séptimo candidato suplente'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_suplente_7',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_7',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del séptimo candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_7',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del séptimo candidato suplente'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'tipo_persona_principal_8',
            description:'Seleccione el tipo de persona del octavo candidato principal',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n',
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'razon_principal_8',
            type:'name',
            description:'Ingrese la razón social del octavo candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_8',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'nit_principal_8',
            type:'text',
            description:'Ingrese el NIT del octavo candidato principal',
            prereq:[
                {
                    k:'tipo_persona_principal_8',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ],
        },
        {
            name: 'nombre_principal_8',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_8',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del octavo candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_8',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del octavo candidato principal'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ],
        },
        {
            name: 'cc_principal_8',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_8',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del octavo candidato principal'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_principal_8',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del octavo candidato principal'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'tipo_persona_suplente_8',
            description:'Seleccione el tipo de persona del octavo candidato suplente',
            type:'clausula',
            options:[
                {
                    name:'Natural',
                    value:'n'
                },
                {
                    name:'Juridica',
                    value:'j'
                },
            ],
            value:'n',
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'razon_suplente_8',
            type:'name',
            description:'Ingrese la razón social del octavo candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_8',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name:'nit_suplente_8',
            type:'text',
            description:'Ingrese el NIT del octavo candidato suplente',
            prereq:[
                {
                    k:'tipo_persona_suplente_8',
                    v:'j'
                },
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name: 'nombre_suplente_8',
            type: 'name',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_8',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el nombre del representante legal del octavo candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_8',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el nombre del octavo candidato suplente'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name: 'cc_suplente_8',
            type: 'number',
            description: [
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_8',
                            v: 'j'
                        }
                    ],
                    text: 'Ingrese el número de cédula del representante legal del octavo candidato suplente'
                },
                {
                    prereq: [
                        {
                            k: 'tipo_persona_suplente_8',
                            v: 'n'
                        }
                    ],
                    text: 'Ingrese el número de cédula del octavo candidato suplente'
                }
            ],
            prereq:[
                {
                    k: 'mas_candidatos',
                    v: 's'
                }
            ]
        },
        {
            name: 'correo_presentante',
            description: 'Ingrese el correo electrónico donde llegará la invitación a añadir adjuntos',
            type: 'email'
        },
        {
            name: 'cell_presentante',
            description: 'Ingrese el número de teléfono de contacto de quien presenta la lista',
            type: 'phone'
        },
        {
            name: 'package_name',
            description: 'Ingrese el nombre que tendrá el paquete de anexos',
            type: 'text'
        }
    ],
    operation: [],
    name: 'Solicitud de inscripción de lista Junta Directiva',
    preFill: [],
    sign: [
        'nombres_presentante',
        'cc_presentante',
        'correo_presentante',
        'cell_presentante'
    ],
    signatureProfile: [
        {
            name: 'nombres_presentante',
            identification: 'cc_presentante',
            email: 'correo_presentante',
            phone: 'cell_presentante',
            type: 'firma_presentante',
            'package': true
        }
    ],
    files: [
        {
            name: 'Constancia de Aceptación Principal 1',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 1',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 2',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 2',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 3',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 3',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 4',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 4',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 5',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 5',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 6',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 6',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 7',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 7',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Principal 8',
            approve: 'pending',
            required: false
        },
        {
            name: 'Constancia de Aceptación Suplente 8',
            approve: 'pending',
            required: false
        }
    ],
    price: 5000,
    build: 3
}