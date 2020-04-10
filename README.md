# I WANT TO EAT NOW

## Présentation

Cette application permet à l'utilisateur de trouver plusieurs Restaurants géolocalisés autour de lui et d'obtenir diverses informations sur eux tel que :
- Nom
- Adresse
- Photo StreetView
- Note moyenne des commentaires laissée par les clients
- Les commentaires laissés par les clients.

La carte se centre immédiatement sur l'utilisateur si ce dernier à autoriser a géolocalisation.
Sinon, elle est centrée par défaut sur Paris.

En cliquant sur la carte, l'utilisateur peut ajouter son restaurant. Grâce à l'API GÉOCODER de Google, les coordonnées GPS sont transformées directement en adresse. Il n'a alors qu'a renseigné le nom de son établissement pour le voir s'afficher sur la carte.

Libre à lui d'ajouter un commentaire également sur le restaurant de son choix

Enfin, un filtre lui permet de visualiser les restaurants dont les moyennes sont entre un minimum (0) et un maximum (5).

## Brief technique

cette application a été réalisé avec la librairie [React.js](https://fr.reactjs.org/).

les API utilisés pour cette applications sont:

- [Google Maps](https://developers.google.com/maps/documentation)
- [Google places](https://developers.google.com/places/web-service/intro?hl=fr)
- [Google geocoder](https://developers.google.com/maps/documentation/javascript/geocoding)

en espérant que ce projet vous plaise.

SEE YOU!


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).