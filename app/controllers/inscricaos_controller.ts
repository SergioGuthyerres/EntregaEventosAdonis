import Evento from '#models/evento'
import Inscricao from '#models/inscricao'
import type { HttpContext } from '@adonisjs/core/http'

export default class InscricaosController {
  async index({ auth }: HttpContext) {
    const inscricaos = await auth.user!.related('inscricoes').query()
    return inscricaos
  }

  async store({ params, auth, response }: HttpContext) {
    const participante = auth.user!
    const idEvento = params.id

    // Garante que o evento existe antes de inscrever (evita erro 500 de FK)
    const evento = await Evento.find(idEvento)
    if (!evento) {
      return response.status(404).json({ error: 'evento not found' })
    }

    const inscricaoVerify = await Inscricao.query()
      .where('idParticipante', participante.id)
      .where('idEvento', evento.id)
      .first()

    if (inscricaoVerify) {
      return response.badRequest({ error: 'Already subscribed' })
    }

    const inscricao = await participante.related('inscricoes').create({ idEvento: evento.id })
    return response.created(inscricao)
  }

  async show({ params, auth, response }: HttpContext) {
    try {
      const inscricao = await Inscricao.findByOrFail('id', params.id)
      if (inscricao.idParticipante !== auth.user!.id) {
        throw new Error('Inscription not found')
      }
      return inscricao
    } catch {
      return response.status(404).json('Inscription not found')
    }
  }

  async destroy({ params, auth, response }: HttpContext) {
    try {
      const inscricao = await Inscricao.findByOrFail('id', params.id)
      if (inscricao.idParticipante !== auth.user!.id) {
        throw new Error('Evento not found')
      }
      await inscricao.delete()
      return response.noContent()
    } catch {
      return response.status(404).json('evento not found')
    }
  }
}
