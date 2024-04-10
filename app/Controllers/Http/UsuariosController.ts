import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
  public async loginPage({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async registerPage({ view }: HttpContextContract) {
    return view.render('auth/register')
  }

  public async register({ request, response, auth }: HttpContextContract) {
    const userSchema = schema.create({
      username: schema.string({ trim: true }, [
        rules.unique({ table: 'usuarios', column: 'username', caseInsensitive: true }),
      ]),
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({ table: 'usuarios', column: 'email', caseInsensitive: true }),
      ]),
      password: schema.string({}, [rules.minLength(8)]),
    })
    const data = await request.validate({ schema: userSchema })

    const user = await Usuario.create(data)

    await auth.login(user)

    return response.redirect('/')
  }

  public async login({ request, response, auth, session }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])
    try {
      await auth.use('web').attempt(email, password)
    } catch (error) {
      session.flash('error', 'Credenciais Inválidas')
      return response.redirect().back()
    }
    return response.redirect('/')
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.redirect().toRoute('auth.login.show')
  }
}
