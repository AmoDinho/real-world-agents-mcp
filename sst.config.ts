/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'real-world-agents-mcp',
      providers: {
        aws: {
          profile: 'agents-mcp',
        },
      },
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
    };
  },
  async run() {
    await import('./infra/calculatorServer');
  },
});
