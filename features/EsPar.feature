Feature: EsPar
    Como usuario
    Quiero poder realizar las operaciones
    Para saber si el número es par

    Scenario Outline: Determinar si es Par
        Given El numero "<valores>"
        When Lo divido entre 2
        Then Me tiene que dar "<Respuestas>"

    Examples:
        | valores | Respuestas |
        | 1       | Impar      |
        | 2       | Par        |
        | 40      | Par        |
        | 80      | Par        |
        | 943     | Impar      |
        | 785     | Impar      |
        | 202     | Par        |
        | 299     | Impar      |