# 15-evenements-forms

**Évènement et gestion des formulaires**

Évènement, state, props, navigation, hooks

**Présentation**

Les écrans de connexion et d’inscription sont souvent le 1er point de contact avec les utilisateurs de vos applications. Il est essentiel de 
soigner ces écrans, car ils donnent le ton de l’UX aux utilisateurs et influe leur décision de continuer ou non.

Dans cette partie, vous devez intégrer la maquette sur le flux de connexion et d’inscription à votre application.
Pour offrir la meilleure expérience d’utilisation de vos formulaires à vos utilisateurs, vous devez leur faire des feedbacks à chaque étape 
de la complétion du formulaire (succès, erreurs et warning si nécessaire).

**Ce qu’il faut faire**

L’exercice doit être réalisé dans une application « expo ». Vous devez réaliser toute la logique de validation sans recourir à des librairies 
externes. Il est fortement recommandé de personnaliser le design des écrans pour 
pouvoir intégrer votre réalisation à votre portofolio. Les performances de l’application doivent être optimisées par 
l’utilisation de Hooks appropriés.

**Exercice 1**

Créer un écran d’accueil pour votre application. Depuis cet écran, l’utilisateur doit pouvoir accéder à la page de connexion s’il dispose 
d’un compte ou à la page d’inscription sinon.

**Exercice 2**

Créer l’écran de connexion. Les champs doivent être validés au blur. Tous les champs sont obligatoires et l’adresse électronique doit être 
dans le bon format.

**Exercice 3**

- Créer l’écran d’inscription. Les champs doivent être validés au 
blur. Tout les champs sont obligatoires. Le format de l’adresse 
doit être validé.
- Le champ mot de passe doit proposer l’option cachée et visible.
- Le champ civilité doit être une liste de sélection.
- Le champ date de naissance doit être un picker de date.

**Exercice 4**

A la validation du formulaire, afficher un écran de succès et les données du formulaire dans la console

![1-Home](https://user-images.githubusercontent.com/35977024/172328118-45967eea-82d1-4df1-9ec5-afae88c94d99.png)
![2-Sign_In](https://user-images.githubusercontent.com/35977024/172328120-bc69315f-a29b-43b0-ba77-0498476b7854.png)
![3-Sign_Up](https://user-images.githubusercontent.com/35977024/172328121-36dda52a-c43d-48cf-b7bd-8e09a2f95231.png)
![4-Sign_Up_1](https://user-images.githubusercontent.com/35977024/172328123-5b0c7e7e-c60c-4189-91a7-449432b01a45.png)
![5-Sign_Up_2](https://user-images.githubusercontent.com/35977024/172328125-a6abfe76-a01d-4846-8e4c-d0007dc400c3.png)

-----

npm install react-native-paper

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

$ npm install @react-navigation/native @react-navigation/native-stack

$ expo install react-native-screens react-native-safe-area-context

les icônes : https://github.com/oblador/react-native-vector-icons

$ npm i react-native-vector-icons

Choisir une icône : https://ionic.io/ionicons

Gérer les champs en dropdown

https://www.npmjs.com/package/react-native-paper-dropdown

npm i react-native-paper-dropdown

Gérer la validation des champs de formulaires : https://www.npmjs.com/package/validator

$ npm i --save-dev @types/validator

Installer react Native Date Picker : https://www.npmjs.com/package/react-native-date-picker

$ expo install react-native-date-picker expo-dev-client

$ expo install @react-native-community/datetimepicker
