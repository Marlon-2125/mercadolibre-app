Feature: Get product detailed
  In order to have courses in the platform
  As a visitant that click a product
  I want get a product detailed

  Scenario: A product detailed finded
    Given I send a GET request to "/api/items/MLA1118725350"
    Then the response status code should be 200
    And the response should be:
    """
    {
      "author": {
        "name": "Marlon",
        "last_name": "Navarrete"
      },
      "item": {
        "id": "MLA1118725350",
        "title": "Zanella Styler 150 Exclusive Z3 - Ahora 12 - Créditos Dni!",
        "price": 501990,
        "picture": "http://http2.mlstatic.com/D_718849-MLA50364287067_062022-I.jpg",
        "condition": "new",
        "free_shipping": false,
        "details": "K´1000 MOTOS\nCONCESIONARIO OFICIAL PREMIUM\nZANELLA - BENELLI – MOTOMEL – KEEWAY - SYM\n\nLlevá tu EXCLUSIVE 150 Totalmente Financiada!!\n-------------------------------------------------------------------------\nServicio de Gestoría\nSeguros – Todas las coberturas\nServicio de Atención al Cliente - Posventa y Garantía\nServicio Técnico Oficial Especializado\nRepuestos Originales y Accesorios\nColocación de accesorios en la entrega\n-------------------------------------------------------------------------\nCréditos con sólo el DNI – Tarjetas Ahora 12/18\nCréditos prendarios a través del BBVA\nTomamos tu usado – Tomamos Dólares\nConsultá por todas las Financiaciones\n-------------------------------------------------------------------------\nTodos los Medios de Pago – Tarjetas de Crédito\nDébito – Efectivo – Transferencia Bancaria\nMercado Pago – Reservas por Mercado Libre\n-------------------------------------------------------------------------\nSERVICE OFICIAL:\nZANELLA – BENELLI – MOTOMEL – KEEWAY – SYM \nContamos con personal mecánico de amplia experiencia para atenderte, asesorarte y colaborar para la solución de todo lo relacionado con tu moto. Centro de servicio autorizado para realizar el service que tu vehículo requiere. Realizá con nosotros el mantenimiento de tu moto con repuestos originales y mecánicos especializados.\nSERVICIO DE GESTORÍA: \nRealizá el patentamiento de tu moto con nosotros. Retirá tu moto en el acto con un permiso provisorio para circular por 30 días, hasta que llegue tu patente y cédula.\nSEGUROS:\nTrabajamos con las mejores aseguradoras: ATM o Triunfo Seguros y con todas las coberturas\nTIENDA DE ACCESORIOS:\nCascos, camperas, lingas, guantes, lubricantes y todo lo que necesitás para vivir la mejor experiencia con tu moto.\nREPUESTOS ORIGINALES:\nTodos los repuestos y marcas\n\nCONTAMOS CON SUCURSALES EN CABA Y GBA CON MÁS DE 200 MOTOS EN EXHIBICIÓN",
        "path_from_root": [
            "Autos, Motos y Otros",
            "Motos"
        ],
        "sold_quantity": 0
      }
    }
    """
