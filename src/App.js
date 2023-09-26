export class App {
  constructor({ state, dispatch, components }) {
    this.state = state;

    this.components = components
      .flat()
      .map((component) => component({ state, dispatch }));

    // this.components.forEach((component) => {
    //   if ("attached" in component) component.attached(state);
    // });
  }

  syncState(state) {
    this.state = state;
    this.components.forEach((component) => {
      component.syncState(state);
    });
  }
}
