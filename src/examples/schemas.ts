export interface Schema {
  name: string;
  tables: Table[];
}

export interface Table {
  name: string;
  columns: Column[];
}

export interface Column {
  name: string;
  type: string;
  nullable: boolean;
}

export const exampleSchemas: Schema[] = [
  {
    name: 'blog',
    tables: [
      {
        name: 'posts',
        columns: [
          { name: 'id', type: 'uuid', nullable: false },
          { name: 'title', type: 'varchar(255)', nullable: false },
          { name: 'content', type: 'text', nullable: false },
          { name: 'created_at', type: 'timestamp', nullable: false }
        ]
      }
    ]
  },
  {
    name: 'users',
    tables: [
      {
        name: 'users',
        columns: [
          { name: 'id', type: 'uuid', nullable: false },
          { name: 'email', type: 'varchar(255)', nullable: false },
          { name: 'name', type: 'varchar(100)', nullable: false }
        ]
      }
    ]
  }
]; 