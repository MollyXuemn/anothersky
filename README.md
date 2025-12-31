# Run
```
uv run mkdocs build
uv run mkdocs serve 
```

# Deploy

```
python -m mkdocs build
podman build . -t mysite
```

### push to docker registry
```
docker push localhost/mysite:latest docker.io/mollyxmn/another-sky-website:v0.1 
```