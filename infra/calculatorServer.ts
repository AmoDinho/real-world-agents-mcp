export const myApi = new sst.aws.Function('MCPserver', {
  url: true,
  handler: 'packages/MCPServers/calculator/src/api.handler',
});
