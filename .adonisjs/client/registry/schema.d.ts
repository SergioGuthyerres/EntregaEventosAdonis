/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'profile.profile.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/account/profile'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
    }
  }
  'profile.participantes.logout': {
    methods: ["POST"]
    pattern: '/api/v1/account/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['logout']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['logout']>>>
    }
  }
  'participantes.participantes.store': {
    methods: ["POST"]
    pattern: '/api/v1/participantes'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/participante').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/participante').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'participantes.participantes.login': {
    methods: ["POST"]
    pattern: '/api/v1/participantes/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/participante').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/participante').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['login']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['login']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'participantes.participantes.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/participantes'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['index']>>>
    }
  }
  'participantes.participantes.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/participantes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['show']>>>
    }
  }
  'participantes.participantes.update': {
    methods: ["PUT"]
    pattern: '/api/v1/participantes/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/participante').updateValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/participante').updateValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'participantes.participantes.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/participantes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/participantes_controller').default['destroy']>>>
    }
  }
  'eventos.eventos.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/eventos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['index']>>>
    }
  }
  'eventos.eventos.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/eventos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['show']>>>
    }
  }
  'eventos.eventos.store': {
    methods: ["POST"]
    pattern: '/api/v1/eventos'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/evento').createEventValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/evento').createEventValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'eventos.eventos.update': {
    methods: ["PUT"]
    pattern: '/api/v1/eventos/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/evento').updateEventValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/evento').updateEventValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'eventos.eventos.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/eventos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/eventos_controller').default['destroy']>>>
    }
  }
  'eventos.inscricaos.store': {
    methods: ["POST"]
    pattern: '/api/v1/eventos/:id/inscricoes'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['store']>>>
    }
  }
  'inscricoes.inscricaos.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/inscricoes'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['index']>>>
    }
  }
  'inscricoes.inscricaos.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/inscricoes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['show']>>>
    }
  }
  'inscricoes.inscricaos.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/inscricoes/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/inscricaos_controller').default['destroy']>>>
    }
  }
}
