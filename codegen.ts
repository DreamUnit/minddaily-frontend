import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();
/** This uses introspection, fine for now
 * but will need to generate a schema in the future
 */
const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_APP_SERVER_URL,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/@types/__graphqlTypes__/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
};

export default config;
