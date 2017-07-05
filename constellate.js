module.exports = {
  projects: {
    'web-app': {
      compiler: 'webpack',
      develop: 'webpack',
    },
    'web-server': {
      develop: 'server',
      dependencies: ['web-app'],
    },
  },
}
