import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'drugs',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'strength', type: 'number' },
        { name: 'unit', type: 'string' },
        { name: 'note', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
      ],
    }),
  ],
});
