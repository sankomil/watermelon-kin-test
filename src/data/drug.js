import { Model } from '@nozbe/watermelondb';
import { field, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Drug extends Model {
  static table = 'drugs';

  @field('note') note;
  @field('name') name;
  @field('strength') strength;
  @field('unit') unit;
  @readonly @date('created_at') createdAt;
}
