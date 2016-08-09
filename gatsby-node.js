import Shell from 'child_process'

function postBuild(pages, callback) {
  console.log('Copy assets from directory to public artifact')
  Shell.execSync('mkdir -p public')
  Shell.execSync('cp -r src/assets/ico/* public')
  callback()
}

export { postBuild }
