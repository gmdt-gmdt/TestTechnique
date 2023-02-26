# Psycle Research - Test Technique Frontend

## Présentation

L'outil est une application de suivi des entraînements des algorithme d'intelligence artificielle. Il est inspiré de notre outil de suivi de contrôle qualité.

Le but de l'exercice est d'implémenter le code client de l'application. Une API RESTFull au format JSON est mise à disposition dans le dossier `api`.

## Fonctionnalités

- Redirection vers le dernier apprentissage créé. <todo></todo>
- Changer d'apprentissage en cliquant sur un apprentissage dans la barre latérale droite <P1>.
- Liste de données en bas de l'écran<todo: à determiner>.
- Affichage et actualisation de la progression de l'apprentissage <P1-done>
- Affichage des logs d'un apprentissage en cours <P1-done>
- Affichage des résultats et recommendatations d'un apprentissage terminé<P2>
- Distinction des données de test et des données de validation<todo: à determiner>.

## Bonus

- Remontée des statistiques des données depuis le back<P1>.
- Routing : pouvoir accéder à un apprentissage directement depuis l'URL<P1>.
- Reccourci clavier pour suivant/précédent<P2>.
- Tests unitaires/composants/....
- Version responsive pour mobile (design non fourni).
- Lazy loading des images des données <todo: à determiner>
- Interdire le lancement d'un apprentissage si un apprentissage est en cours <P2>

## Contraintes techniques

- Framework et outillage obligatoire mais choix libre.
- Utiliser l'API.
- Qualité de rédaction du code.

## Démmarage de l'API

L'API mise à disposition peut être démarrée directement via python. Si vous n'êtes pas à l'aise avec python, un script pour Docker Compose est à disposition.

Positionnez-vous à la racine du dépôt et éxécutez les commandes suivantes pour construire puis démarrer le conteneur :

```
docker compose build
docker compose up -d
```

Le conteneur peut-être arrêté avec la commande `docker compose down`.

## Description de l'API

Un fichier `Insomnia.json` est disponible dans le dépôt. Plus d'informations sont disponible dans le répertoire [api](./api/README.md).
