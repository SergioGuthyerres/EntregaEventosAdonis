import Participante from '#models/participante'
import { signupValidator, loginValidator, updateValidator } from '#validators/participante'
import type { HttpContext } from '@adonisjs/core/http'
import ParticipanteTransformer from '#transformers/participante_transformer'

export default class ParticipantesController {
  async index({}: HttpContext) {
    return await Participante.all()
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

  async show({ params, response }: HttpContext) {
    try {
      const participante = await Participante.findByOrFail('id', params.id)
      return participante
    } catch {
      return response.status(404).json({ error: 'Participante not found' })
    }
  }

  async update({ params, request, response }: HttpContext) {
    let participante: Participante
    try {
      participante = await Participante.findByOrFail('id', params.id)
    } catch {
      return response.status(404).json({ error: 'Participante not found' })
    }

    // Validação fora do try/catch acima para que erros de validação
    // (ex.: email já em uso) virem 422, e não um 404 enganoso.
    const { nome, email, senha, dataNasc } = await request.validateUsing(updateValidator, {
      meta: { participanteId: participante.id },
    })
    participante.merge({ nome, email, senha, dataNasc })
    await participante.save()
    return participante
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const participante = await Participante.findByOrFail('id', params.id)
      await participante.delete()
      return response.status(204)
    } catch {
      return response.status(404).json({ error: 'Participante not found' })
    }
  }
}
