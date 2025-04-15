import { MCPMessage, MCPResponse, GetSQLForSchemaRequest } from '../types/messages';
import { sqlQueries } from '../examples/sqlQueries';

export function handleGetSQLForSchema(message: GetSQLForSchemaRequest): MCPResponse {
  const schemaName = message.payload.schemaName;
  const queries = sqlQueries[schemaName];

  if (!queries) {
    return {
      id: message.id,
      type: 'GET_SQL_FOR_SCHEMA_RESPONSE',
      success: false,
      error: `Schema '${schemaName}' not found`
    };
  }

  return {
    id: message.id,
    type: 'GET_SQL_FOR_SCHEMA_RESPONSE',
    success: true,
    data: queries
  };
} 