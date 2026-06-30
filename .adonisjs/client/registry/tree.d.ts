/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    participantes: {
      logout: typeof routes['profile.participantes.logout']
    }
  }
  participantes: {
    participantes: {
      store: typeof routes['participantes.participantes.store']
      login: typeof routes['participantes.participantes.login']
      index: typeof routes['participantes.participantes.index']
      show: typeof routes['participantes.participantes.show']
      update: typeof routes['participantes.participantes.update']
      destroy: typeof routes['participantes.participantes.destroy']
    }
  }
  eventos: {
    eventos: {
      index: typeof routes['eventos.eventos.index']
      show: typeof routes['eventos.eventos.show']
      indexSubs: typeof routes['eventos.eventos.index_subs']
      store: typeof routes['eventos.eventos.store']
      update: typeof routes['eventos.eventos.update']
      destroy: typeof routes['eventos.eventos.destroy']
    }
    inscricaos: {
      store: typeof routes['eventos.inscricaos.store']
    }
  }
  inscricoes: {
    inscricaos: {
      index: typeof routes['inscricoes.inscricaos.index']
      show: typeof routes['inscricoes.inscricaos.show']
      destroy: typeof routes['inscricoes.inscricaos.destroy']
    }
  }
}
