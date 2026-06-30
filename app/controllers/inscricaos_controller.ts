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

    const inscricaoVerify = await Inscricao.query()
      .where('idParticipante', participante.id)
      .where('idEvento', idEvento)
      .first()

    if (inscricaoVerify) {
      return response.badRequest({ error: 'Already subscribed' })
    }
    try {
      const evento = Evento.findByOrFail('id', idEvento)
      const inscricao = await participante.related('inscricoes').create({ idEvento })

      return response.created(inscricao)
    } catch {
      return response.status(404).json({ error: 'evento not found' })
    }
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
      return response.status(203)
    } catch {
      return response.status(404).json('evento not found')
    }
  }
}
