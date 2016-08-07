## Solution to Challenge 9

1. By using the `env_file: ./dev.conf` we can share variables (or have seperate files)

Note: This can be a list as well for multiple files (dev.conf, app.conf, etc)

## Challenge 10

Now we want our database to be persistent. Add a volume to the
_docker-compose.yml_ file and verify that rebuilding the container does not
remove that data.

_hint_ Look at the [docker-compose documentation](https://docs.docker.com/compose/compose-file/).  A local data directory is already created for you.

## Next Up: [Challenge 11](../challenge11/README.md)
