import WebSocket from 'ws';
import { MCPMessage, MCPResponse } from './types/messages';
import { handleGetSchemas } from './handlers/schemaHandler';
import { handleGetSQLForSchema } from './handlers/sqlHandler';

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (data: string) => {
    try {
      const message: MCPMessage = JSON.parse(data);
      let response: MCPResponse;

      switch (message.type) {
        case 'GET_SCHEMAS':
          response = handleGetSchemas(message);
          break;

        case 'GET_SQL_FOR_SCHEMA':
          response = handleGetSQLForSchema(message as any);
          break;

        default:
          response = {
            id: message.id,
            type: 'ERROR',
            success: false,
            error: `Unknown message type: ${message.type}`
          };
      }

      ws.send(JSON.stringify(response));
    } catch (error) {
      const errorResponse: MCPResponse = {
        id: 'error',
        type: 'ERROR',
        success: false,
        error: `Failed to process message: ${error instanceof Error ? error.message : String(error)}`
      };
      ws.send(JSON.stringify(errorResponse));
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('MCP Server running on ws://localhost:3000'); 