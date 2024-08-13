import { AuthModel } from "../models/authModel";

export class AuthService {
    public static authModel: AuthModel = { token: "", refreshToken: "", isAnonimo: true };

    /** Store the auth model, and set isAuthenticated to true.
     * @param newAuthModel 
     */
    public static setAuthModel(newAuthModel: AuthModel) {
        this.authModel = newAuthModel;
        localStorage.setItem('user', JSON.stringify({ ...newAuthModel, isAuthenticated: true }));
    }

    /** Validates if the user is authenticated.
     * @returns boolean
     */
    public static validateSession(): boolean{
        const user  = localStorage.getItem('user') as string;
        this.authModel  = JSON.parse(user) as AuthModel;
        return !!this.authModel?.token && !!this.authModel?.refreshToken;
    }
}