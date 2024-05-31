import { type CardType } from '../types'

export const DEFAULT_CARDS: CardType[] = [
  // BACKLOG
  { title: 'Estudiar para el parcial de integral', taskId: '1', column: 'backlog', userId: '1' },
  {
    title: 'Llamar a mi mamá',
    taskId: '2',
    column: 'backlog',
    userId: '2'
  },
  { title: 'Arreglar los cables del router', taskId: '3', column: 'backlog', userId: '3' },
  {
    title: 'Terminar la base de datos de parking',

    taskId: '4',
    column: 'backlog',
    userId: '4'
  },
  // TODO
  {
    title: 'Mejorar mis habilidades con la consola',
    taskId: '5',
    column: 'todo',
    userId: '5'
  },
  { title: 'Estudiar qué hace un QA', taskId: '6', column: 'todo', userId: '6' },
  { title: 'Entender bien la arquitectura hexagonal', taskId: '7', column: 'todo', userId: '7' },

  // DOING
  {
    title: 'Implementar tests de integración',
    taskId: '8',
    column: 'doing',
    userId: '8'
  },
  {
    title: 'Hacer el deploy usando Docker y el CI/CD de Gitlab',
    taskId: '9',
    column: 'doing',
    userId: '9'
  },
  // DONE
  {
    title: 'Terminar el curso de AWS',
    taskId: '10',
    column: 'done',
    userId: '10'
  }
]
