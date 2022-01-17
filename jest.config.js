const jestConfig = {
    setupFilesAfterEnv: ["./.jest/setupTests.js"]
}

if (process.env.npm_lifecycle_event === 'test:unit') {
    jestConfig.testEnvironment = 'jest-environment-node'
} else {
    jestConfig.testEnvironment = './.jest/fastify-env'
}

module.exports = jestConfig