import { useEffect, useRef } from 'react';
import axios from 'axios';
import { useKeycloak } from '@react-keycloak/web';

export const useAxios = (baseUrl) => {

    const axiosInstance = useRef();
    const { keycloak, initialized } = useKeycloak();
    const kcToken = keycloak?.token ?? '';

    useEffect(() => {
    axiosInstance.current = axios.create({
            baseUrl,
            headers: {
                Authorization: initialized ? `Bearer ${kcToken}` : undefined,
            }
        });
    

        return () => {
            axiosInstance.current = undefined;
        }
    }, [baseUrl, initialized, kcToken]);

    return axiosInstance;

};