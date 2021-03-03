# Instagram mock
This app is not complete and untested. The basic structures are done and each component element has been manually tested, but components need to be connected, redux (reducers and thunks) needs to be tested, and styles need to be re-organized.

## Build
* `npm i` and `npm run build`

## Run
* `npm i` and `npm run start`

## Project structure
* `src/components` contains components that accept input values and changes on edit / click / etc
* `src/data-source` contains fake data used for testing. Accessors to data are asynchronous to mock server connection
* `src/static-components` contains mock components that serve as placeholders
* `src/store` contains type signatures, actions, selectors, and reducers of the global state
* `src/types` contains general data structure types

## (Nearly) Finished features
* Like comment
* Like reply
* Reply post
* Reply comment

## TODO:
- [ ] Refactor components code
- [ ] Switch between landscape and portrait on click (should be quite simple)
- [ ] Refactor styles to use JSS (duplication, px calculation, etc)
- [ ] Error handling (currently using undefined; can replace with error messages etc)
- [ ] Comments pagination (Instagram has this feature)
- [ ] Accessibility (replace some markup with semantically meaningful tags, aria)
- [ ] Testing (enzyme and jest)
