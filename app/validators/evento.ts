import vine from '@vinejs/vine'

export const createEventValidator = vine.create({
  nome: vine.string(),
  descricao: vine.string(),
  dataInicio: vine.date(),
  dataFinal: vine.date(),
  local: vine.string(),
})

export const updateEventValidator = vine.create({
  nome: vine.string(),
  descricao: vine.string(),
  dataInicio: vine.date(),
  dataFinal: vine.date(),
  local: vine.string(),
})
