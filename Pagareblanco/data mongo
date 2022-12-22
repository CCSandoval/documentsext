{
  "_id": {
    "$oid": "632caeecfceb94b557e6f150"
  },
  "config": [
    {
      "name": "text_nropagare",
      "type": "text",
      "help": "nropagare",
      "description": "Número del pagaré"
    },
    {
      "name": "text_valorletras",
      "type": "text",
      "help": "valorletras",
      "description": "Valor en letras"
    },
    {
      "name": "text_valornumero",
      "type": "text",
      "help": "valornumero",
      "description": "Valor en números"
    },
    {
      "name": "text_ciudad",
      "type": "text",
      "help": "ciudad",
      "description": "Ciudad"
    },
    {
      "name": "text_ciudadpago",
      "type": "text",
      "help": "ciudadpago",
      "description": "Ciudad pago"
    },
    {
      "name": "name_ahijado",
      "type": "name",
      "help": "ahijado",
      "description": "Nombre Deudor"
    },
    {
      "description": "Seleccione el tipo de documento del deudor",
      "name": "document_type_ahijado",
      "options": [
        {
          "name": "Cédula de Ciudadanía",
          "value": "cc"
        },
        {
          "name": "Cédula de extranjería",
          "value": "ce"
        },
        {
          "name": "Pasaporte",
          "value": "pa"
        }
      ],
      "type": "clausula",
      "value": "cc",
      "help": "ahijado"
    },
    {
      "description": "Digite el número de cédula de ciudadanía del deudor",
      "name": "cedula_ahijado",
      "prereq": [
        {
          "k": "document_type_ahijado",
          "v": "cc"
        }
      ],
      "type": "number",
      "help": "ahijado"
    },
    {
      "description": "Digite el número de cédula de extranjería del deudor",
      "name": "cedulae_ahijado",
      "prereq": [
        {
          "k": "document_type_ahijado",
          "v": "ce"
        }
      ],
      "type": "number",
      "help": "ahijado"
    },
    {
      "description": "Digite el número del pasaporte del deudor",
      "name": "pasaporte_ahijado",
      "prereq": [
        {
          "k": "document_type_ahijado",
          "v": "pa"
        }
      ],
      "type": "text",
      "help": "ahijado"
    },
    {
      "name": "email_ahijado",
      "type": "text",
      "help": "ahijado",
      "description": "correo electronico del deudor"
    },
    {
      "name": "text_ciudadahijado",
      "type": "text",
      "help": "ciudadahijado",
      "description": "ciudad deudor"
    },
    {
      "name": "name_padrino",
      "type": "name",
      "help": "padrino",
      "description": "Nombre del Acreedor"
    },
    {
      "description": "Seleccione el tipo de documento del acreedor",
      "name": "document_type_padrino",
      "options": [
        {
          "name": "Cédula de Ciudadanía",
          "value": "cc"
        },
        {
          "name": "Cédula de extranjería",
          "value": "ce"
        },
        {
          "name": "Pasaporte",
          "value": "pa"
        }
      ],
      "type": "clausula",
      "value": "cc",
      "help": "padrino"
    },
    {
      "description": "Digite el número de cédula de ciudadanía del acreedor",
      "name": "cedula_padrino",
      "prereq": [
        {
          "k": "document_type_padrino",
          "v": "cc"
        }
      ],
      "type": "number",
      "help": "padrino"
    },
    {
      "description": "Digite el número de cédula de extranjería del acreedor",
      "name": "cedulae_padrino",
      "prereq": [
        {
          "k": "document_type_padrino",
          "v": "ce"
        }
      ],
      "type": "number",
      "help": "padrino"
    },
    {
      "description": "Digite el número del pasaporte del acreedor",
      "name": "pasaporte_padrino",
      "prereq": [
        {
          "k": "document_type_padrino",
          "v": "pa"
        }
      ],
      "type": "text",
      "help": "padrino"
    },
    {
      "name": "text_fechadia",
      "type": "text",
      "help": "fechadia",
      "description": "fecha dia"
    },
    {
      "name": "text_fechames",
      "type": "text",
      "help": "fechames",
      "description": "fecha mes"
    },
    {
      "name": "text_fechaanio",
      "type": "text",
      "help": "fechaanio",
      "description": "fecha año"
    },
    {
      "name": "text_departamento",
      "type": "text",
      "help": "departamento",
      "description": "departamento"
    },
    {
      "name": "date_fecha",
      "type": "date",
      "help": "fecha",
      "description": "fecha"
    }
  ],
  "help": {
    "nropagare": "Número del pagaré",
    "valorletras": "Valor en letras",
    "valornumero": "Valor en números",
    "ciudad": "Ciudad",
    "ciudadpago": "Ciudad pago",
    "ahijado": "Deudor",
    "ciudadahijado": "ciudad deudor",
    "padrino": "Acreedor",
    "fechadia": "fecha dia",
    "fechames": "fecha mes",
    "fechaanio": "fecha año",
    "departamento": "departamento",
    "fecha": "fecha"
  },
  "name": "pagare final con mandato y aviso privacidad",
  "sign": [
    "name_ahijado",
    "cedula_ahijado",
    "cedulae_ahijado",
    "pasaporte_ahijado",
    "email_ahijado",
    "name_padrino",
    "cedula_padrino",
    "cedulae_padrino",
    "pasaporte_padrino",
  ],
  "signatureProfile": [
    {
      "email": "email_ahijado",
      "identification": "cedula_ahijado|cedulae_ahijado|pasaporte_ahijado",
      "name": "name_ahijado",
      "type": "ahijado"
    },
    {
      "identification": "cedula_padrino|cedulae_padrino|pasaporte_padrino",
      "name": "name_padrino",
      "type": "padrino"
    }
  ],
  "build": 1,
  "price": 5000,
  "company": {
    "$oid": "62cd71412d3446bd1d4f71c7"
  },
  "createdAt": {
    "$date": {
      "$numberLong": "1663869600000"
    }
  },
  "updatedAt": {
    "$date": {
      "$numberLong": "1663869600000"
    }
  }
}