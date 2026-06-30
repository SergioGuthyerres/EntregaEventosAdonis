import type { HttpContext } from '@adonisjs/core/http'
import Evento from '#models/evento'
import Inscricao from '#models/inscricao'
import { createEventValidator, updateEventValidator } from '#validators/evento'
export default class EventosController {
  async index({}: HttpContext) {
    const eventos = await Evento.all()

    return eventos
  }
  async indexSubs({ params, response }: HttpContext) {
    const idEvento = params.id

    // 1. Busca todas as inscrições daquele evento
    const inscricoes = await Inscricao.query()
      .where('idEvento', idEvento)
      .preload('participante', (query) => {
        // 2. Filtra para trazer apenas id e nome do participante
        query.select('id', 'nome')
      })

    // 3. Mapeia o resultado para retornar uma lista limpa de participantes
    const participantes = inscricoes.map((inscricao) => inscricao.participante)

    return response.ok(participantes)
  }

  async store({ request, auth }: HttpContext) {
    const participante = auth.user!
    const { nome, descricao, dataInicio, dataFinal, local } =
      await request.validateUsing(createEventValidator)
    const evento = await participante.related('eventos').create({
      nome,
      descricao,
      dataInicio,
      dataFinal,
      local,
    })

    return evento
  }

  async show({ params, response }: HttpContext) {
    try {
      const evento = await Evento.findByOrFail('id', params.id)
      return evento
    } catch {
      return response.status(404).json({ error: 'evento not found' })
    }
  }

  async update({ auth, params, request, response }: HttpContext) {
    try {
      const evento = await Evento.findByOrFail('id', params.id)
      const participante = auth.user!
      const { nome, descricao, dataInicio, dataFinal, local } =
        await request.validateUsing(updateEventValidator)
      evento.merge({
        nome,
        descricao,
        dataInicio,
        dataFinal,
        local,
      })
      if (evento.idOrganizador !== participante.id) {
        return response.status(403).json({ erro: "You can't update this Event" })
      }
      await evento.save()
      return evento
    } catch {
      return response.status(404).json({ erro: 'Evento not Found' })
    }
  }

  async destroy({ params, auth, response }: HttpContext) {
    try {
      const evento = await Evento.findByOrFail('id', params.id)
      const participante = auth.user!
      if (evento.idOrganizador !== participante.id) {
        return response.status(403).json({ erro: "You can't delete this Event" })
      }
      await evento.delete()
      return response.status(203)
    } catch {
      return response.status(404).json({ erro: 'Evento not Found' })
    }
  }
}
