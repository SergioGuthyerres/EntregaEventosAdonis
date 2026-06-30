import Participante from '#models/participante'
import { signupValidator, loginValidator, updateValidator } from '#validators/participante'
import type { HttpContext } from '@adonisjs/core/http'
import ParticipanteTransformer from '#transformers/participante_transformer'

export default class ParticipantesController {
  async index({ response }: HttpContext) {
    const participantes = await Participante.query().select('id', 'nome')

    return response.ok(participantes)
  }

  /**
   * Registro de participante (rota pública).
   * Cria o participante e já retorna um access token.
   */
  async store({ request, serialize }: HttpContext) {
    const { nome, email, senha, dataNasc } = await request.validateUsing(signupValidator)

    const participante = await Participante.create({ nome, email, senha, dataNasc })
    const token = await Participante.accessTokens.create(participante)

    return serialize({
      participante: ParticipanteTransformer.transform(participante),
      token: token.value!.release(),
    })
  }

  /**
   * Login de participante (rota pública).
   * Valida as credenciais e retorna um access token.
   */
  async login({ request, serialize }: HttpContext) {
    const { email, senha } = await request.validateUsing(loginValidator)

    const participante = await Participante.verifyCredentials(email, senha)
    const token = await Participante.accessTokens.create(participante)

    return serialize({
      participante: ParticipanteTransformer.transform(participante),
      token: token.value!.release(),
    })
  }

  /**
   * Logout do participante autenticado.
   */
  async logout({ auth }: HttpContext) {
    const participante = auth.getUserOrFail()
    if (participante.currentAccessToken) {
      await Participante.accessTokens.delete(
        participante,
        participante.currentAccessToken.identifier
      )
    }

    return { message: 'Logged out successfully' }
  }

  async show({ params, response, auth }: HttpContext) {
    try {
      const participante = await Participante.findByOrFail('id', params.id)
      if (participante.id !== auth.user!.id) {
        return response.status(403).json({ error: 'You cannot inspect this user' })
      }
      return participante
    } catch {
      return response.status(404).json({ error: 'Participante not found' })
    }
  }

  async update({ request, response, auth }: HttpContext) {
    const idParticipante = auth.user!.id
    let participante: Participante
    try {
      participante = await Participante.findByOrFail('id', idParticipante)
    } catch {
      return response.status(404).json({ error: 'Participante not found' })
    }

    // Validação fora do try/catch acima para que erros de validação
    // (ex.: email já em uso) virem 422, e não um 404 enganoso.
    if (participante.id !== auth.user!.id) {
      return response.status(403).json({ error: 'You cannot update this user' })
    }
    const { nome, email, senha, dataNasc } = await request.validateUsing(updateValidator, {
      meta: { participanteId: participante.id },
    })
    participante.merge({ nome, email, senha, dataNasc })
    await participante.save()
    return participante
  }

  async destroy({ response, auth }: HttpContext) {
    try {
      const idParticipante = auth.user!.id
      const participante = await Participante.findByOrFail('id', idParticipante)
      await participante.delete()
      return response.status(204)
    } catch {
      return response.status(404).json({ error: 'Participante not found' })
    }
  }
}
