import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
    url: 'http://localhost:8080/auth',
    realm: 'Franky',
    clientId: 'react-app'
});

export default keycloak;