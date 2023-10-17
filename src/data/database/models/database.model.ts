import 'react-native-get-random-values';
import { ObjectSchema } from 'realm';
import { v4 as uuidv4 } from 'uuid';

export abstract class DataBaseModel {
  _id!: string;
  created_at!: Date;
  table!: string;
  schema!: ObjectSchema;

  constructor(schema: ObjectSchema, data?: Object) {
    this.schema = schema;
    this._id = uuidv4();
    if (data) {
      Object.assign(this, data);
    }
  }

  /**
   * Returns the Schema name.
   */
  getSchemaName(): string {
    return this.schema.name;
  }
}