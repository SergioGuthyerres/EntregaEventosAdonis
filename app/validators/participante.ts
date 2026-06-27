import vine from '@vinejs/vine'

/**
 * Shared rules for email and password.
 */
const email = () => vine.string().email().maxLength(254)
const password = () => vine.string().minLength(8).maxLength(32)
const dataNasc = () => vine.date()
/**
 * Validator to use when performing self-signup
 */
export const signupValidator = vine.create({
  nome: vine.string(),
  email: email().unique({ table: 'participantes', column: 'email' }),
  senha: password(),
  dataNasc: dataNasc(),
})

/**
 * Validator to use when updating an existing participante.
 * The email uniqueness check ignores the participante being updated
 * (id passed via `meta.participanteId`), so saving without changing
 * the email does not trigger a false "already taken" error.
 */
export const updateValidator = vine.create({
  nome: vine.string(),
  email: email().unique({
    table: 'participantes',
    column: 'email',
    filter: (query, _value, field) => {
      query.whereNot('id', field.meta.participanteId)
    },
  }),
  senha: password(),
  dataNasc: dataNasc(),
})

/**
 * Validator to use before validating user credentials
 * during login
 */
export const loginValidator = vine.create({
  email: email(),
  senha: vine.string(),
})
