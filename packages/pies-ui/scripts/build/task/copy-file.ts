
import path from 'path'
import { copyFile } from 'fs/promises'
import { piesRoot, root } from '../utils/paths'
export const copyFiles = async function() {
  await Promise.all([
    copyFile(path.resolve(piesRoot, 'README.md'), path.resolve(root,'pies-ui/README.md')),
  ])
}