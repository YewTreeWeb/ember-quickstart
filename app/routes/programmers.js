import Route from "@ember/routing/route";

export default class ProgrammersRoute extends Route {
  model() {
    return ["Alan Turing", "Steve Wazniak", "Wesbos"];
  }
}
