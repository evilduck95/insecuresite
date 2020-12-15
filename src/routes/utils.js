import React, { Component } from 'react';
import { Route, Redirect, RouteChildrenProps, RouteProps } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import { KeycloakInstance } from 'keycloak-js';

export function PrivateRoute({
    component: Component,
    ...rest
}) {
    const { keycloak } = useKeycloak();
    console.log('Private component authenticated', keycloak.authenticated);

    return(
        <Route
        {...rest}
        render={(props) => keycloak?.authenticated ? (
            <Component 
            {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )}/>
    );
}