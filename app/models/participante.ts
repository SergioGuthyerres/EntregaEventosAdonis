import { ParticipanteSchema } from '#database/schema'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { type AccessToken, DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Inscricao from './inscricao.ts'
import Evento from './evento.ts'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'senha',
})

export default class Participante extends compose(ParticipanteSchema, AuthFinder) {
  static accessTokens = DbAccessTokensProvider.forModel(Participante)
  declare currentAccessToken?: AccessToken

  // get initials() {
  //   const [first, last] = this.nome ? this.nome.split(' ') : this.email.split('@')
  //   if (first && last) {
  //     return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
  //   }
  //   return `${first.slice(0, 2)}`.toUpperCase()
  // }
  @hasMany(() => Inscricao, { foreignKey: 'idParticipante' })
  declare inscricoes: HasMany<typeof Inscricao>
  @hasMany(() => Evento, { foreignKey: 'idOrganizador' })
  declare eventos: HasMany<typeof Evento>
}
