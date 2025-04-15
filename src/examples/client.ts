import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:3000');

ws.on('open', () => {
  // Get all schemas
  ws.send(JSON.stringify({
    id: '1',
    type: 'GET_SCHEMAS'
  }));

  // Get SQL for a specific schema
  ws.send(JSON.stringify({
    id: '2',
    type: 'GET_SQL_FOR_SCHEMA',
    payload: {
      schemaName: 'blog'
    }
  }));
});

ws.on('message', (data) => {
  const response = JSON.parse(data.toString());
  console.log('Received:', JSON.stringify(response, null, 2));
}); 