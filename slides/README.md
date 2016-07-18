presentations
=============

Public Presentations

## to view the presentations

Node:

1.  install node (latest v4) and npm (if you know nothing about node https://github.com/creationix/nvm may be a good place to start installation)
2.  git clone this repo (git clone http://github.com/lloydbenson/presentations)
3.  cd presentations
4.  npm install
5.  npm start
6.  go to http://localhost:8082 and click on the valid html presentation

Docker:

1.  docker pull lloydbenson/presentations
2.  docker run -it --rm -p 8082:8082 lloydbenson/presentations
3.  go to http://localhost:8082 and click on the valid html presentation

Want to use the presentation layer but have your own slides?

```bash
docker run -it --rm -p 8082:8082 -v /path/to/your/html:/apps/presentations/html lloydbenson/presentations
```
or simply fork and hack away if you you prefer the node method.

Valid presentations are:

1.  useful ansible
2.  home pxe network
3.  ficion
4.  a hapi introduction
5.  the hapi ecosystem
6.  from dev to prod with node
7.  walmart node road
8.  jenkins (version 2 being worked on) 


Note: If you want to use this, you need to put a proper index.html and put in your specific slides you want to show there


