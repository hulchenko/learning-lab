# Studio (tables in cloud) commands

1. First, log in into WunderGraph Cosmo

```
wgc auth login
```

2. Create an environment(namespace)

```
wgc namespace create <env-name>
```

3. Create federated graph, encapsulating subgraphs

```bash
wgc federated-graph create <federated-graph-name> \
    --namespace <env-name> \
    --routing-url <url-of-deployed-router>
```

4. Create remote subgraph ankor, insert into namespace(env)

```bash
wgc subgraph create <subgraph-name> \
    --namespace <env-name> \
    --routing-url <url-of-deployed-router>
```

5. Point local graphql schema to remote and push the update

```bash
wgc subgraph publish <subgraph-name> \
    --namespace <env-name> \
    --routing-url <url-of-deployed-router>
```

6. Generate router token to talk with control plane

```bash
wgc router token create <token-name> \
    --graph-name <federated-graph-name> \
    --namespace <env-name>
```

7. Delete environment/namespace

```bash
wgc namespace delete -f <env-name>
```

## Running Subgraphs Locally

You can run the subgraphs with the script as shown below

Posts runs on http://localhost:4001 and users runs on http://localhost:4002

```bash
sh ./start-subgraphs.sh
```

## Running Router Locally

You can run the router locally without a connection to the control plane by executing the following commands.

1. First cd into the router directory

```bash
cd router
```

2. Next generate the router config locally by running the compose command.

```bash
wgc router compose --input graph.localhost.yaml --out config.json
```

3. Finally run the router and head over to http://localhost:3002

```bash
docker run \
  --name cosmo-router \
  --rm \
  -p 3002:3002 \
  --add-host=host.docker.internal:host-gateway \
  --platform=linux/amd64 \
  -e pull=always \
  -e DEV_MODE=true \
  -e LISTEN_ADDR=0.0.0.0:3002 \
  -e EXECUTION_CONFIG_FILE_PATH="/config/config.json" \
  -v "$(pwd)/config.json:/config/config.json" \
  ghcr.io/wundergraph/cosmo/router:latest
```

```bash
docker run \
  --name cosmo-router \
  --rm \
  -p 3002:3002 \
  --add-host=host.docker.internal:host-gateway \
  --pull always \
  -e DEV_MODE=true \
  -e LISTEN_ADDR=0.0.0.0:3002 \
  -e GRAPH_API_TOKEN=<generated-router-token> \
  ghcr.io/wundergraph/cosmo/router:latest
```

4. To kill the process, run the following command.

```
pkill -f "npm run dev"
```

## WunderGraph Workflow

Client -> CLI -> Control Plane -> Router
