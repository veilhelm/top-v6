import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import {
  GET_TASKS,
  CREATE_TASK,
  COMPLETE_TASK,
  getTasks,
  createTask,
  completeTask,
  initialState,
  tasksReducer,
} from './tasksReducer'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const mockTasks = [
  { _id: '4js;ljgru34u', name: 'task 1', done: false },
  { _id: 'sdfewr;ljgru34u', name: 'task 2', done: true },
  { _id: 'ireiwu;ljgru34u', name: 'task 3', done: false },
]

describe('tasksReducer', () => {
  beforeEach(() => moxios.install())

  afterEach(() => moxios.uninstall())

  it(
    'should request tasks and dispatch GET_TASKS action with response payload',
    (done) => {
      const { dispatch, getActions } = mockStore();

      getTasks()(dispatch)

      moxios.wait(() => {
        const req = moxios.requests.mostRecent();
        req.respondWith({
          status: 200,
          response: mockTasks,
        })
          .then(() => {
            const actions = getActions();
            expect(actions[0].type).toBe(GET_TASKS);
            expect(actions[0].payload).toMatchObject(mockTasks);
            done();
          })
      })
    }
  ) 

  it(
    'should create task and dispatch CREATE_TASK action with payload',
    (done) => {
      const { dispatch, getActions } = mockStore();

      createTask({ name: 'task 4' })(dispatch);

      moxios.wait(() => {
        const req = moxios.requests.mostRecent();
        req.respondWith({
          status: 200,
        })
          .then(() => {
            const [action] = getActions();
            expect(action.type).toBe(CREATE_TASK);
            expect(action.payload).toMatch(/successfully/i);
            done();
          })
      })
    }
  )

  it(
    'should complete task and dispatch COMPLETE_TASK action with payload',
    (done) => {
      const { dispatch, getActions } = mockStore();

      completeTask('asdfas')(dispatch);

      moxios.wait(() => {
        const req = moxios.requests.mostRecent();

        req.respondWith({
          status: 200,
          response: mockTasks[0]
        })
          .then(() => {
            const [action] = getActions();
            expect(action.type).toBe(COMPLETE_TASK);
            expect(action.payload).toMatchObject(mockTasks[0])
            done();
          })
      })
    }
  )

  it(
    'should return initialState by default if invalid action',
    () => {
      const state = tasksReducer(undefined, { type: 'INVALID' })
      expect(state).toMatchObject(initialState);
    }
  )

  it(
    'should add tasks when GET_TASKS action is dispatched',
    () => {
      const state = tasksReducer(undefined, { type: GET_TASKS, payload: mockTasks})
      expect(state).toMatchObject({ ...initialState, tasks: mockTasks })
    }
  )

  it(
    'should set message and reset name when CREATE_TASK action is dispatched',
    () => {
      const state = tasksReducer(
        { ...initialState, name: 'hola' },
        { type: CREATE_TASK, payload: 'Task created' }
      );
      expect(state).toMatchObject({ ...initialState, name: '', message: 'Task created' })
      expect(state.message).toMatch(/created/)
    }
  )
  
  it(
    'should complete task and update list when COMPLETE_TASK action is dispatched',
    () => {
      const task = { _id: 'ireiwu;ljgru34u', name: 'task 3', done: true };
      const state = tasksReducer(
        { ...initialState, tasks: mockTasks },
        { type: COMPLETE_TASK, payload: task }
      );
      expect(state.tasks[2]).toMatchObject(task)
    }
  )

})

