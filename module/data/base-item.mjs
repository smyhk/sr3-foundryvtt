import Shadowrun3eDataModel from "./base-model.mjs";

export default class Shadowrun3eItemBase extends Shadowrun3eDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}