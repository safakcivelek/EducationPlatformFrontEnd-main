import { useEffect, useState } from 'react';
import { parseJwt } from '@/utils/parseJWT';

export const useTokenUser = () => {
    let user = null;
    if (typeof window !== "undefined") {
        const token = localStorage.getItem('accessToken');
        user = token ? parseJwt(token) : null;
    }
    const userId = user ? user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] : null;
    const userRole = user ? user["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] : null;
    const userName = user ? user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] : null;

    return { userId, userRole, userName };
}