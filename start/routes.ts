/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    // Account
    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.Participantes, 'logout'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())

    // Participantes
    router
      .group(() => {
        // Rotas públicas — registro e login (estáticas antes das dinâmicas)
        router.post('/', [controllers.Participantes, 'store'])
        router.post('/login', [controllers.Participantes, 'login'])

        // Rotas autenticadas
        router.get('/', [controllers.Participantes, 'index'])
        router.get('/:id', [controllers.Participantes, 'show']).use(middleware.auth())
        router.put('/', [controllers.Participantes, 'update']).use(middleware.auth())
        router.delete('/', [controllers.Participantes, 'destroy']).use(middleware.auth())
      })
      .prefix('participantes')
      .as('participantes')

    // Eventos
    router
      .group(() => {
        router.get('/', [controllers.Eventos, 'index'])
        router.get('/:id', [controllers.Eventos, 'show'])
        router.get('/:id', [controllers.Eventos, 'indexSubs']).prefix('inscritos')
        router.post('/', [controllers.Eventos, 'store']).use(middleware.auth())
        router.put('/:id', [controllers.Eventos, 'update']).use(middleware.auth())
        router.delete('/:id', [controllers.Eventos, 'destroy']).use(middleware.auth())
        router.post('/:id/inscricoes', [controllers.Inscricaos, 'store']).use(middleware.auth())
      })
      .prefix('eventos')
      .as('eventos')

    // Inscricoes
    router
      .group(() => {
        router.get('/', [controllers.Inscricaos, 'index'])
        router.get('/:id', [controllers.Inscricaos, 'show'])
        router.delete('/:id', [controllers.Inscricaos, 'destroy'])
      })
      .prefix('inscricoes')
      .as('inscricoes')
      .use(middleware.auth())
  })
  .prefix('/api/v1')
