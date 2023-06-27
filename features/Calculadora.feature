Feature: Calculadora básica
    Como usuario
    Quiero poder realizar operaciones básicas
    Para calcular resultados

    Scenario: Sumar dos números
        Given Tengo el número 5
            And Tengo el número 3
        When Sumo los números
        Then El resultado es 8

    Scenario: Restar dos números
        Given Tengo el número 10
            And Tengo el número 4
        When Resto los números
        Then El resultado es 6