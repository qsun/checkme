# API endpoints

## POST /sessions

Post to `/sessions` would allocate a new session id to client. Client should store this session id indefinitely even across different browser sessions.


## POST /sessions/{session_id}/actions

With `session_id`, client should actively push actions to tracking server.


# Howto

```
cd api && go run main.go
cd js && python -mSimpleHTTPServer 8888
cd sample && python -mSimpleHTTPServer 8889
