/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.participantes.logout': {
    methods: ["POST"],
    pattern: '/api/v1/account/logout',
    tokens: [{"old":"/api/v1/account/logout","type":0,"val":"api","end":""},{"old":"/api/v1/account/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/account/logout","type":0,"val":"account","end":""},{"old":"/api/v1/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['profile.participantes.logout']['types'],
  },
  'participantes.participantes.store': {
    methods: ["POST"],
    pattern: '/api/v1/participantes',
    tokens: [{"old":"/api/v1/participantes","type":0,"val":"api","end":""},{"old":"/api/v1/participantes","type":0,"val":"v1","end":""},{"old":"/api/v1/participantes","type":0,"val":"participantes","end":""}],
    types: placeholder as Registry['participantes.participantes.store']['types'],
  },
  'participantes.participantes.login': {
    methods: ["POST"],
    pattern: '/api/v1/participantes/login',
    tokens: [{"old":"/api/v1/participantes/login","type":0,"val":"api","end":""},{"old":"/api/v1/participantes/login","type":0,"val":"v1","end":""},{"old":"/api/v1/participantes/login","type":0,"val":"participantes","end":""},{"old":"/api/v1/participantes/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['participantes.participantes.login']['types'],
  },
  'participantes.participantes.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/participantes',
    tokens: [{"old":"/api/v1/participantes","type":0,"val":"api","end":""},{"old":"/api/v1/participantes","type":0,"val":"v1","end":""},{"old":"/api/v1/participantes","type":0,"val":"participantes","end":""}],
    types: placeholder as Registry['participantes.participantes.index']['types'],
  },
  'participantes.participantes.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/participantes/:id',
    tokens: [{"old":"/api/v1/participantes/:id","type":0,"val":"api","end":""},{"old":"/api/v1/participantes/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/participantes/:id","type":0,"val":"participantes","end":""},{"old":"/api/v1/participantes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['participantes.participantes.show']['types'],
  },
  'participantes.participantes.update': {
    methods: ["PUT"],
    pattern: '/api/v1/participantes',
    tokens: [{"old":"/api/v1/participantes","type":0,"val":"api","end":""},{"old":"/api/v1/participantes","type":0,"val":"v1","end":""},{"old":"/api/v1/participantes","type":0,"val":"participantes","end":""}],
    types: placeholder as Registry['participantes.participantes.update']['types'],
  },
  'participantes.participantes.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/participantes',
    tokens: [{"old":"/api/v1/participantes","type":0,"val":"api","end":""},{"old":"/api/v1/participantes","type":0,"val":"v1","end":""},{"old":"/api/v1/participantes","type":0,"val":"participantes","end":""}],
    types: placeholder as Registry['participantes.participantes.destroy']['types'],
  },
  'eventos.eventos.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/eventos',
    tokens: [{"old":"/api/v1/eventos","type":0,"val":"api","end":""},{"old":"/api/v1/eventos","type":0,"val":"v1","end":""},{"old":"/api/v1/eventos","type":0,"val":"eventos","end":""}],
    types: placeholder as Registry['eventos.eventos.index']['types'],
  },
  'eventos.eventos.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/eventos/:id',
    tokens: [{"old":"/api/v1/eventos/:id","type":0,"val":"api","end":""},{"old":"/api/v1/eventos/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/eventos/:id","type":0,"val":"eventos","end":""},{"old":"/api/v1/eventos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['eventos.eventos.show']['types'],
  },
  'eventos.eventos.index_subs': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/eventos/inscritos/:id',
    tokens: [{"old":"/api/v1/eventos/inscritos/:id","type":0,"val":"api","end":""},{"old":"/api/v1/eventos/inscritos/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/eventos/inscritos/:id","type":0,"val":"eventos","end":""},{"old":"/api/v1/eventos/inscritos/:id","type":0,"val":"inscritos","end":""},{"old":"/api/v1/eventos/inscritos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['eventos.eventos.index_subs']['types'],
  },
  'eventos.eventos.store': {
    methods: ["POST"],
    pattern: '/api/v1/eventos',
    tokens: [{"old":"/api/v1/eventos","type":0,"val":"api","end":""},{"old":"/api/v1/eventos","type":0,"val":"v1","end":""},{"old":"/api/v1/eventos","type":0,"val":"eventos","end":""}],
    types: placeholder as Registry['eventos.eventos.store']['types'],
  },
  'eventos.eventos.update': {
    methods: ["PUT"],
    pattern: '/api/v1/eventos/:id',
    tokens: [{"old":"/api/v1/eventos/:id","type":0,"val":"api","end":""},{"old":"/api/v1/eventos/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/eventos/:id","type":0,"val":"eventos","end":""},{"old":"/api/v1/eventos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['eventos.eventos.update']['types'],
  },
  'eventos.eventos.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/eventos/:id',
    tokens: [{"old":"/api/v1/eventos/:id","type":0,"val":"api","end":""},{"old":"/api/v1/eventos/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/eventos/:id","type":0,"val":"eventos","end":""},{"old":"/api/v1/eventos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['eventos.eventos.destroy']['types'],
  },
  'eventos.inscricaos.store': {
    methods: ["POST"],
    pattern: '/api/v1/eventos/:id/inscricoes',
    tokens: [{"old":"/api/v1/eventos/:id/inscricoes","type":0,"val":"api","end":""},{"old":"/api/v1/eventos/:id/inscricoes","type":0,"val":"v1","end":""},{"old":"/api/v1/eventos/:id/inscricoes","type":0,"val":"eventos","end":""},{"old":"/api/v1/eventos/:id/inscricoes","type":1,"val":"id","end":""},{"old":"/api/v1/eventos/:id/inscricoes","type":0,"val":"inscricoes","end":""}],
    types: placeholder as Registry['eventos.inscricaos.store']['types'],
  },
  'inscricoes.inscricaos.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/inscricoes',
    tokens: [{"old":"/api/v1/inscricoes","type":0,"val":"api","end":""},{"old":"/api/v1/inscricoes","type":0,"val":"v1","end":""},{"old":"/api/v1/inscricoes","type":0,"val":"inscricoes","end":""}],
    types: placeholder as Registry['inscricoes.inscricaos.index']['types'],
  },
  'inscricoes.inscricaos.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/inscricoes/:id',
    tokens: [{"old":"/api/v1/inscricoes/:id","type":0,"val":"api","end":""},{"old":"/api/v1/inscricoes/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/inscricoes/:id","type":0,"val":"inscricoes","end":""},{"old":"/api/v1/inscricoes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['inscricoes.inscricaos.show']['types'],
  },
  'inscricoes.inscricaos.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/inscricoes/:id',
    tokens: [{"old":"/api/v1/inscricoes/:id","type":0,"val":"api","end":""},{"old":"/api/v1/inscricoes/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/inscricoes/:id","type":0,"val":"inscricoes","end":""},{"old":"/api/v1/inscricoes/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['inscricoes.inscricaos.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
