# Evenements forms

![1-Home](https://user-images.githubusercontent.com/35977024/172328118-45967eea-82d1-4df1-9ec5-afae88c94d99.png)
![2-Sign_In](https://user-images.githubusercontent.com/35977024/172328120-bc69315f-a29b-43b0-ba77-0498476b7854.png)
![3-Sign_Up](https://user-images.githubusercontent.com/35977024/172328121-36dda52a-c43d-48cf-b7bd-8e09a2f95231.png)
![4-Sign_Up_1](https://user-images.githubusercontent.com/35977024/172328123-5b0c7e7e-c60c-4189-91a7-449432b01a45.png)
![5-Sign_Up_2](https://user-images.githubusercontent.com/35977024/172328125-a6abfe76-a01d-4846-8e4c-d0007dc400c3.png)

**Évènement et gestion des formulaires**

Évènement, state, props, navigation, hooks

**Présentation**

Les écrans de connexion et d’inscription sont souvent le 1er point de contact avec les utilisateurs des applications. Il est essentiel de 
soigner ces écrans, car ils donnent le ton de l’UX aux utilisateurs et influe leur décision de continuer ou non.

Dans cette partie, intégration de la maquette sur le flux de connexion et d’inscription à l'application.
Pour offrir la meilleure expérience d’utilisation des formulaires aux utilisateurs, création des feedbacks à chaque étape 
de la complétion du formulaire (succès, erreurs et warning).

**Dans ce mini projet**

Réalisation dans une application « expo ». Création de la logique de validation sans recourir à des librairies externes. Performances de l’application optimisées par 
l’utilisation de Hooks appropriés.

- Création écran d’accueil. L’utilisateur accèder à la page de connexion s’il dispose d’un compte ou à la page d’inscription sinon.
- Création de l’écran de connexion. Les champs sont validés au blur. Tous les champs sont obligatoires et l’adresse électronique doit être dans le bon format.
- Création de l’écran d’inscription. Les champs sont validés au blur. Tout les champs sont obligatoires. Le format de l’adresse doit être validé.
- Le champ mot de passe doit proposer l’option cachée et visible.
- Le champ civilité doit être une liste de sélection.
- Le champ date de naissance doit être un picker de date.
- A la validation du formulaire, affichage de l'écran de succès et les données du formulaire dans la console

-----

`npm install react-native-paper`  

>     module.exports = function(api) {
>       api.cache(true);
>       return {
>         presets: ['babel-preset-expo'],
>         env: {
>           production: {
>             plugins: ['react-native-paper/babel'],
>           },
>         },
>       };
>     };

`npm install @react-navigation/native @react-navigation/native-stack`  

`expo install react-native-screens react-native-safe-area-context`  

Les icônes : https://github.com/oblador/react-native-vector-icons

`npm i react-native-vector-icons`  

Choisir une icône : https://ionic.io/ionicons

Gérer les champs en dropdown : https://www.npmjs.com/package/react-native-paper-dropdown . Nécessite de mettre le tag &lt;Provider> autour pour fonctionner.

`npm i react-native-paper-dropdown`  

Gérer la validation des champs de formulaires : https://www.npmjs.com/package/validator

`npm i --save-dev @types/validator`  

Installer react Native Date Picker : https://www.npmjs.com/package/react-native-date-picker (fonctionne pas)  
fonctionne pas : `expo install react-native-date-picker expo-dev-client`  
fonctionne pas : `expo install @react-native-community/datetimepicker`  

https://www.npmjs.com/package/@react-native-community/datetimepicker  

`expo install react-native-modal-datetime-picker @react-native-community/datetimepicker`  

Pour le problème du focus sur un champ qui fait remonter les champs sur le fond d'écran, il faut ajouter le code suivant dans App.json :
>     {
>       "expo": {
>         ...
>         "android": {
>           ...
>           "softwareKeyboardLayoutMode": "pan"
>         },
>       }
>     }
