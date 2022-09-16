{
  _id: ObjectId('6323a0321197e88531953311'),
  config: [
      {
          name: 'nombre_empresa_empleador',
          type: 'name',
          description: 'Ingrese el nombre de la empresa empleadora'
      },
      {
          name: 'nit_empleador',
          type: 'text',
          description: 'Ingrese el NIT de la empresa empleadora'
      },
      {
          name: 'domicilio_empleador',
          type: 'text',
          description: 'Ingrese el municipio de domicilio de la empresa empleadora'
      },
      {
          name: 'direccion_empleador',
          type: 'text',
          description: 'Ingrese la dirección de la empresa empleadora'
      },
      {
          name: 'nombre_empleado',
          type: 'name',
          description: 'Ingrese el nombre del empleado'
      },
      {
          name: 'tipo_id_empleado',
          type: 'clausula',
          description: 'Seleccione el tipo de identificación del empleado',
          value: 'cc',
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
                  name: 'Permiso especial de permanencia',
                  value: 'pep'
              },
              {
                  name: 'Permiso por proteccion temporal',
                  value: 'ppt'
              }
          ]
      },
      {
          name: 'cc_empleado',
          type: 'number',
          description: 'Ingrese el número de cédula de ciudadanía del empleado',
          prereq: [
              {
                  k: 'tipo_id_empleado',
                  v: 'cc'
              }
          ]
      },
      {
          name: 'ce_empleado',
          type: 'number',
          description: 'Ingrese el número de cédula de extranjería del empleado',
          prereq: [
              {
                  k: 'tipo_id_empleado',
                  v: 'ce'
              }
          ]
      },
      {
          name: 'pep_empleado',
          type: 'text',
          description: 'Ingrese el permiso especial de permanencia del empleado',
          prereq: [
              {
                  k: 'tipo_id_empleado',
                  v: 'pep'
              }
          ]
      },
      {
          name: 'ppt_empleado',
          type: 'text',
          description: 'Ingrese el permiso por protección temporal del empleado',
          prereq: [
              {
                  k: 'tipo_id_empleado',
                  v: 'ppt'
              }
          ]
      },
      {
          name: 'domicilio_empleado',
          type: 'text',
          description: 'Ingrese el municipio de domicilio del empleado'
      },
      {
          name: 'direccion_empleado',
          type: 'text',
          description: 'Ingrese la dirección del empleado'
      },
      {
          name: 'lugar_exp_id_empleado',
          type: 'text',
          description: 'Ingrese el lugar de expedición del documento de identidad del empleado'
      },
      {
          name: 'nombre_rep_empleador',
          type: 'text',
          description: 'Ingrese el nombre del representante legal de la empresa contratadora'
      },
      {
          name: 'tipo_id_empleador',
          type: 'clausula',
          description: 'Seleccione el tipo de identificación del representante legal de la empresa empleadora',
          value: 'cc',
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
                  name: 'Permiso especial de permanencia',
                  value: 'pep'
              },
              {
                  name: 'Permiso por proteccion temporal',
                  value: 'ppt'
              }
          ]
      },
      {
          name: 'cc_empleador',
          type: 'number',
          description: 'Ingrese el número de cédula de ciudadanía del representante legal de la empresa empleadora',
          prereq: [
              {
                  k: 'tipo_id_empleador',
                  v: 'cc'
              }
          ]
      },
      {
          name: 'ce_empleador',
          type: 'number',
          description: 'Ingrese el número de cédula de extranjería del representante legal de la empresa empleadora',
          prereq: [
              {
                  k: 'tipo_id_empleador',
                  v: 'ce'
              }
          ]
      },
      {
          name: 'pep_empleador',
          type: 'text',
          description: 'Ingrese el permiso especial de permanencia del representante legal de la empresa empleadora',
          prereq: [
              {
                  k: 'tipo_id_empleador',
                  v: 'pep'
              }
          ]
      },
      {
          name: 'ppt_empleador',
          type: 'text',
          description: 'Ingrese el permiso por protección temporal del representante legal de la empresa empleadora',
          prereq: [
              {
                  k: 'tipo_id_empleador',
                  v: 'ppt'
              }
          ]
      },
      {
          name: 'lugar_exp_id_empleador',
          type: 'text',
          description: 'Ingrese el lugar de expedición del documento de identidad del representante legal de la empresa empleadora'
      },
      {
          name: 'fecha_contrato',
          type: 'date',
          description: 'Seleccione la fecha en la que se suscribió originalmente el contrato'
      },
      {
          name: 'ciudad_firma',
          type: 'text',
          description: 'Ingrese la ciudad en la que se firma el documento'
      },
      {
          name: 'cargo_empleador',
          type: 'text',
          description: 'Ingrese el cargo del representante legal de la empresa empleadora'
      },
      {
          name: 'email_empleador',
          type: 'email',
          description: 'Ingrese el correo donde llegará la invitación a firmar del representante legal de la empresa empleadora'
      },
      {
          name: 'email_empleado',
          type: 'email',
          description: 'Ingrese el correo donde llegará la invitación a firmar del empleado'
      }
  ],
  sign: [
      'nombre_rep_empleador',
      'cc_empleador',
      'ce_empleador',
      'ppt_empleador',
      'pep_empleador',
      'email_empleador',
      'nombre_empleado',
      'cc_empleado',
      'ce_empleado',
      'ppt_empleado',
      'pep_empleado',
      'email_empleado'
  ],
  signatureProfile: [
      {
          type: 'empleador',
          name: 'nombre_rep_empleador',
          identification: 'cc_empleador|ce_empleador|ppt_empleador|pep_empleador',
          email: 'email_empleador'
      },
      {
          type: 'empleado',
          name: 'nombre_empleado',
          identification: 'cc_empleado|ce_empleado|ppt_empleado|pep_empleado',
          email: 'email_empleado'
      }
  ],
  name: 'OTRO SI AL CONTRATO INDIVIDUAL DE TRABAJO A TERMINO FIJO',
  build: 1,
  price: 5000,
  preBuild: false
}