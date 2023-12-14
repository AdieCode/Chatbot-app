import type { HookContext } from '../declarations'
import { logger } from '../logger'


export const logEmpty =  async (context: HookContext) => {
    if (context.data.text.trim() === '') {
      throw new Error('Message text can not be empty')
    }
}