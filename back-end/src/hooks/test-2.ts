// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import { app } from '../app'
import type { HookContext } from '../declarations'

export const test2 = async (context: HookContext) => {
  console.log(`Running hook test2 on ${context.path}.${context.method}: ${context.toJSON()}`)
}
