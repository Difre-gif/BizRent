export declare class LoginDto {
    email: string;
    password: string;
}
export declare class RefreshDto {
    refreshToken: string;
}
export declare enum RegisterRoleType {
    LANDLORD = "LANDLORD",
    TENANT = "TENANT"
}
export declare class RegisterDto {
    email: string;
    password: string;
    full_name: string;
    role_type: RegisterRoleType;
    organisation_name?: string;
}
