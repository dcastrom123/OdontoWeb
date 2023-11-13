
export interface Auth {
    uid?: string;
    email?: string;
    name?: string;
}

export interface Usuario {
    uid?: string;
    name?: string;
    email?: string;
}

export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    email?: string;
    token?: string;
    msg?: string;  
}