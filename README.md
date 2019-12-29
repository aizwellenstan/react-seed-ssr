## Tech stacks

- [React](https://github.com/facebook/react) with Hooks
- [GraphQL](https://github.com/graphql/graphql-js) and [Apollo](https://github.com/apollographql/apollo-server) powers simple APIs.
- PWA supported
- Server-side rendering supported
- WAI-ARIA powers screen reader compatibility.
- [styled components](https://github.com/styled-components/styled-components) powers gorgeous design.
- [i18next](https://github.com/i18next/i18next) and [day.js](https://github.com/iamkun/dayjs) powers multi-language support
- Elastic Search -v 6.4.2

## License

AGPL v3 or later

#Helpers
1. postgres create db
  create user ril with password '';
  drop database itsukara;
  create database itsukara;
  grant all privileges on database itsukara to ril;
2. Install and Build
```
yarn install
yarn run build
```
3. Start Server & Client
```
yarn run es
yarn run start
```