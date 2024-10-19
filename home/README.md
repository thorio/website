# home

A custom application dashboard for my homelab, designed to work in conjuction with [traefik][1] and [authelia][2].  
It reads the `Remote-User`, `Remote-Groups`, `Remote-Email` and `Remote-Name` headers and shows the user only the services they can access, based on the configuration.

[1]: https://github.com/traefik/traefik
[2]: https://github.com/authelia/authelia
