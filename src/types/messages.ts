export interface MCPMessage {
  id: string;
  type: string;
  payload?: any;
}

export interface MCPResponse {
  id: string;
  type: string;
  success: boolean;
  data?: any;
  error?: string;
}

export interface GetSchemasRequest extends MCPMessage {
  type: 'GET_SCHEMAS';
}

export interface GetSQLForSchemaRequest extends MCPMessage {
  type: 'GET_SQL_FOR_SCHEMA';
  payload: {
    schemaName: string;
  };
} 