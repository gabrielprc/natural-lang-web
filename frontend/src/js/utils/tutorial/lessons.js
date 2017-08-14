/*eslint-disable */

const lessons = [
  {
    id: 4,
    title: 'Condiciones',
    description: `Algo muy importante en la programación son las condiciones.
      En algunos casos, queremos hacer ciertas cosas sólo si se cumple una condición, es decir, si una pregunta que nos hacemos es verdadera.
      Sino, realizaremos otra acción alternativa.`,
    instructions: [
      'Declarar la variable "edad", y asignarle como valor tu propia edad',
      'Luego, escribe lo siguiente: "Si la edad es mayor a 18, es estado es \"mayor de edad\""',
      'Finalmente: Escribe el valor alternativo que tomará la variable "estado" en caso de que la edad sea menor a 18',
      'Pista: ... Sino, ...'
    ],
    done: false,
    expected: /edad = [0-9]+;\s*if\s*\(edad > 18\)\s*{\s*estado = ["']\w+["'];\s*}\s*else\s*{\s*estado = ["']\w+["'];\s*}/i,
  },
  {
    id: 1,
    title: 'Variables',
    description: `Crear aplicaciones implica trabajar con variables y tipo de datos. 
      Una variable almacena un dato y le da un nombre específico.`,
    instructions: [
      'Declarar la variable "curso"',
      'Escribe en la parte derecha: El curso es "genial"!',
      'Haciendo esto, ¡ya estás declarando tu primera variable!'
    ],
    done: false,
    expected: /curso = 'genial';/i,
  },
  {
    id: 2,
    title: 'Variables - Números',
    description: `Como en Matemática, una variable puede tomar cualquier valor que se le asigne.`,
    instructions: [
      'Declarar la variable "edad", y asignarle como valor tu propia edad'
    ],
    done: false,
    expected: /edad = [0-9]+;/i,
  },
  {
    id: 3,
    title: 'Variables - Cadenas de caracteres',
    description: `Como en Matemática, una variable puede tomar cualquier valor que se le asigne.
      Este valor no sólo puede ser numérico, sino también alfanumérico.
      En programación, los valores alfanuméricos se suelen llamar "cadena de caracteres", y se escriben entre comillas!`,
    instructions: [
      'Declarar la variable nombre',
      'Escribe en la parte derecha una variable llamada "nombre", y asignale como valor tu propio nombre',
      'Pista: no olvides las comillas!'
    ],
    done: false,
    expected: /nombre = ["']\w+["'];/i,
  },
  
  // {
  //   id: 2,
  //   title: 'Booleanos',
  //   description: 'Una variable almacena un dato y le da un nombre específico.',
  //   instructions: 'Establecé la variable mi_variable con el valor 10.',
  //   instructions: [
  //     'Declarar un booleano',
  //     'escribe: la variable es verdadera',
  //   ],
  //   done: true,
  //   expected: "verdadero",
  // },
  // {
  //   id: 3,
  //   title: 'Booleanos',
  //   description: 'Una variable almacena un dato y le da un nombre específico.',
  //   instructions: 'Establecé la variable mi_variable con el valor 10.',
  //   done: true,
  // },
  // {
  //   id: 4,
  //   title: 'Reasingnación de variable',
  //   description: 'Una variable almacena un dato y le da un nombre específico.',
  //   instructions: 'Establecé la variable mi_variable con el valor 10.',
  //   done: true,
  // },
  // {
  //   id: 10,
  //   title: 'Variables - Numero',
  //   description: `Sumar dos numeros`,
  //   instructions: [
  //     'Declarar dos variables: x igual a 10 y igual a 10',
  //     'Declarar una variable sumando las anteriores: la variable suma es x + y',
  //   ],
  //   done: false,
  //   expected: "x = 10; y = 10; suma = x + y;",
  // },
];

export default lessons;