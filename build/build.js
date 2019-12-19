import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactHighlight'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    'highlight.js': 'highlight.js'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
