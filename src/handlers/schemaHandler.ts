import { MCPMessage, MCPResponse } from '../types/messages';
import { exampleSchemas } from '../examples/schemas';

export function handleGetSchemas(message: MCPMessage): MCPResponse {
  return {
    id: message.id,
    type: 'GET_SCHEMAS_RESPONSE',
    success: true,
    data: exampleSchemas
  };
} 