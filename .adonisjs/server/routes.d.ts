import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.participantes.logout': { paramsTuple?: []; params?: {} }
    'participantes.participantes.store': { paramsTuple?: []; params?: {} }
    'participantes.participantes.login': { paramsTuple?: []; params?: {} }
    'participantes.participantes.index': { paramsTuple?: []; params?: {} }
    'participantes.participantes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'participantes.participantes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'participantes.participantes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'eventos.eventos.index': { paramsTuple?: []; params?: {} }
    'eventos.eventos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'eventos.eventos.store': { paramsTuple?: []; params?: {} }
    'eventos.eventos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'eventos.eventos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'eventos.inscricaos.store': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'inscricoes.inscricaos.index': { paramsTuple?: []; params?: {} }
    'inscricoes.inscricaos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'inscricoes.inscricaos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'participantes.participantes.index': { paramsTuple?: []; params?: {} }
    'participantes.participantes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'eventos.eventos.index': { paramsTuple?: []; params?: {} }
    'eventos.eventos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'inscricoes.inscricaos.index': { paramsTuple?: []; params?: {} }
    'inscricoes.inscricaos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'participantes.participantes.index': { paramsTuple?: []; params?: {} }
    'participantes.participantes.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'eventos.eventos.index': { paramsTuple?: []; params?: {} }
    'eventos.eventos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'inscricoes.inscricaos.index': { paramsTuple?: []; params?: {} }
    'inscricoes.inscricaos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'profile.participantes.logout': { paramsTuple?: []; params?: {} }
    'participantes.participantes.store': { paramsTuple?: []; params?: {} }
    'participantes.participantes.login': { paramsTuple?: []; params?: {} }
    'eventos.eventos.store': { paramsTuple?: []; params?: {} }
    'eventos.inscricaos.store': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'participantes.participantes.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'eventos.eventos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'participantes.participantes.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'eventos.eventos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'inscricoes.inscricaos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}