import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'
import cheerio from 'cheerio'

interface Recipe {
  title: string
  link: string | null
  difficulty: string
  category: string
  servings: string
  duration: string
  dishType: string
  description: string
}

export default class ReceitasController {
  public async searchRecipes({ request, response, view }: HttpContextContract) {
    try {
      const { ingredients } = request.qs()

      let recipes = await this.searchRecipesOnTudoReceitas(ingredients)

      return view.render('index', { recipes })
    } catch (error) {
      console.error(error)
      return response.status(500).json({ error: 'Failed to retrieve recipes' })
    }
  }

  private async searchRecipesOnTudoReceitas(ingredients: string): Promise<any[]> {
    const url = `https://www.tudoreceitas.com/pesquisa?q=${encodeURIComponent(ingredients)}`
    try {
      const response = await axios.get(url)

      const $ = cheerio.load(response.data)
      const recipes: Recipe[] = []

      $('.resultado.link').each((index, element) => {
        const title = $(element).find('.titulo.titulo--resultado').text().trim()
        const link = $(element).find('.titulo.titulo--resultado').attr('href')
        const difficulty = $(element).find('.info_img .dif').text().trim()
        const category = $(element).find('.categoria .etiqueta').text().trim()
        const servings = $(element).find('.properties .comensales').text().trim()
        const duration = $(element).find('.properties .duracion').text().trim()
        const dishType = $(element).find('.properties .para').text().trim()
        const description = $(element).find('.intro').text().trim()

        if (link) {
          recipes.push({
            title,
            link,
            difficulty,
            category,
            servings,
            duration,
            dishType,
            description,
          })
        }
      })

      return recipes
    } catch (error) {
      console.error('Error fetching recipes:', error)
      return []
    }
  }
}
